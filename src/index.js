import "./style.css"
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/img/cloudy.jpg"
import "./assets/img/sunny.jpg"
import "./assets/img/drizzle.jpg"
import "./assets/img/rain.jpg"
import "./assets/img/snow.jpg"
import "./assets/img/thunderstorm.jpg"
import WeatherData from "./WeatherData"
import Weather from "./components/Weather"
import Forecast from "./components/Forecast"
import { render, initialLoad } from "./helper"

initialLoad()

const weatherData = WeatherData()
const content = document.querySelector("#content")
const searchInput = document.querySelector(".searchbar__input")
const searchBtn = document.querySelector(".searchbar__btn")

searchBtn.addEventListener("click", async (e) => {
    e.preventDefault()
    render()
    const geocode = await weatherData.fetchGeocode(searchInput.value)
    const { name, latitude, longitude } = geocode.results[0]
    const data = await weatherData.fetchWeather(latitude, longitude)
    content.append(
        Weather(name, data),
        Forecast(data)
    )
    searchInput.value = ""
})

// TESTING PURPOSES ONLY so I don't have to enter a city every time
async function main(city) {
    const geocode = await weatherData.fetchGeocode(city)
    const { name, latitude, longitude } = geocode.results[0]
    const data = await weatherData.fetchWeather(latitude, longitude)
    content.append(
        Weather(name, data),
        Forecast(data)
    )
}

main("Irvine")