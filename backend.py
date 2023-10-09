from pydantic import BaseModel
from fastapi import FastAPI, Request, status, Form
from fastapi.exceptions import RequestValidationError
from fastapi.responses import JSONResponse
from typing import Annotated, Union
from fastapi.middleware.cors import CORSMiddleware
import datetime as dt
import requests

from price import EurailEngine, DBEngine
from google_maps_handler import Place

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

eurail = EurailEngine()
db = DBEngine()
place_engine = Place()


@app.post("/api/price/eurail")
async def eurail_price(fromCity: Annotated[str, Form()], toCity: Annotated[str, Form()]):
    return {"journeys": eurail.get_journeys(fromCity, toCity, dt.datetime.now())}


@app.post("/api/price/db")
async def db_price(fromCity: Annotated[str, Form()], toCity: Annotated[str, Form()]):
    # todo date
    # print(fromCity, toCity)
    date = dt.datetime.now() + dt.timedelta(weeks=4)
    return {"journeys": db.get_journeys(fromCity, toCity, date)}


@app.get("/api/stations")
async def get_stations(query: Union[str, None]):
    if query is None:
        return {"stations": []}

    return {"stations": place_engine.get_stations(query)}


@app.get("/api/station")
async def station_info(place_id: str):
    return place_engine.station_info(place_id)
