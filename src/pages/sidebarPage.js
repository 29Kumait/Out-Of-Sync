// sidebarPage.js
import { sidebarSetUp } from "../views/sidebarView.js";
import { USER_INTERFACE_ID, SIDEBAR_ID, OPEN_BTN_ID } from "../constants.js";

const toggleClasses = (elements, classNames) =>
  elements.forEach((el, i) => el?.classList.toggle(classNames[i]));

export const initializeSidebar = () => {
  document
    .getElementById(USER_INTERFACE_ID)
    ?.insertAdjacentHTML("beforeend", sidebarSetUp());

  const [sidebar, openBtn] = [SIDEBAR_ID, OPEN_BTN_ID].map((id) =>
    document.getElementById(id)
  );
  const [openIcon, closeIcon] = openBtn?.querySelectorAll("img") || [];

  let isOpen = false;

  openBtn?.addEventListener("click", () => {
    toggleClasses([sidebar, openBtn], ["open", "open"]);
    toggleClasses([openIcon, closeIcon], ["hidden", "hidden"]);

    isOpen = !isOpen;
    document.body.style.backgroundImage = isOpen
      ? "url('../public/Fetc.png')"
      : "url('../public/Fet.png')";
  });

  const setSidebarButtonPosition = () => {
    const nav = document.querySelector(".nav");
    if (nav && openBtn) {
      openBtn.style.top = `${nav.offsetHeight}px`;
    }
  };

  setSidebarButtonPosition();
  window.addEventListener("load", setSidebarButtonPosition);
  window.addEventListener("resize", setSidebarButtonPosition);
};

// // sidebarPage.js
// import { sidebarSetUp } from "../views/sidebarView.js";
// import { USER_INTERFACE_ID, SIDEBAR_ID, OPEN_BTN_ID } from "../constants.js";

// export const initializeSidebar = () => {
//   const ui = document.getElementById(USER_INTERFACE_ID);
//   ui.insertAdjacentHTML("beforeend", sidebarSetUp());

//   const toggle = (el, className) => el.classList.toggle(className);

//   const sidebar = document.getElementById(SIDEBAR_ID);
//   const openBtn = document.getElementById(OPEN_BTN_ID);
//   const [openIcon, closeIcon] = openBtn.querySelectorAll("img");

//   let isOpen = false;

//   openBtn?.addEventListener("click", () => {
//     [sidebar, openBtn].forEach((el) => toggle(el, "open"));
//     [openIcon, closeIcon].forEach((el) => toggle(el, "hidden"));
//     isOpen = !isOpen;

//     // DOM background image
//     if (isOpen) {
//       document.body.style.backgroundImage = "url('../public/Fetc.png')";
//     } else {
//       document.body.style.backgroundImage = "url('../public/Fet.png')";
//     }
//   });

//   const setSidebarButtonPosition = () => {
//     const nav = document.querySelector(".nav");
//     if (nav && openBtn) {
//       const navHeight = nav.offsetHeight;
//       openBtn.style.top = `${navHeight}px`;
//     }
//   };
//   // start fix
//   setSidebarButtonPosition();
//   // on  load and resize
//   window.addEventListener("load", setSidebarButtonPosition);
//   window.addEventListener("resize", setSidebarButtonPosition);
// };
