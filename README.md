# is-eurail-cheaper

- frontend: `npm run dev`
- backend: `uvicorn backend:app --reload`

## Roadmap

- [ ] danUI
  - [ ] search bar
  - [ ] trip space
  - [ ] add cities
    - [ ] type in search bar => searches among train stations
    - [ ] map zooms to fit them all
  - [ ] eurail price setter
- [ ] Backend
  - [ ] access list of train stations
  - [ ] access list

- [ ] features
  - [ ] currency conversion
  - [ ] flixbus



# Steps

- [ ] Trip UI
  - [x] Make trips a dropdown
    - [ ] dropdown of possible trips; click => that one's picked
    - [x] animate
    - [ ] make all same width
    - [ ] can't open one dropdown until other is closed?
    - [ ] combine animateXXXX methods
  - [ ] Make hovering the price look nicer
  - [ ] Make hovering the segment look nicer
    - [x] animate
  - [x] Make the price display look nicer
  - [ ] Make the price inline display look nicer
  - [ ] Update the summed trips
  - [ ] Update the eurail with pass price
  - [ ] center price display with respect to image
- [ ] map
  - [ ] display chosen cities on map
  - [ ] display line between them
    - [ ] display train, bus, etc on line
    - [ ] display actual route
    - [ ] glow route when expanded
- [ ] front animation on canvas
- [ ] settings modal
- [ ] make page not scroll annoyingly

# API exploration

- https://api.timetable.eurail.com/v2/timetable/
- https://api.timetable.eurail.com/v2/locations/
- https://github.com/juliuste/db-prices/blob/master/lib/index.js
- https://github.com/TheRealMurmel/py-bahn-api 

# Map Integration

- search => retool to search from OSM?
- then => search from eurail somehow? (need to get id)
- need a way to convert eurail id <=> coordinates
- https://www.eurail.com/bin/geolocation.autosuggest.json?keyword=muni&pagePath=%2Fcontent%2Feurail%2Fen



https://react-leaflet.js.org/docs/example-svg-overlay/