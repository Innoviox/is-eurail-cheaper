'use client'
import React from "react";
import { useEffect, useRef, useMemo } from "react";
import { Loader } from "@googlemaps/js-api-loader";
export default function MapView({latitude, longitude}: {latitude: number; longitude: number}) {
    const mapRef = useRef(null);
    const [map, setMap] = React.useState<google.maps.Map | null>(null);
    useEffect(() => {
        setMap( new window.google.maps.Map(mapRef.current, {
                        zoomControl: true,
                        mapTypeControl: false,
                        streetViewControl: false,
                        center: {
                            lat: latitude ?? 0,
                            lng: longitude ?? 0,
                        },
                        zoom: 11,}));
    }, [latitude, longitude]);
    return <div style={{height: "400px"}} ref={mapRef}/>;
}