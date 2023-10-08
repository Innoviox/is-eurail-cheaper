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
    let [meaningless, setMeaningless] = useState(143);

    function addCoords(lat: number, lng: number) {
        let newCoords = coords;
        newCoords.push({'lat': lat, 'lng': lng});
        setCoords(newCoords);
        setMeaningless(meaningless + 1);
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
                  <Wrapper apiKey="AIzaSyCfa86sCHMFXR6ZHO-GqpUvFpffWCUroOc" version="beta" libraries={["marker"]}>
                  {/*<Wrapper apiKey="dead">*/}
                    <MapView latitude={lat} longitude={lng} coords={coords} meaningless={meaningless} />
                  </Wrapper>
                </div>
                <div id="trip">
                  <TripView addCoords={addCoords}/>
                </div>
            </div>
        </main>
    )
}
