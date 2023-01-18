import CurrentWeather from "../components/current-weather"
import Forecast from "../components/forecast"

function Weather(name, state, country, data) {
    const main = document.querySelector("main")

    main.append(
        CurrentWeather(name, state, country, data),
        Forecast(data)
    )

    return main
}

export default Weather
