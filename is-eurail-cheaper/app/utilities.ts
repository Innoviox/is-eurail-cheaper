import {Dispatch} from "react";
import {StaticImageData} from "next/image";

// LatLng is a google maps type, Location is a eurail type
export type LatLng = {lat: number, lng: number};
export type Location = { longitude: number, latitude: number };
export type Result = { price: number, length: number, legs: LatLng[][] | undefined }
export type Endpoint = [Result[][], Dispatch<any>, StaticImageData]

export function increaseDate(date: Date, weeks: number, hour: number) {
    let newDate = new Date(date);
    newDate.setDate(newDate.getDate() + weeks * 7);
    newDate.setHours(hour);
    newDate.setMinutes(0);
    newDate.setSeconds(0);
    return newDate.getTime();
}
