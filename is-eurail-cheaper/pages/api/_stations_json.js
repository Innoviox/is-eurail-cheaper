const stationsMap = new Map(Object.entries({
  "2001166": {
    "id": "2001166",
    "name": "Pola de Lena",
    "isMeta": true,
    "country": "ES",
    "location": {
      "longitude": -5.828784,
      "latitude": 43.16089
    }
  },
  "2196004": {
    "id": "2196004",
    "name": "Minsk",
    "isMeta": true,
    "country": "BY",
    "location": {
      "longitude": 27.651025,
      "latitude": 53.868712
    }
  },
  "2200014": {
    "id": "2200014",
    "name": "Kovel",
    "isMeta": false,
    "country": "UA",
    "location": {
      "longitude": 24.707714,
      "latitude": 51.218081
    }
  },
  "2200015": {
    "id": "2200015",
    "name": "Korosten",
    "isMeta": false,
    "country": "UA",
    "location": {
      "longitude": 28.634436,
      "latitude": 50.957268
    }
  },
  "2200019": {
    "id": "2200019",
    "name": "Sarny",
    "isMeta": false,
    "country": "UA",
    "location": {
      "longitude": 26.624457,
      "latitude": 51.352631
    }
  },
  "2200025": {
    "id": "2200025",
    "name": "Lviv",
    "isMeta": false,
    "country": "UA",
    "location": {
      "longitude": 23.9922402,
      "latitude": 49.8397436
    }
  },
  "2200028": {
    "id": "2200028",
    "name": "Ternopil",
    "isMeta": true,
    "country": "UA",
    "location": {
      "longitude": 25.60875,
      "latitude": 49.5516
    }
  },
  "2200033": {
    "id": "2200033",
    "name": "Mukacheve",
    "isMeta": false,
    "country": "UA",
    "location": {
      "longitude": 22.6982959,
      "latitude": 48.4381352
    }
  },
  "2200149": {
    "id": "2200149",
    "name": "Chernivtsi",
    "isMeta": true,
    "country": "UA",
    "location": {
      "longitude": 25.951997,
      "latitude": 48.264877
    }
  },
  "2200154": {
    "id": "2200154",
    "name": "Rivne",
    "isMeta": true,
    "country": "UA",
    "location": {
      "longitude": 26.251617,
      "latitude": 50.6199
    }
  },
  "2200165": {
    "id": "2200165",
    "name": "Ivano-Frankivsk",
    "isMeta": true,
    "country": "UA",
    "location": {
      "longitude": 24.7247958,
      "latitude": 48.9220657
    }
  },
  "2200173": {
    "id": "2200173",
    "name": "Pidvolochysk",
    "isMeta": true,
    "country": "UA",
    "location": {
      "longitude": 26.12017751,
      "latitude": 49.52699069
    }
  },
  "2200174": {
    "id": "2200174",
    "name": "Shepetivka",
    "isMeta": true,
    "country": "UA",
    "location": {
      "longitude": 27.043,
      "latitude": 50.165
    }
  },
  "2200517": {
    "id": "2200517",
    "name": "Svalyava",
    "isMeta": true,
    "country": "UA",
    "location": {
      "longitude": 22.989222,
      "latitude": 48.551056
    }
  },
  "2200542": {
    "id": "2200542",
    "name": "Uzhhorod",
    "isMeta": false,
    "country": "UA",
    "location": {
      "longitude": 22.272599,
      "latitude": 48.6169056
    }
  },
  "2296001": {
    "id": "2296001",
    "name": "Kyiv",
    "isMeta": true,
    "country": "UA",
    "location": {
      "longitude": 30.5234,
      "latitude": 50.4501
    }
  },
  "2296009": {
    "id": "2296009",
    "name": "Poltava",
    "isMeta": true,
    "country": "UA",
    "location": {
      "longitude": 34.4907886,
      "latitude": 49.5666419
    }
  },
  "2400008": {
    "id": "2400008",
    "name": "Vilnius",
    "isMeta": false,
    "country": "LT",
    "location": {
      "longitude": 25.284434,
      "latitude": 54.670217
    }
  },
  "2500009": {
    "id": "2500009",
    "name": "Riga",
    "isMeta": false,
    "country": "LV",
    "location": {
      "longitude": 24.120746,
      "latitude": 56.946349
    }
  },
  "5100001": {
    "id": "5100001",
    "name": "Białogard",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 15.976914,
      "latitude": 54.009717
    }
  },
  "5100002": {
    "id": "5100002",
    "name": "Białystok",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 23.136723,
      "latitude": 53.134239
    }
  },
  "5100003": {
    "id": "5100003",
    "name": "Brzeg",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 17.471182,
      "latitude": 50.852975
    }
  },
  "5100004": {
    "id": "5100004",
    "name": "Brzeg Dolny",
    "isMeta": true,
    "country": "PL",
    "location": {
      "longitude": 16.726767,
      "latitude": 51.266191
    }
  },
  "5100005": {
    "id": "5100005",
    "name": "Bydgoszcz Główna",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 17.99164,
      "latitude": 53.135111
    }
  },
  "5100006": {
    "id": "5100006",
    "name": "Bytom",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 18.915704,
      "latitude": 50.343107
    }
  },
  "5100007": {
    "id": "5100007",
    "name": "Częstochowa Osobowa",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 19.121323,
      "latitude": 50.808649
    }
  },
  "5100008": {
    "id": "5100008",
    "name": "Duszniki Zdrój",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 16.385564,
      "latitude": 50.408162
    }
  },
  "5100009": {
    "id": "5100009",
    "name": "Gdańsk Główny",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 18.643807,
      "latitude": 54.355523
    }
  },
  "5100010": {
    "id": "5100010",
    "name": "Gdynia Główna",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 18.529554,
      "latitude": 54.520843
    }
  },
  "5100011": {
    "id": "5100011",
    "name": "Gliwice",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 18.677157,
      "latitude": 50.301109
    }
  },
  "5100012": {
    "id": "5100012",
    "name": "Głogów",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 16.079715,
      "latitude": 51.668953
    }
  },
  "5100013": {
    "id": "5100013",
    "name": "Gniezno",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 17.601786,
      "latitude": 52.526434
    }
  },
  "5100014": {
    "id": "5100014",
    "name": "Gorzów Wielkopolski",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 15.229227,
      "latitude": 52.727756
    }
  },
  "5100015": {
    "id": "5100015",
    "name": "Inowrocław",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 18.239184,
      "latitude": 52.801405
    }
  },
  "5100016": {
    "id": "5100016",
    "name": "Jarocin",
    "isMeta": true,
    "country": "PL",
    "location": {
      "longitude": 17.494275,
      "latitude": 51.969121
    }
  },
  "5100017": {
    "id": "5100017",
    "name": "Kalisz",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 18.071913,
      "latitude": 51.742817
    }
  },
  "5100020": {
    "id": "5100020",
    "name": "Katowice",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 19.017165,
      "latitude": 50.257511
    }
  },
  "5100022": {
    "id": "5100022",
    "name": "Kielce",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 20.618117,
      "latitude": 50.874207
    }
  },
  "5100023": {
    "id": "5100023",
    "name": "Kępno",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 18.001024,
      "latitude": 51.29164
    }
  },
  "5100025": {
    "id": "5100025",
    "name": "Kołobrzeg",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 15.569649,
      "latitude": 54.18231
    }
  },
  "5100026": {
    "id": "5100026",
    "name": "Konin",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 18.253333,
      "latitude": 52.231399
    }
  },
  "5100027": {
    "id": "5100027",
    "name": "Koszalin",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 16.169931,
      "latitude": 54.191254
    }
  },
  "5100028": {
    "id": "5100028",
    "name": "Kraków Główny",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 19.947423,
      "latitude": 50.067192
    }
  },
  "5100029": {
    "id": "5100029",
    "name": "Krynica",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 20.957361,
      "latitude": 49.410476
    }
  },
  "5100031": {
    "id": "5100031",
    "name": "Kudowa Zdrój",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 16.246447,
      "latitude": 50.427417
    }
  },
  "5100032": {
    "id": "5100032",
    "name": "Kutno",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 19.348615,
      "latitude": 52.226958
    }
  },
  "5100035": {
    "id": "5100035",
    "name": "Legnica",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 16.168924,
      "latitude": 51.213847
    }
  },
  "5100036": {
    "id": "5100036",
    "name": "Leszno",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 16.565573,
      "latitude": 51.846409
    }
  },
  "5100037": {
    "id": "5100037",
    "name": "Lublin",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 22.568398,
      "latitude": 51.231241
    }
  },
  "5100040": {
    "id": "5100040",
    "name": "Malbork",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 19.04282,
      "latitude": 54.035795
    }
  },
  "5100042": {
    "id": "5100042",
    "name": "Nowy Sącz",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 20.702463,
      "latitude": 49.606674
    }
  },
  "5100043": {
    "id": "5100043",
    "name": "Nowa Sól",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 15.70811,
      "latitude": 51.799683
    }
  },
  "5100044": {
    "id": "5100044",
    "name": "Nysa",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 17.341827,
      "latitude": 50.477792
    }
  },
  "5100045": {
    "id": "5100045",
    "name": "Olsztyn Główny",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 20.497401,
      "latitude": 53.78584
    }
  },
  "5100046": {
    "id": "5100046",
    "name": "Opole Główne",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 17.926319,
      "latitude": 50.661456
    }
  },
  "5100047": {
    "id": "5100047",
    "name": "Ostrow Wielkopolski",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 17.8026600000001,
      "latitude": 51.6517677
    }
  },
  "5100048": {
    "id": "5100048",
    "name": "Oświęcim",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 19.199727,
      "latitude": 50.041501
    }
  },
  "5100049": {
    "id": "5100049",
    "name": "Piła Główna",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 16.744539,
      "latitude": 53.143148
    }
  },
  "5100050": {
    "id": "5100050",
    "name": "Polanica Zdrój",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 16.510891,
      "latitude": 50.396916
    }
  },
  "5100052": {
    "id": "5100052",
    "name": "Radom",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 21.155564,
      "latitude": 51.390952
    }
  },
  "5100054": {
    "id": "5100054",
    "name": "Sieradz",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 18.714984,
      "latitude": 51.597659
    }
  },
  "5100055": {
    "id": "5100055",
    "name": "Słupsk",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 17.016544,
      "latitude": 54.467367
    }
  },
  "5100056": {
    "id": "5100056",
    "name": "Sopot",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 18.56232,
      "latitude": 54.440165
    }
  },
  "5100057": {
    "id": "5100057",
    "name": "Szczecin Główny",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 14.550317,
      "latitude": 53.418784
    }
  },
  "5100059": {
    "id": "5100059",
    "name": "Świnoujście",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 14.264199,
      "latitude": 53.903725
    }
  },
  "5100061": {
    "id": "5100061",
    "name": "Tczew",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 18.790151,
      "latitude": 54.097317
    }
  },
  "5100062": {
    "id": "5100062",
    "name": "Toruń Główny",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 18.614601,
      "latitude": 53.000102
    }
  },
  "5100063": {
    "id": "5100063",
    "name": "Ustka",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 16.861102,
      "latitude": 54.578743
    }
  },
  "5100065": {
    "id": "5100065",
    "name": "Warszawa-Centralna",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 21.003233,
      "latitude": 52.228864
    }
  },
  "5100066": {
    "id": "5100066",
    "name": "Warszawa-Wschodnia",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 21.052332,
      "latitude": 52.251544
    }
  },
  "5100067": {
    "id": "5100067",
    "name": "Warszawa Zachodnia",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 20.965244,
      "latitude": 52.219974
    }
  },
  "5100069": {
    "id": "5100069",
    "name": "Wrocław Główny",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 17.037084,
      "latitude": 51.098075
    }
  },
  "5100070": {
    "id": "5100070",
    "name": "Zabrze",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 18.786942,
      "latitude": 50.30528
    }
  },
  "5100071": {
    "id": "5100071",
    "name": "Zbąszynek",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 15.818093,
      "latitude": 52.242509
    }
  },
  "5100072": {
    "id": "5100072",
    "name": "Trzebinia",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 19.453214,
      "latitude": 50.153938
    }
  },
  "5100075": {
    "id": "5100075",
    "name": "Iława Główna",
    "isMeta": true,
    "country": "PL",
    "location": {
      "longitude": 19.573849,
      "latitude": 53.582253
    }
  },
  "5100079": {
    "id": "5100079",
    "name": "Bolesławiec",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 15.568921,
      "latitude": 51.266155
    }
  },
  "5100082": {
    "id": "5100082",
    "name": "Rzepin",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 14.815076,
      "latitude": 52.350218
    }
  },
  "5100085": {
    "id": "5100085",
    "name": "Zgorzelec",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 15.003544,
      "latitude": 51.140027
    }
  },
  "5100088": {
    "id": "5100088",
    "name": "Radomsko",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 19.437572,
      "latitude": 51.074505
    }
  },
  "5100089": {
    "id": "5100089",
    "name": "Augustów",
    "isMeta": true,
    "country": "PL",
    "location": {
      "longitude": 22.9796023,
      "latitude": 53.8434431
    }
  },
  "5100102": {
    "id": "5100102",
    "name": "Gizycko",
    "isMeta": true,
    "country": "PL",
    "location": {
      "longitude": 21.7667341,
      "latitude": 54.036405
    }
  },
  "5100105": {
    "id": "5100105",
    "name": "Goleniów",
    "isMeta": true,
    "country": "PL",
    "location": {
      "longitude": 14.8239783,
      "latitude": 53.567163
    }
  },
  "5100119": {
    "id": "5100119",
    "name": "Kędzierzyn Koźle",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 18.204765,
      "latitude": 50.344356
    }
  },
  "5100120": {
    "id": "5100120",
    "name": "Ketrzyn",
    "isMeta": true,
    "country": "PL",
    "location": {
      "longitude": 21.37504,
      "latitude": 54.07657
    }
  },
  "5100129": {
    "id": "5100129",
    "name": "Lebork",
    "isMeta": true,
    "country": "PL",
    "location": {
      "longitude": 17.7532511,
      "latitude": 54.544642
    }
  },
  "5100133": {
    "id": "5100133",
    "name": "Sosnowiec Główny",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 19.126411,
      "latitude": 50.278906
    }
  },
  "5100138": {
    "id": "5100138",
    "name": "Strzelce Opolskie",
    "isMeta": true,
    "country": "PL",
    "location": {
      "longitude": 18.30056,
      "latitude": 50.5107
    }
  },
  "5100141": {
    "id": "5100141",
    "name": "Suwałki",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 22.945262,
      "latitude": 54.106153
    }
  },
  "5100150": {
    "id": "5100150",
    "name": "Trzebiatów",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 15.276735,
      "latitude": 54.058645
    }
  },
  "5100153": {
    "id": "5100153",
    "name": "Wejherowo",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 18.2237963,
      "latitude": 54.607161
    }
  },
  "5100155": {
    "id": "5100155",
    "name": "Wolow",
    "isMeta": true,
    "country": "PL",
    "location": {
      "longitude": 16.633756,
      "latitude": 51.333017
    }
  },
  "5100158": {
    "id": "5100158",
    "name": "Zakopane",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 19.963387,
      "latitude": 49.300448
    }
  },
  "5100168": {
    "id": "5100168",
    "name": "Lukow",
    "isMeta": true,
    "country": "PL",
    "location": {
      "longitude": 22.3830241,
      "latitude": 51.927158
    }
  },
  "5100179": {
    "id": "5100179",
    "name": "Nowa Ruda",
    "isMeta": true,
    "country": "PL",
    "location": {
      "longitude": 16.497192,
      "latitude": 50.577312
    }
  },
  "5100190": {
    "id": "5100190",
    "name": "Piotrków Trybunalski",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 19.684623,
      "latitude": 51.40992
    }
  },
  "5100195": {
    "id": "5100195",
    "name": "Przeworsk",
    "isMeta": true,
    "country": "PL",
    "location": {
      "longitude": 22.49408,
      "latitude": 50.05912
    }
  },
  "5100199": {
    "id": "5100199",
    "name": "Scinawa",
    "isMeta": true,
    "country": "PL",
    "location": {
      "longitude": 16.421359,
      "latitude": 51.409659
    }
  },
  "5100206": {
    "id": "5100206",
    "name": "Rudna Gwizdanow",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 16.280327,
      "latitude": 51.531589
    }
  },
  "5100209": {
    "id": "5100209",
    "name": "Skarżysko Kamienna",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 20.881725,
      "latitude": 51.115891
    }
  },
  "5100212": {
    "id": "5100212",
    "name": "Zawiercie",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 19.422992,
      "latitude": 50.481019
    }
  },
  "5100216": {
    "id": "5100216",
    "name": "Ostroda",
    "isMeta": true,
    "country": "PL",
    "location": {
      "longitude": 19.9647952,
      "latitude": 53.6963007
    }
  },
  "5100222": {
    "id": "5100222",
    "name": "Zielona Góra",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 15.513709,
      "latitude": 51.947439
    }
  },
  "5100227": {
    "id": "5100227",
    "name": "Bochnia",
    "isMeta": true,
    "country": "PL",
    "location": {
      "longitude": 20.43028,
      "latitude": 49.96905
    }
  },
  "5100228": {
    "id": "5100228",
    "name": "Dębica",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 21.405563,
      "latitude": 50.054418
    }
  },
  "5100229": {
    "id": "5100229",
    "name": "Rzeszów",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 22.006797,
      "latitude": 50.04311
    }
  },
  "5100230": {
    "id": "5100230",
    "name": "Tarnów",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 20.974179,
      "latitude": 50.0054
    }
  },
  "5100231": {
    "id": "5100231",
    "name": "Zduńska Wola",
    "isMeta": true,
    "country": "PL",
    "location": {
      "longitude": 18.93974,
      "latitude": 51.59915
    }
  },
  "5100233": {
    "id": "5100233",
    "name": "Jaroslaw",
    "isMeta": true,
    "country": "PL",
    "location": {
      "longitude": 22.67775,
      "latitude": 50.01612
    }
  },
  "5100234": {
    "id": "5100234",
    "name": "Przemyśl Główny",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 22.776364,
      "latitude": 49.783663
    }
  },
  "5100236": {
    "id": "5100236",
    "name": "Kluczbork",
    "isMeta": true,
    "country": "PL",
    "location": {
      "longitude": 18.21816,
      "latitude": 50.97281
    }
  },
  "5100237": {
    "id": "5100237",
    "name": "Lubliniec",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 18.690038,
      "latitude": 50.673209
    }
  },
  "5100239": {
    "id": "5100239",
    "name": "Szczecinek",
    "isMeta": true,
    "country": "PL",
    "location": {
      "longitude": 16.69937,
      "latitude": 53.70791
    }
  },
  "5100240": {
    "id": "5100240",
    "name": "Krakow Plaszow",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 19.974894,
      "latitude": 50.035091
    }
  },
  "5100242": {
    "id": "5100242",
    "name": "Tuplice",
    "isMeta": true,
    "country": "PL",
    "location": {
      "longitude": 14.837235,
      "latitude": 51.671407
    }
  },
  "5100243": {
    "id": "5100243",
    "name": "Żary",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 15.136962,
      "latitude": 51.634749
    }
  },
  "5100244": {
    "id": "5100244",
    "name": "Krzewina Zgorzelecka",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 14.939361,
      "latitude": 51.015356
    }
  },
  "5100247": {
    "id": "5100247",
    "name": "Kamien Pomorski",
    "isMeta": true,
    "country": "PL",
    "location": {
      "longitude": 14.774086,
      "latitude": 53.966155
    }
  },
  "5100252": {
    "id": "5100252",
    "name": "Miedzyzdroje",
    "isMeta": true,
    "country": "PL",
    "location": {
      "longitude": 14.4504845,
      "latitude": 53.9283144
    }
  },
  "5100253": {
    "id": "5100253",
    "name": "Elbląg",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 19.416655,
      "latitude": 54.15091
    }
  },
  "5100254": {
    "id": "5100254",
    "name": "Naklo nad Notecia",
    "isMeta": true,
    "country": "PL",
    "location": {
      "longitude": 17.60151,
      "latitude": 53.14243
    }
  },
  "5100258": {
    "id": "5100258",
    "name": "Koło",
    "isMeta": true,
    "country": "PL",
    "location": {
      "longitude": 18.63865,
      "latitude": 52.20024
    }
  },
  "5100259": {
    "id": "5100259",
    "name": "Jelenia Góra",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 15.75533,
      "latitude": 50.902568
    }
  },
  "5100260": {
    "id": "5100260",
    "name": "Tychy",
    "isMeta": true,
    "country": "PL",
    "location": {
      "longitude": 18.98443,
      "latitude": 50.119469
    }
  },
  "5100262": {
    "id": "5100262",
    "name": "Rybnik",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 18.54764,
      "latitude": 50.089135
    }
  },
  "5100263": {
    "id": "5100263",
    "name": "Racibórz",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 18.226393,
      "latitude": 50.090348
    }
  },
  "5100264": {
    "id": "5100264",
    "name": "Zebrzydowice",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 18.623698,
      "latitude": 49.87049
    }
  },
  "5100303": {
    "id": "5100303",
    "name": "Chełm",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 23.494036,
      "latitude": 51.141196
    }
  },
  "5100304": {
    "id": "5100304",
    "name": "Chojnice",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 17.576796,
      "latitude": 53.688658
    }
  },
  "5100305": {
    "id": "5100305",
    "name": "Ełk",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 22.362177,
      "latitude": 53.825096
    }
  },
  "5100306": {
    "id": "5100306",
    "name": "Jaslo",
    "isMeta": true,
    "country": "PL",
    "location": {
      "longitude": 21.4722875,
      "latitude": 49.7445663
    }
  },
  "5100308": {
    "id": "5100308",
    "name": "Lubin Górniczy",
    "isMeta": true,
    "country": "PL",
    "location": {
      "longitude": 16.192803,
      "latitude": 51.394039
    }
  },
  "5100312": {
    "id": "5100312",
    "name": "Sanok",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 22.210834,
      "latitude": 49.553216
    }
  },
  "5100315": {
    "id": "5100315",
    "name": "Włocławek",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 19.059189,
      "latitude": 52.652481
    }
  },
  "5100360": {
    "id": "5100360",
    "name": "Połczyn Zdrój",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 22.981561,
      "latitude": 53.045938
    }
  },
  "5100708": {
    "id": "5100708",
    "name": "Chalupki",
    "isMeta": true,
    "country": "PL",
    "location": {
      "longitude": 18.311557,
      "latitude": 49.925477
    }
  },
  "5100734": {
    "id": "5100734",
    "name": "Ciechocinek",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 18.7891,
      "latitude": 52.879179
    }
  },
  "5100793": {
    "id": "5100793",
    "name": "Chojnow",
    "isMeta": true,
    "country": "PL",
    "location": {
      "longitude": 15.937047,
      "latitude": 51.277661
    }
  },
  "5101331": {
    "id": "5101331",
    "name": "Glucholazy",
    "isMeta": true,
    "country": "PL",
    "location": {
      "longitude": 17.3887110000001,
      "latitude": 50.3168376
    }
  },
  "5101408": {
    "id": "5101408",
    "name": "Jędrzychowice",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 15.03196,
      "latitude": 51.17711
    }
  },
  "5101519": {
    "id": "5101519",
    "name": "Kalisz Pomorski",
    "isMeta": true,
    "country": "PL",
    "location": {
      "longitude": 15.880873,
      "latitude": 53.277698
    }
  },
  "5101564": {
    "id": "5101564",
    "name": "Kłodzko Główne",
    "isMeta": true,
    "country": "PL",
    "location": {
      "longitude": 16.656705,
      "latitude": 50.450941
    }
  },
  "5101770": {
    "id": "5101770",
    "name": "Krosno",
    "isMeta": true,
    "country": "PL",
    "location": {
      "longitude": 21.77058,
      "latitude": 49.68866
    }
  },
  "5101819": {
    "id": "5101819",
    "name": "Kostrzyn",
    "isMeta": true,
    "country": "PL",
    "location": {
      "longitude": 17.224689,
      "latitude": 52.39336
    }
  },
  "5101932": {
    "id": "5101932",
    "name": "Lancut",
    "isMeta": true,
    "country": "PL",
    "location": {
      "longitude": 22.239401,
      "latitude": 50.064678
    }
  },
  "5101933": {
    "id": "5101933",
    "name": "Lasow",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 15.035114,
      "latitude": 51.225164
    }
  },
  "5102094": {
    "id": "5102094",
    "name": "Lipinki Luzyckie",
    "isMeta": true,
    "country": "PL",
    "location": {
      "longitude": 15.009288,
      "latitude": 51.649087
    }
  },
  "5102184": {
    "id": "5102184",
    "name": "Malomice",
    "isMeta": true,
    "country": "PL",
    "location": {
      "longitude": 15.447117,
      "latitude": 51.549576
    }
  },
  "5102244": {
    "id": "5102244",
    "name": "Mikołów",
    "isMeta": true,
    "country": "PL",
    "location": {
      "longitude": 18.9005242000001,
      "latitude": 50.1722303
    }
  },
  "5102265": {
    "id": "5102265",
    "name": "Miekinia",
    "isMeta": true,
    "country": "PL",
    "location": {
      "longitude": 16.737914,
      "latitude": 51.188371
    }
  },
  "5102278": {
    "id": "5102278",
    "name": "Malczyce",
    "isMeta": true,
    "country": "PL",
    "location": {
      "longitude": 16.485515,
      "latitude": 51.215555
    }
  },
  "5102560": {
    "id": "5102560",
    "name": "Oława",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 17.297187,
      "latitude": 50.930938
    }
  },
  "5102647": {
    "id": "5102647",
    "name": "Ostrowiec Świętokrzyski",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 21.376707,
      "latitude": 50.933896
    }
  },
  "5102756": {
    "id": "5102756",
    "name": "Piensk",
    "isMeta": true,
    "country": "PL",
    "location": {
      "longitude": 15.047403,
      "latitude": 51.24557
    }
  },
  "5102795": {
    "id": "5102795",
    "name": "Płock",
    "isMeta": true,
    "country": "PL",
    "location": {
      "longitude": 19.70638,
      "latitude": 52.54682
    }
  },
  "5102920": {
    "id": "5102920",
    "name": "Pszczyna",
    "isMeta": true,
    "country": "PL",
    "location": {
      "longitude": 18.95382,
      "latitude": 49.98037
    }
  },
  "5102946": {
    "id": "5102946",
    "name": "Puławy",
    "isMeta": true,
    "country": "PL",
    "location": {
      "longitude": 21.96939,
      "latitude": 51.41655
    }
  },
  "5103284": {
    "id": "5103284",
    "name": "Świebodzin",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 15.539535,
      "latitude": 52.245143
    }
  },
  "5103420": {
    "id": "5103420",
    "name": "Sieniawa Zarska",
    "isMeta": true,
    "country": "PL",
    "location": {
      "longitude": 15.060743,
      "latitude": 51.636457
    }
  },
  "5103854": {
    "id": "5103854",
    "name": "Tuplice Debinka",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 14.911764,
      "latitude": 51.665771
    }
  },
  "5103889": {
    "id": "5103889",
    "name": "Trzebnica",
    "isMeta": true,
    "country": "PL",
    "location": {
      "longitude": 17.0641,
      "latitude": 51.3094
    }
  },
  "5103924": {
    "id": "5103924",
    "name": "Wadowice",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 19.501657,
      "latitude": 49.884792
    }
  },
  "5104061": {
    "id": "5104061",
    "name": "Władysławowo",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 18.401763,
      "latitude": 54.794098
    }
  },
  "5104314": {
    "id": "5104314",
    "name": "Zagorz",
    "isMeta": true,
    "country": "PL",
    "location": {
      "longitude": 22.26707,
      "latitude": 49.5143
    }
  },
  "5104366": {
    "id": "5104366",
    "name": "Zamość",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 23.239209,
      "latitude": 50.713552
    }
  },
  "5105602": {
    "id": "5105602",
    "name": "Karpacz",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 15.762056,
      "latitude": 50.782622
    }
  },
  "5189068": {
    "id": "5189068",
    "name": "Warszawa Chopin",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 20.973514,
      "latitude": 52.169192
    }
  },
  "5189954": {
    "id": "5189954",
    "name": "Świnoujście Centrum",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 14.236,
      "latitude": 53.912993
    }
  },
  "5193610": {
    "id": "5193610",
    "name": "Słubice",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 14.594661,
      "latitude": 52.335818
    }
  },
  "5196001": {
    "id": "5196001",
    "name": "Kraków",
    "isMeta": true,
    "country": "PL",
    "location": {
      "longitude": 19.945266,
      "latitude": 50.068338
    }
  },
  "5196002": {
    "id": "5196002",
    "name": "Poznań",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 16.910866,
      "latitude": 52.401996
    }
  },
  "5196003": {
    "id": "5196003",
    "name": "Warszawa",
    "isMeta": true,
    "country": "PL",
    "location": {
      "longitude": 20.9211119,
      "latitude": 52.232855
    }
  },
  "5196004": {
    "id": "5196004",
    "name": "SZCZECIN",
    "isMeta": true,
    "country": "PL",
    "location": {
      "longitude": 14.583146,
      "latitude": 53.458795
    }
  },
  "5196006": {
    "id": "5196006",
    "name": "GDYNIA",
    "isMeta": true,
    "country": "PL",
    "location": {
      "longitude": 18.473551,
      "latitude": 54.541528
    }
  },
  "5196011": {
    "id": "5196011",
    "name": "Oleśnica",
    "isMeta": false,
    "country": "PL",
    "location": {
      "longitude": 17.38698,
      "latitude": 51.200372
    }
  },
  "5196012": {
    "id": "5196012",
    "name": "Łowicz",
    "isMeta": true,
    "country": "PL",
    "location": {
      "longitude": 19.9453743,
      "latitude": 52.1067916
    }
  },
  "5200002": {
    "id": "5200002",
    "name": "Plovdiv",
    "isMeta": false,
    "country": "BG",
    "location": {
      "longitude": 24.741522,
      "latitude": 42.134464
    }
  },
  "5200004": {
    "id": "5200004",
    "name": "Sofia",
    "isMeta": false,
    "country": "BG",
    "location": {
      "longitude": 23.320727,
      "latitude": 42.712022
    }
  },
  "5200010": {
    "id": "5200010",
    "name": "Karlovo",
    "isMeta": false,
    "country": "BG",
    "location": {
      "longitude": 24.804652,
      "latitude": 42.631924
    }
  },
  "5200016": {
    "id": "5200016",
    "name": "Varna",
    "isMeta": false,
    "country": "BG",
    "location": {
      "longitude": 27.912297,
      "latitude": 43.198411
    }
  },
  "5200018": {
    "id": "5200018",
    "name": "Burgas",
    "isMeta": false,
    "country": "BG",
    "location": {
      "longitude": 27.472722,
      "latitude": 42.491019
    }
  },
  "5200024": {
    "id": "5200024",
    "name": "Ruse",
    "isMeta": false,
    "country": "BG",
    "location": {
      "longitude": 25.955587,
      "latitude": 43.833381
    }
  },
  "5200057": {
    "id": "5200057",
    "name": "Dimitrovgrad",
    "isMeta": true,
    "country": "BG",
    "location": {
      "longitude": 25.5863141,
      "latitude": 42.0571408
    }
  },
  "5200218": {
    "id": "5200218",
    "name": "Pazardzhik",
    "isMeta": false,
    "country": "BG",
    "location": {
      "longitude": 24.320879,
      "latitude": 42.169953
    }
  },
  "5300002": {
    "id": "5300002",
    "name": "Arad",
    "isMeta": false,
    "country": "RO",
    "location": {
      "longitude": 21.32555,
      "latitude": 46.18956
    }
  },
  "5300004": {
    "id": "5300004",
    "name": "Sibiu",
    "isMeta": false,
    "country": "RO",
    "location": {
      "longitude": 24.160316,
      "latitude": 45.802997
    }
  },
  "5300005": {
    "id": "5300005",
    "name": "Brașov",
    "isMeta": false,
    "country": "RO",
    "location": {
      "longitude": 25.61371,
      "latitude": 45.661516
    }
  },
  "5300008": {
    "id": "5300008",
    "name": "Constanta",
    "isMeta": false,
    "country": "RO",
    "location": {
      "longitude": 28.63147,
      "latitude": 44.169486
    }
  },
  "5300027": {
    "id": "5300027",
    "name": "Cluj Napoca",
    "isMeta": false,
    "country": "RO",
    "location": {
      "longitude": 23.594149,
      "latitude": 46.786219
    }
  },
  "5300030": {
    "id": "5300030",
    "name": "Craiova",
    "isMeta": false,
    "country": "RO",
    "location": {
      "longitude": 23.817108,
      "latitude": 44.329081
    }
  },
  "5300050": {
    "id": "5300050",
    "name": "Timișoara Nord",
    "isMeta": false,
    "country": "RO",
    "location": {
      "longitude": 21.20656,
      "latitude": 45.75121
    }
  },
  "5300063": {
    "id": "5300063",
    "name": "Mediaș",
    "isMeta": false,
    "country": "RO",
    "location": {
      "longitude": 24.34944,
      "latitude": 46.160165
    }
  },
  "5300064": {
    "id": "5300064",
    "name": "Oradea",
    "isMeta": false,
    "country": "RO",
    "location": {
      "longitude": 21.935917,
      "latitude": 47.070665
    }
  },
  "5300073": {
    "id": "5300073",
    "name": "Deva",
    "isMeta": false,
    "country": "RO",
    "location": {
      "longitude": 22.910195,
      "latitude": 45.884538
    }
  },
  "5300083": {
    "id": "5300083",
    "name": "Sighișoara",
    "isMeta": false,
    "country": "RO",
    "location": {
      "longitude": 24.795737,
      "latitude": 46.226398
    }
  },
  "5300096": {
    "id": "5300096",
    "name": "Alba Iulia",
    "isMeta": false,
    "country": "RO",
    "location": {
      "longitude": 23.586274,
      "latitude": 46.056628
    }
  },
  "5400001": {
    "id": "5400001",
    "name": "Brno hl.n.",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 16.612775,
      "latitude": 49.190537
    }
  },
  "5400002": {
    "id": "5400002",
    "name": "Česka Třebová",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 16.446807,
      "latitude": 49.897323
    }
  },
  "5400003": {
    "id": "5400003",
    "name": "Děčín hl.n.",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.201248,
      "latitude": 50.773411
    }
  },
  "5400004": {
    "id": "5400004",
    "name": "Cheb",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 12.380699,
      "latitude": 50.073493
    }
  },
  "5400005": {
    "id": "5400005",
    "name": "Chomutov",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 13.39958,
      "latitude": 50.4566
    }
  },
  "5400006": {
    "id": "5400006",
    "name": "Karlovy Vary",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 12.866853,
      "latitude": 50.235668
    }
  },
  "5400008": {
    "id": "5400008",
    "name": "Lichkov",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 16.658629,
      "latitude": 50.097234
    }
  },
  "5400009": {
    "id": "5400009",
    "name": "Mariánské Lázně",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 12.695051,
      "latitude": 49.957058
    }
  },
  "5400010": {
    "id": "5400010",
    "name": "Olomouc hl.n.",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.277932,
      "latitude": 49.593128
    }
  },
  "5400011": {
    "id": "5400011",
    "name": "Petrovice u Karviné",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 18.549474,
      "latitude": 49.894257
    }
  },
  "5400012": {
    "id": "5400012",
    "name": "Plzeň hl.n.",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 13.388246,
      "latitude": 49.743167
    }
  },
  "5400014": {
    "id": "5400014",
    "name": "Praha hl.n.",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.436037,
      "latitude": 50.083058
    }
  },
  "5400016": {
    "id": "5400016",
    "name": "Přerov",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.446174,
      "latitude": 49.446352
    }
  },
  "5400017": {
    "id": "5400017",
    "name": "České Budějovice",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.48875,
      "latitude": 48.974616
    }
  },
  "5400018": {
    "id": "5400018",
    "name": "České Velenice",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.957364,
      "latitude": 48.769623
    }
  },
  "5400019": {
    "id": "5400019",
    "name": "Ústí nad Labem hl.n.",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.044728,
      "latitude": 50.659563
    }
  },
  "5400021": {
    "id": "5400021",
    "name": "Hradec Králové hlavní nádraží",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 15.809868,
      "latitude": 50.214444
    }
  },
  "5400022": {
    "id": "5400022",
    "name": "Kolín",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 15.213532,
      "latitude": 50.025401
    }
  },
  "5400026": {
    "id": "5400026",
    "name": "Ostrava hlavní nádraží",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 18.267258,
      "latitude": 49.852089
    }
  },
  "5400027": {
    "id": "5400027",
    "name": "Ostrava-Vítkovice",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 18.262898,
      "latitude": 49.801803
    }
  },
  "5400029": {
    "id": "5400029",
    "name": "Poděbrady",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 15.123469,
      "latitude": 50.149713
    }
  },
  "5400031": {
    "id": "5400031",
    "name": "Tábor",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.67755,
      "latitude": 49.414081
    }
  },
  "5400033": {
    "id": "5400033",
    "name": "Bakov nad Jizerou",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.939258,
      "latitude": 50.479032
    }
  },
  "5400034": {
    "id": "5400034",
    "name": "Benešov u Prahy",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.683052,
      "latitude": 49.779843
    }
  },
  "5400035": {
    "id": "5400035",
    "name": "Benešov nad Ploučnicí",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.304971,
      "latitude": 50.7386
    }
  },
  "5400036": {
    "id": "5400036",
    "name": "Beroun",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.075787,
      "latitude": 49.957493
    }
  },
  "5400037": {
    "id": "5400037",
    "name": "Blatno u Jesenice",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 13.390159,
      "latitude": 50.100062
    }
  },
  "5400038": {
    "id": "5400038",
    "name": "Bohumín",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 18.35892,
      "latitude": 49.901053
    }
  },
  "5400042": {
    "id": "5400042",
    "name": "Čáslav",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 15.394518,
      "latitude": 49.914973
    }
  },
  "5400043": {
    "id": "5400043",
    "name": "Častolovice",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 16.173844,
      "latitude": 50.128352
    }
  },
  "5400045": {
    "id": "5400045",
    "name": "Česka Lípa hl.n.",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.54095,
      "latitude": 50.679079
    }
  },
  "5400046": {
    "id": "5400046",
    "name": "Česky Těšín",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 18.622847,
      "latitude": 49.743626
    }
  },
  "5400047": {
    "id": "5400047",
    "name": "Chlumec nad Cidlinou",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 15.457187,
      "latitude": 50.163555
    }
  },
  "5400048": {
    "id": "5400048",
    "name": "Číčenice",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.221632,
      "latitude": 49.153576
    }
  },
  "5400050": {
    "id": "5400050",
    "name": "Doudleby nad Orlici",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 16.258282,
      "latitude": 50.109584
    }
  },
  "5400051": {
    "id": "5400051",
    "name": "Duchcov",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 13.754508,
      "latitude": 50.617455
    }
  },
  "5400054": {
    "id": "5400054",
    "name": "Havlíčkův Brod",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 15.5876,
      "latitude": 49.599258
    }
  },
  "5400056": {
    "id": "5400056",
    "name": "Hodonín",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.122598,
      "latitude": 48.856615
    }
  },
  "5400057": {
    "id": "5400057",
    "name": "Holýšov",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 13.101373,
      "latitude": 49.59755
    }
  },
  "5400058": {
    "id": "5400058",
    "name": "Horažďovice Předměstí",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 13.739373,
      "latitude": 49.331254
    }
  },
  "5400059": {
    "id": "5400059",
    "name": "Horní Cerekev",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 15.324594,
      "latitude": 49.311172
    }
  },
  "5400060": {
    "id": "5400060",
    "name": "Horni Dvoriste",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.421978,
      "latitude": 48.601815
    }
  },
  "5400061": {
    "id": "5400061",
    "name": "Hořovice",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 13.899183,
      "latitude": 49.843325
    }
  },
  "5400062": {
    "id": "5400062",
    "name": "Hostinné",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 15.73799,
      "latitude": 50.53668
    }
  },
  "5400063": {
    "id": "5400063",
    "name": "Hranice na Moravě",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.741596,
      "latitude": 49.565549
    }
  },
  "5400065": {
    "id": "5400065",
    "name": "Hulín",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.476818,
      "latitude": 49.316251
    }
  },
  "5400066": {
    "id": "5400066",
    "name": "Jablonné v Podještědí",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.758121,
      "latitude": 50.769447
    }
  },
  "5400067": {
    "id": "5400067",
    "name": "Jablunkov",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 18.754635,
      "latitude": 49.589955
    }
  },
  "5400068": {
    "id": "5400068",
    "name": "Jaroměř",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 15.911311,
      "latitude": 50.342109
    }
  },
  "5400070": {
    "id": "5400070",
    "name": "Jihlava",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 15.599044,
      "latitude": 49.414449
    }
  },
  "5400071": {
    "id": "5400071",
    "name": "Kadaň",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 13.258145,
      "latitude": 50.411344
    }
  },
  "5400072": {
    "id": "5400072",
    "name": "Karviná hlavní nádraží",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 18.527046,
      "latitude": 49.855469
    }
  },
  "5400074": {
    "id": "5400074",
    "name": "Kladno",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.113405,
      "latitude": 50.127923
    }
  },
  "5400075": {
    "id": "5400075",
    "name": "Kojetín",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.304702,
      "latitude": 49.345421
    }
  },
  "5400076": {
    "id": "5400076",
    "name": "Kostelec u Jihlavy",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 15.48213,
      "latitude": 49.357215
    }
  },
  "5400079": {
    "id": "5400079",
    "name": "Křižanov",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 16.08038,
      "latitude": 49.384767
    }
  },
  "5400080": {
    "id": "5400080",
    "name": "Kutna Hora hlavní nádraží",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 15.300853,
      "latitude": 49.961838
    }
  },
  "5400083": {
    "id": "5400083",
    "name": "Letohrad",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 16.507592,
      "latitude": 50.031514
    }
  },
  "5400084": {
    "id": "5400084",
    "name": "Letovice",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 16.571056,
      "latitude": 49.555436
    }
  },
  "5400085": {
    "id": "5400085",
    "name": "Lázně Kynžvart",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 12.614211,
      "latitude": 49.993256
    }
  },
  "5400086": {
    "id": "5400086",
    "name": "Skalice nad Svitavou",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 16.609377,
      "latitude": 49.480682
    }
  },
  "5400089": {
    "id": "5400089",
    "name": "Staré Město u Uherské Hradiště",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.423108,
      "latitude": 49.076572
    }
  },
  "5400090": {
    "id": "5400090",
    "name": "Stod",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 13.155596,
      "latitude": 49.640078
    }
  },
  "5400091": {
    "id": "5400091",
    "name": "Strakonice",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 13.916623,
      "latitude": 49.255349
    }
  },
  "5400094": {
    "id": "5400094",
    "name": "Studénka",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 18.066619,
      "latitude": 49.707381
    }
  },
  "5400095": {
    "id": "5400095",
    "name": "Suchdol nad Odrou",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.938855,
      "latitude": 49.641993
    }
  },
  "5400097": {
    "id": "5400097",
    "name": "Svitavy",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 16.479636,
      "latitude": 49.758916
    }
  },
  "5400098": {
    "id": "5400098",
    "name": "Svoboda nad Úpou",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 15.82052,
      "latitude": 50.621691
    }
  },
  "5400101": {
    "id": "5400101",
    "name": "Teplice v Čechách",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 13.828807,
      "latitude": 50.646762
    }
  },
  "5400102": {
    "id": "5400102",
    "name": "Třebechovice pod Orebem",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 15.982335,
      "latitude": 50.200016
    }
  },
  "5400103": {
    "id": "5400103",
    "name": "Třebíč",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 15.884784,
      "latitude": 49.211455
    }
  },
  "5400104": {
    "id": "5400104",
    "name": "Třeboň",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.760188,
      "latitude": 49.016272
    }
  },
  "5400106": {
    "id": "5400106",
    "name": "Třinec",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 18.661282,
      "latitude": 49.688009
    }
  },
  "5400107": {
    "id": "5400107",
    "name": "Trutnov hl.n.",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 15.910772,
      "latitude": 50.565329
    }
  },
  "5400108": {
    "id": "5400108",
    "name": "Turnov",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 15.139066,
      "latitude": 50.586975
    }
  },
  "5400109": {
    "id": "5400109",
    "name": "Tyniste nad Orlici",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 16.074609,
      "latitude": 50.15472
    }
  },
  "5400111": {
    "id": "5400111",
    "name": "Valašské Meziříčí",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.960438,
      "latitude": 49.474614
    }
  },
  "5400112": {
    "id": "5400112",
    "name": "Velky Osek",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 15.194116,
      "latitude": 50.099616
    }
  },
  "5400113": {
    "id": "5400113",
    "name": "Veselí nad Lužnici",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.717013,
      "latitude": 49.193791
    }
  },
  "5400115": {
    "id": "5400115",
    "name": "Všetaty",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.584755,
      "latitude": 50.282025
    }
  },
  "5400116": {
    "id": "5400116",
    "name": "Vsetín",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.994444,
      "latitude": 49.335425
    }
  },
  "5400117": {
    "id": "5400117",
    "name": "Zábřeh na Moravě",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 16.887216,
      "latitude": 49.87227
    }
  },
  "5400118": {
    "id": "5400118",
    "name": "Žamberk",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 16.450115,
      "latitude": 50.073772
    }
  },
  "5400119": {
    "id": "5400119",
    "name": "Železný Brod",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 15.265706,
      "latitude": 50.63994
    }
  },
  "5400121": {
    "id": "5400121",
    "name": "Znojmo",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 16.058815,
      "latitude": 48.852596
    }
  },
  "5400122": {
    "id": "5400122",
    "name": "As (CZ)",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 12.199935,
      "latitude": 50.209437
    }
  },
  "5400126": {
    "id": "5400126",
    "name": "Kralupy nad Vltavou",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.313469,
      "latitude": 50.238724
    }
  },
  "5400128": {
    "id": "5400128",
    "name": "Neratovice",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.517498,
      "latitude": 50.262671
    }
  },
  "5400129": {
    "id": "5400129",
    "name": "Nove Sedlo u Lokte",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 12.745229,
      "latitude": 50.214031
    }
  },
  "5400130": {
    "id": "5400130",
    "name": "Praha-Libeň",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.501434,
      "latitude": 50.101261
    }
  },
  "5400133": {
    "id": "5400133",
    "name": "Tršnice",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 12.398452,
      "latitude": 50.112722
    }
  },
  "5400136": {
    "id": "5400136",
    "name": "Lysá nad Labem",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.841684,
      "latitude": 50.195801
    }
  },
  "5400138": {
    "id": "5400138",
    "name": "Martinice v Krkonoších",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 15.541162,
      "latitude": 50.580701
    }
  },
  "5400139": {
    "id": "5400139",
    "name": "Milevsko",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.377832,
      "latitude": 49.441731
    }
  },
  "5400140": {
    "id": "5400140",
    "name": "Mimoň",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.714703,
      "latitude": 50.657954
    }
  },
  "5400141": {
    "id": "5400141",
    "name": "Mladá Boleslav hlavní nádraží",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.886945,
      "latitude": 50.407398
    }
  },
  "5400144": {
    "id": "5400144",
    "name": "Moravsky Písek",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.314977,
      "latitude": 48.9776
    }
  },
  "5400145": {
    "id": "5400145",
    "name": "Moravské Budějovice",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 15.809373,
      "latitude": 49.057559
    }
  },
  "5400146": {
    "id": "5400146",
    "name": "Nepomuk",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 13.608724,
      "latitude": 49.497581
    }
  },
  "5400147": {
    "id": "5400147",
    "name": "Nezamyslice",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.161342,
      "latitude": 49.335659
    }
  },
  "5400149": {
    "id": "5400149",
    "name": "Nymburk hlavní nádraží",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 15.045425,
      "latitude": 50.193391
    }
  },
  "5400150": {
    "id": "5400150",
    "name": "Nýřany",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 13.209612,
      "latitude": 49.715057
    }
  },
  "5400151": {
    "id": "5400151",
    "name": "Namést nad Oslavou",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 16.147547,
      "latitude": 49.206996
    }
  },
  "5400152": {
    "id": "5400152",
    "name": "Obrataň",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.953483,
      "latitude": 49.42867
    }
  },
  "5400153": {
    "id": "5400153",
    "name": "Obrnice",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 13.700531,
      "latitude": 50.504175
    }
  },
  "5400154": {
    "id": "5400154",
    "name": "Okrisky",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 15.770872,
      "latitude": 49.247969
    }
  },
  "5400155": {
    "id": "5400155",
    "name": "Olbramovice",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.624146,
      "latitude": 49.666956
    }
  },
  "5400156": {
    "id": "5400156",
    "name": "Ostrava-Kunčice",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 18.291924,
      "latitude": 49.790926
    }
  },
  "5400158": {
    "id": "5400158",
    "name": "Ostrov nad Ohři",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 12.957366,
      "latitude": 50.301577
    }
  },
  "5400159": {
    "id": "5400159",
    "name": "Otrokovice",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.531706,
      "latitude": 49.20234
    }
  },
  "5400160": {
    "id": "5400160",
    "name": "Pacov",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 15.019159,
      "latitude": 49.459593
    }
  },
  "5400161": {
    "id": "5400161",
    "name": "Pardubice hl.n.",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 15.75871,
      "latitude": 50.031262
    }
  },
  "5400163": {
    "id": "5400163",
    "name": "Písek",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.142971,
      "latitude": 49.296502
    }
  },
  "5400164": {
    "id": "5400164",
    "name": "Planá u Mariánských Lázní",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 12.730145,
      "latitude": 49.861294
    }
  },
  "5400165": {
    "id": "5400165",
    "name": "Plasy",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 13.379922,
      "latitude": 49.930879
    }
  },
  "5400167": {
    "id": "5400167",
    "name": "Podbořany",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 13.40457,
      "latitude": 50.223523
    }
  },
  "5400171": {
    "id": "5400171",
    "name": "Praha-Vysočany",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.497497,
      "latitude": 50.112318
    }
  },
  "5400172": {
    "id": "5400172",
    "name": "Protivín",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.210543,
      "latitude": 49.212839
    }
  },
  "5400173": {
    "id": "5400173",
    "name": "Stara Paka",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 15.486553,
      "latitude": 50.516176
    }
  },
  "5400174": {
    "id": "5400174",
    "name": "Stříbro",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 13.000208,
      "latitude": 49.740838
    }
  },
  "5400175": {
    "id": "5400175",
    "name": "Luzná u Rakovníka",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 13.77026,
      "latitude": 50.144931
    }
  },
  "5400176": {
    "id": "5400176",
    "name": "Lovosice",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.059587,
      "latitude": 50.509713
    }
  },
  "5400180": {
    "id": "5400180",
    "name": "Kunčice nad Labem",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 15.62291,
      "latitude": 50.583757
    }
  },
  "5400181": {
    "id": "5400181",
    "name": "Pelhřimov",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 15.222351,
      "latitude": 49.419438
    }
  },
  "5400182": {
    "id": "5400182",
    "name": "Rokycany",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 13.591743,
      "latitude": 49.74038
    }
  },
  "5400183": {
    "id": "5400183",
    "name": "Roudnice nad Labem",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.263831,
      "latitude": 50.426599
    }
  },
  "5400186": {
    "id": "5400186",
    "name": "Rychnov u Jablonce nad Nisou",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 15.143138,
      "latitude": 50.683789
    }
  },
  "5400188": {
    "id": "5400188",
    "name": "Voltanov",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 12.327483,
      "latitude": 50.167754
    }
  },
  "5400189": {
    "id": "5400189",
    "name": "Zateč",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 13.555166,
      "latitude": 50.33659
    }
  },
  "5400190": {
    "id": "5400190",
    "name": "Zdice",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 13.979304,
      "latitude": 49.907732
    }
  },
  "5400194": {
    "id": "5400194",
    "name": "Ústi nad Orlici",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 16.378417,
      "latitude": 49.971322
    }
  },
  "5400196": {
    "id": "5400196",
    "name": "Domažlice",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 12.944583,
      "latitude": 49.434693
    }
  },
  "5400197": {
    "id": "5400197",
    "name": "Františkovy Lázně",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 12.355322,
      "latitude": 50.124453
    }
  },
  "5400198": {
    "id": "5400198",
    "name": "Liberec",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 15.045946,
      "latitude": 50.761429
    }
  },
  "5400199": {
    "id": "5400199",
    "name": "Sokolov",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 12.644155,
      "latitude": 50.186164
    }
  },
  "5400201": {
    "id": "5400201",
    "name": "Praha-Holešovice",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.44001,
      "latitude": 50.110214
    }
  },
  "5400202": {
    "id": "5400202",
    "name": "Břeclav",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 16.893239,
      "latitude": 48.753904
    }
  },
  "5400203": {
    "id": "5400203",
    "name": "Most",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 13.657419,
      "latitude": 50.511214
    }
  },
  "5400204": {
    "id": "5400204",
    "name": "Praha-Smíchov",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.408872,
      "latitude": 50.061484
    }
  },
  "5400205": {
    "id": "5400205",
    "name": "Hrádek nad Nisou",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.847599,
      "latitude": 50.855006
    }
  },
  "5400206": {
    "id": "5400206",
    "name": "Praha Masarykovo n.",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.433003,
      "latitude": 50.087734
    }
  },
  "5400208": {
    "id": "5400208",
    "name": "Bílina",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 13.772829,
      "latitude": 50.554124
    }
  },
  "5400210": {
    "id": "5400210",
    "name": "Brno-Královo Pole",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 16.596175,
      "latitude": 49.23055
    }
  },
  "5400211": {
    "id": "5400211",
    "name": "Dobřany",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 13.303154,
      "latitude": 49.656505
    }
  },
  "5400213": {
    "id": "5400213",
    "name": "Klatovy",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 13.27411,
      "latitude": 49.401487
    }
  },
  "5400216": {
    "id": "5400216",
    "name": "Přeštice",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 13.322624,
      "latitude": 49.575131
    }
  },
  "5400219": {
    "id": "5400219",
    "name": "Soběslav",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.726074,
      "latitude": 49.255259
    }
  },
  "5400220": {
    "id": "5400220",
    "name": "Varnsdorf",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.63887,
      "latitude": 50.903377
    }
  },
  "5400222": {
    "id": "5400222",
    "name": "Horní Lideč",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 18.058313,
      "latitude": 49.188748
    }
  },
  "5400223": {
    "id": "5400223",
    "name": "Havířov",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 18.412038,
      "latitude": 49.791753
    }
  },
  "5400225": {
    "id": "5400225",
    "name": "Nejdek",
    "isMeta": true,
    "country": "CZ",
    "location": {
      "longitude": 12.727467,
      "latitude": 50.319079
    }
  },
  "5400226": {
    "id": "5400226",
    "name": "Nova Role",
    "isMeta": true,
    "country": "CZ",
    "location": {
      "longitude": 12.780008,
      "latitude": 50.273413
    }
  },
  "5400227": {
    "id": "5400227",
    "name": "Rumburk",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.550812,
      "latitude": 50.956836
    }
  },
  "5400229": {
    "id": "5400229",
    "name": "Chodov",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.490891,
      "latitude": 50.031596
    }
  },
  "5400231": {
    "id": "5400231",
    "name": "Horni Blatna",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 12.766516,
      "latitude": 50.388098
    }
  },
  "5400232": {
    "id": "5400232",
    "name": "Pernink",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 12.773446,
      "latitude": 50.365301
    }
  },
  "5400243": {
    "id": "5400243",
    "name": "Choceň",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 16.22398,
      "latitude": 49.993758
    }
  },
  "5400244": {
    "id": "5400244",
    "name": "Jince",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 13.987404,
      "latitude": 49.782162
    }
  },
  "5400245": {
    "id": "5400245",
    "name": "Vraz u Písku",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.12475,
      "latitude": 49.391877
    }
  },
  "5400246": {
    "id": "5400246",
    "name": "Světla nad Sázavou",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 15.416904,
      "latitude": 49.670534
    }
  },
  "5400247": {
    "id": "5400247",
    "name": "Bylnice",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 18.014216,
      "latitude": 49.067458
    }
  },
  "5400248": {
    "id": "5400248",
    "name": "Bzenec",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.263244,
      "latitude": 48.969183
    }
  },
  "5400249": {
    "id": "5400249",
    "name": "Opočno pod Orlickými Horami",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 16.085845,
      "latitude": 50.278492
    }
  },
  "5400250": {
    "id": "5400250",
    "name": "Razice",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.108497,
      "latitude": 49.24476
    }
  },
  "5400251": {
    "id": "5400251",
    "name": "Zateč Západ",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 13.534851,
      "latitude": 50.338253
    }
  },
  "5400253": {
    "id": "5400253",
    "name": "Bělá pod Bezdězem",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.835583,
      "latitude": 50.488382
    }
  },
  "5400254": {
    "id": "5400254",
    "name": "Slavkov u Brna",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 16.873777,
      "latitude": 49.145015
    }
  },
  "5400255": {
    "id": "5400255",
    "name": "Rybniště",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.509803,
      "latitude": 50.88308
    }
  },
  "5400258": {
    "id": "5400258",
    "name": "Veselí nad Moravou",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.382557,
      "latitude": 48.949033
    }
  },
  "5400259": {
    "id": "5400259",
    "name": "Meziměstí",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 16.243049,
      "latitude": 50.626564
    }
  },
  "5400261": {
    "id": "5400261",
    "name": "Tanvald",
    "isMeta": true,
    "country": "CZ",
    "location": {
      "longitude": 15.3078824,
      "latitude": 50.7375286
    }
  },
  "5400266": {
    "id": "5400266",
    "name": "Březnice",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 13.963859,
      "latitude": 49.558057
    }
  },
  "5400267": {
    "id": "5400267",
    "name": "Bojkovice",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.79555,
      "latitude": 49.035985
    }
  },
  "5400268": {
    "id": "5400268",
    "name": "Slavičín",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.899779,
      "latitude": 49.074297
    }
  },
  "5400271": {
    "id": "5400271",
    "name": "Česka Kamenice",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.414092,
      "latitude": 50.795868
    }
  },
  "5400275": {
    "id": "5400275",
    "name": "Praha-Vršovice",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.457063,
      "latitude": 50.061169
    }
  },
  "5400277": {
    "id": "5400277",
    "name": "Praha-Dejvice",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.399685,
      "latitude": 50.097288
    }
  },
  "5400278": {
    "id": "5400278",
    "name": "Příbram",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.003207,
      "latitude": 49.688845
    }
  },
  "5400279": {
    "id": "5400279",
    "name": "Újezdec u Luhačovic",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.685943,
      "latitude": 49.033172
    }
  },
  "5400280": {
    "id": "5400280",
    "name": "Kunovice",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.470067,
      "latitude": 49.05195
    }
  },
  "5400281": {
    "id": "5400281",
    "name": "Nove Město nad Metuji",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 16.137785,
      "latitude": 50.353363
    }
  },
  "5400282": {
    "id": "5400282",
    "name": "Jedlová",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.570327,
      "latitude": 50.842736
    }
  },
  "5400283": {
    "id": "5400283",
    "name": "Mirovice",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.034453,
      "latitude": 49.50987
    }
  },
  "5400284": {
    "id": "5400284",
    "name": "Teplice nad Metuji",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 16.178291,
      "latitude": 50.58133
    }
  },
  "5400289": {
    "id": "5400289",
    "name": "Čimelice",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.076594,
      "latitude": 49.470355
    }
  },
  "5400290": {
    "id": "5400290",
    "name": "Uhersky Brod",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.643829,
      "latitude": 49.021818
    }
  },
  "5400291": {
    "id": "5400291",
    "name": "Náchod",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 16.170659,
      "latitude": 50.417241
    }
  },
  "5400292": {
    "id": "5400292",
    "name": "Police nad Metuji",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 16.212108,
      "latitude": 50.513183
    }
  },
  "5400293": {
    "id": "5400293",
    "name": "Hronov",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 16.176726,
      "latitude": 50.473199
    }
  },
  "5400295": {
    "id": "5400295",
    "name": "Kyjov",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.122841,
      "latitude": 49.016218
    }
  },
  "5400296": {
    "id": "5400296",
    "name": "Klášterec nad Ohři",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 13.196389,
      "latitude": 50.385014
    }
  },
  "5400299": {
    "id": "5400299",
    "name": "Kaplice",
    "isMeta": true,
    "country": "CZ",
    "location": {
      "longitude": 14.467652,
      "latitude": 48.775145
    }
  },
  "5400385": {
    "id": "5400385",
    "name": "Adamov",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 16.662894,
      "latitude": 49.295649
    }
  },
  "5400400": {
    "id": "5400400",
    "name": "Babylon",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 12.869047,
      "latitude": 49.39888
    }
  },
  "5400443": {
    "id": "5400443",
    "name": "Bělčice",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 13.885902,
      "latitude": 49.504267
    }
  },
  "5400446": {
    "id": "5400446",
    "name": "Bělotín",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.799242,
      "latitude": 49.584363
    }
  },
  "5400478": {
    "id": "5400478",
    "name": "Bily Kostel nad Nisou",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.917886,
      "latitude": 50.821189
    }
  },
  "5400484": {
    "id": "5400484",
    "name": "Biskupice u Luhačovic",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.716619,
      "latitude": 49.077194
    }
  },
  "5400489": {
    "id": "5400489",
    "name": "Blansko",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 16.644475,
      "latitude": 49.35415
    }
  },
  "5400492": {
    "id": "5400492",
    "name": "Blatná",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 13.872879,
      "latitude": 49.43084
    }
  },
  "5400496": {
    "id": "5400496",
    "name": "Blažovice",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 16.798843,
      "latitude": 49.163912
    }
  },
  "5400499": {
    "id": "5400499",
    "name": "Blížejov",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 12.994872,
      "latitude": 49.501404
    }
  },
  "5400503": {
    "id": "5400503",
    "name": "Bludov",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 16.938552,
      "latitude": 49.927767
    }
  },
  "5400504": {
    "id": "5400504",
    "name": "Bludov lázně",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 16.90252,
      "latitude": 49.941297
    }
  },
  "5400523": {
    "id": "5400523",
    "name": "Bohuslavice u Kyjova",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.11918,
      "latitude": 49.054471
    }
  },
  "5400526": {
    "id": "5400526",
    "name": "Bohutice",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 16.356028,
      "latitude": 48.987959
    }
  },
  "5400573": {
    "id": "5400573",
    "name": "Brankovice",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.133729,
      "latitude": 49.150354
    }
  },
  "5400575": {
    "id": "5400575",
    "name": "Branná",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.014842,
      "latitude": 50.147004
    }
  },
  "5400602": {
    "id": "5400602",
    "name": "Brno-Slatina",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 16.682704,
      "latitude": 49.16831
    }
  },
  "5400613": {
    "id": "5400613",
    "name": "Brumov",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 16.426646,
      "latitude": 49.461739
    }
  },
  "5400617": {
    "id": "5400617",
    "name": "Bruntál",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.474369,
      "latitude": 49.993842
    }
  },
  "5400624": {
    "id": "5400624",
    "name": "Březno u Chomutova",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 13.421118,
      "latitude": 50.396153
    }
  },
  "5400636": {
    "id": "5400636",
    "name": "Bučovice",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 16.999554,
      "latitude": 49.145653
    }
  },
  "5400646": {
    "id": "5400646",
    "name": "Bujanov",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.43237,
      "latitude": 48.702009
    }
  },
  "5400660": {
    "id": "5400660",
    "name": "Bystrice pod Hostýnem",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.665671,
      "latitude": 49.393203
    }
  },
  "5400716": {
    "id": "5400716",
    "name": "Čerčany",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.702051,
      "latitude": 49.851434
    }
  },
  "5400723": {
    "id": "5400723",
    "name": "Pardubice-Cerna za Bory",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 15.831091,
      "latitude": 50.027325
    }
  },
  "5400747": {
    "id": "5400747",
    "name": "Česka Metuje",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 16.184631,
      "latitude": 50.55234
    }
  },
  "5400769": {
    "id": "5400769",
    "name": "Čížova",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.097735,
      "latitude": 49.353744
    }
  },
  "5400783": {
    "id": "5400783",
    "name": "Děčín Východ",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.223098,
      "latitude": 50.77591
    }
  },
  "5400803": {
    "id": "5400803",
    "name": "Dětmarovice",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 18.466075,
      "latitude": 49.900106
    }
  },
  "5400834": {
    "id": "5400834",
    "name": "Dobronín",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 15.641905,
      "latitude": 49.478235
    }
  },
  "5400875": {
    "id": "5400875",
    "name": "Dolní Lipka",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 16.7214,
      "latitude": 50.089319
    }
  },
  "5400890": {
    "id": "5400890",
    "name": "Dolní Žleb",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.215436,
      "latitude": 50.846135
    }
  },
  "5400903": {
    "id": "5400903",
    "name": "Domašov nad Bystrici",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.444527,
      "latitude": 49.740171
    }
  },
  "5400917": {
    "id": "5400917",
    "name": "Drahotuse",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.682486,
      "latitude": 49.552404
    }
  },
  "5400948": {
    "id": "5400948",
    "name": "Dvůr Králové nad Labem",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 15.798301,
      "latitude": 50.413802
    }
  },
  "5400963": {
    "id": "5400963",
    "name": "Frenštát pod Radhoštěm",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 18.223471,
      "latitude": 49.542222
    }
  },
  "5400964": {
    "id": "5400964",
    "name": "Frydek-Mistek",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 18.353617,
      "latitude": 49.677797
    }
  },
  "5400967": {
    "id": "5400967",
    "name": "Frýdlant nad Ostravici",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 18.353833,
      "latitude": 49.589343
    }
  },
  "5400989": {
    "id": "5400989",
    "name": "Golčův Jeníkov Město",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 15.473545,
      "latitude": 49.821867
    }
  },
  "5401009": {
    "id": "5401009",
    "name": "Hanušovice",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 16.929483,
      "latitude": 50.071704
    }
  },
  "5401039": {
    "id": "5401039",
    "name": "Hladké Životice",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.985122,
      "latitude": 49.677941
    }
  },
  "5401046": {
    "id": "5401046",
    "name": "Hlinsko v Čechách",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 15.901962,
      "latitude": 49.766521
    }
  },
  "5401052": {
    "id": "5401052",
    "name": "Hluboká nad Vltavou-Zámostí",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.464156,
      "latitude": 49.05062
    }
  },
  "5401068": {
    "id": "5401068",
    "name": "Hodkovice nad Mohelkou",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 15.099999,
      "latitude": 50.667689
    }
  },
  "5401079": {
    "id": "5401079",
    "name": "Holešov",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.570899,
      "latitude": 49.327155
    }
  },
  "5401086": {
    "id": "5401086",
    "name": "Holkov",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.447777,
      "latitude": 48.851688
    }
  },
  "5401107": {
    "id": "5401107",
    "name": "Horní Branná",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 15.587034,
      "latitude": 50.596728
    }
  },
  "5401115": {
    "id": "5401115",
    "name": "Horní Lipova",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.08283,
      "latitude": 50.224557
    }
  },
  "5401116": {
    "id": "5401116",
    "name": "Horní Moštěnice Zastávka",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.452529,
      "latitude": 49.415546
    }
  },
  "5401131": {
    "id": "5401131",
    "name": "Horní Suchá",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 18.48841,
      "latitude": 49.792985
    }
  },
  "5401147": {
    "id": "5401147",
    "name": "Hořice v Podkrkonoší",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 15.634956,
      "latitude": 50.356276
    }
  },
  "5401169": {
    "id": "5401169",
    "name": "Hradčovice",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.574693,
      "latitude": 49.044381
    }
  },
  "5401212": {
    "id": "5401212",
    "name": "Hrubá Voda",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.438596,
      "latitude": 49.669779
    }
  },
  "5401218": {
    "id": "5401218",
    "name": "Hrušovany nad Jevišovkou",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 16.383613,
      "latitude": 48.810248
    }
  },
  "5401259": {
    "id": "5401259",
    "name": "Chomutov Město",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 13.414047,
      "latitude": 50.469866
    }
  },
  "5401262": {
    "id": "5401262",
    "name": "Chotěboř",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 15.682627,
      "latitude": 49.711926
    }
  },
  "5401283": {
    "id": "5401283",
    "name": "Chrast u Chrudimi",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 15.910726,
      "latitude": 49.901399
    }
  },
  "5401284": {
    "id": "5401284",
    "name": "Chrastava",
    "isMeta": true,
    "country": "CZ",
    "location": {
      "longitude": 14.952279,
      "latitude": 50.813171
    }
  },
  "5401285": {
    "id": "5401285",
    "name": "Chrastava-Andelska Hora",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.957798,
      "latitude": 50.796783
    }
  },
  "5401294": {
    "id": "5401294",
    "name": "Chrudim",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 15.787034,
      "latitude": 49.948249
    }
  },
  "5401318": {
    "id": "5401318",
    "name": "Ivanovice na Hané",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.088089,
      "latitude": 49.306561
    }
  },
  "5401325": {
    "id": "5401325",
    "name": "Jablonné nad Orlici",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 16.594365,
      "latitude": 50.0263
    }
  },
  "5401342": {
    "id": "5401342",
    "name": "Jaroměřice nad Rokytnou",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 15.865583,
      "latitude": 49.094146
    }
  },
  "5401362": {
    "id": "5401362",
    "name": "Jeřmanice",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 15.08638,
      "latitude": 50.707422
    }
  },
  "5401364": {
    "id": "5401364",
    "name": "Jeseník",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.194135,
      "latitude": 50.227847
    }
  },
  "5401365": {
    "id": "5401365",
    "name": "Jeseník nad Odrou",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.902008,
      "latitude": 49.615295
    }
  },
  "5401369": {
    "id": "5401369",
    "name": "Jestřabice",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.112764,
      "latitude": 49.088959
    }
  },
  "5401377": {
    "id": "5401377",
    "name": "Jičín",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 15.361216,
      "latitude": 50.430419
    }
  },
  "5401389": {
    "id": "5401389",
    "name": "Jindřichov na Moravě",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 16.990088,
      "latitude": 50.099652
    }
  },
  "5401390": {
    "id": "5401390",
    "name": "Jindřichov ve Slezsku",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.538574,
      "latitude": 50.248576
    }
  },
  "5401392": {
    "id": "5401392",
    "name": "Jindřichův Hradec",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 15.004848,
      "latitude": 49.155218
    }
  },
  "5401395": {
    "id": "5401395",
    "name": "Jirkov Zastávka",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 13.447664,
      "latitude": 50.485694
    }
  },
  "5401399": {
    "id": "5401399",
    "name": "Jistebník",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 18.151081,
      "latitude": 49.749145
    }
  },
  "5401414": {
    "id": "5401414",
    "name": "Kalná Voda",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 15.872801,
      "latitude": 50.600387
    }
  },
  "5401433": {
    "id": "5401433",
    "name": "Kamenny Ujezd",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.448883,
      "latitude": 48.891178
    }
  },
  "5401447": {
    "id": "5401447",
    "name": "Karlovy Vary-Dvory",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 12.831409,
      "latitude": 50.228818
    }
  },
  "5401527": {
    "id": "5401527",
    "name": "Konstantinovy Lazne",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 12.975641,
      "latitude": 49.884909
    }
  },
  "5401529": {
    "id": "5401529",
    "name": "Kopidlno",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 15.260465,
      "latitude": 50.333965
    }
  },
  "5401540": {
    "id": "5401540",
    "name": "Kostelec nad Orlici Město",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 16.205123,
      "latitude": 50.119779
    }
  },
  "5401597": {
    "id": "5401597",
    "name": "Krásna Lípa",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.512293,
      "latitude": 50.919019
    }
  },
  "5401621": {
    "id": "5401621",
    "name": "Krnov",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.683274,
      "latitude": 50.089269
    }
  },
  "5401624": {
    "id": "5401624",
    "name": "Kroměříž",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.403394,
      "latitude": 49.302327
    }
  },
  "5401642": {
    "id": "5401642",
    "name": "Křenovice dolní nádraží",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 16.833487,
      "latitude": 49.145177
    }
  },
  "5401652": {
    "id": "5401652",
    "name": "Křinec",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 15.143605,
      "latitude": 50.265988
    }
  },
  "5401654": {
    "id": "5401654",
    "name": "Křižanovice",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 16.93449,
      "latitude": 49.14506
    }
  },
  "5401666": {
    "id": "5401666",
    "name": "Kunovice Zastávka",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.460988,
      "latitude": 49.038233
    }
  },
  "5401667": {
    "id": "5401667",
    "name": "Kunovice-Loucká",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.818795,
      "latitude": 49.440194
    }
  },
  "5401679": {
    "id": "5401679",
    "name": "Kyjov Zastávka",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.12285,
      "latitude": 49.003867
    }
  },
  "5401681": {
    "id": "5401681",
    "name": "Kynsperk nad Ohri",
    "isMeta": true,
    "country": "CZ",
    "location": {
      "longitude": 12.519249,
      "latitude": 50.125568
    }
  },
  "5401696": {
    "id": "5401696",
    "name": "Lázně Bělohrad",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 15.57738,
      "latitude": 50.426095
    }
  },
  "5401753": {
    "id": "5401753",
    "name": "Libuň",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 15.303361,
      "latitude": 50.489937
    }
  },
  "5401766": {
    "id": "5401766",
    "name": "Lipník nad Bečvou",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.572652,
      "latitude": 49.529259
    }
  },
  "5401767": {
    "id": "5401767",
    "name": "Lipno nad Vltavou",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.2198782,
      "latitude": 48.6434
    }
  },
  "5401769": {
    "id": "5401769",
    "name": "Lipova Lázně",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.131713,
      "latitude": 50.228683
    }
  },
  "5401771": {
    "id": "5401771",
    "name": "Lipova Lázně Zastávka",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.160101,
      "latitude": 50.229681
    }
  },
  "5401790": {
    "id": "5401790",
    "name": "Litoměřice horní nádraží",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.131609,
      "latitude": 50.540995
    }
  },
  "5401791": {
    "id": "5401791",
    "name": "Litoměřice Město",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.138836,
      "latitude": 50.532483
    }
  },
  "5401805": {
    "id": "5401805",
    "name": "Lochovice",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 13.974297,
      "latitude": 49.846426
    }
  },
  "5401814": {
    "id": "5401814",
    "name": "Lomnice nad Popelkou",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 15.374295,
      "latitude": 50.526846
    }
  },
  "5401831": {
    "id": "5401831",
    "name": "Louny",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 13.823207,
      "latitude": 50.361292
    }
  },
  "5401863": {
    "id": "5401863",
    "name": "Luhačovice",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.751637,
      "latitude": 49.098811
    }
  },
  "5401865": {
    "id": "5401865",
    "name": "Luka nad Jihlavou",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 15.709962,
      "latitude": 49.369575
    }
  },
  "5401888": {
    "id": "5401888",
    "name": "Machnin",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.984802,
      "latitude": 50.787426
    }
  },
  "5401889": {
    "id": "5401889",
    "name": "Machnin hrad",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.969511,
      "latitude": 50.787893
    }
  },
  "5401890": {
    "id": "5401890",
    "name": "Majdalena zast",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.857497,
      "latitude": 48.965006
    }
  },
  "5401898": {
    "id": "5401898",
    "name": "Mala Skala",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 15.192138,
      "latitude": 50.634546
    }
  },
  "5401924": {
    "id": "5401924",
    "name": "Marefy",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 16.973081,
      "latitude": 49.149438
    }
  },
  "5401953": {
    "id": "5401953",
    "name": "Mělník",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.491761,
      "latitude": 50.353336
    }
  },
  "5401961": {
    "id": "5401961",
    "name": "Město Albrechtice",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.578639,
      "latitude": 50.168096
    }
  },
  "5401981": {
    "id": "5401981",
    "name": "Mikulovice",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.320145,
      "latitude": 50.302458
    }
  },
  "5401989": {
    "id": "5401989",
    "name": "Milín",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.021886,
      "latitude": 49.632348
    }
  },
  "5401994": {
    "id": "5401994",
    "name": "Milotice nad Opavou",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.557595,
      "latitude": 50.014191
    }
  },
  "5401995": {
    "id": "5401995",
    "name": "Milovice",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.88174,
      "latitude": 50.229106
    }
  },
  "5401998": {
    "id": "5401998",
    "name": "Miroslav",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 16.36265,
      "latitude": 48.935495
    }
  },
  "5402030": {
    "id": "5402030",
    "name": "Mnichovo Hradiště",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.978545,
      "latitude": 50.518504
    }
  },
  "5402055": {
    "id": "5402055",
    "name": "Moravsky Beroun",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.432501,
      "latitude": 49.784499
    }
  },
  "5402058": {
    "id": "5402058",
    "name": "Moravsky Krumlov",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 16.337984,
      "latitude": 49.046278
    }
  },
  "5402064": {
    "id": "5402064",
    "name": "Mosty u Jablunkova",
    "isMeta": true,
    "country": "CZ",
    "location": {
      "longitude": 18.751345,
      "latitude": 49.524459
    }
  },
  "5402065": {
    "id": "5402065",
    "name": "Mosty u Jablunkova z",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 18.75112,
      "latitude": 49.50835
    }
  },
  "5402101": {
    "id": "5402101",
    "name": "Návojná",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 18.044334,
      "latitude": 49.100357
    }
  },
  "5402119": {
    "id": "5402119",
    "name": "Nemotice",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.114373,
      "latitude": 49.133024
    }
  },
  "5402124": {
    "id": "5402124",
    "name": "Nesovice",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.080996,
      "latitude": 49.149195
    }
  },
  "5402133": {
    "id": "5402133",
    "name": "Nevojice",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.048338,
      "latitude": 49.137087
    }
  },
  "5402134": {
    "id": "5402134",
    "name": "Nezdenice",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.748841,
      "latitude": 49.022295
    }
  },
  "5402165": {
    "id": "5402165",
    "name": "Nova Paka Město",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 15.512639,
      "latitude": 50.494557
    }
  },
  "5402185": {
    "id": "5402185",
    "name": "Nove Losiny",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.005658,
      "latitude": 50.116444
    }
  },
  "5402199": {
    "id": "5402199",
    "name": "Novy Bydžov",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 15.485833,
      "latitude": 50.244891
    }
  },
  "5402211": {
    "id": "5402211",
    "name": "Nymburk Město",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 15.033505,
      "latitude": 50.18442
    }
  },
  "5402247": {
    "id": "5402247",
    "name": "Omlenice",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.447454,
      "latitude": 48.725201
    }
  },
  "5402256": {
    "id": "5402256",
    "name": "Opava Východ",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.908139,
      "latitude": 49.934745
    }
  },
  "5402285": {
    "id": "5402285",
    "name": "Ostrava-Mariánské Hory",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 18.240344,
      "latitude": 49.836933
    }
  },
  "5402286": {
    "id": "5402286",
    "name": "Ostrava-Svinov",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 18.21023,
      "latitude": 49.821391
    }
  },
  "5402288": {
    "id": "5402288",
    "name": "Ostravice",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 18.393349,
      "latitude": 49.537655
    }
  },
  "5402290": {
    "id": "5402290",
    "name": "Ostroměř",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 15.54465,
      "latitude": 50.368978
    }
  },
  "5402292": {
    "id": "5402292",
    "name": "Ostrožská Nova Ves",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.436798,
      "latitude": 49.009944
    }
  },
  "5402294": {
    "id": "5402294",
    "name": "Ostružna",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.050559,
      "latitude": 50.183863
    }
  },
  "5402362": {
    "id": "5402362",
    "name": "Písečná",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.260079,
      "latitude": 50.278852
    }
  },
  "5402380": {
    "id": "5402380",
    "name": "Plesna (CZ)",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 12.344976,
      "latitude": 50.210947
    }
  },
  "5402389": {
    "id": "5402389",
    "name": "Plzeň Jižní Předměstí",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 13.36686,
      "latitude": 49.740344
    }
  },
  "5402402": {
    "id": "5402402",
    "name": "Pocatky-Zirovnice",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 15.212481,
      "latitude": 49.237029
    }
  },
  "5402441": {
    "id": "5402441",
    "name": "Polichno",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.711068,
      "latitude": 49.068355
    }
  },
  "5402443": {
    "id": "5402443",
    "name": "Polom",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.855777,
      "latitude": 49.574385
    }
  },
  "5402457": {
    "id": "5402457",
    "name": "Popovice u Uherského Hradiště",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.527814,
      "latitude": 49.046071
    }
  },
  "5402472": {
    "id": "5402472",
    "name": "Poteč",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 18.042483,
      "latitude": 49.154256
    }
  },
  "5402474": {
    "id": "5402474",
    "name": "Potštejn",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 16.315448,
      "latitude": 50.083516
    }
  },
  "5402475": {
    "id": "5402475",
    "name": "Potůčník",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 16.963489,
      "latitude": 50.080082
    }
  },
  "5402487": {
    "id": "5402487",
    "name": "Praha-Bechovice",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.59778,
      "latitude": 50.082195
    }
  },
  "5402490": {
    "id": "5402490",
    "name": "Praha-Bubny",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.424064,
      "latitude": 50.100389
    }
  },
  "5402492": {
    "id": "5402492",
    "name": "Praha-Cakovice",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.519475,
      "latitude": 50.14894
    }
  },
  "5402495": {
    "id": "5402495",
    "name": "Praha-Holyne",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.348815,
      "latitude": 50.031586
    }
  },
  "5402496": {
    "id": "5402496",
    "name": "Praha-Horni Mecholup",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.565374,
      "latitude": 50.048135
    }
  },
  "5402497": {
    "id": "5402497",
    "name": "Praha-Horni Pocernic",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.613394,
      "latitude": 50.115671
    }
  },
  "5402501": {
    "id": "5402501",
    "name": "Praha-Klanovice",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.664013,
      "latitude": 50.08731
    }
  },
  "5402502": {
    "id": "5402502",
    "name": "Praha-Kolovraty",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.625997,
      "latitude": 50.013805
    }
  },
  "5402509": {
    "id": "5402509",
    "name": "Praha-Reporyje",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.308238,
      "latitude": 50.03244
    }
  },
  "5402515": {
    "id": "5402515",
    "name": "Praha-Uhrineves",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.591353,
      "latitude": 50.033869
    }
  },
  "5402519": {
    "id": "5402519",
    "name": "Praha-Zlicin",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.297765,
      "latitude": 50.06418
    }
  },
  "5402546": {
    "id": "5402546",
    "name": "Prosenice",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.484747,
      "latitude": 49.503155
    }
  },
  "5402549": {
    "id": "5402549",
    "name": "Prostějov hlavní nádraží",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.129556,
      "latitude": 49.472367
    }
  },
  "5402606": {
    "id": "5402606",
    "name": "Radomyšl",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 13.948687,
      "latitude": 49.320278
    }
  },
  "5402625": {
    "id": "5402625",
    "name": "Rakovník",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 13.73629,
      "latitude": 50.099023
    }
  },
  "5402629": {
    "id": "5402629",
    "name": "Ramzová",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.063566,
      "latitude": 50.193805
    }
  },
  "5402659": {
    "id": "5402659",
    "name": "Rohatec",
    "isMeta": true,
    "country": "CZ",
    "location": {
      "longitude": 17.198072,
      "latitude": 48.892733
    }
  },
  "5402678": {
    "id": "5402678",
    "name": "Rosice nad Labem",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 15.742745,
      "latitude": 50.045555
    }
  },
  "5402687": {
    "id": "5402687",
    "name": "Rousínov",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 16.868347,
      "latitude": 49.19736
    }
  },
  "5402708": {
    "id": "5402708",
    "name": "Rožnov pod Radhoštěm",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 18.134622,
      "latitude": 49.460456
    }
  },
  "5402712": {
    "id": "5402712",
    "name": "Ruda nad Moravou",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 16.888735,
      "latitude": 49.983547
    }
  },
  "5402744": {
    "id": "5402744",
    "name": "Řetenice",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 13.800922,
      "latitude": 50.642645
    }
  },
  "5402751": {
    "id": "5402751",
    "name": "Říkovice",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.453698,
      "latitude": 49.379005
    }
  },
  "5402772": {
    "id": "5402772",
    "name": "Sebuzin",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.05396,
      "latitude": 50.593052
    }
  },
  "5402782": {
    "id": "5402782",
    "name": "Sedlice",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 13.936722,
      "latitude": 49.384578
    }
  },
  "5402790": {
    "id": "5402790",
    "name": "Semily",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 15.324055,
      "latitude": 50.603425
    }
  },
  "5402829": {
    "id": "5402829",
    "name": "Skrbovice",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.484351,
      "latitude": 50.052117
    }
  },
  "5402830": {
    "id": "5402830",
    "name": "Skrochovice",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.776923,
      "latitude": 50.018407
    }
  },
  "5402842": {
    "id": "5402842",
    "name": "Slaný",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.075687,
      "latitude": 50.228333
    }
  },
  "5402925": {
    "id": "5402925",
    "name": "Staré Splavy",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.629314,
      "latitude": 50.587398
    }
  },
  "5402978": {
    "id": "5402978",
    "name": "Studenec",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 16.069036,
      "latitude": 49.222458
    }
  },
  "5402996": {
    "id": "5402996",
    "name": "Sušice",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 13.541799,
      "latitude": 49.246791
    }
  },
  "5403045": {
    "id": "5403045",
    "name": "Šlapanice",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 16.729509,
      "latitude": 49.156881
    }
  },
  "5403060": {
    "id": "5403060",
    "name": "Šternberk",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.285959,
      "latitude": 49.720766
    }
  },
  "5403072": {
    "id": "5403072",
    "name": "Šumice",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.724121,
      "latitude": 49.030016
    }
  },
  "5403073": {
    "id": "5403073",
    "name": "Sumna",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 15.87432,
      "latitude": 48.923126
    }
  },
  "5403074": {
    "id": "5403074",
    "name": "Šumperk",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 16.983104,
      "latitude": 49.961811
    }
  },
  "5403084": {
    "id": "5403084",
    "name": "Švihov u Klatov",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 13.29074,
      "latitude": 49.47394
    }
  },
  "5403130": {
    "id": "5403130",
    "name": "Tišnov",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 16.418285,
      "latitude": 49.346841
    }
  },
  "5403134": {
    "id": "5403134",
    "name": "Tlumačov",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.501314,
      "latitude": 49.254064
    }
  },
  "5403198": {
    "id": "5403198",
    "name": "Třemešná ve Slezsku",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.573794,
      "latitude": 50.199864
    }
  },
  "5403201": {
    "id": "5403201",
    "name": "Tremosna u Plzne z",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 13.395356,
      "latitude": 49.803143
    }
  },
  "5403228": {
    "id": "5403228",
    "name": "Uherské Hradiště",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.457285,
      "latitude": 49.066773
    }
  },
  "5403230": {
    "id": "5403230",
    "name": "Uhersky Ostroh",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.403421,
      "latitude": 48.981978
    }
  },
  "5403247": {
    "id": "5403247",
    "name": "Uničov",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.115722,
      "latitude": 49.77924
    }
  },
  "5403254": {
    "id": "5403254",
    "name": "Ústi nad Labem Západ",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.031019,
      "latitude": 50.658394
    }
  },
  "5403255": {
    "id": "5403255",
    "name": "Ústi nad Labem-Strekov",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.048377,
      "latitude": 50.649792
    }
  },
  "5403271": {
    "id": "5403271",
    "name": "Valašské Klobouky",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 18.022473,
      "latitude": 49.142211
    }
  },
  "5403272": {
    "id": "5403272",
    "name": "Valašské Příkazy",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 18.063607,
      "latitude": 49.165897
    }
  },
  "5403275": {
    "id": "5403275",
    "name": "Valšov",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.437068,
      "latitude": 49.933648
    }
  },
  "5403276": {
    "id": "5403276",
    "name": "Valtice",
    "isMeta": true,
    "country": "CZ",
    "location": {
      "longitude": 16.743011,
      "latitude": 48.747486
    }
  },
  "5403297": {
    "id": "5403297",
    "name": "Velesin",
    "isMeta": true,
    "country": "CZ",
    "location": {
      "longitude": 14.436819,
      "latitude": 48.820001
    }
  },
  "5403298": {
    "id": "5403298",
    "name": "Velesyn mesto",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.45318,
      "latitude": 48.836308
    }
  },
  "5403374": {
    "id": "5403374",
    "name": "Vešky",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.50206,
      "latitude": 49.042763
    }
  },
  "5403415": {
    "id": "5403415",
    "name": "Vlkoš",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.165729,
      "latitude": 48.987911
    }
  },
  "5403442": {
    "id": "5403442",
    "name": "Vracov",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.220608,
      "latitude": 48.976531
    }
  },
  "5403470": {
    "id": "5403470",
    "name": "Vrchlabí",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 15.623198,
      "latitude": 50.618761
    }
  },
  "5403486": {
    "id": "5403486",
    "name": "Vyhen",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.473082,
      "latitude": 48.788548
    }
  },
  "5403497": {
    "id": "5403497",
    "name": "Výškov na Moravě",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 16.9915,
      "latitude": 49.278451
    }
  },
  "5403514": {
    "id": "5403514",
    "name": "Zahlinice",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.491165,
      "latitude": 49.291908
    }
  },
  "5403515": {
    "id": "5403515",
    "name": "Záhorovice",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.777139,
      "latitude": 49.021207
    }
  },
  "5403521": {
    "id": "5403521",
    "name": "Zajeci",
    "isMeta": true,
    "country": "CZ",
    "location": {
      "longitude": 16.781539,
      "latitude": 48.889659
    }
  },
  "5403535": {
    "id": "5403535",
    "name": "Zastávka u Brna",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 16.358641,
      "latitude": 49.1874
    }
  },
  "5403549": {
    "id": "5403549",
    "name": "Zbiroh",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 13.786026,
      "latitude": 49.83292
    }
  },
  "5403580": {
    "id": "5403580",
    "name": "Zlín Střed",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.658176,
      "latitude": 49.226386
    }
  },
  "5403582": {
    "id": "5403582",
    "name": "Zlín-Louky",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.623693,
      "latitude": 49.216489
    }
  },
  "5403583": {
    "id": "5403583",
    "name": "Zlín-Malenovice",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.599359,
      "latitude": 49.20981
    }
  },
  "5403584": {
    "id": "5403584",
    "name": "Zlín-Malenovice Zastávka",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.573794,
      "latitude": 49.20554
    }
  },
  "5403586": {
    "id": "5403586",
    "name": "Zlin-Prstne",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.64062,
      "latitude": 49.219932
    }
  },
  "5403590": {
    "id": "5403590",
    "name": "Zlonice",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.078204,
      "latitude": 50.284938
    }
  },
  "5403616": {
    "id": "5403616",
    "name": "Zdar nad Sázavou",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 15.939088,
      "latitude": 49.55398
    }
  },
  "5403618": {
    "id": "5403618",
    "name": "Zdarec u Skutče",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 15.977903,
      "latitude": 49.82647
    }
  },
  "5403629": {
    "id": "5403629",
    "name": "Železná Ruda Město",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 13.229325,
      "latitude": 49.143092
    }
  },
  "5403719": {
    "id": "5403719",
    "name": "Břest Nadrazi",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.45536,
      "latitude": 49.349315
    }
  },
  "5403721": {
    "id": "5403721",
    "name": "Brniště",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.728819,
      "latitude": 50.716476
    }
  },
  "5403789": {
    "id": "5403789",
    "name": "Opava Západ",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 17.888677,
      "latitude": 49.938619
    }
  },
  "5438015": {
    "id": "5438015",
    "name": "Brno dolní nádraží",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 16.617,
      "latitude": 49.183
    }
  },
  "5453006": {
    "id": "5453006",
    "name": "Praha-Bechovice stred",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.616693,
      "latitude": 50.08366
    }
  },
  "5454532": {
    "id": "5454532",
    "name": "Varnsdorf Pivovar Kocour",
    "isMeta": true,
    "country": "CZ",
    "location": {
      "longitude": 14.604145,
      "latitude": 50.920124
    }
  },
  "5454619": {
    "id": "5454619",
    "name": "Louny Předměstí",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 13.767876,
      "latitude": 50.343387
    }
  },
  "5455399": {
    "id": "5455399",
    "name": "Třebenice",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.00063,
      "latitude": 50.473837
    }
  },
  "5471500": {
    "id": "5471500",
    "name": "Bily Kostel nad Nisou Skola",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.922165,
      "latitude": 50.823481
    }
  },
  "5480027": {
    "id": "5480027",
    "name": "Praha Zlicin (M)",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.290646,
      "latitude": 50.053546
    }
  },
  "5480269": {
    "id": "5480269",
    "name": "Praha Sidliste Repy",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.298466,
      "latitude": 50.065313
    }
  },
  "5480438": {
    "id": "5480438",
    "name": "Praha-Holyne (Tram)",
    "isMeta": false,
    "country": "CZ",
    "location": {
      "longitude": 14.358236,
      "latitude": 50.027181
    }
  },
  "5496001": {
    "id": "5496001",
    "name": "Praha",
    "isMeta": true,
    "country": "CZ",
    "location": {
      "longitude": 14.451481,
      "latitude": 50.081925
    }
  },
  "5496002": {
    "id": "5496002",
    "name": "Ostrava",
    "isMeta": true,
    "country": "CZ",
    "location": {
      "longitude": 18.2625243,
      "latitude": 49.8209226
    }
  },
  "5496012": {
    "id": "5496012",
    "name": "Plzeň",
    "isMeta": true,
    "country": "CZ",
    "location": {
      "longitude": 13.362379,
      "latitude": 49.746502
    }
  },
  "5500003": {
    "id": "5500003",
    "name": "Budapest-Keleti",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 19.085069,
      "latitude": 47.500385
    }
  },
  "5500007": {
    "id": "5500007",
    "name": "Budapest-Déli",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 19.025291,
      "latitude": 47.498533
    }
  },
  "5500008": {
    "id": "5500008",
    "name": "Budapest-Kelenföld",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 19.020455,
      "latitude": 47.464356
    }
  },
  "5500009": {
    "id": "5500009",
    "name": "Tatabanya",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 18.393141,
      "latitude": 47.585266
    }
  },
  "5500010": {
    "id": "5500010",
    "name": "Tata",
    "isMeta": true,
    "country": "HU",
    "location": {
      "longitude": 18.328205,
      "latitude": 47.66362
    }
  },
  "5500016": {
    "id": "5500016",
    "name": "Mosonmagyaróvár",
    "isMeta": true,
    "country": "HU",
    "location": {
      "longitude": 17.2741621,
      "latitude": 47.8762817
    }
  },
  "5500017": {
    "id": "5500017",
    "name": "Hegyeshalom",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 17.146591,
      "latitude": 47.913335
    }
  },
  "5500018": {
    "id": "5500018",
    "name": "Miskolc Tiszai pu",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 20.809929,
      "latitude": 48.098428
    }
  },
  "5500025": {
    "id": "5500025",
    "name": "Papa (H)",
    "isMeta": true,
    "country": "HU",
    "location": {
      "longitude": 17.459712,
      "latitude": 47.340494
    }
  },
  "5500027": {
    "id": "5500027",
    "name": "Sárvár",
    "isMeta": true,
    "country": "HU",
    "location": {
      "longitude": 16.9395010000001,
      "latitude": 47.251841
    }
  },
  "5500030": {
    "id": "5500030",
    "name": "Csorna",
    "isMeta": true,
    "country": "HU",
    "location": {
      "longitude": 17.248591,
      "latitude": 47.601711
    }
  },
  "5500032": {
    "id": "5500032",
    "name": "Fertöszentmiklos",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 16.86077,
      "latitude": 47.600075
    }
  },
  "5500035": {
    "id": "5500035",
    "name": "Szekesfehervar",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 18.425944,
      "latitude": 47.183327
    }
  },
  "5500037": {
    "id": "5500037",
    "name": "Siofok",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 18.053368,
      "latitude": 46.908302
    }
  },
  "5500039": {
    "id": "5500039",
    "name": "Balatonföldvar",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 17.879454,
      "latitude": 46.853521
    }
  },
  "5500043": {
    "id": "5500043",
    "name": "Balatonlelle",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 17.694573,
      "latitude": 46.787909
    }
  },
  "5500044": {
    "id": "5500044",
    "name": "Balatonboglar",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 17.646867,
      "latitude": 46.77616
    }
  },
  "5500049": {
    "id": "5500049",
    "name": "Nagykanizsa",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 16.98687,
      "latitude": 46.440916
    }
  },
  "5500053": {
    "id": "5500053",
    "name": "Szolnok",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 20.175695,
      "latitude": 47.17956
    }
  },
  "5500054": {
    "id": "5500054",
    "name": "Karcag",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 20.929404,
      "latitude": 47.303359
    }
  },
  "5500056": {
    "id": "5500056",
    "name": "Varpalota",
    "isMeta": true,
    "country": "HU",
    "location": {
      "longitude": 18.149436,
      "latitude": 47.194581
    }
  },
  "5500057": {
    "id": "5500057",
    "name": "Hajduszoboszlo",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 21.407792,
      "latitude": 47.429658
    }
  },
  "5500058": {
    "id": "5500058",
    "name": "Debrecen",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 21.628792,
      "latitude": 47.519631
    }
  },
  "5500060": {
    "id": "5500060",
    "name": "Ajka",
    "isMeta": true,
    "country": "HU",
    "location": {
      "longitude": 17.57347,
      "latitude": 47.105768
    }
  },
  "5500073": {
    "id": "5500073",
    "name": "Balatonfüred",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 17.901864,
      "latitude": 46.962453
    }
  },
  "5500076": {
    "id": "5500076",
    "name": "Tapolca",
    "isMeta": true,
    "country": "HU",
    "location": {
      "longitude": 17.429113,
      "latitude": 46.877073
    }
  },
  "5500078": {
    "id": "5500078",
    "name": "Keszthely",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 17.247324,
      "latitude": 46.757696
    }
  },
  "5500080": {
    "id": "5500080",
    "name": "Györ",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 17.634795,
      "latitude": 47.681985
    }
  },
  "5500089": {
    "id": "5500089",
    "name": "Kaposvar",
    "isMeta": true,
    "country": "HU",
    "location": {
      "longitude": 17.795189,
      "latitude": 46.352615
    }
  },
  "5500098": {
    "id": "5500098",
    "name": "Kecskemét",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 19.700857,
      "latitude": 46.913848
    }
  },
  "5500101": {
    "id": "5500101",
    "name": "Szeged",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 20.143181,
      "latitude": 46.23981
    }
  },
  "5500103": {
    "id": "5500103",
    "name": "Pécs",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 18.22535,
      "latitude": 46.066228
    }
  },
  "5500109": {
    "id": "5500109",
    "name": "Békéscsaba",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 21.081538,
      "latitude": 46.670042
    }
  },
  "5500118": {
    "id": "5500118",
    "name": "Bük",
    "isMeta": true,
    "country": "HU",
    "location": {
      "longitude": 16.763565,
      "latitude": 47.3756953
    }
  },
  "5500119": {
    "id": "5500119",
    "name": "Dunaujvaros",
    "isMeta": true,
    "country": "HU",
    "location": {
      "longitude": 18.914229,
      "latitude": 46.960736
    }
  },
  "5500120": {
    "id": "5500120",
    "name": "Eger",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 20.382123,
      "latitude": 47.891623
    }
  },
  "5500124": {
    "id": "5500124",
    "name": "Hodmezövasarhely",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 20.340575,
      "latitude": 46.413427
    }
  },
  "5500126": {
    "id": "5500126",
    "name": "Kisujszallas",
    "isMeta": true,
    "country": "HU",
    "location": {
      "longitude": 20.751643,
      "latitude": 47.223985
    }
  },
  "5500127": {
    "id": "5500127",
    "name": "Körmend",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 16.597206,
      "latitude": 47.016127
    }
  },
  "5500129": {
    "id": "5500129",
    "name": "Ketegyhaza",
    "isMeta": true,
    "country": "HU",
    "location": {
      "longitude": 21.171628,
      "latitude": 46.532579
    }
  },
  "5500130": {
    "id": "5500130",
    "name": "Szentes",
    "isMeta": true,
    "country": "HU",
    "location": {
      "longitude": 20.272266,
      "latitude": 46.657467
    }
  },
  "5500131": {
    "id": "5500131",
    "name": "Veszpremvarsany",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 17.818759,
      "latitude": 47.443537
    }
  },
  "5500132": {
    "id": "5500132",
    "name": "Zirc",
    "isMeta": true,
    "country": "HU",
    "location": {
      "longitude": 17.88074,
      "latitude": 47.266674
    }
  },
  "5500133": {
    "id": "5500133",
    "name": "Budapest-Ferencváros",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 19.090787,
      "latitude": 47.468986
    }
  },
  "5500141": {
    "id": "5500141",
    "name": "Mohacs",
    "isMeta": true,
    "country": "HU",
    "location": {
      "longitude": 18.684825,
      "latitude": 46.003034
    }
  },
  "5500151": {
    "id": "5500151",
    "name": "Abda",
    "isMeta": true,
    "country": "HU",
    "location": {
      "longitude": 17.541118,
      "latitude": 47.690426
    }
  },
  "5500157": {
    "id": "5500157",
    "name": "Acsad",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 16.734795,
      "latitude": 47.308277
    }
  },
  "5500176": {
    "id": "5500176",
    "name": "Almasfüzitö felsö",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 18.218383,
      "latitude": 47.731192
    }
  },
  "5500177": {
    "id": "5500177",
    "name": "Almasfüzitö",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 18.261855,
      "latitude": 47.725268
    }
  },
  "5500187": {
    "id": "5500187",
    "name": "Alsorönök",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 16.378238,
      "latitude": 46.964125
    }
  },
  "5500233": {
    "id": "5500233",
    "name": "Satoraljaujhely",
    "isMeta": true,
    "country": "HU",
    "location": {
      "longitude": 21.657989,
      "latitude": 48.385598
    }
  },
  "5500300": {
    "id": "5500300",
    "name": "Biatorbagy",
    "isMeta": true,
    "country": "HU",
    "location": {
      "longitude": 18.834082,
      "latitude": 47.48095
    }
  },
  "5500303": {
    "id": "5500303",
    "name": "Bicske also",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 18.643169,
      "latitude": 47.486676
    }
  },
  "5500337": {
    "id": "5500337",
    "name": "Bösarkany",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 17.234307,
      "latitude": 47.685509
    }
  },
  "5500345": {
    "id": "5500345",
    "name": "Budaörs",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 18.965926,
      "latitude": 47.447439
    }
  },
  "5500368": {
    "id": "5500368",
    "name": "Csakanydoroszlo",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 16.500158,
      "latitude": 46.97848
    }
  },
  "5500392": {
    "id": "5500392",
    "name": "Csongrad",
    "isMeta": true,
    "country": "HU",
    "location": {
      "longitude": 20.140025,
      "latitude": 46.70448
    }
  },
  "5500410": {
    "id": "5500410",
    "name": "Debrecen-Kondoros",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 21.713309,
      "latitude": 47.52569
    }
  },
  "5500429": {
    "id": "5500429",
    "name": "Dombovar also",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 18.134065,
      "latitude": 46.363726
    }
  },
  "5500433": {
    "id": "5500433",
    "name": "Dorog",
    "isMeta": true,
    "country": "HU",
    "location": {
      "longitude": 18.732989,
      "latitude": 47.723327
    }
  },
  "5500471": {
    "id": "5500471",
    "name": "Egyhazasradoc",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 16.619625,
      "latitude": 47.09125
    }
  },
  "5500475": {
    "id": "5500475",
    "name": "Enese",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 17.424708,
      "latitude": 47.644257
    }
  },
  "5500490": {
    "id": "5500490",
    "name": "Esztergom",
    "isMeta": true,
    "country": "HU",
    "location": {
      "longitude": 18.743389,
      "latitude": 47.777594
    }
  },
  "5500510": {
    "id": "5500510",
    "name": "Felsögöd",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 19.143598,
      "latitude": 47.705851
    }
  },
  "5500523": {
    "id": "5500523",
    "name": "Fertöboz",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 16.692069,
      "latitude": 47.624841
    }
  },
  "5500581": {
    "id": "5500581",
    "name": "Gyöngyös",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 19.937391,
      "latitude": 47.783213
    }
  },
  "5500585": {
    "id": "5500585",
    "name": "Györ-Gyarvaros",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 17.661996,
      "latitude": 47.684781
    }
  },
  "5500588": {
    "id": "5500588",
    "name": "Györszentivan",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 17.746306,
      "latitude": 47.688556
    }
  },
  "5500612": {
    "id": "5500612",
    "name": "Hansagliget",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 17.216176,
      "latitude": 47.720036
    }
  },
  "5500653": {
    "id": "5500653",
    "name": "Kimle-Karolyhaza",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 17.341621,
      "latitude": 47.804355
    }
  },
  "5500677": {
    "id": "5500677",
    "name": "Kismaros",
    "isMeta": true,
    "country": "HU",
    "location": {
      "longitude": 19.010612,
      "latitude": 47.827485
    }
  },
  "5500709": {
    "id": "5500709",
    "name": "Kony",
    "isMeta": true,
    "country": "HU",
    "location": {
      "longitude": 17.355302,
      "latitude": 47.632949
    }
  },
  "5500728": {
    "id": "5500728",
    "name": "Budapest-Nyugati",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 19.057464,
      "latitude": 47.510705
    }
  },
  "5500734": {
    "id": "5500734",
    "name": "Köszeg",
    "isMeta": true,
    "country": "HU",
    "location": {
      "longitude": 16.556458,
      "latitude": 47.382303
    }
  },
  "5500765": {
    "id": "5500765",
    "name": "Lébény-Mosonszentmiklos",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 17.425562,
      "latitude": 47.756263
    }
  },
  "5500771": {
    "id": "5500771",
    "name": "Level",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 17.192481,
      "latitude": 47.889861
    }
  },
  "5500775": {
    "id": "5500775",
    "name": "Lövö",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 16.77735,
      "latitude": 47.509923
    }
  },
  "5500874": {
    "id": "5500874",
    "name": "Mosonszolnok",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 17.160596,
      "latitude": 47.852897
    }
  },
  "5500884": {
    "id": "5500884",
    "name": "Nagycenk",
    "isMeta": true,
    "country": "HU",
    "location": {
      "longitude": 16.689444,
      "latitude": 47.601568
    }
  },
  "5500912": {
    "id": "5500912",
    "name": "Nagymaros",
    "isMeta": true,
    "country": "HU",
    "location": {
      "longitude": 18.951939,
      "latitude": 47.780111
    }
  },
  "5500913": {
    "id": "5500913",
    "name": "Nagymaros-Visegrad",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 18.958798,
      "latitude": 47.790889
    }
  },
  "5500924": {
    "id": "5500924",
    "name": "Nagyszentjanos",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 17.87193,
      "latitude": 47.705357
    }
  },
  "5500994": {
    "id": "5500994",
    "name": "Oroshaza",
    "isMeta": true,
    "country": "HU",
    "location": {
      "longitude": 20.664088,
      "latitude": 46.566496
    }
  },
  "5501000": {
    "id": "5501000",
    "name": "Oroszlany",
    "isMeta": true,
    "country": "HU",
    "location": {
      "longitude": 18.308986,
      "latitude": 47.487198
    }
  },
  "5501004": {
    "id": "5501004",
    "name": "Ozd",
    "isMeta": true,
    "country": "HU",
    "location": {
      "longitude": 20.294289,
      "latitude": 48.222255
    }
  },
  "5501019": {
    "id": "5501019",
    "name": "Ötteveny",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 17.488783,
      "latitude": 47.719677
    }
  },
  "5501032": {
    "id": "5501032",
    "name": "Pannonhalma",
    "isMeta": true,
    "country": "HU",
    "location": {
      "longitude": 17.740616,
      "latitude": 47.547947
    }
  },
  "5501060": {
    "id": "5501060",
    "name": "Petöhaza",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 16.889598,
      "latitude": 47.59577
    }
  },
  "5501067": {
    "id": "5501067",
    "name": "Pinnye",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 16.768351,
      "latitude": 47.600264
    }
  },
  "5501082": {
    "id": "5501082",
    "name": "Porpac",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 16.833676,
      "latitude": 47.238835
    }
  },
  "5501105": {
    "id": "5501105",
    "name": "Rabapatona",
    "isMeta": true,
    "country": "HU",
    "location": {
      "longitude": 17.462157,
      "latitude": 47.648797
    }
  },
  "5501107": {
    "id": "5501107",
    "name": "Rabatamasi",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 17.16145,
      "latitude": 47.592911
    }
  },
  "5501125": {
    "id": "5501125",
    "name": "Ratot",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 16.433458,
      "latitude": 46.967487
    }
  },
  "5501132": {
    "id": "5501132",
    "name": "Repcelak",
    "isMeta": true,
    "country": "HU",
    "location": {
      "longitude": 17.009101,
      "latitude": 47.419266
    }
  },
  "5501149": {
    "id": "5501149",
    "name": "Salkäveskut-Vassur",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 16.704052,
      "latitude": 47.291197
    }
  },
  "5501197": {
    "id": "5501197",
    "name": "Sopronkövesd",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 16.748998,
      "latitude": 47.547363
    }
  },
  "5501225": {
    "id": "5501225",
    "name": "Szar",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 18.526713,
      "latitude": 47.485238
    }
  },
  "5501228": {
    "id": "5501228",
    "name": "Szarföld",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 17.122877,
      "latitude": 47.58936
    }
  },
  "5501229": {
    "id": "5501229",
    "name": "Szarliget",
    "isMeta": true,
    "country": "HU",
    "location": {
      "longitude": 18.495934,
      "latitude": 47.518094
    }
  },
  "5501230": {
    "id": "5501230",
    "name": "Szarvas",
    "isMeta": true,
    "country": "HU",
    "location": {
      "longitude": 20.566384,
      "latitude": 46.860227
    }
  },
  "5501236": {
    "id": "5501236",
    "name": "Szazhalombatta",
    "isMeta": true,
    "country": "HU",
    "location": {
      "longitude": 18.899065,
      "latitude": 47.322569
    }
  },
  "5501247": {
    "id": "5501247",
    "name": "Szekszard",
    "isMeta": true,
    "country": "HU",
    "location": {
      "longitude": 18.7127,
      "latitude": 46.349937
    }
  },
  "5501280": {
    "id": "5501280",
    "name": "Szombathely-Szölös",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 16.641756,
      "latitude": 47.206519
    }
  },
  "5501285": {
    "id": "5501285",
    "name": "Szöny",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 18.178606,
      "latitude": 47.735282
    }
  },
  "5501371": {
    "id": "5501371",
    "name": "Tormasliget",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 16.781638,
      "latitude": 47.430341
    }
  },
  "5501377": {
    "id": "5501377",
    "name": "Tovaroskert",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 18.348134,
      "latitude": 47.647008
    }
  },
  "5501378": {
    "id": "5501378",
    "name": "Törökbalint",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 18.907407,
      "latitude": 47.450198
    }
  },
  "5501381": {
    "id": "5501381",
    "name": "Törökszentmiklos",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 20.412965,
      "latitude": 47.169933
    }
  },
  "5501396": {
    "id": "5501396",
    "name": "Ujker",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 16.786627,
      "latitude": 47.45819
    }
  },
  "5501401": {
    "id": "5501401",
    "name": "Ujszeged",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 20.159928,
      "latitude": 46.241976
    }
  },
  "5501413": {
    "id": "5501413",
    "name": "Vác",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 19.133063,
      "latitude": 47.782727
    }
  },
  "5501435": {
    "id": "5501435",
    "name": "Vasvar",
    "isMeta": true,
    "country": "HU",
    "location": {
      "longitude": 16.800398,
      "latitude": 47.057208
    }
  },
  "5501446": {
    "id": "5501446",
    "name": "Veröce",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 19.031718,
      "latitude": 47.823943
    }
  },
  "5501450": {
    "id": "5501450",
    "name": "Veszkeny",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 17.099847,
      "latitude": 47.587113
    }
  },
  "5501463": {
    "id": "5501463",
    "name": "Vitnyed-Csermajor",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 16.98634,
      "latitude": 47.582268
    }
  },
  "5501494": {
    "id": "5501494",
    "name": "Sopron",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 16.586733,
      "latitude": 47.677904
    }
  },
  "5501506": {
    "id": "5501506",
    "name": "Herceghalom",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 18.743291,
      "latitude": 47.493724
    }
  },
  "5501513": {
    "id": "5501513",
    "name": "Janossomorja",
    "isMeta": true,
    "country": "HU",
    "location": {
      "longitude": 17.137862,
      "latitude": 47.789092
    }
  },
  "5501539": {
    "id": "5501539",
    "name": "Josvafö-Aggtelek",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 20.694642,
      "latitude": 48.489936
    }
  },
  "5501544": {
    "id": "5501544",
    "name": "Hortobágy",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 21.154485,
      "latitude": 47.586106
    }
  },
  "5501578": {
    "id": "5501578",
    "name": "Ikreny",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 17.523221,
      "latitude": 47.657876
    }
  },
  "5501609": {
    "id": "5501609",
    "name": "Jak-Balogunyom",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 16.630655,
      "latitude": 47.161294
    }
  },
  "5501621": {
    "id": "5501621",
    "name": "Horvatnadalja",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 16.54345,
      "latitude": 47.004846
    }
  },
  "5501633": {
    "id": "5501633",
    "name": "Fertöszeplak-Fertöd",
    "isMeta": false,
    "country": "HU",
    "location": {
      "longitude": 16.850783,
      "latitude": 47.61764
    }
  },
  "5596001": {
    "id": "5596001",
    "name": "Budapest",
    "isMeta": true,
    "country": "HU",
    "location": {
      "longitude": 19.054084,
      "latitude": 47.51955
    }
  },
  "5600007": {
    "id": "5600007",
    "name": "Košice",
    "isMeta": false,
    "country": "SK",
    "location": {
      "longitude": 21.26872,
      "latitude": 48.722918
    }
  },
  "5600013": {
    "id": "5600013",
    "name": "Poprad-Tatry",
    "isMeta": false,
    "country": "SK",
    "location": {
      "longitude": 20.294964,
      "latitude": 49.060031
    }
  },
  "5600020": {
    "id": "5600020",
    "name": "Žilina",
    "isMeta": false,
    "country": "SK",
    "location": {
      "longitude": 18.746005,
      "latitude": 49.227042
    }
  },
  "5600023": {
    "id": "5600023",
    "name": "Komarno",
    "isMeta": true,
    "country": "SK",
    "location": {
      "longitude": 18.125615,
      "latitude": 47.768983
    }
  },
  "5600024": {
    "id": "5600024",
    "name": "Levice",
    "isMeta": true,
    "country": "SK",
    "location": {
      "longitude": 18.592622,
      "latitude": 48.211018
    }
  },
  "5600025": {
    "id": "5600025",
    "name": "Nove Zamky",
    "isMeta": true,
    "country": "SK",
    "location": {
      "longitude": 18.173959,
      "latitude": 47.994999
    }
  },
  "5600030": {
    "id": "5600030",
    "name": "Puchov",
    "isMeta": true,
    "country": "SK",
    "location": {
      "longitude": 18.327414,
      "latitude": 49.113589
    }
  },
  "5600032": {
    "id": "5600032",
    "name": "Trencianska Tepla",
    "isMeta": false,
    "country": "SK",
    "location": {
      "longitude": 18.11347,
      "latitude": 48.937383
    }
  },
  "5600039": {
    "id": "5600039",
    "name": "Brezno",
    "isMeta": true,
    "country": "SK",
    "location": {
      "longitude": 19.62898,
      "latitude": 48.801493
    }
  },
  "5600041": {
    "id": "5600041",
    "name": "Čadca",
    "isMeta": false,
    "country": "SK",
    "location": {
      "longitude": 18.786389,
      "latitude": 49.444167
    }
  },
  "5600052": {
    "id": "5600052",
    "name": "Filakovo",
    "isMeta": true,
    "country": "SK",
    "location": {
      "longitude": 19.832972,
      "latitude": 48.266284
    }
  },
  "5600069": {
    "id": "5600069",
    "name": "Jesenske",
    "isMeta": false,
    "country": "SK",
    "location": {
      "longitude": 20.061379,
      "latitude": 48.299418
    }
  },
  "5600077": {
    "id": "5600077",
    "name": "Kozarovce",
    "isMeta": false,
    "country": "SK",
    "location": {
      "longitude": 18.536332,
      "latitude": 48.310763
    }
  },
  "5600078": {
    "id": "5600078",
    "name": "Kralovany",
    "isMeta": false,
    "country": "SK",
    "location": {
      "longitude": 19.130024,
      "latitude": 49.153043
    }
  },
  "5600081": {
    "id": "5600081",
    "name": "Kuty",
    "isMeta": false,
    "country": "SK",
    "location": {
      "longitude": 17.047691,
      "latitude": 48.66189
    }
  },
  "5600082": {
    "id": "5600082",
    "name": "Leopoldov",
    "isMeta": true,
    "country": "SK",
    "location": {
      "longitude": 17.758567,
      "latitude": 48.441744
    }
  },
  "5600087": {
    "id": "5600087",
    "name": "Spišská Nová Ves",
    "isMeta": false,
    "country": "SK",
    "location": {
      "longitude": 20.560755,
      "latitude": 48.950093
    }
  },
  "5600092": {
    "id": "5600092",
    "name": "Štrba",
    "isMeta": false,
    "country": "SK",
    "location": {
      "longitude": 20.066704,
      "latitude": 49.083235
    }
  },
  "5600096": {
    "id": "5600096",
    "name": "Surany",
    "isMeta": true,
    "country": "SK",
    "location": {
      "longitude": 18.172844,
      "latitude": 48.085403
    }
  },
  "5600105": {
    "id": "5600105",
    "name": "Trenčín",
    "isMeta": true,
    "country": "SK",
    "location": {
      "longitude": 18.0335209,
      "latitude": 48.884936
    }
  },
  "5600114": {
    "id": "5600114",
    "name": "Vrútky",
    "isMeta": false,
    "country": "SK",
    "location": {
      "longitude": 18.924112,
      "latitude": 49.115409
    }
  },
  "5600135": {
    "id": "5600135",
    "name": "Kysak",
    "isMeta": false,
    "country": "SK",
    "location": {
      "longitude": 21.223889,
      "latitude": 48.852778
    }
  },
  "5600137": {
    "id": "5600137",
    "name": "Margecany",
    "isMeta": true,
    "country": "SK",
    "location": {
      "longitude": 21.01239967,
      "latitude": 48.8946991
    }
  },
  "5600148": {
    "id": "5600148",
    "name": "Nové Mesto nad Váhom",
    "isMeta": false,
    "country": "SK",
    "location": {
      "longitude": 17.835473,
      "latitude": 48.751234
    }
  },
  "5600162": {
    "id": "5600162",
    "name": "Piešťany",
    "isMeta": true,
    "country": "SK",
    "location": {
      "longitude": 17.82591,
      "latitude": 48.59479
    }
  },
  "5600170": {
    "id": "5600170",
    "name": "Považská Bystrica",
    "isMeta": true,
    "country": "SK",
    "location": {
      "longitude": 18.447663,
      "latitude": 49.1131198
    }
  },
  "5600177": {
    "id": "5600177",
    "name": "Lucenec",
    "isMeta": true,
    "country": "SK",
    "location": {
      "longitude": 19.6653485,
      "latitude": 48.3289346
    }
  },
  "5600178": {
    "id": "5600178",
    "name": "Luzianky",
    "isMeta": false,
    "country": "SK",
    "location": {
      "longitude": 18.023596,
      "latitude": 48.351933
    }
  },
  "5600179": {
    "id": "5600179",
    "name": "Banská Bystrica",
    "isMeta": true,
    "country": "SK",
    "location": {
      "longitude": 19.1461917,
      "latitude": 48.736277
    }
  },
  "5600184": {
    "id": "5600184",
    "name": "Rožňava",
    "isMeta": true,
    "country": "SK",
    "location": {
      "longitude": 20.5278701,
      "latitude": 48.6620518
    }
  },
  "5600185": {
    "id": "5600185",
    "name": "Ružomberok",
    "isMeta": false,
    "country": "SK",
    "location": {
      "longitude": 19.309173,
      "latitude": 49.083472
    }
  },
  "5600193": {
    "id": "5600193",
    "name": "Devinska Nova Ves",
    "isMeta": false,
    "country": "SK",
    "location": {
      "longitude": 16.975805,
      "latitude": 48.218965
    }
  },
  "5600195": {
    "id": "5600195",
    "name": "Trnava",
    "isMeta": true,
    "country": "SK",
    "location": {
      "longitude": 17.58723,
      "latitude": 48.3774
    }
  },
  "5600207": {
    "id": "5600207",
    "name": "Bratislava hl.st.",
    "isMeta": false,
    "country": "SK",
    "location": {
      "longitude": 17.106463,
      "latitude": 48.158908
    }
  },
  "5600214": {
    "id": "5600214",
    "name": "Liptovsky-Mikuláš",
    "isMeta": false,
    "country": "SK",
    "location": {
      "longitude": 19.606255,
      "latitude": 49.091979
    }
  },
  "5600217": {
    "id": "5600217",
    "name": "Rusovce",
    "isMeta": false,
    "country": "SK",
    "location": {
      "longitude": 17.150798,
      "latitude": 48.04648
    }
  },
  "5600257": {
    "id": "5600257",
    "name": "Horna Stubna",
    "isMeta": false,
    "country": "SK",
    "location": {
      "longitude": 18.881608,
      "latitude": 48.792764
    }
  },
  "5600551": {
    "id": "5600551",
    "name": "Borsky Mikulas",
    "isMeta": false,
    "country": "SK",
    "location": {
      "longitude": 17.192031,
      "latitude": 48.642276
    }
  },
  "5600976": {
    "id": "5600976",
    "name": "Gbely",
    "isMeta": true,
    "country": "SK",
    "location": {
      "longitude": 17.090893,
      "latitude": 48.723538
    }
  },
  "5601084": {
    "id": "5601084",
    "name": "Holic nad Moravou",
    "isMeta": false,
    "country": "SK",
    "location": {
      "longitude": 17.150024,
      "latitude": 48.814752
    }
  },
  "5601226": {
    "id": "5601226",
    "name": "Humenné",
    "isMeta": true,
    "country": "SK",
    "location": {
      "longitude": 21.8996754,
      "latitude": 48.9310638
    }
  },
  "5601307": {
    "id": "5601307",
    "name": "Chynorany",
    "isMeta": false,
    "country": "SK",
    "location": {
      "longitude": 18.275168,
      "latitude": 48.607838
    }
  },
  "5601440": {
    "id": "5601440",
    "name": "Kapusany pri Presove",
    "isMeta": false,
    "country": "SK",
    "location": {
      "longitude": 21.320624,
      "latitude": 49.044004
    }
  },
  "5601602": {
    "id": "5601602",
    "name": "Krasno nad Kysucou",
    "isMeta": false,
    "country": "SK",
    "location": {
      "longitude": 18.8357,
      "latitude": 49.379283
    }
  },
  "5601682": {
    "id": "5601682",
    "name": "Kysucke Nove Mesto",
    "isMeta": true,
    "country": "SK",
    "location": {
      "longitude": 18.784129,
      "latitude": 49.306048
    }
  },
  "5601947": {
    "id": "5601947",
    "name": "Medzilaborce",
    "isMeta": true,
    "country": "SK",
    "location": {
      "longitude": 21.904968,
      "latitude": 49.261848
    }
  },
  "5601971": {
    "id": "5601971",
    "name": "Michalany",
    "isMeta": false,
    "country": "SK",
    "location": {
      "longitude": 21.626041,
      "latitude": 48.521632
    }
  },
  "5601973": {
    "id": "5601973",
    "name": "Michalovce",
    "isMeta": true,
    "country": "SK",
    "location": {
      "longitude": 21.904381,
      "latitude": 48.752392
    }
  },
  "5602056": {
    "id": "5602056",
    "name": "Moravsky Jan",
    "isMeta": false,
    "country": "SK",
    "location": {
      "longitude": 17.008247,
      "latitude": 48.585401
    }
  },
  "5602139": {
    "id": "5602139",
    "name": "Nitra",
    "isMeta": true,
    "country": "SK",
    "location": {
      "longitude": 18.08453,
      "latitude": 48.30763
    }
  },
  "5602221": {
    "id": "5602221",
    "name": "Ochodnica",
    "isMeta": false,
    "country": "SK",
    "location": {
      "longitude": 18.806611,
      "latitude": 49.347183
    }
  },
  "5602356": {
    "id": "5602356",
    "name": "Pezinok",
    "isMeta": true,
    "country": "SK",
    "location": {
      "longitude": 17.270588,
      "latitude": 48.28268
    }
  },
  "5602535": {
    "id": "5602535",
    "name": "Prešov",
    "isMeta": false,
    "country": "SK",
    "location": {
      "longitude": 21.249646,
      "latitude": 48.982802
    }
  },
  "5602541": {
    "id": "5602541",
    "name": "Prievidza",
    "isMeta": false,
    "country": "SK",
    "location": {
      "longitude": 18.618756,
      "latitude": 48.7671433
    }
  },
  "5602787": {
    "id": "5602787",
    "name": "Sekule",
    "isMeta": false,
    "country": "SK",
    "location": {
      "longitude": 17.019061,
      "latitude": 48.607505
    }
  },
  "5602797": {
    "id": "5602797",
    "name": "Senec",
    "isMeta": true,
    "country": "SK",
    "location": {
      "longitude": 17.414092,
      "latitude": 48.21358
    }
  },
  "5602798": {
    "id": "5602798",
    "name": "Senica nad Myjavou",
    "isMeta": false,
    "country": "SK",
    "location": {
      "longitude": 17.335049,
      "latitude": 48.665387
    }
  },
  "5602811": {
    "id": "5602811",
    "name": "Skalica na Slovensku",
    "isMeta": false,
    "country": "SK",
    "location": {
      "longitude": 17.218262,
      "latitude": 48.85007
    }
  },
  "5602814": {
    "id": "5602814",
    "name": "Skalite",
    "isMeta": false,
    "country": "SK",
    "location": {
      "longitude": 18.89181,
      "latitude": 49.498229
    }
  },
  "5602877": {
    "id": "5602877",
    "name": "Snina",
    "isMeta": true,
    "country": "SK",
    "location": {
      "longitude": 22.14979362,
      "latitude": 48.98666
    }
  },
  "5602953": {
    "id": "5602953",
    "name": "Strazske",
    "isMeta": true,
    "country": "SK",
    "location": {
      "longitude": 21.82522774,
      "latitude": 48.86749268
    }
  },
  "5603149": {
    "id": "5603149",
    "name": "Trebisov",
    "isMeta": true,
    "country": "SK",
    "location": {
      "longitude": 21.71220207,
      "latitude": 48.63289642
    }
  },
  "5603214": {
    "id": "5603214",
    "name": "Turčianske Teplice",
    "isMeta": true,
    "country": "SK",
    "location": {
      "longitude": 18.86138535,
      "latitude": 48.8638916
    }
  },
  "5603331": {
    "id": "5603331",
    "name": "Velke Levare",
    "isMeta": false,
    "country": "SK",
    "location": {
      "longitude": 17.018764,
      "latitude": 48.509128
    }
  },
  "5603745": {
    "id": "5603745",
    "name": "Sturovo",
    "isMeta": true,
    "country": "SK",
    "location": {
      "longitude": 18.679917,
      "latitude": 47.800121
    }
  },
  "5696001": {
    "id": "5696001",
    "name": "Bratislava",
    "isMeta": true,
    "country": "SK",
    "location": {
      "longitude": 17.10674,
      "latitude": 48.14816
    }
  },
  "6000083": {
    "id": "6000083",
    "name": "Rosslare Harbour",
    "isMeta": false,
    "country": "IE",
    "location": {
      "longitude": -6.3339935,
      "latitude": 52.2545749991
    }
  },
  "6231001": {
    "id": "6231001",
    "name": "Podgorica",
    "isMeta": false,
    "country": "ME",
    "location": {
      "longitude": 19.269654,
      "latitude": 42.432393
    }
  },
  "6231080": {
    "id": "6231080",
    "name": "Bar",
    "isMeta": false,
    "country": "ME",
    "location": {
      "longitude": 19.105412,
      "latitude": 42.087207
    }
  },
  "6599200": {
    "id": "6599200",
    "name": "Skopje",
    "isMeta": false,
    "country": "MK",
    "location": {
      "longitude": 21.44014,
      "latitude": 42.0263
    }
  },
  "7000004": {
    "id": "7000004",
    "name": "Dover Priory",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.304227,
      "latitude": 51.125988
    }
  },
  "7000005": {
    "id": "7000005",
    "name": "Folkestone Central",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.168331,
      "latitude": 51.082985
    }
  },
  "7000006": {
    "id": "7000006",
    "name": "Harwich International",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.255167,
      "latitude": 51.947701
    }
  },
  "7000007": {
    "id": "7000007",
    "name": "London Charing Cross",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.123835,
      "latitude": 51.508362
    }
  },
  "7000008": {
    "id": "7000008",
    "name": "London Liverpool Street",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.08021,
      "latitude": 51.517551
    }
  },
  "7000009": {
    "id": "7000009",
    "name": "London Bridge",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.085058,
      "latitude": 51.505035
    }
  },
  "7000010": {
    "id": "7000010",
    "name": "London Victoria",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.1448,
      "latitude": 51.4966
    }
  },
  "7000011": {
    "id": "7000011",
    "name": "Aberdeen",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.097464,
      "latitude": 57.143127
    }
  },
  "7000012": {
    "id": "7000012",
    "name": "Abbey Wood",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.120343,
      "latitude": 51.490719
    }
  },
  "7000013": {
    "id": "7000013",
    "name": "Aberdare",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.44313,
      "latitude": 51.715019
    }
  },
  "7000014": {
    "id": "7000014",
    "name": "Aber",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.23089,
      "latitude": 51.575363
    }
  },
  "7000015": {
    "id": "7000015",
    "name": "Abererch",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.37423,
      "latitude": 52.898567
    }
  },
  "7000017": {
    "id": "7000017",
    "name": "Abergele & Pensarn",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.581343,
      "latitude": 53.294758
    }
  },
  "7000018": {
    "id": "7000018",
    "name": "Aberdour",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.300575,
      "latitude": 56.054646
    }
  },
  "7000019": {
    "id": "7000019",
    "name": "Abercynon",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.329549,
      "latitude": 51.64262
    }
  },
  "7000020": {
    "id": "7000020",
    "name": "Aberdovey",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.057118,
      "latitude": 52.543934
    }
  },
  "7000021": {
    "id": "7000021",
    "name": "Aberystwyth",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.081946,
      "latitude": 52.414017
    }
  },
  "7000022": {
    "id": "7000022",
    "name": "Abergavenny",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.009679,
      "latitude": 51.81665
    }
  },
  "7000023": {
    "id": "7000023",
    "name": "Achnasheen",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -5.072421,
      "latitude": 57.579205
    }
  },
  "7000024": {
    "id": "7000024",
    "name": "Acton Bridge",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.602689,
      "latitude": 53.265961
    }
  },
  "7000025": {
    "id": "7000025",
    "name": "Accrington",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.370016,
      "latitude": 53.753193
    }
  },
  "7000026": {
    "id": "7000026",
    "name": "Acle",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.543981,
      "latitude": 52.634647
    }
  },
  "7000027": {
    "id": "7000027",
    "name": "Acocks Green",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.81898,
      "latitude": 52.449291
    }
  },
  "7000028": {
    "id": "7000028",
    "name": "Achanalt",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.914243,
      "latitude": 57.609921
    }
  },
  "7000029": {
    "id": "7000029",
    "name": "Achnashellach",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -5.333001,
      "latitude": 57.482697
    }
  },
  "7000030": {
    "id": "7000030",
    "name": "Acton Main Line",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.26762,
      "latitude": 51.516865
    }
  },
  "7000033": {
    "id": "7000033",
    "name": "Acton Central",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.263601,
      "latitude": 51.508717
    }
  },
  "7000034": {
    "id": "7000034",
    "name": "Attadale",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -5.456549,
      "latitude": 57.394871
    }
  },
  "7000036": {
    "id": "7000036",
    "name": "Adisham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.199277,
      "latitude": 51.241352
    }
  },
  "7000037": {
    "id": "7000037",
    "name": "Adlington (Cheshire)",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.133571,
      "latitude": 53.319542
    }
  },
  "7000038": {
    "id": "7000038",
    "name": "Adderley Park",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.854184,
      "latitude": 52.483505
    }
  },
  "7000039": {
    "id": "7000039",
    "name": "Addlestone",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.48571,
      "latitude": 51.372414
    }
  },
  "7000040": {
    "id": "7000040",
    "name": "Adlington (Lancashire)",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.603084,
      "latitude": 53.612926
    }
  },
  "7000041": {
    "id": "7000041",
    "name": "Addiewell",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.60655,
      "latitude": 55.843449
    }
  },
  "7000042": {
    "id": "7000042",
    "name": "Aigburth",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.927041,
      "latitude": 53.364614
    }
  },
  "7000043": {
    "id": "7000043",
    "name": "Airbles",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.994447,
      "latitude": 55.782504
    }
  },
  "7000044": {
    "id": "7000044",
    "name": "Ainsdale",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.042691,
      "latitude": 53.601818
    }
  },
  "7000045": {
    "id": "7000045",
    "name": "Airdrie",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.982952,
      "latitude": 55.864029
    }
  },
  "7000046": {
    "id": "7000046",
    "name": "Aintree",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.956687,
      "latitude": 53.473995
    }
  },
  "7000047": {
    "id": "7000047",
    "name": "Acklington",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.651816,
      "latitude": 55.307129
    }
  },
  "7000048": {
    "id": "7000048",
    "name": "Alness",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.249743,
      "latitude": 57.694477
    }
  },
  "7000049": {
    "id": "7000049",
    "name": "Attleborough",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.022719,
      "latitude": 52.514214
    }
  },
  "7000050": {
    "id": "7000050",
    "name": "Altnabreac",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.705279,
      "latitude": 58.388439
    }
  },
  "7000051": {
    "id": "7000051",
    "name": "Aldrington",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.182151,
      "latitude": 50.836601
    }
  },
  "7000052": {
    "id": "7000052",
    "name": "Alderley Edge",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.236812,
      "latitude": 53.303762
    }
  },
  "7000053": {
    "id": "7000053",
    "name": "Alsager",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.29861,
      "latitude": 53.093054
    }
  },
  "7000054": {
    "id": "7000054",
    "name": "Althorne",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.753603,
      "latitude": 51.647526
    }
  },
  "7000055": {
    "id": "7000055",
    "name": "Aldermaston",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.136972,
      "latitude": 51.402047
    }
  },
  "7000056": {
    "id": "7000056",
    "name": "Alexandria",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.577534,
      "latitude": 55.98513
    }
  },
  "7000058": {
    "id": "7000058",
    "name": "Albany Park",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.126427,
      "latitude": 51.435745
    }
  },
  "7000059": {
    "id": "7000059",
    "name": "Alexandra Parade",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.211465,
      "latitude": 55.863724
    }
  },
  "7000060": {
    "id": "7000060",
    "name": "Aldershot",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.760657,
      "latitude": 51.246151
    }
  },
  "7000061": {
    "id": "7000061",
    "name": "Albrighton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.268913,
      "latitude": 52.637917
    }
  },
  "7000062": {
    "id": "7000062",
    "name": "Alnmouth",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.636858,
      "latitude": 55.392456
    }
  },
  "7000063": {
    "id": "7000063",
    "name": "Alvechurch",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.967854,
      "latitude": 52.346607
    }
  },
  "7000064": {
    "id": "7000064",
    "name": "Allens West",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.363418,
      "latitude": 54.524128
    }
  },
  "7000065": {
    "id": "7000065",
    "name": "Alexandra Palace",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.120129,
      "latitude": 51.598225
    }
  },
  "7000066": {
    "id": "7000066",
    "name": "Alfreton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.369689,
      "latitude": 53.100414
    }
  },
  "7000067": {
    "id": "7000067",
    "name": "Ambergate",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.4807,
      "latitude": 53.060501
    }
  },
  "7000068": {
    "id": "7000068",
    "name": "Amersham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.60613,
      "latitude": 51.67439
    }
  },
  "7000069": {
    "id": "7000069",
    "name": "Amberley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.542446,
      "latitude": 50.896507
    }
  },
  "7000070": {
    "id": "7000070",
    "name": "Ammanford",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.996783,
      "latitude": 51.795933
    }
  },
  "7000071": {
    "id": "7000071",
    "name": "Armathwaite",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.77209,
      "latitude": 54.809611
    }
  },
  "7000072": {
    "id": "7000072",
    "name": "Ancaster",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.535596,
      "latitude": 52.987888
    }
  },
  "7000073": {
    "id": "7000073",
    "name": "Anderston",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.271969,
      "latitude": 55.859924
    }
  },
  "7000074": {
    "id": "7000074",
    "name": "Anerley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.064348,
      "latitude": 51.41163
    }
  },
  "7000075": {
    "id": "7000075",
    "name": "Ansdell & Fairhaven",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.993077,
      "latitude": 53.741558
    }
  },
  "7000076": {
    "id": "7000076",
    "name": "Angmering",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.489559,
      "latitude": 50.816704
    }
  },
  "7000077": {
    "id": "7000077",
    "name": "Anniesland",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.321684,
      "latitude": 55.889553
    }
  },
  "7000078": {
    "id": "7000078",
    "name": "Annan",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.262603,
      "latitude": 54.98386
    }
  },
  "7000079": {
    "id": "7000079",
    "name": "Andover",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.493167,
      "latitude": 51.212048
    }
  },
  "7000080": {
    "id": "7000080",
    "name": "Angel Road",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.048763,
      "latitude": 51.612354
    }
  },
  "7000081": {
    "id": "7000081",
    "name": "Attenborough",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.231262,
      "latitude": 52.906322
    }
  },
  "7000082": {
    "id": "7000082",
    "name": "Appleby",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.486692,
      "latitude": 54.58032
    }
  },
  "7000083": {
    "id": "7000083",
    "name": "Appley Bridge",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.718906,
      "latitude": 53.579029
    }
  },
  "7000084": {
    "id": "7000084",
    "name": "Appledore (Kent)",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.816826,
      "latitude": 51.032623
    }
  },
  "7000085": {
    "id": "7000085",
    "name": "Appleford",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.242375,
      "latitude": 51.639562
    }
  },
  "7000086": {
    "id": "7000086",
    "name": "Apsley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.463568,
      "latitude": 51.732712
    }
  },
  "7000087": {
    "id": "7000087",
    "name": "Arbroath",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.588928,
      "latitude": 56.559628
    }
  },
  "7000088": {
    "id": "7000088",
    "name": "Ardgay",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.362604,
      "latitude": 57.881119
    }
  },
  "7000089": {
    "id": "7000089",
    "name": "Alresford",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.997114,
      "latitude": 51.853828
    }
  },
  "7000090": {
    "id": "7000090",
    "name": "Argyle Street",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.244574,
      "latitude": 55.855938
    }
  },
  "7000091": {
    "id": "7000091",
    "name": "Ardrossan Harbour",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.823461,
      "latitude": 55.640854
    }
  },
  "7000092": {
    "id": "7000092",
    "name": "Arisaig",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -5.839141,
      "latitude": 56.912617
    }
  },
  "7000093": {
    "id": "7000093",
    "name": "Ardlui",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.721712,
      "latitude": 56.302025
    }
  },
  "7000095": {
    "id": "7000095",
    "name": "Arram",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.426833,
      "latitude": 53.884567
    }
  },
  "7000096": {
    "id": "7000096",
    "name": "Ardrossan South Beach",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.799593,
      "latitude": 55.640495
    }
  },
  "7000097": {
    "id": "7000097",
    "name": "Ardrossan Town",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.812212,
      "latitude": 55.639313
    }
  },
  "7000098": {
    "id": "7000098",
    "name": "Arundel",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.546796,
      "latitude": 50.848003
    }
  },
  "7000099": {
    "id": "7000099",
    "name": "Ardwick",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.213893,
      "latitude": 53.47134
    }
  },
  "7000100": {
    "id": "7000100",
    "name": "Arlesey",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.266178,
      "latitude": 52.025938
    }
  },
  "7000101": {
    "id": "7000101",
    "name": "Ash",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.711856,
      "latitude": 51.249222
    }
  },
  "7000102": {
    "id": "7000102",
    "name": "Ashburys",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.194991,
      "latitude": 53.471761
    }
  },
  "7000103": {
    "id": "7000103",
    "name": "Ascot",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.675827,
      "latitude": 51.406185
    }
  },
  "7000104": {
    "id": "7000104",
    "name": "Arnside",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.827783,
      "latitude": 54.202114
    }
  },
  "7000105": {
    "id": "7000105",
    "name": "Ashford Surrey",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.469229,
      "latitude": 51.436047
    }
  },
  "7000106": {
    "id": "7000106",
    "name": "Aspley Guise",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.631519,
      "latitude": 52.020725
    }
  },
  "7000108": {
    "id": "7000108",
    "name": "Askam",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.204545,
      "latitude": 54.189049
    }
  },
  "7000109": {
    "id": "7000109",
    "name": "Ashley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.341029,
      "latitude": 53.355984
    }
  },
  "7000110": {
    "id": "7000110",
    "name": "Ashwell & Morden",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.10934,
      "latitude": 52.030586
    }
  },
  "7000111": {
    "id": "7000111",
    "name": "Aslockton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.898541,
      "latitude": 52.951351
    }
  },
  "7000112": {
    "id": "7000112",
    "name": "Aspatria",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.331752,
      "latitude": 54.759338
    }
  },
  "7000113": {
    "id": "7000113",
    "name": "Ashurst Kent",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.152298,
      "latitude": 51.128601
    }
  },
  "7000114": {
    "id": "7000114",
    "name": "Ashtead",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.308126,
      "latitude": 51.317822
    }
  },
  "7000115": {
    "id": "7000115",
    "name": "Ashton-Under-Lyne",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.093415,
      "latitude": 53.491264
    }
  },
  "7000116": {
    "id": "7000116",
    "name": "Ash Vale",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.721247,
      "latitude": 51.272709
    }
  },
  "7000117": {
    "id": "7000117",
    "name": "Ascott-Under-Wychwood",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.564136,
      "latitude": 51.867376
    }
  },
  "7000118": {
    "id": "7000118",
    "name": "Aston",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.871788,
      "latitude": 52.505104
    }
  },
  "7000119": {
    "id": "7000119",
    "name": "Arrochar & Tarbet",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.722822,
      "latitude": 56.204021
    }
  },
  "7000120": {
    "id": "7000120",
    "name": "Atherstone",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.552808,
      "latitude": 52.578949
    }
  },
  "7000121": {
    "id": "7000121",
    "name": "Alton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.967658,
      "latitude": 51.151947
    }
  },
  "7000122": {
    "id": "7000122",
    "name": "Althorpe",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.732558,
      "latitude": 53.585262
    }
  },
  "7000123": {
    "id": "7000123",
    "name": "Altrincham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.347212,
      "latitude": 53.3874
    }
  },
  "7000124": {
    "id": "7000124",
    "name": "Atherton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.478683,
      "latitude": 53.528817
    }
  },
  "7000125": {
    "id": "7000125",
    "name": "Auchinleck",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.295389,
      "latitude": 55.47031
    }
  },
  "7000126": {
    "id": "7000126",
    "name": "Coventry",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.513466,
      "latitude": 52.400787
    }
  },
  "7000127": {
    "id": "7000127",
    "name": "Aughton Park",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.895095,
      "latitude": 53.55447
    }
  },
  "7000128": {
    "id": "7000128",
    "name": "Aviemore",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.828348,
      "latitude": 57.18914
    }
  },
  "7000129": {
    "id": "7000129",
    "name": "Avoncliff",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.281342,
      "latitude": 51.339596
    }
  },
  "7000130": {
    "id": "7000130",
    "name": "Avonmouth",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.699332,
      "latitude": 51.500194
    }
  },
  "7000131": {
    "id": "7000131",
    "name": "Axminster",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.005613,
      "latitude": 50.778976
    }
  },
  "7000132": {
    "id": "7000132",
    "name": "Ayr Station",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.626878,
      "latitude": 55.458248
    }
  },
  "7000133": {
    "id": "7000133",
    "name": "Aylesbury",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.815048,
      "latitude": 51.813868
    }
  },
  "7000134": {
    "id": "7000134",
    "name": "Aylesford",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.465964,
      "latitude": 51.301384
    }
  },
  "7000135": {
    "id": "7000135",
    "name": "Aylesham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.209682,
      "latitude": 51.227185
    }
  },
  "7000136": {
    "id": "7000136",
    "name": "Bache",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.892386,
      "latitude": 53.209312
    }
  },
  "7000137": {
    "id": "7000137",
    "name": "Butlers Lane",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.838163,
      "latitude": 52.592376
    }
  },
  "7000138": {
    "id": "7000138",
    "name": "Brora",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.853251,
      "latitude": 58.012657
    }
  },
  "7000139": {
    "id": "7000139",
    "name": "Burton-On-Trent",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.64246,
      "latitude": 52.805798
    }
  },
  "7000140": {
    "id": "7000140",
    "name": "Bangor (Gwynedd)",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.135505,
      "latitude": 53.222902
    }
  },
  "7000141": {
    "id": "7000141",
    "name": "Bamber Bridge",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.660793,
      "latitude": 53.726772
    }
  },
  "7000143": {
    "id": "7000143",
    "name": "Baldock",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.188106,
      "latitude": 51.993156
    }
  },
  "7000144": {
    "id": "7000144",
    "name": "Bamford",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.689078,
      "latitude": 53.338985
    }
  },
  "7000145": {
    "id": "7000145",
    "name": "Balham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.152403,
      "latitude": 51.443169
    }
  },
  "7000146": {
    "id": "7000146",
    "name": "Balcombe",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.137881,
      "latitude": 51.05624
    }
  },
  "7000147": {
    "id": "7000147",
    "name": "Balmossie",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.83764,
      "latitude": 56.475548
    }
  },
  "7000148": {
    "id": "7000148",
    "name": "Banavie",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -5.095477,
      "latitude": 56.84338
    }
  },
  "7000149": {
    "id": "7000149",
    "name": "Balloch Central",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.583539,
      "latitude": 56.002983
    }
  },
  "7000150": {
    "id": "7000150",
    "name": "Banbury",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.327541,
      "latitude": 52.060925
    }
  },
  "7000151": {
    "id": "7000151",
    "name": "Banstead",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.214384,
      "latitude": 51.329922
    }
  },
  "7000152": {
    "id": "7000152",
    "name": "Bat & Ball",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.194258,
      "latitude": 51.289703
    }
  },
  "7000153": {
    "id": "7000153",
    "name": "Blackburn",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.479135,
      "latitude": 53.746513
    }
  },
  "7000155": {
    "id": "7000155",
    "name": "Blythe Bridge",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.066966,
      "latitude": 52.968124
    }
  },
  "7000156": {
    "id": "7000156",
    "name": "Bromborough Station",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.987058,
      "latitude": 53.322146
    }
  },
  "7000157": {
    "id": "7000157",
    "name": "Battlesbridge",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.565826,
      "latitude": 51.624805
    }
  },
  "7000158": {
    "id": "7000158",
    "name": "Broadbottom",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.01653,
      "latitude": 53.440968
    }
  },
  "7000159": {
    "id": "7000159",
    "name": "Berry Brow",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.797371,
      "latitude": 53.622368
    }
  },
  "7000161": {
    "id": "7000161",
    "name": "Burnley Central",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.244644,
      "latitude": 53.793776
    }
  },
  "7000162": {
    "id": "7000162",
    "name": "Beaconsfield",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.643644,
      "latitude": 51.611141
    }
  },
  "7000163": {
    "id": "7000163",
    "name": "Beckenham Hill",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.016497,
      "latitude": 51.424767
    }
  },
  "7000164": {
    "id": "7000164",
    "name": "Beckenham Junction",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.027144,
      "latitude": 51.411446
    }
  },
  "7000165": {
    "id": "7000165",
    "name": "Brockley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.037797,
      "latitude": 51.464684
    }
  },
  "7000166": {
    "id": "7000166",
    "name": "Bescar Lane",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.914703,
      "latitude": 53.623531
    }
  },
  "7000167": {
    "id": "7000167",
    "name": "Bromley Cross",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.409614,
      "latitude": 53.613743
    }
  },
  "7000168": {
    "id": "7000168",
    "name": "Bescot Stadium",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.991116,
      "latitude": 52.562702
    }
  },
  "7000169": {
    "id": "7000169",
    "name": "Brockley Whins",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.462749,
      "latitude": 54.958672
    }
  },
  "7000170": {
    "id": "7000170",
    "name": "Bursledon",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.304835,
      "latitude": 50.882858
    }
  },
  "7000171": {
    "id": "7000171",
    "name": "Bredbury",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.109823,
      "latitude": 53.422939
    }
  },
  "7000172": {
    "id": "7000172",
    "name": "Blundellsands & Crosby",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.039889,
      "latitude": 53.487675
    }
  },
  "7000173": {
    "id": "7000173",
    "name": "Bedford",
    "isMeta": true,
    "country": "GB",
    "location": {
      "longitude": -0.460739,
      "latitude": 52.136436
    }
  },
  "7000174": {
    "id": "7000174",
    "name": "Bodorgan",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.418067,
      "latitude": 53.204292
    }
  },
  "7000175": {
    "id": "7000175",
    "name": "Bedhampton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.996989,
      "latitude": 50.853638
    }
  },
  "7000176": {
    "id": "7000176",
    "name": "Brading",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.13801,
      "latitude": 50.678509
    }
  },
  "7000179": {
    "id": "7000179",
    "name": "Bardon Mill",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.349922,
      "latitude": 54.974636
    }
  },
  "7000180": {
    "id": "7000180",
    "name": "Blaydon",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.712578,
      "latitude": 54.965813
    }
  },
  "7000181": {
    "id": "7000181",
    "name": "Brondesbury Park",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.209955,
      "latitude": 51.540896
    }
  },
  "7000182": {
    "id": "7000182",
    "name": "Bedford St Johns",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.467348,
      "latitude": 52.129299
    }
  },
  "7000183": {
    "id": "7000183",
    "name": "Bedwyn",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.599077,
      "latitude": 51.379715
    }
  },
  "7000184": {
    "id": "7000184",
    "name": "Brondesbury Station",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.203063,
      "latitude": 51.545574
    }
  },
  "7000185": {
    "id": "7000185",
    "name": "Bearsden",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.332945,
      "latitude": 55.917202
    }
  },
  "7000186": {
    "id": "7000186",
    "name": "Bebington",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.003659,
      "latitude": 53.357651
    }
  },
  "7000187": {
    "id": "7000187",
    "name": "Beccles",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.569547,
      "latitude": 52.458481
    }
  },
  "7000188": {
    "id": "7000188",
    "name": "Beasdale",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -5.763864,
      "latitude": 56.899624
    }
  },
  "7000189": {
    "id": "7000189",
    "name": "Beeston",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.207211,
      "latitude": 52.920551
    }
  },
  "7000190": {
    "id": "7000190",
    "name": "Benfleet",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.561273,
      "latitude": 51.543964
    }
  },
  "7000191": {
    "id": "7000191",
    "name": "Bellgrove",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.22547,
      "latitude": 55.857182
    }
  },
  "7000192": {
    "id": "7000192",
    "name": "Bellingham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.020421,
      "latitude": 51.433826
    }
  },
  "7000193": {
    "id": "7000193",
    "name": "Bekesbourne",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.136125,
      "latitude": 51.261051
    }
  },
  "7000194": {
    "id": "7000194",
    "name": "Bearley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.750259,
      "latitude": 52.244252
    }
  },
  "7000195": {
    "id": "7000195",
    "name": "Belmont",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.199471,
      "latitude": 51.344086
    }
  },
  "7000196": {
    "id": "7000196",
    "name": "Belper",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.482622,
      "latitude": 53.024555
    }
  },
  "7000197": {
    "id": "7000197",
    "name": "Beaulieu Road",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.505586,
      "latitude": 50.854206
    }
  },
  "7000198": {
    "id": "7000198",
    "name": "Bearsted",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.57786,
      "latitude": 51.275589
    }
  },
  "7000199": {
    "id": "7000199",
    "name": "Beltring",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.403518,
      "latitude": 51.204651
    }
  },
  "7000200": {
    "id": "7000200",
    "name": "Belle Vue",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.180809,
      "latitude": 53.462181
    }
  },
  "7000201": {
    "id": "7000201",
    "name": "Bedworth",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.46749,
      "latitude": 52.479133
    }
  },
  "7000202": {
    "id": "7000202",
    "name": "Bexhill",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.475678,
      "latitude": 50.840679
    }
  },
  "7000203": {
    "id": "7000203",
    "name": "Bradford Interchange",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.749701,
      "latitude": 53.791196
    }
  },
  "7000204": {
    "id": "7000204",
    "name": "Bradford-On-Avon",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.252669,
      "latitude": 51.345058
    }
  },
  "7000205": {
    "id": "7000205",
    "name": "Bayford",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.096074,
      "latitude": 51.758808
    }
  },
  "7000206": {
    "id": "7000206",
    "name": "Bradford Forster Square",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.752505,
      "latitude": 53.79575
    }
  },
  "7000207": {
    "id": "7000207",
    "name": "Byfleet & New Haw",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.480714,
      "latitude": 51.349869
    }
  },
  "7000208": {
    "id": "7000208",
    "name": "Brentford",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.309048,
      "latitude": 51.487804
    }
  },
  "7000209": {
    "id": "7000209",
    "name": "Broughty Ferry",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.873153,
      "latitude": 56.467213
    }
  },
  "7000210": {
    "id": "7000210",
    "name": "Bagshot",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.688501,
      "latitude": 51.364964
    }
  },
  "7000211": {
    "id": "7000211",
    "name": "Bridgend",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.576296,
      "latitude": 51.506481
    }
  },
  "7000212": {
    "id": "7000212",
    "name": "Bargoed",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.229717,
      "latitude": 51.692268
    }
  },
  "7000213": {
    "id": "7000213",
    "name": "Brigg",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.486094,
      "latitude": 53.549137
    }
  },
  "7000214": {
    "id": "7000214",
    "name": "Brough",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.578255,
      "latitude": 53.726452
    }
  },
  "7000215": {
    "id": "7000215",
    "name": "Bingley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.837327,
      "latitude": 53.84803
    }
  },
  "7000216": {
    "id": "7000216",
    "name": "Broad Green",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.893267,
      "latitude": 53.40654
    }
  },
  "7000217": {
    "id": "7000217",
    "name": "Barnt Green",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.994098,
      "latitude": 52.361328
    }
  },
  "7000218": {
    "id": "7000218",
    "name": "Bogston",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.713676,
      "latitude": 55.937267
    }
  },
  "7000219": {
    "id": "7000219",
    "name": "Bathgate",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.644019,
      "latitude": 55.898678
    }
  },
  "7000220": {
    "id": "7000220",
    "name": "Birchgrove",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.203502,
      "latitude": 51.521687
    }
  },
  "7000221": {
    "id": "7000221",
    "name": "Bridgwater",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.99031,
      "latitude": 51.128025
    }
  },
  "7000222": {
    "id": "7000222",
    "name": "Birmingham New Street",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.898375,
      "latitude": 52.478153
    }
  },
  "7000223": {
    "id": "7000223",
    "name": "Bingham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.952044,
      "latitude": 52.954536
    }
  },
  "7000224": {
    "id": "7000224",
    "name": "Brithdir",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.228765,
      "latitude": 51.710266
    }
  },
  "7000225": {
    "id": "7000225",
    "name": "Barrhead",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.396411,
      "latitude": 55.804535
    }
  },
  "7000226": {
    "id": "7000226",
    "name": "Birmingham Snow Hill",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.899833,
      "latitude": 52.483555
    }
  },
  "7000227": {
    "id": "7000227",
    "name": "Barrhill",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.781834,
      "latitude": 55.097031
    }
  },
  "7000228": {
    "id": "7000228",
    "name": "Birmingham International",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.725149,
      "latitude": 52.450673
    }
  },
  "7000229": {
    "id": "7000229",
    "name": "Birmingham Moor Street",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.892483,
      "latitude": 52.479053
    }
  },
  "7000230": {
    "id": "7000230",
    "name": "Brockholes",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.770299,
      "latitude": 53.597149
    }
  },
  "7000231": {
    "id": "7000231",
    "name": "Bush Hill Park",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.06916,
      "latitude": 51.642365
    }
  },
  "7000232": {
    "id": "7000232",
    "name": "Blackhorse Road",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.04123,
      "latitude": 51.586143
    }
  },
  "7000233": {
    "id": "7000233",
    "name": "Berkhamsted",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.562498,
      "latitude": 51.763638
    }
  },
  "7000234": {
    "id": "7000234",
    "name": "Bishopton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.501637,
      "latitude": 55.902206
    }
  },
  "7000235": {
    "id": "7000235",
    "name": "Billingshurst",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.450348,
      "latitude": 51.014938
    }
  },
  "7000236": {
    "id": "7000236",
    "name": "Barrow Haven",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.391427,
      "latitude": 53.697128
    }
  },
  "7000237": {
    "id": "7000237",
    "name": "Box Hill & Westhumble",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.329128,
      "latitude": 51.253376
    }
  },
  "7000238": {
    "id": "7000238",
    "name": "Bletchley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.736368,
      "latitude": 51.995339
    }
  },
  "7000239": {
    "id": "7000239",
    "name": "Baildon",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.753717,
      "latitude": 53.849682
    }
  },
  "7000240": {
    "id": "7000240",
    "name": "Bishop Auckland",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.677545,
      "latitude": 54.657482
    }
  },
  "7000241": {
    "id": "7000241",
    "name": "Bilbrook",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.186101,
      "latitude": 52.623695
    }
  },
  "7000242": {
    "id": "7000242",
    "name": "Bidston",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.078589,
      "latitude": 53.40913
    }
  },
  "7000243": {
    "id": "7000243",
    "name": "Barrow-In-Furness",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.22614,
      "latitude": 54.118879
    }
  },
  "7000244": {
    "id": "7000244",
    "name": "Biggleswade",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.260294,
      "latitude": 52.085068
    }
  },
  "7000245": {
    "id": "7000245",
    "name": "Billingham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.278525,
      "latitude": 54.606327
    }
  },
  "7000246": {
    "id": "7000246",
    "name": "Birkbeck",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.056218,
      "latitude": 51.403847
    }
  },
  "7000247": {
    "id": "7000247",
    "name": "Bickley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.044272,
      "latitude": 51.40033
    }
  },
  "7000248": {
    "id": "7000248",
    "name": "Bicester North",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.150517,
      "latitude": 51.903401
    }
  },
  "7000249": {
    "id": "7000249",
    "name": "Billericay",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.418656,
      "latitude": 51.628834
    }
  },
  "7000250": {
    "id": "7000250",
    "name": "Bicester Village",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.148393,
      "latitude": 51.893429
    }
  },
  "7000251": {
    "id": "7000251",
    "name": "Birchwood",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.52802,
      "latitude": 53.41193
    }
  },
  "7000252": {
    "id": "7000252",
    "name": "Birkenhead Central",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.020897,
      "latitude": 53.388244
    }
  },
  "7000253": {
    "id": "7000253",
    "name": "Birkdale",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.014742,
      "latitude": 53.633514
    }
  },
  "7000254": {
    "id": "7000254",
    "name": "Barking",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.080804,
      "latitude": 51.539982
    }
  },
  "7000255": {
    "id": "7000255",
    "name": "Birkenhead Hamilton Square",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.01365,
      "latitude": 53.39469
    }
  },
  "7000256": {
    "id": "7000256",
    "name": "Bank Hall",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.987509,
      "latitude": 53.437357
    }
  },
  "7000257": {
    "id": "7000257",
    "name": "Birkenhead North",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.057425,
      "latitude": 53.404819
    }
  },
  "7000258": {
    "id": "7000258",
    "name": "Birkenhead Park",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.03927,
      "latitude": 53.397417
    }
  },
  "7000259": {
    "id": "7000259",
    "name": "Branksome",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.919211,
      "latitude": 50.727528
    }
  },
  "7000260": {
    "id": "7000260",
    "name": "Brockenhurst",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.574112,
      "latitude": 50.816708
    }
  },
  "7000261": {
    "id": "7000261",
    "name": "Blake Street",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.844888,
      "latitude": 52.605054
    }
  },
  "7000262": {
    "id": "7000262",
    "name": "Blair Atholl",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.85025,
      "latitude": 56.765614
    }
  },
  "7000263": {
    "id": "7000263",
    "name": "Bleasby",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.942469,
      "latitude": 53.041649
    }
  },
  "7000264": {
    "id": "7000264",
    "name": "Blackheath",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.008317,
      "latitude": 51.465706
    }
  },
  "7000265": {
    "id": "7000265",
    "name": "Blakedown",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.176365,
      "latitude": 52.406147
    }
  },
  "7000266": {
    "id": "7000266",
    "name": "Bentley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.868287,
      "latitude": 51.180695
    }
  },
  "7000267": {
    "id": "7000267",
    "name": "Blaenau Ffestiniog",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.944449,
      "latitude": 52.996284
    }
  },
  "7000268": {
    "id": "7000268",
    "name": "Bellshill",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.025222,
      "latitude": 55.816605
    }
  },
  "7000269": {
    "id": "7000269",
    "name": "Blairhill",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.04221,
      "latitude": 55.866653
    }
  },
  "7000270": {
    "id": "7000270",
    "name": "Bloxwich North",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.019173,
      "latitude": 52.625637
    }
  },
  "7000271": {
    "id": "7000271",
    "name": "Bloxwich Station",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.011783,
      "latitude": 52.61853
    }
  },
  "7000272": {
    "id": "7000272",
    "name": "Blackrod",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.56954,
      "latitude": 53.591522
    }
  },
  "7000273": {
    "id": "7000273",
    "name": "Berrylands",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.282157,
      "latitude": 51.39838
    }
  },
  "7000275": {
    "id": "7000275",
    "name": "Blackwater",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.777023,
      "latitude": 51.33176
    }
  },
  "7000276": {
    "id": "7000276",
    "name": "Barnsley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.477688,
      "latitude": 53.553978
    }
  },
  "7000277": {
    "id": "7000277",
    "name": "Bournemouth",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.863955,
      "latitude": 50.727478
    }
  },
  "7000278": {
    "id": "7000278",
    "name": "Broomfleet",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.673328,
      "latitude": 53.740131
    }
  },
  "7000279": {
    "id": "7000279",
    "name": "Barming",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.479428,
      "latitude": 51.284904
    }
  },
  "7000280": {
    "id": "7000280",
    "name": "Bramhall",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.162249,
      "latitude": 53.359959
    }
  },
  "7000281": {
    "id": "7000281",
    "name": "Bramley (Hants)",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.061265,
      "latitude": 51.32988
    }
  },
  "7000282": {
    "id": "7000282",
    "name": "Brampton (Suffolk)",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.543871,
      "latitude": 52.395397
    }
  },
  "7000283": {
    "id": "7000283",
    "name": "Brampton (Cumbria)",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.703814,
      "latitude": 54.932655
    }
  },
  "7000284": {
    "id": "7000284",
    "name": "Burnley Manchester Road",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.248883,
      "latitude": 53.784962
    }
  },
  "7000285": {
    "id": "7000285",
    "name": "Brimsdown",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.031022,
      "latitude": 51.655224
    }
  },
  "7000286": {
    "id": "7000286",
    "name": "Bedminster",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.594184,
      "latitude": 51.440037
    }
  },
  "7000287": {
    "id": "7000287",
    "name": "Blackpool North",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.049908,
      "latitude": 53.822772
    }
  },
  "7000288": {
    "id": "7000288",
    "name": "Berney Arms",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.63043,
      "latitude": 52.589745
    }
  },
  "7000289": {
    "id": "7000289",
    "name": "Brandon",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.624116,
      "latitude": 52.454479
    }
  },
  "7000290": {
    "id": "7000290",
    "name": "Bracknell",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.751833,
      "latitude": 51.413319
    }
  },
  "7000291": {
    "id": "7000291",
    "name": "Barnham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.639627,
      "latitude": 50.831135
    }
  },
  "7000292": {
    "id": "7000292",
    "name": "Barnhill",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.223463,
      "latitude": 55.877895
    }
  },
  "7000293": {
    "id": "7000293",
    "name": "Brinnington",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.134097,
      "latitude": 53.431881
    }
  },
  "7000294": {
    "id": "7000294",
    "name": "Bromley North",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.017325,
      "latitude": 51.408894
    }
  },
  "7000295": {
    "id": "7000295",
    "name": "Burnside",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.204029,
      "latitude": 55.817123
    }
  },
  "7000296": {
    "id": "7000296",
    "name": "Branchton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.803598,
      "latitude": 55.940647
    }
  },
  "7000297": {
    "id": "7000297",
    "name": "Bookham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.385224,
      "latitude": 51.288334
    }
  },
  "7000298": {
    "id": "7000298",
    "name": "Bridge of Allan",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.956166,
      "latitude": 56.157429
    }
  },
  "7000299": {
    "id": "7000299",
    "name": "Bow Brickhill",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.696154,
      "latitude": 52.003475
    }
  },
  "7000300": {
    "id": "7000300",
    "name": "Burnham-On-Crouch",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.813459,
      "latitude": 51.633526
    }
  },
  "7000301": {
    "id": "7000301",
    "name": "Bourne End",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.711287,
      "latitude": 51.576538
    }
  },
  "7000302": {
    "id": "7000302",
    "name": "Bridge of Orchy",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.763048,
      "latitude": 56.515926
    }
  },
  "7000303": {
    "id": "7000303",
    "name": "Barton-On-Humber",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.443233,
      "latitude": 53.688824
    }
  },
  "7000305": {
    "id": "7000305",
    "name": "Bordesley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.877771,
      "latitude": 52.471844
    }
  },
  "7000306": {
    "id": "7000306",
    "name": "Broome",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.88524,
      "latitude": 52.422745
    }
  },
  "7000307": {
    "id": "7000307",
    "name": "Bootle New Strand",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.994676,
      "latitude": 53.453357
    }
  },
  "7000308": {
    "id": "7000308",
    "name": "Bootle (Cumbria)",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.394818,
      "latitude": 54.290249
    }
  },
  "7000309": {
    "id": "7000309",
    "name": "Bodmin Parkway",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.663026,
      "latitude": 50.445822
    }
  },
  "7000310": {
    "id": "7000310",
    "name": "Bootle Oriel Road",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.995791,
      "latitude": 53.446559
    }
  },
  "7000311": {
    "id": "7000311",
    "name": "Birchington-On-Sea",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.300781,
      "latitude": 51.377956
    }
  },
  "7000312": {
    "id": "7000312",
    "name": "Borth",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.050236,
      "latitude": 52.491001
    }
  },
  "7000313": {
    "id": "7000313",
    "name": "Bournville",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.926434,
      "latitude": 52.426937
    }
  },
  "7000314": {
    "id": "7000314",
    "name": "Borough Green & Wrotham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.306296,
      "latitude": 51.29295
    }
  },
  "7000315": {
    "id": "7000315",
    "name": "Botley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.258809,
      "latitude": 50.916748
    }
  },
  "7000316": {
    "id": "7000316",
    "name": "Bristol Parkway",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.53461,
      "latitude": 51.514061
    }
  },
  "7000317": {
    "id": "7000317",
    "name": "Brookmans Park",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.204811,
      "latitude": 51.720955
    }
  },
  "7000318": {
    "id": "7000318",
    "name": "Blackpool Pleasure Beach",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.053856,
      "latitude": 53.788154
    }
  },
  "7000319": {
    "id": "7000319",
    "name": "Blackpool South",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.049081,
      "latitude": 53.798611
    }
  },
  "7000320": {
    "id": "7000320",
    "name": "Bempton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.180389,
      "latitude": 54.128296
    }
  },
  "7000321": {
    "id": "7000321",
    "name": "Brighton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.141234,
      "latitude": 50.829659
    }
  },
  "7000322": {
    "id": "7000322",
    "name": "Bere Alston",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.200418,
      "latitude": 50.485535
    }
  },
  "7000323": {
    "id": "7000323",
    "name": "Barnes Bridge",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.252051,
      "latitude": 51.471676
    }
  },
  "7000324": {
    "id": "7000324",
    "name": "Ben Rhydding",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.797429,
      "latitude": 53.926167
    }
  },
  "7000325": {
    "id": "7000325",
    "name": "Breich",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.668147,
      "latitude": 55.827351
    }
  },
  "7000326": {
    "id": "7000326",
    "name": "Bere Ferrers",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.181901,
      "latitude": 50.450798
    }
  },
  "7000327": {
    "id": "7000327",
    "name": "Bognor Regis",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.676384,
      "latitude": 50.786594
    }
  },
  "7000328": {
    "id": "7000328",
    "name": "Barnehurst",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.160885,
      "latitude": 51.464798
    }
  },
  "7000329": {
    "id": "7000329",
    "name": "Bricket Wood",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.358846,
      "latitude": 51.705223
    }
  },
  "7000330": {
    "id": "7000330",
    "name": "Bromborough Rake",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.989644,
      "latitude": 53.329899
    }
  },
  "7000331": {
    "id": "7000331",
    "name": "Bare Lane",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.835331,
      "latitude": 54.074473
    }
  },
  "7000332": {
    "id": "7000332",
    "name": "Barmouth",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.056641,
      "latitude": 52.72287
    }
  },
  "7000333": {
    "id": "7000333",
    "name": "Barnes Station",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.240711,
      "latitude": 51.467014
    }
  },
  "7000334": {
    "id": "7000334",
    "name": "Bridlington",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.200659,
      "latitude": 54.084545
    }
  },
  "7000335": {
    "id": "7000335",
    "name": "Brierfield",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.236959,
      "latitude": 53.824535
    }
  },
  "7000336": {
    "id": "7000336",
    "name": "Braystones",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.543406,
      "latitude": 54.43956
    }
  },
  "7000337": {
    "id": "7000337",
    "name": "Braintree",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.558261,
      "latitude": 51.874989
    }
  },
  "7000338": {
    "id": "7000338",
    "name": "Brundall Station",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.439316,
      "latitude": 52.619747
    }
  },
  "7000339": {
    "id": "7000339",
    "name": "Berwick (Sussex)",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.164587,
      "latitude": 50.840569
    }
  },
  "7000340": {
    "id": "7000340",
    "name": "Barnetby",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.409679,
      "latitude": 53.574219
    }
  },
  "7000341": {
    "id": "7000341",
    "name": "Basingstoke",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.086896,
      "latitude": 51.26804
    }
  },
  "7000342": {
    "id": "7000342",
    "name": "Bishopbriggs",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.224958,
      "latitude": 55.903927
    }
  },
  "7000343": {
    "id": "7000343",
    "name": "Burscough Bridge",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.841758,
      "latitude": 53.60519
    }
  },
  "7000344": {
    "id": "7000344",
    "name": "Basildon",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.457309,
      "latitude": 51.568672
    }
  },
  "7000345": {
    "id": "7000345",
    "name": "Bury St Edmunds",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.713355,
      "latitude": 52.253727
    }
  },
  "7000346": {
    "id": "7000346",
    "name": "Bishops Stortford",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.16557,
      "latitude": 51.866692
    }
  },
  "7000347": {
    "id": "7000347",
    "name": "Bosham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.846655,
      "latitude": 50.843262
    }
  },
  "7000348": {
    "id": "7000348",
    "name": "Broadstairs",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.43317,
      "latitude": 51.360653
    }
  },
  "7000349": {
    "id": "7000349",
    "name": "Burscough Junction",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.840105,
      "latitude": 53.598011
    }
  },
  "7000350": {
    "id": "7000350",
    "name": "Barnstaple",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.064032,
      "latitude": 51.073532
    }
  },
  "7000351": {
    "id": "7000351",
    "name": "Boston",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.030949,
      "latitude": 52.978802
    }
  },
  "7000352": {
    "id": "7000352",
    "name": "Bromley South",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.018374,
      "latitude": 51.399887
    }
  },
  "7000353": {
    "id": "7000353",
    "name": "Bath Spa",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.356302,
      "latitude": 51.378059
    }
  },
  "7000354": {
    "id": "7000354",
    "name": "British Steel Redcar",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.108324,
      "latitude": 54.609263
    }
  },
  "7000355": {
    "id": "7000355",
    "name": "Barassie",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.651181,
      "latitude": 55.5611
    }
  },
  "7000356": {
    "id": "7000356",
    "name": "Bishopstone (Hill Rise by Bus)",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.083826,
      "latitude": 50.78185
    }
  },
  "7000357": {
    "id": "7000357",
    "name": "Busby",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.262551,
      "latitude": 55.780109
    }
  },
  "7000358": {
    "id": "7000358",
    "name": "Bolton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.425661,
      "latitude": 53.573983
    }
  },
  "7000359": {
    "id": "7000359",
    "name": "Battersby",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.092945,
      "latitude": 54.457687
    }
  },
  "7000361": {
    "id": "7000361",
    "name": "Bolton-On-Dearne",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.312217,
      "latitude": 53.518986
    }
  },
  "7000362": {
    "id": "7000362",
    "name": "Bottesford",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.796012,
      "latitude": 52.944962
    }
  },
  "7000363": {
    "id": "7000363",
    "name": "Bethnal Green",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.059747,
      "latitude": 51.524406
    }
  },
  "7000364": {
    "id": "7000364",
    "name": "Bentham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.510918,
      "latitude": 54.115791
    }
  },
  "7000365": {
    "id": "7000365",
    "name": "Burntisland",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.233214,
      "latitude": 56.057133
    }
  },
  "7000366": {
    "id": "7000366",
    "name": "Batley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.622734,
      "latitude": 53.709129
    }
  },
  "7000367": {
    "id": "7000367",
    "name": "Bristol Temple Meads",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.581349,
      "latitude": 51.449093
    }
  },
  "7000368": {
    "id": "7000368",
    "name": "Bitterne",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.378279,
      "latitude": 50.918343
    }
  },
  "7000369": {
    "id": "7000369",
    "name": "Bridgeton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.226668,
      "latitude": 55.849968
    }
  },
  "7000370": {
    "id": "7000370",
    "name": "Battersea Park",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.148151,
      "latitude": 51.477272
    }
  },
  "7000371": {
    "id": "7000371",
    "name": "Blantyre",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.086466,
      "latitude": 55.7976
    }
  },
  "7000373": {
    "id": "7000373",
    "name": "Battle",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.495169,
      "latitude": 50.91312
    }
  },
  "7000374": {
    "id": "7000374",
    "name": "Betchworth",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.26771,
      "latitude": 51.247993
    }
  },
  "7000375": {
    "id": "7000375",
    "name": "Burnage",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.215896,
      "latitude": 53.421205
    }
  },
  "7000376": {
    "id": "7000376",
    "name": "Burnley Barracks",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.258014,
      "latitude": 53.791237
    }
  },
  "7000377": {
    "id": "7000377",
    "name": "Buckenham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.47013,
      "latitude": 52.59816
    }
  },
  "7000378": {
    "id": "7000378",
    "name": "Burneside",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.766231,
      "latitude": 54.355305
    }
  },
  "7000379": {
    "id": "7000379",
    "name": "Bugle",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.791736,
      "latitude": 50.399979
    }
  },
  "7000380": {
    "id": "7000380",
    "name": "Bruce Grove",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.06982,
      "latitude": 51.592918
    }
  },
  "7000381": {
    "id": "7000381",
    "name": "Burgess Hill",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.127749,
      "latitude": 50.953552
    }
  },
  "7000382": {
    "id": "7000382",
    "name": "Builth Road",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.427068,
      "latitude": 52.169289
    }
  },
  "7000383": {
    "id": "7000383",
    "name": "Burton Joyce",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.040698,
      "latitude": 52.984047
    }
  },
  "7000384": {
    "id": "7000384",
    "name": "Buckley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.055948,
      "latitude": 53.163021
    }
  },
  "7000385": {
    "id": "7000385",
    "name": "Burnham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.647335,
      "latitude": 51.523538
    }
  },
  "7000386": {
    "id": "7000386",
    "name": "Bucknell",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.948551,
      "latitude": 52.357525
    }
  },
  "7000387": {
    "id": "7000387",
    "name": "Bruton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.447103,
      "latitude": 51.111584
    }
  },
  "7000388": {
    "id": "7000388",
    "name": "Burley Park",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.576277,
      "latitude": 53.808743
    }
  },
  "7000389": {
    "id": "7000389",
    "name": "Bures",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.769021,
      "latitude": 51.97094
    }
  },
  "7000390": {
    "id": "7000390",
    "name": "Brundall Gardens",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.418896,
      "latitude": 52.623035
    }
  },
  "7000391": {
    "id": "7000391",
    "name": "Berwick-Upon-Tweed",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.01112,
      "latitude": 55.774872
    }
  },
  "7000392": {
    "id": "7000392",
    "name": "Burley-In-Wharfedale",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.753363,
      "latitude": 53.908112
    }
  },
  "7000393": {
    "id": "7000393",
    "name": "Buxted",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.131651,
      "latitude": 50.990475
    }
  },
  "7000394": {
    "id": "7000394",
    "name": "Bushey",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.384806,
      "latitude": 51.644669
    }
  },
  "7000395": {
    "id": "7000395",
    "name": "Belvedere",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.152088,
      "latitude": 51.491936
    }
  },
  "7000396": {
    "id": "7000396",
    "name": "Bromsgrove",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.048379,
      "latitude": 52.322662
    }
  },
  "7000397": {
    "id": "7000397",
    "name": "Beverley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.423855,
      "latitude": 53.842281
    }
  },
  "7000398": {
    "id": "7000398",
    "name": "Berkswell",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.642845,
      "latitude": 52.395851
    }
  },
  "7000399": {
    "id": "7000399",
    "name": "Brentwood",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.30083,
      "latitude": 51.61322
    }
  },
  "7000400": {
    "id": "7000400",
    "name": "Bowling",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.493879,
      "latitude": 55.931129
    }
  },
  "7000401": {
    "id": "7000401",
    "name": "Brookwood",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.635753,
      "latitude": 51.303215
    }
  },
  "7000402": {
    "id": "7000402",
    "name": "Bowes Park",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.119761,
      "latitude": 51.607216
    }
  },
  "7000403": {
    "id": "7000403",
    "name": "Buxton Station",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.913086,
      "latitude": 53.26058
    }
  },
  "7000404": {
    "id": "7000404",
    "name": "Broxbourne",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.011157,
      "latitude": 51.745712
    }
  },
  "7000405": {
    "id": "7000405",
    "name": "Bexleyheath",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.133471,
      "latitude": 51.463493
    }
  },
  "7000406": {
    "id": "7000406",
    "name": "Bexley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.148248,
      "latitude": 51.440742
    }
  },
  "7000407": {
    "id": "7000407",
    "name": "Brixton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.114164,
      "latitude": 51.463245
    }
  },
  "7000408": {
    "id": "7000408",
    "name": "Barry Station",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.285023,
      "latitude": 51.396729
    }
  },
  "7000409": {
    "id": "7000409",
    "name": "Betws-Y-Coed",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.80091,
      "latitude": 53.092056
    }
  },
  "7000410": {
    "id": "7000410",
    "name": "Barry Docks",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.260749,
      "latitude": 51.402393
    }
  },
  "7000411": {
    "id": "7000411",
    "name": "Bynea",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.098396,
      "latitude": 51.67276
    }
  },
  "7000412": {
    "id": "7000412",
    "name": "Barry Island",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.273405,
      "latitude": 51.392361
    }
  },
  "7000413": {
    "id": "7000413",
    "name": "Barry Links",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.745444,
      "latitude": 56.493206
    }
  },
  "7000414": {
    "id": "7000414",
    "name": "Bryn",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.647233,
      "latitude": 53.499893
    }
  },
  "7000415": {
    "id": "7000415",
    "name": "Chesterfield",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.42011,
      "latitude": 53.238209
    }
  },
  "7000417": {
    "id": "7000417",
    "name": "Cadoxton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.248087,
      "latitude": 51.412422
    }
  },
  "7000418": {
    "id": "7000418",
    "name": "Camborne",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -5.297921,
      "latitude": 50.210392
    }
  },
  "7000419": {
    "id": "7000419",
    "name": "Caergwrle",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.033069,
      "latitude": 53.107922
    }
  },
  "7000420": {
    "id": "7000420",
    "name": "Carnforth",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.771244,
      "latitude": 54.129688
    }
  },
  "7000421": {
    "id": "7000421",
    "name": "Caerphilly",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.217805,
      "latitude": 51.571903
    }
  },
  "7000422": {
    "id": "7000422",
    "name": "Carstairs",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.668696,
      "latitude": 55.69075
    }
  },
  "7000423": {
    "id": "7000423",
    "name": "Caldicot",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.760598,
      "latitude": 51.58474
    }
  },
  "7000424": {
    "id": "7000424",
    "name": "Camberley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.745328,
      "latitude": 51.335911
    }
  },
  "7000425": {
    "id": "7000425",
    "name": "Canley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.547232,
      "latitude": 52.399418
    }
  },
  "7000426": {
    "id": "7000426",
    "name": "Capenhurst",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.942908,
      "latitude": 53.260155
    }
  },
  "7000427": {
    "id": "7000427",
    "name": "Caersws",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.43387,
      "latitude": 52.516262
    }
  },
  "7000429": {
    "id": "7000429",
    "name": "Causeland",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.466937,
      "latitude": 50.405525
    }
  },
  "7000430": {
    "id": "7000430",
    "name": "Canterbury West",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.074608,
      "latitude": 51.284279
    }
  },
  "7000431": {
    "id": "7000431",
    "name": "Cambridge Station",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.137584,
      "latitude": 52.194519
    }
  },
  "7000432": {
    "id": "7000432",
    "name": "Carbis Bay",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -5.463815,
      "latitude": 50.19746
    }
  },
  "7000433": {
    "id": "7000433",
    "name": "Cooksbridge",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.010272,
      "latitude": 50.903938
    }
  },
  "7000434": {
    "id": "7000434",
    "name": "Cambridge Heath",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.057997,
      "latitude": 51.53157
    }
  },
  "7000435": {
    "id": "7000435",
    "name": "Cambuslang",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.173839,
      "latitude": 55.819458
    }
  },
  "7000436": {
    "id": "7000436",
    "name": "Castle Bar Park",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.331575,
      "latitude": 51.522865
    }
  },
  "7000437": {
    "id": "7000437",
    "name": "Conisbrough",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.234333,
      "latitude": 53.48885
    }
  },
  "7000438": {
    "id": "7000438",
    "name": "Charlbury",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.490133,
      "latitude": 51.872929
    }
  },
  "7000439": {
    "id": "7000439",
    "name": "Cark",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.972746,
      "latitude": 54.177513
    }
  },
  "7000440": {
    "id": "7000440",
    "name": "Criccieth",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.236972,
      "latitude": 52.918312
    }
  },
  "7000441": {
    "id": "7000441",
    "name": "Charing Cross Glasgow",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.270689,
      "latitude": 55.865345
    }
  },
  "7000442": {
    "id": "7000442",
    "name": "Castle Cary",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.522683,
      "latitude": 51.099583
    }
  },
  "7000443": {
    "id": "7000443",
    "name": "Cathcart",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.261552,
      "latitude": 55.817879
    }
  },
  "7000444": {
    "id": "7000444",
    "name": "Cardiff Central",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.177794,
      "latitude": 51.475193
    }
  },
  "7000445": {
    "id": "7000445",
    "name": "Codsall",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.200891,
      "latitude": 52.627262
    }
  },
  "7000446": {
    "id": "7000446",
    "name": "Cardiff Bay",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.166049,
      "latitude": 51.466324
    }
  },
  "7000447": {
    "id": "7000447",
    "name": "Cheddington",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.662168,
      "latitude": 51.857908
    }
  },
  "7000448": {
    "id": "7000448",
    "name": "Corbridge",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.017141,
      "latitude": 54.966152
    }
  },
  "7000449": {
    "id": "7000449",
    "name": "Coulsdon South",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.13746,
      "latitude": 51.315231
    }
  },
  "7000450": {
    "id": "7000450",
    "name": "Cardonald",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.340297,
      "latitude": 55.853252
    }
  },
  "7000451": {
    "id": "7000451",
    "name": "Cardross",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.652782,
      "latitude": 55.960163
    }
  },
  "7000452": {
    "id": "7000452",
    "name": "Cardiff Queen Street",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.170782,
      "latitude": 51.482464
    }
  },
  "7000453": {
    "id": "7000453",
    "name": "Crediton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.646912,
      "latitude": 50.783375
    }
  },
  "7000454": {
    "id": "7000454",
    "name": "Canterbury East",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.075434,
      "latitude": 51.275261
    }
  },
  "7000455": {
    "id": "7000455",
    "name": "Chelsfield",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.108373,
      "latitude": 51.35603
    }
  },
  "7000456": {
    "id": "7000456",
    "name": "Cressington",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.91172,
      "latitude": 53.3588
    }
  },
  "7000457": {
    "id": "7000457",
    "name": "Catford Bridge",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.027142,
      "latitude": 51.444725
    }
  },
  "7000458": {
    "id": "7000458",
    "name": "Chelford",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.280375,
      "latitude": 53.270744
    }
  },
  "7000459": {
    "id": "7000459",
    "name": "Croftfoot",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.229643,
      "latitude": 55.818455
    }
  },
  "7000460": {
    "id": "7000460",
    "name": "Chalfont & Latimer",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.560646,
      "latitude": 51.66835
    }
  },
  "7000461": {
    "id": "7000461",
    "name": "Clifton Down",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.611761,
      "latitude": 51.46423
    }
  },
  "7000462": {
    "id": "7000462",
    "name": "Cosford",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.301479,
      "latitude": 52.645031
    }
  },
  "7000463": {
    "id": "7000463",
    "name": "Crofton Park",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.03678,
      "latitude": 51.454777
    }
  },
  "7000464": {
    "id": "7000464",
    "name": "Chestfield & Swalecliffe",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.068182,
      "latitude": 51.360004
    }
  },
  "7000465": {
    "id": "7000465",
    "name": "Church Fenton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.226652,
      "latitude": 53.827671
    }
  },
  "7000466": {
    "id": "7000466",
    "name": "Congleton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.192754,
      "latitude": 53.157637
    }
  },
  "7000467": {
    "id": "7000467",
    "name": "Cramlington",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.598887,
      "latitude": 55.088604
    }
  },
  "7000468": {
    "id": "7000468",
    "name": "Chester",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.880152,
      "latitude": 53.196815
    }
  },
  "7000469": {
    "id": "7000469",
    "name": "Cathays",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.178149,
      "latitude": 51.488678
    }
  },
  "7000470": {
    "id": "7000470",
    "name": "Cheam",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.2148,
      "latitude": 51.35601
    }
  },
  "7000471": {
    "id": "7000471",
    "name": "Chapel-En-Le-Frith",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.918915,
      "latitude": 53.312405
    }
  },
  "7000472": {
    "id": "7000472",
    "name": "Cheadle Hulme",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.188125,
      "latitude": 53.375956
    }
  },
  "7000473": {
    "id": "7000473",
    "name": "Chichester",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.783032,
      "latitude": 50.831821
    }
  },
  "7000474": {
    "id": "7000474",
    "name": "Crosshill",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.257648,
      "latitude": 55.833225
    }
  },
  "7000475": {
    "id": "7000475",
    "name": "Cosham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.068259,
      "latitude": 50.841644
    }
  },
  "7000476": {
    "id": "7000476",
    "name": "Cholsey",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.157942,
      "latitude": 51.570135
    }
  },
  "7000477": {
    "id": "7000477",
    "name": "Chapleton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.024398,
      "latitude": 51.01577
    }
  },
  "7000478": {
    "id": "7000478",
    "name": "Christchurch",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.784566,
      "latitude": 50.738148
    }
  },
  "7000479": {
    "id": "7000479",
    "name": "Clapham High Street",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.1328,
      "latitude": 51.46534
    }
  },
  "7000480": {
    "id": "7000480",
    "name": "Chapeltown",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.466743,
      "latitude": 53.464046
    }
  },
  "7000481": {
    "id": "7000481",
    "name": "Cheshunt",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.023171,
      "latitude": 51.702747
    }
  },
  "7000482": {
    "id": "7000482",
    "name": "Chappel & Wakes Colne",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.758944,
      "latitude": 51.925312
    }
  },
  "7000483": {
    "id": "7000483",
    "name": "Chiswick",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.267538,
      "latitude": 51.4809
    }
  },
  "7000484": {
    "id": "7000484",
    "name": "Chipstead",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.169259,
      "latitude": 51.309444
    }
  },
  "7000485": {
    "id": "7000485",
    "name": "Chingford",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.009955,
      "latitude": 51.63385
    }
  },
  "7000486": {
    "id": "7000486",
    "name": "Chilham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.975937,
      "latitude": 51.244549
    }
  },
  "7000487": {
    "id": "7000487",
    "name": "Chirk",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.066708,
      "latitude": 52.932793
    }
  },
  "7000488": {
    "id": "7000488",
    "name": "Chinley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.9444,
      "latitude": 53.340275
    }
  },
  "7000489": {
    "id": "7000489",
    "name": "Cilmeri",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.45719,
      "latitude": 52.150936
    }
  },
  "7000490": {
    "id": "7000490",
    "name": "City Thameslink",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.103412,
      "latitude": 51.514336
    }
  },
  "7000491": {
    "id": "7000491",
    "name": "Chippenham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.115123,
      "latitude": 51.462162
    }
  },
  "7000492": {
    "id": "7000492",
    "name": "Clitheroe",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.394365,
      "latitude": 53.87345
    }
  },
  "7000494": {
    "id": "7000494",
    "name": "Chislehurst",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.057437,
      "latitude": 51.405506
    }
  },
  "7000495": {
    "id": "7000495",
    "name": "Chilworth",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.523795,
      "latitude": 51.21553
    }
  },
  "7000496": {
    "id": "7000496",
    "name": "Corkerhill",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.323322,
      "latitude": 55.836494
    }
  },
  "7000497": {
    "id": "7000497",
    "name": "Corkickle",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.582155,
      "latitude": 54.541657
    }
  },
  "7000498": {
    "id": "7000498",
    "name": "Crookston",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.36049,
      "latitude": 55.84388
    }
  },
  "7000499": {
    "id": "7000499",
    "name": "Chalkwell",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.6706,
      "latitude": 51.53883
    }
  },
  "7000500": {
    "id": "7000500",
    "name": "Carlisle",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.933833,
      "latitude": 54.890675
    }
  },
  "7000501": {
    "id": "7000501",
    "name": "Clacton-On-Sea",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.154134,
      "latitude": 51.793953
    }
  },
  "7000503": {
    "id": "7000503",
    "name": "Clandon",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.503622,
      "latitude": 51.263832
    }
  },
  "7000504": {
    "id": "7000504",
    "name": "Cleethorpes",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.029584,
      "latitude": 53.56316
    }
  },
  "7000505": {
    "id": "7000505",
    "name": "Castleford",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.355852,
      "latitude": 53.724171
    }
  },
  "7000506": {
    "id": "7000506",
    "name": "Claygate",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.348207,
      "latitude": 51.360664
    }
  },
  "7000507": {
    "id": "7000507",
    "name": "Clapham (Nth Yorkshire)",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.409858,
      "latitude": 54.105392
    }
  },
  "7000508": {
    "id": "7000508",
    "name": "Clifton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.314811,
      "latitude": 53.522503
    }
  },
  "7000509": {
    "id": "7000509",
    "name": "Clapham Junction",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.170281,
      "latitude": 51.464134
    }
  },
  "7000510": {
    "id": "7000510",
    "name": "Carluke",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.848761,
      "latitude": 55.730408
    }
  },
  "7000511": {
    "id": "7000511",
    "name": "Cleland",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.909695,
      "latitude": 55.804073
    }
  },
  "7000512": {
    "id": "7000512",
    "name": "Castleton Moor",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.947707,
      "latitude": 54.467297
    }
  },
  "7000513": {
    "id": "7000513",
    "name": "Clarkston",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.275865,
      "latitude": 55.789753
    }
  },
  "7000514": {
    "id": "7000514",
    "name": "Clock House",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.041668,
      "latitude": 51.408096
    }
  },
  "7000515": {
    "id": "7000515",
    "name": "Clapton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.056685,
      "latitude": 51.56213
    }
  },
  "7000516": {
    "id": "7000516",
    "name": "Clarbeston Road",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.88221,
      "latitude": 51.852207
    }
  },
  "7000517": {
    "id": "7000517",
    "name": "Calstock",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.208665,
      "latitude": 50.497487
    }
  },
  "7000518": {
    "id": "7000518",
    "name": "Carlton Station",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.078357,
      "latitude": 52.964573
    }
  },
  "7000519": {
    "id": "7000519",
    "name": "Clunderwen",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.731915,
      "latitude": 51.8405
    }
  },
  "7000520": {
    "id": "7000520",
    "name": "Claverdon",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.696566,
      "latitude": 52.276424
    }
  },
  "7000521": {
    "id": "7000521",
    "name": "Colwall",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.357489,
      "latitude": 52.080284
    }
  },
  "7000522": {
    "id": "7000522",
    "name": "Clydebank",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.403927,
      "latitude": 55.900562
    }
  },
  "7000523": {
    "id": "7000523",
    "name": "Coombe",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.481655,
      "latitude": 50.44479
    }
  },
  "7000524": {
    "id": "7000524",
    "name": "Crossmyloof",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.284813,
      "latitude": 55.833626
    }
  },
  "7000525": {
    "id": "7000525",
    "name": "Commondale",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.97514,
      "latitude": 54.481018
    }
  },
  "7000526": {
    "id": "7000526",
    "name": "Camden Road",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.139764,
      "latitude": 51.541889
    }
  },
  "7000527": {
    "id": "7000527",
    "name": "Carmarthen",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.305732,
      "latitude": 51.853233
    }
  },
  "7000528": {
    "id": "7000528",
    "name": "Canonbury",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.091614,
      "latitude": 51.548747
    }
  },
  "7000529": {
    "id": "7000529",
    "name": "Connel Ferry",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -5.384973,
      "latitude": 56.451981
    }
  },
  "7000530": {
    "id": "7000530",
    "name": "Cannock",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.022158,
      "latitude": 52.686768
    }
  },
  "7000531": {
    "id": "7000531",
    "name": "Chetnole",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.574072,
      "latitude": 50.866428
    }
  },
  "7000533": {
    "id": "7000533",
    "name": "Cononley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.010631,
      "latitude": 53.917351
    }
  },
  "7000535": {
    "id": "7000535",
    "name": "Cantley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.512899,
      "latitude": 52.578907
    }
  },
  "7000536": {
    "id": "7000536",
    "name": "Colchester",
    "isMeta": true,
    "country": "GB",
    "location": {
      "longitude": 0.903,
      "latitude": 51.8917
    }
  },
  "7000537": {
    "id": "7000537",
    "name": "Cobham & Stoke Dabernon",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.389917,
      "latitude": 51.318077
    }
  },
  "7000538": {
    "id": "7000538",
    "name": "Coatbridge Central",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.032443,
      "latitude": 55.863213
    }
  },
  "7000539": {
    "id": "7000539",
    "name": "Coatdyke",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.005343,
      "latitude": 55.864567
    }
  },
  "7000540": {
    "id": "7000540",
    "name": "Colne",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.181087,
      "latitude": 53.85478
    }
  },
  "7000541": {
    "id": "7000541",
    "name": "Cromford",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.548788,
      "latitude": 53.112915
    }
  },
  "7000542": {
    "id": "7000542",
    "name": "Cogan",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.189974,
      "latitude": 51.445396
    }
  },
  "7000543": {
    "id": "7000543",
    "name": "Collingham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.748588,
      "latitude": 53.144047
    }
  },
  "7000544": {
    "id": "7000544",
    "name": "Cookham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.721948,
      "latitude": 51.556873
    }
  },
  "7000545": {
    "id": "7000545",
    "name": "Chorleywood",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.51846,
      "latitude": 51.654188
    }
  },
  "7000546": {
    "id": "7000546",
    "name": "Combe",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.392817,
      "latitude": 51.832277
    }
  },
  "7000547": {
    "id": "7000547",
    "name": "Collington",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.457142,
      "latitude": 50.839272
    }
  },
  "7000548": {
    "id": "7000548",
    "name": "Cooden Beach",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.426969,
      "latitude": 50.83271
    }
  },
  "7000549": {
    "id": "7000549",
    "name": "Copplestone",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.751624,
      "latitude": 50.814228
    }
  },
  "7000550": {
    "id": "7000550",
    "name": "Chorley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.626693,
      "latitude": 53.652428
    }
  },
  "7000551": {
    "id": "7000551",
    "name": "Coatbridge Sunnyside",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.027847,
      "latitude": 55.866886
    }
  },
  "7000552": {
    "id": "7000552",
    "name": "Colchester Town",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.904055,
      "latitude": 51.886505
    }
  },
  "7000553": {
    "id": "7000553",
    "name": "Corrour",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.690966,
      "latitude": 56.760181
    }
  },
  "7000554": {
    "id": "7000554",
    "name": "Cowden",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.110653,
      "latitude": 51.155441
    }
  },
  "7000556": {
    "id": "7000556",
    "name": "Croy",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.035697,
      "latitude": 55.955734
    }
  },
  "7000557": {
    "id": "7000557",
    "name": "Christs Hospital",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.363538,
      "latitude": 51.050629
    }
  },
  "7000558": {
    "id": "7000558",
    "name": "Carpenders Park",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.385578,
      "latitude": 51.627885
    }
  },
  "7000559": {
    "id": "7000559",
    "name": "Cradley Heath",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.08976,
      "latitude": 52.469177
    }
  },
  "7000560": {
    "id": "7000560",
    "name": "Caledonian Road & Barnsbury",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.115177,
      "latitude": 51.543301
    }
  },
  "7000561": {
    "id": "7000561",
    "name": "Cardenden",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.261651,
      "latitude": 56.141308
    }
  },
  "7000562": {
    "id": "7000562",
    "name": "Carfin",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.956112,
      "latitude": 55.806938
    }
  },
  "7000563": {
    "id": "7000563",
    "name": "Craigendoran",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.711291,
      "latitude": 55.99485
    }
  },
  "7000564": {
    "id": "7000564",
    "name": "Crews Hill",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.106441,
      "latitude": 51.684334
    }
  },
  "7000565": {
    "id": "7000565",
    "name": "Charing",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.790337,
      "latitude": 51.208649
    }
  },
  "7000566": {
    "id": "7000566",
    "name": "Crianlarich",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.617778,
      "latitude": 56.389652
    }
  },
  "7000567": {
    "id": "7000567",
    "name": "Cromer",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.292778,
      "latitude": 52.930595
    }
  },
  "7000569": {
    "id": "7000569",
    "name": "Chester Road",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.832582,
      "latitude": 52.535575
    }
  },
  "7000570": {
    "id": "7000570",
    "name": "Corpach",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -5.121662,
      "latitude": 56.842724
    }
  },
  "7000571": {
    "id": "7000571",
    "name": "Carrbridge",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.829541,
      "latitude": 57.279873
    }
  },
  "7000572": {
    "id": "7000572",
    "name": "Crossflatts",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.844886,
      "latitude": 53.858829
    }
  },
  "7000573": {
    "id": "7000573",
    "name": "Carntyne",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.17898,
      "latitude": 55.854412
    }
  },
  "7000574": {
    "id": "7000574",
    "name": "Crouch Hill",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.116907,
      "latitude": 51.571205
    }
  },
  "7000575": {
    "id": "7000575",
    "name": "Cricklewood",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.214071,
      "latitude": 51.559227
    }
  },
  "7000576": {
    "id": "7000576",
    "name": "Coryton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.230858,
      "latitude": 51.520512
    }
  },
  "7000577": {
    "id": "7000577",
    "name": "Carshalton Beeches",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.17023,
      "latitude": 51.357117
    }
  },
  "7000578": {
    "id": "7000578",
    "name": "Chelmsford",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.469316,
      "latitude": 51.736595
    }
  },
  "7000579": {
    "id": "7000579",
    "name": "Cross Gates",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.451798,
      "latitude": 53.804638
    }
  },
  "7000580": {
    "id": "7000580",
    "name": "Carshalton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.16693,
      "latitude": 51.367859
    }
  },
  "7000581": {
    "id": "7000581",
    "name": "Cressing",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.580186,
      "latitude": 51.852028
    }
  },
  "7000582": {
    "id": "7000582",
    "name": "Coseley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.086051,
      "latitude": 52.545738
    }
  },
  "7000584": {
    "id": "7000584",
    "name": "Chessington North",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.300661,
      "latitude": 51.364483
    }
  },
  "7000585": {
    "id": "7000585",
    "name": "Croston",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.777717,
      "latitude": 53.66756
    }
  },
  "7000586": {
    "id": "7000586",
    "name": "Cheltenham Spa",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.100245,
      "latitude": 51.896465
    }
  },
  "7000587": {
    "id": "7000587",
    "name": "Chassen Road",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.368171,
      "latitude": 53.44605
    }
  },
  "7000588": {
    "id": "7000588",
    "name": "Chessington South",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.308144,
      "latitude": 51.356491
    }
  },
  "7000589": {
    "id": "7000589",
    "name": "Carnoustie",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.7066,
      "latitude": 56.500618
    }
  },
  "7000590": {
    "id": "7000590",
    "name": "Chatham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.520559,
      "latitude": 51.381161
    }
  },
  "7000591": {
    "id": "7000591",
    "name": "Cartsdyke",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.731633,
      "latitude": 55.942261
    }
  },
  "7000592": {
    "id": "7000592",
    "name": "Catford",
    "isMeta": true,
    "country": "GB",
    "location": {
      "longitude": -0.0207,
      "latitude": 51.4452
    }
  },
  "7000593": {
    "id": "7000593",
    "name": "Cottingham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.406402,
      "latitude": 53.781826
    }
  },
  "7000594": {
    "id": "7000594",
    "name": "Caterham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.078539,
      "latitude": 51.282803
    }
  },
  "7000595": {
    "id": "7000595",
    "name": "Chathill",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.706846,
      "latitude": 55.536404
    }
  },
  "7000596": {
    "id": "7000596",
    "name": "Cattal",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.319808,
      "latitude": 53.997515
    }
  },
  "7000597": {
    "id": "7000597",
    "name": "Chartham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.018303,
      "latitude": 51.256958
    }
  },
  "7000598": {
    "id": "7000598",
    "name": "Charlton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.030852,
      "latitude": 51.486904
    }
  },
  "7000599": {
    "id": "7000599",
    "name": "Castleton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.178125,
      "latitude": 53.591804
    }
  },
  "7000600": {
    "id": "7000600",
    "name": "Cherry Tree",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.518401,
      "latitude": 53.732868
    }
  },
  "7000601": {
    "id": "7000601",
    "name": "Chertsey",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.509667,
      "latitude": 51.387108
    }
  },
  "7000602": {
    "id": "7000602",
    "name": "Chester-Le-Street",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.577847,
      "latitude": 54.854885
    }
  },
  "7000603": {
    "id": "7000603",
    "name": "Chepstow",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.67193,
      "latitude": 51.640137
    }
  },
  "7000604": {
    "id": "7000604",
    "name": "Cottingley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.588832,
      "latitude": 53.767437
    }
  },
  "7000605": {
    "id": "7000605",
    "name": "Culrain",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.405676,
      "latitude": 57.919842
    }
  },
  "7000606": {
    "id": "7000606",
    "name": "Cuddington",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.599329,
      "latitude": 53.23991
    }
  },
  "7000607": {
    "id": "7000607",
    "name": "Cuffley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.109761,
      "latitude": 51.708675
    }
  },
  "7000609": {
    "id": "7000609",
    "name": "Culham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.236445,
      "latitude": 51.653773
    }
  },
  "7000610": {
    "id": "7000610",
    "name": "Cumbernauld",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.982089,
      "latitude": 55.941326
    }
  },
  "7000611": {
    "id": "7000611",
    "name": "Cupar",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.008772,
      "latitude": 56.317043
    }
  },
  "7000612": {
    "id": "7000612",
    "name": "Curriehill",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.317849,
      "latitude": 55.901703
    }
  },
  "7000613": {
    "id": "7000613",
    "name": "Church Stretton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.803485,
      "latitude": 52.536606
    }
  },
  "7000614": {
    "id": "7000614",
    "name": "Cuxton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.462693,
      "latitude": 51.374298
    }
  },
  "7000615": {
    "id": "7000615",
    "name": "Craven Arms",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.837077,
      "latitude": 52.441975
    }
  },
  "7000616": {
    "id": "7000616",
    "name": "Crewe",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.432987,
      "latitude": 53.089607
    }
  },
  "7000617": {
    "id": "7000617",
    "name": "Cwmbran",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.016233,
      "latitude": 51.656544
    }
  },
  "7000618": {
    "id": "7000618",
    "name": "Colwyn Bay",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.725462,
      "latitude": 53.296349
    }
  },
  "7000619": {
    "id": "7000619",
    "name": "Cowdenbeath",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.344314,
      "latitude": 56.111679
    }
  },
  "7000620": {
    "id": "7000620",
    "name": "Crowle",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.817042,
      "latitude": 53.589725
    }
  },
  "7000621": {
    "id": "7000621",
    "name": "Chadwell Heath",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.128263,
      "latitude": 51.567905
    }
  },
  "7000622": {
    "id": "7000622",
    "name": "Crewkerne",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.778815,
      "latitude": 50.873337
    }
  },
  "7000623": {
    "id": "7000623",
    "name": "Crawley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.187083,
      "latitude": 51.111874
    }
  },
  "7000624": {
    "id": "7000624",
    "name": "Cwmbach",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.413774,
      "latitude": 51.701885
    }
  },
  "7000625": {
    "id": "7000625",
    "name": "Crowthorne",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.819194,
      "latitude": 51.366356
    }
  },
  "7000626": {
    "id": "7000626",
    "name": "Crowborough",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.188422,
      "latitude": 51.046085
    }
  },
  "7000628": {
    "id": "7000628",
    "name": "Crowhurst",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.500984,
      "latitude": 50.888702
    }
  },
  "7000629": {
    "id": "7000629",
    "name": "Church & Oswaldtwistle",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.391216,
      "latitude": 53.750431
    }
  },
  "7000630": {
    "id": "7000630",
    "name": "Conwy",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.83046,
      "latitude": 53.280093
    }
  },
  "7000632": {
    "id": "7000632",
    "name": "Cefn-Y-Bedd",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.031972,
      "latitude": 53.098511
    }
  },
  "7000633": {
    "id": "7000633",
    "name": "Crayford",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.178826,
      "latitude": 51.448273
    }
  },
  "7000634": {
    "id": "7000634",
    "name": "Cynghordy",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.747095,
      "latitude": 52.051689
    }
  },
  "7000635": {
    "id": "7000635",
    "name": "Crystal Palace",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.072899,
      "latitude": 51.417603
    }
  },
  "7000636": {
    "id": "7000636",
    "name": "Dagenham Dock",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.14505,
      "latitude": 51.526237
    }
  },
  "7000637": {
    "id": "7000637",
    "name": "Datchet",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.579978,
      "latitude": 51.483303
    }
  },
  "7000638": {
    "id": "7000638",
    "name": "Danescourt",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.23332,
      "latitude": 51.505199
    }
  },
  "7000639": {
    "id": "7000639",
    "name": "Dartford",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.217643,
      "latitude": 51.447548
    }
  },
  "7000640": {
    "id": "7000640",
    "name": "Drayton Green",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.330089,
      "latitude": 51.516326
    }
  },
  "7000641": {
    "id": "7000641",
    "name": "Daisy Hill",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.516212,
      "latitude": 53.539389
    }
  },
  "7000642": {
    "id": "7000642",
    "name": "Dalmally",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.9832,
      "latitude": 56.400272
    }
  },
  "7000643": {
    "id": "7000643",
    "name": "Dalmarnock",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.21647,
      "latitude": 55.839371
    }
  },
  "7000644": {
    "id": "7000644",
    "name": "Danby",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.910704,
      "latitude": 54.466068
    }
  },
  "7000645": {
    "id": "7000645",
    "name": "Drayton Park",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.104723,
      "latitude": 51.552124
    }
  },
  "7000647": {
    "id": "7000647",
    "name": "Darton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.531646,
      "latitude": 53.58836
    }
  },
  "7000648": {
    "id": "7000648",
    "name": "Davenport",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.153234,
      "latitude": 53.390719
    }
  },
  "7000649": {
    "id": "7000649",
    "name": "Darwen",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.464958,
      "latitude": 53.69804
    }
  },
  "7000650": {
    "id": "7000650",
    "name": "Doncaster",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.140225,
      "latitude": 53.521469
    }
  },
  "7000651": {
    "id": "7000651",
    "name": "Didcot Parkway",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.242614,
      "latitude": 51.611275
    }
  },
  "7000652": {
    "id": "7000652",
    "name": "Dundee",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.970576,
      "latitude": 56.456669
    }
  },
  "7000653": {
    "id": "7000653",
    "name": "Denmark Hill",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.089475,
      "latitude": 51.468243
    }
  },
  "7000654": {
    "id": "7000654",
    "name": "Deal",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.398559,
      "latitude": 51.223129
    }
  },
  "7000655": {
    "id": "7000655",
    "name": "Denby Dale",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.663215,
      "latitude": 53.572628
    }
  },
  "7000656": {
    "id": "7000656",
    "name": "Deganwy",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.833424,
      "latitude": 53.294739
    }
  },
  "7000657": {
    "id": "7000657",
    "name": "Denham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.497633,
      "latitude": 51.578495
    }
  },
  "7000658": {
    "id": "7000658",
    "name": "Deighton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.751739,
      "latitude": 53.669018
    }
  },
  "7000660": {
    "id": "7000660",
    "name": "Dean",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.634802,
      "latitude": 51.042629
    }
  },
  "7000661": {
    "id": "7000661",
    "name": "Deptford",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.02711,
      "latitude": 51.478897
    }
  },
  "7000662": {
    "id": "7000662",
    "name": "Delamere",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.666577,
      "latitude": 53.228767
    }
  },
  "7000663": {
    "id": "7000663",
    "name": "Deansgate",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.250061,
      "latitude": 53.473961
    }
  },
  "7000664": {
    "id": "7000664",
    "name": "Dent",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.363987,
      "latitude": 54.282597
    }
  },
  "7000665": {
    "id": "7000665",
    "name": "Devonport",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.171534,
      "latitude": 50.378132
    }
  },
  "7000666": {
    "id": "7000666",
    "name": "Dewsbury",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.633487,
      "latitude": 53.692089
    }
  },
  "7000667": {
    "id": "7000667",
    "name": "Denham Golf Club",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.517774,
      "latitude": 51.580544
    }
  },
  "7000668": {
    "id": "7000668",
    "name": "Dilton Marsh",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.207723,
      "latitude": 51.248928
    }
  },
  "7000669": {
    "id": "7000669",
    "name": "Drigg",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.444066,
      "latitude": 54.376968
    }
  },
  "7000670": {
    "id": "7000670",
    "name": "Disley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.042465,
      "latitude": 53.358146
    }
  },
  "7000671": {
    "id": "7000671",
    "name": "Dinas Rhondda",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.437123,
      "latitude": 51.617073
    }
  },
  "7000672": {
    "id": "7000672",
    "name": "Dinas Powys",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.21839,
      "latitude": 51.431614
    }
  },
  "7000673": {
    "id": "7000673",
    "name": "Dingle Road",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.179776,
      "latitude": 51.440109
    }
  },
  "7000674": {
    "id": "7000674",
    "name": "Dinsdale",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.467051,
      "latitude": 54.51474
    }
  },
  "7000675": {
    "id": "7000675",
    "name": "Dinting",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.970276,
      "latitude": 53.449382
    }
  },
  "7000676": {
    "id": "7000676",
    "name": "Doleham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.610732,
      "latitude": 50.918686
    }
  },
  "7000677": {
    "id": "7000677",
    "name": "Dalton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.179031,
      "latitude": 54.15424
    }
  },
  "7000678": {
    "id": "7000678",
    "name": "Dalwhinnie",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.246498,
      "latitude": 56.934334
    }
  },
  "7000679": {
    "id": "7000679",
    "name": "Dalmeny",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.381645,
      "latitude": 55.986362
    }
  },
  "7000680": {
    "id": "7000680",
    "name": "Dumfries",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.605261,
      "latitude": 55.072395
    }
  },
  "7000681": {
    "id": "7000681",
    "name": "Drumry",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.386583,
      "latitude": 55.904495
    }
  },
  "7000682": {
    "id": "7000682",
    "name": "Dalmuir",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.427038,
      "latitude": 55.911793
    }
  },
  "7000683": {
    "id": "7000683",
    "name": "Dunblane",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.967296,
      "latitude": 56.186001
    }
  },
  "7000684": {
    "id": "7000684",
    "name": "Duncraig",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -5.637282,
      "latitude": 57.336727
    }
  },
  "7000685": {
    "id": "7000685",
    "name": "Dunfermline Town",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.452033,
      "latitude": 56.068233
    }
  },
  "7000686": {
    "id": "7000686",
    "name": "Dunlop",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.532435,
      "latitude": 55.711926
    }
  },
  "7000688": {
    "id": "7000688",
    "name": "Denton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.131648,
      "latitude": 53.457087
    }
  },
  "7000689": {
    "id": "7000689",
    "name": "Danzey",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.819493,
      "latitude": 52.324329
    }
  },
  "7000690": {
    "id": "7000690",
    "name": "Dorchester South",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.437593,
      "latitude": 50.708752
    }
  },
  "7000691": {
    "id": "7000691",
    "name": "Dockyard",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.175957,
      "latitude": 50.382553
    }
  },
  "7000692": {
    "id": "7000692",
    "name": "Dodworth",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.530617,
      "latitude": 53.545216
    }
  },
  "7000693": {
    "id": "7000693",
    "name": "Dolgarrog",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.822808,
      "latitude": 53.186123
    }
  },
  "7000694": {
    "id": "7000694",
    "name": "Dovey Junction",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.925273,
      "latitude": 52.564133
    }
  },
  "7000695": {
    "id": "7000695",
    "name": "Dorking",
    "isMeta": true,
    "country": "GB",
    "location": {
      "longitude": -0.3338,
      "latitude": 51.23228
    }
  },
  "7000696": {
    "id": "7000696",
    "name": "Dolau",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.263955,
      "latitude": 52.295223
    }
  },
  "7000697": {
    "id": "7000697",
    "name": "Downham Market",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.365751,
      "latitude": 52.60471
    }
  },
  "7000698": {
    "id": "7000698",
    "name": "Dore & Totley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.514997,
      "latitude": 53.327625
    }
  },
  "7000699": {
    "id": "7000699",
    "name": "Durrington-On-Sea",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.411463,
      "latitude": 50.817463
    }
  },
  "7000701": {
    "id": "7000701",
    "name": "Dove Holes",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.890678,
      "latitude": 53.300005
    }
  },
  "7000702": {
    "id": "7000702",
    "name": "Dolwyddelan",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.884288,
      "latitude": 53.052105
    }
  },
  "7000703": {
    "id": "7000703",
    "name": "Dumpton Park",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.426291,
      "latitude": 51.345566
    }
  },
  "7000704": {
    "id": "7000704",
    "name": "Drem",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.785752,
      "latitude": 56.005981
    }
  },
  "7000705": {
    "id": "7000705",
    "name": "Dalreoch",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.578226,
      "latitude": 55.947365
    }
  },
  "7000706": {
    "id": "7000706",
    "name": "Dronfield",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.468768,
      "latitude": 53.301357
    }
  },
  "7000707": {
    "id": "7000707",
    "name": "Dorking Deepdene",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.323921,
      "latitude": 51.238918
    }
  },
  "7000709": {
    "id": "7000709",
    "name": "Driffield",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.434627,
      "latitude": 54.001526
    }
  },
  "7000711": {
    "id": "7000711",
    "name": "Drumgelloch",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.95114,
      "latitude": 55.867233
    }
  },
  "7000712": {
    "id": "7000712",
    "name": "Dormans",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.005183,
      "latitude": 51.15567
    }
  },
  "7000713": {
    "id": "7000713",
    "name": "Darnall",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.410661,
      "latitude": 53.381084
    }
  },
  "7000714": {
    "id": "7000714",
    "name": "Droitwich Spa",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.158239,
      "latitude": 52.26862
    }
  },
  "7000715": {
    "id": "7000715",
    "name": "Dorridge",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.753209,
      "latitude": 52.371861
    }
  },
  "7000716": {
    "id": "7000716",
    "name": "Darsham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.522343,
      "latitude": 52.272812
    }
  },
  "7000717": {
    "id": "7000717",
    "name": "Drumchapel",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.364204,
      "latitude": 55.904926
    }
  },
  "7000718": {
    "id": "7000718",
    "name": "Dorking West",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.339762,
      "latitude": 51.236443
    }
  },
  "7000719": {
    "id": "7000719",
    "name": "Dalry",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.711899,
      "latitude": 55.705395
    }
  },
  "7000720": {
    "id": "7000720",
    "name": "Diss",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.123274,
      "latitude": 52.373096
    }
  },
  "7000721": {
    "id": "7000721",
    "name": "Dalston Kingsland",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.074594,
      "latitude": 51.548035
    }
  },
  "7000722": {
    "id": "7000722",
    "name": "Dalston (Cumbria)",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.988866,
      "latitude": 54.846203
    }
  },
  "7000723": {
    "id": "7000723",
    "name": "Darlington",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.54732,
      "latitude": 54.520462
    }
  },
  "7000724": {
    "id": "7000724",
    "name": "Dunton Green",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.171616,
      "latitude": 51.296425
    }
  },
  "7000726": {
    "id": "7000726",
    "name": "Dunkeld & Birnam",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.578097,
      "latitude": 56.557301
    }
  },
  "7000727": {
    "id": "7000727",
    "name": "Dumbarton Central",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.56697,
      "latitude": 55.946705
    }
  },
  "7000728": {
    "id": "7000728",
    "name": "Duddeston",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.871842,
      "latitude": 52.488018
    }
  },
  "7000729": {
    "id": "7000729",
    "name": "Dumbarton East",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.55387,
      "latitude": 55.942478
    }
  },
  "7000730": {
    "id": "7000730",
    "name": "Duffield",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.486035,
      "latitude": 52.987713
    }
  },
  "7000731": {
    "id": "7000731",
    "name": "Duirinish",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -5.692103,
      "latitude": 57.319847
    }
  },
  "7000732": {
    "id": "7000732",
    "name": "Duke Street",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.212814,
      "latitude": 55.859207
    }
  },
  "7000733": {
    "id": "7000733",
    "name": "Dullingham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.366197,
      "latitude": 52.200943
    }
  },
  "7000734": {
    "id": "7000734",
    "name": "Dumbreck",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.309216,
      "latitude": 55.841255
    }
  },
  "7000735": {
    "id": "7000735",
    "name": "Dunbar",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.514625,
      "latitude": 55.998428
    }
  },
  "7000736": {
    "id": "7000736",
    "name": "Dudley Port",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.049401,
      "latitude": 52.524517
    }
  },
  "7000737": {
    "id": "7000737",
    "name": "Durham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.581746,
      "latitude": 54.779408
    }
  },
  "7000738": {
    "id": "7000738",
    "name": "Duns",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.342808,
      "latitude": 55.778865
    }
  },
  "7000739": {
    "id": "7000739",
    "name": "Dunston",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.648648,
      "latitude": 54.952164
    }
  },
  "7000740": {
    "id": "7000740",
    "name": "Dovercourt",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.280724,
      "latitude": 51.938892
    }
  },
  "7000741": {
    "id": "7000741",
    "name": "Dingwall",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.422611,
      "latitude": 57.594238
    }
  },
  "7000742": {
    "id": "7000742",
    "name": "Dorchester West",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.443274,
      "latitude": 50.710526
    }
  },
  "7000743": {
    "id": "7000743",
    "name": "Dawlish",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.464583,
      "latitude": 50.580692
    }
  },
  "7000744": {
    "id": "7000744",
    "name": "Dawlish Warren",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.443903,
      "latitude": 50.599311
    }
  },
  "7000745": {
    "id": "7000745",
    "name": "Derby",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.462555,
      "latitude": 52.916381
    }
  },
  "7000746": {
    "id": "7000746",
    "name": "Dyce",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.191978,
      "latitude": 57.205002
    }
  },
  "7000747": {
    "id": "7000747",
    "name": "Dyffryn Ardudwy",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.104242,
      "latitude": 52.78857
    }
  },
  "7000748": {
    "id": "7000748",
    "name": "Derby Road",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.182332,
      "latitude": 52.04953
    }
  },
  "7000749": {
    "id": "7000749",
    "name": "Ely",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.266105,
      "latitude": 52.390846
    }
  },
  "7000750": {
    "id": "7000750",
    "name": "Eastbourne",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.281847,
      "latitude": 50.769085
    }
  },
  "7000751": {
    "id": "7000751",
    "name": "Eaglescliffe",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.349426,
      "latitude": 54.529449
    }
  },
  "7000752": {
    "id": "7000752",
    "name": "Ealing Broadway",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.300843,
      "latitude": 51.51466
    }
  },
  "7000753": {
    "id": "7000753",
    "name": "East Boldon",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.420767,
      "latitude": 54.9468
    }
  },
  "7000754": {
    "id": "7000754",
    "name": "Earlestown",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.637674,
      "latitude": 53.451139
    }
  },
  "7000755": {
    "id": "7000755",
    "name": "Earley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.917989,
      "latitude": 51.441051
    }
  },
  "7000756": {
    "id": "7000756",
    "name": "Edinburgh Waverley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.188236,
      "latitude": 55.952442
    }
  },
  "7000757": {
    "id": "7000757",
    "name": "Eastbrook",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.207031,
      "latitude": 51.437126
    }
  },
  "7000758": {
    "id": "7000758",
    "name": "Edenbridge Town",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.06689,
      "latitude": 51.200287
    }
  },
  "7000759": {
    "id": "7000759",
    "name": "Eccles",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.333014,
      "latitude": 53.485443
    }
  },
  "7000760": {
    "id": "7000760",
    "name": "Eccles Road",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.969656,
      "latitude": 52.470585
    }
  },
  "7000762": {
    "id": "7000762",
    "name": "Eccleston Park",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.780555,
      "latitude": 53.430665
    }
  },
  "7000763": {
    "id": "7000763",
    "name": "East Croydon",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.093335,
      "latitude": 51.375679
    }
  },
  "7000764": {
    "id": "7000764",
    "name": "Edale",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.817395,
      "latitude": 53.36477
    }
  },
  "7000765": {
    "id": "7000765",
    "name": "Edenbridge",
    "isMeta": true,
    "country": "GB",
    "location": {
      "longitude": 0.065,
      "latitude": 51.197
    }
  },
  "7000766": {
    "id": "7000766",
    "name": "Edge Hill",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.946986,
      "latitude": 53.402663
    }
  },
  "7000767": {
    "id": "7000767",
    "name": "East Didsbury",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.22111,
      "latitude": 53.410206
    }
  },
  "7000768": {
    "id": "7000768",
    "name": "Eden Park",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.026587,
      "latitude": 51.390762
    }
  },
  "7000769": {
    "id": "7000769",
    "name": "East Dulwich",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.081151,
      "latitude": 51.460911
    }
  },
  "7000770": {
    "id": "7000770",
    "name": "Effingham Junction",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.419536,
      "latitude": 51.291504
    }
  },
  "7000771": {
    "id": "7000771",
    "name": "East Farleigh",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.48498,
      "latitude": 51.255112
    }
  },
  "7000772": {
    "id": "7000772",
    "name": "Eggesford",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.875235,
      "latitude": 50.887848
    }
  },
  "7000773": {
    "id": "7000773",
    "name": "East Garforth",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.363933,
      "latitude": 53.791622
    }
  },
  "7000774": {
    "id": "7000774",
    "name": "Egham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.545701,
      "latitude": 51.428925
    }
  },
  "7000775": {
    "id": "7000775",
    "name": "East Grinstead",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.017887,
      "latitude": 51.126213
    }
  },
  "7000776": {
    "id": "7000776",
    "name": "Egton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.761896,
      "latitude": 54.437679
    }
  },
  "7000777": {
    "id": "7000777",
    "name": "Exhibition Centre",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.283207,
      "latitude": 55.860619
    }
  },
  "7000779": {
    "id": "7000779",
    "name": "East Kilbride",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.18199,
      "latitude": 55.765388
    }
  },
  "7000780": {
    "id": "7000780",
    "name": "Elgin",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.31163,
      "latitude": 57.64299
    }
  },
  "7000781": {
    "id": "7000781",
    "name": "Elstree & Borehamwood",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.279779,
      "latitude": 51.652836
    }
  },
  "7000782": {
    "id": "7000782",
    "name": "Elephant & Castle",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.098462,
      "latitude": 51.494469
    }
  },
  "7000783": {
    "id": "7000783",
    "name": "Elmers End",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.049263,
      "latitude": 51.398335
    }
  },
  "7000785": {
    "id": "7000785",
    "name": "Elmswell",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.911625,
      "latitude": 52.238201
    }
  },
  "7000786": {
    "id": "7000786",
    "name": "Elton & Orston",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.855362,
      "latitude": 52.951843
    }
  },
  "7000787": {
    "id": "7000787",
    "name": "Ellesmere Port",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.895403,
      "latitude": 53.282097
    }
  },
  "7000788": {
    "id": "7000788",
    "name": "Elsecar",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.428617,
      "latitude": 53.498924
    }
  },
  "7000789": {
    "id": "7000789",
    "name": "Eltham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.0496,
      "latitude": 51.455101
    }
  },
  "7000790": {
    "id": "7000790",
    "name": "Elmstead Woods",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.043594,
      "latitude": 51.417435
    }
  },
  "7000791": {
    "id": "7000791",
    "name": "East Malling",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.439308,
      "latitude": 51.285748
    }
  },
  "7000792": {
    "id": "7000792",
    "name": "Emerson Park",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.220658,
      "latitude": 51.56889
    }
  },
  "7000793": {
    "id": "7000793",
    "name": "Emsworth",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.938784,
      "latitude": 50.851326
    }
  },
  "7000794": {
    "id": "7000794",
    "name": "Enfield Chase",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.090404,
      "latitude": 51.652607
    }
  },
  "7000795": {
    "id": "7000795",
    "name": "Enfield Lock",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.028875,
      "latitude": 51.671379
    }
  },
  "7000796": {
    "id": "7000796",
    "name": "Enfield Town",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.078891,
      "latitude": 51.651524
    }
  },
  "7000797": {
    "id": "7000797",
    "name": "Entwistle",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.413983,
      "latitude": 53.655591
    }
  },
  "7000798": {
    "id": "7000798",
    "name": "Epsom",
    "isMeta": true,
    "country": "GB",
    "location": {
      "longitude": -0.267,
      "latitude": 51.336
    }
  },
  "7000799": {
    "id": "7000799",
    "name": "Epsom Downs",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.243411,
      "latitude": 51.321365
    }
  },
  "7000800": {
    "id": "7000800",
    "name": "Erdington",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.839297,
      "latitude": 52.528435
    }
  },
  "7000801": {
    "id": "7000801",
    "name": "Earlsfield",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.188423,
      "latitude": 51.441929
    }
  },
  "7000802": {
    "id": "7000802",
    "name": "Erith",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.174651,
      "latitude": 51.481621
    }
  },
  "7000803": {
    "id": "7000803",
    "name": "Eridge",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.200452,
      "latitude": 51.089024
    }
  },
  "7000804": {
    "id": "7000804",
    "name": "Earlston",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.68,
      "latitude": 55.639072
    }
  },
  "7000805": {
    "id": "7000805",
    "name": "Earlswood (Surrey)",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.171078,
      "latitude": 51.227631
    }
  },
  "7000806": {
    "id": "7000806",
    "name": "Esher",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.354714,
      "latitude": 51.379642
    }
  },
  "7000807": {
    "id": "7000807",
    "name": "Elsenham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.22779,
      "latitude": 51.92038
    }
  },
  "7000808": {
    "id": "7000808",
    "name": "Essex Road",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.096552,
      "latitude": 51.540302
    }
  },
  "7000809": {
    "id": "7000809",
    "name": "Etchingham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.441935,
      "latitude": 51.010479
    }
  },
  "7000811": {
    "id": "7000811",
    "name": "Easterhouse",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.107389,
      "latitude": 55.860157
    }
  },
  "7000812": {
    "id": "7000812",
    "name": "East Tilbury",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.412479,
      "latitude": 51.485065
    }
  },
  "7000813": {
    "id": "7000813",
    "name": "Eastleigh",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.350563,
      "latitude": 50.968559
    }
  },
  "7000814": {
    "id": "7000814",
    "name": "Eastrington",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.786612,
      "latitude": 53.75481
    }
  },
  "7000815": {
    "id": "7000815",
    "name": "Evesham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.947413,
      "latitude": 52.098793
    }
  },
  "7000816": {
    "id": "7000816",
    "name": "Ewell East",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.24106,
      "latitude": 51.345612
    }
  },
  "7000817": {
    "id": "7000817",
    "name": "East Worthing",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.354517,
      "latitude": 50.822071
    }
  },
  "7000818": {
    "id": "7000818",
    "name": "Ewell West",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.256711,
      "latitude": 51.349445
    }
  },
  "7000819": {
    "id": "7000819",
    "name": "Exeter Central",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.532973,
      "latitude": 50.726471
    }
  },
  "7000820": {
    "id": "7000820",
    "name": "Exeter St Davids",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.544387,
      "latitude": 50.729019
    }
  },
  "7000821": {
    "id": "7000821",
    "name": "Exmouth",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.415035,
      "latitude": 50.620937
    }
  },
  "7000822": {
    "id": "7000822",
    "name": "Exton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.443337,
      "latitude": 50.668255
    }
  },
  "7000823": {
    "id": "7000823",
    "name": "Exeter St Thomas",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.538759,
      "latitude": 50.716529
    }
  },
  "7000824": {
    "id": "7000824",
    "name": "Eynsford",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.203465,
      "latitude": 51.362377
    }
  },
  "7000825": {
    "id": "7000825",
    "name": "Falkirk High",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.792276,
      "latitude": 55.991863
    }
  },
  "7000826": {
    "id": "7000826",
    "name": "Faversham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.891278,
      "latitude": 51.311436
    }
  },
  "7000827": {
    "id": "7000827",
    "name": "Fairbourne",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.049464,
      "latitude": 52.696018
    }
  },
  "7000828": {
    "id": "7000828",
    "name": "Falconwood",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.078571,
      "latitude": 51.459087
    }
  },
  "7000829": {
    "id": "7000829",
    "name": "Fairfield",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.14581,
      "latitude": 53.471215
    }
  },
  "7000831": {
    "id": "7000831",
    "name": "Fairlie",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.853834,
      "latitude": 55.752514
    }
  },
  "7000832": {
    "id": "7000832",
    "name": "North Fambridge",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.681703,
      "latitude": 51.64859
    }
  },
  "7000833": {
    "id": "7000833",
    "name": "Fareham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.19162,
      "latitude": 50.853352
    }
  },
  "7000834": {
    "id": "7000834",
    "name": "Fauldhouse",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.719006,
      "latitude": 55.822163
    }
  },
  "7000835": {
    "id": "7000835",
    "name": "Fairwater",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.232963,
      "latitude": 51.491714
    }
  },
  "7000836": {
    "id": "7000836",
    "name": "Faygate",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.263403,
      "latitude": 51.095943
    }
  },
  "7000837": {
    "id": "7000837",
    "name": "Fazakerley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.936729,
      "latitude": 53.469063
    }
  },
  "7000838": {
    "id": "7000838",
    "name": "Farnborough Main",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.756436,
      "latitude": 51.296471
    }
  },
  "7000839": {
    "id": "7000839",
    "name": "Farnborough North",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.743385,
      "latitude": 51.301723
    }
  },
  "7000840": {
    "id": "7000840",
    "name": "Farncombe",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.604522,
      "latitude": 51.197639
    }
  },
  "7000841": {
    "id": "7000841",
    "name": "Fearn",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.994245,
      "latitude": 57.777828
    }
  },
  "7000842": {
    "id": "7000842",
    "name": "Ferriby",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.508878,
      "latitude": 53.716625
    }
  },
  "7000843": {
    "id": "7000843",
    "name": "Feltham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.40983,
      "latitude": 51.447845
    }
  },
  "7000844": {
    "id": "7000844",
    "name": "Felixstowe",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.352707,
      "latitude": 51.967449
    }
  },
  "7000845": {
    "id": "7000845",
    "name": "Feniton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.285259,
      "latitude": 50.787022
    }
  },
  "7000846": {
    "id": "7000846",
    "name": "Fernhill",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.394469,
      "latitude": 51.685932
    }
  },
  "7000847": {
    "id": "7000847",
    "name": "Fenny Stratford",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.716636,
      "latitude": 52.000103
    }
  },
  "7000848": {
    "id": "7000848",
    "name": "Ffairfach",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.992916,
      "latitude": 51.87244
    }
  },
  "7000849": {
    "id": "7000849",
    "name": "Falkirk Grahamston",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.786359,
      "latitude": 56.002735
    }
  },
  "7000850": {
    "id": "7000850",
    "name": "Farnham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.793093,
      "latitude": 51.211422
    }
  },
  "7000851": {
    "id": "7000851",
    "name": "Freshford",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.30146,
      "latitude": 51.342251
    }
  },
  "7000852": {
    "id": "7000852",
    "name": "Farningham Road",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.235533,
      "latitude": 51.401337
    }
  },
  "7000853": {
    "id": "7000853",
    "name": "Fishguard Harbour",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.985713,
      "latitude": 52.011505
    }
  },
  "7000854": {
    "id": "7000854",
    "name": "Fishbourne (Sussex)",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.815495,
      "latitude": 50.839352
    }
  },
  "7000855": {
    "id": "7000855",
    "name": "Fiskerton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.912181,
      "latitude": 53.060253
    }
  },
  "7000856": {
    "id": "7000856",
    "name": "Filey",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.293351,
      "latitude": 54.209946
    }
  },
  "7000857": {
    "id": "7000857",
    "name": "Finsbury Park",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.105642,
      "latitude": 51.564724
    }
  },
  "7000858": {
    "id": "7000858",
    "name": "Finstock",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.47003,
      "latitude": 51.85305
    }
  },
  "7000860": {
    "id": "7000860",
    "name": "Five Ways",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.913116,
      "latitude": 52.470078
    }
  },
  "7000861": {
    "id": "7000861",
    "name": "Fitzwilliam",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.375391,
      "latitude": 53.632587
    }
  },
  "7000862": {
    "id": "7000862",
    "name": "Fleet",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.831169,
      "latitude": 51.290947
    }
  },
  "7000863": {
    "id": "7000863",
    "name": "Flowery Field",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.080965,
      "latitude": 53.461737
    }
  },
  "7000864": {
    "id": "7000864",
    "name": "Flimby",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.520544,
      "latitude": 54.689815
    }
  },
  "7000865": {
    "id": "7000865",
    "name": "Flint",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.13302,
      "latitude": 53.249516
    }
  },
  "7000866": {
    "id": "7000866",
    "name": "Falmer",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.087364,
      "latitude": 50.862064
    }
  },
  "7000867": {
    "id": "7000867",
    "name": "Falmouth Docks",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -5.0559,
      "latitude": 50.15075
    }
  },
  "7000868": {
    "id": "7000868",
    "name": "Falmouth Town",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -5.065443,
      "latitude": 50.148392
    }
  },
  "7000869": {
    "id": "7000869",
    "name": "Ford",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.578611,
      "latitude": 50.829506
    }
  },
  "7000870": {
    "id": "7000870",
    "name": "Formby",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.070706,
      "latitude": 53.553796
    }
  },
  "7000871": {
    "id": "7000871",
    "name": "Falls of Cruachan",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -5.114992,
      "latitude": 56.386242
    }
  },
  "7000872": {
    "id": "7000872",
    "name": "Forest Gate",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.023568,
      "latitude": 51.549976
    }
  },
  "7000873": {
    "id": "7000873",
    "name": "Forest Hill",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.053297,
      "latitude": 51.438869
    }
  },
  "7000874": {
    "id": "7000874",
    "name": "Fort Matilda",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.7953,
      "latitude": 55.958809
    }
  },
  "7000875": {
    "id": "7000875",
    "name": "Forres",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.62847,
      "latitude": 57.609661
    }
  },
  "7000876": {
    "id": "7000876",
    "name": "Forsinard",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.896903,
      "latitude": 58.356998
    }
  },
  "7000877": {
    "id": "7000877",
    "name": "Foxton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.056572,
      "latitude": 52.119526
    }
  },
  "7000878": {
    "id": "7000878",
    "name": "Four Oaks",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.8273,
      "latitude": 52.579662
    }
  },
  "7000879": {
    "id": "7000879",
    "name": "Folkestone West",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.154209,
      "latitude": 51.085163
    }
  },
  "7000880": {
    "id": "7000880",
    "name": "Foxfield",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.215796,
      "latitude": 54.259041
    }
  },
  "7000881": {
    "id": "7000881",
    "name": "Frant",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.294034,
      "latitude": 51.104321
    }
  },
  "7000882": {
    "id": "7000882",
    "name": "Fratton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.073422,
      "latitude": 50.795818
    }
  },
  "7000883": {
    "id": "7000883",
    "name": "Freshfield",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.072014,
      "latitude": 53.566494
    }
  },
  "7000884": {
    "id": "7000884",
    "name": "Finchley Road & Frognal",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.183324,
      "latitude": 51.550198
    }
  },
  "7000885": {
    "id": "7000885",
    "name": "Frimley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.747426,
      "latitude": 51.311653
    }
  },
  "7000886": {
    "id": "7000886",
    "name": "Frome",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.309302,
      "latitude": 51.227131
    }
  },
  "7000887": {
    "id": "7000887",
    "name": "Frodsham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.723145,
      "latitude": 53.295853
    }
  },
  "7000888": {
    "id": "7000888",
    "name": "Farringdon",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.104665,
      "latitude": 51.520071
    }
  },
  "7000889": {
    "id": "7000889",
    "name": "Ferryside",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.36952,
      "latitude": 51.76833
    }
  },
  "7000890": {
    "id": "7000890",
    "name": "Frinton-On-Sea",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.242907,
      "latitude": 51.838314
    }
  },
  "7000891": {
    "id": "7000891",
    "name": "Farnworth",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.387857,
      "latitude": 53.549999
    }
  },
  "7000892": {
    "id": "7000892",
    "name": "Frizinghall",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.769072,
      "latitude": 53.820957
    }
  },
  "7000893": {
    "id": "7000893",
    "name": "Flitwick",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.4952,
      "latitude": 52.003457
    }
  },
  "7000894": {
    "id": "7000894",
    "name": "Fulwell",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.349893,
      "latitude": 51.433525
    }
  },
  "7000895": {
    "id": "7000895",
    "name": "Furze Platt",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.728467,
      "latitude": 51.533082
    }
  },
  "7000896": {
    "id": "7000896",
    "name": "Furness Vale",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.989445,
      "latitude": 53.348385
    }
  },
  "7000897": {
    "id": "7000897",
    "name": "Fort William",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -5.106721,
      "latitude": 56.820625
    }
  },
  "7000898": {
    "id": "7000898",
    "name": "Flixton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.383878,
      "latitude": 53.443746
    }
  },
  "7000899": {
    "id": "7000899",
    "name": "Girvan",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.848927,
      "latitude": 55.246517
    }
  },
  "7000900": {
    "id": "7000900",
    "name": "Gatwick Airport",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.161022,
      "latitude": 51.156425
    }
  },
  "7000901": {
    "id": "7000901",
    "name": "Garscadden",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.364757,
      "latitude": 55.88784
    }
  },
  "7000902": {
    "id": "7000902",
    "name": "Garsdale",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.325891,
      "latitude": 54.32135
    }
  },
  "7000903": {
    "id": "7000903",
    "name": "Garforth Station",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.382083,
      "latitude": 53.796211
    }
  },
  "7000904": {
    "id": "7000904",
    "name": "Gargrave",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.105171,
      "latitude": 53.97842
    }
  },
  "7000907": {
    "id": "7000907",
    "name": "Garelochhead",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.826544,
      "latitude": 56.079449
    }
  },
  "7000908": {
    "id": "7000908",
    "name": "Garston (Hertfordshire)",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.381689,
      "latitude": 51.686685
    }
  },
  "7000909": {
    "id": "7000909",
    "name": "Garswood",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.672149,
      "latitude": 53.488518
    }
  },
  "7000910": {
    "id": "7000910",
    "name": "Great Ayton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.113845,
      "latitude": 54.4902
    }
  },
  "7000911": {
    "id": "7000911",
    "name": "Gainsborough Central",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.769674,
      "latitude": 53.399574
    }
  },
  "7000912": {
    "id": "7000912",
    "name": "Grimsby Docks",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.075873,
      "latitude": 53.574699
    }
  },
  "7000913": {
    "id": "7000913",
    "name": "Great Bentley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.065258,
      "latitude": 51.85207
    }
  },
  "7000914": {
    "id": "7000914",
    "name": "Gainsborough Lea Road",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.768558,
      "latitude": 53.386078
    }
  },
  "7000915": {
    "id": "7000915",
    "name": "Goring-By-Sea",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.432751,
      "latitude": 50.817753
    }
  },
  "7000916": {
    "id": "7000916",
    "name": "Grimsby Town",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.086922,
      "latitude": 53.564091
    }
  },
  "7000917": {
    "id": "7000917",
    "name": "Glasgow Central",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.259208,
      "latitude": 55.860157
    }
  },
  "7000918": {
    "id": "7000918",
    "name": "Great Chesterford",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.1939,
      "latitude": 52.060402
    }
  },
  "7000919": {
    "id": "7000919",
    "name": "Great Coates",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.128701,
      "latitude": 53.575542
    }
  },
  "7000920": {
    "id": "7000920",
    "name": "Glasgow Queen Street",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.251385,
      "latitude": 55.863003
    }
  },
  "7000921": {
    "id": "7000921",
    "name": "Gloucester",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.238141,
      "latitude": 51.864799
    }
  },
  "7000922": {
    "id": "7000922",
    "name": "Gordon Hill",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.094289,
      "latitude": 51.66346
    }
  },
  "7000923": {
    "id": "7000923",
    "name": "Georgemas Junction",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.45212,
      "latitude": 58.513721
    }
  },
  "7000924": {
    "id": "7000924",
    "name": "Gerrards Cross",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.555367,
      "latitude": 51.588883
    }
  },
  "7000925": {
    "id": "7000925",
    "name": "Gleneagles",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.7312,
      "latitude": 56.274902
    }
  },
  "7000926": {
    "id": "7000926",
    "name": "Greenford Station",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.3463,
      "latitude": 51.54235
    }
  },
  "7000928": {
    "id": "7000928",
    "name": "Grange-Over-Sands",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.902752,
      "latitude": 54.195282
    }
  },
  "7000929": {
    "id": "7000929",
    "name": "Grangetown",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.189097,
      "latitude": 51.466984
    }
  },
  "7000930": {
    "id": "7000930",
    "name": "Grantham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.642438,
      "latitude": 52.906448
    }
  },
  "7000931": {
    "id": "7000931",
    "name": "Gathurst",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.694418,
      "latitude": 53.559399
    }
  },
  "7000932": {
    "id": "7000932",
    "name": "Giffnock",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.294289,
      "latitude": 55.804688
    }
  },
  "7000933": {
    "id": "7000933",
    "name": "Gilfach Fargoed",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.226604,
      "latitude": 51.684208
    }
  },
  "7000934": {
    "id": "7000934",
    "name": "Giggleswick",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.302644,
      "latitude": 54.061775
    }
  },
  "7000935": {
    "id": "7000935",
    "name": "Gipsy Hill",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.084096,
      "latitude": 51.424984
    }
  },
  "7000936": {
    "id": "7000936",
    "name": "Gilberdyke",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.732223,
      "latitude": 53.747955
    }
  },
  "7000937": {
    "id": "7000937",
    "name": "Gidea Park",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.205411,
      "latitude": 51.581772
    }
  },
  "7000938": {
    "id": "7000938",
    "name": "Gillingham (Kent)",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.549618,
      "latitude": 51.386829
    }
  },
  "7000939": {
    "id": "7000939",
    "name": "Glenfinnan",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -5.449219,
      "latitude": 56.872753
    }
  },
  "7000940": {
    "id": "7000940",
    "name": "Glaisdale",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.794221,
      "latitude": 54.439796
    }
  },
  "7000941": {
    "id": "7000941",
    "name": "Glan Conwy",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.796892,
      "latitude": 53.266644
    }
  },
  "7000942": {
    "id": "7000942",
    "name": "Goole",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.872907,
      "latitude": 53.704426
    }
  },
  "7000943": {
    "id": "7000943",
    "name": "Gillingham (Dorset)",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.272361,
      "latitude": 51.033886
    }
  },
  "7000944": {
    "id": "7000944",
    "name": "Gunnislake",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.219437,
      "latitude": 50.515992
    }
  },
  "7000945": {
    "id": "7000945",
    "name": "Glengarnock",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.674364,
      "latitude": 55.738579
    }
  },
  "7000946": {
    "id": "7000946",
    "name": "Glossop",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.949403,
      "latitude": 53.444503
    }
  },
  "7000947": {
    "id": "7000947",
    "name": "Glynde",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.06883,
      "latitude": 50.859398
    }
  },
  "7000948": {
    "id": "7000948",
    "name": "Glazebrook",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.461152,
      "latitude": 53.428076
    }
  },
  "7000949": {
    "id": "7000949",
    "name": "Great Malvern",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.318289,
      "latitude": 52.109165
    }
  },
  "7000950": {
    "id": "7000950",
    "name": "Metrocentre",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.662656,
      "latitude": 54.958492
    }
  },
  "7000951": {
    "id": "7000951",
    "name": "Great Missenden",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.709132,
      "latitude": 51.703304
    }
  },
  "7000952": {
    "id": "7000952",
    "name": "Grosmont",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.724937,
      "latitude": 54.436394
    }
  },
  "7000953": {
    "id": "7000953",
    "name": "Greenhithe for Bluewater",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.279694,
      "latitude": 51.450855
    }
  },
  "7000954": {
    "id": "7000954",
    "name": "Gobowen",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.036019,
      "latitude": 52.893501
    }
  },
  "7000955": {
    "id": "7000955",
    "name": "Godalming",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.619175,
      "latitude": 51.186115
    }
  },
  "7000956": {
    "id": "7000956",
    "name": "Godley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.049649,
      "latitude": 53.448151
    }
  },
  "7000957": {
    "id": "7000957",
    "name": "Gomshall",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.442065,
      "latitude": 51.218964
    }
  },
  "7000958": {
    "id": "7000958",
    "name": "Goodmayes",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.112277,
      "latitude": 51.565502
    }
  },
  "7000959": {
    "id": "7000959",
    "name": "Godstone",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.051188,
      "latitude": 51.217606
    }
  },
  "7000960": {
    "id": "7000960",
    "name": "Goldthorpe",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.313488,
      "latitude": 53.533379
    }
  },
  "7000961": {
    "id": "7000961",
    "name": "Gourock",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.818021,
      "latitude": 55.962788
    }
  },
  "7000962": {
    "id": "7000962",
    "name": "Gowerton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.035124,
      "latitude": 51.648701
    }
  },
  "7000963": {
    "id": "7000963",
    "name": "Goxhill",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.337699,
      "latitude": 53.676613
    }
  },
  "7000964": {
    "id": "7000964",
    "name": "Gospel Oak",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.150737,
      "latitude": 51.555546
    }
  },
  "7000965": {
    "id": "7000965",
    "name": "Grange Park",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.096599,
      "latitude": 51.642811
    }
  },
  "7000966": {
    "id": "7000966",
    "name": "Grateley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.619497,
      "latitude": 51.170269
    }
  },
  "7000967": {
    "id": "7000967",
    "name": "Greenbank",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.533185,
      "latitude": 53.251664
    }
  },
  "7000968": {
    "id": "7000968",
    "name": "Greenock Central",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.752692,
      "latitude": 55.945385
    }
  },
  "7000969": {
    "id": "7000969",
    "name": "Greenfield",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.014189,
      "latitude": 53.538835
    }
  },
  "7000971": {
    "id": "7000971",
    "name": "Greenfaulds",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.999232,
      "latitude": 55.932064
    }
  },
  "7000972": {
    "id": "7000972",
    "name": "Garrowhill",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.129497,
      "latitude": 55.855286
    }
  },
  "7000973": {
    "id": "7000973",
    "name": "Grindleford",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.62629,
      "latitude": 53.30555
    }
  },
  "7000974": {
    "id": "7000974",
    "name": "Green Lane",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.016281,
      "latitude": 53.38271
    }
  },
  "7000976": {
    "id": "7000976",
    "name": "Grove Park",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.022597,
      "latitude": 51.430389
    }
  },
  "7000977": {
    "id": "7000977",
    "name": "Green Road",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.245602,
      "latitude": 54.244748
    }
  },
  "7000978": {
    "id": "7000978",
    "name": "Goring & Streatley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.133051,
      "latitude": 51.521428
    }
  },
  "7000979": {
    "id": "7000979",
    "name": "Garth",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.531142,
      "latitude": 52.133816
    }
  },
  "7000980": {
    "id": "7000980",
    "name": "Garve",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.688429,
      "latitude": 57.613129
    }
  },
  "7000981": {
    "id": "7000981",
    "name": "Greenock West",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.768866,
      "latitude": 55.94772
    }
  },
  "7000982": {
    "id": "7000982",
    "name": "Grays",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.322719,
      "latitude": 51.476089
    }
  },
  "7000983": {
    "id": "7000983",
    "name": "Golf Street",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.719541,
      "latitude": 56.497852
    }
  },
  "7000984": {
    "id": "7000984",
    "name": "Golspie",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.98806,
      "latitude": 57.971092
    }
  },
  "7000985": {
    "id": "7000985",
    "name": "Goostrey",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.32628,
      "latitude": 53.222634
    }
  },
  "7000986": {
    "id": "7000986",
    "name": "Gorton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.167182,
      "latitude": 53.468712
    }
  },
  "7000987": {
    "id": "7000987",
    "name": "Gatley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.230052,
      "latitude": 53.394001
    }
  },
  "7000988": {
    "id": "7000988",
    "name": "Guildford",
    "isMeta": true,
    "country": "GB",
    "location": {
      "longitude": -0.5703,
      "latitude": 51.2365
    }
  },
  "7000989": {
    "id": "7000989",
    "name": "Guide Bridge",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.112961,
      "latitude": 53.474171
    }
  },
  "7000991": {
    "id": "7000991",
    "name": "Guiseley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.715537,
      "latitude": 53.875668
    }
  },
  "7000992": {
    "id": "7000992",
    "name": "Gunnersbury",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.275766,
      "latitude": 51.491814
    }
  },
  "7000993": {
    "id": "7000993",
    "name": "Gunton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.348821,
      "latitude": 52.866077
    }
  },
  "7000994": {
    "id": "7000994",
    "name": "Gravelly Hill",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.852612,
      "latitude": 52.514969
    }
  },
  "7000995": {
    "id": "7000995",
    "name": "Gravesend",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.36699,
      "latitude": 51.441029
    }
  },
  "7000996": {
    "id": "7000996",
    "name": "Greenwich",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.014198,
      "latitude": 51.477779
    }
  },
  "7000997": {
    "id": "7000997",
    "name": "Gwersyllt",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.017913,
      "latitude": 53.072559
    }
  },
  "7000998": {
    "id": "7000998",
    "name": "Gypsy Lane",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.179375,
      "latitude": 54.532902
    }
  },
  "7000999": {
    "id": "7000999",
    "name": "Great Yarmouth",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.720949,
      "latitude": 52.612122
    }
  },
  "7001000": {
    "id": "7001000",
    "name": "Hastings",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.57608,
      "latitude": 50.858288
    }
  },
  "7001001": {
    "id": "7001001",
    "name": "Habrough",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.267936,
      "latitude": 53.605507
    }
  },
  "7001002": {
    "id": "7001002",
    "name": "Hackbridge",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.15358,
      "latitude": 51.378437
    }
  },
  "7001003": {
    "id": "7001003",
    "name": "Hackney Central",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.055896,
      "latitude": 51.546825
    }
  },
  "7001004": {
    "id": "7001004",
    "name": "Hackney Downs",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.060144,
      "latitude": 51.548695
    }
  },
  "7001005": {
    "id": "7001005",
    "name": "Hadfield",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.965429,
      "latitude": 53.460873
    }
  },
  "7001006": {
    "id": "7001006",
    "name": "Hairmyres",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.220047,
      "latitude": 55.762012
    }
  },
  "7001007": {
    "id": "7001007",
    "name": "Hale",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.347383,
      "latitude": 53.378669
    }
  },
  "7001008": {
    "id": "7001008",
    "name": "Hamble",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.329173,
      "latitude": 50.871311
    }
  },
  "7001009": {
    "id": "7001009",
    "name": "Hanborough",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.373471,
      "latitude": 51.825172
    }
  },
  "7001010": {
    "id": "7001010",
    "name": "Hapton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.318115,
      "latitude": 53.781393
    }
  },
  "7001011": {
    "id": "7001011",
    "name": "Hall Road",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.049607,
      "latitude": 53.497442
    }
  },
  "7001012": {
    "id": "7001012",
    "name": "Haslemere",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.719162,
      "latitude": 51.089237
    }
  },
  "7001013": {
    "id": "7001013",
    "name": "Hatch End",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.369499,
      "latitude": 51.610054
    }
  },
  "7001014": {
    "id": "7001014",
    "name": "Havant",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.982763,
      "latitude": 50.854416
    }
  },
  "7001015": {
    "id": "7001015",
    "name": "Hackney Wick",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.025759,
      "latitude": 51.543625
    }
  },
  "7001016": {
    "id": "7001016",
    "name": "Hayes (Kent)",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.010123,
      "latitude": 51.375744
    }
  },
  "7001017": {
    "id": "7001017",
    "name": "Hazel Grove",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.122121,
      "latitude": 53.377415
    }
  },
  "7001018": {
    "id": "7001018",
    "name": "Herne Bay",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.118742,
      "latitude": 51.364059
    }
  },
  "7001019": {
    "id": "7001019",
    "name": "Highbridge & Burnham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.972192,
      "latitude": 51.218098
    }
  },
  "7001020": {
    "id": "7001020",
    "name": "Holmes Chapel",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.351063,
      "latitude": 53.199131
    }
  },
  "7001021": {
    "id": "7001021",
    "name": "Helmsdale",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.660068,
      "latitude": 58.117737
    }
  },
  "7001022": {
    "id": "7001022",
    "name": "Hebden Bridge",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.009063,
      "latitude": 53.737587
    }
  },
  "7001023": {
    "id": "7001023",
    "name": "Haddiscoe",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.622451,
      "latitude": 52.528835
    }
  },
  "7001024": {
    "id": "7001024",
    "name": "Handforth",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.213263,
      "latitude": 53.34639
    }
  },
  "7001025": {
    "id": "7001025",
    "name": "Headcorn",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.627507,
      "latitude": 51.165657
    }
  },
  "7001027": {
    "id": "7001027",
    "name": "Heaton Chapel",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.179046,
      "latitude": 53.425556
    }
  },
  "7001028": {
    "id": "7001028",
    "name": "Headingley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.59289,
      "latitude": 53.817787
    }
  },
  "7001029": {
    "id": "7001029",
    "name": "Hedge End",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.297056,
      "latitude": 50.927773
    }
  },
  "7001030": {
    "id": "7001030",
    "name": "Hednesford",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.00199,
      "latitude": 52.709922
    }
  },
  "7001031": {
    "id": "7001031",
    "name": "Heald Green",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.236533,
      "latitude": 53.369248
    }
  },
  "7001032": {
    "id": "7001032",
    "name": "Hemel Hempstead",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.490762,
      "latitude": 51.742062
    }
  },
  "7001033": {
    "id": "7001033",
    "name": "Healing",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.160163,
      "latitude": 53.581425
    }
  },
  "7001034": {
    "id": "7001034",
    "name": "Hendon",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.238652,
      "latitude": 51.580057
    }
  },
  "7001035": {
    "id": "7001035",
    "name": "Hersham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.389271,
      "latitude": 51.377419
    }
  },
  "7001036": {
    "id": "7001036",
    "name": "Headstone Lane",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.356766,
      "latitude": 51.60268
    }
  },
  "7001037": {
    "id": "7001037",
    "name": "Hever",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.094648,
      "latitude": 51.180912
    }
  },
  "7001038": {
    "id": "7001038",
    "name": "Heworth",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.554976,
      "latitude": 54.951862
    }
  },
  "7001039": {
    "id": "7001039",
    "name": "Hexham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.095266,
      "latitude": 54.974201
    }
  },
  "7001040": {
    "id": "7001040",
    "name": "Heyford",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.299262,
      "latitude": 51.91902
    }
  },
  "7001041": {
    "id": "7001041",
    "name": "Hereford",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.708854,
      "latitude": 52.060715
    }
  },
  "7001042": {
    "id": "7001042",
    "name": "Hatfield",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.216162,
      "latitude": 51.763397
    }
  },
  "7001043": {
    "id": "7001043",
    "name": "Hertford East",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.072591,
      "latitude": 51.799793
    }
  },
  "7001044": {
    "id": "7001044",
    "name": "Hertford North",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.092961,
      "latitude": 51.798328
    }
  },
  "7001045": {
    "id": "7001045",
    "name": "Hatfield Peverel",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.593463,
      "latitude": 51.779785
    }
  },
  "7001046": {
    "id": "7001046",
    "name": "Halifax",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.854486,
      "latitude": 53.720417
    }
  },
  "7001047": {
    "id": "7001047",
    "name": "Hag Fold",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.493744,
      "latitude": 53.533442
    }
  },
  "7001048": {
    "id": "7001048",
    "name": "Hagley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.147018,
      "latitude": 52.422375
    }
  },
  "7001049": {
    "id": "7001049",
    "name": "Harringay Green Lanes",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.098104,
      "latitude": 51.577336
    }
  },
  "7001050": {
    "id": "7001050",
    "name": "Harrogate",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.537814,
      "latitude": 53.991959
    }
  },
  "7001051": {
    "id": "7001051",
    "name": "Hillington West",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.370778,
      "latitude": 55.85537
    }
  },
  "7001052": {
    "id": "7001052",
    "name": "Holyhead",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.631062,
      "latitude": 53.307674
    }
  },
  "7001053": {
    "id": "7001053",
    "name": "Holton Heath",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.077863,
      "latitude": 50.711346
    }
  },
  "7001055": {
    "id": "7001055",
    "name": "Herne Hill",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.101624,
      "latitude": 51.453148
    }
  },
  "7001056": {
    "id": "7001056",
    "name": "Heath High Level",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.181737,
      "latitude": 51.516518
    }
  },
  "7001057": {
    "id": "7001057",
    "name": "Higham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.466931,
      "latitude": 51.426376
    }
  },
  "7001058": {
    "id": "7001058",
    "name": "Henley-In-Arden",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.784444,
      "latitude": 52.291
    }
  },
  "7001059": {
    "id": "7001059",
    "name": "High Brooms",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.277686,
      "latitude": 51.149609
    }
  },
  "7001060": {
    "id": "7001060",
    "name": "Hindley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.574909,
      "latitude": 53.542053
    }
  },
  "7001061": {
    "id": "7001061",
    "name": "Hillfoot",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.32032,
      "latitude": 55.920143
    }
  },
  "7001062": {
    "id": "7001062",
    "name": "Highbury & Islington",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.10206,
      "latitude": 51.54668
    }
  },
  "7001063": {
    "id": "7001063",
    "name": "Hinckley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.371916,
      "latitude": 52.534969
    }
  },
  "7001064": {
    "id": "7001064",
    "name": "Hildenborough",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.226465,
      "latitude": 51.214451
    }
  },
  "7001065": {
    "id": "7001065",
    "name": "Hitchin",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.262498,
      "latitude": 51.952915
    }
  },
  "7001066": {
    "id": "7001066",
    "name": "Highams Park",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.000183,
      "latitude": 51.608837
    }
  },
  "7001067": {
    "id": "7001067",
    "name": "High Street",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.239953,
      "latitude": 55.858719
    }
  },
  "7001068": {
    "id": "7001068",
    "name": "Hightown",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.057407,
      "latitude": 53.525272
    }
  },
  "7001069": {
    "id": "7001069",
    "name": "Hall i’ th’ Wood",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.413986,
      "latitude": 53.597546
    }
  },
  "7001070": {
    "id": "7001070",
    "name": "Heckington",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.29316,
      "latitude": 52.977463
    }
  },
  "7001071": {
    "id": "7001071",
    "name": "Harlington",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.495715,
      "latitude": 51.962012
    }
  },
  "7001073": {
    "id": "7001073",
    "name": "Hartlebury",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.22158,
      "latitude": 52.335049
    }
  },
  "7001074": {
    "id": "7001074",
    "name": "Helensburgh Central",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.732803,
      "latitude": 56.004261
    }
  },
  "7001075": {
    "id": "7001075",
    "name": "Harlesden",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.258214,
      "latitude": 51.536518
    }
  },
  "7001076": {
    "id": "7001076",
    "name": "Hillington East",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.354768,
      "latitude": 55.854778
    }
  },
  "7001077": {
    "id": "7001077",
    "name": "Hellifield",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.227961,
      "latitude": 54.010972
    }
  },
  "7001078": {
    "id": "7001078",
    "name": "Hall Green",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.845513,
      "latitude": 52.436745
    }
  },
  "7001079": {
    "id": "7001079",
    "name": "Halling",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.445711,
      "latitude": 51.352169
    }
  },
  "7001080": {
    "id": "7001080",
    "name": "Harlow Mill",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.131497,
      "latitude": 51.790878
    }
  },
  "7001081": {
    "id": "7001081",
    "name": "Heath Low Level",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.183163,
      "latitude": 51.515606
    }
  },
  "7001082": {
    "id": "7001082",
    "name": "Hartlepool",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.2073,
      "latitude": 54.686771
    }
  },
  "7001083": {
    "id": "7001083",
    "name": "Harling Road",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.908188,
      "latitude": 52.454128
    }
  },
  "7001084": {
    "id": "7001084",
    "name": "Hillside",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.024673,
      "latitude": 53.62217
    }
  },
  "7001085": {
    "id": "7001085",
    "name": "Harlow Town",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.094804,
      "latitude": 51.781639
    }
  },
  "7001086": {
    "id": "7001086",
    "name": "Helensburgh Upper",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.73184,
      "latitude": 56.013268
    }
  },
  "7001087": {
    "id": "7001087",
    "name": "Hadley Wood",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.176519,
      "latitude": 51.668365
    }
  },
  "7001088": {
    "id": "7001088",
    "name": "Holytown",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.973967,
      "latitude": 55.812943
    }
  },
  "7001089": {
    "id": "7001089",
    "name": "Hunmanby",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.314737,
      "latitude": 54.17429
    }
  },
  "7001090": {
    "id": "7001090",
    "name": "Hamilton Central",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.038928,
      "latitude": 55.773239
    }
  },
  "7001091": {
    "id": "7001091",
    "name": "Holmwood",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.321752,
      "latitude": 51.180428
    }
  },
  "7001092": {
    "id": "7001092",
    "name": "Hampstead Heath",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.165159,
      "latitude": 51.555779
    }
  },
  "7001093": {
    "id": "7001093",
    "name": "Hampden Park",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.278906,
      "latitude": 50.796124
    }
  },
  "7001094": {
    "id": "7001094",
    "name": "Hammerton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.283026,
      "latitude": 53.996105
    }
  },
  "7001095": {
    "id": "7001095",
    "name": "Hamilton West",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.056781,
      "latitude": 55.779232
    }
  },
  "7001096": {
    "id": "7001096",
    "name": "Hooton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.976721,
      "latitude": 53.296741
    }
  },
  "7001097": {
    "id": "7001097",
    "name": "Hengoed",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.224162,
      "latitude": 51.647362
    }
  },
  "7001098": {
    "id": "7001098",
    "name": "Honley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.780814,
      "latitude": 53.608849
    }
  },
  "7001099": {
    "id": "7001099",
    "name": "Hounslow",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.361808,
      "latitude": 51.462471
    }
  },
  "7001100": {
    "id": "7001100",
    "name": "Hensall",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.113905,
      "latitude": 53.698357
    }
  },
  "7001101": {
    "id": "7001101",
    "name": "Hanwell",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.338432,
      "latitude": 51.511604
    }
  },
  "7001102": {
    "id": "7001102",
    "name": "Honiton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.186207,
      "latitude": 50.797062
    }
  },
  "7001103": {
    "id": "7001103",
    "name": "Hockley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.659971,
      "latitude": 51.603825
    }
  },
  "7001104": {
    "id": "7001104",
    "name": "Horsley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.434304,
      "latitude": 51.279114
    }
  },
  "7001105": {
    "id": "7001105",
    "name": "Horsforth",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.630612,
      "latitude": 53.847576
    }
  },
  "7001106": {
    "id": "7001106",
    "name": "Harrow-On-The-Hill",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.336628,
      "latitude": 51.57931
    }
  },
  "7001107": {
    "id": "7001107",
    "name": "Horton in Ribblesdale",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.302054,
      "latitude": 54.149379
    }
  },
  "7001108": {
    "id": "7001108",
    "name": "Hollingbourne",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.627465,
      "latitude": 51.265484
    }
  },
  "7001109": {
    "id": "7001109",
    "name": "Homerton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.038601,
      "latitude": 51.546535
    }
  },
  "7001110": {
    "id": "7001110",
    "name": "Honeybourne",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.834989,
      "latitude": 52.101383
    }
  },
  "7001111": {
    "id": "7001111",
    "name": "Hook",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.961933,
      "latitude": 51.279587
    }
  },
  "7001112": {
    "id": "7001112",
    "name": "Honor Oak Park",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.045607,
      "latitude": 51.450428
    }
  },
  "7001113": {
    "id": "7001113",
    "name": "Horley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.161994,
      "latitude": 51.168137
    }
  },
  "7001114": {
    "id": "7001114",
    "name": "Hornsey",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.111961,
      "latitude": 51.586414
    }
  },
  "7001115": {
    "id": "7001115",
    "name": "Henley-On-Thames",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.900133,
      "latitude": 51.534182
    }
  },
  "7001116": {
    "id": "7001116",
    "name": "Hough Green",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.775056,
      "latitude": 53.372378
    }
  },
  "7001117": {
    "id": "7001117",
    "name": "Hove",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.170824,
      "latitude": 50.835514
    }
  },
  "7001119": {
    "id": "7001119",
    "name": "Hoylake",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.178861,
      "latitude": 53.390202
    }
  },
  "7001120": {
    "id": "7001120",
    "name": "Hope (Clwyd)",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.03691,
      "latitude": 53.117344
    }
  },
  "7001121": {
    "id": "7001121",
    "name": "Hope (Derbyshire)",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.729587,
      "latitude": 53.346283
    }
  },
  "7001122": {
    "id": "7001122",
    "name": "Hawarden Bridge",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.031866,
      "latitude": 53.218971
    }
  },
  "7001123": {
    "id": "7001123",
    "name": "Hawarden",
    "isMeta": true,
    "country": "GB",
    "location": {
      "longitude": -3.02,
      "latitude": 53.182
    }
  },
  "7001124": {
    "id": "7001124",
    "name": "Harringay Station",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.105115,
      "latitude": 51.577305
    }
  },
  "7001125": {
    "id": "7001125",
    "name": "Harrietsham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.673574,
      "latitude": 51.244652
    }
  },
  "7001126": {
    "id": "7001126",
    "name": "Harlech",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.109248,
      "latitude": 52.861309
    }
  },
  "7001127": {
    "id": "7001127",
    "name": "Harpenden",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.351961,
      "latitude": 51.814831
    }
  },
  "7001129": {
    "id": "7001129",
    "name": "Harrington",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.565573,
      "latitude": 54.613551
    }
  },
  "7001130": {
    "id": "7001130",
    "name": "Harold Wood",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.234819,
      "latitude": 51.592907
    }
  },
  "7001131": {
    "id": "7001131",
    "name": "Ham Street",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.854653,
      "latitude": 51.067684
    }
  },
  "7001132": {
    "id": "7001132",
    "name": "Helsby",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.770786,
      "latitude": 53.275784
    }
  },
  "7001133": {
    "id": "7001133",
    "name": "Hoscar",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.803828,
      "latitude": 53.597366
    }
  },
  "7001134": {
    "id": "7001134",
    "name": "Hilsea",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.058592,
      "latitude": 50.828075
    }
  },
  "7001135": {
    "id": "7001135",
    "name": "Horsham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.318753,
      "latitude": 51.066174
    }
  },
  "7001136": {
    "id": "7001136",
    "name": "Hessle",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.442169,
      "latitude": 53.717567
    }
  },
  "7001137": {
    "id": "7001137",
    "name": "Hassocks",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.146043,
      "latitude": 50.923264
    }
  },
  "7001138": {
    "id": "7001138",
    "name": "Hamstead",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.92838,
      "latitude": 52.530718
    }
  },
  "7001139": {
    "id": "7001139",
    "name": "Heswall",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.073568,
      "latitude": 53.32917
    }
  },
  "7001140": {
    "id": "7001140",
    "name": "Hampton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.37199,
      "latitude": 51.41607
    }
  },
  "7001141": {
    "id": "7001141",
    "name": "Hampton-In-Arden",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.699934,
      "latitude": 52.428375
    }
  },
  "7001142": {
    "id": "7001142",
    "name": "Hampton Court",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.342412,
      "latitude": 51.401947
    }
  },
  "7001143": {
    "id": "7001143",
    "name": "Hartwood",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.839792,
      "latitude": 55.810532
    }
  },
  "7001144": {
    "id": "7001144",
    "name": "Hartford",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.553978,
      "latitude": 53.241721
    }
  },
  "7001145": {
    "id": "7001145",
    "name": "Hither Green",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.000906,
      "latitude": 51.452374
    }
  },
  "7001146": {
    "id": "7001146",
    "name": "Hopton Heath",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.912536,
      "latitude": 52.391964
    }
  },
  "7001148": {
    "id": "7001148",
    "name": "Harwich Town",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.285469,
      "latitude": 51.944157
    }
  },
  "7001149": {
    "id": "7001149",
    "name": "Hatton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.672982,
      "latitude": 52.295242
    }
  },
  "7001150": {
    "id": "7001150",
    "name": "Haddenham & Thame Parkway",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.942121,
      "latitude": 51.770788
    }
  },
  "7001151": {
    "id": "7001151",
    "name": "Hinton Admiral",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.713616,
      "latitude": 50.752384
    }
  },
  "7001152": {
    "id": "7001152",
    "name": "Hathersage",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.651641,
      "latitude": 53.325405
    }
  },
  "7001153": {
    "id": "7001153",
    "name": "Hattersley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.040324,
      "latitude": 53.445126
    }
  },
  "7001154": {
    "id": "7001154",
    "name": "Hampton Wick",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.313201,
      "latitude": 51.41412
    }
  },
  "7001155": {
    "id": "7001155",
    "name": "Hull",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.345645,
      "latitude": 53.744144
    }
  },
  "7001156": {
    "id": "7001156",
    "name": "Hubberts Bridge",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.110044,
      "latitude": 52.975594
    }
  },
  "7001157": {
    "id": "7001157",
    "name": "Hunts Cross",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.855716,
      "latitude": 53.360644
    }
  },
  "7001158": {
    "id": "7001158",
    "name": "Huddersfield",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.785142,
      "latitude": 53.648407
    }
  },
  "7001159": {
    "id": "7001159",
    "name": "Hungerford",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.511056,
      "latitude": 51.415344
    }
  },
  "7001160": {
    "id": "7001160",
    "name": "Hurst Green",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.004397,
      "latitude": 51.244545
    }
  },
  "7001161": {
    "id": "7001161",
    "name": "Huntly",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.776354,
      "latitude": 57.444401
    }
  },
  "7001162": {
    "id": "7001162",
    "name": "Humphrey Park",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.327363,
      "latitude": 53.452321
    }
  },
  "7001163": {
    "id": "7001163",
    "name": "Huncoat",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.345903,
      "latitude": 53.772144
    }
  },
  "7001165": {
    "id": "7001165",
    "name": "Huntingdon",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.192047,
      "latitude": 52.328613
    }
  },
  "7001166": {
    "id": "7001166",
    "name": "Hutton Cranswick",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.43331,
      "latitude": 53.955669
    }
  },
  "7001167": {
    "id": "7001167",
    "name": "Huyton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.842991,
      "latitude": 53.409813
    }
  },
  "7001168": {
    "id": "7001168",
    "name": "Havenhouse",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.272619,
      "latitude": 53.114548
    }
  },
  "7001169": {
    "id": "7001169",
    "name": "Hoveton & Wroxham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.408312,
      "latitude": 52.715084
    }
  },
  "7001170": {
    "id": "7001170",
    "name": "Haverfordwest",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.960279,
      "latitude": 51.802601
    }
  },
  "7001171": {
    "id": "7001171",
    "name": "Halesworth",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.506141,
      "latitude": 52.346157
    }
  },
  "7001172": {
    "id": "7001172",
    "name": "Halewood",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.830149,
      "latitude": 53.364466
    }
  },
  "7001173": {
    "id": "7001173",
    "name": "Howden",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.86068,
      "latitude": 53.764526
    }
  },
  "7001174": {
    "id": "7001174",
    "name": "Hawkhead",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.398792,
      "latitude": 55.843136
    }
  },
  "7001176": {
    "id": "7001176",
    "name": "Haltwhistle",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.462321,
      "latitude": 54.967972
    }
  },
  "7001177": {
    "id": "7001177",
    "name": "Hinchley Wood",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.340508,
      "latitude": 51.374939
    }
  },
  "7001178": {
    "id": "7001178",
    "name": "Harrow & Wealdstone",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.334067,
      "latitude": 51.591576
    }
  },
  "7001179": {
    "id": "7001179",
    "name": "Hamworthy",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.018381,
      "latitude": 50.725754
    }
  },
  "7001180": {
    "id": "7001180",
    "name": "How Wood",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.344594,
      "latitude": 51.717697
    }
  },
  "7001181": {
    "id": "7001181",
    "name": "High Wycombe",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.745139,
      "latitude": 51.629793
    }
  },
  "7001182": {
    "id": "7001182",
    "name": "Haydon Bridge",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.246809,
      "latitude": 54.974888
    }
  },
  "7001183": {
    "id": "7001183",
    "name": "Hyde Central",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.085149,
      "latitude": 53.451682
    }
  },
  "7001184": {
    "id": "7001184",
    "name": "Hyndland",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.314715,
      "latitude": 55.879803
    }
  },
  "7001185": {
    "id": "7001185",
    "name": "Hayes & Harlington",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.420785,
      "latitude": 51.502973
    }
  },
  "7001186": {
    "id": "7001186",
    "name": "Hykeham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.600412,
      "latitude": 53.194546
    }
  },
  "7001187": {
    "id": "7001187",
    "name": "Hayle",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -5.419558,
      "latitude": 50.186176
    }
  },
  "7001188": {
    "id": "7001188",
    "name": "Haymarket (Edinburgh)",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.218458,
      "latitude": 55.945854
    }
  },
  "7001189": {
    "id": "7001189",
    "name": "Hyde North",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.085829,
      "latitude": 53.464306
    }
  },
  "7001190": {
    "id": "7001190",
    "name": "Haydons Road",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.189073,
      "latitude": 51.425755
    }
  },
  "7001191": {
    "id": "7001191",
    "name": "Hythe",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.926539,
      "latitude": 51.885281
    }
  },
  "7001192": {
    "id": "7001192",
    "name": "Haywards Heath",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.105717,
      "latitude": 51.00536
    }
  },
  "7001193": {
    "id": "7001193",
    "name": "Inverkeithing",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.39621,
      "latitude": 56.034725
    }
  },
  "7001194": {
    "id": "7001194",
    "name": "I.B.M.",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.830003,
      "latitude": 55.929253
    }
  },
  "7001195": {
    "id": "7001195",
    "name": "Ince",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.611865,
      "latitude": 53.538975
    }
  },
  "7001196": {
    "id": "7001196",
    "name": "Ince & Elton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.816234,
      "latitude": 53.276736
    }
  },
  "7001197": {
    "id": "7001197",
    "name": "Invergordon",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.175563,
      "latitude": 57.688587
    }
  },
  "7001198": {
    "id": "7001198",
    "name": "Ifield",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.215505,
      "latitude": 51.115902
    }
  },
  "7001199": {
    "id": "7001199",
    "name": "Ingatestone",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.384556,
      "latitude": 51.667301
    }
  },
  "7001200": {
    "id": "7001200",
    "name": "Insch",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.616279,
      "latitude": 57.33749
    }
  },
  "7001201": {
    "id": "7001201",
    "name": "Ilford",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.068699,
      "latitude": 51.559078
    }
  },
  "7001202": {
    "id": "7001202",
    "name": "Ilkley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.821799,
      "latitude": 53.925304
    }
  },
  "7001203": {
    "id": "7001203",
    "name": "Isleworth",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.33689,
      "latitude": 51.474709
    }
  },
  "7001204": {
    "id": "7001204",
    "name": "Inverness",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.223199,
      "latitude": 57.480194
    }
  },
  "7001205": {
    "id": "7001205",
    "name": "Inverkip",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.873089,
      "latitude": 55.905781
    }
  },
  "7001206": {
    "id": "7001206",
    "name": "Inverurie",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.373224,
      "latitude": 57.286343
    }
  },
  "7001207": {
    "id": "7001207",
    "name": "Irlam",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.432989,
      "latitude": 53.434172
    }
  },
  "7001208": {
    "id": "7001208",
    "name": "Irvine",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.675196,
      "latitude": 55.610916
    }
  },
  "7001209": {
    "id": "7001209",
    "name": "Invershin",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.399288,
      "latitude": 57.925362
    }
  },
  "7001210": {
    "id": "7001210",
    "name": "Islip",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.238185,
      "latitude": 51.82571
    }
  },
  "7001213": {
    "id": "7001213",
    "name": "Invergowrie",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.057897,
      "latitude": 56.456795
    }
  },
  "7001214": {
    "id": "7001214",
    "name": "Iver",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.506659,
      "latitude": 51.508342
    }
  },
  "7001215": {
    "id": "7001215",
    "name": "Ipswich Station",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.144481,
      "latitude": 52.050552
    }
  },
  "7001217": {
    "id": "7001217",
    "name": "Johnston",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.996407,
      "latitude": 51.756714
    }
  },
  "7001218": {
    "id": "7001218",
    "name": "Jordanhill",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.326053,
      "latitude": 55.882282
    }
  },
  "7001219": {
    "id": "7001219",
    "name": "Johnstone",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.50369,
      "latitude": 55.834759
    }
  },
  "7001220": {
    "id": "7001220",
    "name": "Keith",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.954062,
      "latitude": 57.550976
    }
  },
  "7001221": {
    "id": "7001221",
    "name": "Kents Bank",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.925351,
      "latitude": 54.172967
    }
  },
  "7001222": {
    "id": "7001222",
    "name": "Kirby Cross",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.214045,
      "latitude": 51.840897
    }
  },
  "7001223": {
    "id": "7001223",
    "name": "Kew Bridge",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.288827,
      "latitude": 51.489311
    }
  },
  "7001224": {
    "id": "7001224",
    "name": "Kirkcaldy",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.167445,
      "latitude": 56.112579
    }
  },
  "7001225": {
    "id": "7001225",
    "name": "Kirkconnel",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.998533,
      "latitude": 55.38834
    }
  },
  "7001227": {
    "id": "7001227",
    "name": "Kirkdale",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.981093,
      "latitude": 53.440896
    }
  },
  "7001228": {
    "id": "7001228",
    "name": "Kearsley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.375032,
      "latitude": 53.54419
    }
  },
  "7001229": {
    "id": "7001229",
    "name": "Kearsney",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.271566,
      "latitude": 51.149399
    }
  },
  "7001230": {
    "id": "7001230",
    "name": "Keynsham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.49465,
      "latitude": 51.417122
    }
  },
  "7001231": {
    "id": "7001231",
    "name": "Keighley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.90112,
      "latitude": 53.86787
    }
  },
  "7001232": {
    "id": "7001232",
    "name": "Kelvedon",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.701529,
      "latitude": 51.841202
    }
  },
  "7001233": {
    "id": "7001233",
    "name": "Kemble",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.023115,
      "latitude": 51.67622
    }
  },
  "7001234": {
    "id": "7001234",
    "name": "Kendal",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.739667,
      "latitude": 54.332108
    }
  },
  "7001235": {
    "id": "7001235",
    "name": "Keyham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.179095,
      "latitude": 50.389687
    }
  },
  "7001236": {
    "id": "7001236",
    "name": "Kettering",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.731724,
      "latitude": 52.393177
    }
  },
  "7001237": {
    "id": "7001237",
    "name": "Kew Gardens",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.284949,
      "latitude": 51.477558
    }
  },
  "7001238": {
    "id": "7001238",
    "name": "Kinghorn",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.174161,
      "latitude": 56.069389
    }
  },
  "7001239": {
    "id": "7001239",
    "name": "Kingussie",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.052227,
      "latitude": 57.07785
    }
  },
  "7001240": {
    "id": "7001240",
    "name": "Kempston Hardwick",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.505266,
      "latitude": 52.092026
    }
  },
  "7001241": {
    "id": "7001241",
    "name": "Kilburn High Road",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.19186,
      "latitude": 51.537312
    }
  },
  "7001242": {
    "id": "7001242",
    "name": "Kent House",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.045786,
      "latitude": 51.412659
    }
  },
  "7001243": {
    "id": "7001243",
    "name": "Kirkham & Wesham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.881834,
      "latitude": 53.787373
    }
  },
  "7001244": {
    "id": "7001244",
    "name": "Kidbrooke",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.028331,
      "latitude": 51.462662
    }
  },
  "7001245": {
    "id": "7001245",
    "name": "Kinbrace",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.941063,
      "latitude": 58.258408
    }
  },
  "7001247": {
    "id": "7001247",
    "name": "Kidderminster",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.239458,
      "latitude": 52.384457
    }
  },
  "7001248": {
    "id": "7001248",
    "name": "Kidsgrove",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.244828,
      "latitude": 53.086555
    }
  },
  "7001249": {
    "id": "7001249",
    "name": "Kingham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.629331,
      "latitude": 51.902222
    }
  },
  "7001250": {
    "id": "7001250",
    "name": "Kingsknowe",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.265634,
      "latitude": 55.919323
    }
  },
  "7001251": {
    "id": "7001251",
    "name": "Kildale",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.067829,
      "latitude": 54.477268
    }
  },
  "7001252": {
    "id": "7001252",
    "name": "Kilmarnock",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.499048,
      "latitude": 55.612835
    }
  },
  "7001253": {
    "id": "7001253",
    "name": "Kildonan",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.869993,
      "latitude": 58.171432
    }
  },
  "7001254": {
    "id": "7001254",
    "name": "Kilpatrick",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.453454,
      "latitude": 55.924755
    }
  },
  "7001255": {
    "id": "7001255",
    "name": "Kings Sutton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.280066,
      "latitude": 52.020184
    }
  },
  "7001256": {
    "id": "7001256",
    "name": "Kilgetty",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.715219,
      "latitude": 51.732071
    }
  },
  "7001257": {
    "id": "7001257",
    "name": "Kidwelly",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.317046,
      "latitude": 51.734299
    }
  },
  "7001258": {
    "id": "7001258",
    "name": "Kirkhill",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.168751,
      "latitude": 55.814156
    }
  },
  "7001259": {
    "id": "7001259",
    "name": "Kirk Sandall",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.075006,
      "latitude": 53.56347
    }
  },
  "7001260": {
    "id": "7001260",
    "name": "Kirknewton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.432526,
      "latitude": 55.888744
    }
  },
  "7001261": {
    "id": "7001261",
    "name": "Kings Lynn",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.403475,
      "latitude": 52.754108
    }
  },
  "7001262": {
    "id": "7001262",
    "name": "Kings Langley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.438411,
      "latitude": 51.70631
    }
  },
  "7001263": {
    "id": "7001263",
    "name": "Kilmaurs",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.532331,
      "latitude": 55.636425
    }
  },
  "7001264": {
    "id": "7001264",
    "name": "Kilwinning",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.710071,
      "latitude": 55.655994
    }
  },
  "7001265": {
    "id": "7001265",
    "name": "Kennett",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.490482,
      "latitude": 52.277523
    }
  },
  "7001266": {
    "id": "7001266",
    "name": "Knebworth",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.187406,
      "latitude": 51.86636
    }
  },
  "7001267": {
    "id": "7001267",
    "name": "Kennishead",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.325119,
      "latitude": 55.813099
    }
  },
  "7001268": {
    "id": "7001268",
    "name": "Knighton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.042232,
      "latitude": 52.345043
    }
  },
  "7001269": {
    "id": "7001269",
    "name": "Kenley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.101199,
      "latitude": 51.324547
    }
  },
  "7001270": {
    "id": "7001270",
    "name": "Knockholt",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.130865,
      "latitude": 51.34573
    }
  },
  "7001271": {
    "id": "7001271",
    "name": "Kings Nympton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.905634,
      "latitude": 50.935921
    }
  },
  "7001272": {
    "id": "7001272",
    "name": "Knaresborough",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.470482,
      "latitude": 54.008755
    }
  },
  "7001273": {
    "id": "7001273",
    "name": "Kings Norton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.933801,
      "latitude": 52.413456
    }
  },
  "7001274": {
    "id": "7001274",
    "name": "Knucklas",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.096907,
      "latitude": 52.359833
    }
  },
  "7001275": {
    "id": "7001275",
    "name": "Kensington Olympia",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.210189,
      "latitude": 51.497753
    }
  },
  "7001276": {
    "id": "7001276",
    "name": "Kings Park",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.247294,
      "latitude": 55.819935
    }
  },
  "7001277": {
    "id": "7001277",
    "name": "Kirkby",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.902021,
      "latitude": 53.486619
    }
  },
  "7001278": {
    "id": "7001278",
    "name": "Kirkby-In-Furness",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.187398,
      "latitude": 54.232426
    }
  },
  "7001279": {
    "id": "7001279",
    "name": "Kirkby Stephen",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.368603,
      "latitude": 54.455135
    }
  },
  "7001280": {
    "id": "7001280",
    "name": "Kemsing",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.247716,
      "latitude": 51.297684
    }
  },
  "7001281": {
    "id": "7001281",
    "name": "Knutsford",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.372101,
      "latitude": 53.301956
    }
  },
  "7001282": {
    "id": "7001282",
    "name": "Kensal Green",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.223847,
      "latitude": 51.530602
    }
  },
  "7001283": {
    "id": "7001283",
    "name": "Kemsley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.733559,
      "latitude": 51.361996
    }
  },
  "7001284": {
    "id": "7001284",
    "name": "Kensal Rise",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.220811,
      "latitude": 51.534157
    }
  },
  "7001285": {
    "id": "7001285",
    "name": "Kingston",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.301768,
      "latitude": 51.412155
    }
  },
  "7001286": {
    "id": "7001286",
    "name": "Kingswood",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.211439,
      "latitude": 51.294807
    }
  },
  "7001287": {
    "id": "7001287",
    "name": "Kentish Town",
    "isMeta": true,
    "country": "GB",
    "location": {
      "longitude": -0.1459,
      "latitude": 51.5447
    }
  },
  "7001288": {
    "id": "7001288",
    "name": "Kintbury",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.445059,
      "latitude": 51.40247
    }
  },
  "7001289": {
    "id": "7001289",
    "name": "Kirton Lindsey",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.593886,
      "latitude": 53.484829
    }
  },
  "7001290": {
    "id": "7001290",
    "name": "Kenton",
    "isMeta": true,
    "country": "GB",
    "location": {
      "longitude": -0.3032,
      "latitude": 51.583
    }
  },
  "7001291": {
    "id": "7001291",
    "name": "Knottingley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.259172,
      "latitude": 53.706528
    }
  },
  "7001292": {
    "id": "7001292",
    "name": "Kentish Town West",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.146778,
      "latitude": 51.546501
    }
  },
  "7001293": {
    "id": "7001293",
    "name": "Kiveton Bridge",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.265524,
      "latitude": 53.340729
    }
  },
  "7001294": {
    "id": "7001294",
    "name": "Kiveton Park",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.240052,
      "latitude": 53.336975
    }
  },
  "7001295": {
    "id": "7001295",
    "name": "Kyle of Lochalsh",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -5.713067,
      "latitude": 57.280567
    }
  },
  "7001297": {
    "id": "7001297",
    "name": "Leicester",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.125274,
      "latitude": 52.631397
    }
  },
  "7001298": {
    "id": "7001298",
    "name": "Lairg",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.401,
      "latitude": 58.001701
    }
  },
  "7001299": {
    "id": "7001299",
    "name": "Lancing",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.323103,
      "latitude": 50.827015
    }
  },
  "7001300": {
    "id": "7001300",
    "name": "Laindon",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.424063,
      "latitude": 51.567566
    }
  },
  "7001301": {
    "id": "7001301",
    "name": "Lakenheath",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.533911,
      "latitude": 52.447456
    }
  },
  "7001302": {
    "id": "7001302",
    "name": "Lake",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.16686,
      "latitude": 50.64814
    }
  },
  "7001303": {
    "id": "7001303",
    "name": "Lancaster",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.807934,
      "latitude": 54.048553
    }
  },
  "7001304": {
    "id": "7001304",
    "name": "Lamphey",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.873332,
      "latitude": 51.667145
    }
  },
  "7001305": {
    "id": "7001305",
    "name": "Larbert",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.830604,
      "latitude": 56.022751
    }
  },
  "7001306": {
    "id": "7001306",
    "name": "Landywood",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.020659,
      "latitude": 52.657101
    }
  },
  "7001307": {
    "id": "7001307",
    "name": "Layton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.030249,
      "latitude": 53.835625
    }
  },
  "7001308": {
    "id": "7001308",
    "name": "Lazonby & Kirkoswald",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.702207,
      "latitude": 54.750233
    }
  },
  "7001309": {
    "id": "7001309",
    "name": "Long Buckby",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.086469,
      "latitude": 52.293964
    }
  },
  "7001310": {
    "id": "7001310",
    "name": "London Blackfriars",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.103554,
      "latitude": 51.510735
    }
  },
  "7001311": {
    "id": "7001311",
    "name": "Longbridge",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.980861,
      "latitude": 52.396385
    }
  },
  "7001312": {
    "id": "7001312",
    "name": "Loughborough Junction",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.102499,
      "latitude": 51.46666
    }
  },
  "7001313": {
    "id": "7001313",
    "name": "Longbeck",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.028041,
      "latitude": 54.592896
    }
  },
  "7001315": {
    "id": "7001315",
    "name": "Liverpool Central",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.977841,
      "latitude": 53.40525
    }
  },
  "7001316": {
    "id": "7001316",
    "name": "Longcross",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.594536,
      "latitude": 51.384556
    }
  },
  "7001317": {
    "id": "7001317",
    "name": "London Cannon Street",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.090589,
      "latitude": 51.510525
    }
  },
  "7001318": {
    "id": "7001318",
    "name": "Leeds",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.549089,
      "latitude": 53.795158
    }
  },
  "7001319": {
    "id": "7001319",
    "name": "Ladybank",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.122284,
      "latitude": 56.273834
    }
  },
  "7001321": {
    "id": "7001321",
    "name": "Llandudno",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.827043,
      "latitude": 53.320911
    }
  },
  "7001322": {
    "id": "7001322",
    "name": "Ladywell",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.019445,
      "latitude": 51.456291
    }
  },
  "7001323": {
    "id": "7001323",
    "name": "London Euston",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.134545,
      "latitude": 51.528313
    }
  },
  "7001324": {
    "id": "7001324",
    "name": "Leighton Buzzard",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.676874,
      "latitude": 51.916046
    }
  },
  "7001325": {
    "id": "7001325",
    "name": "Ledbury",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.425728,
      "latitude": 52.044991
    }
  },
  "7001326": {
    "id": "7001326",
    "name": "Lee",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.013364,
      "latitude": 51.449432
    }
  },
  "7001327": {
    "id": "7001327",
    "name": "Leagrave",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.459139,
      "latitude": 51.905304
    }
  },
  "7001328": {
    "id": "7001328",
    "name": "Lea Hall",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.786457,
      "latitude": 52.480709
    }
  },
  "7001329": {
    "id": "7001329",
    "name": "Leigh (Kent)",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.211179,
      "latitude": 51.194057
    }
  },
  "7001330": {
    "id": "7001330",
    "name": "Lelant",
    "isMeta": true,
    "country": "GB",
    "location": {
      "longitude": -5.44,
      "latitude": 50.184
    }
  },
  "7001331": {
    "id": "7001331",
    "name": "Leyton Midland Road",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.007313,
      "latitude": 51.569393
    }
  },
  "7001332": {
    "id": "7001332",
    "name": "Leominster",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.730506,
      "latitude": 52.225109
    }
  },
  "7001333": {
    "id": "7001333",
    "name": "Leamington Spa",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.536723,
      "latitude": 52.284893
    }
  },
  "7001334": {
    "id": "7001334",
    "name": "Letchworth Garden City",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.229403,
      "latitude": 51.980305
    }
  },
  "7001335": {
    "id": "7001335",
    "name": "Leuchars",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.893734,
      "latitude": 56.375427
    }
  },
  "7001336": {
    "id": "7001336",
    "name": "Levenshulme",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.192676,
      "latitude": 53.444405
    }
  },
  "7001337": {
    "id": "7001337",
    "name": "Lewes",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.012455,
      "latitude": 50.870281
    }
  },
  "7001338": {
    "id": "7001338",
    "name": "Leyland",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.687101,
      "latitude": 53.69886
    }
  },
  "7001339": {
    "id": "7001339",
    "name": "Lenzie",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.153932,
      "latitude": 55.921364
    }
  },
  "7001340": {
    "id": "7001340",
    "name": "London Fenchurch Street",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.079039,
      "latitude": 51.511234
    }
  },
  "7001341": {
    "id": "7001341",
    "name": "London Fields",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.057574,
      "latitude": 51.541454
    }
  },
  "7001342": {
    "id": "7001342",
    "name": "Langbank",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.586326,
      "latitude": 55.924725
    }
  },
  "7001343": {
    "id": "7001343",
    "name": "Longfield",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.299994,
      "latitude": 51.396496
    }
  },
  "7001344": {
    "id": "7001344",
    "name": "Langley Green",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.005857,
      "latitude": 52.494385
    }
  },
  "7001346": {
    "id": "7001346",
    "name": "Langley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.541747,
      "latitude": 51.508011
    }
  },
  "7001347": {
    "id": "7001347",
    "name": "Langley Mill",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.330982,
      "latitude": 53.018236
    }
  },
  "7001348": {
    "id": "7001348",
    "name": "Longniddry",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.889308,
      "latitude": 55.976524
    }
  },
  "7001349": {
    "id": "7001349",
    "name": "Longport",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.21623,
      "latitude": 53.041656
    }
  },
  "7001350": {
    "id": "7001350",
    "name": "Langside",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.277696,
      "latitude": 55.821175
    }
  },
  "7001351": {
    "id": "7001351",
    "name": "Long Eaton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.288114,
      "latitude": 52.885105
    }
  },
  "7001352": {
    "id": "7001352",
    "name": "Langwathby",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.662457,
      "latitude": 54.694744
    }
  },
  "7001353": {
    "id": "7001353",
    "name": "Ashurst New Forest",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.525097,
      "latitude": 50.888865
    }
  },
  "7001354": {
    "id": "7001354",
    "name": "Lichfield City",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.825431,
      "latitude": 52.680347
    }
  },
  "7001355": {
    "id": "7001355",
    "name": "Lidlington",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.558972,
      "latitude": 52.041385
    }
  },
  "7001356": {
    "id": "7001356",
    "name": "Lingfield",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.007151,
      "latitude": 51.176392
    }
  },
  "7001357": {
    "id": "7001357",
    "name": "Linlithgow",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.596,
      "latitude": 55.975689
    }
  },
  "7001358": {
    "id": "7001358",
    "name": "Littlehampton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.546547,
      "latitude": 50.810226
    }
  },
  "7001359": {
    "id": "7001359",
    "name": "James Street",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.991993,
      "latitude": 53.404748
    }
  },
  "7001360": {
    "id": "7001360",
    "name": "Little Kimble",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.809152,
      "latitude": 51.752014
    }
  },
  "7001361": {
    "id": "7001361",
    "name": "Limehouse",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.040071,
      "latitude": 51.51239
    }
  },
  "7001362": {
    "id": "7001362",
    "name": "Lincoln Central",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.540922,
      "latitude": 53.227089
    }
  },
  "7001363": {
    "id": "7001363",
    "name": "Liphook",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.801027,
      "latitude": 51.071213
    }
  },
  "7001365": {
    "id": "7001365",
    "name": "Liskeard",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.46753,
      "latitude": 50.446711
    }
  },
  "7001366": {
    "id": "7001366",
    "name": "Littleborough",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.094698,
      "latitude": 53.642988
    }
  },
  "7001367": {
    "id": "7001367",
    "name": "Littlehaven",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.308276,
      "latitude": 51.079514
    }
  },
  "7001368": {
    "id": "7001368",
    "name": "Lingwood",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.489735,
      "latitude": 52.621872
    }
  },
  "7001369": {
    "id": "7001369",
    "name": "Llandudno Junction",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.809102,
      "latitude": 53.283953
    }
  },
  "7001370": {
    "id": "7001370",
    "name": "London Kings Cross",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.122907,
      "latitude": 51.530827
    }
  },
  "7001371": {
    "id": "7001371",
    "name": "Lostock Hall",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.687069,
      "latitude": 53.724316
    }
  },
  "7001372": {
    "id": "7001372",
    "name": "Liverpool Lime Street",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.977746,
      "latitude": 53.407299
    }
  },
  "7001373": {
    "id": "7001373",
    "name": "Llanaber",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.078263,
      "latitude": 52.741375
    }
  },
  "7001374": {
    "id": "7001374",
    "name": "Llanbedr",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.110252,
      "latitude": 52.820835
    }
  },
  "7001375": {
    "id": "7001375",
    "name": "Llanbradach",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.233085,
      "latitude": 51.60321
    }
  },
  "7001376": {
    "id": "7001376",
    "name": "Llandaf",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.229076,
      "latitude": 51.507942
    }
  },
  "7001378": {
    "id": "7001378",
    "name": "Llanfairfechan",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.983256,
      "latitude": 53.257278
    }
  },
  "7001379": {
    "id": "7001379",
    "name": "Llangadog",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.892638,
      "latitude": 51.940639
    }
  },
  "7001380": {
    "id": "7001380",
    "name": "Lealholm",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.826027,
      "latitude": 54.459885
    }
  },
  "7001381": {
    "id": "7001381",
    "name": "Llandeilo",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.987662,
      "latitude": 51.885117
    }
  },
  "7001382": {
    "id": "7001382",
    "name": "Llanelli",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.162068,
      "latitude": 51.673405
    }
  },
  "7001383": {
    "id": "7001383",
    "name": "Llangammarch",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.55528,
      "latitude": 52.113724
    }
  },
  "7001384": {
    "id": "7001384",
    "name": "Llandanwg",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.124342,
      "latitude": 52.835865
    }
  },
  "7001385": {
    "id": "7001385",
    "name": "Llandrindod",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.37963,
      "latitude": 52.242687
    }
  },
  "7001386": {
    "id": "7001386",
    "name": "Llanfairpwll",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.209263,
      "latitude": 53.22094
    }
  },
  "7001387": {
    "id": "7001387",
    "name": "Llanbister Road",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.212283,
      "latitude": 52.336231
    }
  },
  "7001388": {
    "id": "7001388",
    "name": "Lelant Saltings",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -5.441468,
      "latitude": 50.17923
    }
  },
  "7001390": {
    "id": "7001390",
    "name": "Llandovery",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.803163,
      "latitude": 51.99509
    }
  },
  "7001391": {
    "id": "7001391",
    "name": "Llandecwyn",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.057092,
      "latitude": 52.920666
    }
  },
  "7001392": {
    "id": "7001392",
    "name": "Llandybie",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.003658,
      "latitude": 51.820099
    }
  },
  "7001393": {
    "id": "7001393",
    "name": "Moorfields",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.989182,
      "latitude": 53.408534
    }
  },
  "7001394": {
    "id": "7001394",
    "name": "London Marylebone",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.163605,
      "latitude": 51.52248
    }
  },
  "7001395": {
    "id": "7001395",
    "name": "West Brompton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.195265,
      "latitude": 51.487289
    }
  },
  "7001396": {
    "id": "7001396",
    "name": "Llangynllo",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.161273,
      "latitude": 52.350227
    }
  },
  "7001397": {
    "id": "7001397",
    "name": "Lenham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.707337,
      "latitude": 51.233986
    }
  },
  "7001398": {
    "id": "7001398",
    "name": "Lanark",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.772901,
      "latitude": 55.673119
    }
  },
  "7001399": {
    "id": "7001399",
    "name": "Llangennech",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.078988,
      "latitude": 51.691093
    }
  },
  "7001400": {
    "id": "7001400",
    "name": "Llanishen",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.182181,
      "latitude": 51.533592
    }
  },
  "7001401": {
    "id": "7001401",
    "name": "Loch Awe",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -5.040117,
      "latitude": 56.402481
    }
  },
  "7001402": {
    "id": "7001402",
    "name": "Loch Eil Outward Bound",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -5.191638,
      "latitude": 56.855343
    }
  },
  "7001403": {
    "id": "7001403",
    "name": "Lochailort",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -5.663456,
      "latitude": 56.881035
    }
  },
  "7001405": {
    "id": "7001405",
    "name": "Locheilside",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -5.290086,
      "latitude": 56.855473
    }
  },
  "7001406": {
    "id": "7001406",
    "name": "Lochgelly",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.312958,
      "latitude": 56.13538
    }
  },
  "7001407": {
    "id": "7001407",
    "name": "Lockerbie",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.353242,
      "latitude": 55.123085
    }
  },
  "7001408": {
    "id": "7001408",
    "name": "Lochluichart",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.809628,
      "latitude": 57.621277
    }
  },
  "7001410": {
    "id": "7001410",
    "name": "Lochwinnoch",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.617038,
      "latitude": 55.786549
    }
  },
  "7001411": {
    "id": "7001411",
    "name": "Looe",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.456029,
      "latitude": 50.359234
    }
  },
  "7001412": {
    "id": "7001412",
    "name": "Leigh-On-Sea",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.640454,
      "latitude": 51.541309
    }
  },
  "7001413": {
    "id": "7001413",
    "name": "Loughborough",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.194952,
      "latitude": 52.779327
    }
  },
  "7001414": {
    "id": "7001414",
    "name": "Lockwood",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.800335,
      "latitude": 53.635849
    }
  },
  "7001415": {
    "id": "7001415",
    "name": "London Paddington",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.176049,
      "latitude": 51.516014
    }
  },
  "7001416": {
    "id": "7001416",
    "name": "Lapford",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.811489,
      "latitude": 50.857384
    }
  },
  "7001417": {
    "id": "7001417",
    "name": "Long Preston",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.254533,
      "latitude": 54.017115
    }
  },
  "7001418": {
    "id": "7001418",
    "name": "Lapworth",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.72549,
      "latitude": 52.341232
    }
  },
  "7001420": {
    "id": "7001420",
    "name": "London Road (Brighton)",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.136696,
      "latitude": 50.836773
    }
  },
  "7001421": {
    "id": "7001421",
    "name": "London Road (Guildford)",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.56506,
      "latitude": 51.24067
    }
  },
  "7001422": {
    "id": "7001422",
    "name": "Largs",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.867942,
      "latitude": 55.792637
    }
  },
  "7001423": {
    "id": "7001423",
    "name": "Llanrwst",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.802844,
      "latitude": 53.14401
    }
  },
  "7001425": {
    "id": "7001425",
    "name": "Lowestoft",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.749009,
      "latitude": 52.473618
    }
  },
  "7001426": {
    "id": "7001426",
    "name": "Lostock Gralam",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.465197,
      "latitude": 53.267677
    }
  },
  "7001427": {
    "id": "7001427",
    "name": "Lewisham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.014703,
      "latitude": 51.466099
    }
  },
  "7001428": {
    "id": "7001428",
    "name": "Liss",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.893023,
      "latitude": 51.044254
    }
  },
  "7001429": {
    "id": "7001429",
    "name": "Lostock",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.494276,
      "latitude": 53.572969
    }
  },
  "7001430": {
    "id": "7001430",
    "name": "Leasowe",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.099624,
      "latitude": 53.408035
    }
  },
  "7001432": {
    "id": "7001432",
    "name": "Leatherhead",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.333225,
      "latitude": 51.298397
    }
  },
  "7001433": {
    "id": "7001433",
    "name": "Longton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.137216,
      "latitude": 52.990013
    }
  },
  "7001434": {
    "id": "7001434",
    "name": "Littleport",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.316905,
      "latitude": 52.462696
    }
  },
  "7001435": {
    "id": "7001435",
    "name": "Little Sutton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.943134,
      "latitude": 53.285537
    }
  },
  "7001436": {
    "id": "7001436",
    "name": "Lichfield Trent Valley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.800014,
      "latitude": 52.6869
    }
  },
  "7001437": {
    "id": "7001437",
    "name": "Lostwithiel",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.665497,
      "latitude": 50.40744
    }
  },
  "7001438": {
    "id": "7001438",
    "name": "Luton Airport",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.413341,
      "latitude": 51.880918
    }
  },
  "7001439": {
    "id": "7001439",
    "name": "Ludlow",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.715275,
      "latitude": 52.370853
    }
  },
  "7001440": {
    "id": "7001440",
    "name": "Luxulyan",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.747551,
      "latitude": 50.390244
    }
  },
  "7001441": {
    "id": "7001441",
    "name": "Livingston North",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.543357,
      "latitude": 55.901736
    }
  },
  "7001442": {
    "id": "7001442",
    "name": "Livingston South",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.503823,
      "latitude": 55.871712
    }
  },
  "7001443": {
    "id": "7001443",
    "name": "Lisvane & Thornhill",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.185344,
      "latitude": 51.544357
    }
  },
  "7001444": {
    "id": "7001444",
    "name": "London Waterloo",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.111126,
      "latitude": 51.501865
    }
  },
  "7001445": {
    "id": "7001445",
    "name": "Lowdham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.998465,
      "latitude": 53.007072
    }
  },
  "7001446": {
    "id": "7001446",
    "name": "London Waterloo (East)",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.10814,
      "latitude": 51.504513
    }
  },
  "7001447": {
    "id": "7001447",
    "name": "Lawrence Hill",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.564183,
      "latitude": 51.458168
    }
  },
  "7001449": {
    "id": "7001449",
    "name": "Llwynypia",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.453557,
      "latitude": 51.633957
    }
  },
  "7001450": {
    "id": "7001450",
    "name": "Llanwrda",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.871719,
      "latitude": 51.962551
    }
  },
  "7001451": {
    "id": "7001451",
    "name": "Lower Sydenham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.033746,
      "latitude": 51.425056
    }
  },
  "7001452": {
    "id": "7001452",
    "name": "Llanwrtyd",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.632354,
      "latitude": 52.104584
    }
  },
  "7001453": {
    "id": "7001453",
    "name": "Llwyngwril",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.088024,
      "latitude": 52.66658
    }
  },
  "7001454": {
    "id": "7001454",
    "name": "Lye",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.116233,
      "latitude": 52.459267
    }
  },
  "7001455": {
    "id": "7001455",
    "name": "Lympstone Commando",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.438876,
      "latitude": 50.661121
    }
  },
  "7001456": {
    "id": "7001456",
    "name": "Lydney",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.531189,
      "latitude": 51.714584
    }
  },
  "7001457": {
    "id": "7001457",
    "name": "Leytonstone High Road",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.008304,
      "latitude": 51.563725
    }
  },
  "7001458": {
    "id": "7001458",
    "name": "Lytham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.964206,
      "latitude": 53.739101
    }
  },
  "7001459": {
    "id": "7001459",
    "name": "Lymington Pier",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.529275,
      "latitude": 50.758083
    }
  },
  "7001461": {
    "id": "7001461",
    "name": "Lymington Town",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.537753,
      "latitude": 50.760818
    }
  },
  "7001462": {
    "id": "7001462",
    "name": "Lympstone Village",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.431419,
      "latitude": 50.648621
    }
  },
  "7001463": {
    "id": "7001463",
    "name": "Mallaig",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -5.8306,
      "latitude": 57.005497
    }
  },
  "7001464": {
    "id": "7001464",
    "name": "Maidstone Barracks",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.514148,
      "latitude": 51.277288
    }
  },
  "7001465": {
    "id": "7001465",
    "name": "Macclesfield",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.121397,
      "latitude": 53.259331
    }
  },
  "7001466": {
    "id": "7001466",
    "name": "Maidenhead Station",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.722464,
      "latitude": 51.518601
    }
  },
  "7001467": {
    "id": "7001467",
    "name": "Maidstone East",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.520618,
      "latitude": 51.277729
    }
  },
  "7001468": {
    "id": "7001468",
    "name": "Maghull",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.930828,
      "latitude": 53.506464
    }
  },
  "7001469": {
    "id": "7001469",
    "name": "Machynlleth",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.854311,
      "latitude": 52.595844
    }
  },
  "7001470": {
    "id": "7001470",
    "name": "Malton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.798593,
      "latitude": 54.13155
    }
  },
  "7001471": {
    "id": "7001471",
    "name": "Malden Manor",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.261118,
      "latitude": 51.384579
    }
  },
  "7001472": {
    "id": "7001472",
    "name": "Maiden Newton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.568749,
      "latitude": 50.780128
    }
  },
  "7001473": {
    "id": "7001473",
    "name": "March",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.090409,
      "latitude": 52.560432
    }
  },
  "7001474": {
    "id": "7001474",
    "name": "Marton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.197708,
      "latitude": 54.543808
    }
  },
  "7001475": {
    "id": "7001475",
    "name": "Mauldeth Road",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.209325,
      "latitude": 53.432984
    }
  },
  "7001476": {
    "id": "7001476",
    "name": "Maidstone West",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.515975,
      "latitude": 51.270943
    }
  },
  "7001477": {
    "id": "7001477",
    "name": "Maybole",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.686269,
      "latitude": 55.354485
    }
  },
  "7001478": {
    "id": "7001478",
    "name": "Maze Hill",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.003311,
      "latitude": 51.482883
    }
  },
  "7001479": {
    "id": "7001479",
    "name": "Moulsecoomb",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.12076,
      "latitude": 50.844616
    }
  },
  "7001480": {
    "id": "7001480",
    "name": "Meadowhall",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.411669,
      "latitude": 53.417046
    }
  },
  "7001481": {
    "id": "7001481",
    "name": "Meldreth",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.00853,
      "latitude": 52.090687
    }
  },
  "7001482": {
    "id": "7001482",
    "name": "Morden South",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.200299,
      "latitude": 51.396248
    }
  },
  "7001483": {
    "id": "7001483",
    "name": "Meols Cop",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.975696,
      "latitude": 53.645519
    }
  },
  "7001484": {
    "id": "7001484",
    "name": "Meopham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.356977,
      "latitude": 51.386368
    }
  },
  "7001485": {
    "id": "7001485",
    "name": "Melton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.338085,
      "latitude": 52.103683
    }
  },
  "7001486": {
    "id": "7001486",
    "name": "Melton Mowbray",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.885564,
      "latitude": 52.760643
    }
  },
  "7001487": {
    "id": "7001487",
    "name": "Menheniot",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.40938,
      "latitude": 50.426183
    }
  },
  "7001489": {
    "id": "7001489",
    "name": "Meols",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.15431,
      "latitude": 53.399356
    }
  },
  "7001490": {
    "id": "7001490",
    "name": "Merthyr Tydfil",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.377458,
      "latitude": 51.745476
    }
  },
  "7001491": {
    "id": "7001491",
    "name": "Mexborough",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.28855,
      "latitude": 53.490986
    }
  },
  "7001492": {
    "id": "7001492",
    "name": "Micklefield",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.324507,
      "latitude": 53.788715
    }
  },
  "7001493": {
    "id": "7001493",
    "name": "Minffordd",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.085625,
      "latitude": 52.926464
    }
  },
  "7001494": {
    "id": "7001494",
    "name": "Morfa Mawddach",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.032224,
      "latitude": 52.7071
    }
  },
  "7001495": {
    "id": "7001495",
    "name": "Mount Florida",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.262067,
      "latitude": 55.826859
    }
  },
  "7001496": {
    "id": "7001496",
    "name": "Margate",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.371737,
      "latitude": 51.384926
    }
  },
  "7001497": {
    "id": "7001497",
    "name": "Milngavie",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.315152,
      "latitude": 55.94091
    }
  },
  "7001498": {
    "id": "7001498",
    "name": "Market Harborough",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.908868,
      "latitude": 52.480366
    }
  },
  "7001499": {
    "id": "7001499",
    "name": "Mill Hill Broadway",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.249522,
      "latitude": 51.612823
    }
  },
  "7001500": {
    "id": "7001500",
    "name": "Mossley Hill",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.915464,
      "latitude": 53.379025
    }
  },
  "7001501": {
    "id": "7001501",
    "name": "Mills Hill",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.171484,
      "latitude": 53.551393
    }
  },
  "7001502": {
    "id": "7001502",
    "name": "Middlesbrough",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.232596,
      "latitude": 54.579086
    }
  },
  "7001503": {
    "id": "7001503",
    "name": "Millbrook (Bedfordshire)",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.532724,
      "latitude": 52.053822
    }
  },
  "7001504": {
    "id": "7001504",
    "name": "Micheldever",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.260283,
      "latitude": 51.182034
    }
  },
  "7001505": {
    "id": "7001505",
    "name": "Midgham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.177683,
      "latitude": 51.395805
    }
  },
  "7001506": {
    "id": "7001506",
    "name": "Milford (Surrey)",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.63701,
      "latitude": 51.163849
    }
  },
  "7001507": {
    "id": "7001507",
    "name": "Milford Haven",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -5.041485,
      "latitude": 51.715977
    }
  },
  "7001508": {
    "id": "7001508",
    "name": "Moreton-In-Marsh",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.7014,
      "latitude": 51.992336
    }
  },
  "7001509": {
    "id": "7001509",
    "name": "Marske",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.018892,
      "latitude": 54.587433
    }
  },
  "7001510": {
    "id": "7001510",
    "name": "Milton Keynes Central",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.77341,
      "latitude": 52.034357
    }
  },
  "7001511": {
    "id": "7001511",
    "name": "Milliken Park",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.533405,
      "latitude": 55.825157
    }
  },
  "7001512": {
    "id": "7001512",
    "name": "Maryland",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.006075,
      "latitude": 51.545784
    }
  },
  "7001513": {
    "id": "7001513",
    "name": "Millbrook (Hants)",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.433848,
      "latitude": 50.911434
    }
  },
  "7001514": {
    "id": "7001514",
    "name": "Mill Hill (Lancashire)",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.501433,
      "latitude": 53.735433
    }
  },
  "7001515": {
    "id": "7001515",
    "name": "Mortlake",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.266575,
      "latitude": 51.468288
    }
  },
  "7001516": {
    "id": "7001516",
    "name": "Millom",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.271108,
      "latitude": 54.210831
    }
  },
  "7001519": {
    "id": "7001519",
    "name": "Mistley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.080205,
      "latitude": 51.943417
    }
  },
  "7001520": {
    "id": "7001520",
    "name": "Martin Mill",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.348907,
      "latitude": 51.170593
    }
  },
  "7001521": {
    "id": "7001521",
    "name": "Manea",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.178779,
      "latitude": 52.497692
    }
  },
  "7001522": {
    "id": "7001522",
    "name": "Manningtree",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.045653,
      "latitude": 51.948818
    }
  },
  "7001523": {
    "id": "7001523",
    "name": "Manorbier",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.7919,
      "latitude": 51.660114
    }
  },
  "7001524": {
    "id": "7001524",
    "name": "Manor Park",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.045309,
      "latitude": 51.552296
    }
  },
  "7001525": {
    "id": "7001525",
    "name": "Manor Road",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.171468,
      "latitude": 53.394772
    }
  },
  "7001526": {
    "id": "7001526",
    "name": "Manors",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.606296,
      "latitude": 54.972698
    }
  },
  "7001527": {
    "id": "7001527",
    "name": "Manchester Oxford Road",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.242531,
      "latitude": 53.47398
    }
  },
  "7001528": {
    "id": "7001528",
    "name": "Mobberley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.333309,
      "latitude": 53.329941
    }
  },
  "7001530": {
    "id": "7001530",
    "name": "Moorgate",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.09027,
      "latitude": 51.5186
    }
  },
  "7001531": {
    "id": "7001531",
    "name": "Monifieth",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.818249,
      "latitude": 56.480167
    }
  },
  "7001532": {
    "id": "7001532",
    "name": "Montpelier",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.588525,
      "latitude": 51.468205
    }
  },
  "7001533": {
    "id": "7001533",
    "name": "Morar",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -5.821991,
      "latitude": 56.969788
    }
  },
  "7001534": {
    "id": "7001534",
    "name": "Montrose",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.47207,
      "latitude": 56.71286
    }
  },
  "7001535": {
    "id": "7001535",
    "name": "Moorthorpe",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.304952,
      "latitude": 53.594452
    }
  },
  "7001536": {
    "id": "7001536",
    "name": "Morley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.592033,
      "latitude": 53.75037
    }
  },
  "7001537": {
    "id": "7001537",
    "name": "Manchester Piccadilly",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.228991,
      "latitude": 53.476704
    }
  },
  "7001539": {
    "id": "7001539",
    "name": "Morpeth",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.682903,
      "latitude": 55.162537
    }
  },
  "7001540": {
    "id": "7001540",
    "name": "Motspur Park",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.23916,
      "latitude": 51.395042
    }
  },
  "7001541": {
    "id": "7001541",
    "name": "Market Rasen",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.337075,
      "latitude": 53.384441
    }
  },
  "7001542": {
    "id": "7001542",
    "name": "Monks Risborough",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.829882,
      "latitude": 51.735134
    }
  },
  "7001543": {
    "id": "7001543",
    "name": "Morecambe",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.869379,
      "latitude": 54.070322
    }
  },
  "7001544": {
    "id": "7001544",
    "name": "Marden",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.49359,
      "latitude": 51.175785
    }
  },
  "7001545": {
    "id": "7001545",
    "name": "Mirfield",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.692696,
      "latitude": 53.671577
    }
  },
  "7001546": {
    "id": "7001546",
    "name": "Markinch",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.131414,
      "latitude": 56.200069
    }
  },
  "7001547": {
    "id": "7001547",
    "name": "Marlow",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.766452,
      "latitude": 51.570995
    }
  },
  "7001548": {
    "id": "7001548",
    "name": "Marple",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.057168,
      "latitude": 53.400763
    }
  },
  "7001549": {
    "id": "7001549",
    "name": "Morchard Road",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.776424,
      "latitude": 50.831841
    }
  },
  "7001550": {
    "id": "7001550",
    "name": "Melrose",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.715786,
      "latitude": 55.59753
    }
  },
  "7001551": {
    "id": "7001551",
    "name": "Marks Tey",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.782372,
      "latitude": 51.880695
    }
  },
  "7001552": {
    "id": "7001552",
    "name": "Maryport",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.494738,
      "latitude": 54.711597
    }
  },
  "7001553": {
    "id": "7001553",
    "name": "Marsden",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.93197,
      "latitude": 53.602737
    }
  },
  "7001554": {
    "id": "7001554",
    "name": "Moorside",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.35146,
      "latitude": 53.516354
    }
  },
  "7001555": {
    "id": "7001555",
    "name": "Moses Gate",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.400931,
      "latitude": 53.55604
    }
  },
  "7001556": {
    "id": "7001556",
    "name": "Melksham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.14449,
      "latitude": 51.379803
    }
  },
  "7001557": {
    "id": "7001557",
    "name": "Mossley (Grtr Manchester)",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.041263,
      "latitude": 53.514963
    }
  },
  "7001558": {
    "id": "7001558",
    "name": "Moston",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.171925,
      "latitude": 53.52264
    }
  },
  "7001559": {
    "id": "7001559",
    "name": "Mosspark",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.336232,
      "latitude": 55.838947
    }
  },
  "7001560": {
    "id": "7001560",
    "name": "Moss Side",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.943548,
      "latitude": 53.764431
    }
  },
  "7001561": {
    "id": "7001561",
    "name": "Minster",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.317431,
      "latitude": 51.329807
    }
  },
  "7001562": {
    "id": "7001562",
    "name": "Menston",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.735205,
      "latitude": 53.891895
    }
  },
  "7001563": {
    "id": "7001563",
    "name": "Mountain Ash",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.378478,
      "latitude": 51.683422
    }
  },
  "7001564": {
    "id": "7001564",
    "name": "Matlock Bath",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.55766,
      "latitude": 53.121941
    }
  },
  "7001567": {
    "id": "7001567",
    "name": "Marston Green",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.755616,
      "latitude": 52.467159
    }
  },
  "7001568": {
    "id": "7001568",
    "name": "Martins Heron",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.720386,
      "latitude": 51.406689
    }
  },
  "7001569": {
    "id": "7001569",
    "name": "Mortimer",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.035979,
      "latitude": 51.371941
    }
  },
  "7001570": {
    "id": "7001570",
    "name": "Mitcham Junction",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.157308,
      "latitude": 51.392887
    }
  },
  "7001571": {
    "id": "7001571",
    "name": "Matlock",
    "isMeta": true,
    "country": "GB",
    "location": {
      "longitude": -1.55,
      "latitude": 53.14
    }
  },
  "7001572": {
    "id": "7001572",
    "name": "Merstham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.149555,
      "latitude": 51.264164
    }
  },
  "7001573": {
    "id": "7001573",
    "name": "Moreton (Merseyside)",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.113156,
      "latitude": 53.407917
    }
  },
  "7001574": {
    "id": "7001574",
    "name": "Moreton (Dorset)",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.312914,
      "latitude": 50.701057
    }
  },
  "7001576": {
    "id": "7001576",
    "name": "Metheringham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.391421,
      "latitude": 53.138866
    }
  },
  "7001577": {
    "id": "7001577",
    "name": "Mottingham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.050353,
      "latitude": 51.439804
    }
  },
  "7001578": {
    "id": "7001578",
    "name": "Merthyr Vale",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.336622,
      "latitude": 51.686607
    }
  },
  "7001579": {
    "id": "7001579",
    "name": "Motherwell",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.995234,
      "latitude": 55.791927
    }
  },
  "7001581": {
    "id": "7001581",
    "name": "Muirend",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.273888,
      "latitude": 55.810459
    }
  },
  "7001582": {
    "id": "7001582",
    "name": "Muir of Ord",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.460981,
      "latitude": 57.518017
    }
  },
  "7001583": {
    "id": "7001583",
    "name": "Musselburgh",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.062719,
      "latitude": 55.930225
    }
  },
  "7001584": {
    "id": "7001584",
    "name": "Manchester Victoria",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.242607,
      "latitude": 53.487465
    }
  },
  "7001585": {
    "id": "7001585",
    "name": "Malvern Link",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.31987,
      "latitude": 52.12534
    }
  },
  "7001586": {
    "id": "7001586",
    "name": "Middlewood",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.084111,
      "latitude": 53.359142
    }
  },
  "7001587": {
    "id": "7001587",
    "name": "Mouldsworth",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.732546,
      "latitude": 53.231976
    }
  },
  "7001588": {
    "id": "7001588",
    "name": "Maxwell Park",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.289813,
      "latitude": 55.837124
    }
  },
  "7001589": {
    "id": "7001589",
    "name": "Mytholmroyd",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.981773,
      "latitude": 53.729496
    }
  },
  "7001590": {
    "id": "7001590",
    "name": "Newark Northgate",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.799644,
      "latitude": 53.082542
    }
  },
  "7001591": {
    "id": "7001591",
    "name": "Newton Abbot",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.599957,
      "latitude": 50.529507
    }
  },
  "7001592": {
    "id": "7001592",
    "name": "Nailsea & Backwell",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.750661,
      "latitude": 51.419357
    }
  },
  "7001593": {
    "id": "7001593",
    "name": "Nafferton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.386948,
      "latitude": 54.011684
    }
  },
  "7001594": {
    "id": "7001594",
    "name": "Nairn",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.873024,
      "latitude": 57.580227
    }
  },
  "7001595": {
    "id": "7001595",
    "name": "Nantwich",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.518868,
      "latitude": 53.063533
    }
  },
  "7001596": {
    "id": "7001596",
    "name": "Narberth",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.726567,
      "latitude": 51.800156
    }
  },
  "7001597": {
    "id": "7001597",
    "name": "Narborough",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.20318,
      "latitude": 52.571712
    }
  },
  "7001598": {
    "id": "7001598",
    "name": "Newbury Racecourse",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.308549,
      "latitude": 51.39814
    }
  },
  "7001599": {
    "id": "7001599",
    "name": "Norton Bridge",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.190102,
      "latitude": 52.865513
    }
  },
  "7001600": {
    "id": "7001600",
    "name": "New Beckenham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.035525,
      "latitude": 51.416988
    }
  },
  "7001601": {
    "id": "7001601",
    "name": "New Barnet",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.172972,
      "latitude": 51.648521
    }
  },
  "7001602": {
    "id": "7001602",
    "name": "Newbury",
    "isMeta": true,
    "country": "GB",
    "location": {
      "longitude": -1.323,
      "latitude": 51.401
    }
  },
  "7001603": {
    "id": "7001603",
    "name": "New Brighton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.049191,
      "latitude": 53.43726
    }
  },
  "7001604": {
    "id": "7001604",
    "name": "North Berwick",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.728989,
      "latitude": 56.057545
    }
  },
  "7001605": {
    "id": "7001605",
    "name": "Newcastle",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.617264,
      "latitude": 54.968243
    }
  },
  "7001606": {
    "id": "7001606",
    "name": "New Cross Gate",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.041655,
      "latitude": 51.475544
    }
  },
  "7001607": {
    "id": "7001607",
    "name": "New Cumnock",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.182457,
      "latitude": 55.402271
    }
  },
  "7001608": {
    "id": "7001608",
    "name": "New Cross",
    "isMeta": true,
    "country": "GB",
    "location": {
      "longitude": -0.0337,
      "latitude": 51.4709
    }
  },
  "7001609": {
    "id": "7001609",
    "name": "Nuneaton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.463431,
      "latitude": 52.526436
    }
  },
  "7001610": {
    "id": "7001610",
    "name": "Neath",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.807267,
      "latitude": 51.662315
    }
  },
  "7001611": {
    "id": "7001611",
    "name": "New Clee",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.060771,
      "latitude": 53.574455
    }
  },
  "7001612": {
    "id": "7001612",
    "name": "Netherfield",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.078427,
      "latitude": 52.960972
    }
  },
  "7001613": {
    "id": "7001613",
    "name": "Needham Market",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.051047,
      "latitude": 52.156437
    }
  },
  "7001614": {
    "id": "7001614",
    "name": "Neilston",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.426945,
      "latitude": 55.782364
    }
  },
  "7001615": {
    "id": "7001615",
    "name": "Nelson",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.214223,
      "latitude": 53.834469
    }
  },
  "7001616": {
    "id": "7001616",
    "name": "Neston",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.063769,
      "latitude": 53.292419
    }
  },
  "7001617": {
    "id": "7001617",
    "name": "Nethertown",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.566201,
      "latitude": 54.456699
    }
  },
  "7001618": {
    "id": "7001618",
    "name": "Newark Castle",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.813151,
      "latitude": 53.079987
    }
  },
  "7001620": {
    "id": "7001620",
    "name": "Newton for Hyde",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.067735,
      "latitude": 53.45623
    }
  },
  "7001621": {
    "id": "7001621",
    "name": "Nottingham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.146441,
      "latitude": 52.946905
    }
  },
  "7001622": {
    "id": "7001622",
    "name": "New Holland",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.360936,
      "latitude": 53.702106
    }
  },
  "7001623": {
    "id": "7001623",
    "name": "Northumberland Park",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.053558,
      "latitude": 51.601643
    }
  },
  "7001624": {
    "id": "7001624",
    "name": "New Hythe",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.455075,
      "latitude": 51.312401
    }
  },
  "7001626": {
    "id": "7001626",
    "name": "Ninian Park",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.200846,
      "latitude": 51.475861
    }
  },
  "7001627": {
    "id": "7001627",
    "name": "Nitshill",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.360126,
      "latitude": 55.811531
    }
  },
  "7001628": {
    "id": "7001628",
    "name": "New Lane",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.86758,
      "latitude": 53.611298
    }
  },
  "7001629": {
    "id": "7001629",
    "name": "Newton-Le-Willows",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.614369,
      "latitude": 53.452873
    }
  },
  "7001630": {
    "id": "7001630",
    "name": "New Malden",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.256084,
      "latitude": 51.403393
    }
  },
  "7001631": {
    "id": "7001631",
    "name": "New Mills Central",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.007485,
      "latitude": 53.364567
    }
  },
  "7001632": {
    "id": "7001632",
    "name": "Newmarket",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.406249,
      "latitude": 52.237904
    }
  },
  "7001633": {
    "id": "7001633",
    "name": "New Mills Newtown",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.00898,
      "latitude": 53.359169
    }
  },
  "7001634": {
    "id": "7001634",
    "name": "New Milton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.658313,
      "latitude": 50.755836
    }
  },
  "7001635": {
    "id": "7001635",
    "name": "Norwich",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.306879,
      "latitude": 52.627121
    }
  },
  "7001636": {
    "id": "7001636",
    "name": "Newton-On-Ayr",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.62632,
      "latitude": 55.473541
    }
  },
  "7001637": {
    "id": "7001637",
    "name": "Norbury",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.123492,
      "latitude": 51.411236
    }
  },
  "7001638": {
    "id": "7001638",
    "name": "North Camp",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.731195,
      "latitude": 51.275517
    }
  },
  "7001639": {
    "id": "7001639",
    "name": "North Dulwich",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.087163,
      "latitude": 51.454712
    }
  },
  "7001640": {
    "id": "7001640",
    "name": "Northfield",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.96469,
      "latitude": 52.408073
    }
  },
  "7001641": {
    "id": "7001641",
    "name": "Northampton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.906689,
      "latitude": 52.237433
    }
  },
  "7001642": {
    "id": "7001642",
    "name": "Norwood Junction",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.075201,
      "latitude": 51.396965
    }
  },
  "7001643": {
    "id": "7001643",
    "name": "North Llanrwst",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.792723,
      "latitude": 53.141348
    }
  },
  "7001644": {
    "id": "7001644",
    "name": "Normans Bay",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.389669,
      "latitude": 50.825382
    }
  },
  "7001645": {
    "id": "7001645",
    "name": "Northolt Park",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.359827,
      "latitude": 51.557762
    }
  },
  "7001646": {
    "id": "7001646",
    "name": "Norbiton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.284525,
      "latitude": 51.411907
    }
  },
  "7001647": {
    "id": "7001647",
    "name": "Normanton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.424378,
      "latitude": 53.700249
    }
  },
  "7001648": {
    "id": "7001648",
    "name": "North Walsham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.385142,
      "latitude": 52.817383
    }
  },
  "7001649": {
    "id": "7001649",
    "name": "Newport Gwent",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.998873,
      "latitude": 51.590145
    }
  },
  "7001650": {
    "id": "7001650",
    "name": "New Pudsey",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.679581,
      "latitude": 53.804573
    }
  },
  "7001652": {
    "id": "7001652",
    "name": "Newport (Essex)",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.216176,
      "latitude": 51.97995
    }
  },
  "7001653": {
    "id": "7001653",
    "name": "Newquay",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -5.075769,
      "latitude": 50.415245
    }
  },
  "7001654": {
    "id": "7001654",
    "name": "North Queensferry",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.395426,
      "latitude": 56.013168
    }
  },
  "7001655": {
    "id": "7001655",
    "name": "North Road",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.554856,
      "latitude": 54.536667
    }
  },
  "7001656": {
    "id": "7001656",
    "name": "North Sheen",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.285423,
      "latitude": 51.464977
    }
  },
  "7001657": {
    "id": "7001657",
    "name": "Newton St Cyres",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.588594,
      "latitude": 50.77879
    }
  },
  "7001658": {
    "id": "7001658",
    "name": "New Southgate",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.142586,
      "latitude": 51.613876
    }
  },
  "7001659": {
    "id": "7001659",
    "name": "Northallerton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.441718,
      "latitude": 54.333084
    }
  },
  "7001660": {
    "id": "7001660",
    "name": "Netley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.341913,
      "latitude": 50.874977
    }
  },
  "7001661": {
    "id": "7001661",
    "name": "Newtonmore",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.118831,
      "latitude": 57.059673
    }
  },
  "7001662": {
    "id": "7001662",
    "name": "Newington",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.66269,
      "latitude": 51.353733
    }
  },
  "7001663": {
    "id": "7001663",
    "name": "Newtown (Powys)",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.311432,
      "latitude": 52.512291
    }
  },
  "7001664": {
    "id": "7001664",
    "name": "Nunhead",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.053546,
      "latitude": 51.466747
    }
  },
  "7001665": {
    "id": "7001665",
    "name": "Nutbourne",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.883508,
      "latitude": 50.846313
    }
  },
  "7001666": {
    "id": "7001666",
    "name": "Nutfield",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.132425,
      "latitude": 51.22702
    }
  },
  "7001667": {
    "id": "7001667",
    "name": "Nunthorpe",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.170195,
      "latitude": 54.528347
    }
  },
  "7001668": {
    "id": "7001668",
    "name": "Navigation Road",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.3435,
      "latitude": 53.395412
    }
  },
  "7001669": {
    "id": "7001669",
    "name": "Newhaven Harbour",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.054433,
      "latitude": 50.790398
    }
  },
  "7001670": {
    "id": "7001670",
    "name": "North Wembley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.303394,
      "latitude": 51.562355
    }
  },
  "7001671": {
    "id": "7001671",
    "name": "Newton Aycliffe",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.5881,
      "latitude": 54.613171
    }
  },
  "7001672": {
    "id": "7001672",
    "name": "New Eltham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.0704,
      "latitude": 51.437649
    }
  },
  "7001673": {
    "id": "7001673",
    "name": "Northwich",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.496815,
      "latitude": 53.261414
    }
  },
  "7001674": {
    "id": "7001674",
    "name": "Newton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.133907,
      "latitude": 55.819256
    }
  },
  "7001675": {
    "id": "7001675",
    "name": "Newhaven Town",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.054627,
      "latitude": 50.794888
    }
  },
  "7001677": {
    "id": "7001677",
    "name": "Oban",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -5.473841,
      "latitude": 56.411758
    }
  },
  "7001678": {
    "id": "7001678",
    "name": "Oakengates",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.451245,
      "latitude": 52.693104
    }
  },
  "7001679": {
    "id": "7001679",
    "name": "Oakham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.734019,
      "latitude": 52.671913
    }
  },
  "7001680": {
    "id": "7001680",
    "name": "Oakleigh Park",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.166189,
      "latitude": 51.637627
    }
  },
  "7001681": {
    "id": "7001681",
    "name": "Oulton Broad North",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.716998,
      "latitude": 52.478226
    }
  },
  "7001682": {
    "id": "7001682",
    "name": "Oulton Broad South",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.707425,
      "latitude": 52.469528
    }
  },
  "7001683": {
    "id": "7001683",
    "name": "Ockendon",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.290439,
      "latitude": 51.521687
    }
  },
  "7001684": {
    "id": "7001684",
    "name": "Ore",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.590783,
      "latitude": 50.866959
    }
  },
  "7001685": {
    "id": "7001685",
    "name": "Otford",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.196757,
      "latitude": 51.312141
    }
  },
  "7001686": {
    "id": "7001686",
    "name": "Old Hill",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.055913,
      "latitude": 52.470993
    }
  },
  "7001687": {
    "id": "7001687",
    "name": "Ockley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.335692,
      "latitude": 51.150955
    }
  },
  "7001688": {
    "id": "7001688",
    "name": "Olton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.804313,
      "latitude": 52.43848
    }
  },
  "7001690": {
    "id": "7001690",
    "name": "Oldfield Park",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.380742,
      "latitude": 51.37978
    }
  },
  "7001691": {
    "id": "7001691",
    "name": "Orpington",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.089049,
      "latitude": 51.373463
    }
  },
  "7001692": {
    "id": "7001692",
    "name": "Old Roan",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.951095,
      "latitude": 53.486871
    }
  },
  "7001693": {
    "id": "7001693",
    "name": "Ormskirk",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.881615,
      "latitude": 53.569014
    }
  },
  "7001694": {
    "id": "7001694",
    "name": "Orrell",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.709028,
      "latitude": 53.530548
    }
  },
  "7001695": {
    "id": "7001695",
    "name": "Orrell Park",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.962908,
      "latitude": 53.461991
    }
  },
  "7001696": {
    "id": "7001696",
    "name": "Old Street",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.088515,
      "latitude": 51.525776
    }
  },
  "7001699": {
    "id": "7001699",
    "name": "Overpool",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.924788,
      "latitude": 53.284155
    }
  },
  "7001700": {
    "id": "7001700",
    "name": "Overton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.25913,
      "latitude": 51.253971
    }
  },
  "7001702": {
    "id": "7001702",
    "name": "Outwood",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.512068,
      "latitude": 53.714115
    }
  },
  "7001703": {
    "id": "7001703",
    "name": "Oxford",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.270037,
      "latitude": 51.753549
    }
  },
  "7001704": {
    "id": "7001704",
    "name": "Oxenholme Lake District",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.722249,
      "latitude": 54.305169
    }
  },
  "7001705": {
    "id": "7001705",
    "name": "Oxshott",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.361993,
      "latitude": 51.336578
    }
  },
  "7001706": {
    "id": "7001706",
    "name": "Oxted",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.005075,
      "latitude": 51.257298
    }
  },
  "7001707": {
    "id": "7001707",
    "name": "Peterborough",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.24981,
      "latitude": 52.574947
    }
  },
  "7001708": {
    "id": "7001708",
    "name": "Paisley Gilmour Street",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.424646,
      "latitude": 55.848026
    }
  },
  "7001709": {
    "id": "7001709",
    "name": "Paisley Canal",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.422606,
      "latitude": 55.840878
    }
  },
  "7001710": {
    "id": "7001710",
    "name": "Paisley St James",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.442486,
      "latitude": 55.852165
    }
  },
  "7001711": {
    "id": "7001711",
    "name": "Par",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.704752,
      "latitude": 50.355263
    }
  },
  "7001712": {
    "id": "7001712",
    "name": "Pangbourne",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.090522,
      "latitude": 51.485231
    }
  },
  "7001713": {
    "id": "7001713",
    "name": "Potters Bar",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.192715,
      "latitude": 51.697392
    }
  },
  "7001714": {
    "id": "7001714",
    "name": "Pembroke Dock",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.93729,
      "latitude": 51.69434
    }
  },
  "7001715": {
    "id": "7001715",
    "name": "Pembrey & Burry Port",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.247899,
      "latitude": 51.683487
    }
  },
  "7001716": {
    "id": "7001716",
    "name": "Pembroke",
    "isMeta": true,
    "country": "GB",
    "location": {
      "longitude": -4.9158,
      "latitude": 51.67604
    }
  },
  "7001717": {
    "id": "7001717",
    "name": "Pemberton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.670225,
      "latitude": 53.530427
    }
  },
  "7001718": {
    "id": "7001718",
    "name": "Portchester",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.126361,
      "latitude": 50.848389
    }
  },
  "7001719": {
    "id": "7001719",
    "name": "Ponders End",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.034453,
      "latitude": 51.642693
    }
  },
  "7001720": {
    "id": "7001720",
    "name": "Penrith",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.758044,
      "latitude": 54.661831
    }
  },
  "7001721": {
    "id": "7001721",
    "name": "Perry Barr",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.90196,
      "latitude": 52.516361
    }
  },
  "7001722": {
    "id": "7001722",
    "name": "Petts Wood",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.075393,
      "latitude": 51.388996
    }
  },
  "7001723": {
    "id": "7001723",
    "name": "Penshurst",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.174125,
      "latitude": 51.197449
    }
  },
  "7001724": {
    "id": "7001724",
    "name": "Preston Park",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.154787,
      "latitude": 50.846054
    }
  },
  "7001725": {
    "id": "7001725",
    "name": "Penryn",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -5.110885,
      "latitude": 50.170206
    }
  },
  "7001726": {
    "id": "7001726",
    "name": "Pensarn",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.112216,
      "latitude": 52.830692
    }
  },
  "7001727": {
    "id": "7001727",
    "name": "Perranwell",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -5.111868,
      "latitude": 50.216431
    }
  },
  "7001728": {
    "id": "7001728",
    "name": "Pantyffynnon",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.997481,
      "latitude": 51.778835
    }
  },
  "7001729": {
    "id": "7001729",
    "name": "Pontefract Baghill",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.303355,
      "latitude": 53.691517
    }
  },
  "7001730": {
    "id": "7001730",
    "name": "Pontefract Monkhill",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.304749,
      "latitude": 53.698711
    }
  },
  "7001731": {
    "id": "7001731",
    "name": "Padgate",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.556521,
      "latitude": 53.405514
    }
  },
  "7001732": {
    "id": "7001732",
    "name": "Penge East",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.055566,
      "latitude": 51.419125
    }
  },
  "7001733": {
    "id": "7001733",
    "name": "Pengam",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.230578,
      "latitude": 51.670681
    }
  },
  "7001734": {
    "id": "7001734",
    "name": "Penge West",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.061402,
      "latitude": 51.417419
    }
  },
  "7001735": {
    "id": "7001735",
    "name": "Portsmouth Harbour",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.108895,
      "latitude": 50.796097
    }
  },
  "7001736": {
    "id": "7001736",
    "name": "Pollokshields East",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.269287,
      "latitude": 55.841103
    }
  },
  "7001737": {
    "id": "7001737",
    "name": "Penhelig",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.035051,
      "latitude": 52.545212
    }
  },
  "7001738": {
    "id": "7001738",
    "name": "Peckham Rye",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.067782,
      "latitude": 51.470585
    }
  },
  "7001739": {
    "id": "7001739",
    "name": "Pollokshields West",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.277043,
      "latitude": 55.83736
    }
  },
  "7001740": {
    "id": "7001740",
    "name": "Pilning",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.627192,
      "latitude": 51.556502
    }
  },
  "7001741": {
    "id": "7001741",
    "name": "Princes Risborough",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.844059,
      "latitude": 51.717697
    }
  },
  "7001742": {
    "id": "7001742",
    "name": "Pinhoe",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.469582,
      "latitude": 50.738079
    }
  },
  "7001743": {
    "id": "7001743",
    "name": "Pitsea",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.508806,
      "latitude": 51.560387
    }
  },
  "7001744": {
    "id": "7001744",
    "name": "Pitlochry",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.736085,
      "latitude": 56.70256
    }
  },
  "7001745": {
    "id": "7001745",
    "name": "Prittlewell",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.71167,
      "latitude": 51.550476
    }
  },
  "7001746": {
    "id": "7001746",
    "name": "Penkridge",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.119447,
      "latitude": 52.723611
    }
  },
  "7001747": {
    "id": "7001747",
    "name": "Pleasington",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.544142,
      "latitude": 53.730961
    }
  },
  "7001748": {
    "id": "7001748",
    "name": "Pollokshaws East",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.287476,
      "latitude": 55.824589
    }
  },
  "7001749": {
    "id": "7001749",
    "name": "Poulton-Le-Fylde",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.990212,
      "latitude": 53.848128
    }
  },
  "7001750": {
    "id": "7001750",
    "name": "Plumley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.419615,
      "latitude": 53.274809
    }
  },
  "7001751": {
    "id": "7001751",
    "name": "Polmont",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.716614,
      "latitude": 55.984856
    }
  },
  "7001752": {
    "id": "7001752",
    "name": "Plockton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -5.666848,
      "latitude": 57.333172
    }
  },
  "7001753": {
    "id": "7001753",
    "name": "Plumstead",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.082828,
      "latitude": 51.48959
    }
  },
  "7001755": {
    "id": "7001755",
    "name": "Pluckley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.748571,
      "latitude": 51.156578
    }
  },
  "7001756": {
    "id": "7001756",
    "name": "Pollokshaws West",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.301826,
      "latitude": 55.824318
    }
  },
  "7001757": {
    "id": "7001757",
    "name": "Plymouth",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.143386,
      "latitude": 50.377762
    }
  },
  "7001758": {
    "id": "7001758",
    "name": "Portsmouth Arms",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.950633,
      "latitude": 50.956768
    }
  },
  "7001759": {
    "id": "7001759",
    "name": "Palmers Green",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.109164,
      "latitude": 51.618736
    }
  },
  "7001760": {
    "id": "7001760",
    "name": "Penmaenmawr",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.923514,
      "latitude": 53.270635
    }
  },
  "7001761": {
    "id": "7001761",
    "name": "Penmere",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -5.083108,
      "latitude": 50.149736
    }
  },
  "7001762": {
    "id": "7001762",
    "name": "Pannal",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.533605,
      "latitude": 53.958687
    }
  },
  "7001763": {
    "id": "7001763",
    "name": "Penychain",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.33845,
      "latitude": 52.903
    }
  },
  "7001764": {
    "id": "7001764",
    "name": "Penyffordd",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.055472,
      "latitude": 53.143253
    }
  },
  "7001765": {
    "id": "7001765",
    "name": "Penarth",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.173908,
      "latitude": 51.435669
    }
  },
  "7001766": {
    "id": "7001766",
    "name": "Penally",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.72243,
      "latitude": 51.65905
    }
  },
  "7001767": {
    "id": "7001767",
    "name": "Penistone",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.62134,
      "latitude": 53.525757
    }
  },
  "7001768": {
    "id": "7001768",
    "name": "Poole",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.982964,
      "latitude": 50.718559
    }
  },
  "7001769": {
    "id": "7001769",
    "name": "Polsloe Bridge",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.501785,
      "latitude": 50.731274
    }
  },
  "7001770": {
    "id": "7001770",
    "name": "Portslade",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.204898,
      "latitude": 50.836044
    }
  },
  "7001771": {
    "id": "7001771",
    "name": "Port Glasgow",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.689432,
      "latitude": 55.9342
    }
  },
  "7001772": {
    "id": "7001772",
    "name": "Portlethen",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.128577,
      "latitude": 57.060455
    }
  },
  "7001773": {
    "id": "7001773",
    "name": "Pokesdown",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.82568,
      "latitude": 50.731022
    }
  },
  "7001774": {
    "id": "7001774",
    "name": "Polegate",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.251705,
      "latitude": 50.820934
    }
  },
  "7001775": {
    "id": "7001775",
    "name": "Porthmadog",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.136431,
      "latitude": 52.930954
    }
  },
  "7001776": {
    "id": "7001776",
    "name": "Pontypridd",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.342715,
      "latitude": 51.599312
    }
  },
  "7001777": {
    "id": "7001777",
    "name": "Porth",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.408079,
      "latitude": 51.61203
    }
  },
  "7001778": {
    "id": "7001778",
    "name": "Polesworth",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.60995,
      "latitude": 52.625893
    }
  },
  "7001779": {
    "id": "7001779",
    "name": "Poynton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.13448,
      "latitude": 53.350398
    }
  },
  "7001780": {
    "id": "7001780",
    "name": "Poppleton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.147657,
      "latitude": 53.976345
    }
  },
  "7001781": {
    "id": "7001781",
    "name": "Plumpton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.060435,
      "latitude": 50.929066
    }
  },
  "7001782": {
    "id": "7001782",
    "name": "Port Talbot Parkway",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.781362,
      "latitude": 51.591671
    }
  },
  "7001783": {
    "id": "7001783",
    "name": "Preston",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.707191,
      "latitude": 53.755721
    }
  },
  "7001784": {
    "id": "7001784",
    "name": "Parbold",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.770679,
      "latitude": 53.590856
    }
  },
  "7001785": {
    "id": "7001785",
    "name": "Prescot",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.799022,
      "latitude": 53.423535
    }
  },
  "7001786": {
    "id": "7001786",
    "name": "Penrhyndeudraeth",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.064905,
      "latitude": 52.928623
    }
  },
  "7001787": {
    "id": "7001787",
    "name": "Prees",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.689765,
      "latitude": 52.89962
    }
  },
  "7001789": {
    "id": "7001789",
    "name": "Priesthill & Darnley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.344246,
      "latitude": 55.812737
    }
  },
  "7001791": {
    "id": "7001791",
    "name": "Prestonpans",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.973665,
      "latitude": 55.953426
    }
  },
  "7001792": {
    "id": "7001792",
    "name": "Prestbury",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.14549,
      "latitude": 53.293465
    }
  },
  "7001793": {
    "id": "7001793",
    "name": "Prestatyn",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.407164,
      "latitude": 53.336491
    }
  },
  "7001794": {
    "id": "7001794",
    "name": "Partick",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.310921,
      "latitude": 55.869987
    }
  },
  "7001795": {
    "id": "7001795",
    "name": "Prudhoe",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.864077,
      "latitude": 54.966072
    }
  },
  "7001796": {
    "id": "7001796",
    "name": "Penrhiwceiber",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.363662,
      "latitude": 51.671906
    }
  },
  "7001798": {
    "id": "7001798",
    "name": "Pershore",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.071555,
      "latitude": 52.130249
    }
  },
  "7001799": {
    "id": "7001799",
    "name": "Port Sunlight",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.998248,
      "latitude": 53.349123
    }
  },
  "7001800": {
    "id": "7001800",
    "name": "Parkstone (Dorset)",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.94897,
      "latitude": 50.723049
    }
  },
  "7001801": {
    "id": "7001801",
    "name": "Parson Street",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.60991,
      "latitude": 51.432758
    }
  },
  "7001802": {
    "id": "7001802",
    "name": "Park Street",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.340727,
      "latitude": 51.725651
    }
  },
  "7001803": {
    "id": "7001803",
    "name": "Pegswood",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.64509,
      "latitude": 55.178616
    }
  },
  "7001804": {
    "id": "7001804",
    "name": "Perth",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.440068,
      "latitude": 56.39275
    }
  },
  "7001805": {
    "id": "7001805",
    "name": "Pentre-Bach",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.362362,
      "latitude": 51.724976
    }
  },
  "7001806": {
    "id": "7001806",
    "name": "Patricroft",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.357919,
      "latitude": 53.484745
    }
  },
  "7001807": {
    "id": "7001807",
    "name": "Pontarddulais",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.045417,
      "latitude": 51.716866
    }
  },
  "7001808": {
    "id": "7001808",
    "name": "Petersfield",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.940951,
      "latitude": 51.006924
    }
  },
  "7001809": {
    "id": "7001809",
    "name": "Prestwick",
    "isMeta": true,
    "country": "GB",
    "location": {
      "longitude": -4.61416,
      "latitude": 55.495551
    }
  },
  "7001810": {
    "id": "7001810",
    "name": "Pontlottyn",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.278995,
      "latitude": 51.74659
    }
  },
  "7001811": {
    "id": "7001811",
    "name": "Paignton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.564361,
      "latitude": 50.434658
    }
  },
  "7001812": {
    "id": "7001812",
    "name": "Parton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.580867,
      "latitude": 54.569795
    }
  },
  "7001813": {
    "id": "7001813",
    "name": "Pontypool and New Inn",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.014277,
      "latitude": 51.697926
    }
  },
  "7001814": {
    "id": "7001814",
    "name": "Peartree",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.473198,
      "latitude": 52.89684
    }
  },
  "7001815": {
    "id": "7001815",
    "name": "Patterton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.334935,
      "latitude": 55.790443
    }
  },
  "7001816": {
    "id": "7001816",
    "name": "Patchway",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.562647,
      "latitude": 51.52578
    }
  },
  "7001817": {
    "id": "7001817",
    "name": "Pulborough",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.517751,
      "latitude": 50.957355
    }
  },
  "7001818": {
    "id": "7001818",
    "name": "Purfleet",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.236575,
      "latitude": 51.481358
    }
  },
  "7001819": {
    "id": "7001819",
    "name": "Purley Station",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.113592,
      "latitude": 51.337334
    }
  },
  "7001820": {
    "id": "7001820",
    "name": "Putney",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.216463,
      "latitude": 51.46125
    }
  },
  "7001821": {
    "id": "7001821",
    "name": "Purley Oaks",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.098843,
      "latitude": 51.346989
    }
  },
  "7001822": {
    "id": "7001822",
    "name": "Pevensey Bay",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.342453,
      "latitude": 50.818249
    }
  },
  "7001823": {
    "id": "7001823",
    "name": "Pevensey & Westham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.325291,
      "latitude": 50.815899
    }
  },
  "7001824": {
    "id": "7001824",
    "name": "Paddock Wood",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.389485,
      "latitude": 51.182453
    }
  },
  "7001825": {
    "id": "7001825",
    "name": "Pwllheli",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.416754,
      "latitude": 52.887825
    }
  },
  "7001826": {
    "id": "7001826",
    "name": "Pewsey",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.771691,
      "latitude": 51.342411
    }
  },
  "7001827": {
    "id": "7001827",
    "name": "Pen-Y-Bont",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.321972,
      "latitude": 52.273914
    }
  },
  "7001828": {
    "id": "7001828",
    "name": "Pont-Y-Pant",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.862462,
      "latitude": 53.065033
    }
  },
  "7001829": {
    "id": "7001829",
    "name": "Penzance",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -5.532489,
      "latitude": 50.12162
    }
  },
  "7001830": {
    "id": "7001830",
    "name": "Queens Park London",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.204966,
      "latitude": 51.533916
    }
  },
  "7001831": {
    "id": "7001831",
    "name": "Queenborough",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.749756,
      "latitude": 51.416473
    }
  },
  "7001832": {
    "id": "7001832",
    "name": "Quintrell Downs",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -5.029838,
      "latitude": 50.403908
    }
  },
  "7001833": {
    "id": "7001833",
    "name": "Queens Park Glasgow",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.267368,
      "latitude": 55.835747
    }
  },
  "7001834": {
    "id": "7001834",
    "name": "Queens Road Peckham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.057553,
      "latitude": 51.47401
    }
  },
  "7001836": {
    "id": "7001836",
    "name": "Queenstown Road (Battersea)",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.146819,
      "latitude": 51.474552
    }
  },
  "7001837": {
    "id": "7001837",
    "name": "Quakers Yard",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.322844,
      "latitude": 51.660686
    }
  },
  "7001838": {
    "id": "7001838",
    "name": "Reading",
    "isMeta": true,
    "country": "GB",
    "location": {
      "longitude": -0.973056,
      "latitude": 51.454167
    }
  },
  "7001839": {
    "id": "7001839",
    "name": "Ramsgate",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.405833,
      "latitude": 51.340767
    }
  },
  "7001840": {
    "id": "7001840",
    "name": "Radyr",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.248028,
      "latitude": 51.515831
    }
  },
  "7001841": {
    "id": "7001841",
    "name": "Rannoch",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.576208,
      "latitude": 56.685318
    }
  },
  "7001842": {
    "id": "7001842",
    "name": "Rawcliffe",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.961174,
      "latitude": 53.688141
    }
  },
  "7001843": {
    "id": "7001843",
    "name": "Rayleigh",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.601393,
      "latitude": 51.589851
    }
  },
  "7001844": {
    "id": "7001844",
    "name": "Redbridge",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.470737,
      "latitude": 50.919697
    }
  },
  "7001845": {
    "id": "7001845",
    "name": "Rhiwbina",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.213561,
      "latitude": 51.520687
    }
  },
  "7001846": {
    "id": "7001846",
    "name": "Roy Bridge",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.83645,
      "latitude": 56.888184
    }
  },
  "7001848": {
    "id": "7001848",
    "name": "Radcliffe (Notts)",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.031059,
      "latitude": 52.948906
    }
  },
  "7001849": {
    "id": "7001849",
    "name": "Rauceby",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.455247,
      "latitude": 52.985081
    }
  },
  "7001850": {
    "id": "7001850",
    "name": "Redcar Central",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.069318,
      "latitude": 54.615692
    }
  },
  "7001851": {
    "id": "7001851",
    "name": "Redcar East",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.05088,
      "latitude": 54.609257
    }
  },
  "7001852": {
    "id": "7001852",
    "name": "Radley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.240398,
      "latitude": 51.685588
    }
  },
  "7001853": {
    "id": "7001853",
    "name": "Redditch",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.945248,
      "latitude": 52.306337
    }
  },
  "7001854": {
    "id": "7001854",
    "name": "Redhill",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.164851,
      "latitude": 51.240124
    }
  },
  "7001855": {
    "id": "7001855",
    "name": "Redland",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.598875,
      "latitude": 51.468792
    }
  },
  "7001856": {
    "id": "7001856",
    "name": "Riding Mill",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.97186,
      "latitude": 54.949066
    }
  },
  "7001857": {
    "id": "7001857",
    "name": "Reddish North",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.15656,
      "latitude": 53.448956
    }
  },
  "7001858": {
    "id": "7001858",
    "name": "Roydon",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.035088,
      "latitude": 51.775494
    }
  },
  "7001859": {
    "id": "7001859",
    "name": "Redruth",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -5.225877,
      "latitude": 50.233111
    }
  },
  "7001860": {
    "id": "7001860",
    "name": "Reddish South",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.159028,
      "latitude": 53.435873
    }
  },
  "7001861": {
    "id": "7001861",
    "name": "Reedham (Norfolk)",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.558941,
      "latitude": 52.564045
    }
  },
  "7001862": {
    "id": "7001862",
    "name": "Reedham (London)",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.123854,
      "latitude": 51.332108
    }
  },
  "7001863": {
    "id": "7001863",
    "name": "Rainford",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.789454,
      "latitude": 53.51694
    }
  },
  "7001864": {
    "id": "7001864",
    "name": "Rock Ferry",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.010898,
      "latitude": 53.372269
    }
  },
  "7001865": {
    "id": "7001865",
    "name": "Reigate",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.203474,
      "latitude": 51.241623
    }
  },
  "7001866": {
    "id": "7001866",
    "name": "Rainham (Essex)",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.190716,
      "latitude": 51.517449
    }
  },
  "7001867": {
    "id": "7001867",
    "name": "Rainhill",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.766398,
      "latitude": 53.417129
    }
  },
  "7001868": {
    "id": "7001868",
    "name": "Rainham (Kent)",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.611698,
      "latitude": 51.36657
    }
  },
  "7001869": {
    "id": "7001869",
    "name": "Rhymney",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.289494,
      "latitude": 51.759064
    }
  },
  "7001870": {
    "id": "7001870",
    "name": "Rhosneigr",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.505768,
      "latitude": 53.234782
    }
  },
  "7001872": {
    "id": "7001872",
    "name": "Rhyl",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.489144,
      "latitude": 53.318409
    }
  },
  "7001873": {
    "id": "7001873",
    "name": "Ribblehead",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.36087,
      "latitude": 54.205776
    }
  },
  "7001874": {
    "id": "7001874",
    "name": "Riddlesdown",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.099436,
      "latitude": 51.332611
    }
  },
  "7001875": {
    "id": "7001875",
    "name": "Ridgmont",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.594903,
      "latitude": 52.026588
    }
  },
  "7001876": {
    "id": "7001876",
    "name": "Richmond",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.301346,
      "latitude": 51.462505
    }
  },
  "7001877": {
    "id": "7001877",
    "name": "Rishton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.420165,
      "latitude": 53.763813
    }
  },
  "7001878": {
    "id": "7001878",
    "name": "Rickmansworth",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.473013,
      "latitude": 51.640447
    }
  },
  "7001879": {
    "id": "7001879",
    "name": "Radlett",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.317626,
      "latitude": 51.68486
    }
  },
  "7001880": {
    "id": "7001880",
    "name": "Rowlands Castle",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.957748,
      "latitude": 50.892864
    }
  },
  "7001881": {
    "id": "7001881",
    "name": "Rice Lane",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.962253,
      "latitude": 53.457738
    }
  },
  "7001882": {
    "id": "7001882",
    "name": "Rowley Regis",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.030885,
      "latitude": 52.477299
    }
  },
  "7001883": {
    "id": "7001883",
    "name": "Romford",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.181986,
      "latitude": 51.575016
    }
  },
  "7001884": {
    "id": "7001884",
    "name": "Romiley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.089307,
      "latitude": 53.414026
    }
  },
  "7001885": {
    "id": "7001885",
    "name": "Romsey",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.492716,
      "latitude": 50.992641
    }
  },
  "7001886": {
    "id": "7001886",
    "name": "Raynes Park",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.22998,
      "latitude": 51.409294
    }
  },
  "7001887": {
    "id": "7001887",
    "name": "Robertsbridge",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.469092,
      "latitude": 50.984726
    }
  },
  "7001888": {
    "id": "7001888",
    "name": "Roby",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.855956,
      "latitude": 53.410034
    }
  },
  "7001889": {
    "id": "7001889",
    "name": "Roche",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.830658,
      "latitude": 50.418911
    }
  },
  "7001890": {
    "id": "7001890",
    "name": "Rochdale",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.153444,
      "latitude": 53.610293
    }
  },
  "7001891": {
    "id": "7001891",
    "name": "Rochford",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.701959,
      "latitude": 51.581276
    }
  },
  "7001892": {
    "id": "7001892",
    "name": "Rogart",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.158224,
      "latitude": 57.988979
    }
  },
  "7001893": {
    "id": "7001893",
    "name": "Rolleston",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.900095,
      "latitude": 53.065536
    }
  },
  "7001894": {
    "id": "7001894",
    "name": "Roman Bridge",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.92125,
      "latitude": 53.044319
    }
  },
  "7001895": {
    "id": "7001895",
    "name": "Roughton Road",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.299239,
      "latitude": 52.917828
    }
  },
  "7001896": {
    "id": "7001896",
    "name": "Roose",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.19457,
      "latitude": 54.115157
    }
  },
  "7001897": {
    "id": "7001897",
    "name": "Rochester",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.510698,
      "latitude": 51.384968
    }
  },
  "7001898": {
    "id": "7001898",
    "name": "Rectory Road",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.068379,
      "latitude": 51.55872
    }
  },
  "7001899": {
    "id": "7001899",
    "name": "Rosyth",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.427114,
      "latitude": 56.046055
    }
  },
  "7001900": {
    "id": "7001900",
    "name": "Rose Grove",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.282282,
      "latitude": 53.786686
    }
  },
  "7001901": {
    "id": "7001901",
    "name": "Rose Hill Marple",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.076502,
      "latitude": 53.396176
    }
  },
  "7001902": {
    "id": "7001902",
    "name": "Renton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.586181,
      "latitude": 55.970566
    }
  },
  "7001903": {
    "id": "7001903",
    "name": "Rotherham Central",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.358811,
      "latitude": 53.429356
    }
  },
  "7001904": {
    "id": "7001904",
    "name": "Retford",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.94772,
      "latitude": 53.315872
    }
  },
  "7001905": {
    "id": "7001905",
    "name": "Royston",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.026686,
      "latitude": 52.053509
    }
  },
  "7001907": {
    "id": "7001907",
    "name": "Ruabon",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.044214,
      "latitude": 52.986935
    }
  },
  "7001908": {
    "id": "7001908",
    "name": "Runcorn East",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.665102,
      "latitude": 53.326929
    }
  },
  "7001909": {
    "id": "7001909",
    "name": "Rufford",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.806792,
      "latitude": 53.634817
    }
  },
  "7001910": {
    "id": "7001910",
    "name": "Rugeley",
    "isMeta": true,
    "country": "GB",
    "location": {
      "longitude": -1.916,
      "latitude": 52.756
    }
  },
  "7001911": {
    "id": "7001911",
    "name": "Runcorn",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.73919,
      "latitude": 53.338696
    }
  },
  "7001912": {
    "id": "7001912",
    "name": "Ruskington",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.380127,
      "latitude": 53.041615
    }
  },
  "7001913": {
    "id": "7001913",
    "name": "Rutherglen",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.212766,
      "latitude": 55.830448
    }
  },
  "7001914": {
    "id": "7001914",
    "name": "Ruswarp",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.626664,
      "latitude": 54.470367
    }
  },
  "7001915": {
    "id": "7001915",
    "name": "Ravensbourne",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.0069,
      "latitude": 51.413803
    }
  },
  "7001916": {
    "id": "7001916",
    "name": "Ravenglass for Eskdale",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.409456,
      "latitude": 54.355804
    }
  },
  "7001917": {
    "id": "7001917",
    "name": "Ravensthorpe",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.653298,
      "latitude": 53.675964
    }
  },
  "7001918": {
    "id": "7001918",
    "name": "Reading West",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.990143,
      "latitude": 51.455077
    }
  },
  "7001919": {
    "id": "7001919",
    "name": "Rugby",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.249263,
      "latitude": 52.378719
    }
  },
  "7001920": {
    "id": "7001920",
    "name": "Ryder Brow",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.176173,
      "latitude": 53.457916
    }
  },
  "7001921": {
    "id": "7001921",
    "name": "Rye",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.730782,
      "latitude": 50.951916
    }
  },
  "7001922": {
    "id": "7001922",
    "name": "Rye House",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.005796,
      "latitude": 51.76881
    }
  },
  "7001923": {
    "id": "7001923",
    "name": "Ryde Esplanade",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.159676,
      "latitude": 50.733517
    }
  },
  "7001924": {
    "id": "7001924",
    "name": "Ryde Pier Head",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.159578,
      "latitude": 50.738914
    }
  },
  "7001925": {
    "id": "7001925",
    "name": "Ryde St Johns Road",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.157028,
      "latitude": 50.72361
    }
  },
  "7001927": {
    "id": "7001927",
    "name": "St Albans Abbey",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.342422,
      "latitude": 51.744675
    }
  },
  "7001928": {
    "id": "7001928",
    "name": "Saltburn",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.974116,
      "latitude": 54.583462
    }
  },
  "7001929": {
    "id": "7001929",
    "name": "Saltcoats",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.784804,
      "latitude": 55.633648
    }
  },
  "7001930": {
    "id": "7001930",
    "name": "Sandbach",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.393528,
      "latitude": 53.150113
    }
  },
  "7001931": {
    "id": "7001931",
    "name": "Salfords",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.162096,
      "latitude": 51.201412
    }
  },
  "7001932": {
    "id": "7001932",
    "name": "Sandhills",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.9915,
      "latitude": 53.430021
    }
  },
  "7001933": {
    "id": "7001933",
    "name": "Saltaire",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.790246,
      "latitude": 53.838066
    }
  },
  "7001934": {
    "id": "7001934",
    "name": "Saltmarshe",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.808765,
      "latitude": 53.722675
    }
  },
  "7001935": {
    "id": "7001935",
    "name": "Sandal & Agbrigg",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.485404,
      "latitude": 53.664574
    }
  },
  "7001936": {
    "id": "7001936",
    "name": "St Andrews Road (Bristol)",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.696009,
      "latitude": 51.513214
    }
  },
  "7001937": {
    "id": "7001937",
    "name": "St Annes-On-The-Sea",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.029662,
      "latitude": 53.753383
    }
  },
  "7001938": {
    "id": "7001938",
    "name": "Saltash",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.209449,
      "latitude": 50.407108
    }
  },
  "7001939": {
    "id": "7001939",
    "name": "St Austell",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.789557,
      "latitude": 50.338863
    }
  },
  "7001940": {
    "id": "7001940",
    "name": "Salwick",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.817973,
      "latitude": 53.781536
    }
  },
  "7001941": {
    "id": "7001941",
    "name": "Saxilby",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.664018,
      "latitude": 53.267193
    }
  },
  "7001942": {
    "id": "7001942",
    "name": "Sway",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.609864,
      "latitude": 50.784454
    }
  },
  "7001943": {
    "id": "7001943",
    "name": "Scarborough",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.405666,
      "latitude": 54.2798
    }
  },
  "7001944": {
    "id": "7001944",
    "name": "Stalybridge",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.06264,
      "latitude": 53.484471
    }
  },
  "7001945": {
    "id": "7001945",
    "name": "Sherburn-In-Elmet",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.23176,
      "latitude": 53.797142
    }
  },
  "7001946": {
    "id": "7001946",
    "name": "St Budeaux Ferry Road",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.186661,
      "latitude": 50.401241
    }
  },
  "7001947": {
    "id": "7001947",
    "name": "Sawbridgeworth",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.160177,
      "latitude": 51.814625
    }
  },
  "7001948": {
    "id": "7001948",
    "name": "Stourbridge Junction",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.133857,
      "latitude": 52.447563
    }
  },
  "7001949": {
    "id": "7001949",
    "name": "Starbeck",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.501116,
      "latitude": 53.999004
    }
  },
  "7001950": {
    "id": "7001950",
    "name": "South Bermondsey",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.054101,
      "latitude": 51.487446
    }
  },
  "7001951": {
    "id": "7001951",
    "name": "Stonebridge Park",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.275233,
      "latitude": 51.543961
    }
  },
  "7001952": {
    "id": "7001952",
    "name": "Southbourne",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.907601,
      "latitude": 50.848343
    }
  },
  "7001953": {
    "id": "7001953",
    "name": "Shoreham-By-Sea",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.271709,
      "latitude": 50.834358
    }
  },
  "7001954": {
    "id": "7001954",
    "name": "Stourbridge Town",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.142716,
      "latitude": 52.456539
    }
  },
  "7001955": {
    "id": "7001955",
    "name": "Southbury",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.052998,
      "latitude": 51.648396
    }
  },
  "7001956": {
    "id": "7001956",
    "name": "St Budeaux Victoria Road",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.188144,
      "latitude": 50.403008
    }
  },
  "7001957": {
    "id": "7001957",
    "name": "Shrewsbury",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.74897,
      "latitude": 52.711369
    }
  },
  "7001958": {
    "id": "7001958",
    "name": "Southampton Central",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.413983,
      "latitude": 50.907742
    }
  },
  "7001959": {
    "id": "7001959",
    "name": "Scotscalder",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.553764,
      "latitude": 58.482891
    }
  },
  "7001960": {
    "id": "7001960",
    "name": "South Croydon",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.093903,
      "latitude": 51.362194
    }
  },
  "7001961": {
    "id": "7001961",
    "name": "Stone Crossing-Horns Cross",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.263924,
      "latitude": 51.452053
    }
  },
  "7001962": {
    "id": "7001962",
    "name": "St Columb Road",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.94085,
      "latitude": 50.399002
    }
  },
  "7001964": {
    "id": "7001964",
    "name": "Scotstounhill",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.351765,
      "latitude": 55.884491
    }
  },
  "7001965": {
    "id": "7001965",
    "name": "Scunthorpe",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.650951,
      "latitude": 53.58617
    }
  },
  "7001966": {
    "id": "7001966",
    "name": "Swindon",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.786448,
      "latitude": 51.565437
    }
  },
  "7001967": {
    "id": "7001967",
    "name": "Swinderby",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.702985,
      "latitude": 53.168732
    }
  },
  "7001968": {
    "id": "7001968",
    "name": "Saundersfoot",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.718965,
      "latitude": 51.722084
    }
  },
  "7001969": {
    "id": "7001969",
    "name": "Sandling",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.065995,
      "latitude": 51.09021
    }
  },
  "7001970": {
    "id": "7001970",
    "name": "St Denys",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.3882,
      "latitude": 50.921997
    }
  },
  "7001971": {
    "id": "7001971",
    "name": "Sandown",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.162457,
      "latitude": 50.657101
    }
  },
  "7001972": {
    "id": "7001972",
    "name": "Sanderstead",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.093017,
      "latitude": 51.348694
    }
  },
  "7001973": {
    "id": "7001973",
    "name": "Saunderton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.825626,
      "latitude": 51.675751
    }
  },
  "7001974": {
    "id": "7001974",
    "name": "Sandwell & Dudley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.011281,
      "latitude": 52.508431
    }
  },
  "7001975": {
    "id": "7001975",
    "name": "Sandwich",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.343208,
      "latitude": 51.269711
    }
  },
  "7001976": {
    "id": "7001976",
    "name": "Stone",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.154951,
      "latitude": 52.90832
    }
  },
  "7001977": {
    "id": "7001977",
    "name": "Seamer",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.416367,
      "latitude": 54.241287
    }
  },
  "7001978": {
    "id": "7001978",
    "name": "Seaburn",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.38667,
      "latitude": 54.929558
    }
  },
  "7001979": {
    "id": "7001979",
    "name": "Seaton Carew",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.200106,
      "latitude": 54.657959
    }
  },
  "7001980": {
    "id": "7001980",
    "name": "Southend East",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.731196,
      "latitude": 51.539234
    }
  },
  "7001981": {
    "id": "7001981",
    "name": "Seaford",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.10045,
      "latitude": 50.772495
    }
  },
  "7001982": {
    "id": "7001982",
    "name": "Seer Green & Jordans",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.607809,
      "latitude": 51.609524
    }
  },
  "7001983": {
    "id": "7001983",
    "name": "Seaham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.341019,
      "latitude": 54.836835
    }
  },
  "7001985": {
    "id": "7001985",
    "name": "Selby",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.06355,
      "latitude": 53.78336
    }
  },
  "7001987": {
    "id": "7001987",
    "name": "Southend Victoria",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.711184,
      "latitude": 51.542389
    }
  },
  "7001988": {
    "id": "7001988",
    "name": "Salford",
    "isMeta": true,
    "country": "GB",
    "location": {
      "longitude": -2.33444,
      "latitude": 53.50972
    }
  },
  "7001989": {
    "id": "7001989",
    "name": "Salford Crescent",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.275715,
      "latitude": 53.486462
    }
  },
  "7001990": {
    "id": "7001990",
    "name": "Stafford",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.123088,
      "latitude": 52.804466
    }
  },
  "7001991": {
    "id": "7001991",
    "name": "Stamford Hill",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.076343,
      "latitude": 51.575035
    }
  },
  "7001992": {
    "id": "7001992",
    "name": "Seaforth & Litherland",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.005619,
      "latitude": 53.466336
    }
  },
  "7001993": {
    "id": "7001993",
    "name": "Shifnal",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.371116,
      "latitude": 52.666405
    }
  },
  "7001994": {
    "id": "7001994",
    "name": "Slateford",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.243476,
      "latitude": 55.926731
    }
  },
  "7001995": {
    "id": "7001995",
    "name": "Sankey for Penketh",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.651094,
      "latitude": 53.392452
    }
  },
  "7001996": {
    "id": "7001996",
    "name": "Sleaford",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.410174,
      "latitude": 52.995274
    }
  },
  "7001997": {
    "id": "7001997",
    "name": "Springburn",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.230064,
      "latitude": 55.881363
    }
  },
  "7001998": {
    "id": "7001998",
    "name": "Springfield",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.051808,
      "latitude": 56.295116
    }
  },
  "7001999": {
    "id": "7001999",
    "name": "Sleights",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.66246,
      "latitude": 54.46088
    }
  },
  "7002000": {
    "id": "7002000",
    "name": "South Gyle",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.298234,
      "latitude": 55.936951
    }
  },
  "7002001": {
    "id": "7002001",
    "name": "Stonegate",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.364016,
      "latitude": 51.020184
    }
  },
  "7002002": {
    "id": "7002002",
    "name": "Sheffield",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.463297,
      "latitude": 53.378639
    }
  },
  "7002004": {
    "id": "7002004",
    "name": "Southend Central",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.712305,
      "latitude": 51.536972
    }
  },
  "7002005": {
    "id": "7002005",
    "name": "South Hampstead",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.178759,
      "latitude": 51.541424
    }
  },
  "7002006": {
    "id": "7002006",
    "name": "Shelford",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.139805,
      "latitude": 52.149517
    }
  },
  "7002007": {
    "id": "7002007",
    "name": "Shalford",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.566789,
      "latitude": 51.214264
    }
  },
  "7002008": {
    "id": "7002008",
    "name": "Sholing",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.36436,
      "latitude": 50.896687
    }
  },
  "7002009": {
    "id": "7002009",
    "name": "Shoreham (Kent)",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.187665,
      "latitude": 51.332092
    }
  },
  "7002010": {
    "id": "7002010",
    "name": "Shieldmuir",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.952944,
      "latitude": 55.775532
    }
  },
  "7002011": {
    "id": "7002011",
    "name": "St Helens Junction",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.699892,
      "latitude": 53.433525
    }
  },
  "7002013": {
    "id": "7002013",
    "name": "Streatham",
    "isMeta": true,
    "country": "GB",
    "location": {
      "longitude": -0.1235,
      "latitude": 51.4279
    }
  },
  "7002014": {
    "id": "7002014",
    "name": "Shenfield",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.330602,
      "latitude": 51.630615
    }
  },
  "7002015": {
    "id": "7002015",
    "name": "Shoeburyness",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.795616,
      "latitude": 51.531414
    }
  },
  "7002016": {
    "id": "7002016",
    "name": "Shipley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.773558,
      "latitude": 53.833553
    }
  },
  "7002017": {
    "id": "7002017",
    "name": "St Helier",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.199115,
      "latitude": 51.389935
    }
  },
  "7002018": {
    "id": "7002018",
    "name": "Salhouse",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.391886,
      "latitude": 52.675083
    }
  },
  "7002019": {
    "id": "7002019",
    "name": "Staplehurst",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.55061,
      "latitude": 51.171856
    }
  },
  "7002020": {
    "id": "7002020",
    "name": "Sandhurst",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.803911,
      "latitude": 51.34642
    }
  },
  "7002021": {
    "id": "7002021",
    "name": "Stonehaven",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.225286,
      "latitude": 56.966888
    }
  },
  "7002022": {
    "id": "7002022",
    "name": "Shepherds Well",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.229952,
      "latitude": 51.188339
    }
  },
  "7002023": {
    "id": "7002023",
    "name": "Sidcup",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.103342,
      "latitude": 51.434361
    }
  },
  "7002024": {
    "id": "7002024",
    "name": "Silecroft",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.334281,
      "latitude": 54.225966
    }
  },
  "7002026": {
    "id": "7002026",
    "name": "Singer",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.405983,
      "latitude": 55.907711
    }
  },
  "7002027": {
    "id": "7002027",
    "name": "Shirehampton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.679162,
      "latitude": 51.484216
    }
  },
  "7002028": {
    "id": "7002028",
    "name": "Shirley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.845632,
      "latitude": 52.403473
    }
  },
  "7002031": {
    "id": "7002031",
    "name": "Shipton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.591864,
      "latitude": 51.866131
    }
  },
  "7002032": {
    "id": "7002032",
    "name": "Shireoaks",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.16821,
      "latitude": 53.32481
    }
  },
  "7002033": {
    "id": "7002033",
    "name": "Silkstone Common",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.560883,
      "latitude": 53.537239
    }
  },
  "7002034": {
    "id": "7002034",
    "name": "Sittingbourne",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.733817,
      "latitude": 51.342201
    }
  },
  "7002035": {
    "id": "7002035",
    "name": "Silverdale",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.804164,
      "latitude": 54.169922
    }
  },
  "7002036": {
    "id": "7002036",
    "name": "St James’ Park",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.523202,
      "latitude": 50.731094
    }
  },
  "7002037": {
    "id": "7002037",
    "name": "St James Street",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.032804,
      "latitude": 51.580612
    }
  },
  "7002038": {
    "id": "7002038",
    "name": "Stoke-On-Trent",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.181119,
      "latitude": 53.008012
    }
  },
  "7002039": {
    "id": "7002039",
    "name": "Skegness",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.333926,
      "latitude": 53.143032
    }
  },
  "7002040": {
    "id": "7002040",
    "name": "Skipton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.025878,
      "latitude": 53.958691
    }
  },
  "7002041": {
    "id": "7002041",
    "name": "Shanklin",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.179841,
      "latitude": 50.633842
    }
  },
  "7002042": {
    "id": "7002042",
    "name": "South Kenton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.308894,
      "latitude": 51.56963
    }
  },
  "7002043": {
    "id": "7002043",
    "name": "Shiplake",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.882452,
      "latitude": 51.51121
    }
  },
  "7002044": {
    "id": "7002044",
    "name": "Slade Green",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.189792,
      "latitude": 51.466957
    }
  },
  "7002045": {
    "id": "7002045",
    "name": "Stallingborough",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.182581,
      "latitude": 53.587158
    }
  },
  "7002046": {
    "id": "7002046",
    "name": "Shildon",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.637515,
      "latitude": 54.626816
    }
  },
  "7002047": {
    "id": "7002047",
    "name": "Shepley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.703863,
      "latitude": 53.588913
    }
  },
  "7002048": {
    "id": "7002048",
    "name": "Sellafield",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.510293,
      "latitude": 54.416571
    }
  },
  "7002049": {
    "id": "7002049",
    "name": "Slough",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.591803,
      "latitude": 51.511921
    }
  },
  "7002050": {
    "id": "7002050",
    "name": "Selhurst",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.089759,
      "latitude": 51.392704
    }
  },
  "7002051": {
    "id": "7002051",
    "name": "Selling",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.940801,
      "latitude": 51.277817
    }
  },
  "7002052": {
    "id": "7002052",
    "name": "Selly Oak",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.936708,
      "latitude": 52.441322
    }
  },
  "7002053": {
    "id": "7002053",
    "name": "Stapleton Road",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.565747,
      "latitude": 51.468052
    }
  },
  "7002054": {
    "id": "7002054",
    "name": "Stanlow & Thornton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.841318,
      "latitude": 53.277996
    }
  },
  "7002055": {
    "id": "7002055",
    "name": "Silver Street",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.067415,
      "latitude": 51.615364
    }
  },
  "7002056": {
    "id": "7002056",
    "name": "St Leonards Warrior Square",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.560326,
      "latitude": 50.855942
    }
  },
  "7002057": {
    "id": "7002057",
    "name": "Stowmarket",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.000662,
      "latitude": 52.190105
    }
  },
  "7002058": {
    "id": "7002058",
    "name": "St Margarets",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.320352,
      "latitude": 51.454689
    }
  },
  "7002059": {
    "id": "7002059",
    "name": "Smithy Bridge",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.113394,
      "latitude": 53.633266
    }
  },
  "7002060": {
    "id": "7002060",
    "name": "St Mary Cray",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.107269,
      "latitude": 51.394714
    }
  },
  "7002061": {
    "id": "7002061",
    "name": "St Michaels",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.952704,
      "latitude": 53.375649
    }
  },
  "7002062": {
    "id": "7002062",
    "name": "South Milford",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.251772,
      "latitude": 53.781994
    }
  },
  "7002063": {
    "id": "7002063",
    "name": "Small Heath",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.858673,
      "latitude": 52.46283
    }
  },
  "7002064": {
    "id": "7002064",
    "name": "Sea Mills",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.649427,
      "latitude": 51.480209
    }
  },
  "7002065": {
    "id": "7002065",
    "name": "Streatham Hill",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.128136,
      "latitude": 51.43829
    }
  },
  "7002067": {
    "id": "7002067",
    "name": "Stocksmoor",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.723478,
      "latitude": 53.594349
    }
  },
  "7002068": {
    "id": "7002068",
    "name": "Smethwick Rolfe Street",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.969885,
      "latitude": 52.49632
    }
  },
  "7002069": {
    "id": "7002069",
    "name": "Southminster",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.835397,
      "latitude": 51.660873
    }
  },
  "7002070": {
    "id": "7002070",
    "name": "South Merton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.205764,
      "latitude": 51.40353
    }
  },
  "7002071": {
    "id": "7002071",
    "name": "Stoke Mandeville",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.783575,
      "latitude": 51.78772
    }
  },
  "7002073": {
    "id": "7002073",
    "name": "Staines",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.502415,
      "latitude": 51.432873
    }
  },
  "7002074": {
    "id": "7002074",
    "name": "Snaith",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.027678,
      "latitude": 53.693192
    }
  },
  "7002075": {
    "id": "7002075",
    "name": "Sandy",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.28065,
      "latitude": 52.124931
    }
  },
  "7002077": {
    "id": "7002077",
    "name": "Swaythling",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.376552,
      "latitude": 50.941719
    }
  },
  "7002078": {
    "id": "7002078",
    "name": "Hatfield & Stainforth",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.020931,
      "latitude": 53.589532
    }
  },
  "7002079": {
    "id": "7002079",
    "name": "Stoneleigh",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.247546,
      "latitude": 51.363701
    }
  },
  "7002080": {
    "id": "7002080",
    "name": "Sunnymeads",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.558781,
      "latitude": 51.470451
    }
  },
  "7002081": {
    "id": "7002081",
    "name": "Sunningdale",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.633135,
      "latitude": 51.391312
    }
  },
  "7002082": {
    "id": "7002082",
    "name": "Snodland",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.448864,
      "latitude": 51.330521
    }
  },
  "7002083": {
    "id": "7002083",
    "name": "Stoke Newington",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.07244,
      "latitude": 51.565079
    }
  },
  "7002084": {
    "id": "7002084",
    "name": "Snowdown",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.213187,
      "latitude": 51.214886
    }
  },
  "7002085": {
    "id": "7002085",
    "name": "Sole Street",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.376939,
      "latitude": 51.38327
    }
  },
  "7002086": {
    "id": "7002086",
    "name": "South Acton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.269697,
      "latitude": 51.499813
    }
  },
  "7002087": {
    "id": "7002087",
    "name": "South Bank",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.186112,
      "latitude": 54.582375
    }
  },
  "7002088": {
    "id": "7002088",
    "name": "Strood",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.4998,
      "latitude": 51.396
    }
  },
  "7002089": {
    "id": "7002089",
    "name": "South Elmsall",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.285286,
      "latitude": 53.595234
    }
  },
  "7002090": {
    "id": "7002090",
    "name": "South Greenford",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.336403,
      "latitude": 51.533339
    }
  },
  "7002091": {
    "id": "7002091",
    "name": "Solihull",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.78972,
      "latitude": 52.415081
    }
  },
  "7002092": {
    "id": "7002092",
    "name": "Shortlands",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.002798,
      "latitude": 51.405548
    }
  },
  "7002093": {
    "id": "7002093",
    "name": "Somerleyton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.653333,
      "latitude": 52.509892
    }
  },
  "7002094": {
    "id": "7002094",
    "name": "Stockton Station",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.31784,
      "latitude": 54.56971
    }
  },
  "7002095": {
    "id": "7002095",
    "name": "Shotton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.037728,
      "latitude": 53.21352
    }
  },
  "7002096": {
    "id": "7002096",
    "name": "Southampton Airport Parkway",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.36362,
      "latitude": 50.950638
    }
  },
  "7002098": {
    "id": "7002098",
    "name": "Southease",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.03066,
      "latitude": 50.831284
    }
  },
  "7002099": {
    "id": "7002099",
    "name": "Shotts",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.80024,
      "latitude": 55.818302
    }
  },
  "7002100": {
    "id": "7002100",
    "name": "Southall",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.378513,
      "latitude": 51.505884
    }
  },
  "7002101": {
    "id": "7002101",
    "name": "Sowerby Bridge",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.90756,
      "latitude": 53.707886
    }
  },
  "7002102": {
    "id": "7002102",
    "name": "Stockport",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.162419,
      "latitude": 53.4049
    }
  },
  "7002103": {
    "id": "7002103",
    "name": "Spalding",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.156722,
      "latitude": 52.788418
    }
  },
  "7002104": {
    "id": "7002104",
    "name": "Spean Bridge",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.920321,
      "latitude": 56.889839
    }
  },
  "7002105": {
    "id": "7002105",
    "name": "Spondon",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.410627,
      "latitude": 52.912267
    }
  },
  "7002106": {
    "id": "7002106",
    "name": "Stanford-Le-Hope",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.422634,
      "latitude": 51.513634
    }
  },
  "7002107": {
    "id": "7002107",
    "name": "Shippea Hill",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.412299,
      "latitude": 52.430218
    }
  },
  "7002108": {
    "id": "7002108",
    "name": "Sandplace",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.464549,
      "latitude": 50.386684
    }
  },
  "7002109": {
    "id": "7002109",
    "name": "Spooner Row",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.086088,
      "latitude": 52.535057
    }
  },
  "7002110": {
    "id": "7002110",
    "name": "Southport",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.002229,
      "latitude": 53.646597
    }
  },
  "7002111": {
    "id": "7002111",
    "name": "Shepperton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.447521,
      "latitude": 51.397091
    }
  },
  "7002112": {
    "id": "7002112",
    "name": "Shepreth",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.031517,
      "latitude": 52.114567
    }
  },
  "7002113": {
    "id": "7002113",
    "name": "Stepps",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.147389,
      "latitude": 55.890026
    }
  },
  "7002114": {
    "id": "7002114",
    "name": "Spital",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.993903,
      "latitude": 53.339869
    }
  },
  "7002115": {
    "id": "7002115",
    "name": "Squires Gate",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.049403,
      "latitude": 53.776756
    }
  },
  "7002116": {
    "id": "7002116",
    "name": "Sheringham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.210195,
      "latitude": 52.94096
    }
  },
  "7002117": {
    "id": "7002117",
    "name": "Stratford London",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.004175,
      "latitude": 51.542358
    }
  },
  "7002118": {
    "id": "7002118",
    "name": "Sherborne",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.513816,
      "latitude": 50.94405
    }
  },
  "7002119": {
    "id": "7002119",
    "name": "Spring Road",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.83666,
      "latitude": 52.44392
    }
  },
  "7002121": {
    "id": "7002121",
    "name": "Strines",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.033544,
      "latitude": 53.374932
    }
  },
  "7002122": {
    "id": "7002122",
    "name": "Strathcarron",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -5.429166,
      "latitude": 57.422585
    }
  },
  "7002123": {
    "id": "7002123",
    "name": "South Ruislip",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.398812,
      "latitude": 51.556742
    }
  },
  "7002124": {
    "id": "7002124",
    "name": "Stromeferry",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -5.550702,
      "latitude": 57.352688
    }
  },
  "7002125": {
    "id": "7002125",
    "name": "Seascale",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.48476,
      "latitude": 54.395351
    }
  },
  "7002126": {
    "id": "7002126",
    "name": "Stansted Airport",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.26162,
      "latitude": 51.888979
    }
  },
  "7002128": {
    "id": "7002128",
    "name": "Stonehouse",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.279516,
      "latitude": 51.746029
    }
  },
  "7002129": {
    "id": "7002129",
    "name": "Stocksfield",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.917227,
      "latitude": 54.94635
    }
  },
  "7002130": {
    "id": "7002130",
    "name": "Swineshead",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.186255,
      "latitude": 52.969593
    }
  },
  "7002131": {
    "id": "7002131",
    "name": "Steeton & Silsden",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.946704,
      "latitude": 53.900257
    }
  },
  "7002132": {
    "id": "7002132",
    "name": "Stansted Mountfitchet",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.199642,
      "latitude": 51.901495
    }
  },
  "7002134": {
    "id": "7002134",
    "name": "Shenstone",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.844528,
      "latitude": 52.638985
    }
  },
  "7002135": {
    "id": "7002135",
    "name": "Stirling",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.934915,
      "latitude": 56.119114
    }
  },
  "7002136": {
    "id": "7002136",
    "name": "St Albans",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.326842,
      "latitude": 51.748829
    }
  },
  "7002137": {
    "id": "7002137",
    "name": "St Bees",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.591263,
      "latitude": 54.492465
    }
  },
  "7002138": {
    "id": "7002138",
    "name": "Streatham Common",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.136136,
      "latitude": 51.418629
    }
  },
  "7002139": {
    "id": "7002139",
    "name": "Stamford",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.480474,
      "latitude": 52.647358
    }
  },
  "7002140": {
    "id": "7002140",
    "name": "St Erth",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -5.443694,
      "latitude": 50.171074
    }
  },
  "7002141": {
    "id": "7002141",
    "name": "Stechford",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.810006,
      "latitude": 52.485241
    }
  },
  "7002142": {
    "id": "7002142",
    "name": "St Germans",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.308757,
      "latitude": 50.394386
    }
  },
  "7002143": {
    "id": "7002143",
    "name": "St Helens Central",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.730328,
      "latitude": 53.453117
    }
  },
  "7002144": {
    "id": "7002144",
    "name": "St Ives",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -5.477247,
      "latitude": 50.208759
    }
  },
  "7002145": {
    "id": "7002145",
    "name": "St Johns",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.023225,
      "latitude": 51.468937
    }
  },
  "7002146": {
    "id": "7002146",
    "name": "St Keyne",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.462204,
      "latitude": 50.422714
    }
  },
  "7002147": {
    "id": "7002147",
    "name": "Settle",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.280704,
      "latitude": 54.066897
    }
  },
  "7002148": {
    "id": "7002148",
    "name": "St Margarets (Herts)",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.000837,
      "latitude": 51.787773
    }
  },
  "7002149": {
    "id": "7002149",
    "name": "St Neots Station",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.247244,
      "latitude": 52.231438
    }
  },
  "7002150": {
    "id": "7002150",
    "name": "South Tottenham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.071788,
      "latitude": 51.58036
    }
  },
  "7002152": {
    "id": "7002152",
    "name": "Stranraer",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -5.024806,
      "latitude": 54.909626
    }
  },
  "7002153": {
    "id": "7002153",
    "name": "Starcross",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.447757,
      "latitude": 50.627731
    }
  },
  "7002154": {
    "id": "7002154",
    "name": "Shettleston",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.159731,
      "latitude": 55.852959
    }
  },
  "7002155": {
    "id": "7002155",
    "name": "Sturry",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.121644,
      "latitude": 51.301018
    }
  },
  "7002156": {
    "id": "7002156",
    "name": "Staveley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.818961,
      "latitude": 54.375629
    }
  },
  "7002157": {
    "id": "7002157",
    "name": "Stewarton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.519346,
      "latitude": 55.681633
    }
  },
  "7002158": {
    "id": "7002158",
    "name": "Styal",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.240313,
      "latitude": 53.348137
    }
  },
  "7002159": {
    "id": "7002159",
    "name": "Sudbury Suffolk",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.735111,
      "latitude": 52.035591
    }
  },
  "7002160": {
    "id": "7002160",
    "name": "Stratford-Upon-Avon Station",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.716148,
      "latitude": 52.19376
    }
  },
  "7002161": {
    "id": "7002161",
    "name": "Sudbury Hill Harrow",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.336092,
      "latitude": 51.558423
    }
  },
  "7002162": {
    "id": "7002162",
    "name": "Sutton Coldfield",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.824404,
      "latitude": 52.565269
    }
  },
  "7002163": {
    "id": "7002163",
    "name": "Stroud",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.218673,
      "latitude": 51.744358
    }
  },
  "7002164": {
    "id": "7002164",
    "name": "Sudbury & Harrow Road",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.316676,
      "latitude": 51.554459
    }
  },
  "7002165": {
    "id": "7002165",
    "name": "Sunderland",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.382357,
      "latitude": 54.90617
    }
  },
  "7002166": {
    "id": "7002166",
    "name": "Sutton Common",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.196799,
      "latitude": 51.375519
    }
  },
  "7002167": {
    "id": "7002167",
    "name": "Sunbury",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.416611,
      "latitude": 51.418262
    }
  },
  "7002168": {
    "id": "7002168",
    "name": "Sundridge Park",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.020402,
      "latitude": 51.413338
    }
  },
  "7002169": {
    "id": "7002169",
    "name": "Surbiton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.303942,
      "latitude": 51.392406
    }
  },
  "7002170": {
    "id": "7002170",
    "name": "Sutton (Surrey)",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.190223,
      "latitude": 51.360126
    }
  },
  "7002171": {
    "id": "7002171",
    "name": "Stevenston",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.749829,
      "latitude": 55.633533
    }
  },
  "7002172": {
    "id": "7002172",
    "name": "Severn Beach",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.664227,
      "latitude": 51.559864
    }
  },
  "7002173": {
    "id": "7002173",
    "name": "Seven Kings",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.096325,
      "latitude": 51.563992
    }
  },
  "7002175": {
    "id": "7002175",
    "name": "Stevenage",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.206437,
      "latitude": 51.899025
    }
  },
  "7002176": {
    "id": "7002176",
    "name": "Sevenoaks",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.182193,
      "latitude": 51.27734
    }
  },
  "7002177": {
    "id": "7002177",
    "name": "Seven Sisters",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.074521,
      "latitude": 51.584007
    }
  },
  "7002178": {
    "id": "7002178",
    "name": "Severn Tunnel Junction",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.777917,
      "latitude": 51.584629
    }
  },
  "7002179": {
    "id": "7002179",
    "name": "Swansea",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.941598,
      "latitude": 51.625103
    }
  },
  "7002181": {
    "id": "7002181",
    "name": "Stewartby",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.520596,
      "latitude": 52.06974
    }
  },
  "7002183": {
    "id": "7002183",
    "name": "Swale",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.748194,
      "latitude": 51.390434
    }
  },
  "7002184": {
    "id": "7002184",
    "name": "Shawford",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.328428,
      "latitude": 51.021488
    }
  },
  "7002185": {
    "id": "7002185",
    "name": "South Wigston",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.132918,
      "latitude": 52.582451
    }
  },
  "7002186": {
    "id": "7002186",
    "name": "Strawberry Hill",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.339597,
      "latitude": 51.439682
    }
  },
  "7002187": {
    "id": "7002187",
    "name": "Southwick",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.236254,
      "latitude": 50.832928
    }
  },
  "7002188": {
    "id": "7002188",
    "name": "Shawlands",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.292521,
      "latitude": 55.828987
    }
  },
  "7002189": {
    "id": "7002189",
    "name": "Swinton (Manchester)",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.337384,
      "latitude": 53.514822
    }
  },
  "7002190": {
    "id": "7002190",
    "name": "Swinton (South Yorkshire)",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.305195,
      "latitude": 53.487484
    }
  },
  "7002191": {
    "id": "7002191",
    "name": "Sheerness-On-Sea",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.758397,
      "latitude": 51.440559
    }
  },
  "7002192": {
    "id": "7002192",
    "name": "Slaithwaite",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.87901,
      "latitude": 53.624275
    }
  },
  "7002193": {
    "id": "7002193",
    "name": "Swanwick",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.265151,
      "latitude": 50.875427
    }
  },
  "7002194": {
    "id": "7002194",
    "name": "Swanley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.16755,
      "latitude": 51.392727
    }
  },
  "7002195": {
    "id": "7002195",
    "name": "Saxmundham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.489965,
      "latitude": 52.215309
    }
  },
  "7002196": {
    "id": "7002196",
    "name": "Salisbury",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.805864,
      "latitude": 51.070915
    }
  },
  "7002197": {
    "id": "7002197",
    "name": "Sydenham",
    "isMeta": true,
    "country": "GB",
    "location": {
      "longitude": -0.0544,
      "latitude": 51.4254
    }
  },
  "7002198": {
    "id": "7002198",
    "name": "Sydenham Hill",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.079444,
      "latitude": 51.433002
    }
  },
  "7002199": {
    "id": "7002199",
    "name": "Syon Lane",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.325116,
      "latitude": 51.481735
    }
  },
  "7002200": {
    "id": "7002200",
    "name": "Tackley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.297202,
      "latitude": 51.88118
    }
  },
  "7002201": {
    "id": "7002201",
    "name": "Taunton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.102146,
      "latitude": 51.023613
    }
  },
  "7002202": {
    "id": "7002202",
    "name": "Tame Bridge Parkway",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.974899,
      "latitude": 52.551022
    }
  },
  "7002203": {
    "id": "7002203",
    "name": "Tattenham Corner",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.242456,
      "latitude": 51.308765
    }
  },
  "7002204": {
    "id": "7002204",
    "name": "Tain",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.051826,
      "latitude": 57.814651
    }
  },
  "7002206": {
    "id": "7002206",
    "name": "Taffs Well",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.263129,
      "latitude": 51.540848
    }
  },
  "7002207": {
    "id": "7002207",
    "name": "Taynuilt",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -5.23868,
      "latitude": 56.430714
    }
  },
  "7002208": {
    "id": "7002208",
    "name": "Talybont",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.097534,
      "latitude": 52.772507
    }
  },
  "7002209": {
    "id": "7002209",
    "name": "Tunbridge Wells",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.262435,
      "latitude": 51.130119
    }
  },
  "7002210": {
    "id": "7002210",
    "name": "Tal-Y-Cafn",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.818606,
      "latitude": 53.228443
    }
  },
  "7002211": {
    "id": "7002211",
    "name": "Teddington",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.332965,
      "latitude": 51.424294
    }
  },
  "7002212": {
    "id": "7002212",
    "name": "Tenby",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.707348,
      "latitude": 51.672897
    }
  },
  "7002213": {
    "id": "7002213",
    "name": "Telford Central",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.440744,
      "latitude": 52.678764
    }
  },
  "7002214": {
    "id": "7002214",
    "name": "Teignmouth",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.494712,
      "latitude": 50.547993
    }
  },
  "7002215": {
    "id": "7002215",
    "name": "Trefforest Estate",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.2913,
      "latitude": 51.568417
    }
  },
  "7002216": {
    "id": "7002216",
    "name": "Trafford Park",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.310836,
      "latitude": 53.454899
    }
  },
  "7002217": {
    "id": "7002217",
    "name": "Trefforest",
    "isMeta": true,
    "country": "GB",
    "location": {
      "longitude": -3.3221,
      "latitude": 51.5878
    }
  },
  "7002218": {
    "id": "7002218",
    "name": "Town Green",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.9045,
      "latitude": 53.542807
    }
  },
  "7002219": {
    "id": "7002219",
    "name": "Teynham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.807944,
      "latitude": 51.333248
    }
  },
  "7002220": {
    "id": "7002220",
    "name": "Thatcham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.243048,
      "latitude": 51.39384
    }
  },
  "7002221": {
    "id": "7002221",
    "name": "Thorpe Bay",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.762828,
      "latitude": 51.537586
    }
  },
  "7002222": {
    "id": "7002222",
    "name": "Thorpe Culvert",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.19982,
      "latitude": 53.123108
    }
  },
  "7002223": {
    "id": "7002223",
    "name": "Thames Ditton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.340027,
      "latitude": 51.388424
    }
  },
  "7002224": {
    "id": "7002224",
    "name": "Theale",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.074968,
      "latitude": 51.433395
    }
  },
  "7002225": {
    "id": "7002225",
    "name": "Thetford",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.744109,
      "latitude": 52.419384
    }
  },
  "7002226": {
    "id": "7002226",
    "name": "Theobalds Grove",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.035216,
      "latitude": 51.692162
    }
  },
  "7002227": {
    "id": "7002227",
    "name": "Thatto Heath",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.759419,
      "latitude": 53.436585
    }
  },
  "7002228": {
    "id": "7002228",
    "name": "Thirsk",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.372573,
      "latitude": 54.228489
    }
  },
  "7002230": {
    "id": "7002230",
    "name": "Thorne North",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.972006,
      "latitude": 53.616329
    }
  },
  "7002231": {
    "id": "7002231",
    "name": "Thornaby",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.301006,
      "latitude": 54.559734
    }
  },
  "7002232": {
    "id": "7002232",
    "name": "Three Bridges",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.161162,
      "latitude": 51.116863
    }
  },
  "7002233": {
    "id": "7002233",
    "name": "Thorne South",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.957227,
      "latitude": 53.602707
    }
  },
  "7002234": {
    "id": "7002234",
    "name": "Tilehurst",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.029754,
      "latitude": 51.471333
    }
  },
  "7002235": {
    "id": "7002235",
    "name": "Thurgarton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.962157,
      "latitude": 53.02924
    }
  },
  "7002236": {
    "id": "7002236",
    "name": "Tilbury Town",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.353724,
      "latitude": 51.462879
    }
  },
  "7002237": {
    "id": "7002237",
    "name": "Tile Hill",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.594357,
      "latitude": 52.394798
    }
  },
  "7002239": {
    "id": "7002239",
    "name": "Tipton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.065499,
      "latitude": 52.53039
    }
  },
  "7002240": {
    "id": "7002240",
    "name": "Tilbury Riverside",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.36467,
      "latitude": 51.451862
    }
  },
  "7002241": {
    "id": "7002241",
    "name": "Tisbury",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.078456,
      "latitude": 51.060257
    }
  },
  "7002242": {
    "id": "7002242",
    "name": "Taplow",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.681474,
      "latitude": 51.523528
    }
  },
  "7002243": {
    "id": "7002243",
    "name": "Templecombe",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.417532,
      "latitude": 51.001083
    }
  },
  "7002244": {
    "id": "7002244",
    "name": "The Lakes",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.845782,
      "latitude": 52.359436
    }
  },
  "7002245": {
    "id": "7002245",
    "name": "Thorpe-Le-Soken",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.162258,
      "latitude": 51.847698
    }
  },
  "7002246": {
    "id": "7002246",
    "name": "Tamworth",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.687083,
      "latitude": 52.63737
    }
  },
  "7002248": {
    "id": "7002248",
    "name": "Thornton Abbey",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.323458,
      "latitude": 53.653942
    }
  },
  "7002249": {
    "id": "7002249",
    "name": "Thornford",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.57889,
      "latitude": 50.911377
    }
  },
  "7002250": {
    "id": "7002250",
    "name": "Thorntonhall",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.250674,
      "latitude": 55.767746
    }
  },
  "7002251": {
    "id": "7002251",
    "name": "Thornliebank",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.312201,
      "latitude": 55.810642
    }
  },
  "7002252": {
    "id": "7002252",
    "name": "Thornton Heath",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.100981,
      "latitude": 51.399181
    }
  },
  "7002253": {
    "id": "7002253",
    "name": "Tonbridge",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.269715,
      "latitude": 51.191132
    }
  },
  "7002255": {
    "id": "7002255",
    "name": "Tonypandy",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.450216,
      "latitude": 51.61961
    }
  },
  "7002256": {
    "id": "7002256",
    "name": "Tonfanau",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.123919,
      "latitude": 52.613789
    }
  },
  "7002257": {
    "id": "7002257",
    "name": "Topsham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.4637,
      "latitude": 50.685989
    }
  },
  "7002258": {
    "id": "7002258",
    "name": "Tolworth",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.280098,
      "latitude": 51.37677
    }
  },
  "7002259": {
    "id": "7002259",
    "name": "Todmorden",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.099977,
      "latitude": 53.713612
    }
  },
  "7002260": {
    "id": "7002260",
    "name": "Tooting",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.16053,
      "latitude": 51.419914
    }
  },
  "7002261": {
    "id": "7002261",
    "name": "Ton Pentre",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.485801,
      "latitude": 51.647942
    }
  },
  "7002262": {
    "id": "7002262",
    "name": "Three Oaks",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.612558,
      "latitude": 50.900658
    }
  },
  "7002263": {
    "id": "7002263",
    "name": "Tir-Phil",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.246424,
      "latitude": 51.72086
    }
  },
  "7002264": {
    "id": "7002264",
    "name": "Tiverton Parkway",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.359979,
      "latitude": 50.917477
    }
  },
  "7002265": {
    "id": "7002265",
    "name": "Torquay",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.544095,
      "latitude": 50.461014
    }
  },
  "7002266": {
    "id": "7002266",
    "name": "Truro",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -5.063017,
      "latitude": 50.263603
    }
  },
  "7002267": {
    "id": "7002267",
    "name": "Trowbridge",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.215222,
      "latitude": 51.319954
    }
  },
  "7002268": {
    "id": "7002268",
    "name": "Treorchy",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.504922,
      "latitude": 51.657593
    }
  },
  "7002270": {
    "id": "7002270",
    "name": "Trehafod",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.380569,
      "latitude": 51.609661
    }
  },
  "7002271": {
    "id": "7002271",
    "name": "Tring",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.622253,
      "latitude": 51.800327
    }
  },
  "7002272": {
    "id": "7002272",
    "name": "Treherbert",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.53575,
      "latitude": 51.671577
    }
  },
  "7002273": {
    "id": "7002273",
    "name": "Trimley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.318431,
      "latitude": 51.976509
    }
  },
  "7002274": {
    "id": "7002274",
    "name": "Troon",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.654731,
      "latitude": 55.543045
    }
  },
  "7002275": {
    "id": "7002275",
    "name": "Troed-Y-Rhiw",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.346066,
      "latitude": 51.71257
    }
  },
  "7002276": {
    "id": "7002276",
    "name": "Torre",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.547292,
      "latitude": 50.472664
    }
  },
  "7002277": {
    "id": "7002277",
    "name": "Thurso",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.527548,
      "latitude": 58.590092
    }
  },
  "7002278": {
    "id": "7002278",
    "name": "Thurston",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.808347,
      "latitude": 52.249699
    }
  },
  "7002279": {
    "id": "7002279",
    "name": "Talsarnau",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.068213,
      "latitude": 52.904289
    }
  },
  "7002280": {
    "id": "7002280",
    "name": "Teesside Airport",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.425305,
      "latitude": 54.518147
    }
  },
  "7002281": {
    "id": "7002281",
    "name": "Thurnscoe",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.308775,
      "latitude": 53.545033
    }
  },
  "7002282": {
    "id": "7002282",
    "name": "Tottenham Hale",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.059914,
      "latitude": 51.588257
    }
  },
  "7002283": {
    "id": "7002283",
    "name": "Totnes",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.688317,
      "latitude": 50.435623
    }
  },
  "7002284": {
    "id": "7002284",
    "name": "Totton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.482138,
      "latitude": 50.917953
    }
  },
  "7002285": {
    "id": "7002285",
    "name": "Tulloch",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.701509,
      "latitude": 56.883984
    }
  },
  "7002286": {
    "id": "7002286",
    "name": "Tulse Hill",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.10506,
      "latitude": 51.439713
    }
  },
  "7002287": {
    "id": "7002287",
    "name": "Turkey Street",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.047594,
      "latitude": 51.673481
    }
  },
  "7002288": {
    "id": "7002288",
    "name": "Tutbury & Hatton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.682085,
      "latitude": 52.864342
    }
  },
  "7002289": {
    "id": "7002289",
    "name": "Tadworth",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.235953,
      "latitude": 51.29158
    }
  },
  "7002290": {
    "id": "7002290",
    "name": "Twickenham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.329136,
      "latitude": 51.450321
    }
  },
  "7002291": {
    "id": "7002291",
    "name": "Twyford",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.86389,
      "latitude": 51.475605
    }
  },
  "7002292": {
    "id": "7002292",
    "name": "Ty Croes",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.476033,
      "latitude": 53.222885
    }
  },
  "7002293": {
    "id": "7002293",
    "name": "Ty Glas",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.193341,
      "latitude": 51.519104
    }
  },
  "7002294": {
    "id": "7002294",
    "name": "Tyndrum Lower",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.714873,
      "latitude": 56.433407
    }
  },
  "7002295": {
    "id": "7002295",
    "name": "Tyseley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.839568,
      "latitude": 52.453819
    }
  },
  "7002296": {
    "id": "7002296",
    "name": "Tyndrum",
    "isMeta": true,
    "country": "GB",
    "location": {
      "longitude": -4.71009,
      "latitude": 56.43524
    }
  },
  "7002297": {
    "id": "7002297",
    "name": "Tygwyn",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.079579,
      "latitude": 52.893307
    }
  },
  "7002298": {
    "id": "7002298",
    "name": "Tywyn",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.092974,
      "latitude": 52.584663
    }
  },
  "7002299": {
    "id": "7002299",
    "name": "Uckfield",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.095048,
      "latitude": 50.968651
    }
  },
  "7002300": {
    "id": "7002300",
    "name": "Ulceby",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.30063,
      "latitude": 53.619457
    }
  },
  "7002301": {
    "id": "7002301",
    "name": "Uddingston",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.086266,
      "latitude": 55.823669
    }
  },
  "7002302": {
    "id": "7002302",
    "name": "Upper Halliford",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.429722,
      "latitude": 51.413036
    }
  },
  "7002303": {
    "id": "7002303",
    "name": "Upholland",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.741346,
      "latitude": 53.528192
    }
  },
  "7002305": {
    "id": "7002305",
    "name": "Ulleskelf",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.215536,
      "latitude": 53.85276
    }
  },
  "7002307": {
    "id": "7002307",
    "name": "Umberleigh",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.982228,
      "latitude": 50.996704
    }
  },
  "7002308": {
    "id": "7002308",
    "name": "University (Birmingham)",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.936691,
      "latitude": 52.451218
    }
  },
  "7002309": {
    "id": "7002309",
    "name": "Uphall",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.499279,
      "latitude": 55.919395
    }
  },
  "7002310": {
    "id": "7002310",
    "name": "Upton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.084013,
      "latitude": 53.385712
    }
  },
  "7002311": {
    "id": "7002311",
    "name": "Upwey",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.466731,
      "latitude": 50.64838
    }
  },
  "7002312": {
    "id": "7002312",
    "name": "Upper Holloway",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.129293,
      "latitude": 51.563652
    }
  },
  "7002313": {
    "id": "7002313",
    "name": "Urmston",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.35344,
      "latitude": 53.448203
    }
  },
  "7002314": {
    "id": "7002314",
    "name": "Upminster",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.251938,
      "latitude": 51.559307
    }
  },
  "7002315": {
    "id": "7002315",
    "name": "Ulverston",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.097327,
      "latitude": 54.191872
    }
  },
  "7002316": {
    "id": "7002316",
    "name": "Upper Warlingham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.077498,
      "latitude": 51.307972
    }
  },
  "7002317": {
    "id": "7002317",
    "name": "Uttoxeter",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.857258,
      "latitude": 52.897041
    }
  },
  "7002318": {
    "id": "7002318",
    "name": "Vauxhall",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.124025,
      "latitude": 51.485686
    }
  },
  "7002319": {
    "id": "7002319",
    "name": "Valley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.563436,
      "latitude": 53.281281
    }
  },
  "7002321": {
    "id": "7002321",
    "name": "Virginia Water",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.562389,
      "latitude": 51.401257
    }
  },
  "7002322": {
    "id": "7002322",
    "name": "Weymouth",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.455103,
      "latitude": 50.61515
    }
  },
  "7002323": {
    "id": "7002323",
    "name": "Waddon",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.116688,
      "latitude": 51.367062
    }
  },
  "7002324": {
    "id": "7002324",
    "name": "Wateringbury",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.423039,
      "latitude": 51.249214
    }
  },
  "7002325": {
    "id": "7002325",
    "name": "Waltham Cross",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.026846,
      "latitude": 51.684834
    }
  },
  "7002326": {
    "id": "7002326",
    "name": "Wadhurst",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.312483,
      "latitude": 51.07338
    }
  },
  "7002327": {
    "id": "7002327",
    "name": "Warnham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.329193,
      "latitude": 51.0933
    }
  },
  "7002328": {
    "id": "7002328",
    "name": "Wainfleet",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.234774,
      "latitude": 53.105373
    }
  },
  "7002329": {
    "id": "7002329",
    "name": "Watford Junction",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.396506,
      "latitude": 51.663475
    }
  },
  "7002330": {
    "id": "7002330",
    "name": "Wakefield Kirkgate",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.488254,
      "latitude": 53.67897
    }
  },
  "7002331": {
    "id": "7002331",
    "name": "Walsden",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.104719,
      "latitude": 53.696056
    }
  },
  "7002333": {
    "id": "7002333",
    "name": "Watford North",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.3903,
      "latitude": 51.675087
    }
  },
  "7002334": {
    "id": "7002334",
    "name": "Warminster",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.177467,
      "latitude": 51.206722
    }
  },
  "7002335": {
    "id": "7002335",
    "name": "Watford High Street",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.391656,
      "latitude": 51.652743
    }
  },
  "7002336": {
    "id": "7002336",
    "name": "Waterbeach",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.196555,
      "latitude": 52.26268
    }
  },
  "7002337": {
    "id": "7002337",
    "name": "Wakefield Westgate",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.506386,
      "latitude": 53.681736
    }
  },
  "7002338": {
    "id": "7002338",
    "name": "Wanborough",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.66756,
      "latitude": 51.245129
    }
  },
  "7002339": {
    "id": "7002339",
    "name": "Wembley Central",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.296592,
      "latitude": 51.551468
    }
  },
  "7002340": {
    "id": "7002340",
    "name": "Wimbledon",
    "isMeta": true,
    "country": "GB",
    "location": {
      "longitude": -0.18171,
      "latitude": 51.4235
    }
  },
  "7002341": {
    "id": "7002341",
    "name": "Weybridge",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.457352,
      "latitude": 51.361248
    }
  },
  "7002343": {
    "id": "7002343",
    "name": "Warblington",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.967163,
      "latitude": 50.853382
    }
  },
  "7002344": {
    "id": "7002344",
    "name": "Wembley Stadium",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.284958,
      "latitude": 51.553993
    }
  },
  "7002345": {
    "id": "7002345",
    "name": "Worcester Shrub Hill",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.210642,
      "latitude": 52.194817
    }
  },
  "7002347": {
    "id": "7002347",
    "name": "West Croydon",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.101844,
      "latitude": 51.378517
    }
  },
  "7002348": {
    "id": "7002348",
    "name": "Worcester Foregate Street",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.220885,
      "latitude": 52.194801
    }
  },
  "7002349": {
    "id": "7002349",
    "name": "Whitchurch (Glamorgan)",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.222209,
      "latitude": 51.520599
    }
  },
  "7002350": {
    "id": "7002350",
    "name": "Westcliff",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.692146,
      "latitude": 51.537437
    }
  },
  "7002352": {
    "id": "7002352",
    "name": "Westcombe Park",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.017787,
      "latitude": 51.484428
    }
  },
  "7002353": {
    "id": "7002353",
    "name": "Whitchurch (Hants)",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.338183,
      "latitude": 51.237358
    }
  },
  "7002354": {
    "id": "7002354",
    "name": "Whitecraigs",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.310977,
      "latitude": 55.790001
    }
  },
  "7002356": {
    "id": "7002356",
    "name": "Whitchurch (Shrops)",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.671497,
      "latitude": 52.968048
    }
  },
  "7002357": {
    "id": "7002357",
    "name": "Walkden",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.395128,
      "latitude": 53.520313
    }
  },
  "7002358": {
    "id": "7002358",
    "name": "Wimbledon Chase",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.214138,
      "latitude": 51.409958
    }
  },
  "7002359": {
    "id": "7002359",
    "name": "Wood End",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.844372,
      "latitude": 52.344143
    }
  },
  "7002360": {
    "id": "7002360",
    "name": "West Drayton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.472515,
      "latitude": 51.509827
    }
  },
  "7002361": {
    "id": "7002361",
    "name": "West Dulwich",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.090646,
      "latitude": 51.440388
    }
  },
  "7002363": {
    "id": "7002363",
    "name": "Wellingborough",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.676496,
      "latitude": 52.303867
    }
  },
  "7002364": {
    "id": "7002364",
    "name": "Windsor & Eton Central",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.608806,
      "latitude": 51.48275
    }
  },
  "7002365": {
    "id": "7002365",
    "name": "Welham Green",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.209989,
      "latitude": 51.736324
    }
  },
  "7002366": {
    "id": "7002366",
    "name": "Weeley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.114661,
      "latitude": 51.852566
    }
  },
  "7002367": {
    "id": "7002367",
    "name": "Wem",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.718784,
      "latitude": 52.856293
    }
  },
  "7002368": {
    "id": "7002368",
    "name": "Wendover",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.747778,
      "latitude": 51.76193
    }
  },
  "7002369": {
    "id": "7002369",
    "name": "Welshpool",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.141297,
      "latitude": 52.656998
    }
  },
  "7002370": {
    "id": "7002370",
    "name": "Windsor & Eton Riverside",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.605804,
      "latitude": 51.486309
    }
  },
  "7002371": {
    "id": "7002371",
    "name": "Weeton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.581206,
      "latitude": 53.923813
    }
  },
  "7002372": {
    "id": "7002372",
    "name": "Westerfield",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.167082,
      "latitude": 52.081417
    }
  },
  "7002373": {
    "id": "7002373",
    "name": "Whittlesford Parkway",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.165388,
      "latitude": 52.104092
    }
  },
  "7002374": {
    "id": "7002374",
    "name": "Wargrave",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.876589,
      "latitude": 51.498217
    }
  },
  "7002375": {
    "id": "7002375",
    "name": "Welwyn Garden City",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.203081,
      "latitude": 51.800957
    }
  },
  "7002376": {
    "id": "7002376",
    "name": "Westhoughton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.523773,
      "latitude": 53.555775
    }
  },
  "7002377": {
    "id": "7002377",
    "name": "Waun-Gron Park",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.228492,
      "latitude": 51.486366
    }
  },
  "7002378": {
    "id": "7002378",
    "name": "Wallasey Grove Road",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.06982,
      "latitude": 53.428049
    }
  },
  "7002379": {
    "id": "7002379",
    "name": "Wigton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.164373,
      "latitude": 54.829365
    }
  },
  "7002380": {
    "id": "7002380",
    "name": "Wolverhampton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.119529,
      "latitude": 52.587818
    }
  },
  "7002381": {
    "id": "7002381",
    "name": "West Ham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.005323,
      "latitude": 51.528709
    }
  },
  "7002382": {
    "id": "7002382",
    "name": "Whaley Bridge",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.983448,
      "latitude": 53.330402
    }
  },
  "7002383": {
    "id": "7002383",
    "name": "Walthamstow Central",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.019715,
      "latitude": 51.583092
    }
  },
  "7002384": {
    "id": "7002384",
    "name": "West Hampstead",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.191016,
      "latitude": 51.54711
    }
  },
  "7002385": {
    "id": "7002385",
    "name": "White Hart Lane",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.070759,
      "latitude": 51.604622
    }
  },
  "7002386": {
    "id": "7002386",
    "name": "Winchfield",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.90733,
      "latitude": 51.284481
    }
  },
  "7002387": {
    "id": "7002387",
    "name": "Westenhanger",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.037775,
      "latitude": 51.095444
    }
  },
  "7002388": {
    "id": "7002388",
    "name": "Whinhill",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.746744,
      "latitude": 55.938396
    }
  },
  "7002389": {
    "id": "7002389",
    "name": "Whimple",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.354243,
      "latitude": 50.768253
    }
  },
  "7002390": {
    "id": "7002390",
    "name": "Whatstandwell",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.504312,
      "latitude": 53.083076
    }
  },
  "7002391": {
    "id": "7002391",
    "name": "Walthamstow Queens Road",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.024113,
      "latitude": 51.581367
    }
  },
  "7002394": {
    "id": "7002394",
    "name": "Whitehaven",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.586843,
      "latitude": 54.552864
    }
  },
  "7002396": {
    "id": "7002396",
    "name": "Winchelsea",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.701241,
      "latitude": 50.933716
    }
  },
  "7002397": {
    "id": "7002397",
    "name": "Whitby",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.615376,
      "latitude": 54.484615
    }
  },
  "7002398": {
    "id": "7002398",
    "name": "Winchester",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.320628,
      "latitude": 51.067303
    }
  },
  "7002399": {
    "id": "7002399",
    "name": "Widdrington",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.61623,
      "latitude": 55.241428
    }
  },
  "7002400": {
    "id": "7002400",
    "name": "Winnersh Triangle",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.895052,
      "latitude": 51.437233
    }
  },
  "7002401": {
    "id": "7002401",
    "name": "Wickford",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.519052,
      "latitude": 51.615025
    }
  },
  "7002402": {
    "id": "7002402",
    "name": "Wigan Wallgate",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.633814,
      "latitude": 53.545353
    }
  },
  "7002403": {
    "id": "7002403",
    "name": "Willesden Junction",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.2435,
      "latitude": 51.5322
    }
  },
  "7002404": {
    "id": "7002404",
    "name": "Wickham Market",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.398685,
      "latitude": 52.151421
    }
  },
  "7002405": {
    "id": "7002405",
    "name": "Whitton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.356607,
      "latitude": 51.447109
    }
  },
  "7002406": {
    "id": "7002406",
    "name": "Witton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.883566,
      "latitude": 52.51141
    }
  },
  "7002407": {
    "id": "7002407",
    "name": "Widney Manor",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.773647,
      "latitude": 52.396175
    }
  },
  "7002408": {
    "id": "7002408",
    "name": "Widnes",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.733556,
      "latitude": 53.37849
    }
  },
  "7002409": {
    "id": "7002409",
    "name": "Whiston",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.796407,
      "latitude": 53.413932
    }
  },
  "7002410": {
    "id": "7002410",
    "name": "Wivelsfield",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.121633,
      "latitude": 50.964249
    }
  },
  "7002411": {
    "id": "7002411",
    "name": "Wigan North Western",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.632287,
      "latitude": 53.543564
    }
  },
  "7002412": {
    "id": "7002412",
    "name": "Wick",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.097965,
      "latitude": 58.441788
    }
  },
  "7002413": {
    "id": "7002413",
    "name": "West Kilbride",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.851365,
      "latitude": 55.696842
    }
  },
  "7002414": {
    "id": "7002414",
    "name": "West Kirby",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.183771,
      "latitude": 53.373171
    }
  },
  "7002415": {
    "id": "7002415",
    "name": "Worksop",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.123444,
      "latitude": 53.311005
    }
  },
  "7002416": {
    "id": "7002416",
    "name": "Workington Station",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.558626,
      "latitude": 54.645061
    }
  },
  "7002417": {
    "id": "7002417",
    "name": "Wallington",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.151431,
      "latitude": 51.360424
    }
  },
  "7002418": {
    "id": "7002418",
    "name": "Wilmcote",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.755493,
      "latitude": 52.222618
    }
  },
  "7002419": {
    "id": "7002419",
    "name": "Whitland",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.614454,
      "latitude": 51.817989
    }
  },
  "7002420": {
    "id": "7002420",
    "name": "Whitlocks End",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.851545,
      "latitude": 52.3918
    }
  },
  "7002421": {
    "id": "7002421",
    "name": "Whyteleafe",
    "isMeta": true,
    "country": "GB",
    "location": {
      "longitude": -0.08339,
      "latitude": 51.30886
    }
  },
  "7002422": {
    "id": "7002422",
    "name": "West Ealing",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.320792,
      "latitude": 51.513123
    }
  },
  "7002423": {
    "id": "7002423",
    "name": "Welling",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.101872,
      "latitude": 51.464966
    }
  },
  "7002424": {
    "id": "7002424",
    "name": "Wilmslow",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.225177,
      "latitude": 53.326595
    }
  },
  "7002425": {
    "id": "7002425",
    "name": "Wilnecote",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.679499,
      "latitude": 52.610817
    }
  },
  "7002426": {
    "id": "7002426",
    "name": "Whyteleafe South",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.077684,
      "latitude": 51.303474
    }
  },
  "7002427": {
    "id": "7002427",
    "name": "Watlington",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.382736,
      "latitude": 52.672703
    }
  },
  "7002428": {
    "id": "7002428",
    "name": "Williamwood",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.290462,
      "latitude": 55.79398
    }
  },
  "7002429": {
    "id": "7002429",
    "name": "Witley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.645059,
      "latitude": 51.133362
    }
  },
  "7002430": {
    "id": "7002430",
    "name": "Walmer",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.382819,
      "latitude": 51.203808
    }
  },
  "7002431": {
    "id": "7002431",
    "name": "West Malling",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.418098,
      "latitude": 51.291584
    }
  },
  "7002432": {
    "id": "7002432",
    "name": "Winchmore Hill",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.101314,
      "latitude": 51.633896
    }
  },
  "7002433": {
    "id": "7002433",
    "name": "Weston Milton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.942236,
      "latitude": 51.348579
    }
  },
  "7002434": {
    "id": "7002434",
    "name": "West Norwood",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.102517,
      "latitude": 51.431583
    }
  },
  "7002435": {
    "id": "7002435",
    "name": "Windermere",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.904339,
      "latitude": 54.379745
    }
  },
  "7002436": {
    "id": "7002436",
    "name": "Winnersh",
    "isMeta": true,
    "country": "GB",
    "location": {
      "longitude": -0.8794,
      "latitude": 51.4281
    }
  },
  "7002437": {
    "id": "7002437",
    "name": "White Notley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.596874,
      "latitude": 51.839069
    }
  },
  "7002438": {
    "id": "7002438",
    "name": "Wennington",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.587517,
      "latitude": 54.123531
    }
  },
  "7002439": {
    "id": "7002439",
    "name": "Woking (Main)",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.557814,
      "latitude": 51.31847
    }
  },
  "7002440": {
    "id": "7002440",
    "name": "Woburn Sands",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.654073,
      "latitude": 52.01817
    }
  },
  "7002441": {
    "id": "7002441",
    "name": "Woodmansterne",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.154887,
      "latitude": 51.31012
    }
  },
  "7002442": {
    "id": "7002442",
    "name": "Woodlesford",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.443328,
      "latitude": 53.756969
    }
  },
  "7002443": {
    "id": "7002443",
    "name": "South Woodham Ferrers",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.606512,
      "latitude": 51.64957
    }
  },
  "7002444": {
    "id": "7002444",
    "name": "Woodbridge",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.31807,
      "latitude": 52.089855
    }
  },
  "7002445": {
    "id": "7002445",
    "name": "Woodhall",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.655614,
      "latitude": 55.931339
    }
  },
  "7002447": {
    "id": "7002447",
    "name": "Wokingham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.842473,
      "latitude": 51.411556
    }
  },
  "7002448": {
    "id": "7002448",
    "name": "Woldingham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.051013,
      "latitude": 51.289547
    }
  },
  "7002449": {
    "id": "7002449",
    "name": "Wombwell",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.417811,
      "latitude": 53.517754
    }
  },
  "7002450": {
    "id": "7002450",
    "name": "Walton-On-The-Naze",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.268192,
      "latitude": 51.846603
    }
  },
  "7002451": {
    "id": "7002451",
    "name": "Wool",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.220775,
      "latitude": 50.68148
    }
  },
  "7002452": {
    "id": "7002452",
    "name": "Woodgrange Park",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.04514,
      "latitude": 51.548706
    }
  },
  "7002453": {
    "id": "7002453",
    "name": "Woodsmoor",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.1413,
      "latitude": 53.386055
    }
  },
  "7002454": {
    "id": "7002454",
    "name": "Westgate-On-Sea",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.338402,
      "latitude": 51.381386
    }
  },
  "7002455": {
    "id": "7002455",
    "name": "Walton-On-Thames",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.413873,
      "latitude": 51.372364
    }
  },
  "7002456": {
    "id": "7002456",
    "name": "Woodhouse",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.358278,
      "latitude": 53.364639
    }
  },
  "7002457": {
    "id": "7002457",
    "name": "Wolverton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.80377,
      "latitude": 52.064861
    }
  },
  "7002458": {
    "id": "7002458",
    "name": "Wootton Wawen",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.784561,
      "latitude": 52.265831
    }
  },
  "7002459": {
    "id": "7002459",
    "name": "Woodley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.093275,
      "latitude": 53.429245
    }
  },
  "7002460": {
    "id": "7002460",
    "name": "Worplesdon",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.581705,
      "latitude": 51.288189
    }
  },
  "7002462": {
    "id": "7002462",
    "name": "Ware",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.028729,
      "latitude": 51.808056
    }
  },
  "7002463": {
    "id": "7002463",
    "name": "Wrabness",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.17014,
      "latitude": 51.939228
    }
  },
  "7002464": {
    "id": "7002464",
    "name": "Wrenbury",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.596089,
      "latitude": 53.019311
    }
  },
  "7002465": {
    "id": "7002465",
    "name": "Wrexham Central",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.996385,
      "latitude": 53.044876
    }
  },
  "7002467": {
    "id": "7002467",
    "name": "Worle",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.909703,
      "latitude": 51.357995
    }
  },
  "7002468": {
    "id": "7002468",
    "name": "Worthing",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.375924,
      "latitude": 50.818768
    }
  },
  "7002469": {
    "id": "7002469",
    "name": "Wareham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.114646,
      "latitude": 50.692425
    }
  },
  "7002470": {
    "id": "7002470",
    "name": "Worcester Park",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.245415,
      "latitude": 51.381649
    }
  },
  "7002471": {
    "id": "7002471",
    "name": "West Ruislip",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.437812,
      "latitude": 51.569708
    }
  },
  "7002472": {
    "id": "7002472",
    "name": "West Horndon",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.341807,
      "latitude": 51.56744
    }
  },
  "7002473": {
    "id": "7002473",
    "name": "Wressle",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.924169,
      "latitude": 53.773212
    }
  },
  "7002474": {
    "id": "7002474",
    "name": "West Runton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.245516,
      "latitude": 52.935497
    }
  },
  "7002475": {
    "id": "7002475",
    "name": "Wraysbury",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.541906,
      "latitude": 51.457661
    }
  },
  "7002476": {
    "id": "7002476",
    "name": "Walsall",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.98521,
      "latitude": 52.584282
    }
  },
  "7002477": {
    "id": "7002477",
    "name": "Wemyss Bay",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.888525,
      "latitude": 55.876656
    }
  },
  "7002478": {
    "id": "7002478",
    "name": "Worstead",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.404282,
      "latitude": 52.777256
    }
  },
  "7002479": {
    "id": "7002479",
    "name": "Whittlesea",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.116602,
      "latitude": 52.549522
    }
  },
  "7002480": {
    "id": "7002480",
    "name": "Winsford",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.494669,
      "latitude": 53.190505
    }
  },
  "7002481": {
    "id": "7002481",
    "name": "West St Leonards",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.540303,
      "latitude": 50.85368
    }
  },
  "7002482": {
    "id": "7002482",
    "name": "Weston-Super-Mare",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.972301,
      "latitude": 51.34454
    }
  },
  "7002483": {
    "id": "7002483",
    "name": "Woolston",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.37713,
      "latitude": 50.898556
    }
  },
  "7002484": {
    "id": "7002484",
    "name": "Wanstead Park",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.025089,
      "latitude": 51.551746
    }
  },
  "7002485": {
    "id": "7002485",
    "name": "West Sutton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.20437,
      "latitude": 51.365734
    }
  },
  "7002486": {
    "id": "7002486",
    "name": "Wishaw",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.927267,
      "latitude": 55.772346
    }
  },
  "7002487": {
    "id": "7002487",
    "name": "Walton (Merseyside)",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.965794,
      "latitude": 53.456346
    }
  },
  "7002488": {
    "id": "7002488",
    "name": "West Allerton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.907,
      "latitude": 53.36912
    }
  },
  "7002489": {
    "id": "7002489",
    "name": "Warrington Bank Quay",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.602871,
      "latitude": 53.385509
    }
  },
  "7002490": {
    "id": "7002490",
    "name": "Warrington Central",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.592434,
      "latitude": 53.391857
    }
  },
  "7002491": {
    "id": "7002491",
    "name": "West Calder",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.567045,
      "latitude": 55.853848
    }
  },
  "7002492": {
    "id": "7002492",
    "name": "Whitstable",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.033577,
      "latitude": 51.358204
    }
  },
  "7002493": {
    "id": "7002493",
    "name": "West Byfleet",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.505468,
      "latitude": 51.339394
    }
  },
  "7002494": {
    "id": "7002494",
    "name": "Whitley Bridge",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.159331,
      "latitude": 53.698685
    }
  },
  "7002495": {
    "id": "7002495",
    "name": "Wester Hailes",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.284654,
      "latitude": 55.913727
    }
  },
  "7002496": {
    "id": "7002496",
    "name": "Waterloo (Merseyside)",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.025532,
      "latitude": 53.474968
    }
  },
  "7002497": {
    "id": "7002497",
    "name": "Witham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.641373,
      "latitude": 51.805702
    }
  },
  "7002498": {
    "id": "7002498",
    "name": "Westerton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.335444,
      "latitude": 55.905479
    }
  },
  "7002499": {
    "id": "7002499",
    "name": "Water Orton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.743538,
      "latitude": 52.518379
    }
  },
  "7002501": {
    "id": "7002501",
    "name": "Wetheral",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.833897,
      "latitude": 54.883308
    }
  },
  "7002502": {
    "id": "7002502",
    "name": "Watton-At-Stone",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.119521,
      "latitude": 51.857201
    }
  },
  "7002503": {
    "id": "7002503",
    "name": "Wellington (Shropshire)",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.516438,
      "latitude": 52.700928
    }
  },
  "7002505": {
    "id": "7002505",
    "name": "Wallasey Village",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.069901,
      "latitude": 53.422695
    }
  },
  "7002506": {
    "id": "7002506",
    "name": "Wivenhoe",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.955116,
      "latitude": 51.855789
    }
  },
  "7002507": {
    "id": "7002507",
    "name": "Warwick",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.582155,
      "latitude": 52.286861
    }
  },
  "7002508": {
    "id": "7002508",
    "name": "Woolwich Arsenal",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.069883,
      "latitude": 51.489815
    }
  },
  "7002509": {
    "id": "7002509",
    "name": "Wandsworth Common",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.165239,
      "latitude": 51.446072
    }
  },
  "7002510": {
    "id": "7002510",
    "name": "Woolwich Dockyard",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.054083,
      "latitude": 51.49099
    }
  },
  "7002511": {
    "id": "7002511",
    "name": "West Wickham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.015495,
      "latitude": 51.381577
    }
  },
  "7002512": {
    "id": "7002512",
    "name": "Welwyn North",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.191992,
      "latitude": 51.824165
    }
  },
  "7002513": {
    "id": "7002513",
    "name": "West Worthing",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.392983,
      "latitude": 50.818111
    }
  },
  "7002514": {
    "id": "7002514",
    "name": "Wandsworth Road",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.138332,
      "latitude": 51.470829
    }
  },
  "7002515": {
    "id": "7002515",
    "name": "Wandsworth Town",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.187679,
      "latitude": 51.460812
    }
  },
  "7002516": {
    "id": "7002516",
    "name": "Wrexham General",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.002467,
      "latitude": 53.05022
    }
  },
  "7002517": {
    "id": "7002517",
    "name": "Westbury",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.199202,
      "latitude": 51.26693
    }
  },
  "7002518": {
    "id": "7002518",
    "name": "Wye",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.929188,
      "latitude": 51.185463
    }
  },
  "7002519": {
    "id": "7002519",
    "name": "Wylde Green",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.831461,
      "latitude": 52.545599
    }
  },
  "7002520": {
    "id": "7002520",
    "name": "Wylam",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.814058,
      "latitude": 54.974991
    }
  },
  "7002521": {
    "id": "7002521",
    "name": "Wymondham",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 1.11769,
      "latitude": 52.564804
    }
  },
  "7002522": {
    "id": "7002522",
    "name": "Wythall",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.866284,
      "latitude": 52.380131
    }
  },
  "7002523": {
    "id": "7002523",
    "name": "Yarmouth (Isle of Wight)",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.50002,
      "latitude": 50.70765
    }
  },
  "7002524": {
    "id": "7002524",
    "name": "Yalding",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.4118,
      "latitude": 51.226067
    }
  },
  "7002525": {
    "id": "7002525",
    "name": "Yardley Wood",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.854396,
      "latitude": 52.421478
    }
  },
  "7002526": {
    "id": "7002526",
    "name": "Yeoford",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.726109,
      "latitude": 50.77684
    }
  },
  "7002527": {
    "id": "7002527",
    "name": "Yeovil Junction",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.613198,
      "latitude": 50.924686
    }
  },
  "7002528": {
    "id": "7002528",
    "name": "York",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.093159,
      "latitude": 53.957966
    }
  },
  "7002529": {
    "id": "7002529",
    "name": "Yetminster",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.573004,
      "latitude": 50.896114
    }
  },
  "7002530": {
    "id": "7002530",
    "name": "Ynyswen",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.526959,
      "latitude": 51.668095
    }
  },
  "7002531": {
    "id": "7002531",
    "name": "Yoker",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.387464,
      "latitude": 55.892792
    }
  },
  "7002532": {
    "id": "7002532",
    "name": "Yeovil Pen Mill",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.613461,
      "latitude": 50.944466
    }
  },
  "7002533": {
    "id": "7002533",
    "name": "Yorton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.73645,
      "latitude": 52.809009
    }
  },
  "7002534": {
    "id": "7002534",
    "name": "Ystrad Mynach",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.241342,
      "latitude": 51.640884
    }
  },
  "7002535": {
    "id": "7002535",
    "name": "Ystrad Rhondda",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.47557,
      "latitude": 51.644478
    }
  },
  "7002536": {
    "id": "7002536",
    "name": "Yate",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.432541,
      "latitude": 51.540554
    }
  },
  "7002537": {
    "id": "7002537",
    "name": "Yatton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.827815,
      "latitude": 51.390965
    }
  },
  "7002544": {
    "id": "7002544",
    "name": "Earlswood (West Midlands)",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.861907,
      "latitude": 52.366638
    }
  },
  "7002545": {
    "id": "7002545",
    "name": "Fishersgate",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.219161,
      "latitude": 50.834469
    }
  },
  "7002550": {
    "id": "7002550",
    "name": "Edmonton Green",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.059665,
      "latitude": 51.623802
    }
  },
  "7002552": {
    "id": "7002552",
    "name": "Pencoed",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.50053,
      "latitude": 51.524567
    }
  },
  "7002553": {
    "id": "7002553",
    "name": "Pontyclun",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.390959,
      "latitude": 51.524113
    }
  },
  "7002554": {
    "id": "7002554",
    "name": "Wood Street",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.00221,
      "latitude": 51.587284
    }
  },
  "7002559": {
    "id": "7002559",
    "name": "Horwich Parkway",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.543712,
      "latitude": 53.579948
    }
  },
  "7002573": {
    "id": "7002573",
    "name": "Braintree Freeport",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.568258,
      "latitude": 51.869316
    }
  },
  "7002574": {
    "id": "7002574",
    "name": "Dunfermline Queen Margaret",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.42164,
      "latitude": 56.080706
    }
  },
  "7002583": {
    "id": "7002583",
    "name": "Bishopstone (Hill Rise)",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.082352,
      "latitude": 50.780014
    }
  },
  "7002591": {
    "id": "7002591",
    "name": "Kempton Park",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.40929,
      "latitude": 51.421757
    }
  },
  "7002598": {
    "id": "7002598",
    "name": "Northfleet - Cooper Arms",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.324092,
      "latitude": 51.446384
    }
  },
  "7002608": {
    "id": "7002608",
    "name": "Southease Church (By Bus)",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.0306,
      "latitude": 50.8307
    }
  },
  "7002612": {
    "id": "7002612",
    "name": "Swanscombe- George & Dragon",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.309854,
      "latitude": 51.449356
    }
  },
  "7002629": {
    "id": "7002629",
    "name": "Heighington",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.582071,
      "latitude": 54.596977
    }
  },
  "7002642": {
    "id": "7002642",
    "name": "Whifflet",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.022313,
      "latitude": 55.852596
    }
  },
  "7002645": {
    "id": "7002645",
    "name": "Pontefract Tanshelf",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.319964,
      "latitude": 53.694313
    }
  },
  "7002646": {
    "id": "7002646",
    "name": "Featherstone",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.359562,
      "latitude": 53.679253
    }
  },
  "7002647": {
    "id": "7002647",
    "name": "Streethouse",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.399346,
      "latitude": 53.676158
    }
  },
  "7002648": {
    "id": "7002648",
    "name": "Hornbeam Park",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.527272,
      "latitude": 53.980236
    }
  },
  "7002649": {
    "id": "7002649",
    "name": "Sarn",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.589196,
      "latitude": 51.540049
    }
  },
  "7002650": {
    "id": "7002650",
    "name": "Wildmill",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.579684,
      "latitude": 51.520824
    }
  },
  "7002651": {
    "id": "7002651",
    "name": "Maesteg",
    "isMeta": true,
    "country": "GB",
    "location": {
      "longitude": -3.65,
      "latitude": 51.61
    }
  },
  "7002652": {
    "id": "7002652",
    "name": "Maesteg (Ewenny Road)",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.649038,
      "latitude": 51.605297
    }
  },
  "7002674": {
    "id": "7002674",
    "name": "Newstead",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.222036,
      "latitude": 53.069961
    }
  },
  "7002675": {
    "id": "7002675",
    "name": "Hucknall",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.195793,
      "latitude": 53.038265
    }
  },
  "7002676": {
    "id": "7002676",
    "name": "Glenrothes With Thornton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.143189,
      "latitude": 56.162224
    }
  },
  "7002677": {
    "id": "7002677",
    "name": "Manchester Airport",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.268941,
      "latitude": 53.361568
    }
  },
  "7002678": {
    "id": "7002678",
    "name": "Smallbrook Junction",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.15721,
      "latitude": 50.712822
    }
  },
  "7002681": {
    "id": "7002681",
    "name": "Adwick",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.181465,
      "latitude": 53.572994
    }
  },
  "7002683": {
    "id": "7002683",
    "name": "Tondu",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.595064,
      "latitude": 51.548492
    }
  },
  "7002685": {
    "id": "7002685",
    "name": "Gretna Green",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.064608,
      "latitude": 55.001934
    }
  },
  "7002686": {
    "id": "7002686",
    "name": "Sanquhar",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.923437,
      "latitude": 55.370633
    }
  },
  "7002687": {
    "id": "7002687",
    "name": "Ashfield",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.2433,
      "latitude": 55.889214
    }
  },
  "7002688": {
    "id": "7002688",
    "name": "Gilshochill",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.28201,
      "latitude": 55.897295
    }
  },
  "7002689": {
    "id": "7002689",
    "name": "Maryhill",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.301396,
      "latitude": 55.898026
    }
  },
  "7002690": {
    "id": "7002690",
    "name": "Possilpark & Parkhouse",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.259381,
      "latitude": 55.890717
    }
  },
  "7002691": {
    "id": "7002691",
    "name": "Summerston",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.283814,
      "latitude": 55.89835
    }
  },
  "7002692": {
    "id": "7002692",
    "name": "Wallyford",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.013417,
      "latitude": 55.942322
    }
  },
  "7002695": {
    "id": "7002695",
    "name": "Baillieston",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.11454,
      "latitude": 55.844761
    }
  },
  "7002696": {
    "id": "7002696",
    "name": "Bargeddie",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.071789,
      "latitude": 55.851776
    }
  },
  "7002697": {
    "id": "7002697",
    "name": "Carmyle",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.161873,
      "latitude": 55.834053
    }
  },
  "7002698": {
    "id": "7002698",
    "name": "Mount Vernon",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.136638,
      "latitude": 55.839882
    }
  },
  "7002699": {
    "id": "7002699",
    "name": "Kirkwood",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.048037,
      "latitude": 55.85577
    }
  },
  "7002700": {
    "id": "7002700",
    "name": "Digby & Sowton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.474574,
      "latitude": 50.716434
    }
  },
  "7002709": {
    "id": "7002709",
    "name": "Sugar Loaf",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.686991,
      "latitude": 52.082237
    }
  },
  "7002717": {
    "id": "7002717",
    "name": "Ramsgreave & Wilpshire",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.47657,
      "latitude": 53.787868
    }
  },
  "7002718": {
    "id": "7002718",
    "name": "Langho",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.447934,
      "latitude": 53.804934
    }
  },
  "7002719": {
    "id": "7002719",
    "name": "Whalley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.412186,
      "latitude": 53.824165
    }
  },
  "7002720": {
    "id": "7002720",
    "name": "Eastham Rake",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.9812,
      "latitude": 53.307532
    }
  },
  "7002721": {
    "id": "7002721",
    "name": "Prestwick International Airport",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.616166,
      "latitude": 55.511513
    }
  },
  "7002723": {
    "id": "7002723",
    "name": "Cam & Dursley",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.366194,
      "latitude": 51.71701
    }
  },
  "7002724": {
    "id": "7002724",
    "name": "Bramley (W Yorks)",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.630985,
      "latitude": 53.803532
    }
  },
  "7002725": {
    "id": "7002725",
    "name": "Mottisfont & Dunbridge",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.546942,
      "latitude": 51.033987
    }
  },
  "7002728": {
    "id": "7002728",
    "name": "Bentley (South Yorkshire)",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.148788,
      "latitude": 53.542865
    }
  },
  "7002729": {
    "id": "7002729",
    "name": "Willington",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.563356,
      "latitude": 52.854069
    }
  },
  "7002730": {
    "id": "7002730",
    "name": "Syston",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.082611,
      "latitude": 52.693111
    }
  },
  "7002731": {
    "id": "7002731",
    "name": "Sileby",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.109979,
      "latitude": 52.731595
    }
  },
  "7002732": {
    "id": "7002732",
    "name": "Barrow Upon Soar",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.14956,
      "latitude": 52.750244
    }
  },
  "7002733": {
    "id": "7002733",
    "name": "Bulwell",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.196115,
      "latitude": 52.999625
    }
  },
  "7002735": {
    "id": "7002735",
    "name": "Dunrobin Castle",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.946595,
      "latitude": 57.986111
    }
  },
  "7002736": {
    "id": "7002736",
    "name": "Ivybridge",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.904954,
      "latitude": 50.393515
    }
  },
  "7002737": {
    "id": "7002737",
    "name": "Llansamlet",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.892526,
      "latitude": 51.660973
    }
  },
  "7002738": {
    "id": "7002738",
    "name": "Skewen",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.847692,
      "latitude": 51.660789
    }
  },
  "7002739": {
    "id": "7002739",
    "name": "Briton Ferry",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.8193,
      "latitude": 51.637852
    }
  },
  "7002740": {
    "id": "7002740",
    "name": "Pyle",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.702439,
      "latitude": 51.527199
    }
  },
  "7002745": {
    "id": "7002745",
    "name": "Camelon",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.817015,
      "latitude": 56.006775
    }
  },
  "7002749": {
    "id": "7002749",
    "name": "Garth (Mid Glamorgan)",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.641504,
      "latitude": 51.596413
    }
  },
  "7002752": {
    "id": "7002752",
    "name": "Yarm",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.35597,
      "latitude": 54.506115
    }
  },
  "7002754": {
    "id": "7002754",
    "name": "The Hawthorns",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.96313,
      "latitude": 52.505165
    }
  },
  "7002755": {
    "id": "7002755",
    "name": "Jewellery Quarter",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.913522,
      "latitude": 52.489514
    }
  },
  "7002756": {
    "id": "7002756",
    "name": "Smethwick Galton Bridge Low Level",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.980632,
      "latitude": 52.501826
    }
  },
  "7002757": {
    "id": "7002757",
    "name": "Ashchurch for Tewkesbury",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.10921,
      "latitude": 51.997158
    }
  },
  "7002758": {
    "id": "7002758",
    "name": "Baglan",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.811182,
      "latitude": 51.61549
    }
  },
  "7002759": {
    "id": "7002759",
    "name": "Kirkby in Ashfield",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.253278,
      "latitude": 53.099758
    }
  },
  "7002760": {
    "id": "7002760",
    "name": "Sutton Parkway",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.236385,
      "latitude": 53.122108
    }
  },
  "7002761": {
    "id": "7002761",
    "name": "Mansfield",
    "isMeta": true,
    "country": "GB",
    "location": {
      "longitude": -1.1963,
      "latitude": 53.1435
    }
  },
  "7002762": {
    "id": "7002762",
    "name": "Mansfield Woodhouse",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.201651,
      "latitude": 53.1636
    }
  },
  "7002763": {
    "id": "7002763",
    "name": "Chafford Hundred",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.290938,
      "latitude": 51.502792
    }
  },
  "7002764": {
    "id": "7002764",
    "name": "Dereham Market Place",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.945983,
      "latitude": 52.684896
    }
  },
  "7002766": {
    "id": "7002766",
    "name": "Dagenham East L.T.",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.146965,
      "latitude": 51.532065
    }
  },
  "7002776": {
    "id": "7002776",
    "name": "Filton Abbey Wood",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.561933,
      "latitude": 51.509438
    }
  },
  "7002785": {
    "id": "7002785",
    "name": "Portsmouth & Southsea",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.090417,
      "latitude": 50.797756
    }
  },
  "7002812": {
    "id": "7002812",
    "name": "Rugeley Town",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.936963,
      "latitude": 52.754672
    }
  },
  "7002833": {
    "id": "7002833",
    "name": "Brunswick",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.975665,
      "latitude": 53.382153
    }
  },
  "7002841": {
    "id": "7002841",
    "name": "Euxton Balshaw Lane",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.675045,
      "latitude": 53.670071
    }
  },
  "7002842": {
    "id": "7002842",
    "name": "London Victoria Coach Station",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.148278,
      "latitude": 51.492491
    }
  },
  "7002877": {
    "id": "7002877",
    "name": "Conway Park",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.026886,
      "latitude": 53.386219
    }
  },
  "7002878": {
    "id": "7002878",
    "name": "Creswell (Derbys)",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.215865,
      "latitude": 53.264008
    }
  },
  "7002879": {
    "id": "7002879",
    "name": "Dalgety Bay",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.354809,
      "latitude": 56.044178
    }
  },
  "7002880": {
    "id": "7002880",
    "name": "Drumfrochar",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.774822,
      "latitude": 55.941292
    }
  },
  "7002888": {
    "id": "7002888",
    "name": "Langwith - Whaley Thorns",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.208882,
      "latitude": 53.232885
    }
  },
  "7002889": {
    "id": "7002889",
    "name": "Luton Airport Parkway",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.393485,
      "latitude": 51.871159
    }
  },
  "7002892": {
    "id": "7002892",
    "name": "Okehampton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.988267,
      "latitude": 50.731679
    }
  },
  "7002896": {
    "id": "7002896",
    "name": "Shirebrook",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.201995,
      "latitude": 53.20369
    }
  },
  "7002903": {
    "id": "7002903",
    "name": "Whitwell",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.20055,
      "latitude": 53.280987
    }
  },
  "7002915": {
    "id": "7002915",
    "name": "Brighouse",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.781855,
      "latitude": 53.698734
    }
  },
  "7002934": {
    "id": "7002934",
    "name": "Lea Green",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.72386,
      "latitude": 53.42709
    }
  },
  "7002939": {
    "id": "7002939",
    "name": "Wavertree Technology Park",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.922964,
      "latitude": 53.405132
    }
  },
  "7002945": {
    "id": "7002945",
    "name": "Warwick Parkway",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.613493,
      "latitude": 52.286268
    }
  },
  "7002953": {
    "id": "7002953",
    "name": "St Peters",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.38387,
      "latitude": 54.91066
    }
  },
  "7002955": {
    "id": "7002955",
    "name": "Howwood",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.56,
      "latitude": 55.811
    }
  },
  "7002958": {
    "id": "7002958",
    "name": "Heathrow Terminals 1-2-3 Bus",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.456,
      "latitude": 51.471
    }
  },
  "7002996": {
    "id": "7002996",
    "name": "Wembley",
    "isMeta": true,
    "country": "GB",
    "location": {
      "longitude": -0.3042,
      "latitude": 51.556
    }
  },
  "7003006": {
    "id": "7003006",
    "name": "Beauly",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.4698,
      "latitude": 57.478
    }
  },
  "7003009": {
    "id": "7003009",
    "name": "Fellgate",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.4878,
      "latitude": 54.957
    }
  },
  "7003015": {
    "id": "7003015",
    "name": "Stadium of Light",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.383751,
      "latitude": 54.917837
    }
  },
  "7003021": {
    "id": "7003021",
    "name": "Pickering Eastgate",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.77435,
      "latitude": 54.24349
    }
  },
  "7003024": {
    "id": "7003024",
    "name": "Newcastle Airport",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.71209,
      "latitude": 55.03588
    }
  },
  "7003026": {
    "id": "7003026",
    "name": "Brunstane",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.10064,
      "latitude": 55.94143
    }
  },
  "7003030": {
    "id": "7003030",
    "name": "Newcraighall",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.091582,
      "latitude": 55.932619
    }
  },
  "7003032": {
    "id": "7003032",
    "name": "Newcastle Central (Metro)",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.61729,
      "latitude": 54.96823
    }
  },
  "7003040": {
    "id": "7003040",
    "name": "East Midlands Parkway",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.263,
      "latitude": 52.862
    }
  },
  "7003251": {
    "id": "7003251",
    "name": "Corby",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.687944,
      "latitude": 52.489196
    }
  },
  "7003285": {
    "id": "7003285",
    "name": "Chandlers Ford",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.3845,
      "latitude": 50.983
    }
  },
  "7003350": {
    "id": "7003350",
    "name": "Edinburgh Park",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.307829,
      "latitude": 55.927615
    }
  },
  "7004079": {
    "id": "7004079",
    "name": "Glasshoughton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.34247,
      "latitude": 53.70884
    }
  },
  "7004273": {
    "id": "7004273",
    "name": "Sampford Courtenay",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.93751,
      "latitude": 50.77896
    }
  },
  "7004287": {
    "id": "7004287",
    "name": "Imperial Wharf",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.183026,
      "latitude": 51.475134
    }
  },
  "7004290": {
    "id": "7004290",
    "name": "Gartcosh",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.078,
      "latitude": 55.885
    }
  },
  "7004296": {
    "id": "7004296",
    "name": "Shepherds Bush",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.218,
      "latitude": 51.506
    }
  },
  "7004326": {
    "id": "7004326",
    "name": "Cardiff International Airport",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.343333,
      "latitude": 51.396667
    }
  },
  "7004331": {
    "id": "7004331",
    "name": "Llantwit Major",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.47503,
      "latitude": 51.40623
    }
  },
  "7004334": {
    "id": "7004334",
    "name": "Rhoose Cardiff Airport",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.347599,
      "latitude": 51.387454
    }
  },
  "7004347": {
    "id": "7004347",
    "name": "Chatelherault",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.00466,
      "latitude": 55.76521
    }
  },
  "7004349": {
    "id": "7004349",
    "name": "Kelvindale",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.3106,
      "latitude": 55.8933
    }
  },
  "7004353": {
    "id": "7004353",
    "name": "Larkhall",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.974445,
      "latitude": 55.739258
    }
  },
  "7004358": {
    "id": "7004358",
    "name": "Merryton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.978667,
      "latitude": 55.749013
    }
  },
  "7004368": {
    "id": "7004368",
    "name": "Barlaston",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.168118,
      "latitude": 52.942856
    }
  },
  "7004384": {
    "id": "7004384",
    "name": "Liverpool South Parkway",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.8897,
      "latitude": 53.3577
    }
  },
  "7004397": {
    "id": "7004397",
    "name": "Wedgwood Lane",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.17558,
      "latitude": 52.95097
    }
  },
  "7004402": {
    "id": "7004402",
    "name": "Coleshill Parkway",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.7081,
      "latitude": 52.5164
    }
  },
  "7004416": {
    "id": "7004416",
    "name": "Alloa",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.7872,
      "latitude": 56.1179
    }
  },
  "7004417": {
    "id": "7004417",
    "name": "Crosskeys",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.1261,
      "latitude": 51.621
    }
  },
  "7004419": {
    "id": "7004419",
    "name": "Ebbsfleet International",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.320887,
      "latitude": 51.443009
    }
  },
  "7004420": {
    "id": "7004420",
    "name": "Ebbw Vale Parkway",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.1965,
      "latitude": 51.7573
    }
  },
  "7004422": {
    "id": "7004422",
    "name": "Llanhilleth",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.137033,
      "latitude": 51.700339
    }
  },
  "7004424": {
    "id": "7004424",
    "name": "Newbridge",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.142116,
      "latitude": 51.665686
    }
  },
  "7004425": {
    "id": "7004425",
    "name": "Risca & Pontymister",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.093533,
      "latitude": 51.60443
    }
  },
  "7004426": {
    "id": "7004426",
    "name": "Rogerstone",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.065478,
      "latitude": 51.593413
    }
  },
  "7004428": {
    "id": "7004428",
    "name": "London St-Pancras",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.126361,
      "latitude": 51.531921
    }
  },
  "7004443": {
    "id": "7004443",
    "name": "Heathrow Terminal 5 Rail",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.48,
      "latitude": 51.47
    }
  },
  "7004445": {
    "id": "7004445",
    "name": "Llanharan",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.4408,
      "latitude": 51.53759
    }
  },
  "7004458": {
    "id": "7004458",
    "name": "Mitcham Eastfields",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.154764,
      "latitude": 51.407725
    }
  },
  "7004484": {
    "id": "7004484",
    "name": "Aylesbury Vale Parkway",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.8623,
      "latitude": 51.8327
    }
  },
  "7004498": {
    "id": "7004498",
    "name": "Heathrow Terminal 5 Bus",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.48,
      "latitude": 51.47
    }
  },
  "7004516": {
    "id": "7004516",
    "name": "Laurencekirk",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.466345,
      "latitude": 56.835945
    }
  },
  "7004528": {
    "id": "7004528",
    "name": "Canada Water",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.05076,
      "latitude": 51.49823
    }
  },
  "7004529": {
    "id": "7004529",
    "name": "Dalston Junction",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.07544,
      "latitude": 51.546139
    }
  },
  "7004540": {
    "id": "7004540",
    "name": "Haggerston",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.07642,
      "latitude": 51.53912
    }
  },
  "7004543": {
    "id": "7004543",
    "name": "Hoxton",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.07672,
      "latitude": 51.53193
    }
  },
  "7004547": {
    "id": "7004547",
    "name": "New Cross Station",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.032984,
      "latitude": 51.476299
    }
  },
  "7004554": {
    "id": "7004554",
    "name": "Rotherhithe",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.05353,
      "latitude": 51.50098
    }
  },
  "7004555": {
    "id": "7004555",
    "name": "Shadwell",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.05743,
      "latitude": 51.51093
    }
  },
  "7004556": {
    "id": "7004556",
    "name": "Shoreditch High Street",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.075614,
      "latitude": 51.523433
    }
  },
  "7004558": {
    "id": "7004558",
    "name": "Surrey Quays",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.048114,
      "latitude": 51.49279
    }
  },
  "7004563": {
    "id": "7004563",
    "name": "Wapping",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.05629,
      "latitude": 51.50372
    }
  },
  "7004564": {
    "id": "7004564",
    "name": "Whitechapel",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.061404,
      "latitude": 51.519091
    }
  },
  "7004591": {
    "id": "7004591",
    "name": "Armadale",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.68504,
      "latitude": 55.88639
    }
  },
  "7004592": {
    "id": "7004592",
    "name": "Blackridge",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.75047,
      "latitude": 55.88368
    }
  },
  "7004596": {
    "id": "7004596",
    "name": "Caldercruix",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.88978,
      "latitude": 55.88791
    }
  },
  "7004605": {
    "id": "7004605",
    "name": "Southend Airport",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.704084,
      "latitude": 51.5687
    }
  },
  "7004611": {
    "id": "7004611",
    "name": "Coulsdon Town",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.13429,
      "latitude": 51.32243
    }
  },
  "7004635": {
    "id": "7004635",
    "name": "Buckshaw Parkway",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.66447,
      "latitude": 53.67283
    }
  },
  "7004646": {
    "id": "7004646",
    "name": "Wells Next The Sea",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.850696,
      "latitude": 52.95288
    }
  },
  "7004673": {
    "id": "7004673",
    "name": "Fishguard & Goodwick",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.9948,
      "latitude": 52.0035
    }
  },
  "7004695": {
    "id": "7004695",
    "name": "Conon Bridge",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -4.4404,
      "latitude": 57.5617
    }
  },
  "7004704": {
    "id": "7004704",
    "name": "Stratford-Upon-Avon Parkway",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.7307,
      "latitude": 52.20642
    }
  },
  "7004713": {
    "id": "7004713",
    "name": "Energlyn & Churchill Park",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -3.2287,
      "latitude": 51.5838
    }
  },
  "7004715": {
    "id": "7004715",
    "name": "Heysham Port",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -2.913179,
      "latitude": 54.033284
    }
  },
  "7004720": {
    "id": "7004720",
    "name": "Stratford International",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -0.009882,
      "latitude": 51.544306
    }
  },
  "7004734": {
    "id": "7004734",
    "name": "James Cook University Hospital",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": -1.2076,
      "latitude": 54.5515
    }
  },
  "7096001": {
    "id": "7096001",
    "name": "London",
    "isMeta": true,
    "country": "GB",
    "location": {
      "longitude": -0.0784599781036377,
      "latitude": 51.50469232881583
    }
  },
  "7096002": {
    "id": "7096002",
    "name": "Glasgow",
    "isMeta": true,
    "country": "GB",
    "location": {
      "longitude": -4.259,
      "latitude": 55.858
    }
  },
  "7098107": {
    "id": "7098107",
    "name": "Ashford International",
    "isMeta": false,
    "country": "GB",
    "location": {
      "longitude": 0.8751672506332396,
      "latitude": 51.14335293766652
    }
  },
  "7100001": {
    "id": "7100001",
    "name": "Ávila",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.682948,
      "latitude": 40.657212
    }
  },
  "7100002": {
    "id": "7100002",
    "name": "Medina del Campo Estación",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.910474,
      "latitude": 41.317676
    }
  },
  "7100003": {
    "id": "7100003",
    "name": "Valladolid Campo Grande",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.727004,
      "latitude": 41.641971
    }
  },
  "7100004": {
    "id": "7100004",
    "name": "Venta de Baños",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.49604,
      "latitude": 41.9172
    }
  },
  "7100005": {
    "id": "7100005",
    "name": "Burgos Rosa Manzano",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.666297,
      "latitude": 42.371189
    }
  },
  "7100006": {
    "id": "7100006",
    "name": "Miranda de Ebro",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -2.94091,
      "latitude": 42.690554
    }
  },
  "7100007": {
    "id": "7100007",
    "name": "Alsasua",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -2.18146,
      "latitude": 42.8957
    }
  },
  "7100008": {
    "id": "7100008",
    "name": "San Sebastián-Donostia",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.976781,
      "latitude": 43.317668
    }
  },
  "7100009": {
    "id": "7100009",
    "name": "Irún",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.80115,
      "latitude": 43.339404
    }
  },
  "7100010": {
    "id": "7100010",
    "name": "Segovia Estación",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.11332,
      "latitude": 40.934062
    }
  },
  "7100011": {
    "id": "7100011",
    "name": "Bilbao Abando",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -2.927507,
      "latitude": 43.259715
    }
  },
  "7100012": {
    "id": "7100012",
    "name": "Palencia",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.533826,
      "latitude": 42.01585
    }
  },
  "7100013": {
    "id": "7100013",
    "name": "Torrelavega",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.042422,
      "latitude": 43.327556
    }
  },
  "7100014": {
    "id": "7100014",
    "name": "Santander Estación",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.811435,
      "latitude": 43.458287
    }
  },
  "7100015": {
    "id": "7100015",
    "name": "León",
    "isMeta": true,
    "country": "ES",
    "location": {
      "longitude": -5.582382,
      "latitude": 42.595888
    }
  },
  "7100016": {
    "id": "7100016",
    "name": "Gijón-Sanz Crespo",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.675932,
      "latitude": 43.537697
    }
  },
  "7100017": {
    "id": "7100017",
    "name": "Madrid-Chamartín-Clara Campoamor",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.68235,
      "latitude": 40.472151
    }
  },
  "7100019": {
    "id": "7100019",
    "name": "Astorga",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.047124,
      "latitude": 42.459513
    }
  },
  "7100020": {
    "id": "7100020",
    "name": "Monforte de Lemos",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -7.503215,
      "latitude": 42.52953
    }
  },
  "7100021": {
    "id": "7100021",
    "name": "Betanzos-Infesta",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -8.225983,
      "latitude": 43.270808
    }
  },
  "7100022": {
    "id": "7100022",
    "name": "Ourense-Empalme",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -7.872743,
      "latitude": 42.350627
    }
  },
  "7100023": {
    "id": "7100023",
    "name": "Guillarei",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -8.622264,
      "latitude": 42.065669
    }
  },
  "7100026": {
    "id": "7100026",
    "name": "Pontevedra",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -8.635496,
      "latitude": 42.421534
    }
  },
  "7100027": {
    "id": "7100027",
    "name": "Salamanca",
    "isMeta": true,
    "country": "ES",
    "location": {
      "longitude": -5.648659,
      "latitude": 40.971547
    }
  },
  "7100028": {
    "id": "7100028",
    "name": "Santiago de Compostela",
    "isMeta": true,
    "country": "ES",
    "location": {
      "longitude": -8.544687,
      "latitude": 42.870518
    }
  },
  "7100029": {
    "id": "7100029",
    "name": "A Coruña-San Cristovo",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -8.409651,
      "latitude": 43.352681
    }
  },
  "7100030": {
    "id": "7100030",
    "name": "Fuentes de Oñoro",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.824583,
      "latitude": 40.598737
    }
  },
  "7100031": {
    "id": "7100031",
    "name": "Talavera de la Reina",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.826919,
      "latitude": 39.970778
    }
  },
  "7100032": {
    "id": "7100032",
    "name": "Cáceres",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.385972,
      "latitude": 39.461197
    }
  },
  "7100033": {
    "id": "7100033",
    "name": "Valencia de Alcántara",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -7.23085,
      "latitude": 39.427119
    }
  },
  "7100034": {
    "id": "7100034",
    "name": "Mérida",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.343157,
      "latitude": 38.921548
    }
  },
  "7100035": {
    "id": "7100035",
    "name": "Badajoz",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.981822,
      "latitude": 38.890867
    }
  },
  "7100036": {
    "id": "7100036",
    "name": "Huelva",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.950675,
      "latitude": 37.252655
    }
  },
  "7100037": {
    "id": "7100037",
    "name": "Linares-Baeza",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.58932,
      "latitude": 38.069128
    }
  },
  "7100038": {
    "id": "7100038",
    "name": "Cordoba",
    "isMeta": true,
    "country": "ES",
    "location": {
      "longitude": -4.789353,
      "latitude": 37.888714
    }
  },
  "7100041": {
    "id": "7100041",
    "name": "Utrera",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.790221,
      "latitude": 37.183241
    }
  },
  "7100042": {
    "id": "7100042",
    "name": "Jerez de la Frontera",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.125159,
      "latitude": 36.6782
    }
  },
  "7100043": {
    "id": "7100043",
    "name": "Cádiz",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.286893,
      "latitude": 36.527945
    }
  },
  "7100044": {
    "id": "7100044",
    "name": "Bobadilla",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.727831,
      "latitude": 37.037445
    }
  },
  "7100045": {
    "id": "7100045",
    "name": "Málaga-María Zambrano",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.43214,
      "latitude": 36.711819
    }
  },
  "7100046": {
    "id": "7100046",
    "name": "Ronda",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.162127,
      "latitude": 36.748531
    }
  },
  "7100047": {
    "id": "7100047",
    "name": "Guadix",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.127284,
      "latitude": 37.3178
    }
  },
  "7100048": {
    "id": "7100048",
    "name": "Almería",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -2.435914,
      "latitude": 36.883792
    }
  },
  "7100049": {
    "id": "7100049",
    "name": "Madrid Atocha",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.689757,
      "latitude": 40.405963
    }
  },
  "7100050": {
    "id": "7100050",
    "name": "Alcázar de San Juan",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.206209,
      "latitude": 39.395477
    }
  },
  "7100051": {
    "id": "7100051",
    "name": "Alacant-Terminal",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.494972,
      "latitude": 38.344444
    }
  },
  "7100052": {
    "id": "7100052",
    "name": "Murcia",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.131499,
      "latitude": 37.974489
    }
  },
  "7100053": {
    "id": "7100053",
    "name": "Cartagena",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.974763,
      "latitude": 37.605023
    }
  },
  "7100054": {
    "id": "7100054",
    "name": "Valencia Estaciò Nord",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.377151,
      "latitude": 39.466932
    }
  },
  "7100055": {
    "id": "7100055",
    "name": "Sagunt",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.271564,
      "latitude": 39.675779
    }
  },
  "7100056": {
    "id": "7100056",
    "name": "Benicàssim",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 0.057863,
      "latitude": 40.058126
    }
  },
  "7100057": {
    "id": "7100057",
    "name": "Salou",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 1.129296,
      "latitude": 41.077502
    }
  },
  "7100058": {
    "id": "7100058",
    "name": "Cuenca Estación",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -2.136562,
      "latitude": 40.067288
    }
  },
  "7100059": {
    "id": "7100059",
    "name": "Teruel",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.110194,
      "latitude": 40.340998
    }
  },
  "7100060": {
    "id": "7100060",
    "name": "Guadalajara Estación",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.1822298,
      "latitude": 40.6441032
    }
  },
  "7100061": {
    "id": "7100061",
    "name": "Reus",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 1.100216,
      "latitude": 41.160644
    }
  },
  "7100062": {
    "id": "7100062",
    "name": "Tarragona Estació",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 1.253527,
      "latitude": 41.111212
    }
  },
  "7100063": {
    "id": "7100063",
    "name": "Barcelona Passeig de Gracia",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 2.164755,
      "latitude": 41.392089
    }
  },
  "7100064": {
    "id": "7100064",
    "name": "Barcelona Sants",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 2.140367,
      "latitude": 41.378911
    }
  },
  "7100065": {
    "id": "7100065",
    "name": "Huesca",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.409953,
      "latitude": 42.133178
    }
  },
  "7100066": {
    "id": "7100066",
    "name": "Canfranc",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.513805,
      "latitude": 42.751258
    }
  },
  "7100067": {
    "id": "7100067",
    "name": "Barcelona Estació de França",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 2.186733,
      "latitude": 41.383657
    }
  },
  "7100073": {
    "id": "7100073",
    "name": "Lleida",
    "isMeta": true,
    "country": "ES",
    "location": {
      "longitude": 0.63302,
      "latitude": 41.620775
    }
  },
  "7100074": {
    "id": "7100074",
    "name": "Barcelona Plaça de Catalunya",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 2.169285,
      "latitude": 41.387702
    }
  },
  "7100075": {
    "id": "7100075",
    "name": "Granollers Centro",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 2.29162,
      "latitude": 41.599308
    }
  },
  "7100076": {
    "id": "7100076",
    "name": "Caldas de Malavella",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 2.800607,
      "latitude": 41.841181
    }
  },
  "7100077": {
    "id": "7100077",
    "name": "Girona",
    "isMeta": true,
    "country": "ES",
    "location": {
      "longitude": 2.816482,
      "latitude": 41.979516
    }
  },
  "7100078": {
    "id": "7100078",
    "name": "Figueres",
    "isMeta": true,
    "country": "ES",
    "location": {
      "longitude": 2.969271,
      "latitude": 42.264951
    }
  },
  "7100079": {
    "id": "7100079",
    "name": "Port-Bou",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 3.157847,
      "latitude": 42.424725
    }
  },
  "7100080": {
    "id": "7100080",
    "name": "Pamplona/Iruña",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.661889,
      "latitude": 42.825122
    }
  },
  "7100081": {
    "id": "7100081",
    "name": "Logroño",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -2.440833,
      "latitude": 42.457778
    }
  },
  "7100082": {
    "id": "7100082",
    "name": "Toledo",
    "isMeta": true,
    "country": "ES",
    "location": {
      "longitude": -4.01125,
      "latitude": 39.8624
    }
  },
  "7100083": {
    "id": "7100083",
    "name": "Aranjuez",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.618877,
      "latitude": 40.0347
    }
  },
  "7100085": {
    "id": "7100085",
    "name": "Arenys de Mar",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 2.549457,
      "latitude": 41.577465
    }
  },
  "7100089": {
    "id": "7100089",
    "name": "Barcelona Sant Andreu Condal",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 2.193529,
      "latitude": 41.435884
    }
  },
  "7100091": {
    "id": "7100091",
    "name": "Cariñena",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.22878,
      "latitude": 41.335745
    }
  },
  "7100093": {
    "id": "7100093",
    "name": "Cabeza de Buey",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.22659,
      "latitude": 38.724
    }
  },
  "7100094": {
    "id": "7100094",
    "name": "Calatayud",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.63849,
      "latitude": 41.346298
    }
  },
  "7100095": {
    "id": "7100095",
    "name": "Caminreal-Fuentes Claras",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.338673,
      "latitude": 40.850777
    }
  },
  "7100097": {
    "id": "7100097",
    "name": "Casetas",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.020608,
      "latitude": 41.722532
    }
  },
  "7100098": {
    "id": "7100098",
    "name": "Castellón de la Plana",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.052083,
      "latitude": 39.988262
    }
  },
  "7100100": {
    "id": "7100100",
    "name": "Ciudad Real",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.912914,
      "latitude": 38.985029
    }
  },
  "7100102": {
    "id": "7100102",
    "name": "Escacena",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.39151,
      "latitude": 37.397256
    }
  },
  "7100103": {
    "id": "7100103",
    "name": "Espelúy",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.832811,
      "latitude": 38.010257
    }
  },
  "7100107": {
    "id": "7100107",
    "name": "Gandía",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.180566,
      "latitude": 38.970503
    }
  },
  "7100110": {
    "id": "7100110",
    "name": "Calamocha Nueva",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.30028,
      "latitude": 40.903354
    }
  },
  "7100111": {
    "id": "7100111",
    "name": "La Encina",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.953971,
      "latitude": 38.765162
    }
  },
  "7100112": {
    "id": "7100112",
    "name": "La Palma del Condado",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.554493,
      "latitude": 37.390505
    }
  },
  "7100117": {
    "id": "7100117",
    "name": "Tardienta",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.538067,
      "latitude": 41.975777
    }
  },
  "7100118": {
    "id": "7100118",
    "name": "Torralba",
    "isMeta": true,
    "country": "ES",
    "location": {
      "longitude": -2.49296,
      "latitude": 41.136625
    }
  },
  "7100121": {
    "id": "7100121",
    "name": "Tortosa",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 0.523576,
      "latitude": 40.807197
    }
  },
  "7100123": {
    "id": "7100123",
    "name": "Valdepeñas",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.395576,
      "latitude": 38.763284
    }
  },
  "7100124": {
    "id": "7100124",
    "name": "Vilches",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.517694,
      "latitude": 38.215706
    }
  },
  "7100125": {
    "id": "7100125",
    "name": "Villa del Rio",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.284186,
      "latitude": 37.981042
    }
  },
  "7100127": {
    "id": "7100127",
    "name": "Vitoria – Gasteiz",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -2.672618,
      "latitude": 42.841213
    }
  },
  "7100130": {
    "id": "7100130",
    "name": "Flassa",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 2.957235,
      "latitude": 42.047537
    }
  },
  "7100132": {
    "id": "7100132",
    "name": "Segorbe-Ciudad",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.482325,
      "latitude": 39.8471
    }
  },
  "7100133": {
    "id": "7100133",
    "name": "Silla",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.415,
      "latitude": 39.361748
    }
  },
  "7100135": {
    "id": "7100135",
    "name": "Albacete-Los Llanos",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.847579,
      "latitude": 39.000086
    }
  },
  "7100136": {
    "id": "7100136",
    "name": "Algeciras",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.450995,
      "latitude": 36.12672
    }
  },
  "7100137": {
    "id": "7100137",
    "name": "Castejón de Ebro",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.692156,
      "latitude": 42.172811
    }
  },
  "7100140": {
    "id": "7100140",
    "name": "Llodio",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -2.960435,
      "latitude": 43.142217
    }
  },
  "7100141": {
    "id": "7100141",
    "name": "Lora del Rio",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.531197,
      "latitude": 37.661215
    }
  },
  "7100143": {
    "id": "7100143",
    "name": "Los Rosales",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.7254,
      "latitude": 37.589427
    }
  },
  "7100144": {
    "id": "7100144",
    "name": "Tremp",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 0.885446,
      "latitude": 42.170465
    }
  },
  "7100145": {
    "id": "7100145",
    "name": "Manzanares",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.370559,
      "latitude": 39.005974
    }
  },
  "7100146": {
    "id": "7100146",
    "name": "Marchena",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.425466,
      "latitude": 37.334322
    }
  },
  "7100147": {
    "id": "7100147",
    "name": "Balaguer",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 0.80795,
      "latitude": 41.792496
    }
  },
  "7100148": {
    "id": "7100148",
    "name": "Moreda",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.310987,
      "latitude": 37.43075
    }
  },
  "7100150": {
    "id": "7100150",
    "name": "Navalmoral de la Mata",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.54567,
      "latitude": 39.895061
    }
  },
  "7100152": {
    "id": "7100152",
    "name": "Oviedo",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.855339,
      "latitude": 43.366237
    }
  },
  "7100155": {
    "id": "7100155",
    "name": "Peñaranda de Bracamonte",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.20647,
      "latitude": 40.8981
    }
  },
  "7100159": {
    "id": "7100159",
    "name": "Puertollano",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.111989,
      "latitude": 38.691199
    }
  },
  "7100160": {
    "id": "7100160",
    "name": "Vinaròs",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 0.456741,
      "latitude": 40.472448
    }
  },
  "7100162": {
    "id": "7100162",
    "name": "Ferrol",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -8.230855,
      "latitude": 43.488266
    }
  },
  "7100163": {
    "id": "7100163",
    "name": "Reinosa",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.140934,
      "latitude": 42.994021
    }
  },
  "7100168": {
    "id": "7100168",
    "name": "San Juan del Puerto",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.846984,
      "latitude": 37.309557
    }
  },
  "7100170": {
    "id": "7100170",
    "name": "Sant Vicenç de Calders",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 1.524167,
      "latitude": 41.186111
    }
  },
  "7100172": {
    "id": "7100172",
    "name": "Castelldefels",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 1.979334,
      "latitude": 41.278798
    }
  },
  "7100173": {
    "id": "7100173",
    "name": "Sitges",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 1.8096,
      "latitude": 41.239182
    }
  },
  "7100174": {
    "id": "7100174",
    "name": "Soria",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -2.475296,
      "latitude": 41.755226
    }
  },
  "7100175": {
    "id": "7100175",
    "name": "Zafra",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.404886,
      "latitude": 38.413954
    }
  },
  "7100176": {
    "id": "7100176",
    "name": "Zamora",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.739909,
      "latitude": 41.515987
    }
  },
  "7100177": {
    "id": "7100177",
    "name": "Zaragoza Portillo",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.895789,
      "latitude": 41.6528
    }
  },
  "7100178": {
    "id": "7100178",
    "name": "Ayerbe",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.682452,
      "latitude": 42.275414
    }
  },
  "7100179": {
    "id": "7100179",
    "name": "Ciudad Rodrigo",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.520316,
      "latitude": 40.618648
    }
  },
  "7100180": {
    "id": "7100180",
    "name": "Sevilla Santa Justa",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.975264,
      "latitude": 37.391925
    }
  },
  "7100181": {
    "id": "7100181",
    "name": "Monfrague",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.100879,
      "latitude": 39.937508
    }
  },
  "7100182": {
    "id": "7100182",
    "name": "Granada",
    "isMeta": true,
    "country": "ES",
    "location": {
      "longitude": -3.609061,
      "latitude": 37.183906
    }
  },
  "7100184": {
    "id": "7100184",
    "name": "Maçanet – Massanes",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 2.674389,
      "latitude": 41.775874
    }
  },
  "7100185": {
    "id": "7100185",
    "name": "Elx Parc",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.706462,
      "latitude": 38.269209
    }
  },
  "7100186": {
    "id": "7100186",
    "name": "Lugo",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -7.55226,
      "latitude": 43.015307
    }
  },
  "7100187": {
    "id": "7100187",
    "name": "Alora",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.698823,
      "latitude": 36.819906
    }
  },
  "7100188": {
    "id": "7100188",
    "name": "Madrid Príncipe Pio",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.718846,
      "latitude": 40.421272
    }
  },
  "7100189": {
    "id": "7100189",
    "name": "Barcelona-Clot-Arago",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 2.18739,
      "latitude": 41.409106
    }
  },
  "7100190": {
    "id": "7100190",
    "name": "Ponferrada",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.60263,
      "latitude": 42.545576
    }
  },
  "7100191": {
    "id": "7100191",
    "name": "Almorchon",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.290115,
      "latitude": 38.69653
    }
  },
  "7100192": {
    "id": "7100192",
    "name": "Arbo",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -8.300225,
      "latitude": 42.106866
    }
  },
  "7100195": {
    "id": "7100195",
    "name": "Benicarló-Peñiscola",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 0.414753,
      "latitude": 40.427088
    }
  },
  "7100196": {
    "id": "7100196",
    "name": "Burriana-Alquerías Niño Perdido",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.103867,
      "latitude": 39.8964
    }
  },
  "7100197": {
    "id": "7100197",
    "name": "Cambrils",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 1.052888,
      "latitude": 41.07005
    }
  },
  "7100199": {
    "id": "7100199",
    "name": "Cullera",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.263365,
      "latitude": 39.17792
    }
  },
  "7100201": {
    "id": "7100201",
    "name": "Elda Petrer",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.800848,
      "latitude": 38.484834
    }
  },
  "7100203": {
    "id": "7100203",
    "name": "Gibraleon",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.961965,
      "latitude": 37.367762
    }
  },
  "7100204": {
    "id": "7100204",
    "name": "Jaén",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.790975,
      "latitude": 37.780223
    }
  },
  "7100206": {
    "id": "7100206",
    "name": "L’Aldea-Amposta-Tortosa",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 0.614295,
      "latitude": 40.753675
    }
  },
  "7100207": {
    "id": "7100207",
    "name": "Llançà",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 3.149101,
      "latitude": 42.36669
    }
  },
  "7100208": {
    "id": "7100208",
    "name": "Lorca Sutullena",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.696264,
      "latitude": 37.671687
    }
  },
  "7100209": {
    "id": "7100209",
    "name": "Manresa",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 1.826482,
      "latitude": 41.720231
    }
  },
  "7100211": {
    "id": "7100211",
    "name": "Buñol",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.787482,
      "latitude": 39.427434
    }
  },
  "7100214": {
    "id": "7100214",
    "name": "Pancorbo",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.112631,
      "latitude": 42.630587
    }
  },
  "7100215": {
    "id": "7100215",
    "name": "La Pobla de Segur",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 0.965976,
      "latitude": 42.2398
    }
  },
  "7100218": {
    "id": "7100218",
    "name": "Sabadell Centre",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 2.115844,
      "latitude": 41.546515
    }
  },
  "7100219": {
    "id": "7100219",
    "name": "Sabiñanigo",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.372971,
      "latitude": 42.520145
    }
  },
  "7100220": {
    "id": "7100220",
    "name": "Salvaterra de Miño",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -8.49521,
      "latitude": 42.081678
    }
  },
  "7100223": {
    "id": "7100223",
    "name": "Terrasa Est",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 2.039715,
      "latitude": 41.567469
    }
  },
  "7100228": {
    "id": "7100228",
    "name": "Vilagarcía de Arousa",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -8.762064,
      "latitude": 42.602019
    }
  },
  "7100229": {
    "id": "7100229",
    "name": "Port Aventura",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 1.146214,
      "latitude": 41.089251
    }
  },
  "7100230": {
    "id": "7100230",
    "name": "Requena",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.104333,
      "latitude": 39.491239
    }
  },
  "7100231": {
    "id": "7100231",
    "name": "Utiel",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.201929,
      "latitude": 39.570686
    }
  },
  "7100232": {
    "id": "7100232",
    "name": "Huete",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -2.681644,
      "latitude": 40.146831
    }
  },
  "7100233": {
    "id": "7100233",
    "name": "Tarancon",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.009831,
      "latitude": 40.006402
    }
  },
  "7100234": {
    "id": "7100234",
    "name": "Alcoi",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.470144,
      "latitude": 38.709645
    }
  },
  "7100235": {
    "id": "7100235",
    "name": "Pedrera",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.894635,
      "latitude": 37.222101
    }
  },
  "7100237": {
    "id": "7100237",
    "name": "Betanzos-Cidade",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -8.215673,
      "latitude": 43.284264
    }
  },
  "7100358": {
    "id": "7100358",
    "name": "Antequera Ciudad",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.561063,
      "latitude": 37.028276
    }
  },
  "7100366": {
    "id": "7100366",
    "name": "Ariza",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -2.059662,
      "latitude": 41.309478
    }
  },
  "7100369": {
    "id": "7100369",
    "name": "Zumárraga",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -2.320025,
      "latitude": 43.08705
    }
  },
  "7100371": {
    "id": "7100371",
    "name": "Arévalo",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.702005,
      "latitude": 41.047613
    }
  },
  "7100372": {
    "id": "7100372",
    "name": "O Barco de Valdeorras",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.98493,
      "latitude": 42.4182
    }
  },
  "7100373": {
    "id": "7100373",
    "name": "Bembibre",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.422504,
      "latitude": 42.60975
    }
  },
  "7100375": {
    "id": "7100375",
    "name": "Cabezón del Pisuerga",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.651531,
      "latitude": 41.737239
    }
  },
  "7100376": {
    "id": "7100376",
    "name": "Cantalapiedra",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.183665,
      "latitude": 41.133361
    }
  },
  "7100377": {
    "id": "7100377",
    "name": "Jaca",
    "isMeta": true,
    "country": "ES",
    "location": {
      "longitude": -0.538759,
      "latitude": 42.578261
    }
  },
  "7100380": {
    "id": "7100380",
    "name": "Redondela de Galicia",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -8.61945,
      "latitude": 42.286165
    }
  },
  "7100381": {
    "id": "7100381",
    "name": "Sahagún",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.022291,
      "latitude": 42.36954
    }
  },
  "7100382": {
    "id": "7100382",
    "name": "San Clodio-Quiroga",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -7.287231,
      "latitude": 42.465122
    }
  },
  "7100383": {
    "id": "7100383",
    "name": "San Roque – La Línea",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.432298,
      "latitude": 36.213718
    }
  },
  "7100384": {
    "id": "7100384",
    "name": "Villalba de Guadarrama",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.00811,
      "latitude": 40.626424
    }
  },
  "7100386": {
    "id": "7100386",
    "name": "Linares-Congostinas",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.772243,
      "latitude": 43.101244
    }
  },
  "7100387": {
    "id": "7100387",
    "name": "A Rúa-Petín",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -7.11329,
      "latitude": 42.392561
    }
  },
  "7100390": {
    "id": "7100390",
    "name": "A Gudiña",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -7.132482,
      "latitude": 42.060841
    }
  },
  "7100391": {
    "id": "7100391",
    "name": "Aguilar de Campoo",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.233388,
      "latitude": 42.785606
    }
  },
  "7100392": {
    "id": "7100392",
    "name": "Alar del Rey-San Quirce",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.31138,
      "latitude": 42.6568
    }
  },
  "7100393": {
    "id": "7100393",
    "name": "Alcalá de Henares",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.366226,
      "latitude": 40.489087
    }
  },
  "7100395": {
    "id": "7100395",
    "name": "Alfaro",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.747745,
      "latitude": 42.186295
    }
  },
  "7100397": {
    "id": "7100397",
    "name": "Alhama de Aragón",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.901838,
      "latitude": 41.294439
    }
  },
  "7100398": {
    "id": "7100398",
    "name": "Almadenejos-Almaden",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.730393,
      "latitude": 38.740433
    }
  },
  "7100399": {
    "id": "7100399",
    "name": "Almagro",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.708976,
      "latitude": 38.895434
    }
  },
  "7100400": {
    "id": "7100400",
    "name": "Almansa",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.105619,
      "latitude": 38.867675
    }
  },
  "7100402": {
    "id": "7100402",
    "name": "Andújar",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.065847,
      "latitude": 38.028173
    }
  },
  "7100403": {
    "id": "7100403",
    "name": "Archena-Fortuna",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.233517,
      "latitude": 38.127647
    }
  },
  "7100404": {
    "id": "7100404",
    "name": "Arcos de Jalón",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -2.277686,
      "latitude": 41.216026
    }
  },
  "7100405": {
    "id": "7100405",
    "name": "Asco",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 0.569277,
      "latitude": 41.183144
    }
  },
  "7100406": {
    "id": "7100406",
    "name": "Ateca",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.785608,
      "latitude": 41.324571
    }
  },
  "7100407": {
    "id": "7100407",
    "name": "Balsicas-Mar Menor",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.951427,
      "latitude": 37.818346
    }
  },
  "7100408": {
    "id": "7100408",
    "name": "Bárcena",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.053865,
      "latitude": 43.128751
    }
  },
  "7100409": {
    "id": "7100409",
    "name": "Beasaín",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -2.201952,
      "latitude": 43.046077
    }
  },
  "7100410": {
    "id": "7100410",
    "name": "Binefar",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 0.291277,
      "latitude": 41.849559
    }
  },
  "7100411": {
    "id": "7100411",
    "name": "Briviesca",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.319194,
      "latitude": 42.542555
    }
  },
  "7100412": {
    "id": "7100412",
    "name": "Cabra del Santo Cristo y Alicún",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.26258,
      "latitude": 37.6567
    }
  },
  "7100413": {
    "id": "7100413",
    "name": "Calahorra",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.957392,
      "latitude": 42.310634
    }
  },
  "7100414": {
    "id": "7100414",
    "name": "Calasparra",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.680065,
      "latitude": 38.269353
    }
  },
  "7100415": {
    "id": "7100415",
    "name": "Campanario",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.641495,
      "latitude": 38.853382
    }
  },
  "7100416": {
    "id": "7100416",
    "name": "Cañaveral",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.374979,
      "latitude": 39.788854
    }
  },
  "7100417": {
    "id": "7100417",
    "name": "Casatejada",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.67755,
      "latitude": 39.892059
    }
  },
  "7100418": {
    "id": "7100418",
    "name": "Caspe",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.04233,
      "latitude": 41.240054
    }
  },
  "7100419": {
    "id": "7100419",
    "name": "Castuera",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.540609,
      "latitude": 38.734635
    }
  },
  "7100420": {
    "id": "7100420",
    "name": "Cieza",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.42141,
      "latitude": 38.246503
    }
  },
  "7100421": {
    "id": "7100421",
    "name": "Curtis",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -8.143013,
      "latitude": 43.127304
    }
  },
  "7100422": {
    "id": "7100422",
    "name": "Daimiel",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.603379,
      "latitude": 39.061357
    }
  },
  "7100423": {
    "id": "7100423",
    "name": "Don Benito",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.862198,
      "latitude": 38.967411
    }
  },
  "7100425": {
    "id": "7100425",
    "name": "Fiñana",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -2.839827,
      "latitude": 37.184796
    }
  },
  "7100426": {
    "id": "7100426",
    "name": "Flix",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 0.540215,
      "latitude": 41.229438
    }
  },
  "7100427": {
    "id": "7100427",
    "name": "Frieira",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -8.201326,
      "latitude": 42.154842
    }
  },
  "7100428": {
    "id": "7100428",
    "name": "Fromista",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.402458,
      "latitude": 42.264753
    }
  },
  "7100429": {
    "id": "7100429",
    "name": "Gador",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -2.488178,
      "latitude": 36.951427
    }
  },
  "7100430": {
    "id": "7100430",
    "name": "Gergal",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -2.590888,
      "latitude": 37.108244
    }
  },
  "7100432": {
    "id": "7100432",
    "name": "Guareña",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.128719,
      "latitude": 38.896989
    }
  },
  "7100433": {
    "id": "7100433",
    "name": "Guitiriz",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -7.895108,
      "latitude": 43.179019
    }
  },
  "7100434": {
    "id": "7100434",
    "name": "Haro",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -2.849247,
      "latitude": 42.584086
    }
  },
  "7100435": {
    "id": "7100435",
    "name": "Hellín",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.688497,
      "latitude": 38.508871
    }
  },
  "7100436": {
    "id": "7100436",
    "name": "Herrera de Pisuerga",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.31655,
      "latitude": 42.5986
    }
  },
  "7100437": {
    "id": "7100437",
    "name": "Iznalloz",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.528364,
      "latitude": 37.395125
    }
  },
  "7100438": {
    "id": "7100438",
    "name": "Jodar-Ubeda",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.349272,
      "latitude": 37.913731
    }
  },
  "7100439": {
    "id": "7100439",
    "name": "La Puebla de Hijar",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.439257,
      "latitude": 41.225717
    }
  },
  "7100440": {
    "id": "7100440",
    "name": "La Roda de Albacete",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -2.162642,
      "latitude": 39.199512
    }
  },
  "7100441": {
    "id": "7100441",
    "name": "Lalin",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -8.142941,
      "latitude": 42.63243
    }
  },
  "7100443": {
    "id": "7100443",
    "name": "Leganés",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.771001,
      "latitude": 40.329303
    }
  },
  "7100444": {
    "id": "7100444",
    "name": "Los Corrales de Buelna",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.063789,
      "latitude": 43.25513
    }
  },
  "7100445": {
    "id": "7100445",
    "name": "Mataporquera",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.166805,
      "latitude": 42.870374
    }
  },
  "7100447": {
    "id": "7100447",
    "name": "Mieres-Puente",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.782428,
      "latitude": 43.250249
    }
  },
  "7100448": {
    "id": "7100448",
    "name": "Mirabel",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.228994,
      "latitude": 39.866305
    }
  },
  "7100449": {
    "id": "7100449",
    "name": "Montblanc",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 1.165379,
      "latitude": 41.376592
    }
  },
  "7100450": {
    "id": "7100450",
    "name": "Montijo",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.598738,
      "latitude": 38.913583
    }
  },
  "7100453": {
    "id": "7100453",
    "name": "Mora la Nova",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 0.65356,
      "latitude": 41.106484
    }
  },
  "7100454": {
    "id": "7100454",
    "name": "Novelda Aspe",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.777674,
      "latitude": 38.407329
    }
  },
  "7100455": {
    "id": "7100455",
    "name": "O Carballiño",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -8.068726,
      "latitude": 42.431584
    }
  },
  "7100456": {
    "id": "7100456",
    "name": "O Porriño",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -8.622138,
      "latitude": 42.164119
    }
  },
  "7100459": {
    "id": "7100459",
    "name": "Osorno",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.357287,
      "latitude": 42.413911
    }
  },
  "7100460": {
    "id": "7100460",
    "name": "Palma del Rio",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.292524,
      "latitude": 37.718476
    }
  },
  "7100462": {
    "id": "7100462",
    "name": "Pontedeume",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -8.180246,
      "latitude": 43.411722
    }
  },
  "7100463": {
    "id": "7100463",
    "name": "Puebla de Sanabria",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.62682,
      "latitude": 42.045623
    }
  },
  "7100464": {
    "id": "7100464",
    "name": "Renedo",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.94941,
      "latitude": 43.352996
    }
  },
  "7100465": {
    "id": "7100465",
    "name": "Ribadavia",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -8.139022,
      "latitude": 42.292997
    }
  },
  "7100467": {
    "id": "7100467",
    "name": "San Vicente de Alcántara",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -7.116418,
      "latitude": 39.381723
    }
  },
  "7100468": {
    "id": "7100468",
    "name": "Sant Celoni",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 2.490704,
      "latitude": 41.685155
    }
  },
  "7100469": {
    "id": "7100469",
    "name": "Santa Cruz de Múdela",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.451273,
      "latitude": 38.645111
    }
  },
  "7100470": {
    "id": "7100470",
    "name": "Sariñena",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.172395,
      "latitude": 41.817
    }
  },
  "7100471": {
    "id": "7100471",
    "name": "Sarria",
    "isMeta": true,
    "country": "ES",
    "location": {
      "longitude": -7.418725,
      "latitude": 42.784392
    }
  },
  "7100472": {
    "id": "7100472",
    "name": "Sigüenza",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -2.646433,
      "latitude": 41.071345
    }
  },
  "7100473": {
    "id": "7100473",
    "name": "Sils",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 2.745188,
      "latitude": 41.807669
    }
  },
  "7100474": {
    "id": "7100474",
    "name": "Socuellamos",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -2.774385,
      "latitude": 39.278923
    }
  },
  "7100475": {
    "id": "7100475",
    "name": "Sueca",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.307862,
      "latitude": 39.205634
    }
  },
  "7100476": {
    "id": "7100476",
    "name": "Tafalla",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.67113,
      "latitude": 42.525593
    }
  },
  "7100477": {
    "id": "7100477",
    "name": "Tavernes de la Valldigna",
    "isMeta": true,
    "country": "ES",
    "location": {
      "longitude": -0.225979,
      "latitude": 39.078832
    }
  },
  "7100478": {
    "id": "7100478",
    "name": "Tolosa",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -2.079204,
      "latitude": 43.135592
    }
  },
  "7100479": {
    "id": "7100479",
    "name": "Toro",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.386057,
      "latitude": 41.512257
    }
  },
  "7100480": {
    "id": "7100480",
    "name": "Torre-Pacheco",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.967329,
      "latitude": 37.746981
    }
  },
  "7100481": {
    "id": "7100481",
    "name": "Torrijos",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.283953,
      "latitude": 39.978958
    }
  },
  "7100482": {
    "id": "7100482",
    "name": "Tudela de Navarra",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.597553,
      "latitude": 42.05952
    }
  },
  "7100483": {
    "id": "7100483",
    "name": "Ulldecona-Alcanar-La Senia",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 0.449668,
      "latitude": 40.595775
    }
  },
  "7100485": {
    "id": "7100485",
    "name": "Valencia-Cabanyal",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.334686,
      "latitude": 39.469872
    }
  },
  "7100486": {
    "id": "7100486",
    "name": "Valls",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 1.258903,
      "latitude": 41.28963
    }
  },
  "7100488": {
    "id": "7100488",
    "name": "Villacañas",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.330224,
      "latitude": 39.622131
    }
  },
  "7100489": {
    "id": "7100489",
    "name": "Villanueva de la Serena",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.79642,
      "latitude": 38.9686
    }
  },
  "7100490": {
    "id": "7100490",
    "name": "Villarrobledo",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -2.598655,
      "latitude": 39.26072
    }
  },
  "7100491": {
    "id": "7100491",
    "name": "Villena",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.867557,
      "latitude": 38.632598
    }
  },
  "7100492": {
    "id": "7100492",
    "name": "Xátiva",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.524601,
      "latitude": 38.992383
    }
  },
  "7100493": {
    "id": "7100493",
    "name": "Oropesa de Toledo",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.172734,
      "latitude": 39.915853
    }
  },
  "7100494": {
    "id": "7100494",
    "name": "Osuna",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.114799,
      "latitude": 37.23367
    }
  },
  "7100500": {
    "id": "7100500",
    "name": "Madrid - Atocha Cercanías",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.690539,
      "latitude": 40.406287
    }
  },
  "7100501": {
    "id": "7100501",
    "name": "Alhama de Murcia",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.414452,
      "latitude": 37.84935
    }
  },
  "7100502": {
    "id": "7100502",
    "name": "Totana",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.495571,
      "latitude": 37.763099
    }
  },
  "7100503": {
    "id": "7100503",
    "name": "Caudete",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.959535,
      "latitude": 38.716351
    }
  },
  "7101003": {
    "id": "7101003",
    "name": "El Arahal",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.548744,
      "latitude": 37.268404
    }
  },
  "7101712": {
    "id": "7101712",
    "name": "Barrientos",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.965025,
      "latitude": 42.414846
    }
  },
  "7102002": {
    "id": "7102002",
    "name": "Puente Genil-Herrera",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.822092,
      "latitude": 37.358647
    }
  },
  "7102003": {
    "id": "7102003",
    "name": "Antequera Santa Ana",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.720037,
      "latitude": 37.070813
    }
  },
  "7102470": {
    "id": "7102470",
    "name": "El Espinar",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.189512,
      "latitude": 40.740821
    }
  },
  "7103208": {
    "id": "7103208",
    "name": "Cuenca Fernando Zobel",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -2.144412,
      "latitude": 40.034916
    }
  },
  "7103213": {
    "id": "7103213",
    "name": "Requena Utiel",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.134582,
      "latitude": 39.521901
    }
  },
  "7103216": {
    "id": "7103216",
    "name": "Valencia Joaquín Sorolla",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.381762,
      "latitude": 39.458015
    }
  },
  "7103309": {
    "id": "7103309",
    "name": "Villena AVE",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.867701,
      "latitude": 38.631762
    }
  },
  "7103787": {
    "id": "7103787",
    "name": "Quintana-Raneros",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.637944,
      "latitude": 42.549999
    }
  },
  "7104104": {
    "id": "7104104",
    "name": "Camp Tarragona",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 1.271587,
      "latitude": 41.192025
    }
  },
  "7104307": {
    "id": "7104307",
    "name": "Figueres—Vilafant",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 2.943023,
      "latitude": 42.26478
    }
  },
  "7105013": {
    "id": "7105013",
    "name": "Loja – San Francisco",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.149825,
      "latitude": 37.174944
    }
  },
  "7105110": {
    "id": "7105110",
    "name": "Santander-Feve",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.810984,
      "latitude": 43.458268
    }
  },
  "7105451": {
    "id": "7105451",
    "name": "Bilbao la Concordia",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -2.926591,
      "latitude": 43.260101
    }
  },
  "7105455": {
    "id": "7105455",
    "name": "Basurto Hospital",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -2.953745,
      "latitude": 43.259844
    }
  },
  "7105461": {
    "id": "7105461",
    "name": "Irauregui",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -2.99018,
      "latitude": 43.248424
    }
  },
  "7105463": {
    "id": "7105463",
    "name": "Zaramillo",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.015593,
      "latitude": 43.233349
    }
  },
  "7105467": {
    "id": "7105467",
    "name": "Sodupe",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.050813,
      "latitude": 43.201698
    }
  },
  "7105473": {
    "id": "7105473",
    "name": "Aranguren (Biscay)",
    "isMeta": true,
    "country": "ES",
    "location": {
      "longitude": -3.111031,
      "latitude": 43.21049
    }
  },
  "7105474": {
    "id": "7105474",
    "name": "Aranguren Apeadero",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.115876,
      "latitude": 43.210823
    }
  },
  "7105475": {
    "id": "7105475",
    "name": "Zalla",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.131563,
      "latitude": 43.213142
    }
  },
  "7105483": {
    "id": "7105483",
    "name": "Balmaseda",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.195818,
      "latitude": 43.191163
    }
  },
  "7105497": {
    "id": "7105497",
    "name": "Karranza",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.358037,
      "latitude": 43.239228
    }
  },
  "7105504": {
    "id": "7105504",
    "name": "Parque Principado",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.808766,
      "latitude": 43.386121
    }
  },
  "7105505": {
    "id": "7105505",
    "name": "Colloto",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.791561,
      "latitude": 43.379128
    }
  },
  "7105507": {
    "id": "7105507",
    "name": "Meres",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.748547,
      "latitude": 43.380961
    }
  },
  "7105508": {
    "id": "7105508",
    "name": "Fonciello",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.718928,
      "latitude": 43.381348
    }
  },
  "7105509": {
    "id": "7105509",
    "name": "El Berrón",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.702397,
      "latitude": 43.382211
    }
  },
  "7105511": {
    "id": "7105511",
    "name": "La Carrera de Siero",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.680445,
      "latitude": 43.387083
    }
  },
  "7105513": {
    "id": "7105513",
    "name": "Pola de Siero",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.664876,
      "latitude": 43.387865
    }
  },
  "7105515": {
    "id": "7105515",
    "name": "Los Corros",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.601672,
      "latitude": 43.376826
    }
  },
  "7105517": {
    "id": "7105517",
    "name": "Lieres",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.582714,
      "latitude": 43.380449
    }
  },
  "7105521": {
    "id": "7105521",
    "name": "El Remedio",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.546299,
      "latitude": 43.37501
    }
  },
  "7105522": {
    "id": "7105522",
    "name": "Llames",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.519718,
      "latitude": 43.368565
    }
  },
  "7105523": {
    "id": "7105523",
    "name": "Nava",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.508985,
      "latitude": 43.361086
    }
  },
  "7105529": {
    "id": "7105529",
    "name": "Carancos",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.434392,
      "latitude": 43.355387
    }
  },
  "7105533": {
    "id": "7105533",
    "name": "Infiesto",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.369095,
      "latitude": 43.351773
    }
  },
  "7105534": {
    "id": "7105534",
    "name": "Infiesto Apeadero",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.35722,
      "latitude": 43.343944
    }
  },
  "7105535": {
    "id": "7105535",
    "name": "Villamayor",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.302916,
      "latitude": 43.363271
    }
  },
  "7105537": {
    "id": "7105537",
    "name": "Sebares",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.257718,
      "latitude": 43.362336
    }
  },
  "7105539": {
    "id": "7105539",
    "name": "Soto de Dueñas",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.226858,
      "latitude": 43.358039
    }
  },
  "7105541": {
    "id": "7105541",
    "name": "Ozanes",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.18362,
      "latitude": 43.369617
    }
  },
  "7105542": {
    "id": "7105542",
    "name": "Policlínico",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.187054,
      "latitude": 43.381294
    }
  },
  "7105543": {
    "id": "7105543",
    "name": "Arriondas",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.18851,
      "latitude": 43.387523
    }
  },
  "7105545": {
    "id": "7105545",
    "name": "Fuentes (Asturias)",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.142818,
      "latitude": 43.401439
    }
  },
  "7105547": {
    "id": "7105547",
    "name": "Toraño",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.117702,
      "latitude": 43.41192
    }
  },
  "7105549": {
    "id": "7105549",
    "name": "Cuevas",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.073305,
      "latitude": 43.431184
    }
  },
  "7105551": {
    "id": "7105551",
    "name": "Llovio",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.055928,
      "latitude": 43.440488
    }
  },
  "7105553": {
    "id": "7105553",
    "name": "Ribadesella",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.054616,
      "latitude": 43.459239
    }
  },
  "7105555": {
    "id": "7105555",
    "name": "Camango",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.019064,
      "latitude": 43.448776
    }
  },
  "7105557": {
    "id": "7105557",
    "name": "Belmonte de Pria Feve",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.982272,
      "latitude": 43.439813
    }
  },
  "7105559": {
    "id": "7105559",
    "name": "Nueva",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.935365,
      "latitude": 43.440551
    }
  },
  "7105561": {
    "id": "7105561",
    "name": "Villahormes",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.903876,
      "latitude": 43.44189
    }
  },
  "7105563": {
    "id": "7105563",
    "name": "Posada",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.865384,
      "latitude": 43.425125
    }
  },
  "7105565": {
    "id": "7105565",
    "name": "Balmori",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.835621,
      "latitude": 43.421413
    }
  },
  "7105567": {
    "id": "7105567",
    "name": "Celorio",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.811305,
      "latitude": 43.424721
    }
  },
  "7105569": {
    "id": "7105569",
    "name": "Poó",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.780903,
      "latitude": 43.42419
    }
  },
  "7105571": {
    "id": "7105571",
    "name": "Llanes",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.758709,
      "latitude": 43.420622
    }
  },
  "7105573": {
    "id": "7105573",
    "name": "San Roque del Acebal",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.730042,
      "latitude": 43.394643
    }
  },
  "7105575": {
    "id": "7105575",
    "name": "Vidiago",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.67288,
      "latitude": 43.396989
    }
  },
  "7105577": {
    "id": "7105577",
    "name": "Pendueles",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.630244,
      "latitude": 43.39262
    }
  },
  "7105579": {
    "id": "7105579",
    "name": "Colombres",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.556973,
      "latitude": 43.382867
    }
  },
  "7105621": {
    "id": "7105621",
    "name": "Torrelavega Centro Feve",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.050988,
      "latitude": 43.350803
    }
  },
  "7105623": {
    "id": "7105623",
    "name": "Puente San Miguel",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.088159,
      "latitude": 43.358605
    }
  },
  "7105627": {
    "id": "7105627",
    "name": "San Pedro de Rudagüera",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.148315,
      "latitude": 43.362453
    }
  },
  "7105637": {
    "id": "7105637",
    "name": "Cabezón de la Sal",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.231878,
      "latitude": 43.307753
    }
  },
  "7105641": {
    "id": "7105641",
    "name": "Treceño",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.309141,
      "latitude": 43.318307
    }
  },
  "7105643": {
    "id": "7105643",
    "name": "Roiz",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.349268,
      "latitude": 43.328213
    }
  },
  "7105644": {
    "id": "7105644",
    "name": "El Barcenal",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.383409,
      "latitude": 43.340456
    }
  },
  "7105645": {
    "id": "7105645",
    "name": "San Vicente de la Barquera",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.40421,
      "latitude": 43.367666
    }
  },
  "7105647": {
    "id": "7105647",
    "name": "Pesúes",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.480628,
      "latitude": 43.370138
    }
  },
  "7105649": {
    "id": "7105649",
    "name": "Unquera",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.513924,
      "latitude": 43.374885
    }
  },
  "7105657": {
    "id": "7105657",
    "name": "Astillero",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.822375,
      "latitude": 43.404513
    }
  },
  "7105679": {
    "id": "7105679",
    "name": "Gama",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.525218,
      "latitude": 43.423067
    }
  },
  "7105683": {
    "id": "7105683",
    "name": "Treto",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.472784,
      "latitude": 43.394095
    }
  },
  "7105721": {
    "id": "7105721",
    "name": "Arla-Berrón",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.228278,
      "latitude": 43.166101
    }
  },
  "7105724": {
    "id": "7105724",
    "name": "Mercadillo-Villasana",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.264469,
      "latitude": 43.105209
    }
  },
  "7105727": {
    "id": "7105727",
    "name": "Cadagua",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.347375,
      "latitude": 43.068107
    }
  },
  "7105730": {
    "id": "7105730",
    "name": "Bercedo Montija",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.450868,
      "latitude": 43.087724
    }
  },
  "7105731": {
    "id": "7105731",
    "name": "Quintana de los Prados",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.512058,
      "latitude": 43.079841
    }
  },
  "7105732": {
    "id": "7105732",
    "name": "Espinosa de los Monteros",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.54228,
      "latitude": 43.073018
    }
  },
  "7105733": {
    "id": "7105733",
    "name": "Redondo",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.606696,
      "latitude": 43.063121
    }
  },
  "7105734": {
    "id": "7105734",
    "name": "Sotoscueva",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.688408,
      "latitude": 43.045187
    }
  },
  "7105735": {
    "id": "7105735",
    "name": "Pedrosa",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.641898,
      "latitude": 43.056595
    }
  },
  "7105736": {
    "id": "7105736",
    "name": "Dosante Cidad",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.757203,
      "latitude": 43.012134
    }
  },
  "7105737": {
    "id": "7105737",
    "name": "Robredo Ahedo",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.770651,
      "latitude": 42.992663
    }
  },
  "7105738": {
    "id": "7105738",
    "name": "Soncillo",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.786319,
      "latitude": 42.969948
    }
  },
  "7105739": {
    "id": "7105739",
    "name": "Cabañas de Virtus",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.858367,
      "latitude": 42.994884
    }
  },
  "7105740": {
    "id": "7105740",
    "name": "Arija",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.947657,
      "latitude": 42.991018
    }
  },
  "7105741": {
    "id": "7105741",
    "name": "Llano",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.967631,
      "latitude": 42.98006
    }
  },
  "7105742": {
    "id": "7105742",
    "name": "Las Rozas de Valdearroyo Feve",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.029779,
      "latitude": 42.973546
    }
  },
  "7105743": {
    "id": "7105743",
    "name": "Montes Claros",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.037433,
      "latitude": 42.941721
    }
  },
  "7105744": {
    "id": "7105744",
    "name": "Los Carabeos",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.087233,
      "latitude": 42.914304
    }
  },
  "7105747": {
    "id": "7105747",
    "name": "Cillamayor",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.277651,
      "latitude": 42.857843
    }
  },
  "7105748": {
    "id": "7105748",
    "name": "Salinas de Pisuerga",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.375265,
      "latitude": 42.855955
    }
  },
  "7105749": {
    "id": "7105749",
    "name": "Vado Cervera",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.491379,
      "latitude": 42.832431
    }
  },
  "7105750": {
    "id": "7105750",
    "name": "Castrejón de la Peña",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.598458,
      "latitude": 42.810596
    }
  },
  "7105751": {
    "id": "7105751",
    "name": "Villaverde Tarilonte",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.65981,
      "latitude": 42.814731
    }
  },
  "7105752": {
    "id": "7105752",
    "name": "Santibáñez de la Peña",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.713475,
      "latitude": 42.818318
    }
  },
  "7105753": {
    "id": "7105753",
    "name": "Guardo Apeadero",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.852179,
      "latitude": 42.78948
    }
  },
  "7105754": {
    "id": "7105754",
    "name": "Guardo",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.854112,
      "latitude": 42.79304
    }
  },
  "7105755": {
    "id": "7105755",
    "name": "La Llama de la Guzpeña",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.04124,
      "latitude": 42.771322
    }
  },
  "7105756": {
    "id": "7105756",
    "name": "La Espina",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.905242,
      "latitude": 42.787907
    }
  },
  "7105757": {
    "id": "7105757",
    "name": "Valcuende",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.928344,
      "latitude": 42.76645
    }
  },
  "7105758": {
    "id": "7105758",
    "name": "Puente Almuhey",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.974666,
      "latitude": 42.787134
    }
  },
  "7105759": {
    "id": "7105759",
    "name": "Prado de la Guzpeña",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.027172,
      "latitude": 42.783242
    }
  },
  "7105760": {
    "id": "7105760",
    "name": "Valle de Las Casas",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.054571,
      "latitude": 42.769506
    }
  },
  "7105761": {
    "id": "7105761",
    "name": "Cistierna",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.130835,
      "latitude": 42.803117
    }
  },
  "7105763": {
    "id": "7105763",
    "name": "La Ercina",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.218076,
      "latitude": 42.807746
    }
  },
  "7105766": {
    "id": "7105766",
    "name": "Boñar",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.328284,
      "latitude": 42.862562
    }
  },
  "7105767": {
    "id": "7105767",
    "name": "La Vecilla",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.412737,
      "latitude": 42.854041
    }
  },
  "7105768": {
    "id": "7105768",
    "name": "Santa María de la Alameda-Peguerinos",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.269633,
      "latitude": 40.568821
    }
  },
  "7105770": {
    "id": "7105770",
    "name": "Matallana",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.522172,
      "latitude": 42.865331
    }
  },
  "7105776": {
    "id": "7105776",
    "name": "San Feliz",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.538308,
      "latitude": 42.683443
    }
  },
  "7105790": {
    "id": "7105790",
    "name": "Sorriba",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.128301,
      "latitude": 42.789921
    }
  },
  "7105799": {
    "id": "7105799",
    "name": "Cerezal de la Guzpeña",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.006119,
      "latitude": 42.779934
    }
  },
  "7105803": {
    "id": "7105803",
    "name": "La Asunción/Universidad",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.552349,
      "latitude": 42.655568
    }
  },
  "7106001": {
    "id": "7106001",
    "name": "Librilla",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.346898,
      "latitude": 37.886323
    }
  },
  "7106004": {
    "id": "7106004",
    "name": "La Hoya",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.595432,
      "latitude": 37.703635
    }
  },
  "7106005": {
    "id": "7106005",
    "name": "Lorca-San Diego",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.684875,
      "latitude": 37.680704
    }
  },
  "7106008": {
    "id": "7106008",
    "name": "Alcantarilla los Romanos",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.216977,
      "latitude": 37.964053
    }
  },
  "7106091": {
    "id": "7106091",
    "name": "San Miguel de las Dueñas",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.524092,
      "latitude": 42.586719
    }
  },
  "7107004": {
    "id": "7107004",
    "name": "Águilas",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.57286,
      "latitude": 37.410011
    }
  },
  "7108004": {
    "id": "7108004",
    "name": "Segovia Guiomar",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.09571,
      "latitude": 40.910609
    }
  },
  "7108223": {
    "id": "7108223",
    "name": "Vigo Urzáiz",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -8.71151,
      "latitude": 42.2344
    }
  },
  "7108224": {
    "id": "7108224",
    "name": "Redondela AV",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -8.603833,
      "latitude": 42.284417
    }
  },
  "7108240": {
    "id": "7108240",
    "name": "Medina Alta Velocidad",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.927368,
      "latitude": 41.291677
    }
  },
  "7110001": {
    "id": "7110001",
    "name": "Aravaca",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.785627,
      "latitude": 40.448581
    }
  },
  "7110002": {
    "id": "7110002",
    "name": "Pozuelo",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.800045,
      "latitude": 40.447224
    }
  },
  "7110005": {
    "id": "7110005",
    "name": "Las Rozas",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.867824,
      "latitude": 40.494309
    }
  },
  "7110302": {
    "id": "7110302",
    "name": "Guimorcondo",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.615124,
      "latitude": 40.648915
    }
  },
  "7110501": {
    "id": "7110501",
    "name": "Pozaldez",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.835549,
      "latitude": 41.367459
    }
  },
  "7110502": {
    "id": "7110502",
    "name": "Matapozuelos",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.80112,
      "latitude": 41.423174
    }
  },
  "7110503": {
    "id": "7110503",
    "name": "Valdestillas",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.772633,
      "latitude": 41.489083
    }
  },
  "7110504": {
    "id": "7110504",
    "name": "Viana",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.754754,
      "latitude": 41.524842
    }
  },
  "7110603": {
    "id": "7110603",
    "name": "Corcos-Aguilarejo",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.623637,
      "latitude": 41.76613
    }
  },
  "7110604": {
    "id": "7110604",
    "name": "Cubillas de Santa Marta",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.579617,
      "latitude": 41.809144
    }
  },
  "7110605": {
    "id": "7110605",
    "name": "Dueñas",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.540478,
      "latitude": 41.871133
    }
  },
  "7110610": {
    "id": "7110610",
    "name": "Valladolid-Universidad",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.704423,
      "latitude": 41.66003
    }
  },
  "7111004": {
    "id": "7111004",
    "name": "Magaz",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.43232,
      "latitude": 41.976541
    }
  },
  "7111006": {
    "id": "7111006",
    "name": "Quintana del Puente",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.19869,
      "latitude": 42.079719
    }
  },
  "7111009": {
    "id": "7111009",
    "name": "Villaquiran",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.999121,
      "latitude": 42.21578
    }
  },
  "7111203": {
    "id": "7111203",
    "name": "Manzanos",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -2.871792,
      "latitude": 42.750188
    }
  },
  "7111204": {
    "id": "7111204",
    "name": "La Puebla de Arganzon",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -2.841966,
      "latitude": 42.775888
    }
  },
  "7111205": {
    "id": "7111205",
    "name": "Nanclares-Langraiz",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -2.8044,
      "latitude": 42.816133
    }
  },
  "7111210": {
    "id": "7111210",
    "name": "Alegria de Alava-Dulantzi",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -2.514291,
      "latitude": 42.849025
    }
  },
  "7111212": {
    "id": "7111212",
    "name": "Salvatierra de Álava",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -2.388748,
      "latitude": 42.846319
    }
  },
  "7111213": {
    "id": "7111213",
    "name": "Araia",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -2.30656,
      "latitude": 42.869394
    }
  },
  "7111306": {
    "id": "7111306",
    "name": "Legazpi",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -2.330795,
      "latitude": 43.05085
    }
  },
  "7111405": {
    "id": "7111405",
    "name": "Ordizia",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -2.179371,
      "latitude": 43.052756
    }
  },
  "7111512": {
    "id": "7111512",
    "name": "Gros",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.973914,
      "latitude": 43.321821
    }
  },
  "7111515": {
    "id": "7111515",
    "name": "Pasaia",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.917111,
      "latitude": 43.318927
    }
  },
  "7112011": {
    "id": "7112011",
    "name": "Los Ángeles de San Rafael",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.207302,
      "latitude": 40.778584
    }
  },
  "7113206": {
    "id": "7113206",
    "name": "Ametzola",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -2.943409,
      "latitude": 43.254726
    }
  },
  "7113557": {
    "id": "7113557",
    "name": "Zarzalejo",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.15796,
      "latitude": 40.53859
    }
  },
  "7114101": {
    "id": "7114101",
    "name": "Monzón de Campos",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.502139,
      "latitude": 42.105428
    }
  },
  "7114102": {
    "id": "7114102",
    "name": "Amusco",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.480592,
      "latitude": 42.178106
    }
  },
  "7114103": {
    "id": "7114103",
    "name": "Piña",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.434747,
      "latitude": 42.21151
    }
  },
  "7114108": {
    "id": "7114108",
    "name": "Espinosa de Villagonzalo",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.368254,
      "latitude": 42.453616
    }
  },
  "7114113": {
    "id": "7114113",
    "name": "Mave",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.275665,
      "latitude": 42.723266
    }
  },
  "7114115": {
    "id": "7114115",
    "name": "Quintanilla de Las Torres",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.202717,
      "latitude": 42.819207
    }
  },
  "7114116": {
    "id": "7114116",
    "name": "El Carrión Apeadero",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.496238,
      "latitude": 42.116302
    }
  },
  "7114204": {
    "id": "7114204",
    "name": "Pesquera",
    "isMeta": true,
    "country": "ES",
    "location": {
      "longitude": -4.074136,
      "latitude": 43.081872
    }
  },
  "7114207": {
    "id": "7114207",
    "name": "Molledo-Portolin",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.039006,
      "latitude": 43.14557
    }
  },
  "7114208": {
    "id": "7114208",
    "name": "Santa Cruz de Iguña",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.045055,
      "latitude": 43.169274
    }
  },
  "7114211": {
    "id": "7114211",
    "name": "Las Caldas de Besaya",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.072625,
      "latitude": 43.298117
    }
  },
  "7114212": {
    "id": "7114212",
    "name": "Viernoles",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.053658,
      "latitude": 43.324545
    }
  },
  "7114214": {
    "id": "7114214",
    "name": "Sierrapando",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.026394,
      "latitude": 43.341795
    }
  },
  "7114215": {
    "id": "7114215",
    "name": "Zurita",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.991021,
      "latitude": 43.347629
    }
  },
  "7114217": {
    "id": "7114217",
    "name": "Parbayón",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.892311,
      "latitude": 43.37715
    }
  },
  "7114220": {
    "id": "7114220",
    "name": "Maliaño",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.841854,
      "latitude": 43.416136
    }
  },
  "7114230": {
    "id": "7114230",
    "name": "Valdecilla",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.827669,
      "latitude": 43.454035
    }
  },
  "7114231": {
    "id": "7114231",
    "name": "Nueva Montaña",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.849621,
      "latitude": 43.440038
    }
  },
  "7114232": {
    "id": "7114232",
    "name": "Lombera",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.067627,
      "latitude": 43.26598
    }
  },
  "7114233": {
    "id": "7114233",
    "name": "Rio Ebro",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.134318,
      "latitude": 43.000691
    }
  },
  "7114234": {
    "id": "7114234",
    "name": "Pujayo",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.08272,
      "latitude": 43.122836
    }
  },
  "7114235": {
    "id": "7114235",
    "name": "Arenas de Iguña",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.050341,
      "latitude": 43.185518
    }
  },
  "7114236": {
    "id": "7114236",
    "name": "Vioño",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.964908,
      "latitude": 43.360664
    }
  },
  "7114237": {
    "id": "7114237",
    "name": "Muriedas-Bahía",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.844299,
      "latitude": 43.422186
    }
  },
  "7115001": {
    "id": "7115001",
    "name": "Grijota",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.585001,
      "latitude": 42.050018
    }
  },
  "7115003": {
    "id": "7115003",
    "name": "Becerril",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.647171,
      "latitude": 42.1047
    }
  },
  "7115006": {
    "id": "7115006",
    "name": "Cisneros",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.850345,
      "latitude": 42.191365
    }
  },
  "7115008": {
    "id": "7115008",
    "name": "Grajal",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.013337,
      "latitude": 42.323425
    }
  },
  "7115012": {
    "id": "7115012",
    "name": "El Burgo Ranero",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.208314,
      "latitude": 42.425831
    }
  },
  "7115014": {
    "id": "7115014",
    "name": "Santas Martas",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.38666,
      "latitude": 42.459801
    }
  },
  "7115015": {
    "id": "7115015",
    "name": "Palanquinos",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.496948,
      "latitude": 42.460745
    }
  },
  "7115073": {
    "id": "7115073",
    "name": "El Pimpollar",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.283153,
      "latitude": 40.567769
    }
  },
  "7115106": {
    "id": "7115106",
    "name": "La Robla",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.626564,
      "latitude": 42.804411
    }
  },
  "7115108": {
    "id": "7115108",
    "name": "La Pola de Gordon",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.67471,
      "latitude": 42.853879
    }
  },
  "7115109": {
    "id": "7115109",
    "name": "Santa Lucia",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.639571,
      "latitude": 42.87503
    }
  },
  "7115112": {
    "id": "7115112",
    "name": "Villamanin",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.658215,
      "latitude": 42.937595
    }
  },
  "7115113": {
    "id": "7115113",
    "name": "Busdongo",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.705444,
      "latitude": 42.984294
    }
  },
  "7115118": {
    "id": "7115118",
    "name": "Puente de los Fierros",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.769501,
      "latitude": 43.071661
    }
  },
  "7115119": {
    "id": "7115119",
    "name": "La Frecha",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.798401,
      "latitude": 43.096039
    }
  },
  "7115120": {
    "id": "7115120",
    "name": "Campomanes",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.816236,
      "latitude": 43.110143
    }
  },
  "7115121": {
    "id": "7115121",
    "name": "La Cobertoria",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.81584,
      "latitude": 43.130234
    }
  },
  "7115123": {
    "id": "7115123",
    "name": "Villallana",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.814537,
      "latitude": 43.184008
    }
  },
  "7115200": {
    "id": "7115200",
    "name": "Ujo",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.79237,
      "latitude": 43.206085
    }
  },
  "7115202": {
    "id": "7115202",
    "name": "Santullano",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.785565,
      "latitude": 43.221331
    }
  },
  "7115205": {
    "id": "7115205",
    "name": "Ablaña",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.806411,
      "latitude": 43.267616
    }
  },
  "7115206": {
    "id": "7115206",
    "name": "La Pereda-Riosa",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.8122,
      "latitude": 43.277019
    }
  },
  "7115207": {
    "id": "7115207",
    "name": "Olloniego",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.818789,
      "latitude": 43.29622
    }
  },
  "7115208": {
    "id": "7115208",
    "name": "Soto de Rey",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.855932,
      "latitude": 43.306441
    }
  },
  "7115209": {
    "id": "7115209",
    "name": "Las Segadas",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.869173,
      "latitude": 43.313605
    }
  },
  "7115210": {
    "id": "7115210",
    "name": "El Caleyo",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.873291,
      "latitude": 43.328887
    }
  },
  "7115212": {
    "id": "7115212",
    "name": "Lugones",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.812047,
      "latitude": 43.404333
    }
  },
  "7115217": {
    "id": "7115217",
    "name": "La Corredoria",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.827365,
      "latitude": 43.388126
    }
  },
  "7115218": {
    "id": "7115218",
    "name": "Oviedo-Llamaquique",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.857389,
      "latitude": 43.358848
    }
  },
  "7115300": {
    "id": "7115300",
    "name": "Lugo de Llanera",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.81576,
      "latitude": 43.442385
    }
  },
  "7115301": {
    "id": "7115301",
    "name": "Villabona de Asturias",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.826025,
      "latitude": 43.461334
    }
  },
  "7115302": {
    "id": "7115302",
    "name": "Serin",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.782733,
      "latitude": 43.504815
    }
  },
  "7115303": {
    "id": "7115303",
    "name": "Monteana",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.746309,
      "latitude": 43.520798
    }
  },
  "7115305": {
    "id": "7115305",
    "name": "Villabona Tabladiello",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.799067,
      "latitude": 43.474557
    }
  },
  "7115400": {
    "id": "7115400",
    "name": "Veriña",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.723144,
      "latitude": 43.541706
    }
  },
  "7115401": {
    "id": "7115401",
    "name": "Calzada de Asturias",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.697731,
      "latitude": 43.535288
    }
  },
  "7116301": {
    "id": "7116301",
    "name": "Ferroñes",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.861416,
      "latitude": 43.476031
    }
  },
  "7116302": {
    "id": "7116302",
    "name": "Cancienes",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.869452,
      "latitude": 43.507251
    }
  },
  "7116400": {
    "id": "7116400",
    "name": "Nubledo",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.869488,
      "latitude": 43.523036
    }
  },
  "7116401": {
    "id": "7116401",
    "name": "Villalegre",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.9022,
      "latitude": 43.540115
    }
  },
  "7116402": {
    "id": "7116402",
    "name": "La Rocica",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.904762,
      "latitude": 43.547163
    }
  },
  "7116405": {
    "id": "7116405",
    "name": "San Juan de Nieva",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.931523,
      "latitude": 43.587929
    }
  },
  "7117189": {
    "id": "7117189",
    "name": "Salamanca-La Alamedilla",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.656399,
      "latitude": 40.966701
    }
  },
  "7117921": {
    "id": "7117921",
    "name": "Otero-Herreros",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.203355,
      "latitude": 40.80085
    }
  },
  "7118003": {
    "id": "7118003",
    "name": "Méndez Álvaro",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.678511,
      "latitude": 40.39559
    }
  },
  "7118004": {
    "id": "7118004",
    "name": "Madrid Delicias",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.692454,
      "latitude": 40.400273
    }
  },
  "7118005": {
    "id": "7118005",
    "name": "Pirámides",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.711529,
      "latitude": 40.402574
    }
  },
  "7119055": {
    "id": "7119055",
    "name": "Collado Mediano",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.035931,
      "latitude": 40.69253
    }
  },
  "7119716": {
    "id": "7119716",
    "name": "San Rafael",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.181871,
      "latitude": 40.715066
    }
  },
  "7119933": {
    "id": "7119933",
    "name": "Ortigosa del Monte",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.168172,
      "latitude": 40.832726
    }
  },
  "7120203": {
    "id": "7120203",
    "name": "Villadepalos",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.750773,
      "latitude": 42.536883
    }
  },
  "7120204": {
    "id": "7120204",
    "name": "Toral de los Vados",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.776653,
      "latitude": 42.541
    }
  },
  "7120207": {
    "id": "7120207",
    "name": "Covas",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.831064,
      "latitude": 42.475658
    }
  },
  "7120208": {
    "id": "7120208",
    "name": "Quereño",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.829446,
      "latitude": 42.420473
    }
  },
  "7120210": {
    "id": "7120210",
    "name": "Sobrádelo",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.911239,
      "latitude": 42.414819
    }
  },
  "7120212": {
    "id": "7120212",
    "name": "Vilamartin de Valdeorras",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -7.060703,
      "latitude": 42.411762
    }
  },
  "7120214": {
    "id": "7120214",
    "name": "Montefurado",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -7.193123,
      "latitude": 42.393784
    }
  },
  "7120218": {
    "id": "7120218",
    "name": "A Pobra do Brollón",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -7.399964,
      "latitude": 42.533714
    }
  },
  "7120306": {
    "id": "7120306",
    "name": "Pedrelo-Celtigos",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -7.393645,
      "latitude": 42.83315
    }
  },
  "7120310": {
    "id": "7120310",
    "name": "Rabade",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -7.624821,
      "latitude": 43.121299
    }
  },
  "7120312": {
    "id": "7120312",
    "name": "Baamonde",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -7.756324,
      "latitude": 43.173337
    }
  },
  "7120313": {
    "id": "7120313",
    "name": "Parga",
    "isMeta": true,
    "country": "ES",
    "location": {
      "longitude": -7.837029,
      "latitude": 43.163764
    }
  },
  "7120316": {
    "id": "7120316",
    "name": "Teixeiro",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -8.037614,
      "latitude": 43.141525
    }
  },
  "7120318": {
    "id": "7120318",
    "name": "Piñoi",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -8.163454,
      "latitude": 43.127079
    }
  },
  "7120319": {
    "id": "7120319",
    "name": "Cesuras",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -8.20084,
      "latitude": 43.17332
    }
  },
  "7120320": {
    "id": "7120320",
    "name": "Oza de los Ríos",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -8.18706,
      "latitude": 43.218149
    }
  },
  "7120324": {
    "id": "7120324",
    "name": "Brañuelas",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.200902,
      "latitude": 42.632762
    }
  },
  "7120402": {
    "id": "7120402",
    "name": "Paredes de Nava",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.697843,
      "latitude": 42.150617
    }
  },
  "7120403": {
    "id": "7120403",
    "name": "Cambre",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -8.352399,
      "latitude": 43.290692
    }
  },
  "7120404": {
    "id": "7120404",
    "name": "O Burgo Santiago",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -8.368148,
      "latitude": 43.317767
    }
  },
  "7120410": {
    "id": "7120410",
    "name": "Elviña-Universidade",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -8.41295,
      "latitude": 43.335251
    }
  },
  "7120914": {
    "id": "7120914",
    "name": "Cecebre",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -8.307848,
      "latitude": 43.287869
    }
  },
  "7121002": {
    "id": "7121002",
    "name": "Miño",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -8.207448,
      "latitude": 43.349625
    }
  },
  "7121003": {
    "id": "7121003",
    "name": "Perbes",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -8.201389,
      "latitude": 43.378058
    }
  },
  "7121005": {
    "id": "7121005",
    "name": "Cabanas-Areal",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -8.168821,
      "latitude": 43.415822
    }
  },
  "7121007": {
    "id": "7121007",
    "name": "Barallobre",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -8.188435,
      "latitude": 43.462673
    }
  },
  "7121008": {
    "id": "7121008",
    "name": "Perlio",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -8.175203,
      "latitude": 43.472346
    }
  },
  "7121009": {
    "id": "7121009",
    "name": "Neda",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -8.161018,
      "latitude": 43.495313
    }
  },
  "7122001": {
    "id": "7122001",
    "name": "Canabal",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -7.587695,
      "latitude": 42.482759
    }
  },
  "7122002": {
    "id": "7122002",
    "name": "Areas",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -7.629261,
      "latitude": 42.458093
    }
  },
  "7122003": {
    "id": "7122003",
    "name": "San Estevo do Sil",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -7.662791,
      "latitude": 42.427044
    }
  },
  "7122004": {
    "id": "7122004",
    "name": "San Pedro do Sil",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -7.703926,
      "latitude": 42.441247
    }
  },
  "7122005": {
    "id": "7122005",
    "name": "Os Peares",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -7.734543,
      "latitude": 42.452079
    }
  },
  "7122006": {
    "id": "7122006",
    "name": "Barra de Miño",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -7.80251,
      "latitude": 42.400787
    }
  },
  "7122101": {
    "id": "7122101",
    "name": "Barbantes",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -8.011429,
      "latitude": 42.338491
    }
  },
  "7122103": {
    "id": "7122103",
    "name": "Filgueira",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -8.185406,
      "latitude": 42.219663
    }
  },
  "7122105": {
    "id": "7122105",
    "name": "Pousa-Crecente",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -8.235629,
      "latitude": 42.137232
    }
  },
  "7122107": {
    "id": "7122107",
    "name": "Sela",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -8.356228,
      "latitude": 42.092169
    }
  },
  "7122108": {
    "id": "7122108",
    "name": "As Neves",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -8.420145,
      "latitude": 42.075415
    }
  },
  "7122110": {
    "id": "7122110",
    "name": "Caldelas",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -8.566396,
      "latitude": 42.055637
    }
  },
  "7122308": {
    "id": "7122308",
    "name": "Vigo Guixar",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -8.71208,
      "latitude": 42.23935
    }
  },
  "7123000": {
    "id": "7123000",
    "name": "Redondela-Picota",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -8.606793,
      "latitude": 42.287064
    }
  },
  "7123001": {
    "id": "7123001",
    "name": "Cesantes",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -8.616367,
      "latitude": 42.310283
    }
  },
  "7123002": {
    "id": "7123002",
    "name": "Arcade",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -8.610623,
      "latitude": 42.34046
    }
  },
  "7123005": {
    "id": "7123005",
    "name": "Portela",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -8.654184,
      "latitude": 42.517853
    }
  },
  "7123009": {
    "id": "7123009",
    "name": "Catoira",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -8.725433,
      "latitude": 42.67218
    }
  },
  "7123010": {
    "id": "7123010",
    "name": "Pontecesures",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -8.651964,
      "latitude": 42.722789
    }
  },
  "7123011": {
    "id": "7123011",
    "name": "Padrón",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -8.652396,
      "latitude": 42.739096
    }
  },
  "7123013": {
    "id": "7123013",
    "name": "Osebe",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -8.615774,
      "latitude": 42.825329
    }
  },
  "7123018": {
    "id": "7123018",
    "name": "Pontevedra-Universidad",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -8.630075,
      "latitude": 42.438532
    }
  },
  "7123021": {
    "id": "7123021",
    "name": "Padron-Barbanza",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -8.656009,
      "latitude": 42.782593
    }
  },
  "7124900": {
    "id": "7124900",
    "name": "Madrid-Nuevos Ministerios",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.692418,
      "latitude": 40.446613
    }
  },
  "7125593": {
    "id": "7125593",
    "name": "Guadalajara - Yebes",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.125971,
      "latitude": 40.586494
    }
  },
  "7127081": {
    "id": "7127081",
    "name": "Pitis",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.72664,
      "latitude": 40.4951
    }
  },
  "7128452": {
    "id": "7128452",
    "name": "Vega Magaz",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.068347,
      "latitude": 42.553585
    }
  },
  "7129044": {
    "id": "7129044",
    "name": "Castillejo-Añover",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.737768,
      "latitude": 39.950057
    }
  },
  "7129566": {
    "id": "7129566",
    "name": "Las Zorreras-Navalquejigo",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.045972,
      "latitude": 40.609425
    }
  },
  "7131002": {
    "id": "7131002",
    "name": "Nava del Rey",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.076505,
      "latitude": 41.334684
    }
  },
  "7131104": {
    "id": "7131104",
    "name": "Carbajales de Alba",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.97148,
      "latitude": 41.681137
    }
  },
  "7131106": {
    "id": "7131106",
    "name": "Ferreruela de Tabara",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.074092,
      "latitude": 41.764036
    }
  },
  "7131107": {
    "id": "7131107",
    "name": "Abejera",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.142913,
      "latitude": 41.809845
    }
  },
  "7131108": {
    "id": "7131108",
    "name": "Sarracín de Aliste",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.204318,
      "latitude": 41.848328
    }
  },
  "7131109": {
    "id": "7131109",
    "name": "Cabañas de Aliste",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.246927,
      "latitude": 41.854566
    }
  },
  "7131112": {
    "id": "7131112",
    "name": "Linarejos-Pedroso",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.484899,
      "latitude": 41.946867
    }
  },
  "7131215": {
    "id": "7131215",
    "name": "Ourense-San Francisco",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -7.860662,
      "latitude": 42.332603
    }
  },
  "7131303": {
    "id": "7131303",
    "name": "A Friela-Maside",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -8.028661,
      "latitude": 42.411637
    }
  },
  "7131306": {
    "id": "7131306",
    "name": "O Irixo",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -8.104917,
      "latitude": 42.519273
    }
  },
  "7131309": {
    "id": "7131309",
    "name": "Ponte Taboada",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -8.207241,
      "latitude": 42.68427
    }
  },
  "7131311": {
    "id": "7131311",
    "name": "Bandeira",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -8.304576,
      "latitude": 42.746485
    }
  },
  "7131312": {
    "id": "7131312",
    "name": "Vedra-Ribadulla",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -8.428178,
      "latitude": 42.776437
    }
  },
  "7131411": {
    "id": "7131411",
    "name": "Uxes",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -8.443765,
      "latitude": 43.297029
    }
  },
  "7131415": {
    "id": "7131415",
    "name": "Ordes",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -8.44808,
      "latitude": 43.037816
    }
  },
  "7131416": {
    "id": "7131416",
    "name": "Cerceda-Meirama",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -8.446615,
      "latitude": 43.206436
    }
  },
  "7131822": {
    "id": "7131822",
    "name": "La Granja de San Vicente",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.282201,
      "latitude": 42.614919
    }
  },
  "7132001": {
    "id": "7132001",
    "name": "Campillo",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.017805,
      "latitude": 41.259822
    }
  },
  "7132002": {
    "id": "7132002",
    "name": "El Carpio (Valladolid)",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.115086,
      "latitude": 41.215244
    }
  },
  "7132003": {
    "id": "7132003",
    "name": "Fresno el Viejo",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.137766,
      "latitude": 41.191827
    }
  },
  "7132006": {
    "id": "7132006",
    "name": "El Pedroso de la Armuña",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.406454,
      "latitude": 41.079966
    }
  },
  "7132007": {
    "id": "7132007",
    "name": "Pitiegua",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.474358,
      "latitude": 41.063785
    }
  },
  "7132008": {
    "id": "7132008",
    "name": "Gomecello",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.541355,
      "latitude": 41.04222
    }
  },
  "7132009": {
    "id": "7132009",
    "name": "Moriscos",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.583748,
      "latitude": 41.01243
    }
  },
  "7132797": {
    "id": "7132797",
    "name": "Madrid-Recoletos",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.690907,
      "latitude": 40.423286
    }
  },
  "7134002": {
    "id": "7134002",
    "name": "Cardeñosa de Ávila",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.751158,
      "latitude": 40.73976
    }
  },
  "7134005": {
    "id": "7134005",
    "name": "San Pedro del Arroyo",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.871155,
      "latitude": 40.80397
    }
  },
  "7134007": {
    "id": "7134007",
    "name": "Crespos",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.967843,
      "latitude": 40.869951
    }
  },
  "7134008": {
    "id": "7134008",
    "name": "Narros del Castillo",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.051991,
      "latitude": 40.866849
    }
  },
  "7134011": {
    "id": "7134011",
    "name": "Villar de Gallimazo",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.295931,
      "latitude": 40.951725
    }
  },
  "7134012": {
    "id": "7134012",
    "name": "Babilafuente",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.430311,
      "latitude": 40.972167
    }
  },
  "7134013": {
    "id": "7134013",
    "name": "San Morales",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.492472,
      "latitude": 40.983934
    }
  },
  "7134014": {
    "id": "7134014",
    "name": "Aldealengua",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.553158,
      "latitude": 40.979601
    }
  },
  "7135002": {
    "id": "7135002",
    "name": "Fuenlabrada",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.798958,
      "latitude": 40.283548
    }
  },
  "7135005": {
    "id": "7135005",
    "name": "Illescas",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.842097,
      "latitude": 40.120879
    }
  },
  "7135107": {
    "id": "7135107",
    "name": "Erustes",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.523389,
      "latitude": 39.966723
    }
  },
  "7135109": {
    "id": "7135109",
    "name": "Montearagón",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.624545,
      "latitude": 39.970751
    }
  },
  "7135302": {
    "id": "7135302",
    "name": "Casas de Millán",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.332388,
      "latitude": 39.804216
    }
  },
  "7135402": {
    "id": "7135402",
    "name": "Arroyo-Malpartida",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.53478,
      "latitude": 39.46829
    }
  },
  "7136062": {
    "id": "7136062",
    "name": "San Severiano",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.280484,
      "latitude": 36.521095
    }
  },
  "7137302": {
    "id": "7137302",
    "name": "Brazatortas-Veredas",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.316979,
      "latitude": 38.668798
    }
  },
  "7137308": {
    "id": "7137308",
    "name": "Guadalmez-Los Pedroches",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.929486,
      "latitude": 38.699316
    }
  },
  "7137409": {
    "id": "7137409",
    "name": "Valdetorres",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.069615,
      "latitude": 38.913251
    }
  },
  "7137554": {
    "id": "7137554",
    "name": "El Escorial",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.132242,
      "latitude": 40.585109
    }
  },
  "7137600": {
    "id": "7137600",
    "name": "Aljucen",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.407564,
      "latitude": 38.936281
    }
  },
  "7137604": {
    "id": "7137604",
    "name": "Guadiana del Caudillo",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.690275,
      "latitude": 38.921844
    }
  },
  "7137608": {
    "id": "7137608",
    "name": "Montijo-El Molino",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.618272,
      "latitude": 38.914042
    }
  },
  "7137611": {
    "id": "7137611",
    "name": "Garrovilla-Las Vegas",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.474067,
      "latitude": 38.915453
    }
  },
  "7137704": {
    "id": "7137704",
    "name": "Villanueva de Córdoba – Los Pedroches",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.571038,
      "latitude": 38.255114
    }
  },
  "7140002": {
    "id": "7140002",
    "name": "Calamonte",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.382862,
      "latitude": 38.887344
    }
  },
  "7140004": {
    "id": "7140004",
    "name": "Almendralejo",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.399582,
      "latitude": 38.684718
    }
  },
  "7140005": {
    "id": "7140005",
    "name": "Villafranca de los Barros",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.352281,
      "latitude": 38.564289
    }
  },
  "7140006": {
    "id": "7140006",
    "name": "Los Santos de Maimona",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.362187,
      "latitude": 38.450414
    }
  },
  "7140008": {
    "id": "7140008",
    "name": "Zafra Feria",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.403483,
      "latitude": 38.430485
    }
  },
  "7140105": {
    "id": "7140105",
    "name": "Llerena",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.009765,
      "latitude": 38.237846
    }
  },
  "7140107": {
    "id": "7140107",
    "name": "Fuente del Arco",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.900798,
      "latitude": 38.163757
    }
  },
  "7140108": {
    "id": "7140108",
    "name": "Guadalcanal",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.803336,
      "latitude": 38.090441
    }
  },
  "7140113": {
    "id": "7140113",
    "name": "Cazalla-Constantina",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.704671,
      "latitude": 37.932545
    }
  },
  "7140119": {
    "id": "7140119",
    "name": "Villanueva del Rio y Minas",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.711467,
      "latitude": 37.661125
    }
  },
  "7140122": {
    "id": "7140122",
    "name": "Tocina",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.731531,
      "latitude": 37.609078
    }
  },
  "7140654": {
    "id": "7140654",
    "name": "Villada",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.970603,
      "latitude": 42.245138
    }
  },
  "7142005": {
    "id": "7142005",
    "name": "Fregenal de la Sierra",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.637661,
      "latitude": 38.16773
    }
  },
  "7142006": {
    "id": "7142006",
    "name": "Cumbres Mayores",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.630973,
      "latitude": 38.053109
    }
  },
  "7142008": {
    "id": "7142008",
    "name": "Jabugo-Galaroza",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.772715,
      "latitude": 37.926756
    }
  },
  "7142009": {
    "id": "7142009",
    "name": "Almonaster-Cortegana",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.797319,
      "latitude": 37.900975
    }
  },
  "7142012": {
    "id": "7142012",
    "name": "Valdelamusa",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.874069,
      "latitude": 37.787082
    }
  },
  "7142013": {
    "id": "7142013",
    "name": "El Tamujoso",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.900245,
      "latitude": 37.719969
    }
  },
  "7142015": {
    "id": "7142015",
    "name": "Calañas",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.876271,
      "latitude": 37.652136
    }
  },
  "7142016": {
    "id": "7142016",
    "name": "Los Milanos",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.919995,
      "latitude": 37.58727
    }
  },
  "7142018": {
    "id": "7142018",
    "name": "El Cobujon",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.953066,
      "latitude": 37.516282
    }
  },
  "7142019": {
    "id": "7142019",
    "name": "Belmonte",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.94753,
      "latitude": 37.46188
    }
  },
  "7142959": {
    "id": "7142959",
    "name": "Gudillos",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.157717,
      "latitude": 40.717089
    }
  },
  "7142999": {
    "id": "7142999",
    "name": "Torre del Bierzo",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.328783,
      "latitude": 42.595664
    }
  },
  "7143005": {
    "id": "7143005",
    "name": "Benacazon",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.208256,
      "latitude": 37.357155
    }
  },
  "7143008": {
    "id": "7143008",
    "name": "Carrión de los Céspedes",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.334635,
      "latitude": 37.369209
    }
  },
  "7143012": {
    "id": "7143012",
    "name": "Villarrasa",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.598342,
      "latitude": 37.386855
    }
  },
  "7143015": {
    "id": "7143015",
    "name": "Niebla",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.681097,
      "latitude": 37.358341
    }
  },
  "7145867": {
    "id": "7145867",
    "name": "Madrid-Ramón y Cajal",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.694701,
      "latitude": 40.488242
    }
  },
  "7147462": {
    "id": "7147462",
    "name": "Herradon – La Cañada",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.494876,
      "latitude": 40.599231
    }
  },
  "7150002": {
    "id": "7150002",
    "name": "Cinco Casas",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.232583,
      "latitude": 39.168463
    }
  },
  "7150417": {
    "id": "7150417",
    "name": "Campus Universitario Rabanales / Córdoba",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.720802,
      "latitude": 37.912634
    }
  },
  "7150504": {
    "id": "7150504",
    "name": "Posadas",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.106403,
      "latitude": 37.804215
    }
  },
  "7150507": {
    "id": "7150507",
    "name": "Peñaflor",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.341731,
      "latitude": 37.707447
    }
  },
  "7150701": {
    "id": "7150701",
    "name": "Cantillana",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.803085,
      "latitude": 37.574406
    }
  },
  "7151100": {
    "id": "7151100",
    "name": "Sevilla San Bernardo",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.979552,
      "latitude": 37.377596
    }
  },
  "7151103": {
    "id": "7151103",
    "name": "Dos Hermanas",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.923369,
      "latitude": 37.287255
    }
  },
  "7151110": {
    "id": "7151110",
    "name": "Sevilla-Virgen del Roció",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.975831,
      "latitude": 37.362827
    }
  },
  "7151111": {
    "id": "7151111",
    "name": "Bellavista (Sevilla)",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.964321,
      "latitude": 37.321485
    }
  },
  "7151202": {
    "id": "7151202",
    "name": "Las Cabezas de San Juan",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.946553,
      "latitude": 37.020077
    }
  },
  "7151203": {
    "id": "7151203",
    "name": "Lebrija",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.086667,
      "latitude": 36.930059
    }
  },
  "7151205": {
    "id": "7151205",
    "name": "Jerez-Aeropuerto",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.066325,
      "latitude": 36.751381
    }
  },
  "7151401": {
    "id": "7151401",
    "name": "Puerto Real",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.189396,
      "latitude": 36.532772
    }
  },
  "7151404": {
    "id": "7151404",
    "name": "Segunda Aguada",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.276933,
      "latitude": 36.513418
    }
  },
  "7151409": {
    "id": "7151409",
    "name": "Cádiz-Estadio",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.272025,
      "latitude": 36.502982
    }
  },
  "7151415": {
    "id": "7151415",
    "name": "Las Aletas",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.19852,
      "latitude": 36.544188
    }
  },
  "7151417": {
    "id": "7151417",
    "name": "Valdelagrana",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.21622,
      "latitude": 36.584244
    }
  },
  "7151464": {
    "id": "7151464",
    "name": "Porqueros",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.108305,
      "latitude": 42.598612
    }
  },
  "7151556": {
    "id": "7151556",
    "name": "Nistal",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.008075,
      "latitude": 42.424464
    }
  },
  "7152999": {
    "id": "7152999",
    "name": "Cádiz-Cortadura",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.268142,
      "latitude": 36.494316
    }
  },
  "7154315": {
    "id": "7154315",
    "name": "Robledo de Chávela",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.247034,
      "latitude": 40.521331
    }
  },
  "7154403": {
    "id": "7154403",
    "name": "El Chorro",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.759248,
      "latitude": 36.906993
    }
  },
  "7154404": {
    "id": "7154404",
    "name": "Las Mellizas",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.719372,
      "latitude": 36.874524
    }
  },
  "7154406": {
    "id": "7154406",
    "name": "Pizarra",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.712046,
      "latitude": 36.764361
    }
  },
  "7154408": {
    "id": "7154408",
    "name": "Cartama",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.608427,
      "latitude": 36.73387
    }
  },
  "7154511": {
    "id": "7154511",
    "name": "Benalmádena-Arroyo de la Miel",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.536747,
      "latitude": 36.599023
    }
  },
  "7155001": {
    "id": "7155001",
    "name": "Campillos",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.863802,
      "latitude": 37.032042
    }
  },
  "7155008": {
    "id": "7155008",
    "name": "Arriate",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.141164,
      "latitude": 36.790592
    }
  },
  "7155010": {
    "id": "7155010",
    "name": "Benaojan-Montejaque",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.246617,
      "latitude": 36.713491
    }
  },
  "7155011": {
    "id": "7155011",
    "name": "Jimera de Libar",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.281405,
      "latitude": 36.660743
    }
  },
  "7155012": {
    "id": "7155012",
    "name": "Cortes de la Frontera",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.332814,
      "latitude": 36.598636
    }
  },
  "7155013": {
    "id": "7155013",
    "name": "Gaucin",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.38728,
      "latitude": 36.540323
    }
  },
  "7155014": {
    "id": "7155014",
    "name": "San Pablo de Buceite",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.419281,
      "latitude": 36.468221
    }
  },
  "7155015": {
    "id": "7155015",
    "name": "Jimena de la Frontera",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.434015,
      "latitude": 36.424344
    }
  },
  "7155017": {
    "id": "7155017",
    "name": "Almoraima",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.429763,
      "latitude": 36.277326
    }
  },
  "7155019": {
    "id": "7155019",
    "name": "Los Barrios",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.460263,
      "latitude": 36.173689
    }
  },
  "7155129": {
    "id": "7155129",
    "name": "Torrelodones",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.956566,
      "latitude": 40.574313
    }
  },
  "7156103": {
    "id": "7156103",
    "name": "Benalúa de Guadix",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.163537,
      "latitude": 37.345487
    }
  },
  "7158644": {
    "id": "7158644",
    "name": "Pinar de Las Rozas",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.881497,
      "latitude": 40.522374
    }
  },
  "7160100": {
    "id": "7160100",
    "name": "Villaverde Bajo",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.683779,
      "latitude": 40.352873
    }
  },
  "7160203": {
    "id": "7160203",
    "name": "Villasequilla",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.728482,
      "latitude": 39.879546
    }
  },
  "7160206": {
    "id": "7160206",
    "name": "Tembleque",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.497496,
      "latitude": 39.723475
    }
  },
  "7160207": {
    "id": "7160207",
    "name": "El Romeral",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.42987,
      "latitude": 39.693874
    }
  },
  "7160301": {
    "id": "7160301",
    "name": "Quero",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.266644,
      "latitude": 39.50457
    }
  },
  "7160402": {
    "id": "7160402",
    "name": "Campo de Criptana",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.116353,
      "latitude": 39.393463
    }
  },
  "7160503": {
    "id": "7160503",
    "name": "Minaya",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -2.348234,
      "latitude": 39.240656
    }
  },
  "7160507": {
    "id": "7160507",
    "name": "La Gineta",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -2.00027,
      "latitude": 39.111364
    }
  },
  "7160904": {
    "id": "7160904",
    "name": "Sax",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.813937,
      "latitude": 38.544963
    }
  },
  "7162001": {
    "id": "7162001",
    "name": "Beniel",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.999474,
      "latitude": 38.044605
    }
  },
  "7162003": {
    "id": "7162003",
    "name": "Callosa de Segura",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.873679,
      "latitude": 38.122928
    }
  },
  "7162100": {
    "id": "7162100",
    "name": "Albatera-Catral",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.838289,
      "latitude": 38.166885
    }
  },
  "7162101": {
    "id": "7162101",
    "name": "Crevillent",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.781081,
      "latitude": 38.224587
    }
  },
  "7162102": {
    "id": "7162102",
    "name": "Elx Carrús",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.724359,
      "latitude": 38.255573
    }
  },
  "7162104": {
    "id": "7162104",
    "name": "Torrellano",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.583004,
      "latitude": 38.289498
    }
  },
  "7162109": {
    "id": "7162109",
    "name": "Sant Gabriel",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.508753,
      "latitude": 38.328961
    }
  },
  "7163091": {
    "id": "7163091",
    "name": "Tablada",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.125077,
      "latitude": 40.705682
    }
  },
  "7164101": {
    "id": "7164101",
    "name": "Manuel-L’Enova",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.488923,
      "latitude": 39.049986
    }
  },
  "7164102": {
    "id": "7164102",
    "name": "La Pobla Llarga",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.470675,
      "latitude": 39.082688
    }
  },
  "7164103": {
    "id": "7164103",
    "name": "Carcaixent",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.454638,
      "latitude": 39.12065
    }
  },
  "7164104": {
    "id": "7164104",
    "name": "Alzira",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.451042,
      "latitude": 39.15346
    }
  },
  "7164105": {
    "id": "7164105",
    "name": "Algemesi",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.441082,
      "latitude": 39.192941
    }
  },
  "7164107": {
    "id": "7164107",
    "name": "Benifaio-Almussafes",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.430106,
      "latitude": 39.284244
    }
  },
  "7164201": {
    "id": "7164201",
    "name": "Catarroja",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.399004,
      "latitude": 39.399792
    }
  },
  "7164202": {
    "id": "7164202",
    "name": "Massanassa",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.395093,
      "latitude": 39.408925
    }
  },
  "7164203": {
    "id": "7164203",
    "name": "Alfafar-Benetusser",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.392765,
      "latitude": 39.422409
    }
  },
  "7164468": {
    "id": "7164468",
    "name": "Las Matas",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.896922,
      "latitude": 40.552335
    }
  },
  "7165002": {
    "id": "7165002",
    "name": "Valencia Fuente San Luis-Hospital la Fe",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.370436,
      "latitude": 39.441385
    }
  },
  "7165005": {
    "id": "7165005",
    "name": "Albuixech",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.320564,
      "latitude": 39.543296
    }
  },
  "7165007": {
    "id": "7165007",
    "name": "El Puig",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.311871,
      "latitude": 39.588233
    }
  },
  "7165008": {
    "id": "7165008",
    "name": "Puçol",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.302783,
      "latitude": 39.620468
    }
  },
  "7165202": {
    "id": "7165202",
    "name": "Almenara",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.218141,
      "latitude": 39.748735
    }
  },
  "7165204": {
    "id": "7165204",
    "name": "Chilches",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.190526,
      "latitude": 39.782175
    }
  },
  "7165208": {
    "id": "7165208",
    "name": "Vila-Real",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.096553,
      "latitude": 39.932951
    }
  },
  "7165209": {
    "id": "7165209",
    "name": "Almazora",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.076668,
      "latitude": 39.954858
    }
  },
  "7165304": {
    "id": "7165304",
    "name": "Orpesa",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 0.139809,
      "latitude": 40.092492
    }
  },
  "7165306": {
    "id": "7165306",
    "name": "Torreblanca",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 0.19929,
      "latitude": 40.212192
    }
  },
  "7165308": {
    "id": "7165308",
    "name": "Alcalá de Xivert",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 0.228874,
      "latitude": 40.303441
    }
  },
  "7165401": {
    "id": "7165401",
    "name": "Camp-Redo",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 0.555344,
      "latitude": 40.758988
    }
  },
  "7165403": {
    "id": "7165403",
    "name": "Camarles-Deltebre",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 0.670712,
      "latitude": 40.774593
    }
  },
  "7165404": {
    "id": "7165404",
    "name": "L’Ampolla-El Perello-Deltebre",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 0.708475,
      "latitude": 40.812078
    }
  },
  "7165405": {
    "id": "7165405",
    "name": "L’Ametlla de Mar",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 0.800498,
      "latitude": 40.885996
    }
  },
  "7165407": {
    "id": "7165407",
    "name": "L’Hospitalet de l’Infant",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 0.920702,
      "latitude": 40.995952
    }
  },
  "7165408": {
    "id": "7165408",
    "name": "Mont-Roig del Camp",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 0.990818,
      "latitude": 41.04489
    }
  },
  "7166001": {
    "id": "7166001",
    "name": "Ontigola",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.572933,
      "latitude": 40.000586
    }
  },
  "7166002": {
    "id": "7166002",
    "name": "Ocaña",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.485675,
      "latitude": 39.9648
    }
  },
  "7166003": {
    "id": "7166003",
    "name": "Noblejas",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.442589,
      "latitude": 39.972441
    }
  },
  "7166004": {
    "id": "7166004",
    "name": "Villarrubia de Santiago",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.371925,
      "latitude": 39.966499
    }
  },
  "7166005": {
    "id": "7166005",
    "name": "Santa Cruz de la Zarza",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.180491,
      "latitude": 39.973205
    }
  },
  "7166013": {
    "id": "7166013",
    "name": "Castillejo del Romeral",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -2.50689,
      "latitude": 40.1372
    }
  },
  "7166014": {
    "id": "7166014",
    "name": "Cuevas de Velasco",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -2.408246,
      "latitude": 40.155164
    }
  },
  "7166016": {
    "id": "7166016",
    "name": "Chillaron",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -2.221036,
      "latitude": 40.102784
    }
  },
  "7166103": {
    "id": "7166103",
    "name": "Cañada del Hoyo",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.889352,
      "latitude": 39.953833
    }
  },
  "7166104": {
    "id": "7166104",
    "name": "Carboneras de Guadazaon",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.80729,
      "latitude": 39.900266
    }
  },
  "7166105": {
    "id": "7166105",
    "name": "Arguisuelas",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.811838,
      "latitude": 39.838537
    }
  },
  "7166108": {
    "id": "7166108",
    "name": "Yemeda-Cardenete",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.683868,
      "latitude": 39.751333
    }
  },
  "7166109": {
    "id": "7166109",
    "name": "Villora",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.611118,
      "latitude": 39.747072
    }
  },
  "7166112": {
    "id": "7166112",
    "name": "Camporrobles",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.402191,
      "latitude": 39.644667
    }
  },
  "7166113": {
    "id": "7166113",
    "name": "Las Cuevas",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.283983,
      "latitude": 39.61938
    }
  },
  "7166201": {
    "id": "7166201",
    "name": "San Antonio de Requena",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.150241,
      "latitude": 39.522405
    }
  },
  "7166203": {
    "id": "7166203",
    "name": "El Rebollar",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.018019,
      "latitude": 39.483598
    }
  },
  "7166204": {
    "id": "7166204",
    "name": "Siete Aguas",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.902705,
      "latitude": 39.457134
    }
  },
  "7166205": {
    "id": "7166205",
    "name": "Venta Mina-Siete Aguas",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.869877,
      "latitude": 39.454527
    }
  },
  "7166207": {
    "id": "7166207",
    "name": "Chiva",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.722867,
      "latitude": 39.471085
    }
  },
  "7166208": {
    "id": "7166208",
    "name": "Cheste",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.686137,
      "latitude": 39.490897
    }
  },
  "7166209": {
    "id": "7166209",
    "name": "Loriguilla-Reva",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.567515,
      "latitude": 39.485612
    }
  },
  "7166210": {
    "id": "7166210",
    "name": "Circuit Ricardo Tormo",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.625316,
      "latitude": 39.495473
    }
  },
  "7166211": {
    "id": "7166211",
    "name": "Aldaia",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.463239,
      "latitude": 39.461
    }
  },
  "7166212": {
    "id": "7166212",
    "name": "Valencia Sant Isidre",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.408361,
      "latitude": 39.455777
    }
  },
  "7166214": {
    "id": "7166214",
    "name": "Xirivella-Alqueries",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.432174,
      "latitude": 39.462348
    }
  },
  "7167004": {
    "id": "7167004",
    "name": "María de Huerva",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.998171,
      "latitude": 41.539692
    }
  },
  "7167007": {
    "id": "7167007",
    "name": "Arañales de Muel",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.087479,
      "latitude": 41.468048
    }
  },
  "7167009": {
    "id": "7167009",
    "name": "Longares",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.159114,
      "latitude": 41.405159
    }
  },
  "7167011": {
    "id": "7167011",
    "name": "Encinacorba",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.278724,
      "latitude": 41.288884
    }
  },
  "7167013": {
    "id": "7167013",
    "name": "Villarreal de Huerva",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.286724,
      "latitude": 41.195441
    }
  },
  "7167014": {
    "id": "7167014",
    "name": "Villadoz",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.278643,
      "latitude": 41.16548
    }
  },
  "7167015": {
    "id": "7167015",
    "name": "Badules",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.251541,
      "latitude": 41.139789
    }
  },
  "7167016": {
    "id": "7167016",
    "name": "Villahermosa",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.239855,
      "latitude": 41.108497
    }
  },
  "7167017": {
    "id": "7167017",
    "name": "Ferreruela",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.238425,
      "latitude": 41.063632
    }
  },
  "7167018": {
    "id": "7167018",
    "name": "Cuencabuena",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.254777,
      "latitude": 41.009229
    }
  },
  "7167019": {
    "id": "7167019",
    "name": "Lechago",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.269537,
      "latitude": 40.957119
    }
  },
  "7167020": {
    "id": "7167020",
    "name": "Navarrete",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.261797,
      "latitude": 40.937262
    }
  },
  "7167101": {
    "id": "7167101",
    "name": "Torrijo del Campo",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.340543,
      "latitude": 40.826092
    }
  },
  "7167102": {
    "id": "7167102",
    "name": "Monreal del Campo",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.360975,
      "latitude": 40.783196
    }
  },
  "7167103": {
    "id": "7167103",
    "name": "Villafranca del Campo",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.358225,
      "latitude": 40.683757
    }
  },
  "7167105": {
    "id": "7167105",
    "name": "Santa Eulalia del Campo",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.312901,
      "latitude": 40.573091
    }
  },
  "7167107": {
    "id": "7167107",
    "name": "Cella",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.244556,
      "latitude": 40.455143
    }
  },
  "7167202": {
    "id": "7167202",
    "name": "Puerto Escandón",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.985055,
      "latitude": 40.27313
    }
  },
  "7167203": {
    "id": "7167203",
    "name": "Puebla de Valverde",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.944982,
      "latitude": 40.213639
    }
  },
  "7167205": {
    "id": "7167205",
    "name": "Sarrion",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.824382,
      "latitude": 40.14675
    }
  },
  "7167206": {
    "id": "7167206",
    "name": "Mora de Rubielos",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.786385,
      "latitude": 40.123154
    }
  },
  "7167207": {
    "id": "7167207",
    "name": "Rubielos de Mora",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.774025,
      "latitude": 40.118219
    }
  },
  "7167208": {
    "id": "7167208",
    "name": "Barracas",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.696313,
      "latitude": 40.01175
    }
  },
  "7167213": {
    "id": "7167213",
    "name": "Navas de Riofrío – La Losa",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.141155,
      "latitude": 40.856684
    }
  },
  "7169001": {
    "id": "7169001",
    "name": "Genovés",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.480464,
      "latitude": 38.988095
    }
  },
  "7169002": {
    "id": "7169002",
    "name": "Beniganim",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.453865,
      "latitude": 38.9386
    }
  },
  "7169003": {
    "id": "7169003",
    "name": "La Pobla del Duc",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.453721,
      "latitude": 38.906536
    }
  },
  "7169004": {
    "id": "7169004",
    "name": "Montaverner",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.491665,
      "latitude": 38.884018
    }
  },
  "7169005": {
    "id": "7169005",
    "name": "Bufali",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.510847,
      "latitude": 38.866552
    }
  },
  "7169006": {
    "id": "7169006",
    "name": "Albaida",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.518587,
      "latitude": 38.845787
    }
  },
  "7169007": {
    "id": "7169007",
    "name": "Agullent",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.551443,
      "latitude": 38.830514
    }
  },
  "7169008": {
    "id": "7169008",
    "name": "Ontinyent",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.604569,
      "latitude": 38.808769
    }
  },
  "7169009": {
    "id": "7169009",
    "name": "Agres",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.521787,
      "latitude": 38.797002
    }
  },
  "7169010": {
    "id": "7169010",
    "name": "Cocentaina",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.447078,
      "latitude": 38.74073
    }
  },
  "7170001": {
    "id": "7170001",
    "name": "Vallecas",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.6241,
      "latitude": 40.38225
    }
  },
  "7170002": {
    "id": "7170002",
    "name": "Asamblea de Madrid Entrevías",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.668008,
      "latitude": 40.381695
    }
  },
  "7170003": {
    "id": "7170003",
    "name": "El Pozo",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.656506,
      "latitude": 40.376155
    }
  },
  "7170100": {
    "id": "7170100",
    "name": "Vicàlvaro",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.596359,
      "latitude": 40.400884
    }
  },
  "7170101": {
    "id": "7170101",
    "name": "San Fernando Henares",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.5344609,
      "latitude": 40.442537
    }
  },
  "7170102": {
    "id": "7170102",
    "name": "Torrejón de Ardoz",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.479598,
      "latitude": 40.45464
    }
  },
  "7170104": {
    "id": "7170104",
    "name": "Meco",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.298483,
      "latitude": 40.534671
    }
  },
  "7170105": {
    "id": "7170105",
    "name": "Azuqueca",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.265439,
      "latitude": 40.561153
    }
  },
  "7170107": {
    "id": "7170107",
    "name": "Alcalá Henares-Universidad",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.335267,
      "latitude": 40.505348
    }
  },
  "7170108": {
    "id": "7170108",
    "name": "Coslada",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.561121,
      "latitude": 40.423582
    }
  },
  "7170109": {
    "id": "7170109",
    "name": "Santa Eugenia",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.609204,
      "latitude": 40.386861
    }
  },
  "7170111": {
    "id": "7170111",
    "name": "La Garena",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.392852,
      "latitude": 40.480376
    }
  },
  "7170202": {
    "id": "7170202",
    "name": "Yunquera de Henares",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.162998,
      "latitude": 40.747311
    }
  },
  "7170204": {
    "id": "7170204",
    "name": "Humanes de Mohernando",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.138664,
      "latitude": 40.832259
    }
  },
  "7170207": {
    "id": "7170207",
    "name": "Espinosa de Henares",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.073402,
      "latitude": 40.909926
    }
  },
  "7170208": {
    "id": "7170208",
    "name": "Carrascosa de Henares",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.013966,
      "latitude": 40.906006
    }
  },
  "7170209": {
    "id": "7170209",
    "name": "Jadraque",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -2.936056,
      "latitude": 40.930268
    }
  },
  "7170210": {
    "id": "7170210",
    "name": "Matillas",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -2.843333,
      "latitude": 40.953802
    }
  },
  "7170300": {
    "id": "7170300",
    "name": "Baides",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -2.786125,
      "latitude": 41.004942
    }
  },
  "7170401": {
    "id": "7170401",
    "name": "Medinaceli",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -2.422359,
      "latitude": 41.16094
    }
  },
  "7170404": {
    "id": "7170404",
    "name": "Santa María de Huerta",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -2.177915,
      "latitude": 41.26446
    }
  },
  "7170405": {
    "id": "7170405",
    "name": "Monreal de Ariza",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -2.112123,
      "latitude": 41.299096
    }
  },
  "7170501": {
    "id": "7170501",
    "name": "Cetina",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.961877,
      "latitude": 41.295806
    }
  },
  "7170503": {
    "id": "7170503",
    "name": "Bubierca",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.855049,
      "latitude": 41.316831
    }
  },
  "7170505": {
    "id": "7170505",
    "name": "Terrer",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.708858,
      "latitude": 41.321937
    }
  },
  "7170602": {
    "id": "7170602",
    "name": "Embid de Jalón",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.592448,
      "latitude": 41.421583
    }
  },
  "7170603": {
    "id": "7170603",
    "name": "Paracuellos-Sabiñan",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.567476,
      "latitude": 41.429062
    }
  },
  "7170604": {
    "id": "7170604",
    "name": "Sabiñan",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.571611,
      "latitude": 41.443417
    }
  },
  "7170605": {
    "id": "7170605",
    "name": "Mores",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.566235,
      "latitude": 41.478736
    }
  },
  "7170606": {
    "id": "7170606",
    "name": "Purroy",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.540382,
      "latitude": 41.477271
    }
  },
  "7170607": {
    "id": "7170607",
    "name": "Morata de Jalón",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.477997,
      "latitude": 41.475797
    }
  },
  "7170700": {
    "id": "7170700",
    "name": "Ricla-La Almunia",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.402829,
      "latitude": 41.501092
    }
  },
  "7170701": {
    "id": "7170701",
    "name": "Calatorao",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.357146,
      "latitude": 41.530882
    }
  },
  "7170702": {
    "id": "7170702",
    "name": "Salillas de Jalón",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.326322,
      "latitude": 41.567379
    }
  },
  "7170703": {
    "id": "7170703",
    "name": "Epila",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.30126,
      "latitude": 41.609035
    }
  },
  "7170704": {
    "id": "7170704",
    "name": "Rueda de Jalon-Lumpiaque",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.281717,
      "latitude": 41.63985
    }
  },
  "7170705": {
    "id": "7170705",
    "name": "Plasencia de Jalón",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.239594,
      "latitude": 41.684562
    }
  },
  "7170706": {
    "id": "7170706",
    "name": "Grisen",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.165694,
      "latitude": 41.74532
    }
  },
  "7170801": {
    "id": "7170801",
    "name": "Utebo",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.998404,
      "latitude": 41.710864
    }
  },
  "7170807": {
    "id": "7170807",
    "name": "Zaragoza Goya",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.891226,
      "latitude": 41.643877
    }
  },
  "7171100": {
    "id": "7171100",
    "name": "Zaragoza Miraflores",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.868304,
      "latitude": 41.633306
    }
  },
  "7171103": {
    "id": "7171103",
    "name": "Fuentes de Ebro",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.62359,
      "latitude": 41.516347
    }
  },
  "7171105": {
    "id": "7171105",
    "name": "Quinto",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.493354,
      "latitude": 41.423929
    }
  },
  "7171205": {
    "id": "7171205",
    "name": "Val de Pilas",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 0.070493,
      "latitude": 41.230067
    }
  },
  "7171206": {
    "id": "7171206",
    "name": "Fabara",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 0.143647,
      "latitude": 41.234616
    }
  },
  "7171207": {
    "id": "7171207",
    "name": "Nonaspe",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 0.242789,
      "latitude": 41.213779
    }
  },
  "7171208": {
    "id": "7171208",
    "name": "Faió-La Pobla de Massaluca",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 0.348107,
      "latitude": 41.225519
    }
  },
  "7171209": {
    "id": "7171209",
    "name": "Riba-Roja d’Ebre",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 0.480859,
      "latitude": 41.24881
    }
  },
  "7171301": {
    "id": "7171301",
    "name": "Els Guiamets",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 0.747848,
      "latitude": 41.095679
    }
  },
  "7171302": {
    "id": "7171302",
    "name": "Capçanes",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 0.780758,
      "latitude": 41.102313
    }
  },
  "7171303": {
    "id": "7171303",
    "name": "Marça-Falset",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 0.810458,
      "latitude": 41.131096
    }
  },
  "7171304": {
    "id": "7171304",
    "name": "Pradell de la Teixeta",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 0.859998,
      "latitude": 41.133002
    }
  },
  "7171305": {
    "id": "7171305",
    "name": "Duesaigües-L’Argentera",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 0.920765,
      "latitude": 41.143708
    }
  },
  "7171306": {
    "id": "7171306",
    "name": "Riudecanyes-Botarell",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 0.976066,
      "latitude": 41.140184
    }
  },
  "7171307": {
    "id": "7171307",
    "name": "Les Borges del Camp",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 1.021695,
      "latitude": 41.166837
    }
  },
  "7171401": {
    "id": "7171401",
    "name": "Vila-Seca",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 1.150241,
      "latitude": 41.11292
    }
  },
  "7171502": {
    "id": "7171502",
    "name": "Altafulla-Tamarit",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 1.373318,
      "latitude": 41.136562
    }
  },
  "7171503": {
    "id": "7171503",
    "name": "Torredembarra",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 1.406281,
      "latitude": 41.1428
    }
  },
  "7171601": {
    "id": "7171601",
    "name": "Calafell",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 1.570001,
      "latitude": 41.189499
    }
  },
  "7171602": {
    "id": "7171602",
    "name": "Segur de Calafell",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 1.604547,
      "latitude": 41.192115
    }
  },
  "7171603": {
    "id": "7171603",
    "name": "Cunit",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 1.633268,
      "latitude": 41.194911
    }
  },
  "7171604": {
    "id": "7171604",
    "name": "Cubelles",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 1.675751,
      "latitude": 41.204071
    }
  },
  "7171655": {
    "id": "7171655",
    "name": "Las Navas del Marques",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.361557,
      "latitude": 40.589119
    }
  },
  "7171700": {
    "id": "7171700",
    "name": "Vilanova i la Geltrú",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 1.731241,
      "latitude": 41.220089
    }
  },
  "7171704": {
    "id": "7171704",
    "name": "Platja de Castelldefels",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 1.957131,
      "latitude": 41.266977
    }
  },
  "7171706": {
    "id": "7171706",
    "name": "Gava",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 2.010581,
      "latitude": 41.303222
    }
  },
  "7171707": {
    "id": "7171707",
    "name": "Prat de Llobregat",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 2.090261,
      "latitude": 41.331169
    }
  },
  "7171708": {
    "id": "7171708",
    "name": "Bellvitge",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 2.115521,
      "latitude": 41.354658
    }
  },
  "7171709": {
    "id": "7171709",
    "name": "Viladecans",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 2.02749,
      "latitude": 41.30928
    }
  },
  "7172101": {
    "id": "7172101",
    "name": "Roda de Mar",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 1.540058,
      "latitude": 41.187998
    }
  },
  "7172305": {
    "id": "7172305",
    "name": "L’Hospitalet de Llobregat",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 2.10174,
      "latitude": 41.364321
    }
  },
  "7173001": {
    "id": "7173001",
    "name": "Puigverd de Lleida-Artesa de Lleida",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 0.730832,
      "latitude": 41.554353
    }
  },
  "7173002": {
    "id": "7173002",
    "name": "Juneda",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 0.82547,
      "latitude": 41.544204
    }
  },
  "7173003": {
    "id": "7173003",
    "name": "Les Borges Blanques",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 0.878048,
      "latitude": 41.521471
    }
  },
  "7173004": {
    "id": "7173004",
    "name": "La Floresta",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 0.925484,
      "latitude": 41.503196
    }
  },
  "7173005": {
    "id": "7173005",
    "name": "Vinaixa",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 0.970583,
      "latitude": 41.425115
    }
  },
  "7173006": {
    "id": "7173006",
    "name": "Vimbodi i Poblet",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 1.046479,
      "latitude": 41.402804
    }
  },
  "7173007": {
    "id": "7173007",
    "name": "L’Espluga de Francolí",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 1.103398,
      "latitude": 41.400611
    }
  },
  "7173009": {
    "id": "7173009",
    "name": "Vilaverd",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 1.176274,
      "latitude": 41.33721
    }
  },
  "7173010": {
    "id": "7173010",
    "name": "La Riba",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 1.181703,
      "latitude": 41.318719
    }
  },
  "7173100": {
    "id": "7173100",
    "name": "La Plana-Picamoixons",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 1.195052,
      "latitude": 41.305972
    }
  },
  "7173101": {
    "id": "7173101",
    "name": "Alcover",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 1.17426,
      "latitude": 41.261575
    }
  },
  "7173102": {
    "id": "7173102",
    "name": "La Selva del Camp",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 1.137521,
      "latitude": 41.204916
    }
  },
  "7174202": {
    "id": "7174202",
    "name": "Plasencia del Monte",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.571345,
      "latitude": 42.202979
    }
  },
  "7174205": {
    "id": "7174205",
    "name": "Riglos-Concilio",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.727083,
      "latitude": 42.316099
    }
  },
  "7174206": {
    "id": "7174206",
    "name": "Riglos",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.731623,
      "latitude": 42.34446
    }
  },
  "7174207": {
    "id": "7174207",
    "name": "Santa María y la Peña",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.695819,
      "latitude": 42.380237
    }
  },
  "7174208": {
    "id": "7174208",
    "name": "Anzanigo",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.645686,
      "latitude": 42.403393
    }
  },
  "7174209": {
    "id": "7174209",
    "name": "Caldearenas-Aquilue",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.49944,
      "latitude": 42.397982
    }
  },
  "7174214": {
    "id": "7174214",
    "name": "Castiello-Pueblo",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.545465,
      "latitude": 42.627773
    }
  },
  "7174215": {
    "id": "7174215",
    "name": "Castiello",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.555497,
      "latitude": 42.650309
    }
  },
  "7174216": {
    "id": "7174216",
    "name": "Villanua – Letranz",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.523531,
      "latitude": 42.688244
    }
  },
  "7175101": {
    "id": "7175101",
    "name": "Alcoletge",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 0.68644,
      "latitude": 41.654719
    }
  },
  "7175102": {
    "id": "7175102",
    "name": "Vilanova de la Barca",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 0.725357,
      "latitude": 41.686854
    }
  },
  "7175103": {
    "id": "7175103",
    "name": "Termens",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 0.764181,
      "latitude": 41.719449
    }
  },
  "7175104": {
    "id": "7175104",
    "name": "Vallfogona de Balaguer",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 0.798493,
      "latitude": 41.754112
    }
  },
  "7175106": {
    "id": "7175106",
    "name": "Gerb",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 0.812061,
      "latitude": 41.823303
    }
  },
  "7175107": {
    "id": "7175107",
    "name": "Sant Llorenç de Montgai",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 0.835915,
      "latitude": 41.872347
    }
  },
  "7175108": {
    "id": "7175108",
    "name": "Vilanova de la Sal",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 0.844482,
      "latitude": 41.927801
    }
  },
  "7175109": {
    "id": "7175109",
    "name": "Santa Liña",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 0.83223,
      "latitude": 41.968819
    }
  },
  "7175110": {
    "id": "7175110",
    "name": "Ager",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 0.849471,
      "latitude": 42.006034
    }
  },
  "7175112": {
    "id": "7175112",
    "name": "Guardia de Tremp",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 0.880781,
      "latitude": 42.086173
    }
  },
  "7175115": {
    "id": "7175115",
    "name": "Salas de Pallars",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 0.925664,
      "latitude": 42.201783
    }
  },
  "7175506": {
    "id": "7175506",
    "name": "Zaragoza Delicias",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.909906,
      "latitude": 41.658439
    }
  },
  "7176001": {
    "id": "7176001",
    "name": "Salomo",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 1.376374,
      "latitude": 41.223586
    }
  },
  "7176002": {
    "id": "7176002",
    "name": "Vilabella",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 1.31504,
      "latitude": 41.240486
    }
  },
  "7176003": {
    "id": "7176003",
    "name": "Nulles-Brafim",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 1.297269,
      "latitude": 41.250284
    }
  },
  "7178005": {
    "id": "7178005",
    "name": "Villanueva de Gallego",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.821236,
      "latitude": 41.767038
    }
  },
  "7178201": {
    "id": "7178201",
    "name": "Grañen",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -0.369168,
      "latitude": 41.938013
    }
  },
  "7178402": {
    "id": "7178402",
    "name": "Bell-Lloc d’Urgell",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 0.744675,
      "latitude": 41.627813
    }
  },
  "7178403": {
    "id": "7178403",
    "name": "Mollerussa",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 0.831331,
      "latitude": 41.633359
    }
  },
  "7178404": {
    "id": "7178404",
    "name": "Golmes",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 0.947687,
      "latitude": 41.640874
    }
  },
  "7178405": {
    "id": "7178405",
    "name": "Castellnou de Seana",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 0.989919,
      "latitude": 41.640461
    }
  },
  "7178406": {
    "id": "7178406",
    "name": "Bellpuig",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 1.012625,
      "latitude": 41.636685
    }
  },
  "7178407": {
    "id": "7178407",
    "name": "Anglesola",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 1.036384,
      "latitude": 41.638573
    }
  },
  "7178408": {
    "id": "7178408",
    "name": "Tarrega",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 1.138951,
      "latitude": 41.650385
    }
  },
  "7178500": {
    "id": "7178500",
    "name": "Cervera",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 1.274769,
      "latitude": 41.673658
    }
  },
  "7178501": {
    "id": "7178501",
    "name": "Sant Guim de Freixenet",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 1.4311,
      "latitude": 41.662844
    }
  },
  "7178502": {
    "id": "7178502",
    "name": "Sant Martí Sesgueioles",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 1.476568,
      "latitude": 41.690279
    }
  },
  "7178503": {
    "id": "7178503",
    "name": "Calaf",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 1.515176,
      "latitude": 41.730245
    }
  },
  "7178504": {
    "id": "7178504",
    "name": "Seguers-Sant Pere Sallavinera",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 1.566729,
      "latitude": 41.736547
    }
  },
  "7178505": {
    "id": "7178505",
    "name": "Aguilar de Segarra",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 1.632503,
      "latitude": 41.738623
    }
  },
  "7178506": {
    "id": "7178506",
    "name": "Rajadell",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 1.698727,
      "latitude": 41.732178
    }
  },
  "7178604": {
    "id": "7178604",
    "name": "Sant Vicenç de Castellet",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 1.862519,
      "latitude": 41.668669
    }
  },
  "7178605": {
    "id": "7178605",
    "name": "Castellbell i el Vilar-Monistrol de Montserrat",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 1.868866,
      "latitude": 41.628613
    }
  },
  "7178606": {
    "id": "7178606",
    "name": "Vacarisses",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 1.894063,
      "latitude": 41.601708
    }
  },
  "7178607": {
    "id": "7178607",
    "name": "Vacarisses-Torreblanca",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 1.916922,
      "latitude": 41.586939
    }
  },
  "7178609": {
    "id": "7178609",
    "name": "Viladecavalls",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 1.957077,
      "latitude": 41.563891
    }
  },
  "7178610": {
    "id": "7178610",
    "name": "Sant Miquel de Gonteres",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 1.97395,
      "latitude": 41.569159
    }
  },
  "7178700": {
    "id": "7178700",
    "name": "Terrassa",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 2.014248,
      "latitude": 41.570084
    }
  },
  "7178703": {
    "id": "7178703",
    "name": "Sabadell Sud",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 2.105183,
      "latitude": 41.528725
    }
  },
  "7178705": {
    "id": "7178705",
    "name": "Barbera del Valles",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 2.118397,
      "latitude": 41.513479
    }
  },
  "7178706": {
    "id": "7178706",
    "name": "Cerdanyola del Valles",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 2.147531,
      "latitude": 41.492436
    }
  },
  "7178707": {
    "id": "7178707",
    "name": "Montcada i Reixac-Santa María",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 2.167505,
      "latitude": 41.481271
    }
  },
  "7178708": {
    "id": "7178708",
    "name": "Montcada i Reixac – Manresa",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 2.185412,
      "latitude": 41.483887
    }
  },
  "7178709": {
    "id": "7178709",
    "name": "Sabadell Nord",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 2.096041,
      "latitude": 41.562039
    }
  },
  "7178781": {
    "id": "7178781",
    "name": "Navalperal",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.408328,
      "latitude": 40.590431
    }
  },
  "7178800": {
    "id": "7178800",
    "name": "Montcada Bifurcacio",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 2.181681,
      "latitude": 41.472102
    }
  },
  "7178801": {
    "id": "7178801",
    "name": "Barcelona-Torre del Baro",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 2.181421,
      "latitude": 41.460524
    }
  },
  "7178802": {
    "id": "7178802",
    "name": "Sant Andreu Arenal",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 2.183102,
      "latitude": 41.430707
    }
  },
  "7178804": {
    "id": "7178804",
    "name": "Barcelona-Arc de Triomf",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 2.17983,
      "latitude": 41.391568
    }
  },
  "7178806": {
    "id": "7178806",
    "name": "Barcelona la Sagrera Meridiana",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 2.186778,
      "latitude": 41.422958
    }
  },
  "7179101": {
    "id": "7179101",
    "name": "Cardedeu",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 2.35636,
      "latitude": 41.63638
    }
  },
  "7179102": {
    "id": "7179102",
    "name": "Llinars del Valles",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 2.404443,
      "latitude": 41.63798
    }
  },
  "7179105": {
    "id": "7179105",
    "name": "Gualba",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 2.533564,
      "latitude": 41.714829
    }
  },
  "7179106": {
    "id": "7179106",
    "name": "Riells i Viabrea-Breda",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 2.569557,
      "latitude": 41.72673
    }
  },
  "7179107": {
    "id": "7179107",
    "name": "Hostalric",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 2.631097,
      "latitude": 41.747783
    }
  },
  "7179109": {
    "id": "7179109",
    "name": "Les Franqueses-Granollers Nord",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 2.294541,
      "latitude": 41.617089
    }
  },
  "7179204": {
    "id": "7179204",
    "name": "Riudellots",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 2.811502,
      "latitude": 41.895395
    }
  },
  "7179205": {
    "id": "7179205",
    "name": "Fornells de la Selva",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 2.807286,
      "latitude": 41.929725
    }
  },
  "7179301": {
    "id": "7179301",
    "name": "Celra",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 2.874921,
      "latitude": 42.027312
    }
  },
  "7179302": {
    "id": "7179302",
    "name": "Bordils-Juià",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 2.915363,
      "latitude": 42.037002
    }
  },
  "7179304": {
    "id": "7179304",
    "name": "Sant Jordi Desvalls",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 2.964606,
      "latitude": 42.070325
    }
  },
  "7179305": {
    "id": "7179305",
    "name": "Camallera",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 2.965667,
      "latitude": 42.122597
    }
  },
  "7179306": {
    "id": "7179306",
    "name": "Sant Miquel de Fluvia",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 2.988859,
      "latitude": 42.175247
    }
  },
  "7179308": {
    "id": "7179308",
    "name": "Vilamalla",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 2.977191,
      "latitude": 42.217919
    }
  },
  "7179311": {
    "id": "7179311",
    "name": "Vilajuiga",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 3.086248,
      "latitude": 42.324918
    }
  },
  "7179314": {
    "id": "7179314",
    "name": "Cólera",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": 3.154377,
      "latitude": 42.4068
    }
  },
  "7180001": {
    "id": "7180001",
    "name": "Altsasu Pueblo",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -2.181187,
      "latitude": 42.894789
    }
  },
  "7180003": {
    "id": "7180003",
    "name": "Etxarri-Aranatz",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -2.071393,
      "latitude": 42.911347
    }
  },
  "7180005": {
    "id": "7180005",
    "name": "Uharte-Arakil",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.974912,
      "latitude": 42.920417
    }
  },
  "7180109": {
    "id": "7180109",
    "name": "Olite",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.649295,
      "latitude": 42.484575
    }
  },
  "7180113": {
    "id": "7180113",
    "name": "Caparroso",
    "isMeta": true,
    "country": "ES",
    "location": {
      "longitude": -1.64962,
      "latitude": 42.341293
    }
  },
  "7180114": {
    "id": "7180114",
    "name": "Marcilla de Navarra",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.717074,
      "latitude": 42.334653
    }
  },
  "7180115": {
    "id": "7180115",
    "name": "Villafranca de Navarra",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.746145,
      "latitude": 42.278812
    }
  },
  "7181102": {
    "id": "7181102",
    "name": "Agoncillo",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -2.29144,
      "latitude": 42.443818
    }
  },
  "7181105": {
    "id": "7181105",
    "name": "Alcanadre",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -2.121939,
      "latitude": 42.407681
    }
  },
  "7181106": {
    "id": "7181106",
    "name": "Féculas-Navarra",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -2.098082,
      "latitude": 42.411214
    }
  },
  "7181109": {
    "id": "7181109",
    "name": "Rincón de Soto",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.847418,
      "latitude": 42.22983
    }
  },
  "7181203": {
    "id": "7181203",
    "name": "Ribaforada",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.515131,
      "latitude": 41.997027
    }
  },
  "7181205": {
    "id": "7181205",
    "name": "Cortes de Navarra",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.4199,
      "latitude": 41.914803
    }
  },
  "7181206": {
    "id": "7181206",
    "name": "Gallur",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.321261,
      "latitude": 41.867151
    }
  },
  "7181207": {
    "id": "7181207",
    "name": "Luceni",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.244214,
      "latitude": 41.826286
    }
  },
  "7181208": {
    "id": "7181208",
    "name": "Pedrola",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.202037,
      "latitude": 41.805197
    }
  },
  "7181209": {
    "id": "7181209",
    "name": "Cabañas de Ebro",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.167438,
      "latitude": 41.788064
    }
  },
  "7181210": {
    "id": "7181210",
    "name": "Alagón",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -1.11246,
      "latitude": 41.771488
    }
  },
  "7184017": {
    "id": "7184017",
    "name": "Galapagar-La Navata",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -3.981942,
      "latitude": 40.600202
    }
  },
  "7184101": {
    "id": "7184101",
    "name": "Almazán",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -2.52545,
      "latitude": 41.4891
    }
  },
  "7184103": {
    "id": "7184103",
    "name": "Tardelcuende",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -2.639161,
      "latitude": 41.593501
    }
  },
  "7184104": {
    "id": "7184104",
    "name": "Quintana Redonda",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -2.609595,
      "latitude": 41.639634
    }
  },
  "7184753": {
    "id": "7184753",
    "name": "Los Molinos-Guadarrama",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.067079,
      "latitude": 40.706967
    }
  },
  "7186681": {
    "id": "7186681",
    "name": "Villabante",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -5.839132,
      "latitude": 42.464556
    }
  },
  "7188523": {
    "id": "7188523",
    "name": "Cercedilla",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.06574,
      "latitude": 40.737701
    }
  },
  "7189054": {
    "id": "7189054",
    "name": "Tui",
    "isMeta": true,
    "country": "ES",
    "location": {
      "longitude": -8.64302,
      "latitude": 42.0565
    }
  },
  "7196883": {
    "id": "7196883",
    "name": "San Yago",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.031113,
      "latitude": 40.617884
    }
  },
  "7197401": {
    "id": "7197401",
    "name": "San Fernando-Bahía Sur",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -6.206727,
      "latitude": 36.468185
    }
  },
  "7197696": {
    "id": "7197696",
    "name": "Los Negrales",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.021773,
      "latitude": 40.63846
    }
  },
  "7197772": {
    "id": "7197772",
    "name": "Alpedrete-Mataespesa",
    "isMeta": false,
    "country": "ES",
    "location": {
      "longitude": -4.035122,
      "latitude": 40.658057
    }
  },
  "7200002": {
    "id": "7200002",
    "name": "Beograd",
    "isMeta": false,
    "country": "RS",
    "location": {
      "longitude": 20.455466,
      "latitude": 44.808556
    }
  },
  "7200007": {
    "id": "7200007",
    "name": "Niš",
    "isMeta": false,
    "country": "RS",
    "location": {
      "longitude": 21.876975,
      "latitude": 43.316653
    }
  },
  "7200008": {
    "id": "7200008",
    "name": "Novi Sad",
    "isMeta": false,
    "country": "RS",
    "location": {
      "longitude": 19.829358,
      "latitude": 45.265909
    }
  },
  "7200010": {
    "id": "7200010",
    "name": "Ruma",
    "isMeta": false,
    "country": "RS",
    "location": {
      "longitude": 19.81778,
      "latitude": 44.989266
    }
  },
  "7200011": {
    "id": "7200011",
    "name": "Sremska Mitrovica",
    "isMeta": false,
    "country": "RS",
    "location": {
      "longitude": 19.614013,
      "latitude": 44.982803
    }
  },
  "7200014": {
    "id": "7200014",
    "name": "Valjevo",
    "isMeta": false,
    "country": "RS",
    "location": {
      "longitude": 19.907268,
      "latitude": 44.271091
    }
  },
  "7200050": {
    "id": "7200050",
    "name": "Prijepolje",
    "isMeta": false,
    "country": "RS",
    "location": {
      "longitude": 19.639785,
      "latitude": 43.392126
    }
  },
  "7200131": {
    "id": "7200131",
    "name": "Leskovac",
    "isMeta": false,
    "country": "RS",
    "location": {
      "longitude": 21.957698,
      "latitude": 42.996223
    }
  },
  "7200178": {
    "id": "7200178",
    "name": "Kraljevo",
    "isMeta": false,
    "country": "RS",
    "location": {
      "longitude": 20.69973,
      "latitude": 43.727217
    }
  },
  "7200233": {
    "id": "7200233",
    "name": "Požega",
    "isMeta": false,
    "country": "RS",
    "location": {
      "longitude": 20.029018,
      "latitude": 43.840211
    }
  },
  "7211016": {
    "id": "7211016",
    "name": "Vladičin Han",
    "isMeta": false,
    "country": "RS",
    "location": {
      "longitude": 22.062134,
      "latitude": 42.710121
    }
  },
  "7211207": {
    "id": "7211207",
    "name": "Priština",
    "isMeta": false,
    "country": "RS",
    "location": {
      "longitude": 21.151067,
      "latitude": 42.658934
    }
  },
  "7211314": {
    "id": "7211314",
    "name": "Peć",
    "isMeta": false,
    "country": "RS",
    "location": {
      "longitude": 20.304888,
      "latitude": 42.660391
    }
  },
  "7211408": {
    "id": "7211408",
    "name": "Prizren",
    "isMeta": false,
    "country": "RS",
    "location": {
      "longitude": 20.7283,
      "latitude": 42.212829
    }
  },
  "7213250": {
    "id": "7213250",
    "name": "Kragujevac",
    "isMeta": false,
    "country": "RS",
    "location": {
      "longitude": 20.92793,
      "latitude": 44.010334
    }
  },
  "7214060": {
    "id": "7214060",
    "name": "Zaječar",
    "isMeta": false,
    "country": "RS",
    "location": {
      "longitude": 22.272999,
      "latitude": 43.904765
    }
  },
  "7215151": {
    "id": "7215151",
    "name": "Uzice",
    "isMeta": false,
    "country": "RS",
    "location": {
      "longitude": 19.8393099,
      "latitude": 43.8535616
    }
  },
  "7225550": {
    "id": "7225550",
    "name": "Sombor",
    "isMeta": false,
    "country": "RS",
    "location": {
      "longitude": 19.1141023,
      "latitude": 45.7858709
    }
  },
  "7225670": {
    "id": "7225670",
    "name": "Apatin",
    "isMeta": false,
    "country": "RS",
    "location": {
      "longitude": 18.972586,
      "latitude": 45.676455
    }
  },
  "7231101": {
    "id": "7231101",
    "name": "Nikšić",
    "isMeta": false,
    "country": "ME",
    "location": {
      "longitude": 18.945015,
      "latitude": 42.769697
    }
  },
  "7231302": {
    "id": "7231302",
    "name": "Bijelo Polje",
    "isMeta": false,
    "country": "ME",
    "location": {
      "longitude": 19.7697121,
      "latitude": 43.0542177
    }
  },
  "7231305": {
    "id": "7231305",
    "name": "Mojkovac",
    "isMeta": false,
    "country": "ME",
    "location": {
      "longitude": 19.5861584,
      "latitude": 42.9529728
    }
  },
  "7231307": {
    "id": "7231307",
    "name": "Kolašin",
    "isMeta": false,
    "country": "ME",
    "location": {
      "longitude": 19.5374069,
      "latitude": 42.8196334
    }
  },
  "7253408": {
    "id": "7253408",
    "name": "Bihać",
    "isMeta": false,
    "country": "BA",
    "location": {
      "longitude": 15.886502,
      "latitude": 44.818617
    }
  },
  "7261203": {
    "id": "7261203",
    "name": "Kumanovo",
    "isMeta": false,
    "country": "MK",
    "location": {
      "longitude": 21.68501,
      "latitude": 42.130443
    }
  },
  "7261519": {
    "id": "7261519",
    "name": "Kićevo",
    "isMeta": false,
    "country": "MK",
    "location": {
      "longitude": 20.949929,
      "latitude": 41.512644
    }
  },
  "7261601": {
    "id": "7261601",
    "name": "Veles",
    "isMeta": false,
    "country": "MK",
    "location": {
      "longitude": 21.769288,
      "latitude": 41.724014
    }
  },
  "7261815": {
    "id": "7261815",
    "name": "Prilep",
    "isMeta": false,
    "country": "MK",
    "location": {
      "longitude": 21.538085,
      "latitude": 41.344068
    }
  },
  "7300001": {
    "id": "7300001",
    "name": "Athens",
    "isMeta": true,
    "country": "GR",
    "location": {
      "longitude": 23.720781,
      "latitude": 37.992323
    }
  },
  "7300006": {
    "id": "7300006",
    "name": "Larissa",
    "isMeta": true,
    "country": "GR",
    "location": {
      "longitude": 22.423015,
      "latitude": 39.629495
    }
  },
  "7300007": {
    "id": "7300007",
    "name": "Katerini",
    "isMeta": true,
    "country": "GR",
    "location": {
      "longitude": 22.5315416,
      "latitude": 40.2685064
    }
  },
  "7300013": {
    "id": "7300013",
    "name": "Alexandroupoli",
    "isMeta": true,
    "country": "GR",
    "location": {
      "longitude": 25.8917036,
      "latitude": 40.8481348
    }
  },
  "7300035": {
    "id": "7300035",
    "name": "Volos",
    "isMeta": true,
    "country": "GR",
    "location": {
      "longitude": 22.936457,
      "latitude": 39.364705
    }
  },
  "7300052": {
    "id": "7300052",
    "name": "Patras (Peloponnese)",
    "isMeta": true,
    "country": "GR",
    "location": {
      "longitude": 21.7350118,
      "latitude": 38.2499181
    }
  },
  "7300071": {
    "id": "7300071",
    "name": "Lamia",
    "isMeta": true,
    "country": "GR",
    "location": {
      "longitude": 22.4347332,
      "latitude": 38.8962063
    }
  },
  "7300415": {
    "id": "7300415",
    "name": "Thessaloniki",
    "isMeta": true,
    "country": "GR",
    "location": {
      "longitude": 22.92927,
      "latitude": 40.64447
    }
  },
  "7400002": {
    "id": "7400002",
    "name": "Stockholm Central",
    "isMeta": false,
    "country": "SE",
    "location": {
      "longitude": 18.057629,
      "latitude": 59.330009
    }
  },
  "7400003": {
    "id": "7400003",
    "name": "Göteborg Central",
    "isMeta": false,
    "country": "SE",
    "location": {
      "longitude": 11.973424,
      "latitude": 57.709308
    }
  },
  "7400004": {
    "id": "7400004",
    "name": "Malmö Central",
    "isMeta": false,
    "country": "SE",
    "location": {
      "longitude": 13.00126,
      "latitude": 55.60923
    }
  },
  "7400005": {
    "id": "7400005",
    "name": "Alvesta station",
    "isMeta": false,
    "country": "SE",
    "location": {
      "longitude": 14.556879,
      "latitude": 56.898481
    }
  },
  "7400006": {
    "id": "7400006",
    "name": "Hässleholm Central",
    "isMeta": false,
    "country": "SE",
    "location": {
      "longitude": 13.763923,
      "latitude": 56.158516
    }
  },
  "7400007": {
    "id": "7400007",
    "name": "Norrköping Central",
    "isMeta": false,
    "country": "SE",
    "location": {
      "longitude": 16.183675,
      "latitude": 58.596562
    }
  },
  "7400008": {
    "id": "7400008",
    "name": "Linköping Central",
    "isMeta": false,
    "country": "SE",
    "location": {
      "longitude": 15.626676,
      "latitude": 58.416013
    }
  },
  "7400010": {
    "id": "7400010",
    "name": "Tranås",
    "isMeta": true,
    "country": "SE",
    "location": {
      "longitude": 14.9759,
      "latitude": 58.039
    }
  },
  "7400014": {
    "id": "7400014",
    "name": "Halmstad Central",
    "isMeta": false,
    "country": "SE",
    "location": {
      "longitude": 12.8643,
      "latitude": 56.669211
    }
  },
  "7400016": {
    "id": "7400016",
    "name": "Varberg Station",
    "isMeta": false,
    "country": "SE",
    "location": {
      "longitude": 12.248413,
      "latitude": 57.109341
    }
  },
  "7400017": {
    "id": "7400017",
    "name": "Nässjö Central",
    "isMeta": false,
    "country": "SE",
    "location": {
      "longitude": 14.694783,
      "latitude": 57.652128
    }
  },
  "7400018": {
    "id": "7400018",
    "name": "Åstorp station",
    "isMeta": false,
    "country": "SE",
    "location": {
      "longitude": 12.948826,
      "latitude": 56.133913
    }
  },
  "7400019": {
    "id": "7400019",
    "name": "Kungsbacka Station",
    "isMeta": false,
    "country": "SE",
    "location": {
      "longitude": 12.079938,
      "latitude": 57.490187
    }
  },
  "7400025": {
    "id": "7400025",
    "name": "Ed Station",
    "isMeta": false,
    "country": "SE",
    "location": {
      "longitude": 11.932613,
      "latitude": 58.913476
    }
  },
  "7400028": {
    "id": "7400028",
    "name": "Älmhult station",
    "isMeta": false,
    "country": "SE",
    "location": {
      "longitude": 14.137263,
      "latitude": 56.550994
    }
  },
  "7400041": {
    "id": "7400041",
    "name": "Båstad station",
    "isMeta": false,
    "country": "SE",
    "location": {
      "longitude": 12.868723,
      "latitude": 56.425019
    }
  },
  "7400050": {
    "id": "7400050",
    "name": "Emmaboda station",
    "isMeta": false,
    "country": "SE",
    "location": {
      "longitude": 15.534933,
      "latitude": 56.629848
    }
  },
  "7400053": {
    "id": "7400053",
    "name": "Eslöv station",
    "isMeta": false,
    "country": "SE",
    "location": {
      "longitude": 13.304286,
      "latitude": 55.836235
    }
  },
  "7400075": {
    "id": "7400075",
    "name": "Karlshamn Station",
    "isMeta": false,
    "country": "SE",
    "location": {
      "longitude": 14.867816,
      "latitude": 56.176773
    }
  },
  "7400076": {
    "id": "7400076",
    "name": "Karlskrona Central",
    "isMeta": false,
    "country": "SE",
    "location": {
      "longitude": 15.585254,
      "latitude": 56.166319
    }
  },
  "7400081": {
    "id": "7400081",
    "name": "Kristianstad Central",
    "isMeta": false,
    "country": "SE",
    "location": {
      "longitude": 14.151052,
      "latitude": 56.031777
    }
  },
  "7400083": {
    "id": "7400083",
    "name": "Laholm station",
    "isMeta": false,
    "country": "SE",
    "location": {
      "longitude": 12.998554,
      "latitude": 56.501644
    }
  },
  "7400088": {
    "id": "7400088",
    "name": "Simrishamn Station",
    "isMeta": false,
    "country": "SE",
    "location": {
      "longitude": 14.352599,
      "latitude": 55.55418
    }
  },
  "7400102": {
    "id": "7400102",
    "name": "Uppsala Central",
    "isMeta": false,
    "country": "SE",
    "location": {
      "longitude": 17.64675,
      "latitude": 59.858099
    }
  },
  "7400106": {
    "id": "7400106",
    "name": "Växjö station",
    "isMeta": false,
    "country": "SE",
    "location": {
      "longitude": 14.806806,
      "latitude": 56.876889
    }
  },
  "7400115": {
    "id": "7400115",
    "name": "Lund Central",
    "isMeta": false,
    "country": "SE",
    "location": {
      "longitude": 13.186582,
      "latitude": 55.705523
    }
  },
  "7400123": {
    "id": "7400123",
    "name": "Nybro Station",
    "isMeta": false,
    "country": "SE",
    "location": {
      "longitude": 15.908875,
      "latitude": 56.742357
    }
  },
  "7400127": {
    "id": "7400127",
    "name": "Sölvesborg station",
    "isMeta": false,
    "country": "SE",
    "location": {
      "longitude": 14.583928,
      "latitude": 56.049873
    }
  },
  "7400128": {
    "id": "7400128",
    "name": "Ystad Station",
    "isMeta": false,
    "country": "SE",
    "location": {
      "longitude": 13.824924,
      "latitude": 55.427397
    }
  },
  "7400135": {
    "id": "7400135",
    "name": "Ronneby station",
    "isMeta": false,
    "country": "SE",
    "location": {
      "longitude": 15.283351,
      "latitude": 56.206636
    }
  },
  "7400147": {
    "id": "7400147",
    "name": "Öxnered station",
    "isMeta": false,
    "country": "SE",
    "location": {
      "longitude": 12.273826,
      "latitude": 58.359085
    }
  },
  "7400153": {
    "id": "7400153",
    "name": "Perstorp Station",
    "isMeta": false,
    "country": "SE",
    "location": {
      "longitude": 13.397451,
      "latitude": 56.13643
    }
  },
  "7400154": {
    "id": "7400154",
    "name": "Helsingborg Central",
    "isMeta": false,
    "country": "SE",
    "location": {
      "longitude": 12.695069,
      "latitude": 56.043688
    }
  },
  "7400156": {
    "id": "7400156",
    "name": "Klippan station",
    "isMeta": false,
    "country": "SE",
    "location": {
      "longitude": 13.129653,
      "latitude": 56.130704
    }
  },
  "7400157": {
    "id": "7400157",
    "name": "Osby",
    "isMeta": false,
    "country": "SE",
    "location": {
      "longitude": 13.994811,
      "latitude": 56.379876
    }
  },
  "7400185": {
    "id": "7400185",
    "name": "Vinslöv station",
    "isMeta": false,
    "country": "SE",
    "location": {
      "longitude": 13.916964,
      "latitude": 56.104851
    }
  },
  "7400286": {
    "id": "7400286",
    "name": "Höör Station",
    "isMeta": false,
    "country": "SE",
    "location": {
      "longitude": 13.541844,
      "latitude": 55.936923
    }
  },
  "7400287": {
    "id": "7400287",
    "name": "Tyringe station",
    "isMeta": false,
    "country": "SE",
    "location": {
      "longitude": 13.598548,
      "latitude": 56.15964
    }
  },
  "7400288": {
    "id": "7400288",
    "name": "Bräkne-Hoby station",
    "isMeta": false,
    "country": "SE",
    "location": {
      "longitude": 15.116026,
      "latitude": 56.231059
    }
  },
  "7400289": {
    "id": "7400289",
    "name": "Mörrum station",
    "isMeta": false,
    "country": "SE",
    "location": {
      "longitude": 14.743262,
      "latitude": 56.186832
    }
  },
  "7400290": {
    "id": "7400290",
    "name": "Bromölla station",
    "isMeta": false,
    "country": "SE",
    "location": {
      "longitude": 14.480759,
      "latitude": 56.067249
    }
  },
  "7400300": {
    "id": "7400300",
    "name": "Lessebo station",
    "isMeta": false,
    "country": "SE",
    "location": {
      "longitude": 15.258658,
      "latitude": 56.750285
    }
  },
  "7400301": {
    "id": "7400301",
    "name": "Stehag station",
    "isMeta": false,
    "country": "SE",
    "location": {
      "longitude": 13.392911,
      "latitude": 55.900301
    }
  },
  "7400302": {
    "id": "7400302",
    "name": "Örtofta station",
    "isMeta": false,
    "country": "SE",
    "location": {
      "longitude": 13.242926,
      "latitude": 55.778569
    }
  },
  "7400307": {
    "id": "7400307",
    "name": "Billeberga station",
    "isMeta": false,
    "country": "SE",
    "location": {
      "longitude": 12.995534,
      "latitude": 55.884076
    }
  },
  "7400309": {
    "id": "7400309",
    "name": "Kävlinge Station",
    "isMeta": false,
    "country": "SE",
    "location": {
      "longitude": 13.111683,
      "latitude": 55.793905
    }
  },
  "7400311": {
    "id": "7400311",
    "name": "Landskrona station",
    "isMeta": false,
    "country": "SE",
    "location": {
      "longitude": 12.85719,
      "latitude": 55.879087
    }
  },
  "7400312": {
    "id": "7400312",
    "name": "Dösjebro station",
    "isMeta": false,
    "country": "SE",
    "location": {
      "longitude": 13.032794,
      "latitude": 55.823093
    }
  },
  "7400315": {
    "id": "7400315",
    "name": "Svedala station",
    "isMeta": false,
    "country": "SE",
    "location": {
      "longitude": 13.232328,
      "latitude": 55.506906
    }
  },
  "7400316": {
    "id": "7400316",
    "name": "Skurup Station",
    "isMeta": false,
    "country": "SE",
    "location": {
      "longitude": 13.498894,
      "latitude": 55.480172
    }
  },
  "7400317": {
    "id": "7400317",
    "name": "Rydsgaard station",
    "isMeta": false,
    "country": "SE",
    "location": {
      "longitude": 13.587788,
      "latitude": 55.474383
    }
  },
  "7400318": {
    "id": "7400318",
    "name": "Köpingebro station",
    "isMeta": false,
    "country": "SE",
    "location": {
      "longitude": 13.933495,
      "latitude": 55.456369
    }
  },
  "7400320": {
    "id": "7400320",
    "name": "Tomelilla Station",
    "isMeta": false,
    "country": "SE",
    "location": {
      "longitude": 13.94937,
      "latitude": 55.54645
    }
  },
  "7400321": {
    "id": "7400321",
    "name": "Lunnarp station",
    "isMeta": false,
    "country": "SE",
    "location": {
      "longitude": 14.042301,
      "latitude": 55.541029
    }
  },
  "7400322": {
    "id": "7400322",
    "name": "Smedstorp (Tomelilla kn) stn",
    "isMeta": false,
    "country": "SE",
    "location": {
      "longitude": 14.117316,
      "latitude": 55.54965
    }
  },
  "7400323": {
    "id": "7400323",
    "name": "Gärsnäs station",
    "isMeta": false,
    "country": "SE",
    "location": {
      "longitude": 14.18113,
      "latitude": 55.546513
    }
  },
  "7400423": {
    "id": "7400423",
    "name": "Hjärup station",
    "isMeta": false,
    "country": "SE",
    "location": {
      "longitude": 13.135811,
      "latitude": 55.673701
    }
  },
  "7400471": {
    "id": "7400471",
    "name": "Bjuv Station",
    "isMeta": false,
    "country": "SE",
    "location": {
      "longitude": 12.911781,
      "latitude": 56.083007
    }
  },
  "7400517": {
    "id": "7400517",
    "name": "Hovmantorp station",
    "isMeta": false,
    "country": "SE",
    "location": {
      "longitude": 15.139884,
      "latitude": 56.78626
    }
  },
  "7400566": {
    "id": "7400566",
    "name": "Mölndal Nedre station",
    "isMeta": false,
    "country": "SE",
    "location": {
      "longitude": 12.018847,
      "latitude": 57.655912
    }
  },
  "7400589": {
    "id": "7400589",
    "name": "Paarp (Helsingborg kn) station",
    "isMeta": false,
    "country": "SE",
    "location": {
      "longitude": 12.817062,
      "latitude": 56.029126
    }
  },
  "7400671": {
    "id": "7400671",
    "name": "Vittsjö",
    "isMeta": false,
    "country": "SE",
    "location": {
      "longitude": 13.657221,
      "latitude": 56.342606
    }
  },
  "7400700": {
    "id": "7400700",
    "name": "Södertälje Syd station",
    "isMeta": false,
    "country": "SE",
    "location": {
      "longitude": 17.645672,
      "latitude": 59.162513
    }
  },
  "7400732": {
    "id": "7400732",
    "name": "Oxie station",
    "isMeta": false,
    "country": "SE",
    "location": {
      "longitude": 13.096671,
      "latitude": 55.541874
    }
  },
  "7400858": {
    "id": "7400858",
    "name": "Rydebäck station",
    "isMeta": false,
    "country": "SE",
    "location": {
      "longitude": 12.783317,
      "latitude": 55.965743
    }
  },
  "7400865": {
    "id": "7400865",
    "name": "Taagarp (Svalöv kn) station",
    "isMeta": false,
    "country": "SE",
    "location": {
      "longitude": 12.952386,
      "latitude": 55.926649
    }
  },
  "7400965": {
    "id": "7400965",
    "name": "Falkenberg",
    "isMeta": false,
    "country": "SE",
    "location": {
      "longitude": 12.50831,
      "latitude": 56.919804
    }
  },
  "7400988": {
    "id": "7400988",
    "name": "Sösdala station",
    "isMeta": false,
    "country": "SE",
    "location": {
      "longitude": 13.680521,
      "latitude": 56.036533
    }
  },
  "7401001": {
    "id": "7401001",
    "name": "Bjarnum Station",
    "isMeta": false,
    "country": "SE",
    "location": {
      "longitude": 13.690679,
      "latitude": 56.285102
    }
  },
  "7402193": {
    "id": "7402193",
    "name": "Kvidinge",
    "isMeta": true,
    "country": "SE",
    "location": {
      "longitude": 13.039248,
      "latitude": 56.13234
    }
  },
  "7404196": {
    "id": "7404196",
    "name": "Trelleborg Centralstation",
    "isMeta": false,
    "country": "SE",
    "location": {
      "longitude": 13.159057,
      "latitude": 55.371574
    }
  },
  "7404873": {
    "id": "7404873",
    "name": "Onnestad Station",
    "isMeta": false,
    "country": "SE",
    "location": {
      "longitude": 14.002182,
      "latitude": 56.078333
    }
  },
  "7489030": {
    "id": "7489030",
    "name": "Kattarp station",
    "isMeta": false,
    "country": "SE",
    "location": {
      "longitude": 12.778247,
      "latitude": 56.144098
    }
  },
  "7496000": {
    "id": "7496000",
    "name": "Stockholm",
    "isMeta": true,
    "country": "SE",
    "location": {
      "longitude": 18.057629,
      "latitude": 59.330009
    }
  },
  "7496019": {
    "id": "7496019",
    "name": "Stockholm Airport (Arlanda)",
    "isMeta": false,
    "country": "SE",
    "location": {
      "longitude": 17.9237807,
      "latitude": 59.6497622
    }
  },
  "7500003": {
    "id": "7500003",
    "name": "Istanbul",
    "isMeta": false,
    "country": "TR",
    "location": {
      "longitude": 28.97828,
      "latitude": 41.015005
    }
  },
  "7502903": {
    "id": "7502903",
    "name": "Ankara",
    "isMeta": false,
    "country": "TR",
    "location": {
      "longitude": 32.843705,
      "latitude": 39.935977
    }
  },
  "7521920": {
    "id": "7521920",
    "name": "Izmir",
    "isMeta": false,
    "country": "TR",
    "location": {
      "longitude": 27.143796,
      "latitude": 38.422457
    }
  },
  "7600002": {
    "id": "7600002",
    "name": "Moss",
    "isMeta": true,
    "country": "NO",
    "location": {
      "longitude": 10.657026,
      "latitude": 59.431848
    }
  },
  "7600003": {
    "id": "7600003",
    "name": "Fredrikstad",
    "isMeta": true,
    "country": "NO",
    "location": {
      "longitude": 10.950704,
      "latitude": 59.209078
    }
  },
  "7600066": {
    "id": "7600066",
    "name": "Sarpsborg",
    "isMeta": true,
    "country": "NO",
    "location": {
      "longitude": 11.118622,
      "latitude": 59.286178
    }
  },
  "7600165": {
    "id": "7600165",
    "name": "As",
    "isMeta": true,
    "country": "NO",
    "location": {
      "longitude": 10.794993,
      "latitude": 59.663042
    }
  },
  "7800003": {
    "id": "7800003",
    "name": "Pula",
    "isMeta": true,
    "country": "HR",
    "location": {
      "longitude": 13.847199,
      "latitude": 44.879706
    }
  },
  "7800006": {
    "id": "7800006",
    "name": "Knin",
    "isMeta": false,
    "country": "HR",
    "location": {
      "longitude": 16.198256,
      "latitude": 44.036742
    }
  },
  "7800007": {
    "id": "7800007",
    "name": "Koprivnica",
    "isMeta": false,
    "country": "HR",
    "location": {
      "longitude": 16.817468,
      "latitude": 46.16487
    }
  },
  "7800008": {
    "id": "7800008",
    "name": "Nova Gradiška",
    "isMeta": true,
    "country": "HR",
    "location": {
      "longitude": 17.3839626,
      "latitude": 45.2581558
    }
  },
  "7800009": {
    "id": "7800009",
    "name": "Novska",
    "isMeta": true,
    "country": "HR",
    "location": {
      "longitude": 16.9785966,
      "latitude": 45.33999
    }
  },
  "7800010": {
    "id": "7800010",
    "name": "Banova Jaruga",
    "isMeta": false,
    "country": "HR",
    "location": {
      "longitude": 16.87651,
      "latitude": 45.445936
    }
  },
  "7800011": {
    "id": "7800011",
    "name": "Osijek",
    "isMeta": false,
    "country": "HR",
    "location": {
      "longitude": 18.679953,
      "latitude": 45.553327
    }
  },
  "7800012": {
    "id": "7800012",
    "name": "Perkovic",
    "isMeta": false,
    "country": "HR",
    "location": {
      "longitude": 16.11773,
      "latitude": 43.675664
    }
  },
  "7800013": {
    "id": "7800013",
    "name": "Rijeka",
    "isMeta": false,
    "country": "HR",
    "location": {
      "longitude": 14.430248,
      "latitude": 45.330083
    }
  },
  "7800014": {
    "id": "7800014",
    "name": "Sisak",
    "isMeta": false,
    "country": "HR",
    "location": {
      "longitude": 16.373141,
      "latitude": 45.491997
    }
  },
  "7800015": {
    "id": "7800015",
    "name": "Slavonski Brod",
    "isMeta": true,
    "country": "HR",
    "location": {
      "longitude": 18.002985,
      "latitude": 45.163837
    }
  },
  "7800016": {
    "id": "7800016",
    "name": "Split",
    "isMeta": true,
    "country": "HR",
    "location": {
      "longitude": 16.443212,
      "latitude": 43.504518
    }
  },
  "7800017": {
    "id": "7800017",
    "name": "Šibenik",
    "isMeta": false,
    "country": "HR",
    "location": {
      "longitude": 15.898106,
      "latitude": 43.730039
    }
  },
  "7800018": {
    "id": "7800018",
    "name": "Vinkovci Autobusni Kolodvor",
    "isMeta": false,
    "country": "HR",
    "location": {
      "longitude": 18.802039,
      "latitude": 45.29911
    }
  },
  "7800019": {
    "id": "7800019",
    "name": "Zadar",
    "isMeta": false,
    "country": "HR",
    "location": {
      "longitude": 15.242639,
      "latitude": 44.10569
    }
  },
  "7800020": {
    "id": "7800020",
    "name": "Zagreb Glavni kolodvor",
    "isMeta": false,
    "country": "HR",
    "location": {
      "longitude": 15.978705,
      "latitude": 45.804438
    }
  },
  "7800023": {
    "id": "7800023",
    "name": "Delnice",
    "isMeta": true,
    "country": "HR",
    "location": {
      "longitude": 14.7955136,
      "latitude": 45.3929244
    }
  },
  "7800024": {
    "id": "7800024",
    "name": "Dugo Selo",
    "isMeta": false,
    "country": "HR",
    "location": {
      "longitude": 16.235381,
      "latitude": 45.801442
    }
  },
  "7800025": {
    "id": "7800025",
    "name": "Gospić",
    "isMeta": true,
    "country": "HR",
    "location": {
      "longitude": 15.3750495,
      "latitude": 44.5469337
    }
  },
  "7800026": {
    "id": "7800026",
    "name": "Gračac",
    "isMeta": true,
    "country": "HR",
    "location": {
      "longitude": 15.845201,
      "latitude": 44.295935
    }
  },
  "7800028": {
    "id": "7800028",
    "name": "Krizevci",
    "isMeta": true,
    "country": "HR",
    "location": {
      "longitude": 16.543217,
      "latitude": 46.00645
    }
  },
  "7800030": {
    "id": "7800030",
    "name": "Virovitica",
    "isMeta": true,
    "country": "HR",
    "location": {
      "longitude": 17.3855429,
      "latitude": 45.8316463
    }
  },
  "7800032": {
    "id": "7800032",
    "name": "Ivanić Grad",
    "isMeta": true,
    "country": "HR",
    "location": {
      "longitude": 16.39651,
      "latitude": 45.707331
    }
  },
  "7800034": {
    "id": "7800034",
    "name": "Kutina",
    "isMeta": true,
    "country": "HR",
    "location": {
      "longitude": 16.7763267,
      "latitude": 45.4792811
    }
  },
  "7800036": {
    "id": "7800036",
    "name": "Okučani",
    "isMeta": true,
    "country": "HR",
    "location": {
      "longitude": 17.20826275,
      "latitude": 45.2409413
    }
  },
  "7800039": {
    "id": "7800039",
    "name": "Našice",
    "isMeta": true,
    "country": "HR",
    "location": {
      "longitude": 18.0951118,
      "latitude": 45.4946861
    }
  },
  "7800040": {
    "id": "7800040",
    "name": "Ogulin",
    "isMeta": true,
    "country": "HR",
    "location": {
      "longitude": 15.2311081,
      "latitude": 45.2656139
    }
  },
  "7800045": {
    "id": "7800045",
    "name": "Fužine",
    "isMeta": true,
    "country": "HR",
    "location": {
      "longitude": 14.7135413999999,
      "latitude": 45.3051747
    }
  },
  "7800046": {
    "id": "7800046",
    "name": "Nova Kapela",
    "isMeta": false,
    "country": "HR",
    "location": {
      "longitude": 17.650409,
      "latitude": 45.189771
    }
  },
  "7800048": {
    "id": "7800048",
    "name": "Karlovac",
    "isMeta": true,
    "country": "HR",
    "location": {
      "longitude": 15.5552683,
      "latitude": 45.4928973
    }
  },
  "7800050": {
    "id": "7800050",
    "name": "Benkovac",
    "isMeta": true,
    "country": "HR",
    "location": {
      "longitude": 15.6111002,
      "latitude": 44.0334458
    }
  },
  "7800054": {
    "id": "7800054",
    "name": "Čakovec",
    "isMeta": true,
    "country": "HR",
    "location": {
      "longitude": 16.4379653,
      "latitude": 46.3897383
    }
  },
  "7800055": {
    "id": "7800055",
    "name": "Daruvar",
    "isMeta": true,
    "country": "HR",
    "location": {
      "longitude": 17.22541,
      "latitude": 45.58924
    }
  },
  "7800056": {
    "id": "7800056",
    "name": "Drniš",
    "isMeta": true,
    "country": "HR",
    "location": {
      "longitude": 16.158748,
      "latitude": 43.85961
    }
  },
  "7800057": {
    "id": "7800057",
    "name": "Kotoriba",
    "isMeta": false,
    "country": "HR",
    "location": {
      "longitude": 16.808461,
      "latitude": 46.353613
    }
  },
  "7800060": {
    "id": "7800060",
    "name": "Vrbovec",
    "isMeta": true,
    "country": "HR",
    "location": {
      "longitude": 16.4130055904388,
      "latitude": 45.8857588874548
    }
  },
  "7800061": {
    "id": "7800061",
    "name": "Zaprešić",
    "isMeta": true,
    "country": "HR",
    "location": {
      "longitude": 15.804836,
      "latitude": 45.85989
    }
  },
  "7800067": {
    "id": "7800067",
    "name": "Šapjane",
    "isMeta": true,
    "country": "HR",
    "location": {
      "longitude": 14.2492,
      "latitude": 45.4828
    }
  },
  "7800073": {
    "id": "7800073",
    "name": "Vukovar",
    "isMeta": true,
    "country": "HR",
    "location": {
      "longitude": 19.0010204,
      "latitude": 45.3452377
    }
  },
  "7800086": {
    "id": "7800086",
    "name": "Sesvete",
    "isMeta": true,
    "country": "HR",
    "location": {
      "longitude": 16.109878,
      "latitude": 45.830354
    }
  },
  "7800087": {
    "id": "7800087",
    "name": "Oriovac",
    "isMeta": true,
    "country": "HR",
    "location": {
      "longitude": 17.755178,
      "latitude": 45.160897
    }
  },
  "7800088": {
    "id": "7800088",
    "name": "Garčin",
    "isMeta": true,
    "country": "HR",
    "location": {
      "longitude": 18.179896,
      "latitude": 45.18251
    }
  },
  "7800090": {
    "id": "7800090",
    "name": "Stari Mikanovci",
    "isMeta": false,
    "country": "HR",
    "location": {
      "longitude": 18.548863,
      "latitude": 45.268256
    }
  },
  "7800091": {
    "id": "7800091",
    "name": "Ivankovo",
    "isMeta": true,
    "country": "HR",
    "location": {
      "longitude": 18.66619,
      "latitude": 45.27844
    }
  },
  "7800117": {
    "id": "7800117",
    "name": "Beli Manastir",
    "isMeta": true,
    "country": "HR",
    "location": {
      "longitude": 18.6107524,
      "latitude": 45.7728664
    }
  },
  "7800228": {
    "id": "7800228",
    "name": "Bršadin",
    "isMeta": true,
    "country": "HR",
    "location": {
      "longitude": 18.9109059,
      "latitude": 45.3614839
    }
  },
  "7800239": {
    "id": "7800239",
    "name": "Cerna",
    "isMeta": true,
    "country": "HR",
    "location": {
      "longitude": 18.698902,
      "latitude": 45.194184
    }
  },
  "7800247": {
    "id": "7800247",
    "name": "Ceminac",
    "isMeta": true,
    "country": "HR",
    "location": {
      "longitude": 18.655448,
      "latitude": 45.685562
    }
  },
  "7800248": {
    "id": "7800248",
    "name": "Čepin",
    "isMeta": true,
    "country": "HR",
    "location": {
      "longitude": 18.577289,
      "latitude": 45.523806
    }
  },
  "7800253": {
    "id": "7800253",
    "name": "Darda",
    "isMeta": true,
    "country": "HR",
    "location": {
      "longitude": 18.6991,
      "latitude": 45.634054
    }
  },
  "7800279": {
    "id": "7800279",
    "name": "Duga Resa",
    "isMeta": true,
    "country": "HR",
    "location": {
      "longitude": 15.49160255,
      "latitude": 45.4582697
    }
  },
  "7800286": {
    "id": "7800286",
    "name": "Generalski Stol",
    "isMeta": true,
    "country": "HR",
    "location": {
      "longitude": 15.3748986,
      "latitude": 45.3479117
    }
  },
  "7800315": {
    "id": "7800315",
    "name": "Jastrebarsko",
    "isMeta": true,
    "country": "HR",
    "location": {
      "longitude": 15.6507903,
      "latitude": 45.6717716
    }
  },
  "7800317": {
    "id": "7800317",
    "name": "Josipdol",
    "isMeta": true,
    "country": "HR",
    "location": {
      "longitude": 15.2850122,
      "latitude": 45.1892673
    }
  },
  "7800328": {
    "id": "7800328",
    "name": "Klostar",
    "isMeta": false,
    "country": "HR",
    "location": {
      "longitude": 17.139534,
      "latitude": 45.98128
    }
  },
  "7800356": {
    "id": "7800356",
    "name": "Lepavina",
    "isMeta": false,
    "country": "HR",
    "location": {
      "longitude": 16.685426,
      "latitude": 46.097681
    }
  },
  "7800361": {
    "id": "7800361",
    "name": "Lipik",
    "isMeta": true,
    "country": "HR",
    "location": {
      "longitude": 17.16101,
      "latitude": 45.41461
    }
  },
  "7800363": {
    "id": "7800363",
    "name": "Lipovljani",
    "isMeta": true,
    "country": "HR",
    "location": {
      "longitude": 16.882416,
      "latitude": 45.386904
    }
  },
  "7800366": {
    "id": "7800366",
    "name": "Lokve",
    "isMeta": true,
    "country": "HR",
    "location": {
      "longitude": 14.74928,
      "latitude": 45.35784
    }
  },
  "7800369": {
    "id": "7800369",
    "name": "Ludbreg",
    "isMeta": true,
    "country": "HR",
    "location": {
      "longitude": 16.6157314,
      "latitude": 46.2534684
    }
  },
  "7800378": {
    "id": "7800378",
    "name": "Mala Subotica",
    "isMeta": true,
    "country": "HR",
    "location": {
      "longitude": 16.528852,
      "latitude": 46.3915582
    }
  },
  "7800394": {
    "id": "7800394",
    "name": "Mucna Reka",
    "isMeta": false,
    "country": "HR",
    "location": {
      "longitude": 16.763677,
      "latitude": 46.124865
    }
  },
  "7800404": {
    "id": "7800404",
    "name": "Novi Marof",
    "isMeta": true,
    "country": "HR",
    "location": {
      "longitude": 16.3353346,
      "latitude": 46.1669272
    }
  },
  "7800407": {
    "id": "7800407",
    "name": "Novoselec",
    "isMeta": true,
    "country": "HR",
    "location": {
      "longitude": 16.5302,
      "latitude": 45.649156
    }
  },
  "7800423": {
    "id": "7800423",
    "name": "Pakrac",
    "isMeta": true,
    "country": "HR",
    "location": {
      "longitude": 17.18922,
      "latitude": 45.43707
    }
  },
  "7800427": {
    "id": "7800427",
    "name": "Pcelic",
    "isMeta": false,
    "country": "HR",
    "location": {
      "longitude": 17.525531,
      "latitude": 45.780335
    }
  },
  "7800431": {
    "id": "7800431",
    "name": "Perušić",
    "isMeta": true,
    "country": "HR",
    "location": {
      "longitude": 15.3828021,
      "latitude": 44.65774685
    }
  },
  "7800434": {
    "id": "7800434",
    "name": "Pitomača",
    "isMeta": true,
    "country": "HR",
    "location": {
      "longitude": 17.2326521,
      "latitude": 45.9501067
    }
  },
  "7800439": {
    "id": "7800439",
    "name": "Pleternica",
    "isMeta": true,
    "country": "HR",
    "location": {
      "longitude": 17.809815,
      "latitude": 45.287016
    }
  },
  "7800446": {
    "id": "7800446",
    "name": "Popovača",
    "isMeta": true,
    "country": "HR",
    "location": {
      "longitude": 16.6271439,
      "latitude": 45.5708879
    }
  },
  "7800483": {
    "id": "7800483",
    "name": "Sibinj",
    "isMeta": true,
    "country": "HR",
    "location": {
      "longitude": 17.904687,
      "latitude": 45.18106
    }
  },
  "7800485": {
    "id": "7800485",
    "name": "Sirac",
    "isMeta": true,
    "country": "HR",
    "location": {
      "longitude": 17.241085,
      "latitude": 45.529878
    }
  },
  "7800500": {
    "id": "7800500",
    "name": "Staro Petrovo Selo",
    "isMeta": false,
    "country": "HR",
    "location": {
      "longitude": 17.527284,
      "latitude": 45.22197
    }
  },
  "7800511": {
    "id": "7800511",
    "name": "Sveti Ivan Zabno",
    "isMeta": false,
    "country": "HR",
    "location": {
      "longitude": 16.621099,
      "latitude": 45.945233
    }
  },
  "7800526": {
    "id": "7800526",
    "name": "Turčin",
    "isMeta": true,
    "country": "HR",
    "location": {
      "longitude": 16.3594061,
      "latitude": 46.259273
    }
  },
  "7800537": {
    "id": "7800537",
    "name": "Virje",
    "isMeta": true,
    "country": "HR",
    "location": {
      "longitude": 17.002799,
      "latitude": 46.069716
    }
  },
  "7800543": {
    "id": "7800543",
    "name": "Vladislavci",
    "isMeta": true,
    "country": "HR",
    "location": {
      "longitude": 18.558535,
      "latitude": 45.475556
    }
  },
  "7800553": {
    "id": "7800553",
    "name": "Vrbovsko",
    "isMeta": true,
    "country": "HR",
    "location": {
      "longitude": 15.0764756999999,
      "latitude": 45.3733168
    }
  },
  "7871502": {
    "id": "7871502",
    "name": "Gabos",
    "isMeta": false,
    "country": "HR",
    "location": {
      "longitude": 18.74338,
      "latitude": 45.354426
    }
  },
  "7871504": {
    "id": "7871504",
    "name": "Laslovo-Korod",
    "isMeta": false,
    "country": "HR",
    "location": {
      "longitude": 18.706875,
      "latitude": 45.415004
    }
  },
  "7875111": {
    "id": "7875111",
    "name": "Ostarije",
    "isMeta": true,
    "country": "HR",
    "location": {
      "longitude": 15.296389,
      "latitude": 45.234444
    }
  },
  "7878680": {
    "id": "7878680",
    "name": "Ploče",
    "isMeta": false,
    "country": "HR",
    "location": {
      "longitude": 17.433408,
      "latitude": 43.048585
    }
  },
  "7889044": {
    "id": "7889044",
    "name": "Varaždin Autobusni Kolodvor",
    "isMeta": false,
    "country": "HR",
    "location": {
      "longitude": 16.334398,
      "latitude": 46.3042
    }
  },
  "7889050": {
    "id": "7889050",
    "name": "Županja",
    "isMeta": true,
    "country": "HR",
    "location": {
      "longitude": 18.6945072,
      "latitude": 45.072074
    }
  },
  "7896001": {
    "id": "7896001",
    "name": "Zagreb",
    "isMeta": true,
    "country": "HR",
    "location": {
      "longitude": 15.978478,
      "latitude": 45.804453
    }
  },
  "7900001": {
    "id": "7900001",
    "name": "Jesenice",
    "isMeta": false,
    "country": "SI",
    "location": {
      "longitude": 14.053304,
      "latitude": 46.43635
    }
  },
  "7900002": {
    "id": "7900002",
    "name": "Lesce Bled",
    "isMeta": false,
    "country": "SI",
    "location": {
      "longitude": 14.157632,
      "latitude": 46.360427
    }
  },
  "7900003": {
    "id": "7900003",
    "name": "Ljubljana",
    "isMeta": false,
    "country": "SI",
    "location": {
      "longitude": 14.51294,
      "latitude": 46.058686
    }
  },
  "7900004": {
    "id": "7900004",
    "name": "Zidani Most",
    "isMeta": false,
    "country": "SI",
    "location": {
      "longitude": 15.170708,
      "latitude": 46.085267
    }
  },
  "7900005": {
    "id": "7900005",
    "name": "Celje",
    "isMeta": false,
    "country": "SI",
    "location": {
      "longitude": 15.268259,
      "latitude": 46.228564
    }
  },
  "7900006": {
    "id": "7900006",
    "name": "Maribor",
    "isMeta": false,
    "country": "SI",
    "location": {
      "longitude": 15.658013,
      "latitude": 46.562064
    }
  },
  "7900010": {
    "id": "7900010",
    "name": "Nova Gorica",
    "isMeta": true,
    "country": "SI",
    "location": {
      "longitude": 13.6479279,
      "latitude": 45.9551312
    }
  },
  "7900011": {
    "id": "7900011",
    "name": "Pivka",
    "isMeta": false,
    "country": "SI",
    "location": {
      "longitude": 14.191144,
      "latitude": 45.67571
    }
  },
  "7900012": {
    "id": "7900012",
    "name": "Postojna",
    "isMeta": false,
    "country": "SI",
    "location": {
      "longitude": 14.221276,
      "latitude": 45.772928
    }
  },
  "7900013": {
    "id": "7900013",
    "name": "Koper",
    "isMeta": false,
    "country": "SI",
    "location": {
      "longitude": 13.739364,
      "latitude": 45.539199
    }
  },
  "7900014": {
    "id": "7900014",
    "name": "Kranj",
    "isMeta": false,
    "country": "SI",
    "location": {
      "longitude": 14.348168,
      "latitude": 46.23901
    }
  },
  "7900015": {
    "id": "7900015",
    "name": "Bohinjska Bistrica",
    "isMeta": true,
    "country": "SI",
    "location": {
      "longitude": 13.959204,
      "latitude": 46.274364
    }
  },
  "7900016": {
    "id": "7900016",
    "name": "Brežice",
    "isMeta": true,
    "country": "SI",
    "location": {
      "longitude": 15.59911304999995,
      "latitude": 45.8998629
    }
  },
  "7900017": {
    "id": "7900017",
    "name": "Dobova",
    "isMeta": false,
    "country": "SI",
    "location": {
      "longitude": 15.654552,
      "latitude": 45.898804
    }
  },
  "7900018": {
    "id": "7900018",
    "name": "Sevnica",
    "isMeta": true,
    "country": "SI",
    "location": {
      "longitude": 15.301024,
      "latitude": 46.009461
    }
  },
  "7900020": {
    "id": "7900020",
    "name": "Most na Soci",
    "isMeta": false,
    "country": "SI",
    "location": {
      "longitude": 13.759159,
      "latitude": 46.146016
    }
  },
  "7900023": {
    "id": "7900023",
    "name": "Prevalje",
    "isMeta": true,
    "country": "SI",
    "location": {
      "longitude": 14.922587,
      "latitude": 46.549686
    }
  },
  "7900025": {
    "id": "7900025",
    "name": "Novo Mesto",
    "isMeta": true,
    "country": "SI",
    "location": {
      "longitude": 15.1607908,
      "latitude": 45.8020954
    }
  },
  "7900026": {
    "id": "7900026",
    "name": "Ormoz",
    "isMeta": true,
    "country": "SI",
    "location": {
      "longitude": 16.156779,
      "latitude": 46.402784
    }
  },
  "7900027": {
    "id": "7900027",
    "name": "Ptuj Avtobusna Postaja",
    "isMeta": false,
    "country": "SI",
    "location": {
      "longitude": 15.876302,
      "latitude": 46.421194
    }
  },
  "7900029": {
    "id": "7900029",
    "name": "Ilirska Bistrica",
    "isMeta": true,
    "country": "SI",
    "location": {
      "longitude": 14.24183,
      "latitude": 45.56642
    }
  },
  "7900030": {
    "id": "7900030",
    "name": "Krsko",
    "isMeta": true,
    "country": "SI",
    "location": {
      "longitude": 15.493286,
      "latitude": 45.956227
    }
  },
  "7900031": {
    "id": "7900031",
    "name": "Lasko",
    "isMeta": true,
    "country": "SI",
    "location": {
      "longitude": 15.231753,
      "latitude": 46.155248
    }
  },
  "7900034": {
    "id": "7900034",
    "name": "Rimske Toplice",
    "isMeta": false,
    "country": "SI",
    "location": {
      "longitude": 15.202907,
      "latitude": 46.123831
    }
  },
  "7900037": {
    "id": "7900037",
    "name": "Trbovlje",
    "isMeta": true,
    "country": "SI",
    "location": {
      "longitude": 15.057,
      "latitude": 46.1867
    }
  },
  "7900039": {
    "id": "7900039",
    "name": "Hrpelje-Kozina",
    "isMeta": false,
    "country": "SI",
    "location": {
      "longitude": 13.935203,
      "latitude": 45.604048
    }
  },
  "7900048": {
    "id": "7900048",
    "name": "Skofja Loka",
    "isMeta": true,
    "country": "SI",
    "location": {
      "longitude": 14.334216,
      "latitude": 46.174728
    }
  },
  "7900054": {
    "id": "7900054",
    "name": "Dravograd",
    "isMeta": true,
    "country": "SI",
    "location": {
      "longitude": 15.02626,
      "latitude": 46.586955
    }
  },
  "7900064": {
    "id": "7900064",
    "name": "Sentilj",
    "isMeta": true,
    "country": "SI",
    "location": {
      "longitude": 15.657975,
      "latitude": 46.674223
    }
  },
  "7900065": {
    "id": "7900065",
    "name": "Ljutomer",
    "isMeta": true,
    "country": "SI",
    "location": {
      "longitude": 16.188853,
      "latitude": 46.528687
    }
  },
  "7900068": {
    "id": "7900068",
    "name": "Rogaska Slatina",
    "isMeta": true,
    "country": "SI",
    "location": {
      "longitude": 15.638335,
      "latitude": 46.231836
    }
  },
  "7900069": {
    "id": "7900069",
    "name": "Velenje",
    "isMeta": true,
    "country": "SI",
    "location": {
      "longitude": 15.10328,
      "latitude": 46.363735
    }
  },
  "7900114": {
    "id": "7900114",
    "name": "Hrastnik",
    "isMeta": true,
    "country": "SI",
    "location": {
      "longitude": 15.093967,
      "latitude": 46.122572
    }
  },
  "7900140": {
    "id": "7900140",
    "name": "Litija",
    "isMeta": true,
    "country": "SI",
    "location": {
      "longitude": 14.825072,
      "latitude": 46.058335
    }
  },
  "7900185": {
    "id": "7900185",
    "name": "Poljcane",
    "isMeta": true,
    "country": "SI",
    "location": {
      "longitude": 15.576795,
      "latitude": 46.313566
    }
  },
  "7900200": {
    "id": "7900200",
    "name": "Ravne na Koroskem",
    "isMeta": true,
    "country": "SI",
    "location": {
      "longitude": 14.962733,
      "latitude": 46.547034
    }
  },
  "7900252": {
    "id": "7900252",
    "name": "Zagorje",
    "isMeta": false,
    "country": "SI",
    "location": {
      "longitude": 14.991148,
      "latitude": 46.1209
    }
  },
  "7900279": {
    "id": "7900279",
    "name": "Hodos",
    "isMeta": true,
    "country": "SI",
    "location": {
      "longitude": 16.332536,
      "latitude": 46.820477
    }
  },
  "8000001": {
    "id": "8000001",
    "name": "Aachen Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 6.091495,
      "latitude": 50.767802
    }
  },
  "8000002": {
    "id": "8000002",
    "name": "Aalen",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 10.09627,
      "latitude": 48.841009
    }
  },
  "8000004": {
    "id": "8000004",
    "name": "Altenbeken",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.943206,
      "latitude": 51.766207
    }
  },
  "8000007": {
    "id": "8000007",
    "name": "Alzey",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.109753,
      "latitude": 49.750196
    }
  },
  "8000009": {
    "id": "8000009",
    "name": "Ansbach",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 10.578236,
      "latitude": 49.29803
    }
  },
  "8000010": {
    "id": "8000010",
    "name": "Aschaffenburg Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.143692,
      "latitude": 49.980554
    }
  },
  "8000011": {
    "id": "8000011",
    "name": "Ascheberg (Holst)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 10.339446,
      "latitude": 54.148277
    }
  },
  "8000012": {
    "id": "8000012",
    "name": "Au (Sieg)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.656535,
      "latitude": 50.773762
    }
  },
  "8000013": {
    "id": "8000013",
    "name": "Augsburg Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 10.885568,
      "latitude": 48.365444
    }
  },
  "8000014": {
    "id": "8000014",
    "name": "Aulendorf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.64405,
      "latitude": 47.953055
    }
  },
  "8000015": {
    "id": "8000015",
    "name": "Babenhausen (Hess)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.957184,
      "latitude": 49.957964
    }
  },
  "8000016": {
    "id": "8000016",
    "name": "Backnang",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.42652,
      "latitude": 48.942767
    }
  },
  "8000017": {
    "id": "8000017",
    "name": "Bad Friedrichshall-Jagstfeld",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.199767,
      "latitude": 49.231573
    }
  },
  "8000019": {
    "id": "8000019",
    "name": "Bad Harzburg",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 10.555448,
      "latitude": 51.888119
    }
  },
  "8000020": {
    "id": "8000020",
    "name": "Bad Hersfeld",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.716179,
      "latitude": 50.869632
    }
  },
  "8000021": {
    "id": "8000021",
    "name": "Bad Kreuznach",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.866433,
      "latitude": 49.842399
    }
  },
  "8000022": {
    "id": "8000022",
    "name": "Bad Nenndorf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.377996,
      "latitude": 52.344627
    }
  },
  "8000023": {
    "id": "8000023",
    "name": "Bad Oldesloe",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 10.382828,
      "latitude": 53.805284
    }
  },
  "8000025": {
    "id": "8000025",
    "name": "Bamberg",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 10.899492,
      "latitude": 49.900757
    }
  },
  "8000026": {
    "id": "8000026",
    "name": "Basel Badischer Bahnhof",
    "isMeta": false,
    "country": "CH",
    "location": {
      "longitude": 7.607804,
      "latitude": 47.567292
    }
  },
  "8000027": {
    "id": "8000027",
    "name": "Schwandorf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 12.104433,
      "latitude": 49.326283
    }
  },
  "8000028": {
    "id": "8000028",
    "name": "Bayreuth Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 11.579985,
      "latitude": 49.949613
    }
  },
  "8000029": {
    "id": "8000029",
    "name": "Bebra",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.79772,
      "latitude": 50.969178
    }
  },
  "8000030": {
    "id": "8000030",
    "name": "Bedburg (Erft)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 6.572615,
      "latitude": 50.987481
    }
  },
  "8000031": {
    "id": "8000031",
    "name": "Bensheim",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.616978,
      "latitude": 49.681231
    }
  },
  "8000032": {
    "id": "8000032",
    "name": "Schweinfurt Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 10.212923,
      "latitude": 50.035316
    }
  },
  "8000033": {
    "id": "8000033",
    "name": "Schwelm",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.289685,
      "latitude": 51.290525
    }
  },
  "8000034": {
    "id": "8000034",
    "name": "Betzdorf (Sieg)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.870046,
      "latitude": 50.789295
    }
  },
  "8000036": {
    "id": "8000036",
    "name": "Bielefeld Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.532722,
      "latitude": 52.029258
    }
  },
  "8000037": {
    "id": "8000037",
    "name": "Schwerte (Ruhr)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.558957,
      "latitude": 51.442281
    }
  },
  "8000038": {
    "id": "8000038",
    "name": "Bietigheim-Bissingen",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.137552,
      "latitude": 48.947936
    }
  },
  "8000039": {
    "id": "8000039",
    "name": "Bingen (Rhein) Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.884258,
      "latitude": 49.968724
    }
  },
  "8000040": {
    "id": "8000040",
    "name": "Bocholt",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 6.620429,
      "latitude": 51.834121
    }
  },
  "8000041": {
    "id": "8000041",
    "name": "Bochum Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.224109,
      "latitude": 51.478651
    }
  },
  "8000042": {
    "id": "8000042",
    "name": "Seckach",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.33847,
      "latitude": 49.441156
    }
  },
  "8000043": {
    "id": "8000043",
    "name": "Seesen",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 10.173901,
      "latitude": 51.887265
    }
  },
  "8000044": {
    "id": "8000044",
    "name": "Bonn Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.097136,
      "latitude": 50.732007
    }
  },
  "8000045": {
    "id": "8000045",
    "name": "Boppard Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.586104,
      "latitude": 50.231416
    }
  },
  "8000046": {
    "id": "8000046",
    "name": "Siegen",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.016661,
      "latitude": 50.876086
    }
  },
  "8000047": {
    "id": "8000047",
    "name": "Bottrop Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 6.936921,
      "latitude": 51.509538
    }
  },
  "8000048": {
    "id": "8000048",
    "name": "Brackwede",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.498428,
      "latitude": 51.997374
    }
  },
  "8000049": {
    "id": "8000049",
    "name": "Braunschweig Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 10.539699,
      "latitude": 52.252236
    }
  },
  "8000050": {
    "id": "8000050",
    "name": "Bremen Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.813833,
      "latitude": 53.083477
    }
  },
  "8000051": {
    "id": "8000051",
    "name": "Bremerhaven Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.599557,
      "latitude": 53.534916
    }
  },
  "8000053": {
    "id": "8000053",
    "name": "Bretten",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.693135,
      "latitude": 49.036947
    }
  },
  "8000054": {
    "id": "8000054",
    "name": "Brilon Wald",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.576068,
      "latitude": 51.349162
    }
  },
  "8000055": {
    "id": "8000055",
    "name": "Bruchsal",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.589651,
      "latitude": 49.124619
    }
  },
  "8000056": {
    "id": "8000056",
    "name": "Buchholz (Nordheide)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.876592,
      "latitude": 53.324568
    }
  },
  "8000057": {
    "id": "8000057",
    "name": "Buchloe",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 10.71622,
      "latitude": 48.033724
    }
  },
  "8000058": {
    "id": "8000058",
    "name": "Büchen",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 10.622858,
      "latitude": 53.475371
    }
  },
  "8000059": {
    "id": "8000059",
    "name": "Bünde (Westf)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.573875,
      "latitude": 52.202076
    }
  },
  "8000060": {
    "id": "8000060",
    "name": "Siershahn",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.771561,
      "latitude": 50.485388
    }
  },
  "8000061": {
    "id": "8000061",
    "name": "Burg- und Nieder-Gemünden",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.047606,
      "latitude": 50.691115
    }
  },
  "8000062": {
    "id": "8000062",
    "name": "Steinfurt-Burgsteinfurt",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.329336,
      "latitude": 52.147386
    }
  },
  "8000063": {
    "id": "8000063",
    "name": "Calw",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.742027,
      "latitude": 48.714729
    }
  },
  "8000064": {
    "id": "8000064",
    "name": "Celle",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 10.062704,
      "latitude": 52.621171
    }
  },
  "8000065": {
    "id": "8000065",
    "name": "Cölbe",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.787369,
      "latitude": 50.848157
    }
  },
  "8000066": {
    "id": "8000066",
    "name": "Coesfeld (Westf)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.163881,
      "latitude": 51.939429
    }
  },
  "8000067": {
    "id": "8000067",
    "name": "Crailsheim",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 10.064322,
      "latitude": 49.137869
    }
  },
  "8000068": {
    "id": "8000068",
    "name": "Darmstadt Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.629635,
      "latitude": 49.872503
    }
  },
  "8000069": {
    "id": "8000069",
    "name": "Sigmaringen",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.221853,
      "latitude": 48.086985
    }
  },
  "8000070": {
    "id": "8000070",
    "name": "Delmenhorst",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.629761,
      "latitude": 53.052788
    }
  },
  "8000071": {
    "id": "8000071",
    "name": "Derneburg (Han)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 10.143715,
      "latitude": 52.096848
    }
  },
  "8000072": {
    "id": "8000072",
    "name": "Simbach (Inn)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 13.023014,
      "latitude": 48.262724
    }
  },
  "8000073": {
    "id": "8000073",
    "name": "Singen (Hohentwiel)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.840378,
      "latitude": 47.758438
    }
  },
  "8000074": {
    "id": "8000074",
    "name": "Dillenburg",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.294086,
      "latitude": 50.734884
    }
  },
  "8000075": {
    "id": "8000075",
    "name": "Dillingen (Saar)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 6.722151,
      "latitude": 49.352711
    }
  },
  "8000076": {
    "id": "8000076",
    "name": "Soest",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.104593,
      "latitude": 51.578422
    }
  },
  "8000077": {
    "id": "8000077",
    "name": "Donaueschingen",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.498923,
      "latitude": 47.947787
    }
  },
  "8000078": {
    "id": "8000078",
    "name": "Donauwörth",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 10.771441,
      "latitude": 48.714028
    }
  },
  "8000080": {
    "id": "8000080",
    "name": "Dortmund Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.459293,
      "latitude": 51.517898
    }
  },
  "8000081": {
    "id": "8000081",
    "name": "Dortmund-Dorstfeld",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.424865,
      "latitude": 51.509376
    }
  },
  "8000082": {
    "id": "8000082",
    "name": "Düsseldorf Flughafen",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 6.786837,
      "latitude": 51.292008
    }
  },
  "8000083": {
    "id": "8000083",
    "name": "Dülmen",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.295762,
      "latitude": 51.827675
    }
  },
  "8000084": {
    "id": "8000084",
    "name": "Düren",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 6.482031,
      "latitude": 50.809395
    }
  },
  "8000085": {
    "id": "8000085",
    "name": "Düsseldorf Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 6.794316,
      "latitude": 51.21996
    }
  },
  "8000086": {
    "id": "8000086",
    "name": "Duisburg Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 6.775906,
      "latitude": 51.429786
    }
  },
  "8000087": {
    "id": "8000087",
    "name": "Solingen Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.004241,
      "latitude": 51.160909
    }
  },
  "8000088": {
    "id": "8000088",
    "name": "Soltau (Han)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.831214,
      "latitude": 52.983131
    }
  },
  "8000089": {
    "id": "8000089",
    "name": "Stade",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.477201,
      "latitude": 53.596141
    }
  },
  "8000090": {
    "id": "8000090",
    "name": "Eichenberg",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.921484,
      "latitude": 51.374826
    }
  },
  "8000091": {
    "id": "8000091",
    "name": "Steinach (b Rothenburg)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 10.273537,
      "latitude": 49.45322
    }
  },
  "8000092": {
    "id": "8000092",
    "name": "Elmshorn",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.659062,
      "latitude": 53.755223
    }
  },
  "8000093": {
    "id": "8000093",
    "name": "Elze (Han)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.746895,
      "latitude": 52.120148
    }
  },
  "8000094": {
    "id": "8000094",
    "name": "Engers",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.54683,
      "latitude": 50.425978
    }
  },
  "8000095": {
    "id": "8000095",
    "name": "Straubing",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 12.574093,
      "latitude": 48.876975
    }
  },
  "8000096": {
    "id": "8000096",
    "name": "Stuttgart Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.181636,
      "latitude": 48.784081
    }
  },
  "8000098": {
    "id": "8000098",
    "name": "Essen Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.014795,
      "latitude": 51.451351
    }
  },
  "8000099": {
    "id": "8000099",
    "name": "Essen-Steele",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.076101,
      "latitude": 51.450506
    }
  },
  "8000100": {
    "id": "8000100",
    "name": "Euskirchen",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 6.792195,
      "latitude": 50.657756
    }
  },
  "8000101": {
    "id": "8000101",
    "name": "Eutingen im Gäu",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.782236,
      "latitude": 48.479949
    }
  },
  "8000102": {
    "id": "8000102",
    "name": "Finnentrop",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.964703,
      "latitude": 51.172631
    }
  },
  "8000103": {
    "id": "8000103",
    "name": "Flensburg",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.436884,
      "latitude": 54.774088
    }
  },
  "8000104": {
    "id": "8000104",
    "name": "Frankenberg (Eder)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.789184,
      "latitude": 51.054567
    }
  },
  "8000105": {
    "id": "8000105",
    "name": "Frankfurt (Main) Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.663785,
      "latitude": 50.107149
    }
  },
  "8000106": {
    "id": "8000106",
    "name": "Frankfurt-Höchst",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.542368,
      "latitude": 50.102636
    }
  },
  "8000107": {
    "id": "8000107",
    "name": "Freiburg (Breisgau) Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.841593623161316,
      "latitude": 47.997690269936264
    }
  },
  "8000108": {
    "id": "8000108",
    "name": "Freilassing",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 12.977196,
      "latitude": 47.836914
    }
  },
  "8000110": {
    "id": "8000110",
    "name": "Freudenstadt Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.428807,
      "latitude": 48.460325
    }
  },
  "8000111": {
    "id": "8000111",
    "name": "Friedberg (Hess)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.762055,
      "latitude": 50.332607
    }
  },
  "8000112": {
    "id": "8000112",
    "name": "Friedrichshafen Stadt",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.473902,
      "latitude": 47.65322
    }
  },
  "8000113": {
    "id": "8000113",
    "name": "Fröndenberg",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.763039,
      "latitude": 51.47119
    }
  },
  "8000114": {
    "id": "8000114",
    "name": "Fürth (Bay) Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 10.989987,
      "latitude": 49.469706
    }
  },
  "8000115": {
    "id": "8000115",
    "name": "Fulda",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.68398,
      "latitude": 50.554722
    }
  },
  "8000116": {
    "id": "8000116",
    "name": "Traunstein",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 12.638797,
      "latitude": 47.869725
    }
  },
  "8000117": {
    "id": "8000117",
    "name": "Gelnhausen",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.189276,
      "latitude": 50.19634
    }
  },
  "8000118": {
    "id": "8000118",
    "name": "Gelsenkirchen Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.102583,
      "latitude": 51.505016
    }
  },
  "8000119": {
    "id": "8000119",
    "name": "Geltendorf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 11.037737,
      "latitude": 48.105773
    }
  },
  "8000120": {
    "id": "8000120",
    "name": "Gemünden (Main)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.699891,
      "latitude": 50.050013
    }
  },
  "8000121": {
    "id": "8000121",
    "name": "Gensingen-Horrweiler",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.938185,
      "latitude": 49.898258
    }
  },
  "8000122": {
    "id": "8000122",
    "name": "Treuchtlingen",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 10.908158,
      "latitude": 48.961267
    }
  },
  "8000123": {
    "id": "8000123",
    "name": "Gerolstein",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 6.660368,
      "latitude": 50.224009
    }
  },
  "8000124": {
    "id": "8000124",
    "name": "Gießen",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.661466,
      "latitude": 50.579056
    }
  },
  "8000125": {
    "id": "8000125",
    "name": "Gladbeck West",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 6.97677,
      "latitude": 51.575357
    }
  },
  "8000126": {
    "id": "8000126",
    "name": "Riedstadt-Goddelau",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.489187,
      "latitude": 49.83323
    }
  },
  "8000127": {
    "id": "8000127",
    "name": "Göppingen",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.651969,
      "latitude": 48.700022
    }
  },
  "8000128": {
    "id": "8000128",
    "name": "Göttingen",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.925682,
      "latitude": 51.536614
    }
  },
  "8000129": {
    "id": "8000129",
    "name": "Treysa",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.185672,
      "latitude": 50.910659
    }
  },
  "8000130": {
    "id": "8000130",
    "name": "Goslar",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 10.423091,
      "latitude": 51.911059
    }
  },
  "8000131": {
    "id": "8000131",
    "name": "Graben-Neudorf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.490545,
      "latitude": 49.162284
    }
  },
  "8000132": {
    "id": "8000132",
    "name": "Grävenwiesbach",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.458552,
      "latitude": 50.382237
    }
  },
  "8000133": {
    "id": "8000133",
    "name": "Grevenbroich",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 6.580148,
      "latitude": 51.093724
    }
  },
  "8000134": {
    "id": "8000134",
    "name": "Trier Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 6.652449,
      "latitude": 49.756848
    }
  },
  "8000135": {
    "id": "8000135",
    "name": "Troisdorf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.150891,
      "latitude": 50.813926
    }
  },
  "8000136": {
    "id": "8000136",
    "name": "Groß Gerau",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.486212,
      "latitude": 49.924938
    }
  },
  "8000137": {
    "id": "8000137",
    "name": "Grünstadt",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.167958,
      "latitude": 49.56438
    }
  },
  "8000138": {
    "id": "8000138",
    "name": "Gruiten",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.011145,
      "latitude": 51.214611
    }
  },
  "8000139": {
    "id": "8000139",
    "name": "Günzburg",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 10.278652,
      "latitude": 48.460334
    }
  },
  "8000140": {
    "id": "8000140",
    "name": "Baunatal-Guntershausen",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.466998,
      "latitude": 51.22992
    }
  },
  "8000141": {
    "id": "8000141",
    "name": "Tübingen Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.055409,
      "latitude": 48.515807
    }
  },
  "8000142": {
    "id": "8000142",
    "name": "Hagen Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.460246,
      "latitude": 51.362744
    }
  },
  "8000143": {
    "id": "8000143",
    "name": "Weil am Rhein-Gartenstadt",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.616281,
      "latitude": 47.588704
    }
  },
  "8000144": {
    "id": "8000144",
    "name": "Türkheim (Bay) Bf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 10.617438,
      "latitude": 48.045689
    }
  },
  "8000145": {
    "id": "8000145",
    "name": "Haltern am See",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.184367,
      "latitude": 51.737666
    }
  },
  "8000146": {
    "id": "8000146",
    "name": "Weil am Rhein-Pfädlistraße",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.626493,
      "latitude": 47.589019
    }
  },
  "8000147": {
    "id": "8000147",
    "name": "Hamburg-Harburg",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.991591,
      "latitude": 53.456296
    }
  },
  "8000148": {
    "id": "8000148",
    "name": "Hameln",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.375901,
      "latitude": 52.101846
    }
  },
  "8000149": {
    "id": "8000149",
    "name": "Hamm (Westf)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.807823,
      "latitude": 51.678077
    }
  },
  "8000150": {
    "id": "8000150",
    "name": "Hanau Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.929165,
      "latitude": 50.12128
    }
  },
  "8000152": {
    "id": "8000152",
    "name": "Hannover Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.741016,
      "latitude": 52.376763
    }
  },
  "8000154": {
    "id": "8000154",
    "name": "Türkismühle",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.114305,
      "latitude": 49.580192
    }
  },
  "8000155": {
    "id": "8000155",
    "name": "Heide (Holst)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.101272,
      "latitude": 54.194364
    }
  },
  "8000156": {
    "id": "8000156",
    "name": "Heidelberg Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.675741,
      "latitude": 49.403779
    }
  },
  "8000157": {
    "id": "8000157",
    "name": "Heilbronn Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.207713,
      "latitude": 49.143308
    }
  },
  "8000158": {
    "id": "8000158",
    "name": "Nidderau",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.879895,
      "latitude": 50.231308
    }
  },
  "8000159": {
    "id": "8000159",
    "name": "Helmstedt",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 11.010734,
      "latitude": 52.222221
    }
  },
  "8000160": {
    "id": "8000160",
    "name": "Herbertingen",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.4146,
      "latitude": 48.063946
    }
  },
  "8000161": {
    "id": "8000161",
    "name": "Herborn (Dillkr)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.308136,
      "latitude": 50.6844
    }
  },
  "8000162": {
    "id": "8000162",
    "name": "Herford",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.663641,
      "latitude": 52.119609
    }
  },
  "8000163": {
    "id": "8000163",
    "name": "Tuttlingen",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.798542,
      "latitude": 47.98058
    }
  },
  "8000164": {
    "id": "8000164",
    "name": "Herne",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.217825,
      "latitude": 51.543652
    }
  },
  "8000165": {
    "id": "8000165",
    "name": "Hervest-Dorsten",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 6.974325,
      "latitude": 51.672009
    }
  },
  "8000166": {
    "id": "8000166",
    "name": "Herzberg (Harz)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 10.329927,
      "latitude": 51.643864
    }
  },
  "8000167": {
    "id": "8000167",
    "name": "Hesepe",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.967597,
      "latitude": 52.43922
    }
  },
  "8000168": {
    "id": "8000168",
    "name": "Uelzen",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 10.553057,
      "latitude": 52.969782
    }
  },
  "8000169": {
    "id": "8000169",
    "name": "Hildesheim Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.953494,
      "latitude": 52.160627
    }
  },
  "8000170": {
    "id": "8000170",
    "name": "Ulm Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.982224,
      "latitude": 48.399432
    }
  },
  "8000171": {
    "id": "8000171",
    "name": "Unna",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.693381,
      "latitude": 51.538906
    }
  },
  "8000172": {
    "id": "8000172",
    "name": "Höchst (Odenw)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.988547,
      "latitude": 49.794495
    }
  },
  "8000173": {
    "id": "8000173",
    "name": "Wunsiedel-Holenbrunn",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 12.033931,
      "latitude": 50.05111
    }
  },
  "8000174": {
    "id": "8000174",
    "name": "Viersen",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 6.403888,
      "latitude": 51.255161
    }
  },
  "8000175": {
    "id": "8000175",
    "name": "Völklingen",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 6.848153,
      "latitude": 49.249093
    }
  },
  "8000176": {
    "id": "8000176",
    "name": "Homburg (Saar) Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.337031,
      "latitude": 49.328081
    }
  },
  "8000177": {
    "id": "8000177",
    "name": "Horb",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.689179,
      "latitude": 48.44169
    }
  },
  "8000178": {
    "id": "8000178",
    "name": "Horrem",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 6.713494,
      "latitude": 50.91625
    }
  },
  "8000180": {
    "id": "8000180",
    "name": "Waiblingen",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.29988,
      "latitude": 48.826123
    }
  },
  "8000181": {
    "id": "8000181",
    "name": "Husum",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.055022,
      "latitude": 54.472275
    }
  },
  "8000182": {
    "id": "8000182",
    "name": "Immendingen",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.729532,
      "latitude": 47.936002
    }
  },
  "8000183": {
    "id": "8000183",
    "name": "Ingolstadt Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 11.437335,
      "latitude": 48.744537
    }
  },
  "8000185": {
    "id": "8000185",
    "name": "Gifhorn",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 10.545281,
      "latitude": 52.456156
    }
  },
  "8000186": {
    "id": "8000186",
    "name": "Iserlohn",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.691709,
      "latitude": 51.373262
    }
  },
  "8000187": {
    "id": "8000187",
    "name": "Wallau (Lahn)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.470013,
      "latitude": 50.922893
    }
  },
  "8000188": {
    "id": "8000188",
    "name": "Jülich",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 6.367976,
      "latitude": 50.919378
    }
  },
  "8000189": {
    "id": "8000189",
    "name": "Kaiserslautern Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.768711,
      "latitude": 49.43614
    }
  },
  "8000190": {
    "id": "8000190",
    "name": "Kaldenkirchen",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 6.203222,
      "latitude": 51.327183
    }
  },
  "8000191": {
    "id": "8000191",
    "name": "Karlsruhe Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.401848077774048,
      "latitude": 48.993509649554724
    }
  },
  "8000192": {
    "id": "8000192",
    "name": "Wanne-Eickel Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.165787,
      "latitude": 51.531256
    }
  },
  "8000193": {
    "id": "8000193",
    "name": "Kassel Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.489498,
      "latitude": 51.318257
    }
  },
  "8000194": {
    "id": "8000194",
    "name": "Kaufbeuren",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 10.629492,
      "latitude": 47.875433
    }
  },
  "8000195": {
    "id": "8000195",
    "name": "Kaufering",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 10.854591,
      "latitude": 48.080836
    }
  },
  "8000196": {
    "id": "8000196",
    "name": "Warburg (Westf)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.163846,
      "latitude": 51.492953
    }
  },
  "8000197": {
    "id": "8000197",
    "name": "Kempten (Allgäu) Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 10.317611,
      "latitude": 47.711748
    }
  },
  "8000198": {
    "id": "8000198",
    "name": "Kettwig",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 6.954028,
      "latitude": 51.363616
    }
  },
  "8000199": {
    "id": "8000199",
    "name": "Kiel Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 10.131975,
      "latitude": 54.314982
    }
  },
  "8000201": {
    "id": "8000201",
    "name": "Kirchenlaibach",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 11.776327,
      "latitude": 49.869906
    }
  },
  "8000203": {
    "id": "8000203",
    "name": "Kißlegg",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.881922,
      "latitude": 47.793532
    }
  },
  "8000204": {
    "id": "8000204",
    "name": "Weiden (Oberpf)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 12.153847,
      "latitude": 49.670489
    }
  },
  "8000205": {
    "id": "8000205",
    "name": "Kleve",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 6.146221,
      "latitude": 51.789732
    }
  },
  "8000206": {
    "id": "8000206",
    "name": "Koblenz Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.588648,
      "latitude": 50.35108
    }
  },
  "8000207": {
    "id": "8000207",
    "name": "Köln Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 6.958729,
      "latitude": 50.943029
    }
  },
  "8000208": {
    "id": "8000208",
    "name": "Köln-Ehrenfeld",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 6.91728,
      "latitude": 50.951533
    }
  },
  "8000209": {
    "id": "8000209",
    "name": "Köln-Mülheim",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.013294,
      "latitude": 50.957987
    }
  },
  "8000210": {
    "id": "8000210",
    "name": "Korbach",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.873297,
      "latitude": 51.278803
    }
  },
  "8000211": {
    "id": "8000211",
    "name": "Krefeld Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 6.570224,
      "latitude": 51.325772
    }
  },
  "8000212": {
    "id": "8000212",
    "name": "Krefeld-Oppum",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 6.611107,
      "latitude": 51.329736
    }
  },
  "8000213": {
    "id": "8000213",
    "name": "Kreiensen",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.967796,
      "latitude": 51.851425
    }
  },
  "8000214": {
    "id": "8000214",
    "name": "Kreuztal",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.991697,
      "latitude": 50.956027
    }
  },
  "8000215": {
    "id": "8000215",
    "name": "Lage (Lippe)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.802381,
      "latitude": 51.99083
    }
  },
  "8000216": {
    "id": "8000216",
    "name": "Landau (Pfalz) Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.126167,
      "latitude": 49.198178
    }
  },
  "8000217": {
    "id": "8000217",
    "name": "Landshut (Bay) Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 12.135931,
      "latitude": 48.547494
    }
  },
  "8000218": {
    "id": "8000218",
    "name": "Weilburg",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.267945,
      "latitude": 50.486368
    }
  },
  "8000220": {
    "id": "8000220",
    "name": "Weilheim (Oberbay)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 11.142857,
      "latitude": 47.845364
    }
  },
  "8000221": {
    "id": "8000221",
    "name": "Lauda",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.709509,
      "latitude": 49.565387
    }
  },
  "8000222": {
    "id": "8000222",
    "name": "Lauterbach (Hess) Nord",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.408056,
      "latitude": 50.643607
    }
  },
  "8000225": {
    "id": "8000225",
    "name": "Leer (Ostfriesl)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.46528,
      "latitude": 53.231647
    }
  },
  "8000226": {
    "id": "8000226",
    "name": "Lehrte",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.974601,
      "latitude": 52.376718
    }
  },
  "8000227": {
    "id": "8000227",
    "name": "Letmathe",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.618393,
      "latitude": 51.362834
    }
  },
  "8000228": {
    "id": "8000228",
    "name": "Lichtenfels",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 11.059662,
      "latitude": 50.146692
    }
  },
  "8000229": {
    "id": "8000229",
    "name": "Limburg (Lahn)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.062586,
      "latitude": 50.384295
    }
  },
  "8000230": {
    "id": "8000230",
    "name": "Lindau Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.680303,
      "latitude": 47.544738
    }
  },
  "8000231": {
    "id": "8000231",
    "name": "Wertheim",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.512816,
      "latitude": 49.762413
    }
  },
  "8000233": {
    "id": "8000233",
    "name": "Löhne (Westf)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.713495,
      "latitude": 52.196656
    }
  },
  "8000234": {
    "id": "8000234",
    "name": "Lollar",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.701737,
      "latitude": 50.64794
    }
  },
  "8000235": {
    "id": "8000235",
    "name": "Ludwigsburg",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.18542,
      "latitude": 48.891861
    }
  },
  "8000236": {
    "id": "8000236",
    "name": "Ludwigshafen (Rh) Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.4334,
      "latitude": 49.477985
    }
  },
  "8000237": {
    "id": "8000237",
    "name": "Lübeck Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 10.670348,
      "latitude": 53.867768
    }
  },
  "8000238": {
    "id": "8000238",
    "name": "Lüneburg",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 10.419891,
      "latitude": 53.249652
    }
  },
  "8000239": {
    "id": "8000239",
    "name": "Lünen Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.529481,
      "latitude": 51.61713
    }
  },
  "8000240": {
    "id": "8000240",
    "name": "Mainz Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.258722,
      "latitude": 50.001112
    }
  },
  "8000241": {
    "id": "8000241",
    "name": "Mainz-Bischofsheim",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.358116,
      "latitude": 49.992815
    }
  },
  "8000242": {
    "id": "8000242",
    "name": "Wesel",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 6.627135,
      "latitude": 51.655837
    }
  },
  "8000243": {
    "id": "8000243",
    "name": "Malsfeld",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.534831,
      "latitude": 51.097607
    }
  },
  "8000244": {
    "id": "8000244",
    "name": "Mannheim Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.469530940055847,
      "latitude": 49.479295999056305
    }
  },
  "8000245": {
    "id": "8000245",
    "name": "Westerburg",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.966977,
      "latitude": 50.557643
    }
  },
  "8000247": {
    "id": "8000247",
    "name": "Marktredwitz",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 12.08258,
      "latitude": 50.0046
    }
  },
  "8000248": {
    "id": "8000248",
    "name": "Mayen Ost",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.238968,
      "latitude": 50.329263
    }
  },
  "8000249": {
    "id": "8000249",
    "name": "Memmingen",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 10.186854,
      "latitude": 47.985578
    }
  },
  "8000250": {
    "id": "8000250",
    "name": "Wiesbaden Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.243728,
      "latitude": 50.070788
    }
  },
  "8000251": {
    "id": "8000251",
    "name": "Witten Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.329444,
      "latitude": 51.435548
    }
  },
  "8000252": {
    "id": "8000252",
    "name": "Minden (Westf)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.934729,
      "latitude": 52.290134
    }
  },
  "8000253": {
    "id": "8000253",
    "name": "Mönchengladbach Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 6.44611,
      "latitude": 51.196579
    }
  },
  "8000254": {
    "id": "8000254",
    "name": "Wörth (Rhein)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.27315,
      "latitude": 49.045676
    }
  },
  "8000255": {
    "id": "8000255",
    "name": "Wolfenbüttel",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 10.53231,
      "latitude": 52.159126
    }
  },
  "8000256": {
    "id": "8000256",
    "name": "Rohrbach (Ilm)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 11.57318,
      "latitude": 48.605851
    }
  },
  "8000257": {
    "id": "8000257",
    "name": "Worms Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.356633,
      "latitude": 49.634748
    }
  },
  "8000258": {
    "id": "8000258",
    "name": "Mühldorf (Oberbay)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 12.519636,
      "latitude": 48.248207
    }
  },
  "8000259": {
    "id": "8000259",
    "name": "Mülheim (Ruhr) Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 6.88668,
      "latitude": 51.431323
    }
  },
  "8000260": {
    "id": "8000260",
    "name": "Würzburg Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.935777,
      "latitude": 49.801794
    }
  },
  "8000261": {
    "id": "8000261",
    "name": "München Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 11.558338,
      "latitude": 48.140228
    }
  },
  "8000262": {
    "id": "8000262",
    "name": "München Ost",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 11.604975,
      "latitude": 48.127437
    }
  },
  "8000263": {
    "id": "8000263",
    "name": "Münster (Westf) Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.635716,
      "latitude": 51.956563
    }
  },
  "8000264": {
    "id": "8000264",
    "name": "Mosbach-Neckarelz",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.113093,
      "latitude": 49.348486
    }
  },
  "8000265": {
    "id": "8000265",
    "name": "Neckargemünd",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.78842,
      "latitude": 49.393675
    }
  },
  "8000266": {
    "id": "8000266",
    "name": "Wuppertal Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.149381,
      "latitude": 51.254334
    }
  },
  "8000267": {
    "id": "8000267",
    "name": "Neuenmarkt-Wirsberg",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 11.581306,
      "latitude": 50.093746
    }
  },
  "8000268": {
    "id": "8000268",
    "name": "Wunstorf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.450979,
      "latitude": 52.422222
    }
  },
  "8000269": {
    "id": "8000269",
    "name": "Neukirchen (b Sulzb)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 11.619537,
      "latitude": 49.524324
    }
  },
  "8000271": {
    "id": "8000271",
    "name": "Neumünster",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.979716,
      "latitude": 54.075554
    }
  },
  "8000272": {
    "id": "8000272",
    "name": "Neunkirchen (Saar) Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.176655,
      "latitude": 49.353287
    }
  },
  "8000273": {
    "id": "8000273",
    "name": "Muldenberg Floßplatz",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 12.398704,
      "latitude": 50.415856
    }
  },
  "8000274": {
    "id": "8000274",
    "name": "Neuss Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 6.684396,
      "latitude": 51.204444
    }
  },
  "8000275": {
    "id": "8000275",
    "name": "Neustadt (Weinstr) Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.140379,
      "latitude": 49.34961
    }
  },
  "8000276": {
    "id": "8000276",
    "name": "Neuwied",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.473128,
      "latitude": 50.431462
    }
  },
  "8000277": {
    "id": "8000277",
    "name": "Nidda",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.998885,
      "latitude": 50.411452
    }
  },
  "8000278": {
    "id": "8000278",
    "name": "Niederlahnstein",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.599498,
      "latitude": 50.316391
    }
  },
  "8000279": {
    "id": "8000279",
    "name": "Nienburg (Weser)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.217754,
      "latitude": 52.645568
    }
  },
  "8000280": {
    "id": "8000280",
    "name": "Nördlingen",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 10.497863,
      "latitude": 48.850843
    }
  },
  "8000281": {
    "id": "8000281",
    "name": "Frankfurt (M) Flughafen",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.570971,
      "latitude": 50.051209
    }
  },
  "8000282": {
    "id": "8000282",
    "name": "Nordstemmen",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.788884,
      "latitude": 52.166398
    }
  },
  "8000283": {
    "id": "8000283",
    "name": "Northeim (Han)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.98662,
      "latitude": 51.703139
    }
  },
  "8000284": {
    "id": "8000284",
    "name": "Nürnberg Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 11.082989,
      "latitude": 49.445615
    }
  },
  "8000285": {
    "id": "8000285",
    "name": "Rödermark-Ober Roden",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.828962,
      "latitude": 49.973623
    }
  },
  "8000286": {
    "id": "8000286",
    "name": "Oberhausen Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 6.852036,
      "latitude": 51.475118
    }
  },
  "8000287": {
    "id": "8000287",
    "name": "Oberkotzau",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 11.9322,
      "latitude": 50.266393
    }
  },
  "8000288": {
    "id": "8000288",
    "name": "Wiesbaden-Biebrich",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.23642,
      "latitude": 50.048827
    }
  },
  "8000289": {
    "id": "8000289",
    "name": "Zwickau Zentrum",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 12.49674,
      "latitude": 50.715071
    }
  },
  "8000290": {
    "id": "8000290",
    "name": "Offenburg",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.946724,
      "latitude": 48.476479
    }
  },
  "8000291": {
    "id": "8000291",
    "name": "Oldenburg (Oldb)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.22246,
      "latitude": 53.144343
    }
  },
  "8000292": {
    "id": "8000292",
    "name": "Zwickau Stadthalle",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 12.498053,
      "latitude": 50.703916
    }
  },
  "8000294": {
    "id": "8000294",
    "name": "Osnabrück Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.061777,
      "latitude": 52.272848
    }
  },
  "8000295": {
    "id": "8000295",
    "name": "Osterburken",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.422663,
      "latitude": 49.429956
    }
  },
  "8000297": {
    "id": "8000297",
    "name": "Paderborn Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.740508,
      "latitude": 51.712982
    }
  },
  "8000298": {
    "id": "8000298",
    "name": "Passau Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 13.450775,
      "latitude": 48.573634
    }
  },
  "8000299": {
    "id": "8000299",
    "name": "Pforzheim Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.703095,
      "latitude": 48.894154
    }
  },
  "8000301": {
    "id": "8000301",
    "name": "Plattling",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 12.863941,
      "latitude": 48.779622
    }
  },
  "8000302": {
    "id": "8000302",
    "name": "Plochingen",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.410807,
      "latitude": 48.713084
    }
  },
  "8000304": {
    "id": "8000304",
    "name": "Quakenbrück",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.947821,
      "latitude": 52.673947
    }
  },
  "8000306": {
    "id": "8000306",
    "name": "Rastatt",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.215745,
      "latitude": 48.860579
    }
  },
  "8000307": {
    "id": "8000307",
    "name": "Recklinghausen Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.203487,
      "latitude": 51.616357
    }
  },
  "8000308": {
    "id": "8000308",
    "name": "Ludwigshafen (Rhein) BASF Mitte",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.43207,
      "latitude": 49.51004
    }
  },
  "8000309": {
    "id": "8000309",
    "name": "Regensburg Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 12.099615,
      "latitude": 49.011669
    }
  },
  "8000310": {
    "id": "8000310",
    "name": "Remagen",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.229781,
      "latitude": 50.577213
    }
  },
  "8000311": {
    "id": "8000311",
    "name": "Remscheid-Lennep",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.252829,
      "latitude": 51.190727
    }
  },
  "8000312": {
    "id": "8000312",
    "name": "Rendsburg",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.670712,
      "latitude": 54.302594
    }
  },
  "8000313": {
    "id": "8000313",
    "name": "Renningen",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.932347,
      "latitude": 48.775118
    }
  },
  "8000314": {
    "id": "8000314",
    "name": "Reutlingen Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.209196,
      "latitude": 48.49603
    }
  },
  "8000315": {
    "id": "8000315",
    "name": "Rheda-Wiedenbrück",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.286652,
      "latitude": 51.857025
    }
  },
  "8000316": {
    "id": "8000316",
    "name": "Rheine",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.434258,
      "latitude": 52.2763
    }
  },
  "8000317": {
    "id": "8000317",
    "name": "Rheinhausen",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 6.706483,
      "latitude": 51.393505
    }
  },
  "8000318": {
    "id": "8000318",
    "name": "Rheydt Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 6.439359,
      "latitude": 51.163049
    }
  },
  "8000319": {
    "id": "8000319",
    "name": "Rohrbach (Saar)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.157391,
      "latitude": 49.276734
    }
  },
  "8000320": {
    "id": "8000320",
    "name": "Rosenheim",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 12.119113,
      "latitude": 47.850128
    }
  },
  "8000321": {
    "id": "8000321",
    "name": "Rotenburg (Wümme)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.390095,
      "latitude": 53.112351
    }
  },
  "8000322": {
    "id": "8000322",
    "name": "Rottweil",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.639298,
      "latitude": 48.165299
    }
  },
  "8000323": {
    "id": "8000323",
    "name": "Saarbrücken Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 6.990984678268433,
      "latitude": 49.24115221039208
    }
  },
  "8000324": {
    "id": "8000324",
    "name": "Boppard Süd",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.595525,
      "latitude": 50.230193
    }
  },
  "8000325": {
    "id": "8000325",
    "name": "Salzgitter-Ringelheim",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 10.315274,
      "latitude": 52.038302
    }
  },
  "8000326": {
    "id": "8000326",
    "name": "Schifferstadt",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.364948,
      "latitude": 49.392911
    }
  },
  "8000327": {
    "id": "8000327",
    "name": "Wahlheim (Kr Alzey)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.099038,
      "latitude": 49.718707
    }
  },
  "8000328": {
    "id": "8000328",
    "name": "Schnabelwaid",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 11.595662,
      "latitude": 49.810451
    }
  },
  "8000329": {
    "id": "8000329",
    "name": "Schwäbisch Gmünd",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.787796,
      "latitude": 48.801007
    }
  },
  "8000330": {
    "id": "8000330",
    "name": "Schwäbisch Hall-Hessental",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.767373,
      "latitude": 49.096734
    }
  },
  "8000331": {
    "id": "8000331",
    "name": "Andernach",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.404405,
      "latitude": 50.434914
    }
  },
  "8000332": {
    "id": "8000332",
    "name": "Frankenthal Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.349702,
      "latitude": 49.53557
    }
  },
  "8000333": {
    "id": "8000333",
    "name": "Hausach",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.181666,
      "latitude": 48.284928
    }
  },
  "8000334": {
    "id": "8000334",
    "name": "Jübek",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.404379,
      "latitude": 54.559263
    }
  },
  "8000335": {
    "id": "8000335",
    "name": "Leese-Stolzenau",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.110126,
      "latitude": 52.509471
    }
  },
  "8000336": {
    "id": "8000336",
    "name": "Leutkirch",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 10.015834,
      "latitude": 47.826163
    }
  },
  "8000337": {
    "id": "8000337",
    "name": "Marburg (Lahn)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.775017,
      "latitude": 50.819274
    }
  },
  "8000338": {
    "id": "8000338",
    "name": "Mindelheim",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 10.50163,
      "latitude": 48.044916
    }
  },
  "8000339": {
    "id": "8000339",
    "name": "Mühlacker",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.846104,
      "latitude": 48.953195
    }
  },
  "8000340": {
    "id": "8000340",
    "name": "Freimersheim (Rheinh)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.086606,
      "latitude": 49.710626
    }
  },
  "8000342": {
    "id": "8000342",
    "name": "Weetzen",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.635375,
      "latitude": 52.29835
    }
  },
  "8000343": {
    "id": "8000343",
    "name": "Schöneck (Vogtl) Ferienpark",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 12.34716,
      "latitude": 50.389581
    }
  },
  "8000344": {
    "id": "8000344",
    "name": "Wittingen",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 10.723178,
      "latitude": 52.727289
    }
  },
  "8000346": {
    "id": "8000346",
    "name": "Borken (Westf)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 6.865277,
      "latitude": 51.848962
    }
  },
  "8000347": {
    "id": "8000347",
    "name": "Glauburg-Stockheim",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.010319,
      "latitude": 50.327106
    }
  },
  "8000348": {
    "id": "8000348",
    "name": "Stolberg (Rheinland) Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 6.218431,
      "latitude": 50.794914
    }
  },
  "8000349": {
    "id": "8000349",
    "name": "Offenbach (Main) Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.760743,
      "latitude": 50.099265
    }
  },
  "8000350": {
    "id": "8000350",
    "name": "Alsfeld (Oberhess)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.2643,
      "latitude": 50.750965
    }
  },
  "8000351": {
    "id": "8000351",
    "name": "Altenkirchen (Westerwald)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.637864,
      "latitude": 50.684337
    }
  },
  "8000352": {
    "id": "8000352",
    "name": "Bad Gandersheim",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 10.019925,
      "latitude": 51.867201
    }
  },
  "8000353": {
    "id": "8000353",
    "name": "Balingen (Württ)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.850302,
      "latitude": 48.278464
    }
  },
  "8000354": {
    "id": "8000354",
    "name": "Bassum",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.740085,
      "latitude": 52.847582
    }
  },
  "8000355": {
    "id": "8000355",
    "name": "Bergheim (Erft)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 6.6463,
      "latitude": 50.951703
    }
  },
  "8000356": {
    "id": "8000356",
    "name": "Villingen-Schwenningen Eisstadion",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.528551,
      "latitude": 48.052772
    }
  },
  "8000357": {
    "id": "8000357",
    "name": "Bierbach",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.282008,
      "latitude": 49.261893
    }
  },
  "8000358": {
    "id": "8000358",
    "name": "Bochum-Langendreer",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.323727,
      "latitude": 51.478031
    }
  },
  "8000359": {
    "id": "8000359",
    "name": "Bodenheim",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.311651,
      "latitude": 49.930088
    }
  },
  "8000362": {
    "id": "8000362",
    "name": "Dieburg",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.839794,
      "latitude": 49.903687
    }
  },
  "8000363": {
    "id": "8000363",
    "name": "Dieringhausen",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.54248,
      "latitude": 50.985422
    }
  },
  "8000364": {
    "id": "8000364",
    "name": "Vienenburg",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 10.562172,
      "latitude": 51.955034
    }
  },
  "8000365": {
    "id": "8000365",
    "name": "Dombühl",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 10.298518,
      "latitude": 49.252113
    }
  },
  "8000366": {
    "id": "8000366",
    "name": "Villingen (Schwarzw)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.465258,
      "latitude": 48.058022
    }
  },
  "8000367": {
    "id": "8000367",
    "name": "Duisburg-Meiderich Süd",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 6.780194,
      "latitude": 51.468835
    }
  },
  "8000368": {
    "id": "8000368",
    "name": "Wabern (Bz Kassel)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.35804,
      "latitude": 51.103136
    }
  },
  "8000369": {
    "id": "8000369",
    "name": "Eberbach",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.984152,
      "latitude": 49.465769
    }
  },
  "8000370": {
    "id": "8000370",
    "name": "Ehrang",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 6.685808,
      "latitude": 49.802028
    }
  },
  "8000371": {
    "id": "8000371",
    "name": "Einöd (Saar)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.321911,
      "latitude": 49.266666
    }
  },
  "8000372": {
    "id": "8000372",
    "name": "Enkenbach",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.899504,
      "latitude": 49.489932
    }
  },
  "8000373": {
    "id": "8000373",
    "name": "Eppingen",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.914665,
      "latitude": 49.135999
    }
  },
  "8000374": {
    "id": "8000374",
    "name": "Freinsheim",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.205191,
      "latitude": 49.501492
    }
  },
  "8000375": {
    "id": "8000375",
    "name": "Gau Algesheim",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.016067,
      "latitude": 49.961434
    }
  },
  "8000376": {
    "id": "8000376",
    "name": "Germersheim",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.365541,
      "latitude": 49.225343
    }
  },
  "8000377": {
    "id": "8000377",
    "name": "Weinheim (Bergstr)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.66552,
      "latitude": 49.553306
    }
  },
  "8000378": {
    "id": "8000378",
    "name": "Wemmetsweiler Rathaus",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.085935,
      "latitude": 49.369521
    }
  },
  "8000379": {
    "id": "8000379",
    "name": "Wittlich Hbf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 6.94298,
      "latitude": 49.972985
    }
  },
  "8000380": {
    "id": "8000380",
    "name": "Goldshöfe",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 10.128667,
      "latitude": 48.894351
    }
  },
  "8000381": {
    "id": "8000381",
    "name": "Grötzingen",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.492945,
      "latitude": 49.00597
    }
  },
  "8000382": {
    "id": "8000382",
    "name": "Gronau (Westf)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.022436,
      "latitude": 52.21511
    }
  },
  "8000383": {
    "id": "8000383",
    "name": "Wetzlar",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.504217,
      "latitude": 50.565662
    }
  },
  "8000384": {
    "id": "8000384",
    "name": "Groß-Umstadt Wiebelsbach",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.94085,
      "latitude": 49.833427
    }
  },
  "8000385": {
    "id": "8000385",
    "name": "Gunzenhausen",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 10.755467,
      "latitude": 49.120448
    }
  },
  "8000386": {
    "id": "8000386",
    "name": "Haiger",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.220653,
      "latitude": 50.741356
    }
  },
  "8000387": {
    "id": "8000387",
    "name": "Hergatz",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.827151,
      "latitude": 47.646613
    }
  },
  "8000388": {
    "id": "8000388",
    "name": "Hilden",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 6.922008,
      "latitude": 51.167022
    }
  },
  "8000389": {
    "id": "8000389",
    "name": "Hochdorf (b Horb)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.723042,
      "latitude": 48.482304
    }
  },
  "8000390": {
    "id": "8000390",
    "name": "Hochneukirch",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 6.466138,
      "latitude": 51.103199
    }
  },
  "8000391": {
    "id": "8000391",
    "name": "Holzminden",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.454314,
      "latitude": 51.820834
    }
  },
  "8000392": {
    "id": "8000392",
    "name": "Holzwickede",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.619643,
      "latitude": 51.504765
    }
  },
  "8000393": {
    "id": "8000393",
    "name": "Villingen-Schwenningen Hammerstatt",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.546925,
      "latitude": 48.06017
    }
  },
  "8000400": {
    "id": "8000400",
    "name": "Hungen",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.892785,
      "latitude": 50.478053
    }
  },
  "8000402": {
    "id": "8000402",
    "name": "Karthaus",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 6.59685,
      "latitude": 49.710338
    }
  },
  "8000404": {
    "id": "8000404",
    "name": "Aachen West",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 6.070712,
      "latitude": 50.78036
    }
  },
  "8000406": {
    "id": "8000406",
    "name": "Aachen-Rothe Erde",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 6.116476,
      "latitude": 50.770202
    }
  },
  "8000409": {
    "id": "8000409",
    "name": "Kempen (Niederrhein)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 6.425327,
      "latitude": 51.367895
    }
  },
  "8000410": {
    "id": "8000410",
    "name": "Abensberg",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 11.846623,
      "latitude": 48.819453
    }
  },
  "8000412": {
    "id": "8000412",
    "name": "Achern",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.065319,
      "latitude": 48.633988
    }
  },
  "8000413": {
    "id": "8000413",
    "name": "Achim",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.030446,
      "latitude": 53.015986
    }
  },
  "8000414": {
    "id": "8000414",
    "name": "Achmer",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.942158,
      "latitude": 52.390481
    }
  },
  "8000416": {
    "id": "8000416",
    "name": "Achterwehr",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.964021,
      "latitude": 54.31491
    }
  },
  "8000418": {
    "id": "8000418",
    "name": "Adelebsen",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.760046,
      "latitude": 51.577685
    }
  },
  "8000419": {
    "id": "8000419",
    "name": "Adelschlag",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 11.211445,
      "latitude": 48.840758
    }
  },
  "8000420": {
    "id": "8000420",
    "name": "Adelsdorf (Mittelfr)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 10.687041,
      "latitude": 49.474947
    }
  },
  "8000423": {
    "id": "8000423",
    "name": "Adelsheim Nord",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.392639,
      "latitude": 49.421524
    }
  },
  "8000424": {
    "id": "8000424",
    "name": "Adelsheim Ost",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.395129,
      "latitude": 49.403123
    }
  },
  "8000427": {
    "id": "8000427",
    "name": "Kirchen",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.880303,
      "latitude": 50.806932
    }
  },
  "8000430": {
    "id": "8000430",
    "name": "Kaarster See",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 6.592958,
      "latitude": 51.227061
    }
  },
  "8000431": {
    "id": "8000431",
    "name": "Affaltrach",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.379012,
      "latitude": 49.137833
    }
  },
  "8000432": {
    "id": "8000432",
    "name": "Kaarst Mitte/Holzbüttgen",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 6.617247,
      "latitude": 51.219501
    }
  },
  "8000433": {
    "id": "8000433",
    "name": "Agatharied",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 11.824473,
      "latitude": 47.765603
    }
  },
  "8000434": {
    "id": "8000434",
    "name": "Agathenburg",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.531037,
      "latitude": 53.564265
    }
  },
  "8000435": {
    "id": "8000435",
    "name": "Kirchhain (Bz Kassel)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.921398,
      "latitude": 50.823778
    }
  },
  "8000436": {
    "id": "8000436",
    "name": "Aha",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.134347,
      "latitude": 47.83322
    }
  },
  "8000437": {
    "id": "8000437",
    "name": "Ahaus",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.016449,
      "latitude": 52.081683
    }
  },
  "8000438": {
    "id": "8000438",
    "name": "Kaarst IKEA",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 6.630011,
      "latitude": 51.217011
    }
  },
  "8000440": {
    "id": "8000440",
    "name": "Schnega",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 10.890386,
      "latitude": 52.869058
    }
  },
  "8000441": {
    "id": "8000441",
    "name": "Ahlen (Westf)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.895486,
      "latitude": 51.761065
    }
  },
  "8000442": {
    "id": "8000442",
    "name": "Ahlhorn",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.209452,
      "latitude": 52.899513
    }
  },
  "8000443": {
    "id": "8000443",
    "name": "Ahlten",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.904611,
      "latitude": 52.376062
    }
  },
  "8000445": {
    "id": "8000445",
    "name": "Soltendieck",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 10.761418,
      "latitude": 52.874208
    }
  },
  "8000446": {
    "id": "8000446",
    "name": "Ahrensburg",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 10.236205,
      "latitude": 53.669169
    }
  },
  "8000448": {
    "id": "8000448",
    "name": "Ahrweiler",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.107069,
      "latitude": 50.546542
    }
  },
  "8000449": {
    "id": "8000449",
    "name": "Ahrweiler Markt",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.094232,
      "latitude": 50.544231
    }
  },
  "8000451": {
    "id": "8000451",
    "name": "Aich (Niederbay)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 12.398165,
      "latitude": 48.417312
    }
  },
  "8000452": {
    "id": "8000452",
    "name": "Aichach",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 11.122721,
      "latitude": 48.461116
    }
  },
  "8000453": {
    "id": "8000453",
    "name": "Freiburg Messe/Universität",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.832669,
      "latitude": 48.012914
    }
  },
  "8000454": {
    "id": "8000454",
    "name": "Aichstetten",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 10.074939,
      "latitude": 47.887883
    }
  },
  "8000456": {
    "id": "8000456",
    "name": "Tuttlingen Nord",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.822525,
      "latitude": 47.990486
    }
  },
  "8000457": {
    "id": "8000457",
    "name": "Ahnatal Casselbreite",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.433271,
      "latitude": 51.362879
    }
  },
  "8000458": {
    "id": "8000458",
    "name": "Esens ZOB",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.608676,
      "latitude": 53.646598
    }
  },
  "8000459": {
    "id": "8000459",
    "name": "Ainring",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 12.964503,
      "latitude": 47.815034
    }
  },
  "8000460": {
    "id": "8000460",
    "name": "Esens Bahnhofstraße",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.612946,
      "latitude": 53.637186
    }
  },
  "8000462": {
    "id": "8000462",
    "name": "Münster-Albachten",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.528052,
      "latitude": 51.914502
    }
  },
  "8000463": {
    "id": "8000463",
    "name": "Albbruck",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.131776,
      "latitude": 47.592237
    }
  },
  "8000464": {
    "id": "8000464",
    "name": "Albersdorf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.292149,
      "latitude": 54.146317
    }
  },
  "8000466": {
    "id": "8000466",
    "name": "Albersweiler (Pfalz)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.024778,
      "latitude": 49.218457
    }
  },
  "8000468": {
    "id": "8000468",
    "name": "Albig",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.116576,
      "latitude": 49.771375
    }
  },
  "8000471": {
    "id": "8000471",
    "name": "Albshausen",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.434866,
      "latitude": 50.545715
    }
  },
  "8000473": {
    "id": "8000473",
    "name": "Albstadt-Ebingen",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.026958,
      "latitude": 48.21029
    }
  },
  "8000474": {
    "id": "8000474",
    "name": "Albstadt-Laufen Ort",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.917317,
      "latitude": 48.222857
    }
  },
  "8000475": {
    "id": "8000475",
    "name": "Albstadt-Lautlingen",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.954622,
      "latitude": 48.213634
    }
  },
  "8000477": {
    "id": "8000477",
    "name": "Aldekerk",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 6.412544,
      "latitude": 51.435755
    }
  },
  "8000479": {
    "id": "8000479",
    "name": "Kitzingen",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 10.155212,
      "latitude": 49.732497
    }
  },
  "8000480": {
    "id": "8000480",
    "name": "Ahrensburg-Gartenholz",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 10.25155,
      "latitude": 53.688245
    }
  },
  "8000481": {
    "id": "8000481",
    "name": "Aldingen (b Spaichingen)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.713037,
      "latitude": 48.095848
    }
  },
  "8000482": {
    "id": "8000482",
    "name": "Aletshausen",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 10.383628,
      "latitude": 48.20131
    }
  },
  "8000483": {
    "id": "8000483",
    "name": "Alfeld (Leine)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.818063,
      "latitude": 51.981148
    }
  },
  "8000488": {
    "id": "8000488",
    "name": "Algermissen",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.966475,
      "latitude": 52.251876
    }
  },
  "8000489": {
    "id": "8000489",
    "name": "Aligse",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.979356,
      "latitude": 52.403677
    }
  },
  "8000491": {
    "id": "8000491",
    "name": "Altenglan",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.461882,
      "latitude": 49.548532
    }
  },
  "8000492": {
    "id": "8000492",
    "name": "Allendorf (Dillkr)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.185487,
      "latitude": 50.74381
    }
  },
  "8000495": {
    "id": "8000495",
    "name": "Alfter-Impekoven",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.019829,
      "latitude": 50.711017
    }
  },
  "8000496": {
    "id": "8000496",
    "name": "Allensbach",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.068228,
      "latitude": 47.714886
    }
  },
  "8000498": {
    "id": "8000498",
    "name": "Allersberg (Rothsee)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 11.212568,
      "latitude": 49.262127
    }
  },
  "8000499": {
    "id": "8000499",
    "name": "Allmendingen",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.722382,
      "latitude": 48.327734
    }
  },
  "8000500": {
    "id": "8000500",
    "name": "Alpen",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 6.518159,
      "latitude": 51.583295
    }
  },
  "8000501": {
    "id": "8000501",
    "name": "Alpirsbach",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.398253,
      "latitude": 48.343807
    }
  },
  "8000502": {
    "id": "8000502",
    "name": "Alsdorf-Annapark",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 6.15699,
      "latitude": 50.870441
    }
  },
  "8000503": {
    "id": "8000503",
    "name": "Biblis",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.450408,
      "latitude": 49.688881
    }
  },
  "8000504": {
    "id": "8000504",
    "name": "Altdorf West",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 11.341465,
      "latitude": 49.391149
    }
  },
  "8000505": {
    "id": "8000505",
    "name": "Alsenz",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.817199,
      "latitude": 49.72722
    }
  },
  "8000506": {
    "id": "8000506",
    "name": "Alsheim",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.342466,
      "latitude": 49.765532
    }
  },
  "8000507": {
    "id": "8000507",
    "name": "Alsdorf-Busch",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 6.139839,
      "latitude": 50.876733
    }
  },
  "8000508": {
    "id": "8000508",
    "name": "Altbach",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.382383,
      "latitude": 48.720392
    }
  },
  "8000509": {
    "id": "8000509",
    "name": "Altdorf (b Nürnberg)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 11.353528,
      "latitude": 49.390007
    }
  },
  "8000510": {
    "id": "8000510",
    "name": "Alsdorf Poststraße",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 6.19666,
      "latitude": 50.856022
    }
  },
  "8000511": {
    "id": "8000511",
    "name": "Alte Veste",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 10.972359,
      "latitude": 49.454325
    }
  },
  "8000512": {
    "id": "8000512",
    "name": "Hamburg Alte Wöhr",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 10.035575,
      "latitude": 53.597642
    }
  },
  "8000513": {
    "id": "8000513",
    "name": "Altena (Westf)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.669389,
      "latitude": 51.301663
    }
  },
  "8000514": {
    "id": "8000514",
    "name": "Altenahr",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 6.989706,
      "latitude": 50.515655
    }
  },
  "8000515": {
    "id": "8000515",
    "name": "Altenau (Bay)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 11.017377,
      "latitude": 47.648365
    }
  },
  "8000517": {
    "id": "8000517",
    "name": "Altenbamberg",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.830746,
      "latitude": 49.786854
    }
  },
  "8000518": {
    "id": "8000518",
    "name": "Altenberge",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.481299,
      "latitude": 52.052262
    }
  },
  "8000520": {
    "id": "8000520",
    "name": "Felsberg-Altenbrunslar",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.445568,
      "latitude": 51.165773
    }
  },
  "8000521": {
    "id": "8000521",
    "name": "Alsdorf-Kellersberg",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 6.169998,
      "latitude": 50.867097
    }
  },
  "8000522": {
    "id": "8000522",
    "name": "Hude",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.460476,
      "latitude": 53.109645
    }
  },
  "8000524": {
    "id": "8000524",
    "name": "Altenerding",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 11.901744,
      "latitude": 48.293575
    }
  },
  "8000525": {
    "id": "8000525",
    "name": "Altenfeld (Rhön)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.849201,
      "latitude": 50.450663
    }
  },
  "8000526": {
    "id": "8000526",
    "name": "Altengörs",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 10.355465,
      "latitude": 53.898718
    }
  },
  "8000527": {
    "id": "8000527",
    "name": "Alsdorf-Mariadorf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 6.18901,
      "latitude": 50.861641
    }
  },
  "8000530": {
    "id": "8000530",
    "name": "Altenhasungen",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.225737,
      "latitude": 51.343543
    }
  },
  "8000532": {
    "id": "8000532",
    "name": "Lennestadt-Altenhundem",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.071513,
      "latitude": 51.104134
    }
  },
  "8000533": {
    "id": "8000533",
    "name": "Altenmarkt (Alz)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 12.536023,
      "latitude": 47.999817
    }
  },
  "8000534": {
    "id": "8000534",
    "name": "Muhr am See",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 10.72049,
      "latitude": 49.154355
    }
  },
  "8000537": {
    "id": "8000537",
    "name": "Altenseelbach",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.991608,
      "latitude": 50.783695
    }
  },
  "8000538": {
    "id": "8000538",
    "name": "Altenstadt (Hess)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.943979,
      "latitude": 50.2834
    }
  },
  "8000539": {
    "id": "8000539",
    "name": "Altenstadt (Iller)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 10.109979,
      "latitude": 48.161191
    }
  },
  "8000540": {
    "id": "8000540",
    "name": "Altenstadt (Waldnaab)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 12.164607,
      "latitude": 49.7161
    }
  },
  "8000544": {
    "id": "8000544",
    "name": "Altglashütten-Falkau",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.114113,
      "latitude": 47.859387
    }
  },
  "8000545": {
    "id": "8000545",
    "name": "Althegnenberg",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 11.06235,
      "latitude": 48.236584
    }
  },
  "8000546": {
    "id": "8000546",
    "name": "Altheim (Hess)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.890906,
      "latitude": 49.923329
    }
  },
  "8000547": {
    "id": "8000547",
    "name": "Lauterecken-Grumbach",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.590707,
      "latitude": 49.653706
    }
  },
  "8000553": {
    "id": "8000553",
    "name": "Altmorschen",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.610754,
      "latitude": 51.067278
    }
  },
  "8000555": {
    "id": "8000555",
    "name": "Altötting",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 12.67479,
      "latitude": 48.221239
    }
  },
  "8000556": {
    "id": "8000556",
    "name": "Altomünster",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 11.255006,
      "latitude": 48.385067
    }
  },
  "8000558": {
    "id": "8000558",
    "name": "Alzey Süd",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.118733,
      "latitude": 49.738133
    }
  },
  "8000559": {
    "id": "8000559",
    "name": "Altshausen",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.551398,
      "latitude": 47.930591
    }
  },
  "8000561": {
    "id": "8000561",
    "name": "Altstädten (Allgäu)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 10.280908,
      "latitude": 47.488546
    }
  },
  "8000562": {
    "id": "8000562",
    "name": "Alttann",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.793037,
      "latitude": 47.841211
    }
  },
  "8000563": {
    "id": "8000563",
    "name": "Lebach",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 6.908461,
      "latitude": 49.408336
    }
  },
  "8000566": {
    "id": "8000566",
    "name": "Amberg",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 11.862902,
      "latitude": 49.447619
    }
  },
  "8000569": {
    "id": "8000569",
    "name": "Münster-Amelsbüren",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.598896,
      "latitude": 51.88366
    }
  },
  "8000571": {
    "id": "8000571",
    "name": "Lippstadt",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.348785,
      "latitude": 51.670688
    }
  },
  "8000575": {
    "id": "8000575",
    "name": "Amorbach",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.223148,
      "latitude": 49.645607
    }
  },
  "8000576": {
    "id": "8000576",
    "name": "Ampfing",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 12.41092,
      "latitude": 48.253951
    }
  },
  "8000577": {
    "id": "8000577",
    "name": "Amstetten (Württ)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.872537,
      "latitude": 48.578551
    }
  },
  "8000578": {
    "id": "8000578",
    "name": "Hannover Anderten-Misburg",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.861139,
      "latitude": 52.36906
    }
  },
  "8000579": {
    "id": "8000579",
    "name": "Angermund",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 6.781992,
      "latitude": 51.330392
    }
  },
  "8000580": {
    "id": "8000580",
    "name": "Angersbach",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.447258,
      "latitude": 50.630771
    }
  },
  "8000582": {
    "id": "8000582",
    "name": "Annweiler am Trifels",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.96615,
      "latitude": 49.205387
    }
  },
  "8000584": {
    "id": "8000584",
    "name": "Anrath",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 6.451198,
      "latitude": 51.285877
    }
  },
  "8000585": {
    "id": "8000585",
    "name": "Langenlonsheim",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.899891,
      "latitude": 49.901368
    }
  },
  "8000586": {
    "id": "8000586",
    "name": "Langwedel",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.195263,
      "latitude": 52.977845
    }
  },
  "8000588": {
    "id": "8000588",
    "name": "Anwanden",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 10.930397,
      "latitude": 49.411689
    }
  },
  "8000589": {
    "id": "8000589",
    "name": "Anzefahr",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.859588,
      "latitude": 50.84573
    }
  },
  "8000590": {
    "id": "8000590",
    "name": "Anzenkirchen",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 13.021998,
      "latitude": 48.434742
    }
  },
  "8000595": {
    "id": "8000595",
    "name": "Nottuln-Appelhülsen",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.42633,
      "latitude": 51.892137
    }
  },
  "8000596": {
    "id": "8000596",
    "name": "Appenweier",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.973189,
      "latitude": 48.541462
    }
  },
  "8000597": {
    "id": "8000597",
    "name": "Ardey",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.727325,
      "latitude": 51.481357
    }
  },
  "8000599": {
    "id": "8000599",
    "name": "Arfurt (Lahn)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.211079,
      "latitude": 50.4064
    }
  },
  "8000601": {
    "id": "8000601",
    "name": "Arloff",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 6.786604,
      "latitude": 50.597681
    }
  },
  "8000602": {
    "id": "8000602",
    "name": "Armsheim",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.074111,
      "latitude": 49.808374
    }
  },
  "8000603": {
    "id": "8000603",
    "name": "Arnbach",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 11.343964,
      "latitude": 48.341344
    }
  },
  "8000605": {
    "id": "8000605",
    "name": "Arnsberg (Westf)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.066937,
      "latitude": 51.405416
    }
  },
  "8000606": {
    "id": "8000606",
    "name": "Arnschwang",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 12.811597,
      "latitude": 49.274604
    }
  },
  "8000609": {
    "id": "8000609",
    "name": "Bad Arolsen",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.997788,
      "latitude": 51.381604
    }
  },
  "8000611": {
    "id": "8000611",
    "name": "Arsbeck",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 6.206566,
      "latitude": 51.152001
    }
  },
  "8000613": {
    "id": "8000613",
    "name": "Arzberg (Oberfr)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 12.197687,
      "latitude": 50.054634
    }
  },
  "8000615": {
    "id": "8000615",
    "name": "Mainz-Kastel",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.283173,
      "latitude": 50.006578
    }
  },
  "8000618": {
    "id": "8000618",
    "name": "Aschaffenburg Hochschule",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.160412,
      "latitude": 49.974441
    }
  },
  "8000619": {
    "id": "8000619",
    "name": "Aschaffenburg Süd",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.152582,
      "latitude": 49.968463
    }
  },
  "8000621": {
    "id": "8000621",
    "name": "Aschau (Chiemgau)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 12.325568,
      "latitude": 47.779105
    }
  },
  "8000623": {
    "id": "8000623",
    "name": "Ascheberg (Westf)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.600748,
      "latitude": 51.78299
    }
  },
  "8000624": {
    "id": "8000624",
    "name": "Aschendorf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.337157,
      "latitude": 53.052177
    }
  },
  "8000625": {
    "id": "8000625",
    "name": "Asselheim",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.161603,
      "latitude": 49.576219
    }
  },
  "8000627": {
    "id": "8000627",
    "name": "Ashausen",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 10.147517,
      "latitude": 53.368103
    }
  },
  "8000630": {
    "id": "8000630",
    "name": "Asperg",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.1478,
      "latitude": 48.907359
    }
  },
  "8000631": {
    "id": "8000631",
    "name": "Mannheim-Friedrichsfeld",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.580122,
      "latitude": 49.448671
    }
  },
  "8000632": {
    "id": "8000632",
    "name": "Assenheim (Oberhess)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.812844,
      "latitude": 50.304894
    }
  },
  "8000633": {
    "id": "8000633",
    "name": "Aßlar",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.462759,
      "latitude": 50.588656
    }
  },
  "8000634": {
    "id": "8000634",
    "name": "Aßling (Oberbay)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 11.993515,
      "latitude": 47.989488
    }
  },
  "8000635": {
    "id": "8000635",
    "name": "Assmannshausen",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.867359,
      "latitude": 49.985327
    }
  },
  "8000638": {
    "id": "8000638",
    "name": "Attendorn",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.907846,
      "latitude": 51.124611
    }
  },
  "8000640": {
    "id": "8000640",
    "name": "Miltenberg",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.24847,
      "latitude": 49.706482
    }
  },
  "8000643": {
    "id": "8000643",
    "name": "Au im Murgtal",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.36235,
      "latitude": 48.718864
    }
  },
  "8000644": {
    "id": "8000644",
    "name": "Moers",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 6.641653,
      "latitude": 51.45083
    }
  },
  "8000647": {
    "id": "8000647",
    "name": "Aue-Wingeshausen",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.28978,
      "latitude": 51.05205
    }
  },
  "8000649": {
    "id": "8000649",
    "name": "Auerbach (b Mosbach Baden)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.223274,
      "latitude": 49.399563
    }
  },
  "8000652": {
    "id": "8000652",
    "name": "Kirchheimbolanden",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.016526,
      "latitude": 49.668547
    }
  },
  "8000653": {
    "id": "8000653",
    "name": "Aufhausen (b Erding)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 11.894373,
      "latitude": 48.274365
    }
  },
  "8000655": {
    "id": "8000655",
    "name": "Aufhausen (Württ)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 10.317189,
      "latitude": 48.856129
    }
  },
  "8000657": {
    "id": "8000657",
    "name": "Auggen",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.586787,
      "latitude": 47.789946
    }
  },
  "8000658": {
    "id": "8000658",
    "name": "Augsburg Haunstetterstraße",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 10.900984,
      "latitude": 48.355286
    }
  },
  "8000659": {
    "id": "8000659",
    "name": "Augsburg Messe",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 10.886089,
      "latitude": 48.338683
    }
  },
  "8000660": {
    "id": "8000660",
    "name": "Augsburg Morellstraße",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 10.892948,
      "latitude": 48.355088
    }
  },
  "8000661": {
    "id": "8000661",
    "name": "Augsburg-Hochzoll",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 10.943377,
      "latitude": 48.352976
    }
  },
  "8000662": {
    "id": "8000662",
    "name": "Augsburg-Oberhausen",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 10.872533,
      "latitude": 48.380771
    }
  },
  "8000663": {
    "id": "8000663",
    "name": "Monsheim",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.208158,
      "latitude": 49.633669
    }
  },
  "8000664": {
    "id": "8000664",
    "name": "Augustfehn",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.75929,
      "latitude": 53.220797
    }
  },
  "8000667": {
    "id": "8000667",
    "name": "Montabaur",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.825334,
      "latitude": 50.444838
    }
  },
  "8000668": {
    "id": "8000668",
    "name": "Aumenau",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.249247,
      "latitude": 50.400422
    }
  },
  "8000669": {
    "id": "8000669",
    "name": "Aumühle",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 10.314672,
      "latitude": 53.529855
    }
  },
  "8000671": {
    "id": "8000671",
    "name": "Auringen-Medenbach",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.332721,
      "latitude": 50.113837
    }
  },
  "8000672": {
    "id": "8000672",
    "name": "Außenried",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 13.181763,
      "latitude": 49.01576
    }
  },
  "8000674": {
    "id": "8000674",
    "name": "Auw an der Kyll",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 6.614523,
      "latitude": 49.903597
    }
  },
  "8000675": {
    "id": "8000675",
    "name": "Aying",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 11.769657,
      "latitude": 47.968804
    }
  },
  "8000677": {
    "id": "8000677",
    "name": "Hückelhoven-Baal",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 6.274147,
      "latitude": 51.03346
    }
  },
  "8000678": {
    "id": "8000678",
    "name": "Baar-Ebenhausen",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 11.460841,
      "latitude": 48.674853
    }
  },
  "8000681": {
    "id": "8000681",
    "name": "Babstadt",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.060704,
      "latitude": 49.240193
    }
  },
  "8000683": {
    "id": "8000683",
    "name": "Bacharach",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.769682,
      "latitude": 50.056387
    }
  },
  "8000685": {
    "id": "8000685",
    "name": "Bachern",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 11.377206,
      "latitude": 48.280496
    }
  },
  "8000686": {
    "id": "8000686",
    "name": "Bachheim",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.399394,
      "latitude": 47.862075
    }
  },
  "8000687": {
    "id": "8000687",
    "name": "Mülheim (Ruhr) Styrum",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 6.852719,
      "latitude": 51.449211
    }
  },
  "8000688": {
    "id": "8000688",
    "name": "Neufahrn (Niederbay)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 12.19046,
      "latitude": 48.729885
    }
  },
  "8000689": {
    "id": "8000689",
    "name": "Bad Abbach",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 11.994324,
      "latitude": 48.92273
    }
  },
  "8000690": {
    "id": "8000690",
    "name": "Bad Aibling",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 12.004042,
      "latitude": 47.861877
    }
  },
  "8000691": {
    "id": "8000691",
    "name": "Bad Bergzabern",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.003087,
      "latitude": 49.103234
    }
  },
  "8000694": {
    "id": "8000694",
    "name": "Bad Breisig",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.304562,
      "latitude": 50.50422
    }
  },
  "8000696": {
    "id": "8000696",
    "name": "Bad Aibling Kurpark",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 12.013768,
      "latitude": 47.857419
    }
  },
  "8000697": {
    "id": "8000697",
    "name": "Bad Driburg (Westf)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.030806,
      "latitude": 51.730322
    }
  },
  "8000698": {
    "id": "8000698",
    "name": "Bad Dürkheim",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.1707,
      "latitude": 49.460636
    }
  },
  "8000701": {
    "id": "8000701",
    "name": "Bad Ems",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.728637,
      "latitude": 50.327654
    }
  },
  "8000702": {
    "id": "8000702",
    "name": "Bad Ems West",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.706038,
      "latitude": 50.330693
    }
  },
  "8000704": {
    "id": "8000704",
    "name": "Bad Friedrichshall-Kochendorf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.211552,
      "latitude": 49.217756
    }
  },
  "8000706": {
    "id": "8000706",
    "name": "Bad Wimpfen Im Tal",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.187047,
      "latitude": 49.229847
    }
  },
  "8000707": {
    "id": "8000707",
    "name": "Bad Griesbach (Schwarzwald)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.230568,
      "latitude": 48.448621
    }
  },
  "8000708": {
    "id": "8000708",
    "name": "Bad Dürkheim-Trift",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.193074,
      "latitude": 49.466416
    }
  },
  "8000710": {
    "id": "8000710",
    "name": "Bad Höhenstadt",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 13.323191,
      "latitude": 48.49461
    }
  },
  "8000711": {
    "id": "8000711",
    "name": "Bad Hönningen",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.310872,
      "latitude": 50.513677
    }
  },
  "8000712": {
    "id": "8000712",
    "name": "Bad Homburg",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.620628,
      "latitude": 50.219901
    }
  },
  "8000713": {
    "id": "8000713",
    "name": "Bad Honnef (Rhein)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.219533,
      "latitude": 50.639769
    }
  },
  "8000714": {
    "id": "8000714",
    "name": "Bad Kissingen",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 10.079883,
      "latitude": 50.191549
    }
  },
  "8000715": {
    "id": "8000715",
    "name": "Bad König",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.001537,
      "latitude": 49.738573
    }
  },
  "8000716": {
    "id": "8000716",
    "name": "Bad Kohlgrub",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 11.058206,
      "latitude": 47.668007
    }
  },
  "8000717": {
    "id": "8000717",
    "name": "Bad Kohlgrub Kurhaus",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 11.039184,
      "latitude": 47.670209
    }
  },
  "8000718": {
    "id": "8000718",
    "name": "Bad Krozingen",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.69784,
      "latitude": 47.919966
    }
  },
  "8000720": {
    "id": "8000720",
    "name": "Neumarkt-St Veit",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 12.503078,
      "latitude": 48.361318
    }
  },
  "8000721": {
    "id": "8000721",
    "name": "Bad Liebenzell",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.734278,
      "latitude": 48.772763
    }
  },
  "8000724": {
    "id": "8000724",
    "name": "Bad Mergentheim",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.771661,
      "latitude": 49.493644
    }
  },
  "8000725": {
    "id": "8000725",
    "name": "Bad Münder (Deister)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.468059,
      "latitude": 52.178192
    }
  },
  "8000726": {
    "id": "8000726",
    "name": "Bad Münster am Stein",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.846989,
      "latitude": 49.813426
    }
  },
  "8000727": {
    "id": "8000727",
    "name": "Bad Münstereifel",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 6.764364,
      "latitude": 50.558911
    }
  },
  "8000728": {
    "id": "8000728",
    "name": "Bad Nauheim",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.749335,
      "latitude": 50.367899
    }
  },
  "8000729": {
    "id": "8000729",
    "name": "Bad Neuenahr",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.144302,
      "latitude": 50.547764
    }
  },
  "8000730": {
    "id": "8000730",
    "name": "Bad Neustadt (Saale)",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 10.22576,
      "latitude": 50.327942
    }
  },
  "8000731": {
    "id": "8000731",
    "name": "Bad Niedernau",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.896534,
      "latitude": 48.460766
    }
  },
  "8000732": {
    "id": "8000732",
    "name": "Bad Oeynhausen",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.796933,
      "latitude": 52.205465
    }
  },
  "8000733": {
    "id": "8000733",
    "name": "Bad Oeynhausen Süd",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.801724,
      "latitude": 52.197123
    }
  },
  "8000734": {
    "id": "8000734",
    "name": "Bad Peterstal",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.201946,
      "latitude": 48.428899
    }
  },
  "8000735": {
    "id": "8000735",
    "name": "Bad Pyrmont",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.27257,
      "latitude": 51.974325
    }
  },
  "8000736": {
    "id": "8000736",
    "name": "Bad Rappenau",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.101308,
      "latitude": 49.237721
    }
  },
  "8000737": {
    "id": "8000737",
    "name": "Bad Reichenhall",
    "isMeta": true,
    "country": "DE",
    "location": {
      "longitude": 12.88182,
      "latitude": 47.731165
    }
  },
  "8000738": {
    "id": "8000738",
    "name": "Bad Reichenhall-Kirchberg",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 12.874,
      "latitude": 47.718535
    }
  },
  "8000739": {
    "id": "8000739",
    "name": "Bad Sachsa",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 10.573759,
      "latitude": 51.582351
    }
  },
  "8000740": {
    "id": "8000740",
    "name": "Bad Salzdetfurth",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 10.005596,
      "latitude": 52.062635
    }
  },
  "8000741": {
    "id": "8000741",
    "name": "Bad Salzhausen",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.980376,
      "latitude": 50.418877
    }
  },
  "8000742": {
    "id": "8000742",
    "name": "Boppard-Bad Salzig",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 7.635482,
      "latitude": 50.205248
    }
  },
  "8000743": {
    "id": "8000743",
    "name": "Bad Salzschlirf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.494487,
      "latitude": 50.626932
    }
  },
  "8000744": {
    "id": "8000744",
    "name": "Bad Salzuflen",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.740058,
      "latitude": 52.081567
    }
  },
  "8000745": {
    "id": "8000745",
    "name": "Bad Sassendorf",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 8.161737,
      "latitude": 51.586567
    }
  },
  "8000746": {
    "id": "8000746",
    "name": "Bad Schussenried",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.6685,
      "latitude": 47.994037
    }
  },
  "8000749": {
    "id": "8000749",
    "name": "Bad Schwartau",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 10.702727,
      "latitude": 53.916148
    }
  },
  "8000750": {
    "id": "8000750",
    "name": "Bad Sebastiansweiler-Belsen",
    "isMeta": false,
    "country": "DE",
    "location": {
      "longitude": 9.030023,
      "latitude": 48.395567
    }
  },
  "8000751": {
    "id": "8000751",
    "name": "Bad Segeberg",
    "isMeta": false,
    "country": "DE",
    "location": {
  }