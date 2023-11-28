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
  let isDay = true;
  pageContent.addEventListener("click", () => {
    const mainContent = document.getElementById(MAIN_ID);
    mainContent.innerHTML = "";

    setInterval(() => {
      document.body.style.backgroundImage = isDay
        ? "url('../public/front.png')"
        : "url('../public/fetch.png')";
      isDay = !isDay; // Toggle the isDay flag every 10 seconds
    }, 10000);

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

       <h3> NEWs Headline </h3>
       <section>
       <div id="${NEWS_TICKER_ID}"></div>
       </section>
 


      </div>
    `;

    mainContent.style.cssText = `
    background-color: rgba(255, 255, 255, .8);
     `;

    mainContent.insertAdjacentHTML("beforeend", weatherPage);

    displayWeather();
    cityWeather();
    news();
  });
};
