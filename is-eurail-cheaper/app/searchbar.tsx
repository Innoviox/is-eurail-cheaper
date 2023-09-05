import React, {useState} from "react";
import { FormEvent } from 'react'

export default function SearchBar({onSearchSubmit}) {
    let [stations, setStations] = useState([]);

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log("onsubmit");

        await onSearchSubmit(event);
    }

    async function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        // console.log(event.target.value);
        const response = await fetch(`http://127.0.0.1:8000/api/stations?query=${event.target.value}`, {
           method: 'GET'
        });

        if (response.ok) {
            let data = await response.json();
            console.log(data);
            let newStations = data.stations.map(i => i.station);
            setStations(newStations);
        } else {
            console.log("response not ok - stations");
        }
    }

    return (
        <div id="searchbar">
            <form onSubmit={onSubmit}>
                <div className="dropdown is-active">
                    <div className="dropdown-trigger">
                        <div className="control">
                            <input className="input" type="text" name="toCity" placeholder="Next city..." onChange={handleChange} />
                        </div>
                    </div>
                    <div className="dropdown-menu" id="dropdown-menu3" role="menu">
                        <div className="dropdown-content">
                            {stations.map(station => {
                                return (
                                    <a href="#" className="dropdown-item" key={station}>
                                        <span>{station}</span>
                                    </a>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}