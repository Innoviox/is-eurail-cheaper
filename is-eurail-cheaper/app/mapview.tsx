'use client'
import React from "react";
import { useEffect, useRef, useMemo } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { MapContainer, TileLayer } from 'react-leaflet'

export default function MapView({latitude, longitude}: {latitude: number; longitude: number}) {
    return (
        <MapContainer center={[latitude, longitude]} zoom={5}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </MapContainer>
    );
}