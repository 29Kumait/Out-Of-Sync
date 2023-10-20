import { initializeNav } from "./views/navView.js";
import { attachMenuToggleListener, populateNavItems } from "./pages/navPage.js";
import { USER_INTERFACE_ID } from "./constants.js";
import { initializeSidebar } from "./pages/sidebarPage.js";
const initializeApp = () => {
  // Initialize and inject the nav
  const nav = initializeNav();
  document
    .querySelector(`#${USER_INTERFACE_ID}`)
    .insertAdjacentHTML("afterbegin", nav);

  const navItems = ["Home", "About", "Contact"];
  populateNavItems(navItems);
  attachMenuToggleListener();

  // Inject the sidebar
  initializeSidebar();
};
initializeApp();
