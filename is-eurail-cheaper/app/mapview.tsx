'use client'
import React from "react";
import { useEffect, useRef, useMemo } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { FontAwesomeIcon }  from "@fortawesome/react-fontawesome";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
import ReactDOMServer from "react-dom/server";
import {createRoot} from "react-dom/client";

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

function MarkerWrapper({ map, coords }) {
    return coords.map((position, idx) => {
        return (
            <Marker key={`marker-${idx}`} map={map} position={position} onClick={() => console.log("clicked")}>
                <FontAwesomeIcon icon={faMapPin} />
            </Marker>
        )
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
            <div style={{height: "100vh"}} ref={mapRef} />
            <MarkerWrapper map={map} coords={coords} />
        </div>
    );
}