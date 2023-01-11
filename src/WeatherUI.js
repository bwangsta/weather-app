import WeatherCard from "./components/WeatherCard"
import { selectWeatherIcon, convertTemperature, convertDateTime } from "./helper"

function WeatherUI() {
    function displayCurrentWeather(data) {
        const currentWeather = document.createElement("div")
        const cityName = document.createElement("p")
        const date = document.createElement("p")
        const weatherIcon = document.createElement("i")
        const description = document.createElement("p")
        const currentTemp = document.createElement("p")
        const minTemp = document.createElement("p")
        const maxTemp = document.createElement("p")

        const { temp, temp_min, temp_max } = data.main

        cityName.textContent = data.name
        date.textContent = convertDateTime(data.dt)
        description.textContent = data.weather[0].description
        currentTemp.textContent = convertTemperature(temp)
        minTemp.textContent = convertTemperature(temp_min)
        maxTemp.textContent = convertTemperature(temp_max)

        currentWeather.className = "current-weather"
        weatherIcon.className = "bi"
        weatherIcon.classList.add(selectWeatherIcon(data.weather[0].id))

        currentWeather.append(
            cityName,
            date,
            weatherIcon,
            description,
            currentTemp,
            minTemp,
            maxTemp
        )

        return currentWeather
    }

    function displayForecast(data) {
        const forecast = document.createElement("div")
        const forecastGrid = document.createElement("div")

        forecast.className = "forecast"
        forecastGrid.className = "forecast-grid"

        for (let day of data.list) {
            forecastGrid.append(
                WeatherCard(
                    convertDateTime(day.dt),
                    selectWeatherIcon(day.weather[0].id),
                    day.weather[0].description,
                    convertTemperature(day.main.temp)
                )
            )
        }

        forecast.append(forecastGrid)

        return forecast
    }

    return {
        displayCurrentWeather, displayForecast
    }
}

export default WeatherUI