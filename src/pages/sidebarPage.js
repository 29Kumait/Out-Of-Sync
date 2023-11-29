import { sidebarSetUp, styleSidebar } from "../views/sidebarView.js";
import { USER_INTERFACE_ID, SIDEBAR_ID, OPEN_BTN_ID } from "../constants.js";
import { initializeSidebarItems } from "./itemsSidebarPage.js";

export const initializeSidebar = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.insertAdjacentHTML("beforeend", sidebarSetUp());

  styleSidebar();
  initializeSidebarItems();

  const [sidebar, openBtn] = [SIDEBAR_ID, OPEN_BTN_ID].map((id) =>
    document.getElementById(id)
  );

  sidebar.style.transition = "all 1s ease";
  const [openIcon, closeIcon] = openBtn?.querySelectorAll("img") || [];

  document.body.classList.add("fade-transition");

  let isOpen = false;
  openBtn?.addEventListener("click", () => {
    [sidebar, openBtn].forEach((el) => el?.classList.toggle("open"));
    [openIcon, closeIcon].forEach((el) => el?.classList.toggle("hidden"));

    isOpen = !isOpen;
    setTimeout(() => {
      document.body.style.backgroundImage = isOpen
        ? "url('public/img.png')"
        : "url('../public/Fet.png')";
    }, 300);
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

// const setSidebarButtonPosition = () => {
//   const nav = document.querySelector(".nav");
//   const openBtn = document.getElementById(OPEN_BTN_ID);  // Define openBtn here
//   if (nav && openBtn) {
//     openBtn.style.top = `${nav.offsetHeight}px`;
//   }
// };

// const toggleClasses = (elements, classNames) =>
//   elements.forEach((el, i) => el?.classList.toggle(classNames[i]));

// export const initializeSidebar = () => {
//   document
//     .getElementById(USER_INTERFACE_ID)
//     ?.insertAdjacentHTML("beforeend", sidebarSetUp());
//   styleSidebar();
//   initializeSidebarItems();

//   const [sidebar, openBtn] = [SIDEBAR_ID, OPEN_BTN_ID].map((id) =>
//     document.getElementById(id)
//   );
//   // transition effect
//   sidebar.style.transition = "all 1s ease";
//   const [openIcon, closeIcon] = openBtn?.querySelectorAll("img") || [];
//   let isOpen = false;
//   document.body.classList.add("fade-transition");
//   openBtn?.addEventListener("click", () => {
//     toggleClasses([sidebar, openBtn], ["open", "open"]);
//     toggleClasses([openIcon, closeIcon], ["hidden", "hidden"]);
//     isOpen = !isOpen;
//     setTimeout(() => {
//       document.body.style.backgroundImage = isOpen
//         ? "url('../public/Fetc.png')"
//         : "url('../public/Fet.png')";
//     }, 300); // 300ms delay
//   });

//   const setSidebarButtonPosition = () => {
//     const nav = document.querySelector(".nav");
//     if (nav && openBtn) {
//       openBtn.style.top = `${nav.offsetHeight}px`;
//     }
//   };

//   setSidebarButtonPosition();
//   window.addEventListener("load", setSidebarButtonPosition);
//   window.addEventListener("resize", setSidebarButtonPosition);
// };

// // Placeholder for the displayFetchedArtworkPage function

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
