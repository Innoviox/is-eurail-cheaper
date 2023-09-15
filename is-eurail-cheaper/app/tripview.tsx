import React, {FormEvent} from "react";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrain } from '@fortawesome/free-solid-svg-icons'

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
        return Math.min(...trips.map(i => parseInt(i.price)));
    }

    async function onSearchSubmit(formData: FormData) {
        let [fromCity, fromCityId] = cities.size === 0 ? [undefined, undefined] : getLastItemInMap(cities);
        let toCity = formData.get("toCity");
        let toCityId = formData.get("toCityId");

        if (toCityId === fromCityId) { // todo give message
            return;
        }

        setCities(cities.set(toCity, toCityId));

        if (fromCityId !== undefined) {
            formData.append("fromCity", fromCity);
            formData.append("fromCityId", fromCityId);

            let startLength = prices.length; // update this idx when it's done

            // fetch('http://127.0.0.1:8000/api/price/eurail', {
            //     method: 'POST',
            //     body: formData,
            // }).then(async response => {
            //     if (response.ok) {
            //        let data = await response.json();
            //        let price = extractPrice(data.journeys);
            //        let newEurail = [...eurail];
            //        newEurail[startLength] = price;
            //        setEurail(newEurail);
            //
            //        // setEurail(eurail.concat(extractPrice(data.journeys))); // change based on startLength
            //    } else {
            //        console.log("response not ok - price eurail");
            //    }
            // });
            //
            // fetch('http://127.0.0.1:8000/api/price/db', {
            //     method: 'POST',
            //     body: formData,
            // }).then(async response => {
            //     if (response.ok) {
            //         let data = await response.json();
            //         console.log(data);
            //         let price = extractPrice(data.journeys);
            //         let newPrices = [...prices];
            //         newPrices[startLength] = price;
            //         setPrices(newPrices);
            //     } else {
            //         console.log("response not ok - price db");
            //     }
            // });

            setPrices(prices.concat("+"));
            setEurail(eurail.concat("+"));
        }  else {
            setPrices(prices.concat("-"));
            setEurail(eurail.concat("-"));
        }
    }

    function sumArr(arr: Array<any>) {
        return arr.slice(1).reduce((a, b) => a + b, 0);
    }

    function renderTrip(city: string, idx: number): React.JSX.Element | null {
        console.log(city, idx);
        if (idx === cities.size - 1) {
            return null;
        }

        return (
            <div>
                <table className="table">
                    <tbody>
                        <tr>
                            <td>
                                {/*<span className="icon">*/}
                                {/*  <i className="fas fa-train"></i>*/}
                                {/*</span>*/}
                                <FontAwesomeIcon icon={faTrain} />
                            </td>
                            <td>{prices[idx] === '+' ?
                                <button className="button is-loading" disabled>Loading</button> :
                                prices[idx]}</td>
                            <td>{eurail[idx] === '+' ?
                                <button className="button is-loading" disabled>Loading</button> :
                                eurail[idx]}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }

    return (
        <div>
            <SearchBar onSearchSubmit={onSearchSubmit}/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

            <div>
                {Array.from(cities.keys(), ((city, idx) => {
                    return (
                        <div key={city}>
                            <span>{city}</span><br />
                            { renderTrip(city, idx) }
                        </div>
                    )
                }))}
            </div>

            {/*<div>*/}
            {/*    <table className="table">*/}
            {/*        <thead>*/}
            {/*            <tr>*/}
            {/*                <th>City</th>*/}
            {/*                <th>Price</th>*/}
            {/*                <th>Eurail Extras</th>*/}
            {/*            </tr>*/}
            {/*        </thead>*/}

            {/*        <tbody>*/}
            {/*            {Array.from(cities.keys(), ((city, idx) => {*/}
            {/*                return (*/}
            {/*                    <tr key={city}>*/}
            {/*                        <td>{city}</td>*/}
            {/*                        <td>{prices[idx] === '+' ?*/}
            {/*                            <button className="button is-loading" disabled>Loading</button> :*/}
            {/*                            prices[idx]}</td>*/}
            {/*                        <td>{eurail[idx] === '+' ?*/}
            {/*                            <button className="button is-loading" disabled>Loading</button> :*/}
            {/*                            eurail[idx]}</td>*/}
            {/*                    </tr>*/}
            {/*                );*/}
            {/*            }))}*/}
            {/*        </tbody>*/}

            {/*        <tfoot>*/}
            {/*            <tr>*/}
            {/*                <td>Total</td>*/}
            {/*                <td>{sumArr(prices)}</td>*/}
            {/*                <td>{sumArr(eurail)}</td>*/}
            {/*            </tr>*/}
            {/*        </tfoot>*/}
            {/*    </table>*/}
            {/*</div>*/}
        </div>
    )
}

// fetch("https://global.api.flixbus.com/search/service/v4/search?from_city_id=490d29d8-7151-4e05-86df-68fba4f000be&to_city_id=30e3dcd2-f9a7-4900-8f39-7a77c261904e&departure_date=12.09.2023&products=%7B%22adult%22%3A1%7D&currency=USD&locale=en_US&search_by=cities&include_after_midnight_rides=1", {
//     "headers": {
//         "accept": "*/*",
//         "accept-language": "en-US,en;q=0.9",
//         "sec-ch-ua": "\"Chromium\";v=\"116\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"116\"",
//         "sec-ch-ua-mobile": "?0",
//         "sec-ch-ua-platform": "\"macOS\"",
//         "sec-fetch-dest": "empty",
//         "sec-fetch-mode": "cors",
//         "sec-fetch-site": "same-site",
//         "x-feature-flags": "{\"ps_illuminati_offeron_c1\":4,\"ps_illuminati_offeron_c2\":9,\"webc_fxp_1261\":0,\"webc_fxp_1384\":2,\"webc_fxp_1292\":2,\"webc_fxp_1453\":0}",
//         "Referer": "https://shop.flixbus.com/",
//         "Referrer-Policy": "strict-origin-when-cross-origin"
//     },
//     "body": null,
//     "method": "GET"
// });