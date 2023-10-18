import journeys from '../juliuste-api/src/api/lib/journeys.js';
import parseParams from '../juliuste-api/src/api/lib/params.js';
import station from '../juliuste-api/src/api/lib/station.js';


function parseJourney(journey) {
    let price = journey.price.amount;
    let start = Date.parse(journey.legs[0].plannedDeparture);
    let end = Date.parse(journey.legs[journey.legs.length - 1].plannedArrival);
    return { "price": price, "length": (end - start) / 1000 };
}

export default async function handler (req, res) {
    let params = parseParams({}); // get defaults
    // todo catch errors and such
    const [origin, destination] = await Promise.all([
        station(req.query.origin).catch(error => null),
        station(req.query.destination).catch(error => null),
    ])
    params.origin = origin;
    params.destination = destination;
    params.date = new Date(); // todo
    let data = await journeys(params, params.date)
        .then(results => results.map(parseJourney));
    return res.status(200).json({ "journeys": data });
}