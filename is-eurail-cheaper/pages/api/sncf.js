import { trip } from './_station.js';

let parse_search_uic = uic => encodeURIComponent(uic.substring(2));
let search = (row, query) => encodeURIComponent(`search(${row}, "${query}")`);

let station_search_url = (query) => `https://ressources.data.sncf.com/api/explore/v2.1/catalog/datasets/referentiel-gares-voyageurs/records?where=${search("rg_libelle", query)}&limit=1`
let journey_search_url = (dataset, origin, destination) => `https://ressources.data.sncf.com/api/explore/v2.1/catalog/datasets/${dataset}/records?where=${search("origine", origin)}%20and%20${search("destination", destination)}&limit=1`

let datasets = {
    'TGV': 'tarifs-tgv-inoui-ouigo',
    'INOUI': 'tarifs-tgv-inoui-ouigo',
    'OGV': 'tarifs-tgv-inoui-ouigo',
    'TER': 'tarifs-ter-par-od',
    'IC': 'tarifs-intercites'
};

async function station(name) {
    return await fetch(station_search_url(name))
        .then(response => response.json());
}

export default async function SNCFprice(tripID, trainType) {
    return await trip(tripID)
        .then(trip => {
            let dataset = datasets[trainType];
            if (dataset === undefined ) {
                console.log("couldn't find dataset", dataset);
                return null;
            } else {
                return fetch(journey_search_url(datasets[trainType], trip.origin.name, trip.destination.name))
                    .then(response => response.json())
                    .then(result => {
                        if (result.results.length === 0) {
                            console.log("couldn't find", trip.origin.name, trip.destination.name);
                            return null;
                        } else {
                            return result.results[0];
                        }
                    })
                    .then(result => {
                       if (result === null) {
                           return null;
                       } else {
                           return result.prix_eur ?? (result.prix_min + result.prix_max) / 2;
                       }
                    });
            }
        });
}

// https://numerique.sncf.com/connexion/
// /api/explore/v2.1/catalog/datasets/tarifs-ter-par-od/records?limit=20