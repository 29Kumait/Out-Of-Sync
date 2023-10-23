// initializeSidebarItems.js
import { SIDEBAR_ID } from "../constants.js";
import { createSidebarItem, items } from "../views/itemsSidebarView.js";

export const initializeSidebarItems = () => {
  const sidebar = document.getElementById(SIDEBAR_ID);
  items.forEach((item) => {
    sidebar.insertAdjacentHTML(
      "beforeend",
      createSidebarItem(item.icon, item.alt, item.id)
    );
  });
  document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("SIDEBAR_ID");
    const circle = document.getElementById("circle");

    button.addEventListener("click", function (event) {
      const rect = event.target.getBoundingClientRect();
      circle.style.left = `${rect.left + rect.width / 2 - 50}px`;
      circle.style.top = `${rect.top + rect.height / 2 - 50}px`;

      circle.classList.remove("hidden");

      setTimeout(() => {
        circle.classList.add("hidden");
      }, 1000);
    });
  });
  // const sidebarItems = document.querySelectorAll(".sidebar-item");
  // sidebarItems.forEach((item) => {
  //   item.addEventListener("click", () => {
  //     const itemId = item.id;
  //     loadNewPage(itemId);
  //   });
  // });
};
