function ForecastCard(datetime, icon, description, min, max) {
    const card = document.createElement("div")
    const cardDatetime = document.createElement("p")
    const cardIcon = document.createElement("i")
    const weatherDescription = document.createElement("p")
    const minMax = document.createElement("div")
    const minTemp = document.createElement("p")
    const maxTemp = document.createElement("p")

    cardDatetime.textContent = datetime.weekday
    weatherDescription.textContent = description
    minTemp.textContent = `L:${min}`
    maxTemp.textContent = `H:${max}`

    card.className = "card"
    cardDatetime.className = "card__date"
    cardIcon.classList.add("bi")
    cardIcon.classList.add(icon)
    cardIcon.classList.add("card__icon")
    minMax.className = "card__minmax"
    minTemp.className = "card__min"
    maxTemp.className = "card__max"
    weatherDescription.className = "card__description"

    minMax.append(minTemp, maxTemp)
    card.append(
        cardDatetime,
        cardIcon,
        weatherDescription,
        minMax
    )

    return card
}

export default ForecastCard