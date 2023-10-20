// navPage.js
import { NAV_LIST_ID, MENU_TOGGLE_ID } from "../constants.js";

export const populateNavItems = (navItems) => {
  const ulElement = document.getElementById(NAV_LIST_ID);
  if (ulElement) {
    navItems.forEach((item) => {
      const liElement = document.createElement("li");
      liElement.className = "nav-item";
      liElement.innerHTML = `<a class="nav-link" href="#">${item}</a>`;
      ulElement.appendChild(liElement);
    });
  }
};

export const attachMenuToggleListener = () => {
  const menuToggle = document.getElementById(MENU_TOGGLE_ID);
  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      const navList = document.getElementById(NAV_LIST_ID);
      navList.classList.toggle("hidden");
    });
  }
};

// import { NAV_LIST_ID, MENU_TOGGLE_ID } from "../constants.js";
// export const populateNavItems = (navItems) => {
//   const ulElement = document.getElementById(NAV_LIST_ID);
//   if (ulElement) {
//     navItems.forEach((item) => {
//       const liElement = document.createElement("li");
//       liElement.className = "nav-item";
//       liElement.innerHTML = `<a class="nav-link" href="#">${item}</a>`;
//       ulElement.appendChild(liElement);
//     });
//   }
// };

// export const toggleNavList = () => {
//   const navList = document.getElementById(NAV_LIST_ID);
//   navList.classList.toggle("hidden");
// };

// export const attachMenuToggleListener = () => {
//   const element = document.getElementById(MENU_TOGGLE_ID);
//   if (element) {
//     element.addEventListener("click", toggleNavList);
//   } else {
//     console.error(`Element with ID ${MENU_TOGGLE_ID} not found.`);
//   }
// };
