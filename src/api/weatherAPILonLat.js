import { RESULT_ID, BUTTON_ID } from "./Constants.js";

const fetchLatLonFromCity = async (city) => {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?city=${city}&format=json`
  );
  const [data] = await response.json();
  return { latitude: parseFloat(data.lat), longitude: parseFloat(data.lon) };
};

const fetchWeather = async (latitude, longitude, feature) =>
  (
    await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=${feature}`
    )
  )
    .json()
    .then((data) => data.hourly[feature][0]);

// Define both featureNames and featureUnits at the top-level scope
const featureNames = {
  // temperature_2m: key determined by the API from which you're fetching data.
  temperature_2m: "Temperature",
  rain: "Rain",
  weathercode: "Weather Code",
  windspeed_10m: "Wind Speed",
};

const featureUnits = {
  temperature_2m: "°C",
  rain: "mm",
  weathercode: "",
  windspeed_10m: "m/s",
};

const updateUI = (city, feature, value) => {
  const resultDiv = document.getElementById(RESULT_ID);
  const info = document.createElement("p");

  // to get the unit for the feature.
  const unit = featureUnits[feature] || "";

  // Use featureNames to get the human-readable name, or fallback to the original feature name
  const featureDisplay = featureNames[feature] || feature.replace(/_/g, " ");

  info.textContent = `The ${featureDisplay} in ${city} is ${value}${unit}.`;
  resultDiv.appendChild(info);
};

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById(BUTTON_ID).addEventListener("click", async () => {
    const city = document.getElementById("city").value;
    const feature = document.getElementById("feature").value;
    //  Two Steps connecting
    try {
      const { latitude, longitude } = await fetchLatLonFromCity(city); //{ latitude: someValue, longitude: someValue }
      const featureValue = await fetchWeather(latitude, longitude, feature);
      updateUI(city, feature, featureValue);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  });
});

// // Import statements at the top
// import { RESULT_ID, BUTTON_ID } from "./Constants.js";

// // This event fires when all HTML has been loaded
// document.addEventListener("DOMContentLoaded", () => {
//   const fetchWeather = async (latitude, longitude, feature) => {
//     const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=${feature}&timezone=Europe%2FBerlin`;
//     const response = await fetch(url);
//     const data = await response.json();
//     return data.hourly[feature][0];
//   };

//   const updateUI = (lat, lon, feature, value) => {
//     const resultDiv = document.getElementById(RESULT_ID);
//     const info = document.createElement("p");
//     info.textContent = `The ${feature} at latitude ${lat} and longitude ${lon} is ${value}`;
//     resultDiv.appendChild(info);
//   };

//   const handleButtonClick = async () => {
//     const latitude = document.getElementById("latitude").value;
//     const longitude = document.getElementById("longitude").value;
//     const feature = document.getElementById("feature").value;

//     try {
//       const featureValue = await fetchWeather(latitude, longitude, feature);
//       updateUI(latitude, longitude, feature, featureValue);
//     } catch (error) {
//       console.error("An error occurred:", error);
//     }
//   };

//   document
//     .getElementById(BUTTON_ID)
//     .addEventListener("click", handleButtonClick);
// });
