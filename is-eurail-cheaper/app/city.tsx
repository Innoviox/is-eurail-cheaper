import React from "react";


export default function City({name}: {name: string}) {
    return (
        // <button className="city button is-outlined is-rounded">{name}</button>
        <div className="city">
            <span className="dot" />
            <span>{name}</span>
        </div>
    )
}