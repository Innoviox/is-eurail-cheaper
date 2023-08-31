import React from "react";
import SearchBar from './searchbar';

export default function TripView() {
    let cities = ["Toulouse", "Lyon"];
    return (
        <div>
            <SearchBar />
            <div>
                <table>
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