'use client'
import React from "react";
import { useEffect, useRef, useMemo } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { FontAwesomeIcon }  from "@fortawesome/react-fontawesome";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
import ReactDOMServer from "react-dom/server";
import {createRoot} from "react-dom/client";
import colors from "./colors";

// absolute god https://github.com/leighhalliday/google-maps-threejs/blob/main/pages/markers.js
function Marker({ map, position, children, onClick }) {
    const rootRef = useRef();
    const markerRef = useRef();

    useEffect(() => {
        if (!rootRef.current) {
            const container = document.createElement("div");
            rootRef.current = createRoot(container);

            markerRef.current = new google.maps.marker.AdvancedMarkerView({
                position,
                content: container,
            });
        }

        return () => (markerRef.current.map = null);
    }, []);

    useEffect(() => {
        rootRef.current.render(children);
        markerRef.current.position = position;
        markerRef.current.map = map;
        const listener = markerRef.current.addListener("click", onClick);
        return () => listener.remove();
    }, [map, position, children, onClick]);

    return <></>;
}

function Route({ map, path }) {
    const routeRef = useRef();

    useEffect(() => {
        console.log(path);
        if (!routeRef.current) {
            routeRef.current = new google.maps.Polyline({
                path: path,
                // geodesic: true,
                strokeColor: "#879799",
                strokeOpacity: 1.0,
                strokeWeight: 2
            });
        }
        return () => (routeRef.current.map = null);
    }, []);

    useEffect(() => {
        // routeRef.current.map = map;
        routeRef.current.setMap(map);
        routeRef.current.path = path;
    }, [map, path]);

    return <></>;
}

function MarkerWrapper({ map, coords }) {
    let circles = [0]; //, 1, 2, 3];
    let previousPosition = null;
    let path = null;
    return coords.map((position, idx) => {
        if (previousPosition !== null) {
            path = [previousPosition, position];
        }
        previousPosition = position;
        return (
            <div>
            <Marker key={`marker-${idx}`} map={map} position={position} onClick={() => console.log("clicked")}>
                {/*<FontAwesomeIcon icon={faMapPin} />*/}
                <div id="circle-container">
                    <div className="item" style={{backgroundColor: colors[idx]}}></div>
                    {/* add circles on last element*/}
                    { idx === coords.length - 1 ? circles.map(i => {
                        return (
                            <div key={i} className="circle" style={{"animationDelay": `${i}s`,
                                                                    "border": `1px solid ${colors[idx]}`}} />
                        )}): <></> }
                </div>
            </Marker>
            { path !== null ? <Route key={`route-${idx}`} map={map} path={path} /> : <></> }
            </div>
        );
    });
}

export default function MapView({latitude, longitude, coords, meaningless}: {latitude: number; longitude: number, coords: any, meaningless: number}) {
    const mapRef = useRef(null);
    const [map, setMap] = React.useState<google.maps.Map | null>(null);

    useEffect(() => {
        return setMap(new window.google.maps.Map(mapRef.current, {
            zoomControl: true,
            mapTypeControl: false,
            streetViewControl: false,
            center: {
                lat: latitude ?? 0,
                lng: longitude ?? 0,
            },
            zoom: 5,
            mapId: 'DEMO_MAP_ID'
        }));
    }, [latitude, longitude]);

    return (
        <div>
            <div style={{height: "94vh"}} ref={mapRef} />
            <MarkerWrapper map={map} coords={coords} />
        </div>
    );
}