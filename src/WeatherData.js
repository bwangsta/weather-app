function WeatherData() {
    async function fetchGeocode(city) {
        const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=10`)
        const data = await response.json()

        return data
    }

    async function fetchWeather(lat, lon) {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weathercode,temperature_2m_max,temperature_2m_min&current_weather=true&timezone=auto&temperature_unit=fahrenheit`)
        const data = await response.json()

        return data
    }

    return {
        fetchGeocode,
        fetchWeather
    }
}


export default WeatherData