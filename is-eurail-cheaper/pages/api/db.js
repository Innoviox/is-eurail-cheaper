import _station from './_station.js';
import strftime from 'strftime';

let DT_FORMAT = "%Y-%m-%dT%H:%M:%S"
const URL = (from, to, date) => `https://v6.db.transport.rest/journeys?from=${from}&to=${to}&departure=${date}&results=5&stopovers=true`;

// todo do class & other parameters
const s = (name, id) => encodeURIComponent(`A=1@O=${name}@U=80@L=${id}@B=1@p=1698259482@`);
const resultsUrl = (name1, id1, name2, id2, date) => `https://www.bahn.de/buchung/fahrplan/suche#so=${name1}&zo=${name2}&soid=${s(name1, id1)}&zoid=${s(name2, id2)}&hd=${strftime(DT_FORMAT, date)}`;

function parseJourney(journey) {
    let price = journey.price === null ? NaN : journey.price.amount;
    let start = Date.parse(journey.legs[0].plannedDeparture);
    let end = Date.parse(journey.legs[journey.legs.length - 1].plannedArrival);

    let legs = journey.legs.map(leg => leg.stopovers === undefined ? [] : leg.stopovers.map(stopover => stopover.stop));

    console.log(journey.legs[0].origin, journey.legs[journey.legs.length - 1].destination);
    let origin = journey.legs[0].origin;
    let destination = journey.legs[journey.legs.length - 1].destination;

    return {
        "price": price,
        "currency": "EUR",
        "length": (end - start) / 1000,
        "legs": legs,
        "departure": start,
        "link": resultsUrl(origin.name, origin.id, destination.name, destination.id, new Date(start))
    };
}

export default async function handler (req, res) {
    // todo catch errors and such
    const [origin, destination] = await Promise.all([
        _station(req.query.origin).catch(error => null),
        _station(req.query.destination).catch(error => null),
    ])

    let d = new Date(parseInt(req.query.date)).toDateString();

    let data = await fetch(URL(origin.id, destination.id, d), {
        method: 'GET'
    })
        .then(response => response.json())
        .then(results => results.journeys.map(parseJourney));

    return res.status(200).json({ "journeys": data });
}