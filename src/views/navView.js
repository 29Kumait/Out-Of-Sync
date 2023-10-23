// views/navView.js
import { NAV_ID, MENU_TOGGLE_ID, NAV_LIST_ID } from "../constants.js";

export const initializeNav = () => {
  return `
    <nav id="${NAV_ID}" class="nav">
      <div class="menu-toggle" id="${MENU_TOGGLE_ID}">
        <!-- I could add icon here -->
      </div>
      <ul id="${NAV_LIST_ID}" class="nav-list hidden">
        <!-- Nav items are populated here -->
      </ul>
    </nav>
  `;
};

// // navView.js
// import {
//   NAV_ID,
//   MENU_TOGGLE_ID,
//   NAV_LIST_ID,
//   MENU_ICON_ID,
// } from "../constants.js";

// export const initializeNav = () => {
//   return `
//     <nav id="${NAV_ID}" class="nav">
//       <div class="menu-toggle" id="${MENU_TOGGLE_ID}">
//         <img id="${MENU_ICON_ID}" src="..public/i.Ico">
//       </div>
//       <ul id="${NAV_LIST_ID}" class="nav-list hidden">
//         <!-- Nav items are populated here -->
//       </ul>
//     </nav>
//   `;
// };
// navView.js
