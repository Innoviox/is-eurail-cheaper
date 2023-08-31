import React, {FormEvent} from "react";
import { useState } from "react";

import SearchBar from './searchbar';

export default function TripView() {
    let [cities, setCities] = useState([]);
    let [prices, setPrices] = useState([]);

    async function onSearchSubmit(event: FormEvent<HTMLFormElement>) {
        let formData = new FormData(event.currentTarget);
        let fromCity = cities[cities.length - 1];
        let toCity = formData.get("toCity");

        if (toCity === fromCity) { // todo give message
            return;
        }

        setCities(cities.concat(toCity));

        if (fromCity !== undefined) {
            formData.append("fromCity", fromCity);

            const response = await fetch('http://127.0.0.1:8000/api/getPrice', {
                method: 'POST',
                body: formData,
            })

            if (response.ok) {
                let data = await response.json();
                setPrices(prices.concat(parseInt(data.price))); // todo clean
            } else {
                console.log("response not ok")
            }
        }  else {
            setPrices(prices.concat("-"));
        }
    }

    return (
        <div>
            <SearchBar onSearchSubmit={onSearchSubmit}/>
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
                        {cities.map((city, idx) => {
                            return (
                                <tr key={city}>
                                    <td>{city}</td>
                                    <td>{prices[idx]}</td>
                                    <td>0</td>
                                </tr>
                            );
                        })}
                    </tbody>

                    <tfoot>
                        <tr>
                            <td>Total</td>
                            <td>{prices.slice(1).reduce((a, b) => a + b, 0)}</td>
                            <td>0</td>
                        </tr>
                    </tfoot>
                </table>

            </div>
        </div>
    )
}