import React, { Dispatch } from "react";
import { useState, useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTicket,
    faCaretLeft,
    faCaretRight,
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
import { CurrencyContext, ImposedCityContext } from '../util/contexts.ts';

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


export default function TripView({ weeks }:
                                 { weeks: number }
                                 ) {
    const currency = useContext(CurrencyContext);
    const [imposedCity, setImposedCity]: [string[], Dispatch<any>] = useState([]);

    let [data, setData] = useState(new Map<string, number[]>);
    let addData = (key: string, value: number[]) => setData(new Map(data).set(key, value));

    const city = (idx: number) => idx >= cities.length ? undefined : cities[idx];

    // cities is a list of [string, id]; can't be a map cause we can have multiple instances of same city
    let [cities, setCities]: [ICity[], Dispatch<any>] = useState([]);

    let [searchEnabled, setSearchEnabled] = useState(true);
    let [animatingSearch, setAnimatingSearch] = useState(false);
    let [showFullEuro, setShowFullEuro] = useState(true);
    let [ending, setEnding] = useState(false);

    function calculateEurailPrice() {
        for (const [days, price] of eurailprices.entries()) {
            if (days >= cities.length) {
                return fromUSD(price, currency);
            }
        }
        return 0; // todo ??
    }

    // todo do this better
    // set = -1 => set list to price
    // set is list => set each index in set to its corresponding index in price
    function add(lst: any[], setlst: Dispatch<any>, price: any, set: number | undefined | number[] = undefined) {
        let n = [...lst];

        console.log("ADDING", set, price);

        if (set === -1) {
            n = price;
        } else if (set === undefined) {
            n.push(price);
        } else if (Array.isArray(set)) { // https://stackoverflow.com/questions/23130292/test-for-array-of-string-type-in-typescript
            set.forEach((i, idx) => n[i] = price[idx]);
        } else {
            n[set] = price;
        }

        setlst(n);
        return n;
    }

    function remove(lst: any[], setlst: Dispatch<any>, remove: number) {
        let newlst = lst.filter((_: any, i: number) => i !== remove);
        console.log(lst, newlst, remove);
        setlst(newlst);
        return newlst;
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

        add(cities, setCities, city, idx);
    }

    function renderTrip(): React.JSX.Element {
        // data = Array(1000).map(_ => [0, 0]);
        return (
            <div>
                {cities.map((fromCity: ICity, idx: number) => (
                    <Trip key={idx} fromCity={fromCity} toCity={city(idx + 1)} weeks={weeks} setSearchEnabled={setSearchEnabled} setImposedCity={setImposedCity} onSearchSubmit={onSearchSubmit} idx={idx} deleteCity={deleteCity} addData={addData}  />
                ))}
            </div>
        )
    }

    async function deleteCity(idx: number) {
        console.log("DELETING", idx);
        remove(cities, setCities, idx);
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
                                                { currency.split(" ")[0] }
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
                                                { currency.split(" ")[0] }
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
                            <div id="trips-box">
                                {renderTrip()}
                            </div>
                            <div className="divider"></div>
                            <div id="price-totals">
                                {renderTotals()}
                            </div>
                        </div>
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