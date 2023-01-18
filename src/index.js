import "bootstrap-icons/font/bootstrap-icons.css";

import "./style.css"
import "./assets/img/cloudy.jpg"
import "./assets/img/sunny.jpg"
import "./assets/img/drizzle.jpg"
import "./assets/img/rain.jpg"
import "./assets/img/snow.jpg"
import "./assets/img/thunderstorm.jpg"
import WeatherAPI from "./weather-api"
import Weather from "./pages/weather"
import SearchResultList from "./components/search-result-list"
import { clear, initialLoad, resetSearchInput, displayTime, showError } from "./weather-view"
import { typeTimer, validLocation } from "./weather-logic"
// DELETE later
import TestData from "./test-data";

initialLoad()

const content = document.querySelector("#content")
const searchInput = document.querySelector(".searchbar__input")
const searchError = document.querySelector(".searchbar__error")
const searchBtn = document.querySelector(".searchbar__btn")
const searchResultsDiv = document.querySelector(".search-results")

const weatherAPI = WeatherAPI()
const timer = typeTimer()

searchInput.addEventListener("keyup", startTimer)
searchBtn.addEventListener("click", search)

function startTimer(event) {
    timer.reset()
    clear(searchResultsDiv)
    timer.set(showSearchResult, event.target.value)
}

async function search(event) {
    event.preventDefault()

    const geocode = await weatherAPI.fetchGeocode(searchInput.value)
    const isValidLocation = validLocation(geocode)

    if (searchInput.validity.valid && isValidLocation) {
        const { name, admin1, country, latitude, longitude } = geocode.results[0]
        const data = await weatherAPI.fetchWeather(latitude, longitude)

        renderContent(name, admin1, country, data)
    }
    else {
        showError(searchInput, searchError, isValidLocation)
    }
}

async function showSearchResult(value) {
    const geocode = await weatherAPI.fetchGeocode(value)
    const isValidLocation = validLocation(geocode)

    if (searchInput.validity.valid && isValidLocation) {
        searchResultsDiv.append(SearchResultList(geocode))
        selectSearchResult()
        searchInput.classList.remove("invalid")
        searchError.textContent = ""
    }
    else {
        showError(searchInput, searchError, isValidLocation)
    }
}

function selectSearchResult() {
    const searchResults = document.querySelectorAll(".results>*")

    searchResults.forEach(result => {
        result.addEventListener("click", async (e) => {
            // immediately search for the weather of that city
            const { lat, lon, city, state, country } = e.target.dataset
            const data = await weatherAPI.fetchWeather(lat, lon)

            renderContent(city, state, country, data)
        })
    })
}

function renderContent(location, state, country, data) {
    timer.reset()
    clear(searchResultsDiv)
    clear(content)

    document.body.append(
        Weather(location, state, country, data)
    )

    // displayTime(data)
    resetSearchInput()
}

// TESTING PURPOSES ONLY
const test = TestData()

async function testRun(city) {
    const geocode = await test.fetchGeocode(city)
    const { name, admin1, country, latitude, longitude } = geocode.results[0]
    const data = await test.fetchWeather(latitude, longitude)

    document.body.append(
        Weather(name, admin1, country, data)
    )
    // displayTime(data)
}

testRun("Irvine")