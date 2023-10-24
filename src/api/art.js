import { ARTWORK_SECTION_ID } from "../constants.js";
const apiKey = "eXVjKRhm";
// const objectNumber = "SK-A-1196";
export async function fetchArtworkImage(objectNumber) {
  try {
    const url = `https://www.rijksmuseum.nl/api/en/collection/${objectNumber}/tiles?key=${apiKey}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    const level = data.levels[0];
    const tiles = level.tiles;

    const container = document.createElement("div");
    container.style.position = "relative";
    container.style.width = `${level.width}px`;
    container.style.height = `${level.height}px`;
    container.style.margin = "10px";
    let maxX = 0;
    let maxY = 0;

    tiles.forEach((tile) => {
      const imgElement = document.createElement("img");
      imgElement.src = tile.url;
      imgElement.style.position = "absolute";
      imgElement.style.left = `${tile.x * 256}px`;
      imgElement.style.top = `${tile.y * 256}px`;
      imgElement.width = 256;
      imgElement.height = 256;

      maxX = Math.max(maxX, tile.x * 256 + 256);
      maxY = Math.max(maxY, tile.y * 256 + 256);
      container.appendChild(imgElement);
    });
    container.style.width = `${maxX}px`;
    container.style.height = `${maxY}px`;
    const artworkSection = document.getElementById(ARTWORK_SECTION_ID);
    console.log(document.getElementById(ARTWORK_SECTION_ID));
    artworkSection.appendChild(container);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

export async function fetchArtSearch() {
  console.log("fetchArtSearch is being called");
  const query = document.getElementById("searchInput").value;
  const apiKey = "eXVjKRhm";
  const url = `https://www.rijksmuseum.nl/api/en/collection?key=${apiKey}&q=${query}`;

  const response = await fetch(url);
  const data = await response.json();

  displaySearchResults(data.artObjects);
}
export const displaySearchResults = (artObjects) => {
  const artPieceDiv = document.createElement("div");
  artPieceDiv.id = "art-piece-display";
  artPieceDiv.style = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  `;

  const artPieceImg = document.createElement("img");
  // Assuming the first object in the artObjects array has a webImage.url property
  if (
    artObjects.length > 0 &&
    artObjects[0].webImage &&
    artObjects[0].webImage.url
  ) {
    artPieceImg.src = artObjects[0].webImage.url;
  } else {
    //  error Handler
  }

  artPieceImg.style = "max-width: 90%; max-height: 90%;";
  artPieceImg.loading = "lazy";
  artPieceDiv.appendChild(artPieceImg);

  document.body.appendChild(artPieceDiv);

  artPieceDiv.addEventListener("click", () => {
    document.body.removeChild(artPieceDiv);
  });
};
