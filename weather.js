const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const key = "e9d982c06211981012575b89c0c4a4ad";
let searchBox = document.querySelector(".search-input input");
let searchButton = document.querySelector(".search-Button");
let weatherimg = document.querySelector(".weather img");
searchButton.addEventListener("click", () => {
    checkwhether(searchBox.value);
})

async function checkwhether(city) {
    const response = await fetch(apiUrl + city + `&appid=${key}`);

    if (response.status == "404") {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        var data = await response.json();
        document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = (data.main.humidity) + "%";
        document.querySelector(".wind").innerHTML = (data.wind.speed) + "KM";
        document.querySelector(".city").innerHTML = data.name;

        if (data.weather[0].main == "Clouds") {
            weatherimg.src = "clouds.png";
        }
        else if (data.weather[0].main == "Rain") {
            weatherimg.src = "rain.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherimg.src = "drizzle.png";
        }
        else if (data.weather[0].main == "Snow") {
            weatherimg.src = "snow.png";
        }
        else if (data.weather[0].main == "Mist") {
            weatherimg.src = "mist.png";
        }
        else {
            weatherimg.src = "clear.png";
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

    }

}

