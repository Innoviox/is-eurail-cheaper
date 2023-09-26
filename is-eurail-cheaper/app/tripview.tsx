import React, {FormEvent} from "react";
import { useState, useEffect } from "react";
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

    function updateActiveTrip(key, newval) {
        let t = { ...trips[currentTrip] };
        t[key] = newval;

        let newTrips = [...trips];
        newTrips[currentTrip] = t;

        setTrips(newTrips);
    }

    function updateActiveTripPrices(key, newval) {
        let t = { ...trips[currentTrip] };
        t.prices[key] = newval;

        let newTrips = [...trips];
        newTrips[currentTrip] = t;

        setTrips(newTrips);
    }

    function extractPrice(trips: Array<any>) {
        // for now just use cheapest
        // console.log(eurail);
        return Math.min(...trips.map(i => parseInt(i.price)).filter(i => i >= 0));
    }

    async function onSearchSubmit(formData: FormData) {
        // todo make default trip if empty; problem is state does not update in time; manually set for use?
        // if (trips.length === 0) {
        //     tripName = "Default";
        //     createTrip();
        //     // useEffect(() => onSearchSubmit(formData), [currentTrip]);
        //     setCurrentTrip(0);
        //     // setCurrentTrip(0, () => onSearchSubmit(formData));
        //     return;
        // }

        if (currentTrip === -1) {
            return;
        }

        let cities = trips[currentTrip].cities;
        let [fromCity, fromCityId] = cities.size === 0 ? [undefined, undefined] : getLastItemInMap(cities);
        let toCity = formData.get("toCity");
        let toCityId = formData.get("toCityId");

        if (toCityId === fromCityId) { // todo give message
            return;
        }

        // setCities(cities.set(toCity, toCityId));
        updateActiveTripPrices("eurail", trips[currentTrip].prices.eurail.concat("+"));
        updateActiveTripPrices("db", trips[currentTrip].prices.db.concat("+"));
        updateActiveTrip("cities", cities.set(toCity, toCityId));

        if (fromCityId !== undefined) {
            formData.append("fromCity", fromCity);
            formData.append("fromCityId", fromCityId);

            let startLength = trips[currentTrip].prices.db.length - 2; // update this idx when it's done

            fetch('http://127.0.0.1:8000/api/price/eurail', {
                method: 'POST',
                body: formData,
            }).then(async response => {
                if (response.ok) {
                    let data = await response.json();
                    let price = extractPrice(data.journeys);
                    let newEurail = [...trips[currentTrip].prices.eurail];
                    newEurail[startLength] = price;
                    // setEurail(newEurail);
                    updateActiveTripPrices("eurail", newEurail);

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
                    let newPrices = [...trips[currentTrip].prices.db];
                    newPrices[startLength] = price;
                    // setPrices(newPrices);
                    updateActiveTripPrices("prices", newPrices);
                } else {
                    console.log("response not ok - price db");
                }
            });
        }
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

    function closeTrip() {
        setCurrentTrip(-1);
    }

    function renderTrip(trip: any, open: boolean): React.JSX.Element {
        return <Trip trip={trip} open={open} onopen={openTrip(trip)} onclose={closeTrip} />
    }

    function renderEmptyTrip(): React.JSX.Element {
        return <Trip trip={{name: '+ Create New Trip', empty: true}} open={false} onopen={newTripModal} onclose={undefined} />
    }

    function renderTrips(): React.JSX.Element {
        console.log(currentTrip);
        if (currentTrip === -1) {
            return (
                <div>
                     {trips.map(t => renderTrip(t, false))}
                     {renderEmptyTrip()}
                </div>
            );
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
        setTripName(""); // reset modal fields
    }

    function createTrip() {
        let t = emptyTrip();
        t.name = tripName;
        closeModal();
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
                        <button className="button is-success" disabled={tripName === ""} onClick={createTrip}>Create</button>
                        <button className="button" onClick={closeModal}>Cancel</button>
                    </footer>
                </div>
                <button className="modal-close is-large" aria-label="close" onClick={closeModal} />
            </div>
        )
    }

    return (
        <div id="trip-view">
            <SearchBar onSearchSubmit={onSearchSubmit} />
            <br />
            <div id="trips-box">
                <p>Your Trips</p>
                {renderTrips()}
            </div>
            {renderModal()}
        </div>
    )
}