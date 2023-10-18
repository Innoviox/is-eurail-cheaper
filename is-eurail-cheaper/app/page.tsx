'use client'
import {Dispatch, useState} from "react";

import {Wrapper} from '@googlemaps/react-wrapper';

import MapView from './mapview';
import TripView from './tripview';

import { FontAwesomeIcon }  from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { initialize } from "./colors";

import Image, {StaticImageData} from 'next/image';
import scale from "./img/scale.png";

initialize();

// scale: <a href="https://www.flaticon.com/free-icons/scale" title="scale icons">Scale icons created by Freepik - Flaticon</a>

export default function Home() {
    let [coords, setCoords] : [{lat: number, lng: number}[], Dispatch<any>] = useState([]);
    let [lat, setLat] = useState(50);
    let [lng, setLng] = useState(10);
    let [meaningless, setMeaningless] = useState(143);
    let [ending, setEnding] = useState(false);
    function addCoords(lat: number, lng: number) {
        let newCoords = coords;
        newCoords.push({'lat': lat, 'lng': lng});
        setCoords(newCoords);
        setMeaningless(meaningless + 1);
    }

    return (
        <main id="main">
            <nav id="navbar" className="navbar is-light" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <div className="navbar-item">
                        <Image src={scale} alt="scale" className="logo" />
                    </div>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-start">
                        <span className="navbar-item">
                          Is Eurail Cheaper?
                        </span>
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
                  <Wrapper apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "dead"} version="beta" libraries={["marker"]}>
                  {/*<Wrapper apiKey="dead">*/}
                    <MapView latitude={lat} longitude={lng} coords={coords} meaningless={meaningless} />
                  </Wrapper>
                </div>
                <div id="trip">
                  <TripView addCoords={addCoords} />
                </div>
            </div>
        </main>
    )
}
