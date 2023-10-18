/* Port of _strftime() by T. H. Doan (https://thdoan.github.io/strftime/)
 *
 * Day of year (%j) code based on Joe Orost's answer:
 * http://stackoverflow.com/questions/8619879/javascript-calculate-the-day-of-the-year-1-366
 *
 * Week number (%V) code based on Taco van den Broek's prototype:
 * http://techblog.procurios.nl/k/news/view/33796/14863/calculate-iso-8601-week-and-year-in-javascript.html
 */
import _strftime from './_strftime.js';

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
    // todo date
    let now = new Date();
    let timestamp = _strftime(DT_FORMAT, now);

    let from_id = await stationToId(from_city);
    let to_id = await stationToId(to_city);

    return fetch(url(from_id, to_id, timestamp))
        .then(response => response.json())
        .then(result => result.map(trip => {
            let start = new Date(trip.departure);
            let end = new Date(trip.arrival);
            let length = (end - start) / 1000;
            return {
                price: trip.price ?? 0,
                length: length
            }
        }));
}

export default async function handler (req, res) {
    res.status(200).json({ "journeys": await get_journeys(req.query.origin, req.query.destination, req.query.date) });
}