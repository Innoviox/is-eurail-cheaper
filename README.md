# is-eurail-cheaper

- frontend: `npm run dev`
- backend: `uvicorn backend:app --reload`

## Roadmap

- [ ] anUI
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
  - [ ] Make trips a dropdown
    - [ ] dropdown of possible trips; click => that one's picked
    - [ ] animate
  - [ ] Make hovering the price look nicer
  - [ ] Make hovering the segment look nicer
    - [ ] animate
  - [x] Make the price display look nicer
  - [ ] Make the price inline display look nicer
  - [ ] Update the summed trips
  - [ ] Update the eurail with pass price
  - [ ] center price display with respect to image

# API exploration

- https://api.timetable.eurail.com/v2/timetable/
- https://api.timetable.eurail.com/v2/locations/
- https://github.com/juliuste/db-prices/blob/master/lib/index.js
- https://github.com/TheRealMurmel/py-bahn-api 