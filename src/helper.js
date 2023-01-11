import cloudyImg from "./assets/img/cloudy.jpg"
import sunnyImg from "./assets/img/sunny.jpg"
import drizzleImg from "./assets/img/drizzle.jpg"
import rainImg from "./assets/img/rain.jpg"
import snowImg from "./assets/img/snow.jpg"
import thunderstormImg from "./assets/img/thunderstorm.jpg"

// Helper functions
function selectWeatherIcon(id) {
    switch (true) {
        case (id >= 200 && id < 300):
            return "bi-cloud-lightning"
        case (id >= 300 && id < 400):
            return "bi-cloud-drizzle"
        case (id >= 500 && id < 600):
            return "bi-cloud-rain"
        case (id >= 600 && id < 700):
            return "bi-snow"
        case (id === 800):
            return "bi-brightness-high"
        case (id > 800 && id < 900):
            return "bi-clouds"
        default:
            return "bi-cloudy"
    }
}

function selectBackgroundImage(id) {
    switch (true) {
        case (id >= 200 && id < 300):
            return thunderstormImg
        case (id >= 300 && id < 400):
            return drizzleImg
        case (id >= 500 && id < 600):
            return rainImg
        case (id >= 600 && id < 700):
            return snowImg
        case (id === 800):
            return sunnyImg
        case (id > 800 && id < 900):
            return cloudyImg
        default:
            return cloudyImg
    }
}

function convertTemperature(temp) {
    return `${Math.ceil(temp)}°F`
}

function convertDateTime(dt) {
    const date = new Date(dt * 1000)
    const options = {
        hour: "numeric",
        minute: "numeric"
    };

    return date.toLocaleString("en-US", options)
}

export {
    selectWeatherIcon,
    convertTemperature,
    convertDateTime,
    selectBackgroundImage
}