import { OPEN_BTN_ID, SIDEBAR_ID } from "../constants.js";

export const sidebarSetUp = () => {
  return `
    <div id="${SIDEBAR_ID}" class="sidebar">
      <!--  content latterON -->
    </div>
    <button id="${OPEN_BTN_ID}">
    <img src="../public/home.ico" alt="Open Sidebar" />
    <img src="../public/X.ico" class="close-icon hidden" /></button>
  `;
};
