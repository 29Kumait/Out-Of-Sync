// import {
//   LON_LAT_RESULT_ID,
//   LON_LAT_BUTTON_ID,
//   LATITUDE_INPUT_ID,
//   LONGITUDE_INPUT_ID,
// } from "../constants.js";

// export const initWeatherModule = () => {
//   document.addEventListener("DOMContentLoaded", () => {
//     const fetchWeather = async (latitude, longitude) => {
//       try {
//         const response = await fetch(
//           `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`
//         );
//         if (!response.ok) {
//           console.error(`HTTP error! status: ${response.status}`);
//           return;
//         }
//         const data = await response.json();
//         return data.hourly.temperature_2m[0];
//       } catch (err) {
//         console.error("Error fetching weather:", err);
//       }
//     };

//     const updateUI = (latitude, longitude, temperature) => {
//       const resultDiv = document.getElementById(LON_LAT_RESULT_ID);
//       if (resultDiv) {
//         resultDiv.innerHTML = `The temperature at latitude ${latitude} and longitude ${longitude} is ${temperature}°C.`;
//       } else {
//         console.error("No resultDiv found");
//       }
//     };

//     const fetchWeatherButton = document.getElementById(LON_LAT_BUTTON_ID);

//     if (fetchWeatherButton) {
//       fetchWeatherButton.addEventListener("click", async () => {
//         const latitude = document.getElementById(LATITUDE_INPUT_ID).value;
//         const longitude = document.getElementById(LONGITUDE_INPUT_ID).value;

//         const savedCoordinatesDiv = document.getElementById("savedCoordinates");
//         savedCoordinatesDiv.innerHTML = `Saved Latitude: ${latitude}, Saved Longitude: ${longitude}`;

//         if (!latitude || !longitude) {
//           console.error("Both latitude and longitude must be provided");
//           return;
//         }

//         const temperature = await fetchWeather(latitude, longitude);
//         updateUI(latitude, longitude, temperature);
//       });
//     }
//   });
// };
