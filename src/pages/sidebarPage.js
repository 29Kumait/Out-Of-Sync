// sidebar.js
import { sidebarSetUp } from "../views/sidebarView.js";
import { USER_INTERFACE_ID, SIDEBAR_ID, OPEN_BTN_ID } from "../constants.js";

export const initializeSidebar = () => {
  const ui = document.getElementById(USER_INTERFACE_ID);
  ui.innerHTML += sidebarSetUp();

  const toggle = (el, className) => el.classList.toggle(className);

  const sidebar = document.getElementById(SIDEBAR_ID);
  const openBtn = document.getElementById(OPEN_BTN_ID);
  const [openIcon, closeIcon] = openBtn.querySelectorAll("img");

  let isOpen = false;

  openBtn?.addEventListener("click", () => {
    [sidebar, openBtn].forEach((el) => toggle(el, "open"));
    [openIcon, closeIcon].forEach((el) => toggle(el, "hidden"));
    isOpen = !isOpen;

    // DOM background image
    if (isOpen) {
      document.body.style.backgroundImage = "url('../public/Fetc.png')";
    } else {
      document.body.style.backgroundImage = "url('../public/Fet.png')";
    }
  });
};
