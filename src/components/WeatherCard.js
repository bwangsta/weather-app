function WeatherCard(date, icon, description, current) {
    const card = document.createElement("div")
    const cardDate = document.createElement("p")
    const cardIcon = document.createElement("i")
    const currentTemp = document.createElement("p")
    const weatherDescription = document.createElement("p")

    cardDate.textContent = date
    currentTemp.textContent = current
    weatherDescription.textContent = description

    card.className = "card"
    cardDate.className = "card__date"
    cardIcon.classList.add("bi")
    cardIcon.classList.add(icon)
    cardIcon.classList.add("card__icon")

    card.append(
        cardDate,
        cardIcon,
        weatherDescription,
        currentTemp
    )

    return card
}

export default WeatherCard