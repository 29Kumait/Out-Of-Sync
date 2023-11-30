// app.js
import { initializeNav } from "../src/views/navView.js";
import {
  attachMenuToggleListener,
  populateNavItems,
} from "../src/pages/navPage.js";
import { initializeSidebar } from "../src/pages/sidebarPage.js";
import { USER_INTERFACE_ID } from "../src/constants.js";
import { renderMain } from "../src/views/mainView.js";
import { renderFooter } from "../src/views/footerView.js";
// import { fetchUserSets } from "../src/api/rijksmuseumAPI.js";
import { initializeWeatherPage } from "../src/pages/weatherPage.js";
import { initializeMuseumPage } from "../src/pages/portraitPage.js";
import { initializeFilesPage } from "../src/pages/todoPage.js";

// rest of your code...

const initializeApp = () => {
  try {
    const ui = document.getElementById(USER_INTERFACE_ID);
    ui.insertAdjacentHTML("beforeend", initializeNav());

    const navItems = ["Home", "About", "Contact"];
    ui.insertAdjacentHTML("beforeend", renderMain());
    populateNavItems(navItems);
    attachMenuToggleListener();

    initializeSidebar();

    ui.insertAdjacentHTML("beforeend", renderFooter());
    initializeWeatherPage();
    initializeFilesPage();
    initializeMuseumPage();
  } catch (error) {
    console.error("There has been a problem with your initialization:", error);
  }
};

// window.onload = initializeApp;
document.addEventListener("DOMContentLoaded", () => {
  initializeApp();
});
