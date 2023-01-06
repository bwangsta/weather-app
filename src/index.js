import "./style.css"
import "bootstrap-icons/font/bootstrap-icons.css";
import WeatherData from "./WeatherData"
import WeatherUI from "./WeatherUI"

const weatherData = WeatherData()
const weatherUI = WeatherUI()
const searchBtn = document.querySelector(".search-btn")
const searchInput = document.querySelector(".search-input")

searchBtn.addEventListener("click", async (e) => {
    e.preventDefault()
    const data = await weatherData.fetchWeatherData(searchInput.value)
    weatherUI.displayCurrentWeather(data)
})

weatherData.fetchWeatherData("Irvine").then((data) => {
    weatherUI.displayCurrentWeather(data)
})