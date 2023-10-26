import {createContext} from "react";
import {LatLng} from "@/app/util/types.ts";

export const ImposedCityContext = createContext<string[]>([]);
export const CoordsContext = createContext<LatLng[]>([]);
export const StopsContext = createContext<LatLng[][][]>([]);
export const CurrencyContext = createContext("$ (USD)");
