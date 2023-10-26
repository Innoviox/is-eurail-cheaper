import React, {Dispatch, SetStateAction, useEffect} from "react";
import { useState, useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRightLong,
    faCity,
    faDollarSign,
    faTicket,
    faRoute,
    faToggleOn,
    faToggleOff,
    faCaretLeft,
    faCaretRight,
    faTrashCan,
    faMagnifyingGlassPlus, faPlus
} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import eurail_image from "../img/eurail.png";
import db_image from "../img/db.png";
import SearchBar from './SearchBar.tsx';
import City from './City.tsx';
import Picker from './Picker.tsx';
import PriceDisplay from "./PriceDisplay.tsx";
import Background from './Background.tsx';
import Trip from './Trip.tsx';
import airplane from "../img/airplane.png";
import train from "../img/train.png";
import bus from "../img/bus.png";
import boat from "../img/boat.png";
import tram from "../img/tram.png";
import colors from "../util/colors.ts";
import { LatLng, Location, Result, Endpoint, EndpointResult } from '../util/types.ts';
import { increaseDate, toUSD, fromUSD } from '../util/utilities.ts';
import { CurrencyContext, ImposedCityContext, StopsContext, CoordsContext } from '../util/contexts.ts';


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


export default function TripView({ addCoords, weeks, addStops, setZoomTo, setStops, setCoords }:
                                 { addCoords: (lat: number, lng: number, idx: number | undefined) => void,
                                   weeks: number,
                                   addStops: (newStops: LatLng[][][], set: number | number[] | undefined) => void,
                                   setZoomTo: (n: number) => void
                                   setStops: Dispatch<any>,
                                   setCoords: Dispatch<any> }
                                 ) {
    const currency = useContext(CurrencyContext);
    const stops = useContext(StopsContext);
    const coords = useContext(CoordsContext);
    const [imposedCity, setImposedCity]: [string[], Dispatch<any>] = useState([]);

    const city = (idx: number) => idx >= cities.length ? undefined : cities[idx][0];

    // cities is a list of [string, id]; can't be a map cause we can have multiple instances of same city
    let [cities, setCities]: [[string, string][], Dispatch<any>] = useState([]);
    let [db, setDb] : [Result[][], Dispatch<any>] = useState([]);
    let [eurail, setEurail] : [Result[][], Dispatch<any>] = useState([]);
    let [open, setOpen]: [boolean[], Dispatch<any>] = useState([]);
    let [choices, setChoices]: [string[], Dispatch<any>] = useState([]);

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
        let fromCity, fromCityId, toCity, toCityId;
        toCity = formData.get("toCity") as string;
        toCityId = formData.get("toCityId") as string;
        let calc1 = false;
        if (idx === undefined) {
            fromCity = cities.length === 0 ? undefined : cities[cities.length - 1][0];
            fromCityId = cities.length === 0 ? undefined : cities[cities.length - 1][1];
        } else if (idx === 0) {
            fromCity = formData.get("toCity") as string;
            fromCityId = formData.get("toCityId") as string;
            toCity = cities.length === 1 ? undefined : cities[1][0];
            toCityId = cities.length === 1 ? undefined : cities[1][1];
            calc1 = true;
        } else {
            if (idx === cities.length - 1) {
                calc1 = true;
            }
            fromCity = cities[idx - 1][0];
            fromCityId =  cities[idx - 1][1];
        }

        console.log(idx, fromCity, toCity, calc1);

        if (toCityId === fromCityId) { // todo give message
            console.log("returning at check");
            return;
        }

        if (!everAnimated) {
            setAnimatingSearch(true);
            setEnding(true);
            setTimeout(() => setAnimatingSearch(false), 500); // todo interact with css variable?
            everAnimated = true;
        }

        addCoords(location.latitude, location.longitude, idx);
        if (idx === 0) {
            add(cities, setCities, [fromCity, fromCityId], idx);
        } else {
            add(cities, setCities, [toCity, toCityId], idx);
        }
    }

    function sumArr(arr: Result[][]) {
        return arr.length === 0 ? 0 : arr.map(i => (i.length === 0 || i[0].price === sentinel) ? 0 : i[0].price).reduce((a, b) => a + b, 0);
    }

    function toggleOpen(idx: number) {
        add(open, setOpen, !open[idx], idx);
    }

    function renderTrip(): React.JSX.Element {
        return (
            <div>
                {cities.map((fromCity: [string, string], idx: number) => (
                    <Trip key={idx} fromCity={fromCity[0]} toCity={city(idx + 1)} weeks={weeks} setSearchEnabled={setSearchEnabled} setImposedCity={setImposedCity} onSearchSubmit={onSearchSubmit} idx={idx} deleteCity={deleteCity}/>
                ))}
            </div>
        )
    }

    async function deleteCity(idx: number) {
        console.log("DELETING", idx);
        remove(cities, setCities, idx);
    }

    function renderTotals() {
        // let classes: string[];
        let sumdb = sumArr(db);
        let sumeu = sumArr(eurail);
        let euprice = calculateEurailPrice();
        // if (sumdb < sumeu + euprice) {
        //     classes = ["is-success", "is-danger"];
        // } else {
        //     classes = ["is-danger", "is-success"];
        // }
        // classes.push(sumeu <= sumdb ? "is-success" : "is-danger");

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
                {!animatingSearch && cities.length > 0 ?
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