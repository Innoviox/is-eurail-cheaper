import {createContext} from "react";
import {LatLng} from "@/app/util/types.ts";

export const ImposedCityContext = createContext<string[]>([]);
export const SettingsContext = createContext({weeks: 2, currency: "$ (USD)"});
export const MapContext = createContext<google.maps.Map | null>(null);