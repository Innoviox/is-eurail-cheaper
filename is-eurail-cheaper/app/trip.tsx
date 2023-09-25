import React, {useState, ChangeEvent, FormEvent, MouseEvent } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export default function Trip({trip, open, onclick}: {trip: any; open: boolean, onclick: any}) {

    function openTrip() {
        return (
            <div className="open-trip">
                <nav className="level">
                    <div className="level-left">
                        <div className="level-item">
                            <div>
                                <FontAwesomeIcon icon={faArrowLeft} />
                            </div>
                        </div>
                    </div>

                    <div className="level-item has-text-centered">
                        <div>
                            <span>{trip.name}</span>
                        </div>
                    </div>
                </nav>
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