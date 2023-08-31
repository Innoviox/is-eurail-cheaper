import React from "react";
import SearchBar from './searchbar';

export default function TripView() {
    let cities = ["Toulouse", "Lyon"];
    return (
        <div>
            <SearchBar />
            <div>
                <table>
                    <tr>
                        <th>City</th>
                        <th>Price</th>
                        <th>Eurail Extras</th>
                    </tr>
                    {cities.map(city => {
                        return (
                            <tr key={city}>
                                <td>{city}</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                        );
                    })}
                </table>

            </div>
        </div>
    )
}