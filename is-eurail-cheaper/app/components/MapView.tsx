'use client'
import React, {MutableRefObject, ReactElement} from "react";
import { useEffect, useRef } from "react";
import {createRoot, Root} from "react-dom/client";
import colors from "../util/colors.ts";
import { LatLng } from "../util/types.ts";

function pathToBounds(path: LatLng[]): google.maps.LatLngBounds {
    let sw = {lat: path[0].lat, lng: path[0].lng};
    let ne = {lat: path[0].lat, lng: path[0].lng};

    for (let i = 1; i < path.length; i++) {
        let lat = path[i].lat;
        let lng = path[i].lng;

        sw.lat = Math.min(sw.lat, lat);
        sw.lng = Math.min(sw.lng, lng);
        ne.lat = Math.max(ne.lat, lat);
        ne.lng = Math.max(ne.lng, lng);
    }

    let b = new google.maps.LatLngBounds(sw, ne);

    console.log(b);

    return b;
}

// absolute god https://github.com/leighhalliday/google-maps-threejs/blob/main/pages/markers.js
function Marker({ map, position, children, onClick }:
                { map: google.maps.Map | null, position: LatLng, children: ReactElement, onClick: () => void}) {
    const rootRef: MutableRefObject<Root | undefined> = useRef();
    // @ts-ignore -- this class does actually exist but typescript can't see it
    const markerRef: MutableRefObject<google.maps.marker.AdvancedMarkerView> = useRef();

    useEffect(() => {
        if (!rootRef.current) {
            const container = document.createElement("div");
            rootRef.current = createRoot(container);

            // @ts-ignore
            markerRef.current = new google.maps.marker.AdvancedMarkerView({
                position,
                content: container,
            });
        }

        return () => {markerRef.current.map = null};
    }, [position]);

    useEffect(() => {
        if (rootRef.current) {
            rootRef.current.render(children);
        }
        markerRef.current.position = position;
        markerRef.current.map = map;
        const listener = markerRef.current.addListener("click", onClick);
        return () => listener.remove();
    }, [map, position, children, onClick]);

    return <></>;
}

function Route({ map, path, color }: {map: google.maps.Map | null, path: LatLng[], color: string}) {
    const routeRef: MutableRefObject<google.maps.Polyline | null> = useRef(null);

    useEffect(() => {
        if (!routeRef.current) {
            routeRef.current = new google.maps.Polyline({
                path: path,
                // geodesic: true,
                strokeColor: color,
                strokeOpacity: 1.0,
                strokeWeight: 2
            });
        }
        return () => { routeRef.current !== null && routeRef.current.setMap(null) };
    }, [path]);

    useEffect(() => {
        if (routeRef.current === null) {
            return;
        }

        routeRef.current.setMap(map);
        routeRef.current.setPath(path);
    }, [map, path]);

    return <></>;
}

function MarkerWrapper({ map, coords, stops }: {map: google.maps.Map | null, coords: LatLng[], stops: LatLng[][][]}) {
    let circles = [0]; //, 1, 2, 3];
    let previousPosition: LatLng;
    let path: LatLng[];

    // console.log("GOT STOPS", stops);

    return coords.map((position, idx) => {
        if (previousPosition !== null) {
            path = [previousPosition, position];
        }
        previousPosition = position;
        return (
            <div key={idx}>
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
            { (idx > 0 && stops.length > (idx - 1) && stops[idx - 1].length > 0) ?
                stops[idx - 1].map((leg, i) => <Route key={`stopovers-${i}`} map={map} path={leg} color={"#AE359A"} />)
            : (path ? <Route key={`route-${idx}`} map={map} path={path} color={"#879799"} /> : <></>)}
            </div>
        );
    });
}

function Zoomer({ map, stops, zoomTo, setZoomTo }: {map: google.maps.Map | null, stops: LatLng[][][], zoomTo: number, setZoomTo: (n: number) => void  }) {
    if (map !== null) {
        if (zoomTo !== -1) {
            map.fitBounds(pathToBounds(stops[zoomTo].flat()), 10);
        }

        map.addListener("zoom_changed", () => {
            setZoomTo(-1);
        });
    }

    return <></>;
}

export default function MapView({ latitude, longitude, coords, meaningless, stops, meaningless2, zoomTo, setZoomTo }:
                                { latitude: number; longitude: number,
                                  coords: any, meaningless: number, stops: LatLng[][][], meaningless2: number, zoomTo: number, setZoomTo: (n: number) => void }) {
    const mapRef = useRef(null);
    const [map, setMap] = React.useState<google.maps.Map>();

    useEffect(() => {
        if (mapRef.current === null) {
            return;
        }

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
            <MarkerWrapper map={map ?? null} coords={coords} stops={stops} />
            <Zoomer map={map ?? null} stops={stops} zoomTo={zoomTo} setZoomTo={setZoomTo} />
        </div>
    );
}