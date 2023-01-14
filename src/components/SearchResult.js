function SearchResult(latitude, longitude, city, state, country) {
    const result = document.createElement("li")
    result.textContent = `${city}, ${state} ${country}`
    result.dataset.lat = latitude
    result.dataset.lon = longitude
    result.dataset.city = city
    result.dataset.state = state
    result.dataset.country = country

    return result
}

export default SearchResult