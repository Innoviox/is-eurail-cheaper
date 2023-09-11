import React, {FormEvent} from "react";
import { useState } from "react";

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

    let [cities, setCities] = useState(new Map<string, string>);
    let [prices, setPrices] = useState([]);
    let [eurail, setEurail] = useState([]);

    function extractPrice(trips: Array<any>) {
        // for now just use cheapest
        // console.log(eurail);
        return Math.min(...trips.map(i => i.price));
    }

    async function onSearchSubmit(formData: FormData) {
        let [fromCity, fromCityId] = cities.size === 0 ? undefined : getLastItemInMap(cities);
        let toCity = formData.get("toCity");
        let toCityId = formData.get("toCityId");

        if (toCityId === fromCityId) { // todo give message
            return;
        }

        setCities(cities.set(toCity, toCityId));

        if (fromCityId !== undefined) {
            formData.append("fromCity", fromCity);
            formData.append("fromCityId", fromCityId);

            fetch('http://127.0.0.1:8000/api/price/eurail', {
                method: 'POST',
                body: formData,
            }).then(async response => {
                if (response.ok) {
                   let data = await response.json();
                   setEurail(eurail.concat(extractPrice(data.journeys)));
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
                    console.log(data);
                    setPrices(prices.concat(extractPrice(data.journeys))); //parseInt(data.price))); // todo clean
                } else {
                    console.log("response not ok - price db");
                }
            });
        }  else {
            setPrices(prices.concat("-"));
            setEurail(eurail.concat("-"));
        }
    }

    function sumArr(arr: Array<any>) {
        return arr.slice(1).reduce((a, b) => a + b, 0);
    }

    return (
        <div>
            <SearchBar onSearchSubmit={onSearchSubmit}/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>City</th>
                            <th>Price</th>
                            <th>Eurail Extras</th>
                        </tr>
                    </thead>

                    <tbody>
                        {Array.from(cities.keys(), ((city, idx) => {
                            return (
                                <tr key={city}>
                                    <td>{city}</td>
                                    <td>{prices[idx]}</td>
                                    <td>{eurail[idx]}</td>
                                </tr>
                            );
                        }))}
                    </tbody>

                    <tfoot>
                        <tr>
                            <td>Total</td>
                            <td>{sumArr(prices)}</td>
                            <td>{sumArr(eurail)}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}