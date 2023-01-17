import Header from "./components/header"
import { getCurrentTime } from "./weather-logic";

function clear(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

function initialLoad() {
    const main = document.createElement("main")

    main.id = "content"
    main.className = "container"

    document.body.prepend(
        Header(),
        main
    )
}

function resetSearchInput() {
    const searchInput = document.querySelector(".searchbar__input")
    searchInput.value = ""
}

function displayTime(data) {
    // makes current time change in real time
    const time = document.querySelector(".weather__time")
    setInterval(() => time.textContent = getCurrentTime(data.timezone), 1000)
}

function showError(input, error, isValidLocation) {
    if (input.validity.valueMissing) {
        error.textContent = "Please enter a location name"
    }
    else if (input.validity.tooShort) {
        error.textContent = `Location name should be at least ${input.minLength} characters`
    }
    else if (input.validity.tooLong) {
        error.textContent = `Location name should be at most ${input.maxLength} characters`
    }
    else if (!isValidLocation) {
        error.textContent = "Unable to find the location. Please enter a different location"
    }

    input.classList.add("invalid")
}

export {
    clear,
    initialLoad,
    resetSearchInput,
    displayTime,
    showError
}