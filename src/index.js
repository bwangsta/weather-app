import "./style.css"
import "./assets/img/cloudy.jpg"
import "bootstrap-icons/font/bootstrap-icons.css";
import WeatherData from "./WeatherData"
import WeatherUI from "./WeatherUI"

const weatherData = WeatherData()
const weatherUI = WeatherUI()
const searchBtn = document.querySelector(".search-btn")
const searchInput = document.querySelector(".search-input")
const content = document.querySelector("#content")

searchBtn.addEventListener("click", async (e) => {
    e.preventDefault()
    const currentWeather = await weatherData.fetchCurrentWeather(searchInput.value)
    const forecast = await weatherData.fetchForecast(searchInput.value)
    content.append(
        weatherUI.displayCurrentWeather(currentWeather),
        weatherUI.displayForecast(forecast)
    )
})

async function main(city) {
    const currentWeather = await weatherData.fetchCurrentWeather(city)
    const forecast = await weatherData.fetchForecast(city)
    content.append(
        weatherUI.displayCurrentWeather(currentWeather),
        weatherUI.displayForecast(forecast)
    )
}

main("Irvine")