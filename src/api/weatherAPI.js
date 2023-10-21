import { TEMPERATURE_DISPLAY_ID } from "../constants.js";

export async function fetchWeather() {
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

    // temperatureElement.textContent = `Current Temperature: ${temperature}°C`;
    temperatureElement.innerHTML = ` Temperature: <span id="tempValue">${temperature}</span> °C`;
    // Blue or Red
    const tempValueElement = document.getElementById("tempValue");
    if (temperature > 10) {
      tempValueElement.classList.add("hotTemperature");
    }
    if (temperature < 1) {
      tempValueElement.classList.add("coldTemperature");
    }

    // temperatureElement.style.color = "#fff";
  }
}

export async function displayWeather() {
  const data = await fetchWeather();
  processData(data);
}
