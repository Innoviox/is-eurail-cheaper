import _station from './_station.js';

const URL = (from, to, date) => `https://v6.db.transport.rest/journeys?from=${from}&to=${to}&departure=${date}&results=5&stopovers=true`;

function parseJourney(journey) {
    let price = journey.price === null ? NaN : journey.price.amount;
    let start = Date.parse(journey.legs[0].plannedDeparture);
    let end = Date.parse(journey.legs[journey.legs.length - 1].plannedArrival);

    let legs = journey.legs.map(leg => leg.stopovers === undefined ? [] : leg.stopovers.map(stopover => stopover.stop));

    return { "price": price, "currency": "EUR", "length": (end - start) / 1000, "legs": legs, "departure": start };
}

export default async function handler (req, res) {
    // todo catch errors and such
    const [origin, destination] = await Promise.all([
        _station(req.query.origin).catch(error => null),
        _station(req.query.destination).catch(error => null),
    ])

    let d = new Date(parseInt(req.query.date)).toDateString();
    console.log("got date", d);

    let data = await fetch(URL(origin.id, destination.id, d), {
        method: 'GET'
    })
        .then(response => response.json())
        .then(results => results.journeys.map(parseJourney));

    return res.status(200).json({ "journeys": data });
}