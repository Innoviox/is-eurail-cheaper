import React, {useState, ChangeEvent, FormEvent, MouseEvent } from "react";

export default function Trip({trip}) {
    return (
        <button className="button trip-box is-large">
            {trip.name}
        </button>
    )
}