// https://medium.com/@albigiu/trenitalia-shock-non-crederete-mai-a-queste-api-painful-14433096502c blogpost banger

let station_search_url = (query) =>
  `https://www.lefrecce.it/Channels.Website.BFF.WEB/website/locations/search?name=${query}&limit=1`;

let journey_search_url =
  "https://www.lefrecce.it/Channels.Website.BFF.WEB/website/ticket/solutions";

async function station(name) {
  return await fetch(station_search_url(name))
    .then((response) => response.json())
    .then((result) => result[0]);
}

export default async function Trenitalia_price(legInfo) {
  return Promise.all([
    await station(legInfo.fromCity),
    await station(legInfo.toCity),
  ]).then((cities) => {
    return fetch(journey_search_url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        departureLocationId: parseInt(cities[0].id),
        arrivalLocationId: parseInt(cities[1].id),
        departureTime: "2023-11-28T18:00:00.000", // todo date
        adults: 1,
        children: 0,
        criteria: {
          frecceOnly: false,
          regionalOnly: false,
          intercityOnly: false,
          noChanges: false,
          order: "DEPARTURE_DATE",
          offset: 0,
          limit: 10,
        },
        advancedSearchRequest: {
          bestFare: false,
          bikeFilter: false,
        },
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        let price = null;
        result.solutions.forEach((solution) => {
          let s = solution.solution;
          // console.log("TI SOL", s.price, s.trains.map(i => [i.description, i.acronym]));
          // console.log("FOR", legInfo.line.fahrtNr);
          if (
            s.price !== null &&
            s.trains.length === 1 &&
            s.trains[0].description === legInfo.line.fahrtNr
          ) {
            // console.log("taking price");
            price = { price: s.price.amount };
          }
        });
        return price;
      });
  });
}
