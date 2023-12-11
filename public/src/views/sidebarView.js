// sidebarView.js
import {OPEN_BTN_ID, SIDEBAR_ID} from "../constants.js";
export const sidebarSetUp = () => `
  <div id="${SIDEBAR_ID}" class="sidebar"></div>
  <button id="${OPEN_BTN_ID}">
    <img src="media/home.ico" alt="Open Sidebar" />
    <img src="media/X.ico" class="close-icon hidden" />
  </button>
`;

export const styleSidebar = () => {
  const sidebar = document.getElementById(SIDEBAR_ID);
  sidebar.style.cssText = `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;
};
