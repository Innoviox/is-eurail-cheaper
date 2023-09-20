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
            }
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

    // function renderTrip(city: string, idx: number): React.JSX.Element | null {
    //     console.log(city, idx);
    //     if (idx === cities.size - 1) {
    //         return null;
    //     }
    //
    //     return (
    //         <div>
    //             <table className="table">
    //                 <tbody>
    //                     <tr>
    //                         <td>
    //                             <FontAwesomeIcon icon={faTrain} />
    //                         </td>
    //                         <td>{prices[idx] === '+' ?
    //                             <button className="button is-loading" disabled>Loading</button> :
    //                             prices[idx]}</td>
    //                         <td>{eurail[idx] === '+' ?
    //                             <button className="button is-loading" disabled>Loading</button> :
    //                             eurail[idx]}</td>
    //                     </tr>
    //                 </tbody>
    //             </table>
    //         </div>
    //     )
    // }

    function newTripModal() {
        return (
            <div>

            </div>
        )
    }

    function openTrip(trip) {

    }

    function renderTrip(trip: any): React.JSX.Element {
        return <Trip trip={trip} open={false} onclick={openTrip(trip)} />
    }

    function renderEmptyTrip(): React.JSX.Element {
        return <Trip trip={{name: '+'}} open={false} onclick={newTripModal} />
    }

    return (
        <div id="trip-container">
            <SearchBar onSearchSubmit={onSearchSubmit} />
            <br />
            <p>Your Trips</p>
            <div>
                {trips.length === 0 ? renderEmptyTrip() : trips.map(renderTrip)}
            </div>
        </div>
    )
}