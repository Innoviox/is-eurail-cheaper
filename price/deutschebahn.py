from .engine import Engine, Journey
import datetime as dt

import json
from hashlib import md5

import requests

# the following code is adapted from https://github.com/TheRealMurmel/py-bahn-api
def _checksum(data):
    SALT = 'bdI8UVj40K5fvxwf'
    saltedData = data+SALT
    saltedDataEncoded = saltedData.encode('utf-8')
    return md5(saltedDataEncoded).hexdigest()


def getStationID(searchTerm, enableProxy=False):
    # if enableProxy:
    #     proxies = {'https': '0.0.0.0:8080'}
    #     verify = False
    # else:
    proxies = {}
    verify = True

    url = "https://reiseauskunft.bahn.de/bin/mgate.exe"

    headers = {
        "Host": "reiseauskunft.bahn.de",
        "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 9; unknown Build/PI)",
        "Content-Type": "application/json;charset=UTF-8"
    }

    searchRequest = {"auth": {"aid": "n91dB8Z77MLdoR0K", "type": "AID"},
                     "client": {"id": "DB", "name": "DB Navigator", "os": "Android 9", "res": "1080x2028",
                                "type": "AND",
                                "ua": "Dalvik/2.1.0 (Linux; U; Android 9; unknown Build/PI)", "v": 22080000},
                     "ext": "DB.R22.04.a", "formatted": False, "lang": "eng", "svcReqL": [
            {"cfg": {"polyEnc": "GPA"},
             "meth": "LocMatch",
             "req": {
                 "input": {
                     "field": "S",
                     "loc":
                         {"name": f"{searchTerm}?"},
                     "maxLoc": 25
                 }
             }
             }],
                     "ver": "1.15"}

    # - Server fails in case of unicode escape sequences
    #   hence, we have to handle the json serialization process
    #   in order to set `ensure_ascii`
    searchRequestStr = json.dumps(searchRequest, ensure_ascii=False, separators=(',', ':'))
    searchRequestEncoded = searchRequestStr.encode('utf-8')

    reqChecksum = _checksum(searchRequestStr)

    params = {
        'checksum': f'{reqChecksum}',
    }

    response = requests.post(url, params=params, headers=headers, data=searchRequestEncoded, proxies=proxies, verify=verify)

    return response.json()['svcResL'][0]['res']['match']['locL'][0]['extId']


class DBEngine(Engine):
    def __init__(self):
        ...

    def get_journeys(self, from_city: str, to_city: str, date: dt.datetime) -> list[Journey]:
        from_city = from_city.split(",")[0].split("(")[0]
        to_city = to_city.split(",")[0].split("(")[0]

        proxies = {}
        verify = True

        departureStation = getStationID(from_city)
        arrivalStation = getStationID(to_city)

        journeyDate = date.strftime("%Y%m%d")
        journeyTime = date.strftime("%H%M%S")

        url = "https://reiseauskunft.bahn.de/bin/mgate.exe"

        headers = {
            "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 9; Pixel 3 Build/PI)",
            "Content-Type": "application/json;charset=UTF-8"
        }

        bestPriceSearchRequest = {
            "auth": {"aid": "n91dB8Z77MLdoR0K", "type": "AID"},
            "client": {"id": "DB", "name": "DB Navigator", "os": "Android 9", "res": "1080x2028", "type": "AND",
                       "ua": "Dalvik/2.1.0 (Linux; U; Android 9; Pixel 3 Build/PI)", "v": 22080000},
            "ext": "DB.R22.04.a",
            "formatted": False,
            "lang": "eng",
            "svcReqL": [{
                "cfg": {"polyEnc": "GPA", "rtMode": "HYBRID"},
                "meth": "BestPriceSearch",
                "req": {
                    "outDate": f"{journeyDate}",
                    "outTime": f"{journeyTime}",
                    "depLocL": [{
                        "extId": f"{departureStation}",
                        "type": "S"
                    }],
                    "arrLocL": [
                        {
                            "extId": f"{arrivalStation}",
                            "type": "S"
                        }],
                    "getPasslist": True,
                    "getPolyline": True,
                    "jnyFltrL": [{
                        "mode": "BIT",
                        "type": "PROD",
                        "value": "11111111111111"
                    }],
                    "trfReq": {
                        "cType": "PK",
                        "jnyCl": 2,
                        "tvlrProf": [{"type": "E"}]
                    }
                }
            }],
            "ver": "1.15"
        }

        # - Server fails in case of unicode escape sequences
        #   hence, we have to handle the json serialization process
        #   in order to set `ensure_ascii`
        bestPriceSearchRequestStr = json.dumps(bestPriceSearchRequest, ensure_ascii=False, separators=(',', ':'))
        bestPriceSearchRequestEncoded = bestPriceSearchRequestStr.encode('utf-8')

        reqChecksum = _checksum(bestPriceSearchRequestStr)

        params = {
            'checksum': reqChecksum,
        }

        response = requests.post(url, params=params, headers=headers, data=bestPriceSearchRequestEncoded,
                                 proxies=proxies, verify=verify)
        r = response.json()

        journeys = [Journey(price=round(i['trfRes']['fareSetL'][0]['fareL'][0]['prc'] / 100),
                            length=i['dur']) for i in r['svcResL'][0]['res']['outConL']]
        return journeys
