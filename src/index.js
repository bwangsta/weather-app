import "bootstrap-icons/font/bootstrap-icons.css";

import "./style.css"
import "./assets/img/cloudy.jpg"
import "./assets/img/sunny.jpg"
import "./assets/img/drizzle.jpg"
import "./assets/img/rain.jpg"
import "./assets/img/snow.jpg"
import "./assets/img/thunderstorm.jpg"
import WeatherData from "./WeatherData"
import Weather from "./components/Weather"
import Forecast from "./components/Forecast"
import SearchResultList from "./components/SearchResultList"
import { clear, initialLoad, getCurrentTime, typeTimer, resetSearchInput, displayTime } from "./helper"
// DELETE later
import testData from "./testData";

initialLoad()

const content = document.querySelector("#content")
const searchInput = document.querySelector(".searchbar__input")
const searchBtn = document.querySelector(".searchbar__btn")
const searchResultsDiv = document.querySelector(".search-results")

const weatherData = WeatherData()
const timer = typeTimer()

searchInput.addEventListener("keyup", (e) => {
    timer.reset()
    clear(searchResultsDiv)
    timer.set(showSearchResult, e)
})

searchBtn.addEventListener("click", async (e) => {
    e.preventDefault()

    // default behavior when user types and hits search without selecting one of the search results
    const geocode = await weatherData.fetchGeocode(searchInput.value)
    const { name, admin1, country, latitude, longitude } = geocode.results[0]
    const data = await weatherData.fetchWeather(latitude, longitude)

    renderContent(name, admin1, country, data)
})

async function showSearchResult(event) {
    if (event.target.value.length > 1) {
        const geocode = await weatherData.fetchGeocode(event.target.value)
        searchResultsDiv.append(SearchResultList(geocode))
        selectSearchResult()
    }
}

function selectSearchResult() {
    const searchResults = document.querySelectorAll(".results>*")
    searchResults.forEach(location => {
        location.addEventListener("click", async (e) => {
            // immediately search for the weather of that city
            const { lat, lon, city, state, country } = e.target.dataset
            const data = await weatherData.fetchWeather(lat, lon)

            renderContent(city, state, country, data)
        })
    })
}

function renderContent(location, state, country, data) {
    timer.reset()
    clear(searchResultsDiv)
    clear(content)

    content.append(
        Weather(location, state, country, data),
        Forecast(data)
    )

    displayTime(data)
    resetSearchInput()
}

// TESTING PURPOSES ONLY
const test = testData()

async function main(city) {
    const geocode = await test.fetchGeocode(city)
    const { name, admin1, country, latitude, longitude } = geocode.results[0]
    const data = await test.fetchWeather(latitude, longitude)
    content.append(
        Weather(name, admin1, country, data),
        Forecast(data)
    )
    const time = document.querySelector(".weather__time")
    setInterval(() => {
        time.textContent = getCurrentTime(data.timezone)
    }, 1000)
}

main("Irvine")