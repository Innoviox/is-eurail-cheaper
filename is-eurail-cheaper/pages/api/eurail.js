import _station from './_station.js';
import strftime from 'strftime';

let DT_FORMAT = "%Y-%m-%dT%H:%M:%S.000Z"
let url = (fromCityId, toCityId, timestamp) => `https://api.timetable.eurail.com/v2/timetable?origin=${fromCityId}&destination=${toCityId}&timestamp=${timestamp}&tripsNumber=5&currency=USD`
let stationUrl = (query) => `https://api.timetable.eurail.com/v2/locations?input=${query}&results=1`
let stopsUrl = (leg, start, end) => `https://api.timetable.eurail.com/v2/stops?leg=${encodeURIComponent(leg)}&start=${start}&end=${end}`
let resultUrl = (from_city, from_id, to_city, to_id, dateInMS) => `https://www.eurail.com/en/book-reservations?ol=${from_city}&ov=${from_id}&dl=${to_city}&dv=${to_id}&t=${dateInMS}`

async function stationToId(station) {
    return fetch(stationUrl(station))
        .then(response => response.json())
        .then(result => result[0].id);
}

async function getStops(leg) {
    return fetch(stopsUrl(leg.id, leg.start.id, leg.end.id))
        .then(response => response.json())
        .then(result => {
            if (result.stops === undefined) { // some legs have no stops (eurail counts platform changes as "legs")
                return [];
            }

            // sometimes the start and end aren't in there for some reason so add them in
            return Promise.all([
                _station(leg.start.station),
                ...result.stops.map(stop => _station(stop.station)),
                _station(leg.end.station)
            ]);
        });
}

async function get_journeys(from_city, to_city, date) {
    // todo currency
    let timestamp = strftime(DT_FORMAT, date);

    let from_id = await stationToId(from_city);
    let to_id = await stationToId(to_city);

    return fetch(url(from_id, to_id, timestamp))
        .then(response => response.json())
        .then(result => Promise.all(result.map(trip => {
            let start = new Date(trip.departure);
            let end = new Date(trip.arrival);
            let length = (end - start) / 1000;

            return Promise.all(trip.legs.map(leg => getStops(leg)))
                .then(legs => { return {
                    price: trip.price ?? 0,
                    currency: "USD",
                    length: length,
                    departure: start,
                    link: resultUrl(from_city, from_id, to_city, to_id, date.getTime()),
                    legs: legs
                }});
        })));
}

export default async function handler (req, res) {
    await get_journeys(req.query.origin, req.query.destination, new Date(parseInt(req.query.date)))
            .then(journeys => res.status(200).json({ "journeys": journeys }));
}