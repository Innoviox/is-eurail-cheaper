import _journeys from './_journeys.js';
import parseParams from './_params.js';
import _station from './_station.js';


function parseJourney(journey) {
    let price = journey.price.amount;
    let start = Date.parse(journey.legs[0].plannedDeparture);
    let end = Date.parse(journey.legs[journey.legs.length - 1].plannedArrival);
    console.log(journey.legs[0]);
    return { "price": price, "length": (end - start) / 1000 };
}

export default async function handler (req, res) {
    let params = parseParams({}); // get defaults
    // todo catch errors and such
    const [origin, destination] = await Promise.all([
        _station(req.query.origin).catch(error => null),
        _station(req.query.destination).catch(error => null),
    ])
    params.origin = origin;
    params.destination = destination;
    params.date = new Date(); // todo
    let data = await _journeys(params, params.date)
        .then(results => results.map(parseJourney));
    return res.status(200).json({ "journeys": data });
}