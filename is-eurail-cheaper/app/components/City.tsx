import React, { useState, useRef } from "react";
import Image from "next/image";
import edit from "../img/edit.png";

export default function City({name, color}: {name: string, color: string}) {
    let [hovering, setHovering] = useState(false);
    let [editing, setEditing] = useState(false);

    let nameRef = useRef<HTMLDivElement>(null);

    return (
        <div className="city" onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
            <span className="dot inline-block" style={{"backgroundColor": color}} />

            <div ref={nameRef} className="inline-block">
                {editing ?
                    <input type="text" className="input city-name-input is-static" placeholder="New city..."
                           defaultValue={""} autoFocus={true} style={{width: nameRef.current ? nameRef.current.clientWidth : 100,
                                                                      height: nameRef.current ? nameRef.current.clientHeight : 24}} />
                    : <span className="city-name">{name}</span>
                }
            </div>
            {/* onBlur={() => setEditing(false)} /> */}

            <div className="edit-container" onClick={() => setEditing(true)}>
                <Image src={edit} alt="edit" className={"edit " + (hovering ? "bright": "")} />
            </div>
        </div>
    )
}
// <a href="https://www.flaticon.com/free-icons/edit" title="edit icons">Edit icons created by alkhalifi design - Flaticon</a>