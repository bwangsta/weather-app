function WeatherUI() {
    async function displayCurrentWeather(data) {
        const currentWeather = document.querySelector(".current-weather-info")
        const cityName = document.createElement("p")
        const currentTemp = document.createElement("p")
        const minTemp = document.createElement("p")
        const maxTemp = document.createElement("p")
        const weatherIcon = selectWeatherIcon(data.weather[0].id)

        cityName.textContent = data.name
        currentTemp.textContent = `${Math.ceil(data.main.temp)}°F`
        minTemp.textContent = `${Math.ceil(data.main.temp_min)}°F`
        maxTemp.textContent = `${Math.ceil(data.main.temp_max)}°F`

        currentWeather.append(
            cityName,
            weatherIcon,
            currentTemp,
            minTemp,
            maxTemp
        )
    }

    function selectWeatherIcon(id) {
        const weatherIcon = document.createElement("i")
        weatherIcon.classList.add("bi")
        console.log(id)
        switch (true) {
            case (id >= 200 && id < 300):
                weatherIcon.classList.add("bi-cloud-lightning")
                break
            case (id >= 300 && id < 400):
                weatherIcon.classList.add("bi-cloud-drizzle")
                break
            case (id >= 500 && id < 600):
                weatherIcon.classList.add("bi-cloud-rain")
                break
            case (id >= 600 && id < 700):
                weatherIcon.classList.add("bi-snow")
                break
            case (id === 800):
                weatherIcon.classList.add("bi-brightness-high")
                break
            case (id > 800 && id < 900):
                weatherIcon.classList.add("bi-clouds")
                break
            default:
                weatherIcon.classList.add("bi-cloudy")
        }

        return weatherIcon
    }

    return {
        displayCurrentWeather
    }
}


export default WeatherUI