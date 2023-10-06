'use client'
import React from "react";
import { useEffect, useRef, useMemo } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export default function MapView({latitude, longitude, coords}: {latitude: number; longitude: number, coords: any}) {
    console.log(coords);
    return (
        <MapContainer center={[latitude, longitude]} zoom={5} style={{height: "100vh"}}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
                coords.map(data => (
                    <Marker key={data} position={data}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                ))
            }
        </MapContainer>
    );
}