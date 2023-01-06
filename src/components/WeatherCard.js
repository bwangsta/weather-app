function WeatherCard(day, icon, current, min, max) {
    /*
    <div class="weather-card">
        <p class="card-day">Monday</p>
        <i class="bi bi-cloudy card-weather-icon"></i>
        <p class="card-current-temp">72</p>
        <div class="card-temp-info">
        <p class="card-min-temp">60</p>
        <p class="card-max-temp">80</p>
        </div>
    </div>
    */
    const card = document.createElement("div")
    const dayName = document.createElement("p")
    const cardIcon = document.createElement("i")
    const currentTemp = document.createElement("p")
    const tempInfo = document.createElement("div")
    const minTemp = document.createElement("p")
    const maxTemp = document.createElement("p")

    dayName.textContent = day
    currentTemp.textContent = current
    minTemp.textContent = min
    maxTemp.textContent = max

    card.className = "weather-card"
    dayName.className = "card-day"
    cardIcon.classList.add("bi")
    cardIcon.classList.add(icon)
    tempInfo.className = "card-temp-info"
    minTemp.className = "card-min-temp"
    maxTemp.className = "card-max-temp"

    tempInfo.append(minTemp, maxTemp)
    card.append(
        dayName,
        cardIcon,
        currentTemp,
        tempInfo
    )

    return card
}

export default WeatherCard