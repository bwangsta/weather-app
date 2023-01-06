import WeatherData from "./WeatherData"
import WeatherUI from "./WeatherUI"

const searchBtn = document.querySelector(".search-btn")
const searchInput = document.querySelector(".search-input")

// searchBtn.addEventListener("click", async (e) => {
//     e.preventDefault()
//     const data = await fetchWeatherData(searchInput.value)
//     displayCurrentWeather(data)
// })

const weatherData = WeatherData()
const weatherUI = WeatherUI()
weatherData.fetchWeatherData("London").then((data) => {
    weatherUI.displayCurrentWeather(data)
})