import WeatherCard from "./components/WeatherCard"
import { selectWeatherIcon, convertTemperature, convertDateTime } from "./helper"

function WeatherUI() {
    async function displayCurrentWeather(data) {
        const currentWeather = document.querySelector(".current-weather-info")
        const cityName = document.createElement("p")
        const date = document.createElement("p")
        const currentTemp = document.createElement("p")
        const minTemp = document.createElement("p")
        const maxTemp = document.createElement("p")
        const weatherIcon = document.createElement("i")

        const { temp, temp_min, temp_max } = data.main

        cityName.textContent = data.name
        date.textContent = convertDateTime(data.dt)
        currentTemp.textContent = convertTemperature(temp)
        minTemp.textContent = convertTemperature(temp_min)
        maxTemp.textContent = convertTemperature(temp_max)

        weatherIcon.className = "bi"
        weatherIcon.classList.add = selectWeatherIcon(data.weather[0].id)

        currentWeather.append(
            cityName,
            date,
            weatherIcon,
            currentTemp,
            minTemp,
            maxTemp
        )
    }

    async function displayForecast(data) {
        const weatherForecast = document.querySelector(".weather-forecast")
        const forecastGrid = document.createElement("div")

        forecastGrid.className = "forecast-grid"

        for (let day of data.list) {
            const { temp, temp_min, temp_max } = day.main
            forecastGrid.append(
                WeatherCard(
                    convertDateTime(day.dt),
                    selectWeatherIcon(day.weather[0].id),
                    convertTemperature(temp),
                    convertTemperature(temp_min),
                    convertTemperature(temp_max)
                )
            )
        }

        weatherForecast.append(forecastGrid)
    }

    return {
        displayCurrentWeather, displayForecast
    }
}


export default WeatherUI