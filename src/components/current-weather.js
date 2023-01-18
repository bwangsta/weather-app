import WeatherInfo from "../components/weather-info"
import LocationInfo from "../components/location-info"

function CurrentWeather(name, state, country, data) {
    const currentWeather = document.createElement("section")

    currentWeather.className = "current-weather container"

    currentWeather.append(
        LocationInfo(name, state, country),
        WeatherInfo(data)
    )

    return currentWeather
}

export default CurrentWeather