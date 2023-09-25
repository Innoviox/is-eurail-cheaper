import React, {useState, ChangeEvent, FormEvent, MouseEvent } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faTrain } from '@fortawesome/free-solid-svg-icons'

export default function Trip({trip, open, onopen, onclose}: {trip: any; open: boolean, onopen: any, onclose: any}) {
    let [cities, setCities] = useState(trip.cities);
    let [prices, setPrices] = useState(trip.prices);

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
                     <table className="table">
                         <tbody>
                             {
                                 Array.from(trip.cities.keys(), (city: string, idx: number) => (
                                     <tr key={city}>
                                         <td>
                                             <FontAwesomeIcon icon={faTrain} />
                                         </td>
                                         <td>{trip.prices[idx] === '+' ?
                                             <button className="button is-loading" disabled>Loading</button> :
                                             trip.prices[idx]}</td>
                                         <td>{trip.eurail[idx] === '+' ?
                                             <button className="button is-loading" disabled>Loading</button> :
                                             trip.eurail[idx]}</td>
                                     </tr>
                                 ))
                             }
                         </tbody>
                     </table>
                 </div>
            </div>
        )
    }

    function closedTrip() {
        return (
            <button className="button closed-trip is-large" onClick={onopen}>
                {trip.name}
            </button>
        )
    }

    return open ? openTrip() : closedTrip();
}