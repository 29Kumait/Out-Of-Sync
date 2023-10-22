import {
  MUSEUM_PAGE_ICON_LINK_ID,
  MAIN_ID,
  ARTWORK_SECTION_ID,
} from "../constants.js";
import { fetchArtworkImage, fetchArtSearch } from "../api/art.js";

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
        
        <input type="text" id="searchInput" placeholder="artObject">
        <button>Search</button>
        <div id="results"></div>
      </div>
    `;

    const searchButton = document.querySelector("button");
    searchButton.addEventListener("click", fetchArtSearch);

    contentMain.style.cssText = `
    background-size: cover;
    max-height: 100vh;
    max-width: 100%;
    background-color: rgb(255, 105, 97);
     `;

    contentMain.insertAdjacentHTML("beforeend", museumPage);

    const objectNumber = "SK-A-1196";
    fetchArtworkImage(objectNumber);
  });
};

// const objectNumbers = ["SK-A-1196", "SK-A-1197", "SK-A-1198"]; // or
// objectNumbers.forEach((objectNumber) => {
//   fetchArtworkImage(objectNumber);
// });

// document.getElementById("searchForm").addEventListener("submit", function(event) {
//   event.preventDefault();
//   const query = document.getElementById("searchInput").value;
//   fetchArtworks(query);
// });
// displayResults(data.artObjects);
