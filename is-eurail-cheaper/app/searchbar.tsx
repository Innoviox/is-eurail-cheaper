import React, {useState, ChangeEvent, FormEvent, MouseEvent } from "react";

export default function SearchBar({onSearchSubmit}) {
    let [stations, setStations] = useState([]);
    let [stationIds, setStationIds] = useState(new Map<string, string>());

    async function prepareForSubmit(formData: FormData) {
        formData.append("toCityId", stationIds.get(formData.get("toCity")));
        await onSearchSubmit(formData);
    }

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log("onsubmit");

        await prepareForSubmit(new FormData(event.currentTarget));
    }

    async function handleChange(event: ChangeEvent<HTMLInputElement>) {
        // console.log(event.target.value);
        const response = await fetch(`http://127.0.0.1:8000/api/stations?query=${event.target.value}`, {
           method: 'GET'
        });

        if (response.ok) {
            let data = await response.json();
            console.log(data);

            let newStations: string[] = [];
            let newSIds = stationIds;
            data.stations.forEach(i => {
                newStations.push(i.station);
                newSIds.set(i.station, i.id);
            })
            setStations(newStations);
            setStationIds(newSIds);
        } else {
            console.log("response not ok - stations");
        }
    }

    async function onDropdownClick(event: MouseEvent<HTMLAnchorElement>) {
        let formData = new FormData();
        formData.append("toCity", event.target.getAttribute("data-index"));
        await prepareForSubmit(formData);
    }

    return (
        <div id="searchbar">
            <form onSubmit={onSubmit}>
                <div id="searchDropdown" className="dropdown is-active">
                    <div className="dropdown-trigger">
                        <div className="control">
                            <input className="input" type="text" name="toCity" placeholder="Next city..." onChange={handleChange} />
                        </div>
                    </div>
                    <div className="dropdown-menu" id="dropdown-menu3" role="menu">
                        <div className="dropdown-content">
                            {stations.map((station, idx) => {
                                return (
                                    <a onClick={onDropdownClick} className="dropdown-item" key={station} data-index={station}>
                                        {station}
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