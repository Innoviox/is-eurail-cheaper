import React, {useState, ChangeEvent, FormEvent, MouseEvent } from "react";

export default function Trip({trip, open, onclick}: {trip: any; open: boolean, onclick: any}) {

    function openTrip() {
        return (
            <button className="button trip-box is-large" onClick={onclick()}>
                {trip.name}
            </button>
        )
    }

    function closedTrip() {
        return (
            <button className="button trip-box is-large" onClick={onclick()}>
                {trip.name}
            </button>
        )
    }

    return (
        <div>
            {open ? openTrip() : closedTrip()}
        </div>
    )
}