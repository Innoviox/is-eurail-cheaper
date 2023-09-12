from pydantic import BaseModel
from fastapi import FastAPI, Request, status, Form
from fastapi.exceptions import RequestValidationError
from fastapi.responses import JSONResponse
from typing import Annotated, Union
from fastapi.middleware.cors import CORSMiddleware
import datetime as dt

from price import EurailEngine

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

@app.post("/api/price/eurail")
async def eurail_price(fromCityId: Annotated[str, Form()], toCityId: Annotated[str, Form()]):
    return {"journeys": eurail.get_journeys(fromCityId, toCityId, dt.datetime.now())}

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

