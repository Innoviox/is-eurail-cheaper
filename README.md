# is-eurail-cheaper

- frontend: `npm run dev`

# Todos

- [ ] backend
  - [ ] ability to set date: default 2 weeks ahead
  - [ ] create international-bahn scraper & scrape for a bunch (?) of stations (somehow)
  - [ ] switch to dbv6
  - [ ] return route
- [ ] frontend
  - [ ] incorporate route to map
  - [x] fix station colors => set from palette?
  - [ ] add settings page with
    - [ ] currency
    - [ ] how far ahead to calculate
  - [ ] add arrow next to .upper
  - [x] fix eurail price display
  - [x] make navbar nicer

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
    - [x] dropdown of possible trips; click => that one's picked
    - [x] animate
    - [x] make all same width
    - [ ] can't open one dropdown until other is closed?
    - [x] combine animateXXXX methods
  - [x] Make hovering the price look nicer
  - [x] Make hovering the segment look nicer
    - [x] animate
  - [x] Make the price display look nicer
  - [x] Make the price inline display look nicer
  - [x] Update the summed trips
  - [x] Update the eurail with pass price
  - [x] center price display with respect to image
- [ ] map
  - [x] display chosen cities on map
  - [x] display line between them
    - [ ] display train, bus, etc on line
    - [ ] display actual route
    - [ ] glow route when expanded
- [ ] front animation on canvas
- [ ] settings modal
- [ ] question modal / shepherd
- [ ] clean css w/ variables
- [x] make page not scroll annoyingly
- [x] front animation on canvas & searchbar
- [x] front animation on canvas
- [x] clear searchbar before animating ***
- [x] make searchbar disabled while loading
- [x] no dropdown when less than 3 characters
- [ ] add question mark & animation to eurail price summary
- [ ] gray out unavailable map countries => add with certain eurail pass
- [ ] settings - set date
- [x] end canvas animation
- [ ] backend
  - [x] implement guru for search and db
  - [ ] implement flixbus
  - [ ] make sure returned results make sense => make sure eurail timing is neutral (?)
  - [ ] deep future: link to sale page

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

investigate this https://github.com/juliuste/bahn.guru to see how it works