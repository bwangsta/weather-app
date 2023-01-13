function testData() {
    async function fetchWeather(lat, lon) {
        return {
            "latitude": 33.667957,
            "longitude": -117.82831,
            "generationtime_ms": 0.5279779434204102,
            "utc_offset_seconds": 0,
            "timezone": "GMT",
            "timezone_abbreviation": "GMT",
            "elevation": 18,
            "current_weather": {
                "temperature": 69.7,
                "windspeed": 5.8,
                "winddirection": 274,
                "weathercode": 3,
                "time": "2023-01-13T00:00"
            },
            "daily_units": {
                "time": "iso8601",
                "weathercode": "wmo code",
                "temperature_2m_max": "°F",
                "temperature_2m_min": "°F"
            },
            "daily": {
                "time": [
                    "2023-01-13",
                    "2023-01-14",
                    "2023-01-15",
                    "2023-01-16",
                    "2023-01-17",
                    "2023-01-18",
                    "2023-01-19"
                ],
                "weathercode": [
                    3,
                    51,
                    80,
                    80,
                    51,
                    3,
                    3
                ],
                "temperature_2m_max": [
                    69.7,
                    61.7,
                    59.2,
                    59.2,
                    58.9,
                    58.5,
                    58.5
                ],
                "temperature_2m_min": [
                    48.4,
                    51.1,
                    55.6,
                    50.3,
                    51,
                    51,
                    52
                ]
            }
        }
    }
    async function fetchGeocode(city) {
        return {
            "results": [
                {
                    "id": 5359777,
                    "name": "Irvine",
                    "latitude": 33.66946,
                    "longitude": -117.82311,
                    "elevation": 17,
                    "feature_code": "PPL",
                    "country_code": "US",
                    "admin1_id": 5332921,
                    "admin2_id": 5379524,
                    "timezone": "America/Los_Angeles",
                    "population": 256927,
                    "postcodes": [
                        "92602",
                        "92603",
                        "92604",
                        "92606",
                        "92612",
                        "92614",
                        "92616",
                        "92618",
                        "92619",
                        "92620",
                        "92623",
                        "92697"
                    ],
                    "country_id": 6252001,
                    "country": "United States",
                    "admin1": "California",
                    "admin2": "Orange"
                },
                {
                    "id": 4295954,
                    "name": "Irvine",
                    "latitude": 37.70064,
                    "longitude": -83.97381,
                    "elevation": 207,
                    "feature_code": "PPLA2",
                    "country_code": "US",
                    "admin1_id": 6254925,
                    "admin2_id": 4291280,
                    "timezone": "America/New_York",
                    "population": 2416,
                    "postcodes": [
                        "40336"
                    ],
                    "country_id": 6252001,
                    "country": "United States",
                    "admin1": "Kentucky",
                    "admin2": "Estill"
                },
                {
                    "id": 2646032,
                    "name": "Irvine",
                    "latitude": 55.6194,
                    "longitude": -4.65508,
                    "elevation": 14,
                    "feature_code": "PPLA2",
                    "country_code": "GB",
                    "admin1_id": 2638360,
                    "admin2_id": 3333232,
                    "timezone": "Europe/London",
                    "population": 33740,
                    "country_id": 2635167,
                    "country": "United Kingdom",
                    "admin1": "Scotland",
                    "admin2": "North Ayrshire"
                },
                {
                    "id": 4180564,
                    "name": "Austell",
                    "latitude": 33.81261,
                    "longitude": -84.63438,
                    "elevation": 283,
                    "feature_code": "PPL",
                    "country_code": "US",
                    "admin1_id": 4197000,
                    "admin2_id": 4188547,
                    "timezone": "America/New_York",
                    "population": 7107,
                    "postcodes": [
                        "30106",
                        "30168"
                    ],
                    "country_id": 6252001,
                    "country": "United States",
                    "admin1": "Georgia",
                    "admin2": "Cobb"
                },
                {
                    "id": 5195010,
                    "name": "Irvine",
                    "latitude": 41.83923,
                    "longitude": -79.26838,
                    "elevation": 353,
                    "feature_code": "PPL",
                    "country_code": "US",
                    "admin1_id": 6254927,
                    "admin2_id": 5217991,
                    "admin3_id": 5181765,
                    "timezone": "America/New_York",
                    "postcodes": [
                        "16329",
                        "16368",
                        "16369"
                    ],
                    "country_id": 6252001,
                    "country": "United States",
                    "admin1": "Pennsylvania",
                    "admin2": "Warren",
                    "admin3": "Brokenstraw Township"
                },
                {
                    "id": 4159826,
                    "name": "Irvine",
                    "latitude": 29.40553,
                    "longitude": -82.25121,
                    "elevation": 47,
                    "feature_code": "PPL",
                    "country_code": "US",
                    "admin1_id": 4155751,
                    "admin2_id": 4163456,
                    "timezone": "America/New_York",
                    "country_id": 6252001,
                    "country": "United States",
                    "admin1": "Florida",
                    "admin2": "Marion"
                },
                {
                    "id": 5257570,
                    "name": "Irvine",
                    "latitude": 44.92552,
                    "longitude": -91.41988,
                    "elevation": 250,
                    "feature_code": "PPL",
                    "country_code": "US",
                    "admin1_id": 5279468,
                    "admin2_id": 5248507,
                    "admin3_id": 5248519,
                    "timezone": "America/Chicago",
                    "country_id": 6252001,
                    "country": "United States",
                    "admin1": "Wisconsin",
                    "admin2": "Chippewa",
                    "admin3": "City of Chippewa Falls"
                },
                {
                    "id": 5828494,
                    "name": "Irvine",
                    "latitude": 42.66497,
                    "longitude": -105.30554,
                    "elevation": 1449,
                    "feature_code": "PPL",
                    "country_code": "US",
                    "admin1_id": 5843591,
                    "admin2_id": 5821791,
                    "timezone": "America/Denver",
                    "country_id": 6252001,
                    "country": "United States",
                    "admin1": "Wyoming",
                    "admin2": "Converse"
                },
                {
                    "id": 5984025,
                    "name": "Irvine",
                    "latitude": 49.95009,
                    "longitude": -110.26831,
                    "elevation": 775,
                    "feature_code": "PPLL",
                    "country_code": "CA",
                    "admin1_id": 5883102,
                    "timezone": "America/Edmonton",
                    "country_id": 6251999,
                    "country": "Canada",
                    "admin1": "Alberta"
                },
                {
                    "id": 2162591,
                    "name": "Irvinebank",
                    "latitude": -17.43333,
                    "longitude": 145.21667,
                    "elevation": 845,
                    "feature_code": "PPL",
                    "country_code": "AU",
                    "admin1_id": 2152274,
                    "admin2_id": 12047266,
                    "timezone": "Australia/Brisbane",
                    "population": 123,
                    "country_id": 2077456,
                    "country": "Australia",
                    "admin1": "Queensland",
                    "admin2": "Mareeba"
                }
            ],
            "generationtime_ms": 0.68998337
        }
    }

    return {
        fetchGeocode,
        fetchWeather
    }
}

export default testData 