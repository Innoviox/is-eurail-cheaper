'use client'
import React, {Dispatch, useState} from "react";

import {Wrapper} from '@googlemaps/react-wrapper';

import MapView from './components/MapView.tsx';
import TripView from './components/TripView.tsx';
import Settings from './components/modal/Settings.tsx';
import About from '@/app/components/modal/About.tsx';
import Guide from './components/modal/Guide.tsx';

import { LatLng } from "./util/types.ts";

import { FontAwesomeIcon }  from "@fortawesome/react-fontawesome";
import { faGear, faQuestion, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { initialize } from "./util/colors.ts";
import { SettingsContext, MapContext } from "./util/contexts.ts";

import Image from 'next/image';
import scale from "./img/scale.png";

initialize();



export default function Home() {
    let lat = 50, lng = 10;

    let [visible, setVisible] = useState(false);
    let [visible2, setVisible2] = useState(false);
    let [visible3, setVisible3] = useState(false);

    let [settings, setSettings] = useState({weeks: 2, currency: "$ (USD)"});

    let [map, setMap] = useState<google.maps.Map | null>(null);

    return (
        <MapContext.Provider value={map}>
        <SettingsContext.Provider value={settings}>
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
                        <MapView latitude={lat} longitude={lng} setMap={setMap} />
                    </Wrapper>
                </div>
                <div id="trip">
                    <TripView />
                </div>
            </div>
            <Settings visible={visible} setVisible={setVisible} setSettings={setSettings} />
            <About visible={visible2} setVisible={setVisible2} />
            <Guide visible={visible3} setVisible={setVisible3} />
        </main>
        </SettingsContext.Provider>
        </MapContext.Provider>
    )
}
