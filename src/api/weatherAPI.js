import { TEMPERATURE_DISPLAY_ID, TEMPERATURE_CITY_ID } from "../constants.js";

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
    if (temperature > 29) {
      tempValueElement.classList.add("hotTemperature");
    }
    if (temperature < 13) {
      tempValueElement.classList.add("coldTemperature");
    }
  }
}

export async function displayWeather() {
  const data = await fetchWeather();
  processData(data);
}
// ``const apiKey = "9fb7eaa1d74f42cd16922223a39b68f9";``

// 2: Fetching weather part 2
export async function fetchWeatherData(city) {
  const API_KEY = "9fb7eaa1d74f42cd16922223a39b68f9";
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }
    const data = await response.json();
    return `Temperature in ${city} is ${data.main.temp}K`;
  } catch (error) {
    console.error(error);
    return "Error fetching weather data";
  }
}

export async function cityWeather() {
  const temperatureElementCity = document
    .getElementById(TEMPERATURE_CITY_ID)
    .addEventListener("click", async () => {
      const city = document.getElementById("city-input").value;
      if (city) {
        const result = await fetchWeatherData(city);
        console.log(result);
      } else {
        console.log("No City's Entered");
      }
    });
  return temperatureElementCity;
}
