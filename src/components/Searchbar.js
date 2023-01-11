function Searchbar() {
    /*
    <form class="searchbar">
        <input class="searchbar--input" type="text" placeholder="City name">
        <button class="searchbar--btn" type="submit">Search</button>
    </form>
    */
    const header = document.createElement("header")
    const searchBar = document.createElement("form")
    const searchInput = document.createElement("input")
    const searchBtn = document.createElement("button")
    const searchIcon = document.createElement("i")

    searchBtn.textContent = "Search "

    searchInput.type = "text"
    searchInput.placeholder = "City Name"
    searchBtn.type = "submit"

    searchBar.className = "searchbar"
    searchInput.className = "searchbar--input"
    searchBtn.className = "searchbar--btn"
    searchIcon.className = "bi"
    searchIcon.classList.add("bi-search")

    searchBtn.append(searchIcon)
    searchBar.append(
        searchInput,
        searchBtn
    )
    header.append(searchBar)

    return header
}

export default Searchbar