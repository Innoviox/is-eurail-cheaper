import React, {useState} from "react";
import Image from "next/image";
import edit from "../img/edit.png";

export default function City({name, color}: {name: string, color: string}) {
    let [hovering, setHovering] = useState(false);

    return (
        <div className="city" onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
            <span className="dot" style={{"backgroundColor": color}} />
            <span>{name}</span>
            <Image src={edit} alt="edit" className={"edit " + (hovering ? "bright": "")} />
        </div>
    )
}
// <a href="https://www.flaticon.com/free-icons/edit" title="edit icons">Edit icons created by alkhalifi design - Flaticon</a>