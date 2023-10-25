'use client'
import {Dispatch, useState} from "react";

import {Wrapper} from '@googlemaps/react-wrapper';

import MapView from './components/MapView.tsx';
import TripView from './components/TripView.tsx';
import Settings, { CurrencyContext } from './components/modal/Settings.tsx';
import About from '@/app/components/modal/About.tsx';
import Guide from './components/modal/Guide.tsx';

import { LatLng } from "./util/types.ts";

import { FontAwesomeIcon }  from "@fortawesome/react-fontawesome";
import { faGear, faQuestion, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { initialize } from "./util/colors.ts";

import Image from 'next/image';
import scale from "./img/scale.png";

initialize();


export default function Home() {
    let [coords, setCoords] : [{lat: number, lng: number}[], Dispatch<any>] = useState([]);
    let lat = 50, lng = 10;

    let [meaningless, setMeaningless] = useState(143);
    let [visible, setVisible] = useState(false);
    let [visible2, setVisible2] = useState(false);
    let [visible3, setVisible3] = useState(false);

    let [weeks, setWeeks] = useState(2);
    let [currency, setCurrency] = useState("$ (USD)");

    let [stops, setStops]: [LatLng[][][], Dispatch<any>] = useState([]);
    let [meaningless2, setMeaningless2] = useState(0);

    let [zoomTo, setZoomTo] = useState(-1);

    function addCoords(lat: number, lng: number, idx: number | undefined = undefined) {
        let newCoords = coords;
        if (idx === undefined) {
            newCoords.push({'lat': lat, 'lng': lng});
        } else {
            newCoords[idx] = {'lat': lat, 'lng': lng};
        }
        setCoords(newCoords);
        setMeaningless(meaningless + 1);
    }

    function addStops(newStops: LatLng[][][], set: number | number[] | undefined = undefined) {
        let newS = stops;

        if (set === undefined) {
            newS.push(newStops[0]);
        } else if (Array.isArray(set)) {
            set.forEach((s, idx) => {
                newS[s] = newStops[idx];
            });
        } else {
            newS[set] = newStops[0];
        }

        setStops(newS);
        setMeaningless2(meaningless2 + 1);
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
                        <a className="navbar-item" onClick={() => setVisible3(true)}>
                            <FontAwesomeIcon icon={faQuestion} />
                        </a>
                        <a className="navbar-item" onClick={() => setVisible(true)}>
                            <FontAwesomeIcon icon={faGear} />
                        </a>
                        <a className="navbar-item" onClick={() => setVisible2(true)}>
                            <FontAwesomeIcon icon={faCircleInfo} />
                        </a>
                        <a className="navbar-item" href="https://github.com/Innoviox/is-eurail-cheaper">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>
              </div>
            </nav>
            <div id="container">
                <div id="map">
                  <Wrapper apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "dead"} version="beta" libraries={["marker"]}>
                  {/*<Wrapper apiKey="dead">*/}
                    <MapView latitude={lat} longitude={lng} coords={coords} meaningless={meaningless}
                             stops={stops} meaningless2={meaningless2} zoomTo={zoomTo} setZoomTo={setZoomTo} />
                  </Wrapper>
                </div>
                <div id="trip">
                    <CurrencyContext.Provider value={currency}>
                        <TripView addCoords={addCoords} weeks={weeks} addStops={addStops} setZoomTo={setZoomTo} removeStops={removeStops} />
                    </CurrencyContext.Provider>
                </div>
            </div>
            <Settings visible={visible} setVisible={setVisible} setWeeksGlobal={setWeeks} setCurrencyGlobal={setCurrency} />
            <About visible={visible2} setVisible={setVisible2} />
            <Guide visible={visible3} setVisible={setVisible3} />
        </main>
    )
}
