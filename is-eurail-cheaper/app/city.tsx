import React from "react";


export default function City({name, color}: {name: string, color: string}) {
    return (
        <div className="city">
            <span className="dot" style={{"backgroundColor": color}} />
            <span>{name}</span>
        </div>
    )
}