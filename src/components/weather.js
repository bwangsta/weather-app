import { convertTemperature, selectWeatherIcon, selectBackgroundImage, selectDescription, convertDatetime, getCurrentTime } from "../weather-logic"

function Weather(name, state, country, data) {
    const currentWeather = document.createElement("div")
    const weatherInfo = document.createElement("div")
    const weatherGrid = document.createElement("div")
    const locationText = document.createElement("h1")
    const stateText = document.createElement("p")
    const countryText = document.createElement("p")
    const timeElement = document.createElement("p")
    const weekdayElement = document.createElement("p")
    const dateElement = document.createElement("p")
    const weatherDescription = document.createElement("p")
    const currentTemp = document.createElement("p")
    const minTemp = document.createElement("p")
    const maxTemp = document.createElement("p")
    const weatherIcon = document.createElement("i")

    // object destructuring to make it easier to access data from API
    const { temperature, weathercode, time } = data.current_weather
    const temp_min = data.daily.temperature_2m_min[0]
    const temp_max = data.daily.temperature_2m_max[0]
    const datetime = convertDatetime(time, data.timezone)
    const { weekday, date } = datetime
    locationText.textContent = name
    stateText.textContent = state
    countryText.textContent = country
    timeElement.textContent = getCurrentTime(data.timezone)
    weekdayElement.textContent = weekday
    dateElement.textContent = date
    weatherDescription.textContent = selectDescription(weathercode)
    currentTemp.textContent = convertTemperature(temperature)
    minTemp.textContent = `L:${convertTemperature(temp_min)}`
    maxTemp.textContent = `H:${convertTemperature(temp_max)}`

    currentWeather.className = "weather"
    locationText.className = "weather__location"
    stateText.className = "weather__state"
    countryText.className = "weather__country"
    timeElement.className = "weather__time"
    weekdayElement.className = "weather__weekday"
    dateElement.className = "weather__date"
    weatherInfo.className = "weather__info"
    weatherGrid.className = "weather__grid"
    weatherDescription.className = "weather__description"
    currentTemp.className = "weather__temp"
    minTemp.className = "weather__min"
    maxTemp.className = "weather__max"
    weatherIcon.className = "bi"
    weatherIcon.classList.add(selectWeatherIcon(weathercode))
    weatherIcon.classList.add("weather__icon")

    // Change background image based on current weather
    document.body.style.backgroundImage = `url(${selectBackgroundImage(weathercode)})`

    weatherGrid.append(
        weatherIcon,
        currentTemp,
        weatherDescription,
        minTemp,
        maxTemp
    )
    weatherInfo.append(
        locationText,
        stateText,
        countryText,
        timeElement,
        weekdayElement,
        dateElement
    )

    currentWeather.append(
        weatherInfo,
        weatherGrid
    )

    return currentWeather
}

export default Weather
