import uuid
from typing import Union
import requests

MAPS_API_KEY = open("api-key.txt").read().strip()


class Place:
    def __init__(self):
        self.session = None
        self.search_url = "https://maps.googleapis.com/maps/api/place/queryautocomplete/json?input={query}&sessiontoken={session}&key={api_key}"
        self.details_url = "https://maps.googleapis.com/maps/api/place/details/json?place_id={place_id}&fields=geometry,name&sessiontoken={session}&key={api_key}"
        # types=light_rail_station|subway_station|train_station|transit_station&

    def generate_session(self):
        self.session = uuid.uuid4()

    def get_stations(self, query: Union[str, None]):
        if self.session is None:
            self.generate_session()

        response = requests.get(self.search_url.format(query=query, session=self.session, api_key=MAPS_API_KEY))
        stations = response.json()

        return stations["predictions"]

    def station_info(self, place_id: str):
        response = requests.get(self.details_url.format(place_id=place_id, session=self.session, api_key=MAPS_API_KEY))
        station = response.json()

        self.session = None

        return {"coords": station["result"]["geometry"]["location"]}
