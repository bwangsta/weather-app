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
const searchInput = document.querySelector(".searchbar--input")
const searchBtn = document.querySelector(".searchbar--btn")

searchBtn.addEventListener("click", async (e) => {
    e.preventDefault()
    render()
    const currentWeather = await weatherData.fetchCurrentWeather(searchInput.value)
    const forecast = await weatherData.fetchForecast(searchInput.value)
    content.append(
        Weather(currentWeather),
        Forecast(forecast)
    )
    searchInput.value = ""
})

// async function main(city) {
//     const currentWeather = await weatherData.fetchCurrentWeather(city)
//     const forecast = await weatherData.fetchForecast(city)
//     content.append(
//         Searchbar(),
//         Weather(currentWeather),
//         Forecast(forecast)
//     )
// }

// main("Irvine")