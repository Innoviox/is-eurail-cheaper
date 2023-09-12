import datetime as dt
from dataclasses import dataclass

class Engine:
    def __init__(self):
        ...

    def get_journeys(self, from_city: str, to_city: str, date: dt.datetime) -> list[Journey]:
        ...

@dataclass
class Journey:
    price: int
    length: int # in seconds