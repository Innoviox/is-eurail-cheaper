'use client'
import React from "react";
import { useEffect, useRef, useMemo } from "react";
import { Loader } from "@googlemaps/js-api-loader";
export default function MapView({latitude, longitude, coords}: {latitude: number; longitude: number, coords: any}) {
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

    useEffect(() => {
        coords.forEach(position => {
            new window.google.maps.Marker({
                position,
                map,
            })
        })
    }, [coords, map]);

    return <div style={{height: "100vh"}} ref={mapRef} />;
}