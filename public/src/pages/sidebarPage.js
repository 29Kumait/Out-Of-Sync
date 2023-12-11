import {OPEN_BTN_ID, SIDEBAR_ID, USER_INTERFACE_ID} from "../constants.js";
import {sidebarSetUp, styleSidebar} from "../views/sidebarView.js";

import {initializeSidebarItems} from "./itemsSidebarPage.js";

export const initializeSidebar = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.insertAdjacentHTML("beforeend", sidebarSetUp());

  styleSidebar();
  initializeSidebarItems();

  const [sidebar, openBtn] =
      [ SIDEBAR_ID, OPEN_BTN_ID ].map((id) => document.getElementById(id));

  sidebar.style.transition = "all 1s ease";
  const [openIcon, closeIcon] = openBtn?.querySelectorAll("img") || [];

  document.body.classList.add("fade-transition");

  let isOpen = false;
  openBtn?.addEventListener("click", () => {
    [sidebar, openBtn].forEach((el) => el?.classList.toggle("open"));
    [openIcon, closeIcon].forEach((el) => el?.classList.toggle("hidden"));

    isOpen = !isOpen;
    setTimeout(() => {
      document.body.style.backgroundImage =
          isOpen ? "url('media/Fet.png')" : "url('media/mes.png')";
    }, 500);
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
