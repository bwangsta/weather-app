function Searchbar() {
    const searchForm = document.createElement("form")
    const searchBarDiv = document.createElement("div")
    const searchLabel = document.createElement("label")
    const searchInput = document.createElement("input")
    const searchBtn = document.createElement("button")
    const searchIcon = document.createElement("i")

    searchLabel.setAttribute("for", "searchbar")
    searchInput.type = "text"
    searchInput.placeholder = "City Name"
    searchInput.id = "searchbar"
    searchInput.name = "searchbar"
    searchBtn.type = "submit"

    searchForm.className = "search-form"
    searchBarDiv.className = "searchbar"
    searchInput.className = "searchbar__input"
    searchBtn.className = "searchbar__btn"
    searchIcon.className = "bi"
    searchIcon.classList.add("bi-search")

    searchBarDiv.append(searchLabel, searchInput)
    searchBtn.append(searchIcon)
    searchForm.append(
        searchBarDiv,
        searchBtn
    )

    return searchForm
}

export default Searchbar