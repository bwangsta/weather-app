import { convertDateTime, convertTemperature, selectWeatherIcon } from "../helper"
import WeatherCard from "./WeatherCard"

function Forecast(data) {
    const forecast = document.createElement("div")
    const forecastGrid = document.createElement("div")

    forecast.className = "forecast"
    forecastGrid.className = "forecast__grid"

    for (let day of data.list) {
        const { id, description } = day.weather[0]
        forecastGrid.append(
            WeatherCard(
                convertDateTime(day.dt),
                selectWeatherIcon(id),
                description,
                convertTemperature(day.main.temp)
            )
        )
    }

    forecast.append(forecastGrid)

    return forecast
}

export default Forecast