import strftime from 'strftime';

let DT_FORMAT = "%Y-%m-%dT%H:%M:%S.000Z"
let url = (fromCityId, toCityId, timestamp) => `https://api.timetable.eurail.com/v2/timetable?origin=${fromCityId}&destination=${toCityId}&timestamp=${timestamp}&tripsNumber=5&currency=USD`
let stationUrl = (query) => `https://api.timetable.eurail.com/v2/locations?input=${query}&results=1`

async function stationToId(station) {
    return fetch(stationUrl(station))
        .then(response => response.json())
        .then(result => result[0].id);
}

async function get_journeys(from_city, to_city, date) {
    // todo currency
    let timestamp = strftime(DT_FORMAT, date);

    let from_id = await stationToId(from_city);
    let to_id = await stationToId(to_city);

    return fetch(url(from_id, to_id, timestamp))
        .then(response => response.json())
        .then(result => result.map(trip => {
            let start = new Date(trip.departure);
            let end = new Date(trip.arrival);
            let length = (end - start) / 1000;
            let legs = trip.legs.map(i => i.id);
            return {
                price: trip.price ?? 0,
                currency: "USD",
                length: length,
                departure: start
                // legs: legs
            }
        }));
}

export default async function handler (req, res) {
    res.status(200).json({ "journeys": await get_journeys(req.query.origin, req.query.destination, new Date(parseInt(req.query.date))) });
}