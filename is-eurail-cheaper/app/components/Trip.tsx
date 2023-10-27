import {Endpoint, EndpointResult, LatLng, Location, Result} from "@/app/util/types.ts";
import {increaseDate, toUSD} from "@/app/util/utilities.ts";
import db_image from "@/app/img/db.png";
import eurail_image from "@/app/img/eurail.png";
import React, {
    Dispatch,
    useContext,
    useEffect,
    useState,
    forwardRef,
} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRightLong, faCity, faMagnifyingGlassPlus, faRoute} from "@fortawesome/free-solid-svg-icons";
import PriceDisplay from "@/app/components/PriceDisplay.tsx";
import Picker from "@/app/components/Picker.tsx";
import City from "@/app/components/City.tsx";
import colors from "@/app/util/colors.ts";
import {MapContext, SettingsContext} from "../util/contexts.ts";
import { MarkerWrapper, pathToBounds } from "./MapView.tsx";
import { ICity } from "../util/types.ts";

const PRICE_API = (endpoint: string, origin: string, destination: string, date: number) => `${process.env.NEXT_PUBLIC_API_URL}/${endpoint}?origin=${origin}&destination=${destination}&date=${date}`;

const sentinel = -100;
export default function Trip({ fromCity, toCity, setSearchEnabled, setImposedCity, onSearchSubmit, idx, deleteCity, addData }: {
    fromCity: ICity,
    toCity: ICity | undefined,
    setSearchEnabled: Dispatch<any>,
    setImposedCity: Dispatch<any>,
    onSearchSubmit: (f: FormData, l: Location, i: number) => void,
    idx: number,
    deleteCity: (n: number) => void,
    addData: (key: string, value: number[]) => void
}) {
    const settings = useContext(SettingsContext);

    let map = useContext(MapContext);

    let [db, setDb]: [Result[], Dispatch<any>] = useState([]);
    let [eurail, setEurail]: [Result[], Dispatch<any>] = useState([]);
    let [stops, setStops]: [LatLng[][], Dispatch<any>] = useState([]);

    const endpoints: {db: Endpoint, eurail: Endpoint} = {"db": [db, setDb, db_image], "eurail": [eurail, setEurail, eurail_image]};

    function sortPrices(n: Result[]) {
        return n.sort((a, b) => a.price === b.price ? a.length - b.length : a.price - b.price);
    }

    // todo Stop type
    function extractPrice(trips: EndpointResult[]) {
        return sortPrices(trips.map(i => {
            return {
                price: toUSD(parseInt(i.price), i.currency),
                length: parseInt(i.length),
                legs: i.legs === undefined ? undefined : i.legs.map((leg: {location: Location}[]) => leg.map(stop =>
                { return { lat: stop.location.latitude, lng: stop.location.longitude }; })),
                departure: new Date(i.departure)
            };
        }).slice(0, 5));
    }

    async function calculate() {
        if (toCity === undefined) {
            return;
        }

        console.log("CALCULATING", fromCity, toCity);

        setDb([{ price: sentinel, length: sentinel }]);
        setEurail([{ price: sentinel, length: sentinel }]);
        setStops([]);

        setSearchEnabled(false);
        let addedStops = false;
        let d = increaseDate(new Date(), settings.weeks, 8);
        let values = await Promise.all(Object.entries(endpoints).map(async ([key, [lst, setlst, _img]], endpoint_num) => {
            await fetch(PRICE_API(key, fromCity.name, toCity.name, d), {
                method: 'GET'
            }).then(async response => {
                if (response.ok) {
                    let data = await response.json();
                    let price = extractPrice(data.journeys);

                    setlst(price);

                    if (!addedStops && price[0].legs !== undefined) {
                        setStops(price[0].legs);
                        addedStops = true;
                    }
                } else {
                    console.log(`response not ok - price ${key}`);
                }
            });
        }));
        setSearchEnabled(true);
    }

    function setFirst(data: any[], setlst: Dispatch<any>, n: number) {
        let lst = [...data];
        let temp = lst[n]; // store target
        lst.splice(n, 1); // remove target number
        lst = sortPrices(lst); // sort
        lst.unshift(temp); // put target at front
        setlst(lst);
    }

    function makeCity(name: string, n: number) {
        return <City name={name} color={colors[idx + n]}
                     onSearchSubmit={(f, l) => onSearchSubmit(f, l, idx + n)}
                     setImposedCity={setImposedCity}
                     deleteCity={() => deleteCity(idx + n)} />
    }

    function renderUpper() {
        return  (
            <div className="upper level"> {/* onClick={() => toggleOpen(idx)}> */}
                <div className="level-left">
                    <div className="level-item">
                        <div>
                            <FontAwesomeIcon icon={faRoute} />
                        </div>
                    </div>
                    <div className="level-item">
                        <div>
                            {makeCity(fromCity.name, 0)}
                        </div>
                    </div>
                    <div className="level-item">
                        <div>
                            <FontAwesomeIcon icon={faArrowRightLong}/>
                        </div>
                    </div>
                    <div className="level-item">
                        <div>
                            {makeCity(toCity!.name, 1)}
                        </div>
                    </div>
                </div>
                <div className="level-right">
                    <div className="tags">
                        <div className="tag action-tag is-link" onClick={() => map && map.fitBounds(pathToBounds(stops.flat()), 10)}>
                            <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    function renderPrices() {
        if (toCity !== undefined) {
            return (
                <div>
                    <div className="prices-container">
                        {renderUpper()}
                        <div className={"lower " }> {/* + (open[idx] ? "lower-open" : "lower-closed")}>*/}
                            <div className="lower-inner">
                                {Object.entries(endpoints).map(([key, [lst, setlst, img]]) => (
                                    <div key={key} className="level">
                                        <div className="level-left">
                                            <div className="level-item">
                                                <div>
                                                    <PriceDisplay img={img}>
                                                        {lst.length === 0 || lst[0].price === -100 ?
                                                            <button className="button is-loading is-ghost">Loading</button> :
                                                            <Picker data={lst} parentOpen={true}
                                                                    setFirst={(n) => setFirst(lst, setlst, n)}
                                                                    setStops={(n) => {
                                                                        let l = lst[n].legs;
                                                                        if (l !== undefined) {
                                                                            setStops(l);
                                                                        }
                                                                    }}/>
                                                        }
                                                    </PriceDisplay>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else  {
            return (
                <div className="level prices-container">
                    <div className="level-left">
                        <div className="level-item">
                            <div>
                                <FontAwesomeIcon icon={faCity} />
                            </div>
                        </div>
                        <div className="level-item">
                            <div>
                                {makeCity(fromCity.name, 0)}
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    useEffect(() => {
        const calc = async () => calculate();
        calc().then(() => []);
    }, [fromCity, toCity]);

    useEffect(() => {
        if (db.length > 0 && eurail.length > 0) {
            addData(fromCity.name + toCity!.name, [db[0].price, eurail[0].price])
        }
    }, [db, eurail])

    return (
        <div>
            {renderPrices()}
            <MarkerWrapper map={map ?? null} from={fromCity.location} to={toCity === undefined ? undefined : toCity!.location} stops={stops} colors={[colors[idx], colors[idx + 1]]}/>
        </div>
    )
}