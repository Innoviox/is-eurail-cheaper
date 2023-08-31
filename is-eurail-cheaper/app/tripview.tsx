import React, {FormEvent} from "react";
import { useState } from "react";

import SearchBar from './searchbar';

export default function TripView() {
    let [cities, setCities] = useState([]);

    async function onSearchSubmit(event: FormEvent<HTMLFormElement>) {
        let formData = new FormData(event.currentTarget);
        let fromCity = cities[cities.length - 1];
        let toCity = formData.get("toCity");

        setCities(cities.concat(toCity));

        if (fromCity !== undefined) {
            // let body = {'fromCity': fromCity, 'toCity': toCity};
            // console.log(JSON.stringify(body));
            formData.append("fromCity", fromCity);

            const response = await fetch('http://127.0.0.1:8000/api/getPrice', {
                method: 'POST',
                // mode: 'no-cors',
                body: formData,
            })

            if (response.ok) {
                const data = await response.json();
                console.log(data);
            } else {
                console.log("response not ok")
            }
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
                        {cities.map(city => {
                            return (
                                <tr key={city}>
                                    <td>{city}</td>
                                    <td>0</td>
                                    <td>0</td>
                                </tr>
                            );
                        })}
                    </tbody>

                    <tfoot>
                        <tr>
                            <td>Total</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                    </tfoot>
                </table>

            </div>
        </div>
    )
}