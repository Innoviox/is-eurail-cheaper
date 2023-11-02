import _station from './_station.js';
import strftime from 'strftime';

import SNCFprice from './sncf.js';

let DT_FORMAT = "%Y-%m-%dT%H:%M:%S"
const URL = (from, to, date) => `https://v6.db.transport.rest/journeys?from=${from}&to=${to}&departure=${date}&results=5&stopovers=true`;

// todo do class & other parameters
const s = (name, id) => encodeURIComponent(`A=1@O=${name}@U=80@L=${id}@B=1@p=1698259482@`);
const resultsUrl = (name1, id1, name2, id2, date) => `https://www.bahn.de/buchung/fahrplan/suche#so=${name1}&zo=${name2}&soid=${s(name1, id1)}&zoid=${s(name2, id2)}&hd=${strftime(DT_FORMAT, date)}`;

const providers = {
    'sncf': SNCFprice
}

function multiApi(journey) {
    return Promise.all(journey.legs.map(async leg => {
        let pricer = providers[leg.line.operator.id];
        if (providers[leg.line.operator.id] === undefined) {
            console.log("couldn't find", leg.line.operator.id);
            return null;
        } else {
            return await pricer(leg.tripId, leg.line.productName);
        }
    }));
}

async function parseJourney(journey) {
    let price = 0, incomplete = false;
    if (journey.price === null) {
        let multiPrices = await multiApi(journey);
        multiPrices.forEach(p => {
            if (p === null) {
                incomplete = true; // todo tell which is incomplete (provide more info)
            } else {
                price += p;
            }
        });
    } else {
        price = journey.price.amount;
    }

    let start = Date.parse(journey.legs[0].plannedDeparture);
    let end = Date.parse(journey.legs[journey.legs.length - 1].plannedArrival);

    let legs = journey.legs.map(leg => leg.stopovers === undefined ? [] : leg.stopovers.map(stopover => stopover.stop));

    let origin = journey.legs[0].origin;
    let destination = journey.legs[journey.legs.length - 1].destination;

    return {
        "price": price,
        "currency": "EUR",
        "length": (end - start) / 1000,
        "legs": legs,
        "departure": start,
        "link": resultsUrl(origin.name, origin.id, destination.name, destination.id, new Date(start)),
        "incomplete": incomplete
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
        .then(results => Promise.all(results.journeys.map(async (j) => parseJourney(j))));

    return res.status(200).json({ "journeys": data });
}