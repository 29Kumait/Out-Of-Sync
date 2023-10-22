// app.js
import { initializeNav } from "./views/navView.js";
import { attachMenuToggleListener, populateNavItems } from "./pages/navPage.js";
import { initializeSidebar } from "./pages/sidebarPage.js";
import { USER_INTERFACE_ID, WEATHER_PAGE_ICON_LINK_ID } from "./constants.js";
import { renderMain } from "./views/mainView.js";
import { renderFooter } from "./views/footerView.js";
// import { fetchUserSets } from "./api/rijksmuseumAPI.js";
// import { fetchArtworkImage } from "./api/art.js";
import { initializeWeatherPage } from "./pages/weatherPage.js";
import { initializeMuseumPage } from "./pages/portraitPage.js";
const initializeApp = () => {
  const ui = document.getElementById(USER_INTERFACE_ID);

  // Initialize and inject the nav
  ui.insertAdjacentHTML("beforeend", initializeNav());

  const navItems = ["Home", "About", "Contact"];
  populateNavItems(navItems);
  attachMenuToggleListener();

  initializeSidebar();

  ui.insertAdjacentHTML("beforeend", renderMain());
  ui.insertAdjacentHTML("beforeend", renderFooter());

  initializeWeatherPage();
  initializeMuseumPage();
};

// window.onload = initializeApp;
document.addEventListener("DOMContentLoaded", () => {
  initializeApp();
});
