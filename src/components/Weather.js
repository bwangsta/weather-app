import { datetimeToLocal, convertTemperature, selectWeatherIcon, selectBackgroundImage, selectDescription, convertDatetime } from "../helper"

function Weather(name, data) {
    const currentWeather = document.createElement("div")
    const weatherInfo = document.createElement("div")
    const weatherGrid = document.createElement("div")
    const cityName = document.createElement("p")
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
    const { day, dayPeriod, hour, minute, month, weekday, year } = convertDatetime(time, data.timezone)

    cityName.textContent = name
    timeElement.textContent = `${hour}:${minute} ${dayPeriod}`
    weekdayElement.textContent = weekday
    dateElement.textContent = `${month} ${day}, ${year}`
    weatherDescription.textContent = selectDescription(weathercode)
    currentTemp.textContent = convertTemperature(temperature)
    minTemp.textContent = `L:${convertTemperature(temp_min)}`
    maxTemp.textContent = `H:${convertTemperature(temp_max)}`

    currentWeather.className = "weather"
    cityName.className = "weather__city"
    timeElement.className = "weather__time"
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

    weatherGrid.append(weatherIcon,
        weatherDescription,
        currentTemp,
        minTemp,
        maxTemp
    )
    weatherInfo.append(cityName,
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