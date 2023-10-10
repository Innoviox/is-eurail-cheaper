import React, {FormEvent, Dispatch} from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrain, faBus, faArrowLeft, faArrowRight, faCity, faDollarSign, faClock} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import eurail_image from "./eurail.png";
import db_image from "./db.png";
import SearchBar from './searchbar';
import City from './city';
import Picker from './picker';

// todo currency, class
const eurailprices = { // https://www.eurail.com/en/eurail-passes/global-pass
    4: 211,
    5: 243,
    7: 288,
    10: 344,
    15: 380,
    22: 445,
    31: 576, // todo multimonth trips
};

const sentinel = -100;

export default function TripView({addCoords}) {
    const getLastItemInMap = (map: Map<string, string>) => [...map][map.size-1];
    const city = (idx: number) => [...cities][idx][0];

    let [cities, setCities] = useState(new Map<string, string>);
    let [db, setDb] : [number[][], Dispatch<any>] = useState([]);
    let [eurail, setEurail] : [any[], Dispatch<any>] = useState([]);
    let [open, setOpen]: [boolean[], Dispatch<any>] = useState([]);
    let [choices, setChoices]: [string[], Dispatch<any>] = useState([]);

    const endpoints = ["db", "eurail"];

    function sortPrices(n) {
        return n.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
    }

    function extractPrice(trips: Array<any>) {
        // for now just use cheapest
        console.log(trips);
        console.log(trips.map(i => [parseInt(i.price), i.length]));
        return sortPrices(trips.map(i => [parseInt(i.price), i.length]));
    }

    function getlstcpy(lstname: string) {
        let n;
        switch (key) {
            case "db": {
                n = [...db];
                break;
            }
            case "eurail": {
                n = [...eurail];
                break;
            }
            case "open": {
                n = [...open];
                break;
            }
            case "choices": {
                n = [...choices];
                break;
            }
        }
        return n;
    }

    // todo do this better
    // set = 1 => set list to price
    function add(key: string, price: any, set: number | undefined = undefined) {
        let n = getlstcpy(key);

        // console.log("setting", key, price, set);
        if (set === -1) {
            n = price;
        } else if (set === undefined) {
            n.push(price);
        } else {
            n[set] = price;
        }

        switch (key) {
            case "db": {
                setDb(n);
                break;
            }
            case "eurail": {
                setEurail(n);
                break;
            }
            case "open": {
                setOpen(n);
                break;
            }
            case "choices": {
                setChoices(n);
                break;
            }
        }
    }

    async function onSearchSubmit(formData: FormData) {
        let [fromCity, fromCityId] = cities.size === 0 ? [undefined, undefined] : getLastItemInMap(cities);
        let toCity = formData.get("toCity");
        let toCityId = formData.get("toCityId");

        if (toCityId === fromCityId) { // todo give message
            return;
        }

        await updateCoords(toCityId);

        setCities(cities.set(toCity, toCityId));

        if (fromCityId !== undefined) {
            let startLength = db.length; // update this idx when it's done

            add("db", [sentinel, sentinel]); // start loading wheels
            add("eurail", [sentinel, sentinel]);
            add("open", true);
            add("choices", "");

            formData.append("fromCity", fromCity);
            formData.append("fromCityId", fromCityId);


            for (let endpoint of endpoints) {
                fetch(`http://127.0.0.1:8000/api/price/${endpoint}`, {
                    method: 'POST',
                    body: formData,
                }).then(async response => {
                    if (response.ok) {
                        let data = await response.json();
                        let price = extractPrice(data.journeys);
                        console.log(data, price);
                        add(endpoint, price, startLength);
                    } else {
                        console.log(`response not ok - price ${endpoint}`);
                    }
                });
            }
        }
    }

    async function updateCoords(toCityId: string) {
        const response = await fetch(`http://127.0.0.1:8000/api/station?place_id=${toCityId}`, {
            method: 'GET'
        });

        if (response.ok) {
            let data = await response.json();
            console.log(data);
            addCoords(data.coords.lat, data.coords.lng);
        } else {
            console.log("response not ok - update-coords")
        }
    }

    function sumArr(arr: Array<any>) {
        return arr.map(i => i[0] === sentinel ? 0 : i[0]).reduce((a, b) => a + b, 0);
    }

    function toggleOpen(idx: number) {
        add("open", !open[idx], idx);
    }

    function setChoice(idx: number, choice: string) {
        // console.log("set choice", choices);
        // add("choices", choice, idx);
    }

    function renderTrip(): React.JSX.Element {
        return (
            <div>
                {Array.from(cities.keys(), (city: string, idx: number) => (
                    <div key={city}>
                        {renderPrices(idx)}
                    </div>
                ))}
            </div>
        )
    }

    function renderPrices(idx: number) {
        if (idx < cities.size - 1) {
            return (
                <div>
                    <div className="prices-container">
                        {renderUpper(idx)}
                        <div className={"lower " + (open[idx] ? "lower-open" : "lower-closed")}>
                            <div className="lower-inner">
                                <div className="level">
                                    <div className="level-left">
                                        <div className="level-item">
                                            <div>
                                                <div className="field is-grouped price-grouping" onClick={() => setChoice(idx, "db")}>
                                                    <Image src={db_image} className="logo" alt="DB" />
                                                    {db[idx][0] === sentinel ?
                                                        <button className="button is-loading is-ghost">Loading</button> :
                                                        <Picker data={db[idx]} parentOpen={open[idx]} setFirst={setFirst("db")}/>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="level">
                                    <div className="level-left">
                                        <div className="level-item">
                                            <div>
                                                <div className="field is-grouped price-grouping" onClick={() => setChoice(idx, "eurail")}>
                                                    <Image src={eurail_image} className="logo"  alt="E" />
                                                    {eurail[idx][0] === sentinel ?
                                                        <button className="button is-loading is-ghost">Loading</button> :
                                                        <Picker data={eurail[idx]} parentOpen={open[idx]} setFirst={setFirst("eurail")} />
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else if (idx === cities.size - 1) {
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
                                <City name={city(idx)} />
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    function setFirst(lstname) {
        return (n) => {
            console.log("setting first", lstname, n);
            let lst = getlstcpy(lstname);
            let temp = lst[n];
            lst.splice(n, 1);
            lst = sortPrices(lst);
            lst.unshift(temp);
            add(lstname, lst, -1);
        }
    }

    // todo improve lstname stuff

    function renderUpper(idx: number) {
         return  (
             <div className="upper level" onClick={() => toggleOpen(idx)}>
                <div className="level-left">
                    <div className="level-item">
                        <div>
                            <FontAwesomeIcon icon={faCity} />
                        </div>
                    </div>
                    <div className="level-item">
                        <div>
                            <City name={city(idx)} />
                        </div>
                    </div>
                    <div className="level-item">
                        <div>
                            <FontAwesomeIcon icon={faArrowRight}/>
                        </div>
                    </div>
                    <div className="level-item">
                        <div>
                            <City name={city(idx + 1)} />
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
        return (
            <div className="level">
                <div className="level-item">
                    <div>
                        <div className="field is-grouped">
                            <Image src={db_image} className="logo" alt="DB"/>
                            {sumArr(db)}
                        </div>
                    </div>
                </div>
                <div className="level-item">
                    <div>
                        <div className="field is-grouped">
                            <Image src={eurail_image} className="logo" alt="E"/>
                            {sumArr(eurail)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    function startPickerAnimation(lstname: string) {

    }

    if (cities.size > 0) {
        return (
            <div id="trip-view">
                <SearchBar onSearchSubmit={onSearchSubmit}/>
                <div className="divider"></div>
                <div id="trips-box">
                    {renderTrip()}
                </div>
                <div className="divider"></div>
                <div id="price-totals">
                    {renderTotals()}
                </div>
            </div>
        );
    } else {
        return (
            <div id="trip-view">
                <canvas id="canvas"></canvas>
                <div id="alone-searchbar">
                    <h1>Explore Your World</h1>
                    <SearchBar onSearchSubmit={onSearchSubmit}/>
                </div>
            </div>
        );
    }
}