// initializeSidebarItems.js
import { SIDEBAR_ID } from "../constants.js";
import { createSidebarItem, items } from "../views/itemsSidebarView.js";

export const initializeSidebarItems = () => {
  const sidebar = document.getElementById(SIDEBAR_ID);
  items.forEach((item) => {
    sidebar.insertAdjacentHTML(
      "beforeend",
      createSidebarItem(item.icon, item.alt, item.id),
    );
  });

  // const sidebarItems = document.querySelectorAll(".sidebar-item");
  // sidebarItems.forEach((item) => {
  //   item.addEventListener("click", () => {
  //     const itemId = item.id;
  //     loadNewPage(itemId);
  //   });
  // });
};
