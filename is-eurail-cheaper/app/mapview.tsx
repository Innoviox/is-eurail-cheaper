'use client'
import React from "react";


export default function MapView({latitude, longitude}: {latitude: number; longitude: number}) {
    const ref = React.useRef(null);
    const [map, setMap] = React.useState<google.maps.Map | null>(null);

    React.useEffect(() => {
        if (ref.current && !map) {
            setMap(
                new window.google.maps.Map(ref.current, {
                    zoomControl: true,
                    mapTypeControl: false,
                    streetViewControl: false,
                    center: {
                        lat: latitude ?? 0,
                        lng: longitude ?? 0,
                    },
                    zoom: 11,
                })
            );
        }
    }, [ref, map, latitude, longitude]);

    return <div ref={ref} style={{height: '100%', width: '100%'}} />;
};