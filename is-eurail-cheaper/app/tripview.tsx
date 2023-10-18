import React, {FormEvent, Dispatch} from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrain, faBus, faArrowLeft, faArrowRightLong, faCity, faDollarSign, faClock, faTicket, faRoute, faEquals} from '@fortawesome/free-solid-svg-icons';
import Image, {StaticImageData} from 'next/image';
import eurail_image from "./img/eurail.png";
import db_image from "./img/db.png";
import SearchBar from './searchbar';
import City from './city';
import Picker from './picker';
import PriceDisplay from "./PriceDisplay";
import Background from './Background';
import airplane from "./img/airplane.png";
import train from "./img/train.png";
import bus from "./img/bus.png";
import boat from "./img/boat.png";
import tram from "./img/tram.png";
import colors from "./colors";

const PRICE_API = (endpoint: string, origin: string, destination: string) => `http://localhost:2424/price/${endpoint}?origin=${origin}&destination=${destination}`;

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

type Location = { longitude: number, latitude: number };
type Endpoint = [[number, number][][], Dispatch<any>, StaticImageData]

export default function TripView({addCoords}:
                                 {addCoords: (lat: number, lng: number) => void}) {
    const city = (idx: number) => cities[idx][0];

    // cities is a list of [string, id]; can't be a map cause we can have multiple instances of same city
    let [cities, setCities]: [[string, string][], Dispatch<any>] = useState([]);
    let [db, setDb] : [[number, number][][], Dispatch<any>] = useState([]);
    let [eurail, setEurail] : [[number, number][][], Dispatch<any>] = useState([]);
    let [open, setOpen]: [boolean[], Dispatch<any>] = useState([]);
    let [choices, setChoices]: [string[], Dispatch<any>] = useState([]);

    let [searchEnabled, setSearchEnabled] = useState(true);
    let [animatingSearch, setAnimatingSearch] = useState(false);
    let [showFullEuro, setShowFullEuro] = useState(true);
    let [ending, setEnding] = useState(false);

    const endpoints: {db: Endpoint, eurail: Endpoint} = {"db": [db, setDb, db_image], "eurail": [eurail, setEurail, eurail_image]};

    function sortPrices(n: number[][]) {
        return n.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
    }

    function extractPrice(trips: Array<{ price: string, length: string }>) {
        return sortPrices(trips.map(i => [parseInt(i.price), parseInt(i.length)]).slice(0, 5));
    }

    function calculateEurailPrice() {
        for (const [days, price] of eurailprices.entries()) {
            if (days >= cities.length) {
                return price;
            }
        }
        return 0; // todo ??
    }

    // todo do this better
    // set = -1 => set list to price
    function add(lst: any[], setlst: Dispatch<any>, price: any, set: number | undefined = undefined) {
        let n = [...lst];

        if (set === -1) {
            n = price;
        } else if (set === undefined) {
            n.push(price);
        } else {
            n[set] = price;
        }

        setlst(n);
    }

    async function onSearchSubmit(formData: FormData, location: Location) {
        /// i guess we can't have nice things
        let fromCity = cities.length === 0 ? undefined : cities[cities.length - 1][0];
        let fromCityId = cities.length === 0 ? undefined : cities[cities.length - 1][1];
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

        addCoords(location.latitude, location.longitude);

        add(cities, setCities, [toCity, toCityId]);

        if (fromCity !== undefined) {
            let startLength = db.length; // update this idx when it's done

            add(db, setDb, [[sentinel, sentinel]]); // start loading wheels
            add(eurail, setEurail, [[sentinel, sentinel]]);
            add(open, setOpen, true);
            add(choices, setChoices, "");

            setSearchEnabled(false);
            for (const [key, [lst, setlst, img]] of Object.entries(endpoints)) {
                fetch(PRICE_API(key, fromCity, toCity), {
                    method: 'GET'
                }).then(async response => {
                    if (response.ok) {
                        let data = await response.json();
                        let price = extractPrice(data.journeys);
                        console.log(data, price);
                        add(lst, setlst, price, startLength);
                    } else {
                        console.log(`response not ok - price ${key}`);
                    }
                    setSearchEnabled(true); // probably fine? todo
                });
            }
            setSearchEnabled(true);
        }
    }

    async function updateCoords(toCityId: string) {
        const response = await fetch(`http://127.0.0.1:8000/api/station?place_id=${toCityId}`, {
            method: 'GET'
        });

        if (response.ok) {
            let data = await response.json();
            addCoords(data.coords.lat, data.coords.lng);
        } else {
            console.log("response not ok - update-coords")
        }
    }

    function sumArr(arr: Array<any>) {
        return arr.length === 0 ? 0 : arr.map(i => i.length === 0 || i[0][0] === sentinel ? 0 : i[0][0]).reduce((a, b) => a + b, 0);
    }

    function toggleOpen(idx: number) {
        add(open, setOpen, !open[idx], idx);
    }

    function setChoice(idx: number, choice: string) {
        // console.log("set choice", choices);
        // add("choices", choice, idx);
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
                                                        {lst[idx].length === 0 || lst[idx][0][0] === sentinel ?
                                                            <button className="button is-loading is-ghost">Loading</button> :
                                                            <Picker data={lst[idx]} parentOpen={open[idx]} setFirst={(n) => setFirst(lst, setlst, idx, n)}/>
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
                <div className="level">
                    <div className="level-left">
                        <div className="level-item">
                            <div>
                                <FontAwesomeIcon icon={faCity} />
                            </div>
                        </div>
                        <div className="level-item">
                            <div>
                                <City name={city(idx)} color={colors[idx]} />
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
            <div className="upper level" onClick={() => toggleOpen(idx)}>
                <div className="level-left">
                    <div className="level-item">
                        <div>
                            <FontAwesomeIcon icon={faRoute} />
                        </div>
                    </div>
                    <div className="level-item">
                        <div>
                            <City name={city(idx)} color={colors[idx]} />
                        </div>
                    </div>
                    <div className="level-item">
                        <div>
                            <FontAwesomeIcon icon={faArrowRightLong}/>
                        </div>
                    </div>
                    <div className="level-item">
                        <div>
                            <City name={city(idx + 1)} color={colors[idx + 1]} />
                        </div>
                    </div>
                </div>

                <div className="level-right">
                    {choices[idx] !== "" ?
                        <div>
                            <div>
                                <div className="field is-grouped price-grouping">
                                    <Image src={db_image} className="logo" alt="DB" />
                                    {db[idx]}
                                </div>
                            </div>
                        </div>
                    : <></>}
                </div>
            </div>
        );
    }

    function renderTotals() {
        let classes = [];
        let sumdb = sumArr(db);
        let sumeu = sumArr(eurail);
        let euprice = calculateEurailPrice();
        if (sumdb < sumeu + euprice) {
            classes = ["is-success", "is-danger"];
        } else {
            classes = ["is-danger", "is-success"];
        }
        classes.push(sumeu <= sumdb ? "is-success" : "is-danger");

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
                                                <FontAwesomeIcon icon={faDollarSign} />
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
                                        <div className="tags has-addons" onClick={() => setShowFullEuro(!showFullEuro)}>
                                            <div className="tag is-info price-picker-tag">
                                                <FontAwesomeIcon icon={faDollarSign} />
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
                                            </> : <>
                                                <div className={"tag price-picker-tag price "}>
                                                    {sumeu + euprice}
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