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
async def search(fromCity: Annotated[str, Form()], toCity: Annotated[str, Form()]):
    print(fromCity, toCity)
    return {"price": "10"}

@app.post("/api/route")
async def getRoute(fromStation: Annotated[str, Form()], toStation: Annotated[str, Form()]):
    ...

@app.get("/api/stations")
async def getStations(query: Union[str, None]):
    if query is None:
        return {"stations": []}

    response = requests.get(f"https://api.timetable.eurail.com/v2/locations?input={query}")
    stations = response.json()

    return {"stations": stations}

