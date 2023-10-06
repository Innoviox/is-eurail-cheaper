'use client'
import React from "react";
import { useEffect, useRef, useMemo } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { MapContainer, TileLayer } from 'react-leaflet'

export default function MapView({latitude, longitude}: {latitude: number; longitude: number}) {
    const mapRef = useRef(null);

    return (
        <MapContainer center={[latitude, longitude]} zoom={5} style={{height: "100vh"}} ref={mapRef}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
    );
}