import csv
import collections
import json

def parse_row(row):
    id_ = row['uic']
    if id_ == 'NA':
        id_ += row['id']
    return {'id': id_,
            'name': row['name_norm'],
            'country': row['country'],
            'location': {
                'longitude': row['longitude'],
                'latitude': row['latitude']
            }
           }

with open("train_stations_europe.csv") as f:
    stations = collections.defaultdict(list)
    data = {}
    
    r = csv.DictReader(f)
    for row in r:
        d = parse_row(row)
        stations[d['name'][:3].lower()].append(d['id'])
        data[d['id']] = d

with open("_stations_json.js", "w") as f:
    f.write("const stationsMap = new Map(Object.entries({"+json.dumps(data)+"}));\n\nexport stationsMap;\n")
    f.write("const searchMap = new Map(Object.entries({"+json.dumps(stations)+"}));\n\nexport searchMap;\n")
