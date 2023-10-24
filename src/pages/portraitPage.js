import {
  MUSEUM_PAGE_ICON_LINK_ID,
  MAIN_ID,
  ARTWORK_SECTION_ID,
} from "../constants.js";
import { fetchArtworkImage, fetchArtSearch } from "../api/art.js";
import { fetchUserSets } from "../api/rijksmuseumAPI.js";
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
        

        <div id="results"></div>

        <input type="text" id="searchInput" placeholder="return portraits">

        <button>Search</button>
        <button id="showArtSetButton">Data Art-Set</button>  <div id="ticker">
      </div>
    `;

    // const searchButton = document.querySelector("button");
    // searchButton.addEventListener("click", fetchArtSearch);

    contentMain.style.cssText = `
    background-size: cover;
    max-height: 100vh;
    max-width: 100%;
    background-color: rgb(255, 105, 97);
     `;

    contentMain.insertAdjacentHTML("beforeend", museumPage);

    const searchButton = document.querySelector("button");
    if (searchButton) {
      searchButton.addEventListener("click", fetchArtSearch);
    }

    const showArtSetButton = document.getElementById("showArtSetButton");
    if (showArtSetButton) {
      showArtSetButton.addEventListener("click", fetchUserSets);
    }
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

// const style = document.createElement("style");
// style.type = "text/css";
// style.innerHTML = `
//   .art-overlay {
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background-color: rgba(0, 0, 0, 0.7); /* Black with 70% opacity */
//     z-index: 1000;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
//   .art-piece {
//     max-width: 90%;
//     max-height: 90%;
//   }
// `;
// document.getElementsByTagName("head")[0].appendChild(style);

// const showArtPiece = (imageUrl) => {
//   //  the overlay
//   const overlay = document.createElement("div");
//   overlay.className = "art-overlay";

//   const imgElement = document.createElement("img");
//   imgElement.className = "art-piece";
//   imgElement.src = imageUrl;

//   //  image within overlay
//   overlay.appendChild(imgElement);

//   //  overlay within body
//   document.body.appendChild(overlay);
