import React, {FormEvent} from "react";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrain, faBus } from '@fortawesome/free-solid-svg-icons'

import SearchBar from './searchbar';
import Trip from './trip';

// todo currency, class
const eurailprices = { // https://www.eurail.com/en/eurail-passes/global-pass
    4: 211,
    5: 243,
    7: 288,
    10: 344,
    15: 380,
    22: 445,
    31: 576, // todo multimonth trips
};

export default function TripView() {
    const getLastItemInMap = (map: Map<string, string>) => [...map][map.size-1];

    let [trips, setTrips] = useState([]);
    let [modalActive, setModalActive] = useState(false);
    let [currentTrip, setCurrentTrip] = useState(-1);
    let [tripName, setTripName] = useState("");
    // let [cities, setCities] = useState(new Map<string, string>);
    // let [prices, setPrices] = useState([]);
    // let [eurail, setEurail] = useState([]);

    function emptyTrip() {
        return {
            'name': '',
            'cities': new Map<string, string>,
            'prices': {
                'db': [],
                'eurail': [],
                'flixbus': [],
                'hostelworld': [],
                'ryanair': []
            },
            'id': trips.length
        }
    }

    function extractPrice(trips: Array<any>) {
        // for now just use cheapest
        // console.log(eurail);
        return Math.min(...trips.map(i => parseInt(i.price)).filter(i => i >= 0));
    }

    async function onSearchSubmit(formData: FormData) {
        let [fromCity, fromCityId] = cities.size === 0 ? [undefined, undefined] : getLastItemInMap(cities);
        let toCity = formData.get("toCity");
        let toCityId = formData.get("toCityId");

        if (toCityId === fromCityId) { // todo give message
            return;
        }

        setCities(cities.set(toCity, toCityId));

        if (fromCityId !== undefined) {
            formData.append("fromCity", fromCity);
            formData.append("fromCityId", fromCityId);

            let startLength = prices.length - 1; // update this idx when it's done

            fetch('http://127.0.0.1:8000/api/price/eurail', {
                method: 'POST',
                body: formData,
            }).then(async response => {
                if (response.ok) {
                   let data = await response.json();
                   let price = extractPrice(data.journeys);
                   let newEurail = [...eurail];
                   newEurail[startLength] = price;
                   setEurail(newEurail);

                   // setEurail(eurail.concat(extractPrice(data.journeys))); // change based on startLength
               } else {
                   console.log("response not ok - price eurail");
               }
            });

            fetch('http://127.0.0.1:8000/api/price/db', {
                method: 'POST',
                body: formData,
            }).then(async response => {
                if (response.ok) {
                    let data = await response.json();
                    console.log(data);
                    let price = extractPrice(data.journeys);
                    let newPrices = [...prices];
                    newPrices[startLength] = price;
                    setPrices(newPrices);
                } else {
                    console.log("response not ok - price db");
                }
            });
        }

        setPrices(prices.concat("+"));
        setEurail(eurail.concat("+"));
    }

    function sumArr(arr: Array<any>) {
        return arr.slice(1).reduce((a, b) => a + b, 0);
    }

    function newTripModal() {
        setModalActive(true);
    }

    function openTrip(trip) {
        return () => setCurrentTrip(trip.id);
    }

    function renderTrip(trip: any, open: boolean): React.JSX.Element {
        return <Trip trip={trip} open={open} onclick={openTrip(trip)} />
    }

    function renderEmptyTrip(): React.JSX.Element {
        return <Trip trip={{name: '+'}} open={false} onclick={newTripModal} />
    }

    function renderTrips(): React.JSX.Element {
        console.log(currentTrip);
        if (trips.length === 0) {
            return renderEmptyTrip();
        } else if (currentTrip === -1) {
            return <div>{trips.map(t => renderTrip(t, false))}</div>;
        } else {
            return renderTrip(trips[currentTrip], true);
        }
    }

    function addTrip(t) {
        let newTrips = [...trips];
        newTrips.push(t);
        setTrips(newTrips);
    }

    function closeModal() {
        console.log("closing modal");
        setModalActive(false);
    }

    function createTrip() {
        closeModal();
        let t = emptyTrip();
        t.name = tripName;
        setCurrentTrip(t.id);
        addTrip(t);
    }

    function renderModal() {
        return (
            <div id="new-trip-modal" className={"modal " + (modalActive ? "is-active" : "")}>
                <div className="modal-background"></div>
                <div className="modal-card">
                    <section className="modal-card-body">
                        <div className="field is-horizontal">
                            <div className="field-label is-normal">
                                <label className="label">Trip Name</label>
                            </div>
                            <div className="field-body">
                                <div className="field">
                                    <p className="control">
                                        <input className="input" type="text" placeholder="Make it good..."
                                               value={tripName} onChange={evt => setTripName(evt.target.value)} />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <footer className="modal-card-foot">
                        <button className="button is-success" onClick={createTrip}>Create</button>
                        <button className="button">Cancel</button>
                    </footer>
                </div>
                <button className="modal-close is-large" aria-label="close" onClick={closeModal} />
            </div>
        )
    }

    return (
        <div id="trip-container">
            <SearchBar onSearchSubmit={onSearchSubmit} />
            <br />
            <p>Your Trips</p>
            <div>
                {renderTrips()}
            </div>
            {renderModal()}
        </div>
    )
}