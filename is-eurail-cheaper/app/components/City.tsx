import React, {useState, useRef, RefObject} from "react";
import Image from "next/image";
import edit from "../img/edit.png";
import {useOuterClick} from "@/app/util/outerclick.ts";
import SearchBarDropDown, {DropdownHandle} from "@/app/components/SearchBarDropDown.tsx";
import {Location} from "@/app/util/types.ts";

export default function City({name, color, onSearchSubmit}: {name: string, color: string, onSearchSubmit: (formData: FormData, loc: Location) => Promise<void>}) {
    // search bar drop down boilerplate
    const innerRef: RefObject<HTMLDivElement> = useOuterClick(closeDropdown);
    const dropdownRef = useRef<DropdownHandle>();
    let [showDropdown, setShowDropdown] = useState(false);
    let [inputVal, setInputVal] = useState("");
    function closeDropdown() {
        setShowDropdown(false);
        setEditing(false);
        setInputVal("");
    }

    async function onSearchSubmitWrapper(formData: FormData, loc: Location) {
        setEditing(false);
        await onSearchSubmit(formData, loc);
    }

    let [hovering, setHovering] = useState(false);
    let [editing, setEditing] = useState(false);

    let nameRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={innerRef}>
            <div className="city" onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
                <span className="dot inline-block" style={{"backgroundColor": color}} />

                <div ref={nameRef} className="inline-block">
                    {editing ?
                        <input type="text" className="input city-name-input is-static" placeholder="New city..."
                           autoFocus={true} style={{width: nameRef.current ? nameRef.current.clientWidth : 100,
                                                    height: nameRef.current ? nameRef.current.clientHeight : 24}}
                           onChange={(e) => dropdownRef.current && dropdownRef.current.handleChange(e)}
                           value={inputVal} />
                        : <span className="city-name">{name}</span>
                    }
                </div>
                {/* onBlur={() => setEditing(false)} /> */}

                <div className="edit-container" onClick={() => setEditing(true)}>
                    <Image src={edit} alt="edit" className={"edit " + (hovering ? "bright": "")} />
                </div>
            </div>
            {editing ? <SearchBarDropDown ref={dropdownRef} showDropdown={showDropdown} setShowDropdown={setShowDropdown} onSearchSubmit={onSearchSubmitWrapper} setInputVal={setInputVal} />
                : <></>}
        </div>

    )
}
// <a href="https://www.flaticon.com/free-icons/edit" title="edit icons">Edit icons created by alkhalifi design - Flaticon</a>