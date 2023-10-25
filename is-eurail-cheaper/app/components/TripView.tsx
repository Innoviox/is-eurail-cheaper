import React, {Dispatch} from "react";
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
import airplane from "../img/airplane.png";
import train from "../img/train.png";
import bus from "../img/bus.png";
import boat from "../img/boat.png";
import tram from "../img/tram.png";
import colors from "../util/colors.ts";
import { LatLng, Location, Result, Endpoint, EndpointResult } from '../util/types.ts';
import { increaseDate, toUSD, fromUSD } from '../util/utilities.ts';
import { CurrencyContext } from './modal/Settings.tsx';

const PRICE_API = (endpoint: string, origin: string, destination: string, date: number) => `${process.env.NEXT_PUBLIC_API_URL}/${endpoint}?origin=${origin}&destination=${destination}&date=${date}`;

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

const sentinel = -100;

let everAnimated = false;


export default function TripView({ addCoords, weeks, addStops, setZoomTo }:
                                 { addCoords: (lat: number, lng: number, idx: number | undefined) => void,
                                   weeks: number,
                                   addStops: (newStops: LatLng[][][], set: number | number[] | undefined) => void,
                                   setZoomTo: (n: number) => void}) {
    const currency = useContext(CurrencyContext);

    const city = (idx: number) => cities[idx][0];

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

    const endpoints: {db: Endpoint, eurail: Endpoint} = {"db": [db, setDb, db_image], "eurail": [eurail, setEurail, eurail_image]};

    function sortPrices(n: Result[]) {
        return n.sort((a, b) => a.price === b.price ? a.length - b.length : a.price - b.price);
    }

    // todo Stop type
    function extractPrice(trips: EndpointResult[]) {
        return sortPrices(trips.map(i => {
            return {
                price: toUSD(parseInt(i.price), i.currency),
                length: parseInt(i.length),
                legs: i.legs === undefined ? undefined : i.legs.map((leg: {location: Location}[]) => leg.map(stop =>
                                                                    { return { lat: stop.location.latitude, lng: stop.location.longitude }; })),
                departure: new Date(i.departure)
            };
        }).slice(0, 5));
    }

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
            set.forEach(i => n[i] = price[i]);
        } else {
            n[set] = price;
        }

        setlst(n);
    }

    async function onSearchSubmit(formData: FormData, location: Location, idx: number | undefined = undefined) {
        /// i guess we can't have nice things
        let fromCity, fromCityId;
        if (idx === undefined) {
            fromCity = cities.length === 0 ? undefined : cities[cities.length - 1][0];
            fromCityId = cities.length === 0 ? undefined : cities[cities.length - 1][1];
        } else {
            fromCity = idx === 0 ? undefined : cities[idx - 1][0];
            fromCityId = idx === 0 ? undefined : cities[idx - 1][1];
        }
        let toCity = formData.get("toCity") as string;
        let toCityId = formData.get("toCityId") as string;

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
        add(cities, setCities, [toCity, toCityId], idx);

        if (fromCity !== undefined) {
            if (idx === undefined) {
                await calculate([idx], fromCity, toCity);
            } else {
                await calculate([idx, idx + 1], fromCity, toCity);
                // if (idx < cities.length - 1) {
                //     setTimeout(() => calculate(idx + 1, toCity, cities[idx + 1][0]), 1000);
                // }
            }
        }
    }

    async function calculate(idxs: number[] | undefined[], fromCity: string, toCity: string) {
        console.log("CALCULATING", idxs, fromCity, toCity);

        let sub1 = idxs[0] === undefined ? undefined : idxs.map(i => i! - 1);
        let startLength = idxs[0] === undefined ? [db.length] : idxs.map(i => i! - 1);
        let m = (a: any) => idxs[0] === undefined ? a : idxs.map(_ => a); // todo rename
        add(db, setDb, m([{ price: sentinel, length: sentinel }]), sub1); // start loading wheels
        add(eurail, setEurail, m([{ price: sentinel, length: sentinel }]), sub1);
        add(open, setOpen, m(true), sub1);
        add(choices, setChoices, m(""), sub1);
        if (sub1 !== undefined) {
            addStops(m([]), sub1);
        }

        let endpoint_adds: Result[][][] = Object.entries(endpoints).map(_ => []);
        let stop_adds: LatLng[][][] = idxs.map(_ => []);

        for (let i = 0; i < idxs.length; i++) {
            let idx = idxs[i];
            // let startLength = idx === undefined ? db.length : idx - 1; // update this idx when it's done
            // let sub1 = idx === undefined ? idx : idx - 1;

            setSearchEnabled(false);
            let addedStops = false;
            let d = increaseDate(new Date(), weeks, 8);
            let values = await Promise.all(Object.entries(endpoints).map(async ([key, [lst, setlst, _img]], endpoint_num) => {
                await fetch(PRICE_API(key, fromCity, toCity, d), {
                    method: 'GET'
                }).then(async response => {
                    if (response.ok) {
                        let data = await response.json();
                        console.log("GOT DATA FOR", key, i);
                        let price = extractPrice(data.journeys);
                        // add(lst, setlst, price, startLength);
                        endpoint_adds[endpoint_num].push(price);

                        if (!addedStops && price[0].legs !== undefined) {
                            console.log("adding stops!");
                            // let l = price[0].legs; // typescript is dumb
                            // addStops(price[0].legs, sub1);
                            stop_adds[i] = price[0].legs;
                            // setTimeout(() => addStops(l, sub1), 1000);
                            addedStops = true;
                        }
                    } else {
                        console.log(`response not ok - price ${key}`);
                    }
                    setSearchEnabled(true); // probably fine? todo
                });
            }));
            console.log("PROMISE.ALL RESOLVED");

            setSearchEnabled(true);
        }

        console.log(endpoint_adds, stop_adds);

        // todo this is a mess
        Object.entries(endpoints).map(async ([key, [lst, setlst, _img]], endpoint_num) => {
            console.log("adding various things!", endpoint_adds[endpoint_num].length, sub1, startLength);
            add(lst, setlst, endpoint_adds[endpoint_num], startLength);
            addStops(stop_adds, startLength);
        });
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
                {cities.map((city: [string, string], idx: number) => (
                    <div key={city[0]}>
                        {renderPrices(idx)}
                    </div>
                ))}
            </div>
        )
    }

    function renderPrices(idx: number) {
        if (idx < cities.length - 1) {
            return (
                <div>
                    <div className="prices-container">
                        {renderUpper(idx)}
                        <div className={"lower " + (open[idx] ? "lower-open" : "lower-closed")}>
                            <div className="lower-inner">
                                {Object.entries(endpoints).map(([key, [lst, setlst, img]]) => (
                                    <div key={key} className="level">
                                        <div className="level-left">
                                            <div className="level-item">
                                                <div>
                                                    {/*// todo do i need choices? onClick={() => setChoice(idx, key)}*/}
                                                    <PriceDisplay img={img}>
                                                        {lst[idx].length === 0 || lst[idx][0].price === sentinel ?
                                                            <button className="button is-loading is-ghost">Loading</button> :
                                                            <Picker data={lst[idx]} parentOpen={open[idx]}
                                                                    setFirst={(n) => setFirst(lst, setlst, idx, n)}
                                                                    setStops={(n) => {
                                                                        let l = lst[idx][n].legs;
                                                                        if (l !== undefined) {
                                                                            addStops([l], idx);
                                                                        }
                                                                    }}/>
                                                        }
                                                    </PriceDisplay>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else if (idx === cities.length - 1) {
            return (
                <div className="level prices-container">
                    <div className="level-left">
                        <div className="level-item">
                            <div>
                                <FontAwesomeIcon icon={faCity} />
                            </div>
                        </div>
                        <div className="level-item">
                            <div>
                                <City name={city(idx)} color={colors[idx]} onSearchSubmit={(f, l) => onSearchSubmit(f, l, idx)}/>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    function setFirst(data: any[], setlst: Dispatch<any>, idx: number, n: number) {
        let lst = [...data[idx]];
        let temp = lst[n]; // store target
        lst.splice(n, 1); // remove target number
        lst = sortPrices(lst); // sort
        lst.unshift(temp); // put target at front
        add(data, setlst, lst, idx);
    }

    function renderUpper(idx: number) {
        return  (
            <div className="upper level"> {/* onClick={() => toggleOpen(idx)}> */}
                <div className="level-left">
                    <div className="level-item">
                        <div>
                            <FontAwesomeIcon icon={faRoute} />
                        </div>
                    </div>
                    <div className="level-item">
                        <div>
                            <City name={city(idx)} color={colors[idx]} onSearchSubmit={(f, l) => onSearchSubmit(f, l, idx)} />
                        </div>
                    </div>
                    <div className="level-item">
                        <div>
                            <FontAwesomeIcon icon={faArrowRightLong}/>
                        </div>
                    </div>
                    <div className="level-item">
                        <div>
                            <City name={city(idx + 1)} color={colors[idx + 1]} onSearchSubmit={(f, l) => onSearchSubmit(f, l, idx + 1)} />
                        </div>
                    </div>
                </div>
                <div className="level-right">
                    <div className="tags">
                        <div className="tag action-tag is-danger">
                            <FontAwesomeIcon icon={faTrashCan} />
                        </div>
                        <div className="tag action-tag is-link" onClick={() => setZoomTo(idx)}>
                            <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
                        </div>
                    </div>
                </div>
            </div>
        );
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
    )
}