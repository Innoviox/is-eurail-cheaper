import React, {FormEvent, Dispatch} from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrain, faBus, faArrowLeft} from '@fortawesome/free-solid-svg-icons';

import SearchBar from './searchbar';

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

export default function TripView() {
    const getLastItemInMap = (map: Map<string, string>) => [...map][map.size-1];
    const city = (idx: number) => [...cities][idx][0];

    let [cities, setCities] = useState(new Map<string, string>);
    let [db, setDb] : [number[], Dispatch<any>] = useState([]);
    let [eurail, setEurail] : [number[], Dispatch<any>] = useState([]);

    function extractPrice(trips: Array<any>) {
        // for now just use cheapest
        // console.log(eurail);
        return Math.min(...trips.map(i => parseInt(i.price)).filter(i => i >= 0));
    }

    // todo do this better
    function addPrice(key: string, price: number) {
        switch (key) {
            case "db": {
                let n = [...db];
                n.push(price);
                setDb(n);
                break;
            }
            case "eurail": {
                let n = [...eurail];
                n.push(price);
                setEurail(n);
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

        setCities(cities.set(toCity, toCityId));
        addPrice("db", -100);
        addPrice("eurail", -100);

        if (fromCityId !== undefined) {
            formData.append("fromCity", fromCity);
            formData.append("fromCityId", fromCityId);

            let startLength = db.length - 2; // update this idx when it's done

            fetch('http://127.0.0.1:8000/api/price/eurail', {
                method: 'POST',
                body: formData,
            }).then(async response => {
                if (response.ok) {
                    let data = await response.json();
                    let price = extractPrice(data.journeys);
                    addPrice("eurail", price);

                    // setEurail(eurail.concat(extractPrice(data.journeys))); // change based on startLength
                } else {
                    console.log("response not ok - price eurail");
                }
            });

            fetch('http://127.0.0.1:8000/api/price/db', {
                method: 'POST',
                body: formData,
            }).then(async response => {
                if (response.ok) {
                    let data = await response.json();
                    let price = extractPrice(data.journeys);
                    addPrice("db", price);
                } else {
                    console.log("response not ok - price db");
                }
            });
        }
    }

    function sumArr(arr: Array<any>) {
        return arr.slice(1).reduce((a, b) => a + b, 0);
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
                    <nav className="breadcrumb has-succeeds-separator trip-title-breadcrumb" aria-label="breadcrumbs">
                        <ul>
                            <li><a href="#">{city(idx)}</a></li>
                            <li><a href="#">{city(idx + 1)}</a></li>
                        </ul>
                    </nav>
                    <table className="table">
                        <tbody>
                        <tr>
                            <td>
                                <FontAwesomeIcon icon={faTrain} />
                            </td>
                            <td>{db[idx] === -100 ?
                                <button className="button is-loading" disabled>Loading</button> :
                                db[idx]}</td>
                            <td>{eurail[idx] === -100 ?
                                <button className="button is-loading" disabled>Loading</button> :
                                eurail[idx]}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            )
        } else if (idx === cities.size - 1) {
            return <span>{city(idx)}</span>
        }
    }

    return (
        <div id="trip-view">
            <SearchBar onSearchSubmit={onSearchSubmit} />
            <br />
            <div id="trips-box">
                {renderTrip()}
            </div>
        </div>
    )
}