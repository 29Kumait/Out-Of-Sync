import { ARTWORK_SECTION_ID } from "../constants.js";
const apiKey = "eXVjKRhm";
const objectNumber = "SK-A-1196";
export async function fetchArtworkImage() {
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

    let maxX = 0;
    let maxY = 0;

    tiles.forEach((tile) => {
      const imgElement = document.createElement("img");

      imgElement.src = tile.url;
      imgElement.style.position = "absolute";
      imgElement.style.left = `${tile.x * 256}px`;
      imgElement.style.top = `${tile.y * 256}px`;

      // Calculate the maximum x and y positions to set container dimensions
      maxX = Math.max(maxX, tile.x * 256 + 256); // 256 is the tile width
      maxY = Math.max(maxY, tile.y * 256 + 256); // 256 is the tile height

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
