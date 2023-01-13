function SearchResult(lat, lon, city, location, country) {
    const result = document.createElement("li")
    result.textContent = `${city}, ${location} ${country}`
    result.dataset.lat = lat
    result.dataset.lon = lon
    result.dataset.city = city

    return result
}

export default SearchResult