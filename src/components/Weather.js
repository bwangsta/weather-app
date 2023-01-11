import { convertDateTime, convertTemperature, selectWeatherIcon, selectBackgroundImage } from "../helper"

function Weather(data) {
    const currentWeather = document.createElement("div")
    const weatherInfo = document.createElement("div")
    const weatherGrid = document.createElement("div")
    const cityName = document.createElement("p")
    const time = document.createElement("p")
    const weatherDescription = document.createElement("p")
    const currentTemp = document.createElement("p")
    const minTemp = document.createElement("p")
    const maxTemp = document.createElement("p")
    const weatherIcon = document.createElement("i")

    // object destructuring to make it easier to access data from API
    const { temp, temp_min, temp_max } = data.main
    const { id, description } = data.weather[0]

    cityName.textContent = data.name
    time.textContent = convertDateTime(data.dt)
    weatherDescription.textContent = description
    currentTemp.textContent = convertTemperature(temp)
    minTemp.textContent = `L:${convertTemperature(temp_min)}`
    maxTemp.textContent = `H:${convertTemperature(temp_max)}`

    currentWeather.className = "weather"
    cityName.className = "weather__city"
    time.className = "weather__time"
    weatherInfo.className = "weather__info"
    weatherGrid.className = "weather__grid"
    weatherDescription.className = "weather__description"
    currentTemp.className = "weather__temp"
    minTemp.className = "weather__min"
    maxTemp.className = "weather__max"
    weatherIcon.className = "bi"
    weatherIcon.classList.add(selectWeatherIcon(id))
    weatherIcon.classList.add("weather__icon")

    // Change background image based on current weather
    document.body.style.backgroundImage = `url(${selectBackgroundImage(id)})`

    weatherGrid.append(weatherIcon,
        weatherDescription,
        currentTemp,
        minTemp,
        maxTemp
    )
    weatherInfo.append(cityName, time)

    currentWeather.append(
        weatherInfo,
        weatherGrid
    )

    return currentWeather
}

export default Weather