function Searchbar() {
    const searchBar = document.createElement("form")
    const searchInput = document.createElement("input")
    const searchError = document.createElement("span")
    const searchBtn = document.createElement("button")
    const searchIcon = document.createElement("i")

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
    // searchInput.classList.add("invalid")
    searchError.className = "searchbar__error"
    searchBtn.className = "searchbar__btn"
    searchIcon.className = "bi"
    searchIcon.classList.add("bi-search")

    searchBtn.append(searchIcon)
    searchBar.append(
        searchInput,
        searchError,
        searchBtn
    )

    return searchBar
}

export default Searchbar
