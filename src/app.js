// app.js
import { initializeNav } from "./views/navView.js";
import { attachMenuToggleListener, populateNavItems } from "./pages/navPage.js";
import { initializeSidebar } from "./pages/sidebarPage.js";
import { USER_INTERFACE_ID } from "./constants.js";
import { renderMain } from "./views/mainView.js";
import { renderFooter } from "./views/footerView.js";
// import { fetchUserSets } from "./api/rijksmuseumAPI.js";
import { initializeWeatherPage } from "./pages/weatherPage.js";
import { initializeMuseumPage } from "./pages/portraitPage.js";
import { initializeFilesPage } from "./pages/todoPage.js";

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
