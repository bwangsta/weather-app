import Searchbar from "./searchbar"

function Header() {
    const header = document.createElement("header")
    const searchResultsDiv = document.createElement("div")
    const searchBar = Searchbar()

    searchResultsDiv.className = "search-results"

    searchBar.append(searchResultsDiv)
    header.append(
        searchBar
    )

    return header
}

export default Header