function WeatherCard(date, icon, description, current) {
    /*
    <div class="weather-card">
        <p class="card-date">9:00 PM</p>
        <i class="bi bi-cloudy card-weather-icon"></i>
        <p class="card-current-temp">72</p>
    </div>
    */
    const card = document.createElement("div")
    const cardDate = document.createElement("p")
    const cardIcon = document.createElement("i")
    const currentTemp = document.createElement("p")
    const weatherDescription = document.createElement("p")

    cardDate.textContent = date
    currentTemp.textContent = current
    weatherDescription.textContent = description

    card.className = "weather-card"
    cardDate.className = "card-date"
    cardIcon.classList.add("bi")
    cardIcon.classList.add(icon)

    card.append(
        cardDate,
        cardIcon,
        weatherDescription,
        currentTemp
    )

    return card
}

export default WeatherCard