function LocationInfo(name, state, country) {
    const locationInfo = document.createElement("div")
    const locationText = document.createElement("h1")
    const stateText = document.createElement("p")
    const countryText = document.createElement("p")

    locationText.textContent = name
    stateText.textContent = state
    countryText.textContent = country

    locationInfo.className = "location"
    locationText.className = "location__name"
    stateText.className = "location__state"
    countryText.className = "location__country"

    locationInfo.append(
        locationText,
        stateText,
        countryText
    )

    return locationInfo
}

export default LocationInfo
