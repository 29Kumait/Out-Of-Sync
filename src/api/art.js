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
      imgElement.width = 256; // Optional, based on your requirements
      imgElement.height = 256; // Optional, based on your requirements
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

export async function fetchArtSearch() {
  console.log("fetchArtSearch is being called");
  const query = document.getElementById("searchInput").value;
  const apiKey = "eXVjKRhm";
  const url = `https://www.rijksmuseum.nl/api/en/collection?key=${apiKey}&q=${query}`;

  const response = await fetch(url);
  const data = await response.json();

  displaySearchResults(data.artObjects);
}

export function displaySearchResults(artObjects) {
  const resultsDiv = document.getElementById("results");

  resultsDiv.innerHTML = "";
  // Limit the number of artworks to display

  artObjects.forEach((art) => {
    const artDiv = document.createElement("div");
    artDiv.innerHTML = `
      <h3>${art.title}</h3>
      <p>${art.principalOrFirstMaker}</p>
      <img src="${art.webImage.url}" alt="${art.title}" loading="lazy">
    `;
    artDiv.className = "art-card";

    resultsDiv.appendChild(artDiv);
  });
}
