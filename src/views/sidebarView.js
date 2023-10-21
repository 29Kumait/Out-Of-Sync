import {
  OPEN_BTN_ID,
  SIDEBAR_ID,
  FETCH_ARTWORK_LINK_ID,
} from "../constants.js";

export const sidebarSetUp = () => {
  return `
    <div id="${SIDEBAR_ID}" class="sidebar">
  </div>

    <button id="${OPEN_BTN_ID}">
    <img src="../public/home.ico" alt="Open Sidebar" />
    <img src="../public/X.ico" class="close-icon hidden" /></button>
  `;
};

// Function to create a sidebar item
const createSidebarItem = (icon, alt, id) => {
  return `
    <div id="${id}" class="sidebar-item" style="margin: 39px 0;">
      <img src="${icon}" alt="${alt}" />
    </div>
  `;
};

// Existing populateSidebar function
export const populateSidebar = () => {
  const sidebar = document.getElementById(SIDEBAR_ID);

  // Apply styles to sidebar
  sidebar.style.display = "flex";
  sidebar.style.flexDirection = "column";
  sidebar.style.alignItems = "center";
  sidebar.style.justifyContent = "center";

  const items = [
    { icon: "../public/W.ico", alt: "Weather", id: "items1" },
    { icon: "../public/fetch.ico", alt: "Icons", id: "items2" },
    { icon: "../public/Post.ico", alt: "Post", id: "item3" },
    { icon: "../public/art.ico", alt: "Museum", id: "item4" },
  ];

  items.forEach((item) => {
    sidebar.insertAdjacentHTML(
      "beforeend",
      createSidebarItem(item.icon, item.alt, item.id)
    );
  });
};

// // New function to create a sidebar item
// const createSidebarItem = (iconPath, altText, itemId) => `
//   <div class="sidebar-item" id="${itemId}">
//     <img src="${iconPath}" alt="${altText}" />
//   </div>
// `;

// // New function to populate the sidebar
// export const populateSidebar = () => {
//   const sidebar = document.getElementById(SIDEBAR_ID);
//   sidebar.style.display = 'flex';
//   sidebar.style.flexDirection = 'column';
//   sidebar.style.alignItems = 'center';
//   sidebar.style.justifyContent = 'center';
//   const items = [
//     { icon: "../public/icon1.ico", alt: "Icon 1", id: "item1" },
//     { icon: "../public/icon2.ico", alt: "Icon 2", id: "item2" },
//     { icon: "../public/icon3.ico", alt: "Icon 3", id: "item3" },
//   ];

//   items.forEach((item) => {
//     sidebar.insertAdjacentHTML(
//       "beforeend",
//       createSidebarItem(item.icon, item.alt, item.id)
//     );
//   });
// };
