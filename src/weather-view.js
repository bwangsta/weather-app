import Navbar from "./components/navbar";
import { getCurrentTime } from "./weather-logic";

function clear(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

function initialLoad() {
    const header = document.querySelector("header")

    header.append(Navbar())
}

function resetSearchInput() {
    const searchInput = document.querySelector(".searchbar__input")
    searchInput.value = ""
}

function displayTime(data) {
    // makes current time change in real time
    const time = document.querySelector(".time")
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