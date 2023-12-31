# is-eurail-cheaper

- frontend: `npm run dev`
- https://github.com/trainline-eu/stations
- https://www.kaggle.com/datasets/headsortails/train-stations-in-europe

# Extending Data Sources

- Multi api idea
  - get the journey from db
  - if it NaNs:
    - for each train in the journey: get it somehow
    - needed APIs:
      - trenitalia
      - SNCF
      - IC, EC, EST
      - 

# Todos

- [ ] backend
  - [ ] ability to set date: default 2 weeks ahead
  - [ ] create international-bahn scraper & scrape for a bunch (?) of stations (somehow)
  - [ ] switch to dbv6 https://v6.db.transport.rest/getting-started.html
  - [ ] return route
  - [ ] look into stations returning weird results
  - [ ] add endpoints
    - [ ] add flixbus
    - [ ] add ryanair?
    - [ ] add hostelworld?
- [ ] frontend
  - [ ] incorporate route to map
  - [x] fix station colors => set from palette?
  - [ ] add settings page with
    - [ ] currency
    - [x] how far ahead to calculate
    - [ ] make look good
  - [ ] add arrow next to .upper
  - [ ] make cities make more sense
    - [ ] right click => edit?
    - [ ] left click => info page? 
      - [ ] w/ hostelworld info? w/ common outgoing trains info? w/ tripadvisor info?
  - [x] fix eurail price display
    - [ ] make look nicer
  - [x] make navbar nicer

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
