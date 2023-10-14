import journeys from './api/lib/journeys.js';
import parseParams from './api/lib/params.js';
import station from './api/lib/station.js';


export default async (req, res) => {
    let params = parseParams({}); // get defaults
    // todo catch errors and such
    const [origin, destination] = await Promise.all([
        station(req.query.origin).catch(error => null),
        station(req.query.destination).catch(error => null),
    ])
    params.origin = origin;
    params.destination = destination;
    params.date = new Date(); // todo
    let data;
    await journeys(params, params.date).then(results => data = results);
    return res.status(200).json(data);
}