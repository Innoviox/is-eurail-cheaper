import {Dispatch} from "react";
import {StaticImageData} from "next/image";

// LatLng is a google maps type, Location is a eurail type
export type LatLng = {lat: number, lng: number};
export type Location = { longitude: number, latitude: number };
export type Result = { price: number, length: number, legs: LatLng[][] | undefined, departure: Date }
export type Endpoint = [Result[], Dispatch<any>, StaticImageData]
export type EndpointResult = { price: string, currency: string, length: string, legs: { location: Location }[][], departure: Date }