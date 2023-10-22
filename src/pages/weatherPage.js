import {
  MAIN_ID,
  WEATHER_PAGE_ICON_LINK_ID,
  TEMPERATURE_DISPLAY_ID,
  TEMPERATURE_CITY_ID,
} from "../constants.js";
import { displayWeather, fetchWeatherData } from "../api/weatherAPI.js";

export const initializeWeatherPage = () => {
  const pageContent = document.getElementById(WEATHER_PAGE_ICON_LINK_ID);

  pageContent.addEventListener("click", () => {
    const mainContent = document.getElementById(MAIN_ID);
    mainContent.innerHTML = "";

    const weatherPage = `
      <div id="weather-container">
        <h1>Current Temperature</h1>
       <section id="${TEMPERATURE_DISPLAY_ID}">
       </section>
       <h1>City Temperature</h1>
       <section id="${TEMPERATURE_CITY_ID}">
       <input type="text" id="city-input" placeholder="Your City">
       <button id="fetch-weather-btn">Fetch Weather</button>
       </section>
      </div>
    `;

    mainContent.style.cssText = `
    background-color: rgba(255, 255, 255, .8);
     `;

    mainContent.insertAdjacentHTML("beforeend", weatherPage);
    document
      .getElementById("fetch-weather-btn")
      .addEventListener("click", async () => {
        const city = document.getElementById("city-input").value;
        if (city) {
          const result = await fetchWeatherData(city);
          console.log(result);
        } else {
          console.log("Please enter a city.");
        }
      });

    displayWeather();
  });
};
