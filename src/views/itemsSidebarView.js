import {
  WEATHER_PAGE_ICON_LINK_ID,
  MUSEUM_PAGE_ICON_LINK_ID,
} from "../constants.js";
export const items = [
  {
    icon: "../public/W.ico",
    alt: "Weather",
    id: `${WEATHER_PAGE_ICON_LINK_ID}`,
  },
  { icon: "../public/fetch.ico", alt: "Icons", id: "items2" },
  { icon: "../public/Post.ico", alt: "Post", id: "item3" },
  {
    icon: "../public/art.ico",
    alt: "Museum",
    id: `${MUSEUM_PAGE_ICON_LINK_ID}`,
  },
];

export const createSidebarItem = (icon, alt, id) => `
  <div class="sidebar-item" id="${id}" style="margin: 39px 0;"> 
    <img src="${icon}" alt="${alt}" />
  </div>
`;
