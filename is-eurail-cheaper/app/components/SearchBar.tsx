import React, {useState, FormEvent, RefObject, useRef} from "react";
import { useOuterClick } from "../util/outerclick.ts";
import { FontAwesomeIcon }  from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassLocation } from "@fortawesome/free-solid-svg-icons";
import { Location } from "../util/types.ts";
import SearchBarDropDown, { DropdownHandle } from "./SearchBarDropDown.tsx";

export default function SearchBar({onSearchSubmit, enabled}:
                                  {onSearchSubmit: (formData: FormData, loc: Location) => void, enabled: boolean}) {
    const innerRef: RefObject<HTMLDivElement> = useOuterClick(closeDropdown);
    const dropdownRef = useRef<DropdownHandle>();

    let [showDropdown, setShowDropdown] = useState(false);
    let [inputVal, setInputVal] = useState("");
    let [loading, setLoading] = useState(false);

    function closeDropdown() {
        setShowDropdown(false);
    }

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
    }

    return (
        <div ref={innerRef} id="searchbar">
            <form onSubmit={onSubmit} id="search-form">
                <div id="search-container">
                    <div className={"control has-icons-left " + (loading ? "is-loading" : "")}>
                        <input className="input"  type="text" name="toCity"
                               placeholder="Next city..." onChange={(e) => {
                                   if (dropdownRef.current) {
                                       console.log("set loading ot true");
                                        setLoading(true);
                                        dropdownRef.current.handleChange(e, () => setLoading(false));
                                   }
                               }}
                               autoComplete="off" disabled={!enabled}
                               value={inputVal} />
                        <span className="icon is-small is-left">
                          <FontAwesomeIcon icon={ faMagnifyingGlassLocation } />
                        </span>
                    </div>
                    <SearchBarDropDown ref={dropdownRef} showDropdown={showDropdown} setShowDropdown={setShowDropdown} onSearchSubmit={onSearchSubmit} setInputVal={setInputVal} />
                </div>
            </form>
        </div>
    );
}