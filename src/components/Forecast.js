import { convertTemperature, selectWeatherIcon, selectDescription, convertDatetime } from "../helper"
import ForecastCard from "./ForecastCard"

function Forecast(data) {
    const forecast = document.createElement("div")
    const forecastGrid = document.createElement("div")

    forecast.className = "forecast"
    forecastGrid.className = "forecast__grid"

    const { time, weathercode, temperature_2m_min, temperature_2m_max } = data.daily

    for (let i = 1; i < time.length; i++) {
        forecastGrid.append(
            ForecastCard(
                convertDatetime(time[i], "UTC"),
                selectWeatherIcon(weathercode[i]),
                selectDescription(weathercode[i]),
                convertTemperature(temperature_2m_min[i]),
                convertTemperature(temperature_2m_max[i])
            )
        )
    }

    forecast.append(forecastGrid)

    return forecast
}

export default Forecast