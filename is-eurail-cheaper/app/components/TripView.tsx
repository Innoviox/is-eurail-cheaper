import React, { Dispatch } from "react";
import { useState, useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTicket,
    faCaretLeft,
    faCaretRight,
    faPowerOff,
    faRotateLeft,
    faRotateRight
} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import eurail_image from "../img/eurail.png";
import db_image from "../img/db.png";
import SearchBar from './SearchBar.tsx';
import PriceDisplay from "./PriceDisplay.tsx";
import Background from './Background.tsx';
import Trip from './Trip.tsx';
import airplane from "../img/airplane.png";
import train from "../img/train.png";
import bus from "../img/bus.png";
import boat from "../img/boat.png";
import tram from "../img/tram.png";
import { Location, Result, ICity } from '../util/types.ts';
import { fromUSD } from '../util/utilities.ts';
import { SettingsContext, ImposedCityContext } from '../util/contexts.ts';
import Reset from "./modal/Reset.tsx";

// todo currency, class
// https://www.eurail.com/en/eurail-passes/global-pass
// todo multimonth trips
const eurailprices = new Map<number, number>([
    [4, 211],
    [5, 243],
    [7, 288],
    [10, 344],
    [15, 380],
    [22, 445],
    [31, 576]
]);

const sentinel = -100; // todo do this differently (classic)
let everAnimated = false;


