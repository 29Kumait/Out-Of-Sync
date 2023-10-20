// app.js
import { initializeNav } from "./views/navView.js";
import { attachMenuToggleListener, populateNavItems } from "./pages/navPage.js";
import { initializeSidebar } from "./pages/sidebarPage.js";
import { USER_INTERFACE_ID } from "./constants.js";

const initializeApp = () => {
  const ui = document.getElementById(USER_INTERFACE_ID);

  // Initialize and inject the nav
  ui.insertAdjacentHTML("beforeend", initializeNav());

  const navItems = ["Home", "About", "Contact"];
  populateNavItems(navItems);
  attachMenuToggleListener();

  // Inject the sidebar
  initializeSidebar();
};

window.onload = initializeApp;

// // app.js
// import { initializeNav } from "./views/navView.js";
// import { attachMenuToggleListener, populateNavItems } from "./pages/navPage.js";
// import { USER_INTERFACE_ID } from "./constants.js";
// import { initializeSidebar } from "./pages/sidebarPage.js";

// const initializeApp = () => {
//   // Initialize and inject the nav
//   const nav = initializeNav();
//   document.querySelector(`#${USER_INTERFACE_ID}`).innerHTML = nav;

//   const navItems = ["Home", "About", "Contact"];
//   populateNavItems(navItems);
//   attachMenuToggleListener();

//   // Inject the sidebar
//   initializeSidebar();
// };

// window.onload = initializeApp;

// app.js
