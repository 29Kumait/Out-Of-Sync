import { fetchArtSearch, fetchArtworkImage } from "../api/art.js";
import {
  createTicker,
  fetchUserSets,
  userSets,
} from "../api/rijksmuseumAPI.js";
import {
  ARTWORK_SECTION_ID,
  MAIN_ID,
  MUSEUM_PAGE_ICON_LINK_ID,
  USER_SETS_ID,
} from "../constants.js";

function createMuseumPage(contentMain) {
  contentMain.innerHTML = "";

  const museumPage = `
    <div id="museumContainer">
      <h1>Museum</h1>
      <section id="${ARTWORK_SECTION_ID}">
      </section>
      <div id="results"></div>
      <input type="text" id="searchInput" placeholder="return portraits">
      <button id="searchButton">Search</button>
      <button id="showArtSetButton">Data Art-Set</button>
      <section id="${USER_SETS_ID}"> </section>
    </div>
  `;

  contentMain.style.cssText = `
    background-size: cover;
    max-height: 100vh;
    max-width: 100%;
    background-color: rgb(255, 105, 97);
  `;

  contentMain.insertAdjacentHTML("beforeend", museumPage);
}

export const initializeMuseumPage = () => {
  const contentPage = document.getElementById(MUSEUM_PAGE_ICON_LINK_ID);

  contentPage.addEventListener("click", () => {
    const contentMain = document.getElementById(MAIN_ID);
    contentMain.innerHTML = "";
    createMuseumPage(contentMain);

    const searchButton = document.getElementById("searchButton");
    if (searchButton) {
      searchButton.addEventListener("click", fetchArtSearch);
    }

    const showArtSetButton = document.getElementById("showArtSetButton");
    if (showArtSetButton) {
      showArtSetButton.addEventListener("click", async () => {
        const museumContainer = document.getElementById("museumContainer");
        const oldTickerContainer = document.getElementById(USER_SETS_ID);
        if (oldTickerContainer) {
          museumContainer.removeChild(oldTickerContainer);
        }

        const tickerContainer = createTicker();
        museumContainer.appendChild(tickerContainer);

        await userSets(tickerContainer);
      });
    }

    const objectNumber = "SK-A-1196";
    fetchArtworkImage(objectNumber);
  });
};
