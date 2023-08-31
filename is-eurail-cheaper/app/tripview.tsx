import React, {FormEvent} from "react";
import { useState } from "react";

import SearchBar from './searchbar';

export default function TripView() {
    let [cities, setCities] = useState([]);

    async function onSearch(event: FormEvent<HTMLFormElement>) {
        const formData = new FormData(event.currentTarget);
        console.log("onsearch", Object.fromEntries(formData).city);
        setCities(cities.concat(Object.fromEntries(formData).city));
        // const response = await fetch('/api/submit', {
        //     method: 'POST',
        //     body: formData,
        // })
        //
        // // Handle response if necessary
        // const data = await response.json()
        // ...
    }

    return (
        <div>
            <SearchBar onSearch={onSearch}/>
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