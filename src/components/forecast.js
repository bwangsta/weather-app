import { convertTemperature, selectWeatherIcon, selectDescription, convertDatetime } from "../weather-logic"
import ForecastCard from "./forecast-card"

function Forecast(data) {
    const forecast = document.createElement("section")
    const forecastGrid = document.createElement("div")

    forecast.className = "forecast container"
    forecastGrid.className = "forecast__grid"

    const { time, weathercode, temperature_2m_min, temperature_2m_max } = data.daily

    for (let i = 1; i < time.length; i++) {
        forecastGrid.append(
            ForecastCard(
                convertDatetime(time[i], data.timezone),
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
