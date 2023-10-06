'use client'
import { useState } from "react";
import Image from 'next/image'
import {Wrapper} from '@googlemaps/react-wrapper';

import MapView from './mapview'
import TripView from './tripview'

import { FontAwesomeIcon }  from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
    let [coords, setCoords] = useState([]);
    let [lat, setLat] = useState(50);
    let [lng, setLng] = useState(10);

    function addCoords(lat: number, lng: number) {
        let newCoords = coords;
        newCoords.push([lat, lng]);
        setCoords(newCoords);
        console.log("adding coords", lat, lng);
        console.log("setting coords", newCoords);
        // setLat(lat);
        // setLng(lng);
    }

    return (
        <main id="main">
            <nav id="navbar" className="navbar is-light" role="navigation" aria-label="main navigation">
                <div className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item">
                          Home
                        </a>
                    </div>
                    <div className="navbar-end">
                        <a className="navbar-item">
                            <FontAwesomeIcon icon={faGear} />
                        </a>
                    </div>
              </div>
            </nav>
            <div id="container">
                <div id="map">
                  {/*<Wrapper apiKey="AIzaSyCfa86sCHMFXR6ZHO-GqpUvFpffWCUroOc">*/}
                  {/*<Wrapper apiKey="dead">*/}
                    <MapView latitude={lat} longitude={lng} coords={coords} />
                  {/*</Wrapper>*/}
                </div>
                <div id="trip">
                  <TripView addCoords={addCoords}/>
                </div>
            </div>
        </main>
    )
}
