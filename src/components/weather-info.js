import { convertTemperature, selectWeatherIcon, selectBackgroundImage, selectDescription, convertDatetime } from "../weather-logic"

function WeatherInfo(data) {
    const weatherInfo = document.createElement("div")
    const weekdayElement = document.createElement("p")
    const weatherDescription = document.createElement("p")
    const currentTemp = document.createElement("p")
    const minTemp = document.createElement("p")
    const maxTemp = document.createElement("p")
    const weatherIcon = document.createElement("i")

    // const timeText = document.createElement("p")
    const dateText = document.createElement("p")

    // object destructuring to make it easier to access data from API
    const { temperature, weathercode, time } = data.current_weather
    const temp_min = data.daily.temperature_2m_min[0]
    const temp_max = data.daily.temperature_2m_max[0]
    const datetime = convertDatetime(time, data.timezone)
    const { weekday } = datetime

    weekdayElement.textContent = weekday
    weatherDescription.textContent = selectDescription(weathercode)
    currentTemp.textContent = convertTemperature(temperature)
    minTemp.textContent = `L:${convertTemperature(temp_min)}`
    maxTemp.textContent = `H:${convertTemperature(temp_max)}`
    // timeText.textContent = getCurrentTime(data.timezone)
    dateText.textContent = datetime.date

    dateText.className = "weather__date"
    weekdayElement.className = "weather__weekday"
    weatherInfo.className = "weather__info"
    weatherDescription.className = "weather__description"
    currentTemp.className = "weather__temp"
    minTemp.className = "weather__min"
    maxTemp.className = "weather__max"
    weatherIcon.className = "weather__icon bi"
    weatherIcon.classList.add(selectWeatherIcon(weathercode))

    // Change background image based on current weather
    document.body.style.backgroundImage = `url(${selectBackgroundImage(weathercode)})`

    weatherInfo.append(
        dateText,
        weekdayElement,
        weatherIcon,
        currentTemp,
        weatherDescription,
        minTemp,
        maxTemp
    )

    return weatherInfo
}

export default WeatherInfo
