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
import { rerender, initialLoad, getCurrentTime, typeTimer, resetSearchInput } from "./helper"
// DELETE later
import testData from "./testData";

initialLoad()

const weatherData = WeatherData()
const content = document.querySelector("#content")
const searchInput = document.querySelector(".searchbar__input")
const searchBtn = document.querySelector(".searchbar__btn")
const searchResultsDiv = document.querySelector(".search-results")
const timer = typeTimer()


searchInput.addEventListener("keyup", (e) => {
    timer.reset()
    rerender(searchResultsDiv)
    timer.set(showSearchResult, e)
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
        location.addEventListener("click", e => {
            const { lat, lon, city, state, country } = e.target.dataset
            searchInput.value = city
            rerender(searchResultsDiv)

            searchInput.dataset.lat = lat
            searchInput.dataset.lon = lon
            searchInput.dataset.city = city
            searchInput.dataset.state = state
            searchInput.dataset.country = country
        })
    })
}

searchBtn.addEventListener("click", async (e) => {
    e.preventDefault()
    timer.reset()
    rerender(searchResultsDiv)
    rerender(content)

    let name
    let state
    let country
    let latitude
    let longitude
    // when user manually clicks on a location in the search results
    if (searchInput.hasAttribute("data-lat") && searchInput.hasAttribute("data-lon")) {
        name = searchInput.dataset.city
        state = searchInput.dataset.state
        country = searchInput.dataset.country
        latitude = searchInput.dataset.lat
        longitude = searchInput.dataset.lon
    }
    // default behavior when user types and hits search without selecting one of the search results
    else {
        const geocode = await weatherData.fetchGeocode(searchInput.value)
        name = geocode.results[0].name
        state = geocode.results[0].admin1 ?? ""
        country = geocode.results[0].country
        latitude = geocode.results[0].latitude
        longitude = geocode.results[0].longitude
    }

    const data = await weatherData.fetchWeather(latitude, longitude)
    content.append(
        Weather(name, state, country, data),
        Forecast(data)
    )

    // makes current time change in real time
    const time = document.querySelector(".weather__time")
    setInterval(() => time.textContent = getCurrentTime(data.timezone), 1000)
    resetSearchInput()
})


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