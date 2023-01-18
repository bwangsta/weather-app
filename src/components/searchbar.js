function Searchbar() {
    const searchBar = document.createElement("form")
    const searchInput = document.createElement("input")
    const searchError = document.createElement("span")
    const searchBtn = document.createElement("button")
    const searchIcon = document.createElement("i")
    const searchResults = document.createElement("div")

    searchBar.noValidate = true
    searchBar.role = "search"
    searchInput.type = "search"
    searchInput.placeholder = "Location Name"
    searchInput.id = "searchbar"
    searchInput.name = "searchbar"
    searchInput.ariaLabel = "Search for location"
    searchInput.minLength = 2
    searchInput.maxLength = 60
    searchInput.required = true
    searchError.ariaLive = "polite"
    searchBtn.type = "submit"

    searchBar.className = "searchbar"
    searchInput.className = "searchbar__input"
    searchError.className = "searchbar__error"
    searchBtn.className = "searchbar__btn"
    searchIcon.className = "bi bi-search"
    searchResults.className = "search-results"

    searchBtn.append(searchIcon)
    searchBar.append(
        searchInput,
        searchError,
        searchBtn,
        searchResults
    )

    return searchBar
}

export default Searchbar
