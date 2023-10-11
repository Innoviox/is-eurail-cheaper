import React, {useState, ChangeEvent, FormEvent, MouseEvent, useRef, Dispatch} from "react";
import { useOuterClick } from "./outerclick";
import { FontAwesomeIcon }  from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassLocation } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar({onSearchSubmit, enabled}:
                                  {onSearchSubmit: (formData: FormData) => Promise<void>, enabled: boolean}) {
    const innerRef = useOuterClick(closeDropdown);

    let [stations, setStations]: [string[], Dispatch<any>] = useState([]);
    let [stationIds, setStationIds] = useState(new Map<string, string>());
    let [showDropdown, setShowDropdown] = useState(false);

    function closeDropdown() {
        console.log("close dropdown");
        setShowDropdown(false);
    }

    async function prepareForSubmit(formData: FormData) {
        let toCity = formData.get("toCity");
        if (toCity === null) {
            return;
        }
        formData.append("toCityId", stationIds.get(toCity as string));
        setShowDropdown(false);
        await onSearchSubmit(formData);
    }

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log("onsubmit");

        // await prepareForSubmit(new FormData(event.currentTarget));
    }

    async function handleChange(event: ChangeEvent<HTMLInputElement>) {
        // console.log(event.target.value);
        let val = event.target.value;
        if (val.length < 3) {
            setShowDropdown(false);
            return;
        }

        const response = await fetch(`http://127.0.0.1:8000/api/stations?query=${val}`, {
           method: 'GET'
        });

        if (response.ok) {
            let data = await response.json();
            console.log(data);

            let newStations: string[] = [];
            let newSIds = stationIds;
            data.stations.forEach((i: { station: string, id: string }) => {
                newStations.push(i.station);
                newSIds.set(i.station, i.id);
            });
            setStations(newStations);
            setStationIds(newSIds);
            setShowDropdown(true);
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
        <div ref={innerRef} id="searchbar">
            <form onSubmit={onSubmit} id="search-form">
                <div id="search-container">
                    <div id="searchDropdown" className={"search-block dropdown" + (showDropdown ? " is-active" : "")}>
                        <div className="dropdown-trigger">
                            <div className="control has-icons-left">
                                <input className="input" type="text" name="toCity"
                                       placeholder="Next city..." onChange={handleChange}
                                       autoComplete="off" disabled={!enabled} />
                                <span className="icon is-small is-left">
                                  <FontAwesomeIcon icon={ faMagnifyingGlassLocation } />
                                </span>
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
                </div>
                        {/*<div className="level-item">*/}
                        {/*    <input className="search-block input" type="date" name="date" />*/}
                        {/*</div>*/}
            </form>
        </div>
    );
}