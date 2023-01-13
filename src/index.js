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
import SearchResultList from "./components/SearchResultList";
import { render, initialLoad, getCurrentTime } from "./helper"
// DELETE later
import testData from "./testData";

initialLoad()

const weatherData = WeatherData()
const content = document.querySelector("#content")
const searchInput = document.querySelector(".searchbar__input")
const searchBtn = document.querySelector(".searchbar__btn")
const searchResultsDiv = document.querySelector(".search-results")

// TESTING PURPOSES ONLY so I don't have to enter a city every time
const test = testData()

let typingTimer
searchInput.addEventListener("keyup", showSearchResults)

function showSearchResults(event) {
    clearTimeout(typingTimer)
    if (event.target.value) {
        typingTimer = setTimeout(async () => {
            const geocode = await weatherData.fetchGeocode(event.target.value)
            searchResultsDiv.append(SearchResultList(geocode))
            selectSearchResult()
        }, 1000)
    }
}

function selectSearchResult() {
    const resultsList = document.querySelectorAll(".results>*")
    resultsList.forEach(location => {
        location.addEventListener("click", e => {
            const { lat, lon, city } = e.target.dataset
            searchInput.value = city
            render(searchResultsDiv)
            // store the city's lat and lon on searchbar element in case user presses search
            searchInput.dataset.lat = lat
            searchInput.dataset.lon = lon
            searchInput.dataset.city = city
        })
    })
}

searchBtn.addEventListener("click", async (e) => {
    // prevents submit button from reloading the page when clicked on
    e.preventDefault()
    searchInput.removeEventListener("keyup", showSearchResults)
    render(searchResultsDiv)
    render(content)

    let data
    // when user selects a location based on search result
    if (searchInput.hasAttribute("data-lat") && searchInput.hasAttribute("data-lon")) {
        data = await weatherData.fetchWeather(searchInput.dataset.lat, searchInput.dataset.lon)
        content.append(
            Weather(searchInput.dataset.city, data),
            Forecast(data)
        )
    }
    // default behavior when user types and hits search without selecting one of the search results
    else {
        const geocode = await weatherData.fetchGeocode(searchInput.value)
        const { name, latitude, longitude } = geocode.results[0]
        data = await weatherData.fetchWeather(latitude, longitude)
        content.append(
            Weather(name, data),
            Forecast(data)
        )
    }

    // makes current time change in real time
    const time = document.querySelector(".weather__time")
    setInterval(() => time.textContent = getCurrentTime(data.timezone), 1000)

    searchInput.addEventListener("keyup", showSearchResults)
    searchInput.value = ""
    searchInput.removeAttribute("data-lat")
    searchInput.removeAttribute("data-lon")
    searchInput.removeAttribute("data-city")
})


// async function main(city) {
//     const geocode = await test.fetchGeocode(city)
//     const { name, latitude, longitude } = geocode.results[0]
//     const data = await test.fetchWeather(latitude, longitude)
//     content.append(
//         Weather(name, data),
//         Forecast(data)
//     )
//     const time = document.querySelector(".weather__time")
//     setInterval(() => {
//         time.textContent = getCurrentTime(data.timezone)
//     }, 1000)
// }

// main("Irvine")