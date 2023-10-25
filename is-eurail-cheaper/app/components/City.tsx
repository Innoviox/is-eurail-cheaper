import React, {
    useState,
    useRef,
    RefObject,
    createContext,
    useContext,
    SetStateAction,
    Dispatch,
    ChangeEvent,
    Context
} from "react";
import Image from "next/image";
import edit from "../img/edit.png";
import {useOuterClick} from "@/app/util/outerclick.ts";
import SearchBarDropDown, {DropdownHandle} from "./SearchBarDropDown.tsx";
import {Location} from "@/app/util/types.ts";

export const ImposedCityContext = createContext<string[]>([]);

export default function City({ name, color, onSearchSubmit, setImposedCity }:
                             { name: string, color: string,
                               onSearchSubmit: (formData: FormData, loc: Location) => Promise<void>,
                               setImposedCity: Dispatch<SetStateAction<string[]>> }) {
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
        await onSearchSubmit(formData, loc);
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

                <div className="edit-container" onClick={startEditing}>
                    <Image src={edit} alt="edit" className={"edit " + (hovering ? "bright": "")} />
                </div>
            </div>
            {editing ? <SearchBarDropDown ref={dropdownRef} showDropdown={showDropdown} setShowDropdown={setShowDropdown} onSearchSubmit={onSearchSubmitWrapper} setInputVal={setInputVal} />
                : <></>}
        </div>

    )
}
// <a href="https://www.flaticon.com/free-icons/edit" title="edit icons">Edit icons created by alkhalifi design - Flaticon</a>