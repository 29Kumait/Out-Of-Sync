import {
  TEMPERATURE_DISPLAY_ID,
  FETCH_WEATHER_BTN_ID,
  CITY_INPUT_ID,
  WEATHER_RESULT_ID,
} from "../constants.js";

// 1: Fetching weather
async function fetchWeather() {
  const response = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=52.15&longitude=5.35&hourly=temperature_2m,rain,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,apparent_temperature_max&current_weather=true&past_days=1&forecast_days=3&timezone=Europe%2FBerlin"
  );
  const data = await response.json();
  console.log(data);
  return data;
}

function processData(data) {
  const temperatureElement = document.getElementById(TEMPERATURE_DISPLAY_ID);
  if (temperatureElement) {
    const temperature = data.current_weather.temperature;
    temperatureElement.innerHTML = `Temperature: <span id="tempValue">${temperature}</span> °C`;
    const tempValueElement = document.getElementById("tempValue");
    tempValueElement.style.color =
      temperature > 29 ? "red" : temperature < 13 ? "blue" : "inherit";
  }
}

export async function displayWeather() {
  const data = await fetchWeather();
  processData(data);
}

// 2: Fetching weather part 2:
export async function fetchWeatherData(city) {
  const API_KEY = "9fb7eaa1d74f42cd16922223a39b68f9";
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }
    const data = await response.json();
    return `Temperature in ${city} is ${data.main.temp}°C`;
  } catch (error) {
    console.error(error);
    return "Error fetching weather data";
  }
}

export async function cityWeather() {
  document
    .getElementById(FETCH_WEATHER_BTN_ID)
    .addEventListener("click", async (event) => {
      event.preventDefault();
      const city = document.getElementById(CITY_INPUT_ID).value;
      const weatherResultElement = document.getElementById(WEATHER_RESULT_ID);

      if (city) {
        const result = await fetchWeatherData(city);
        console.log(result);
        weatherResultElement.innerHTML = result;
      } else {
        console.log("No City's Entered");
        weatherResultElement.innerHTML = "No City's Entered";
      }
    });
}
//  the new key ``const apiKey = "9fb7eaa1d74f42cd16922223a39b68f9";``
// export async function weatherLatLon(lat, lon) {
//   const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m`;

//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error("Failed to fetch weather ");
//     }

//     const data = await response.json();
//     console.log("Weather Data:", data);

//     const weatherDisplay = document.getElementById("weatherDisplay");
//     weatherDisplay.innerHTML = `
//       <h3>Weather </h3>
//       <p>Latitude: ${lat}, Longitude: ${lon}</p>
//       <p>Temperature: ${data.hourly.temperature_2m[0]}°C</p>
//     `;
//   } catch (error) {
//     console.error("An error occurred:", error);
//   }
// }

// document
//   .getElementById("fetchWeatherButton")
//   .addEventListener("click", function () {
//     const lat = document.getElementById("latitude").value;
//     const lon = document.getElementById("longitude").value;

//     fetchWeatherByLatLon(lat, lon);
//   });
