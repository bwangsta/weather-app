function WeatherData() {
    const API_KEY = "889bd5d996785963fb222accad1e7be3"
    async function fetchWeatherData(city) {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`)
        const data = await response.json()

        return data
    }

    return {
        fetchWeatherData
    }
}


export default WeatherData