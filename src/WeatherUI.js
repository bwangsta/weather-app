function WeatherUI() {
    async function displayCurrentWeather(data) {
        const currentWeather = document.querySelector(".current-weather-info")
        const cityName = document.createElement("p")
        const currentTemp = document.createElement("p")
        const minTemp = document.createElement("p")
        const maxTemp = document.createElement("p")

        cityName.textContent = data.name
        currentTemp.textContent = data.main.temp
        minTemp.textContent = data.main.temp_min
        maxTemp.textContent = data.main.temp_max

        currentWeather.append(
            cityName,
            currentTemp,
            minTemp,
            maxTemp
        )
    }

    return {
        displayCurrentWeather
    }
}

export default WeatherUI