import React, {
    useState,
    useRef,
    RefObject,
    useContext,
    SetStateAction,
    Dispatch,
    ChangeEvent
} from "react";
import Image from "next/image";
import edit from "../img/edit.png";
import {useOuterClick} from "@/app/util/outerclick.ts";
import SearchBarDropDown, {DropdownHandle} from "./SearchBarDropDown.tsx";
import {Location} from "@/app/util/types.ts";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashCan} from "@fortawesome/free-solid-svg-icons";
import { ImposedCityContext } from "../util/contexts.ts";

export default function City({ name, color, onSearchSubmit, setImposedCity, deleteCity }:
                             { name: string, color: string,
                               onSearchSubmit: (formData: FormData, loc: Location) => void,
                               setImposedCity: Dispatch<SetStateAction<string[]>>, deleteCity: () => void }) {
    const imposedCity = useContext(ImposedCityContext);

    // search bar drop down boilerplate
    const innerRef: RefObject<HTMLDivElement> = useOuterClick(closeDropdown);
    const dropdownRef = useRef<DropdownHandle>();
    let [showDropdown, setShowDropdown] = useState(false);
    let [inputVal, setInputVal] = useState("");
    function closeDropdown() {
        setShowDropdown(false);
        setEditing(false);
        setInputVal("");
        setImposedCity(["", ""]);
    }

    async function onSearchSubmitWrapper(formData: FormData, loc: Location) {
        setEditing(false);
        onSearchSubmit(formData, loc);
    }

    async function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setImposedCity([name, e.target.value]);
        if (dropdownRef.current !== undefined) {
            dropdownRef.current.handleChange(e);
        }
    }

    function renderName() {
        if (editing) {
            return (
                <input type="text" className="input city-name-input is-static" placeholder="New city..."
                       autoFocus={true} style={{width: nameRef.current ? nameRef.current.clientWidth : 100,
                    height: nameRef.current ? nameRef.current.clientHeight : 24}}
                       onChange={handleChange}
                       value={inputVal} />
            )
        } else if (imposedCity[0] === name) {
            return (
                <input type="text" className="input city-name-input is-static" placeholder="New city..."
                   style={{width: nameRef.current ? nameRef.current.clientWidth : 100,
                           height: nameRef.current ? nameRef.current.clientHeight : 24}}
                   readOnly={true}
                   value={imposedCity[1]} />
            )
        } else {
            return <span className="city-name">{name}</span>;
        }
    }

    function startEditing() {
        setImposedCity([name, ""]);
        setEditing(true);
    }

    let [hovering, setHovering] = useState(false);
    let [editing, setEditing] = useState(false);

    let nameRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={innerRef}>
            <div className="city" onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
                <span className="dot inline-block" style={{"backgroundColor": color}} />

                <div ref={nameRef} className="inline-block">
                    {renderName()}
                </div>

                <div className="action-container edit-container" onClick={startEditing}>
                    <Image src={edit} alt="edit" className={"action-icon edit " + (hovering ? "bright": "")} />
                </div>
                <div className="action-container trash-container" onClick={deleteCity}>
                    <FontAwesomeIcon className={"action-icon trash " + (hovering ? "bright": "")} icon={faTrashCan} />
                </div>
            </div>
            {editing ? <SearchBarDropDown ref={dropdownRef} showDropdown={showDropdown} setShowDropdown={setShowDropdown} onSearchSubmit={onSearchSubmitWrapper} setInputVal={setInputVal} />
                : <></>}
        </div>

    )
}
// <a href="https://www.flaticon.com/free-icons/edit" title="edit icons">Edit icons created by alkhalifi design - Flaticon</a>