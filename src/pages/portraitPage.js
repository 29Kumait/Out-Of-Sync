import {
  MUSEUM_PAGE_ICON_LINK_ID,
  MAIN_ID,
  ARTWORK_SECTION_ID,
} from "../constants.js";
import { fetchArtworkImage } from "../api/art.js";

export const initializeMuseumPage = () => {
  const contentPage = document.getElementById(MUSEUM_PAGE_ICON_LINK_ID);

  contentPage.addEventListener("click", () => {
    const contentMain = document.getElementById(MAIN_ID);
    contentMain.innerHTML = "";

    const museumPage = `
      <div id="museumContainer">
        <h1>Museum</h1>
        <section id="${ARTWORK_SECTION_ID}">
        </section>
      </div>
    `;
    const artworkSection = document.getElementById(ARTWORK_SECTION_ID);
    artworkSection.style.maxWidth = "100%";
    artworkSection.style.maxHeight = "100vh";
    contentMain.style.cssText = `
    backgroundSize = "cover";
    background-color:  rgb(255, 105,  97);
     `;

    contentMain.insertAdjacentHTML("beforeend", museumPage);

    fetchArtworkImage();
  });
};
