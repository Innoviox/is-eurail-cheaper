import {createContext} from "react";
import {LatLng} from "@/app/util/types.ts";

export const ImposedCityContext = createContext<string[]>([]);
export const CurrencyContext = createContext("$ (USD)");
export const MapContext = createContext<google.maps.Map | null>(null);