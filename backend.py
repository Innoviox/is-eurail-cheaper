from pydantic import BaseModel
from fastapi import FastAPI, Request, status, Form
from fastapi.exceptions import RequestValidationError
from fastapi.responses import JSONResponse
from typing import Annotated, Union
from fastapi.middleware.cors import CORSMiddleware
import requests

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


@app.post("/api/price")
async def search(fromCityId: Annotated[str, Form()], toCityId: Annotated[str, Form()]):
    # timestamp format: 2023-09-27T12%3A00%3A00.000Z
    # todo currency
    print(fromCityId, toCityId)
    #eurail_response = f"https://api.timetable.eurail.com/v2/timetable?origin={fromCityId}&destination={toCityId}&timestamp={timeStamp}&tripsNumber=5&currency=USD"
    #print(eurail_response)
    return {"price": "10"}

@app.get("/api/stations")
async def getStations(query: Union[str, None]):
    if query is None:
        return {"stations": []}

    response = requests.get(f"https://api.timetable.eurail.com/v2/locations?input={query}") #&results=15
    stations = response.json()

    return {"stations": stations}

