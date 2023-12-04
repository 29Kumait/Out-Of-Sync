import {
  MAIN_ID,
  WEATHER_PAGE_ICON_LINK_ID,
  TEMPERATURE_DISPLAY_ID,
  TEMPERATURE_CITY_ID,
  WEATHER_RESULT_ID,
  NEWS_TICKER_ID,
} from "../constants.js";
import { displayWeather, cityWeather } from "../api/weatherAPI.js";
import { news } from "../api/newsAPI.js";

export const initializeWeatherPage = () => {
  const pageContent = document.getElementById(WEATHER_PAGE_ICON_LINK_ID);

  let intervalId;
  // let isWeatherPage = true;
  pageContent.addEventListener("click", () => {
    const mainContent = document.getElementById(MAIN_ID);
    mainContent.innerHTML = "";
    document.body.style.backgroundImage = "url('media/rain.WEBP')";

    // intervalId = setInterval(() => {
    //   document.body.style.backgroundImage = isWeatherPage
    //     ? "url('public/img1.png')"
    //     : "url('public/rain.WEBP')";
    //   isWeatherPage = !isWeatherPage; // Toggle the isDay flag every 3 seconds
    // }, 9000);

    const weatherPage = `
      <div id="weather-container">
        <h1>Current Temperature</h1>
        <section id="${TEMPERATURE_DISPLAY_ID}">
        </section>
        
        <h1>City Temperature</h1>
        <section id="${TEMPERATURE_CITY_ID}">
          <input type="text" id="city-input" placeholder="Your City">
          <button id="fetch-weather-btn">Fetch Weather</button>
          <div id="${WEATHER_RESULT_ID}"></div>
        </section>
        
        <section>
          <div id="${NEWS_TICKER_ID}"></div>
        </section>
      </div>
    `;

    mainContent.insertAdjacentHTML("beforeend", weatherPage);

    // Add styles to mainContent
    mainContent.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
    mainContent.style.display = "block";

    displayWeather();
    cityWeather();
    setTimeout(news, 0);
  });

  // Clear interval when navigating away from the weather page
  window.addEventListener("beforeunload", () => {
    if (intervalId) clearInterval(intervalId);
  });
};
const hideTicker = () => {
  const tickerElement = document.getElementById(NEWS_TICKER_ID);
  if (tickerElement) {
    tickerElement.style.display = "none";
  }
};
