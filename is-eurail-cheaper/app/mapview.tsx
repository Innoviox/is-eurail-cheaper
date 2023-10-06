'use client'
import React from "react";
import { useEffect, useRef, useMemo } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { MapContainer, TileLayer } from 'react-leaflet'

export default function MapView({latitude, longitude}: {latitude: number; longitude: number}) {
    const mapRef = useRef(null);
    // const [map, setMap] = React.useState<google.maps.Map | null>(null);
    // useEffect(() => {
    //     return setMap(new window.google.maps.Map(mapRef.current, {
    //         zoomControl: true,
    //         mapTypeControl: false,
    //         streetViewControl: false,
    //         center: {
    //             lat: latitude ?? 0,
    //             lng: longitude ?? 0,
    //         },
    //         zoom: 5
    //     }));
    // }, [latitude, longitude]);
    // return <div style={{height: "100vh"}} ref={mapRef} />;
    return (
        <MapContainer center={[latitude, longitude]} zoom={5} style={{height: "100vh"}} ref={mapRef}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
    );
}