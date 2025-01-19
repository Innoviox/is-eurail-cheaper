import cleanStationName from "db-clean-station-name";
import isUicLocationCode from "is-uic-location-code";
import countries from "i18n-iso-countries";
import fetch from "node-fetch";
import uicCodes from "uic-codes";
import { fileURLToPath, URL } from "url";
import stationsMap from "./_stations_json.js";

const fetchStations = async (query) => {
  const urlA = new URL(
    "https://v5.db.transport.rest/locations?poi=false&addresses=false"
  );
  const urlB = new URL(
    "https://v5.db.api.bahn.guru/locations?poi=false&addresses=false"
  );
  urlA.searchParams.append("query", query);
  urlB.searchParams.append("query", query);

  return Promise.race([fetch(urlA), fetch(urlB)]).then((res) => res.json());
};

export const formatHafasStationId = (i) =>
  i.length === 9 && i.slice(0, 2) ? i.slice(2) : i;

const hafasStationIsLongDistanceOrRegionalOrSuburban = (s) => {
  return (
    s.products &&
    (s.products.nationalExp ||
      s.products.nationalExpress ||
      s.products.national ||
      s.products.regionalExp ||
      s.products.regionalExpress ||
      s.products.regional ||
      s.products.suburban) &&
    isUicLocationCode(formatHafasStationId(s.id))
  );
};

const hafasStationIsNotRegion = (hafasStation) => {
  return hafasStation.name.toUpperCase() !== hafasStation.name;
};

const fixHafasStationId = (hafasStation) => ({
  ...hafasStation,
  id: formatHafasStationId(hafasStation.id),
});

const countryForStationId = (id) => {
  if (!isUicLocationCode(id)) return undefined;
  const countryPrefix = +id.slice(0, 2);
  const alpha3 = uicCodes.toISO[countryPrefix];
  return alpha3 ? countries.alpha3ToAlpha2(alpha3) : undefined;
};

const stationHasLocation = (station) => {
  return !!station.location;
};

const fixStationName = (station) => ({
  ...station,
  name: cleanStationName(station.name),
});

const createStation = (hafasStation) => {
  const matchingEntry = stationsMap.get(hafasStation.id);
  return (
    matchingEntry || {
      id: hafasStation.id,
      name: hafasStation.name, // todo
      isMeta: false,
      country: countryForStationId(hafasStation.id),
      location: hafasStation.location
        ? {
            longitude: hafasStation.location.longitude,
            latitude: hafasStation.location.latitude,
          }
        : undefined,
    }
  );
};

export default async function handler(req, res) {
  const { query } = req.query;
  console.log(query);
  if (!query)
    return res
      .status(400)
      .json({ error: true, message: "missing `query` parameter" });

  try {
    // const hafasStations = await fetchStations(query);
    // console.log(hafasStations, hafasStations.filter);
    // const stations = hafasStations
    //   .filter(hafasStationIsLongDistanceOrRegionalOrSuburban)
    //   .filter(hafasStationIsNotRegion)
    //   .map(fixHafasStationId)
    //   .map(createStation)
    //   .filter(stationHasLocation)
    //   .map(fixStationName);
    const all_stations = [];
    for (const [key, value] of stationsMap.entries()) {
      // all_stations.push(value);
      if (value.name.toLowerCase().includes(query.toLowerCase())) {
        all_stations.push(value);
      }
    }
    return res.json(all_stations);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: true, message: "internal error" });
  }
}

// export const stationById = async (req, res) => {
// 	const { id } = req.params
// 	if (!id) return res.status(400).json({ error: true, message: 'missing `id` path parameter' })
//
// 	try {
// 		const maybeStation = stationsMap.get(String(req.params.id))
// 		if (maybeStation) return res.json(maybeStation)
//
// 		const hafasCandidates = await fetchStations(String(id))
// 		const [_station] = hafasCandidates
// 			.map(fixHafasStationId)
// 			.filter(hafasStation => hafasStation.id === String(id))
// 			.map(createStation)
// 			.map(fixStationName)
//
// 		if (_station) return res.json(_station)
// 		return res.status(404).json({ error: true, message: '_station not found' })
// 	} catch (error) {
// 		console.error(error)
// 		return res.status(500).json({ error: true, message: 'internal error' })
// 	}
// }
