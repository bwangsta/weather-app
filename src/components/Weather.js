import { convertDateTime, convertTemperature, selectWeatherIcon, selectBackgroundImage } from "../helper"

function Weather(data) {
    const currentWeather = document.createElement("div")
    const cityName = document.createElement("p")
    const date = document.createElement("p")
    const weatherIcon = document.createElement("i")
    const weatherDescription = document.createElement("p")
    const currentTemp = document.createElement("p")
    const minTemp = document.createElement("p")
    const maxTemp = document.createElement("p")

    // object destructuring to make it easier to access data from API
    const { temp, temp_min, temp_max } = data.main
    const { id, description } = data.weather[0]

    cityName.textContent = data.name
    date.textContent = convertDateTime(data.dt)
    weatherDescription.textContent = description
    currentTemp.textContent = convertTemperature(temp)
    minTemp.textContent = convertTemperature(temp_min)
    maxTemp.textContent = convertTemperature(temp_max)

    currentWeather.className = "current-weather"
    weatherIcon.className = "bi"
    weatherIcon.classList.add(selectWeatherIcon(id))

    // Change background image based on current weather
    document.body.style.backgroundImage = `url(${selectBackgroundImage(id)})`

    currentWeather.append(
        cityName,
        date,
        weatherIcon,
        weatherDescription,
        currentTemp,
        minTemp,
        maxTemp
    )

    return currentWeather
}

export default Weather