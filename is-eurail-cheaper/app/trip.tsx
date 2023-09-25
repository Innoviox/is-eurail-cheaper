import React, {useState, ChangeEvent, FormEvent, MouseEvent } from "react";

export default function Trip({trip, open, onclick}: {trip: any; open: boolean, onclick: any}) {

    function openTrip() {
        return (
            <div className="open-trip">
                {trip.name}
            </div>
        )
    }

    function closedTrip() {
        return (
            <button className="button trip-box is-large" onClick={onclick}>
                {trip.name}
            </button>
        )
    }

    return open ? openTrip() : closedTrip();
}