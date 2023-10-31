import {Dispatch, RefObject} from "react";
import {StaticImageData} from "next/image";

// LatLng is a google maps type, Location is a eurail type
export type LatLng = {lat: number, lng: number};
export type Location = { longitude: number, latitude: number };
export type Result = { price: number, length: number, legs: LatLng[][] | undefined, departure: Date, link: string }
export type Endpoint = [Result[], Dispatch<any>, StaticImageData]
export type EndpointResult = { price: string, currency: string, length: string, legs: { location: Location }[][], departure: Date, link: string }
export type ICity = { name: string, id: string, location: LatLng }
export type Settings = { weeks: number, currency: string }