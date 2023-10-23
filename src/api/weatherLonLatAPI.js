// import {
//   LON_LAT_RESULT_ID,
//   LON_LAT_BUTTON_ID,
//   LATITUDE_INPUT_ID,
//   LONGITUDE_INPUT_ID,
// } from "../constants.js";

// export const initWeatherAPI = () => {
//   document.addEventListener("DOMContentLoaded", () => {
//     const fetchWeather = async (latitude, longitude) => {
//       try {
//         const response = await fetch();
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
// // };
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
