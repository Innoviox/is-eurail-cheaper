from pydantic import BaseModel
from fastapi import FastAPI, Request, status, Form
from fastapi.exceptions import RequestValidationError
from fastapi.responses import JSONResponse
from typing import Annotated, Union
from fastapi.middleware.cors import CORSMiddleware
import requests
import datetime as dt
from db_price import get_db_price

app = FastAPI()



# workaround for single-computer hosting
origins = [
    "http://localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

DT_FORMAT = "%Y-%m-%dT%H:%M:%S"

def get_length(trip):
    start = dt.datetime.strptime(trip['departure'], DT_FORMAT)
    end = dt.datetime.strptime(trip['arrival'], DT_FORMAT)

    return (end - start).total_seconds()

@app.post("/api/price/eurail")
async def eurail_price(fromCityId: Annotated[str, Form()], toCityId: Annotated[str, Form()]):
    # get eurail price
    # todo currency
    timestamp = dt.datetime.now().strftime(DT_FORMAT + ".000Z")
    url = f"https://api.timetable.eurail.com/v2/timetable?origin={fromCityId}&destination={toCityId}&timestamp={timestamp}&tripsNumber=5&currency=USD"
    trips = requests.get(url).json()
    trips = [{"price": i.get('price', 0), "length": get_length(i)} for i in trips]
    # print("found", fromCityId, toCityId, trips)

    return {"journeys": trips}

@app.post("/api/price/db")
async def db_price(fromCity: Annotated[str, Form()], toCity: Annotated[str, Form()]):
    # todo date
    print(fromCity, toCity)
    date = dt.datetime.now() + dt.timedelta(weeks=4)
    return {"journeys": get_db_price(fromCity, toCity, date)}
    

@app.get("/api/stations")
async def get_stations(query: Union[str, None]):
    if query is None:
        return {"stations": []}

    response = requests.get(f"https://api.timetable.eurail.com/v2/locations?input={query}") #&results=15
    stations = response.json()

    return {"stations": stations}

