from .engine import Engine, Journey
import requests
import datetime as dt

DT_FORMAT = "%Y-%m-%dT%H:%M:%S"

class EurailEngine(Engine):
    def __init__(self):
        self.url = "https://api.timetable.eurail.com/v2/timetable?origin={fromCityId}&destination={toCityId}&timestamp={timestamp}&tripsNumber=5&currency=USD"

    def get_journeys(self, from_city: str, to_city: str, date: dt.datetime) -> list[Journey]:
        # todo currency
        timestamp = date.strftime(DT_FORMAT + ".000Z")

        url = self.url.format(fromCityId=from_city, toCityId=to_city, timestamp=timestamp)
        trips = requests.get(url).json()

        journeys = [Journey(price=i.get('price', 0), length=self.get_length(i)) for i in trips]
        return journeys

    def get_length(self, trip):
        start = dt.datetime.strptime(trip['departure'], DT_FORMAT)
        end = dt.datetime.strptime(trip['arrival'], DT_FORMAT)

        return (end - start).total_seconds()