export default function TripView() {
    const settings = useContext(SettingsContext);
    const [imposedCity, setImposedCity]: [string[], Dispatch<any>] = useState([]);

    let [data, setData] = useState(new Map<string, number[]>);
    let addData = (key: string, value: number[]) => setData(new Map(data).set(key, value));

    const city = (idx: number) => idx >= cities.length ? undefined : cities[idx];

    // cities is a list of [string, id]; can't be a map cause we can have multiple instances of same city
    let [cities, setCities]: [ICity[], Dispatch<any>] = useState([]);
    let [citiesHistory, setCitiesHistory]: [ICity[][], Dispatch<any>] = useState([[]]);
    let [citiesHistoryIdx, setCitiesHistoryIdx]: [number, Dispatch<any>] = useState(0);

    let [searchEnabled, setSearchEnabled] = useState(true);
    let [animatingSearch, setAnimatingSearch] = useState(false);
    let [showFullEuro, setShowFullEuro] = useState(true);
    let [ending, setEnding] = useState(false);

    let [resetVisible, setResetVisible] = useState(false);

    function reset() {
        setCities([]);
        setCitiesHistory([[]]);
        setCitiesHistoryIdx(0);
        setData(new Map<string, number[]>);
    }

    function calculateEurailPrice() {
        for (const [days, price] of eurailprices.entries()) {
            if (days >= cities.length) {
                return fromUSD(price, settings.currency);
            }
        }
        return 0; // todo ??
    }

    function updateCities(newCities: ICity[]) {
        setCities(newCities);
        setCitiesHistory(citiesHistory.slice(0, citiesHistoryIdx + 1).concat([newCities]));
        setCitiesHistoryIdx(citiesHistoryIdx + 1);
    }

    function setHistory(idx: number) {
        setCities(citiesHistory[idx]);
        setCitiesHistoryIdx(idx);
    }

    function undo() {
        if (canUndo()) {
            setHistory(citiesHistoryIdx - 1);
        }
    }

    function redo() {
        if (canRedo()) {
            setHistory(citiesHistoryIdx + 1);
        }
    }

    function canUndo() {
        return searchEnabled && citiesHistoryIdx > 0;
    }

    function canRedo() {
        return searchEnabled && citiesHistoryIdx < citiesHistory.length - 1;
    }

    function addCity(price: any, set: number | undefined = undefined) {
        let n = [...cities];

        if (set === undefined) {
            n.push(price);
        } else {
            n[set] = price;
        }

        updateCities(n);
    }

    function deleteCity(remove: number) {
        let n = cities.filter((_: any, i: number) => i !== remove);
        updateCities(n);
    }

    function onSearchSubmit(formData: FormData, location: Location, idx: number | undefined = undefined) {
        /// i guess we can't have nice things
        let toCity, toCityId;
        toCity = formData.get("toCity") as string;
        toCityId = formData.get("toCityId") as string;
        let city: ICity = { name: toCity, id: toCityId, location: { lat: location.latitude, lng: location.longitude } };

        // todo check if same as previous/next

        if (!everAnimated) {
            setAnimatingSearch(true);
            setEnding(true);
            setTimeout(() => setAnimatingSearch(false), 500); // todo interact with css variable?
            everAnimated = true;
        }

        addCity(city, idx);
    }

    function renderTrip(): React.JSX.Element {
        return (
            <div>
                {cities.map((fromCity: ICity, idx: number) => (
                    <Trip key={idx} fromCity={fromCity} toCity={city(idx + 1)} setSearchEnabled={setSearchEnabled} setImposedCity={setImposedCity} onSearchSubmit={onSearchSubmit} idx={idx} deleteCity={deleteCity} addData={addData}  />
                ))}
            </div>
        )
    }

    function renderTotals() {
        let sumdb = 0;
        let sumeu = 0;

        cities.forEach((fromCity: ICity, idx: number) => {
            if (idx === cities.length - 1) {
                return;
            }

            let toCity = city(idx + 1)!;
            let key = fromCity.name + toCity.name;
            let price = data.get(key);
            if (price === undefined) {
                return;
            }
            sumdb += price[0] === sentinel ? 0 : price[0];
            sumeu += price[1] === sentinel ? 0 : price[1];
        });

        let euprice = calculateEurailPrice();

        return (
            <div id="total">
                <div className="content">
                    <center>
                        <h3>Price Totals</h3>
                    </center>
                </div>
                <div className="level">
                    <div className="level-left">
                        <div className="level-item">
                            <div>
                                <PriceDisplay img={db_image}>
                                    <div className="flip-parent" key="db">
                                        <div className="tags has-addons">
                                            <div className="tag is-info price-picker-tag">
                                                { settings.currency.split(" ")[0] }
                                            </div>
                                            <div className={"tag price-picker-tag price "}>
                                                {sumdb}
                                            </div>
                                        </div>
                                    </div>
                                </PriceDisplay>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="level">
                    <div className="level-left">
                        <div className="level-item">
                            <div>
                                <PriceDisplay img={eurail_image}>
                                    <div className="flip-parent" key="eu">
                                        <div className="tags has-addons price-picker" onClick={() => setShowFullEuro(!showFullEuro)}>
                                            <div className="tag is-info price-picker-tag">
                                                { settings.currency.split(" ")[0] }
                                            </div>
                                            {showFullEuro ? <>
                                                <div className={"tag price-picker-tag price "}>
                                                    {sumeu}
                                                </div>
                                                <div className="tag is-info price-picker-tag">
                                                    <FontAwesomeIcon icon={faTicket} />
                                                </div>
                                                <div className={"tag price-picker-tag price"}>
                                                    {euprice}
                                                </div>
                                                <div className={"tag price-picker-tag is-link"}>
                                                    <FontAwesomeIcon icon={faCaretLeft} />
                                                </div>
                                            </> : <>
                                                <div className={"tag price-picker-tag price "}>
                                                    {sumeu + euprice}
                                                </div>
                                                <div className={"tag price-picker-tag is-link "}>
                                                    <FontAwesomeIcon icon={faCaretRight} />
                                                </div>
                                            </>}
                                        </div>
                                    </div>
                                </PriceDisplay>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <ImposedCityContext.Provider value={imposedCity}>
            <div id="trip-view">
                <Background ending={ending}>
                    <Image src={airplane} alt="plane" />
                    <Image src={train} alt="train" />
                    <Image src={bus} alt="bus" />
                    <Image src={boat} alt="boat" />
                    <Image src={tram} alt="tram" />
                </Background>
                {!animatingSearch && (everAnimated || cities.length > 0) ?
                    <div className="above">
                        <SearchBar onSearchSubmit={onSearchSubmit} enabled={searchEnabled} />
                        <div className="divider"></div>
                        <div className="fade-in">
                            <div className="global-actions">
                                <div className="buttons has-addons">
                                    <button className="button action-button" onClick={undo} disabled={!canUndo()}>
                                        <FontAwesomeIcon icon={faRotateLeft} className="filter-undo" />
                                    </button>
                                    <button className="button action-button" onClick={redo} disabled={!canRedo()}>
                                        <FontAwesomeIcon icon={faRotateRight} className="filter-undo" />
                                    </button>
                                    <button className="button action-button is-danger" onClick={() => setResetVisible(true)}>
                                        <FontAwesomeIcon icon={faPowerOff} />
                                    </button>
                                </div>
                            </div>
                            <br />
                            <div id="trips-box">
                                {renderTrip()}
                            </div>
                            <div className="divider"></div>
                            <div id="price-totals">
                                {renderTotals()}
                            </div>
                        </div>
                        <Reset visible={resetVisible} setVisible={setResetVisible} reset={reset} />
                    </div>
                    :
                    <div className="floating">
                        <div id="alone-text" className={"content " + (animatingSearch ? "fade-out" : "")}>
                            <h1>Explore Your World</h1>
                        </div>
                        <div id="alone-searchbar" className={animatingSearch ? "animating-search-bar" : ""}>
                            <SearchBar onSearchSubmit={onSearchSubmit} enabled={searchEnabled}/>
                        </div>
                    </div>
                }
            </div>
        </ImposedCityContext.Provider>
    )
}