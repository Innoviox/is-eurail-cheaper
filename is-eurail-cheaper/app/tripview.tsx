import React from "react";
import SearchBar from './searchbar';

export default function TripView() {
    let cities = ["Toulouse", "Lyon"];
    return (
        <div>
            <SearchBar />
            <div>
                {cities.map(city => {
                    return <span key={city}>{city}</span>;
                })}
            </div>
        </div>
    )
}