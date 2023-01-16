import SearchResult from "./search-result"

function SearchResultList(data) {
    const resultsList = document.createElement("ul")
    resultsList.className = "results"

    for (const result of data.results) {
        const { latitude, longitude, name, admin1, country } = result
        resultsList.append(
            SearchResult(latitude, longitude, name, admin1 ?? "", country)
        )
    }

    return resultsList
}

export default SearchResultList