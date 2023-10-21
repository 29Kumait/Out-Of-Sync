// app.js
import { initializeNav } from "./views/navView.js";
import { attachMenuToggleListener, populateNavItems } from "./pages/navPage.js";
import { initializeSidebar } from "./pages/sidebarPage.js";
import { USER_INTERFACE_ID } from "./constants.js";
import { renderMain } from "./views/mainView.js";
import { renderFooter } from "./views/footerView.js";
// import { fetchUserSets } from "./api/rijksmuseumAPI.js"; // Adjust the path as needed
// import { fetchArtworkImage } from "./api/art.js";

const initializeApp = () => {
  const ui = document.getElementById(USER_INTERFACE_ID);

  // Initialize and inject the nav
  ui.insertAdjacentHTML("beforeend", initializeNav());

  const navItems = ["Home", "About", "Contact"];
  populateNavItems(navItems);
  attachMenuToggleListener();
  // Inject the sidebar
  initializeSidebar();

  ui.insertAdjacentHTML("beforeend", renderMain());
  ui.insertAdjacentHTML("beforeend", renderFooter());

  // fetchArtworkImage();

  // fetchUserSets();
};

// window.onload = initializeApp;
document.addEventListener("DOMContentLoaded", () => {
  initializeApp();
});
