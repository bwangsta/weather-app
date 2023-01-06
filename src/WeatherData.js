function WeatherData() {
    const API_KEY = "889bd5d996785963fb222accad1e7be3"

    async function fetchCurrentWeather(city) {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`)
        const data = await response.json()

        return data
    }

    async function fetchForecast(city) {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=imperial&cnt=8`)
        const data = await response.json()

        return data
    }

    return {
        fetchCurrentWeather,
        fetchForecast
    }
}


export default WeatherData