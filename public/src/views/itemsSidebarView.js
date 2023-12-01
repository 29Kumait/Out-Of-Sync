import {
  WEATHER_PAGE_ICON_LINK_ID,
  MUSEUM_PAGE_ICON_LINK_ID,
  LIST_PAGE_ICON_LINK_ID,
  FILES_PAGE_ICON_LINK_ID,
} from "../constants.js";
export const items = [
  {
    icon: "media/W.ico",
    alt: "Weather",
    id: `${WEATHER_PAGE_ICON_LINK_ID}`,
  },

  {
    icon: "media/fetch.ico",
    alt: "list",
    id: `${LIST_PAGE_ICON_LINK_ID}`,
  },

  {
    icon: "media/side.ico",
    alt: "files",
    id: `${FILES_PAGE_ICON_LINK_ID}`,
  },
  {
    icon: "media/art.ico",
    alt: "Museum",
    id: `${MUSEUM_PAGE_ICON_LINK_ID}`,
  },
];

export const createSidebarItem = (icon, alt, id) => `
  <div class="sidebar-item" id="${id}" style="margin: 39px 0;"> 
    <img src="${icon}" alt="${alt}" />
  </div>
`;
