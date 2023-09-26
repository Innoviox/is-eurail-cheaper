import React, {useState, ChangeEvent, FormEvent, MouseEvent } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faTrain } from '@fortawesome/free-solid-svg-icons'

export default function Trip({trip, open, onopen, onclose}: {trip: any; open: boolean, onopen: any, onclose: any}) {
    function openTrip() {
        return (
            <div className="open-trip">
                <nav className="level">
                    <div className="level-left">
                        <div className="level-item">
                            <div>
                                <button className="button is-ghost" onClick={onclose}>
                                    <FontAwesomeIcon icon={faArrowLeft} />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="level-item has-text-centered">
                        <div>
                            <span>{trip.name}</span>
                        </div>
                    </div>
                </nav>
                 <div>
                     {Array.from(trip.cities.keys(), (city: string, idx: number) => (
                         <div key={city}>
                             <span>{city}</span><br />
                             {renderPrices(idx)}
                         </div>
                     ))}
                 </div>
            </div>
        )
    }

    function renderPrices(idx: number) {
        if (idx < trip.cities.size - 1) {
            return (
                <table className="table">
                    <tbody>
                    <tr>
                        <td>
                            <FontAwesomeIcon icon={faTrain} />
                        </td>
                        <td>{trip.prices.db[idx] === '+' ?
                            <button className="button is-loading" disabled>Loading</button> :
                            trip.prices.db[idx]}</td>
                        <td>{trip.prices.eurail[idx] === '+' ?
                            <button className="button is-loading" disabled>Loading</button> :
                            trip.prices.eurail[idx]}</td>
                    </tr>
                    </tbody>
                </table>
            )
        }
    }

    function closedTrip() {
        return (
            <button className={"button closed-trip is-large " + (trip.empty ? "is-info" : "")} onClick={onopen}>
                {trip.name}
            </button>
        )
    }

    return open ? openTrip() : closedTrip();
}