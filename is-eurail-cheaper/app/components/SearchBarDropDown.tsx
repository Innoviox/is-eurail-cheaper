import React, {ChangeEvent, Dispatch, MouseEvent, useState, SetStateAction, forwardRef, useImperativeHandle} from "react";
import {Location} from "@/app/util/types.ts";

const STATIONS_API = `${process.env.NEXT_PUBLIC_API_URL}/stations?query=`;

export type DropdownHandle = {
    handleChange: (event: ChangeEvent<HTMLInputElement>) => Promise<void>
}

const SearchBarDropDown = forwardRef(function SearchBarDropDown({ showDropdown, setShowDropdown, onSearchSubmit, setInputVal } :
                                                  { showDropdown: boolean, setShowDropdown:  Dispatch<SetStateAction<boolean>>,
                                                      onSearchSubmit: (formData: FormData, loc: Location) => Promise<void>,
                                                      setInputVal:  Dispatch<SetStateAction<string>> }, ref) {
    let [stations, setStations]: [string[], Dispatch<any>] = useState([]);
    let [stationIds, setStationIds] = useState(new Map<string, [string, Location]>());

    async function onDropdownClick(event: MouseEvent<HTMLAnchorElement>) {
        let formData = new FormData();
        formData.append("toCity", (event.target as HTMLAnchorElement).getAttribute("data-index") ?? "");
        setInputVal("");
        await prepareForSubmit(formData);
    }

    async function prepareForSubmit(formData: FormData) {
        let toCity = formData.get("toCity");
        if (toCity === null) {
            return;
        }

        let [id, loc] = stationIds.get(toCity as string) ?? ["", {longitude: 0, latitude: 0}];
        formData.append("toCityId", id);
        setShowDropdown(false);
        await onSearchSubmit(formData, loc);
    }

    // https://stackoverflow.com/questions/37949981/call-child-method-from-parent
    useImperativeHandle(ref, () => ({
        async handleChange(event: ChangeEvent<HTMLInputElement>) {
            // console.log(event.target.value);
            let val = event.target.value;
            setInputVal(val);
            if (val.length < 3) {
                setShowDropdown(false);
                return;
            }

            const response = await fetch(STATIONS_API + val, {
                method: 'GET'
            });

            if (response.ok) {
                let data = await response.json();

                let newStations: string[] = [];
                let newSIds = stationIds;
                data.forEach((i: { name: string, id: string, location: Location }) => {
                    newStations.push(i.name);
                    newSIds.set(i.name, [i.id, i.location]);
                });
                setStations(newStations);
                setStationIds(newSIds);
                setShowDropdown(true);
            } else {
                console.log("response not ok - stations");
            }
        }
    }));

    return (
        <div id="searchDropdown" className={"search-block dropdown" + (showDropdown ? " is-active" : "")}>
            <div className="dropdown-menu" id="dropdown-menu3" role="menu">
                <div className="dropdown-content">
                    {stations.map((station, idx) => {
                        return (
                            <a onClick={onDropdownClick} className="dropdown-item" key={idx} data-index={station}>
                                {station}
                            </a>
                        )
                    })}
                </div>
            </div>
        </div>
    )
});

export default SearchBarDropDown;