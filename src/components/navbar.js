import Searchbar from "./searchbar"

function Navbar() {
    const navbar = document.createElement("div")
    const unitBtn = document.createElement("button")
    const soundBtn = document.createElement("button")
    const soundIcon = document.createElement("i")

    unitBtn.textContent = "F°"

    unitBtn.type = "button"
    soundBtn.type = "button"

    navbar.className = "navbar"
    soundIcon.className = "bi bi-volume-up"

    soundBtn.append(soundIcon)
    navbar.append(
        soundBtn,
        Searchbar(),
        unitBtn,
    )

    return navbar
}

export default Navbar