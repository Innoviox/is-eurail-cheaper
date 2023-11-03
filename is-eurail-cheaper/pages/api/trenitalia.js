let station_search_url = (query) => `https://www.lefrecce.it/Channels.Website.BFF.WEB/website/locations/search?name=${query}&limit=1`

async function station(name) {
    return await fetch(station_search_url(name))
        .then(response => response.json()[0]);
}

export default async function Trenitalia_price(legInfo) {

}