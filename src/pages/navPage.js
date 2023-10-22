// navPage.js
import { NAV_LIST_ID, MENU_TOGGLE_ID, MAIN_ID } from "../constants.js";
// import { initializeSidebarItems } from "./itemsSidebarPage.js";
export const populateNavItems = (navItems) => {
  const ulElement = document.getElementById(NAV_LIST_ID);
  if (ulElement) {
    navItems.forEach((item) => {
      const liElement = document.createElement("li");
      liElement.className = "nav-item";
      liElement.innerHTML = `<a class="nav-link" href="#">${item}</a>`;

      /*if (item === 'Home') {
        goToHomePage();
       document.body.style.backgroundImage =  "url('../public/fetch.png')"
      } else if (item === 'About') { to do } */

      // liElement.addEventListener("click", item === "Home" ? goHome : null);
      liElement.addEventListener(
        "click",
        () =>
          item === "Home" &&
          (goHome(),
          (document.body.style.backgroundImage = "url('../public/fetch.png')"))
      );

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

const goHome = () => {
  const mainContent = document.getElementById(MAIN_ID);
  mainContent.innerHTML = "";
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
//   element.addEventListener("click", toggleNavList);
// };
