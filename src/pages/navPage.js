// navPage.js
import { NAV_LIST_ID, MENU_TOGGLE_ID, MAIN_ID } from "../constants.js";

export const populateNavItems = (navItems) => {
  const ulElement = document.getElementById(NAV_LIST_ID);
  if (ulElement) {
    navItems.forEach((item) => {
      const liElement = document.createElement("li");
      liElement.className = "nav-item";
      liElement.innerHTML = `<a class="nav-link" href="#">${item}</a>`;

      liElement.addEventListener(
        // liElement.addEventListener("click", function () {
        //   if (item === "Home") {
        //     goHome();
        //     document.body.style.backgroundImage = "url('../public/fetch.png')";
        //   }
        // });
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

/*for me to remember modern modification line 13
      if (item === 'Home') {
        goToHomePage();
       document.body.style.backgroundImage =  "url('../public/fetch.png')"
      } else if (item === 'About') { to do } */
// liElement.addEventListener("click", item === "Home" ? goHome : null);
