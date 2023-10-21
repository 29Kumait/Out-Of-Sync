// const apiKey = "eXVjKRhm";
// const objectNumber = "SK-A-1196";

// export async function fetchArtworkImage() {
//   try {
//     const url = `https://www.rijksmuseum.nl/api/en/collection/${objectNumber}/tiles?key=${apiKey}`;
//     const response = await fetch(url);

//     // if (!response.ok) {
//     //   const errorData = await response.json();
//     //   console.error("Fetch Error:", errorData);
//     //   return;
//     // }
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }

//     const data = await response.json();
//     const level = data.levels[0]; // Choose the appropriate level based on your needs
//     const tiles = level.tiles;

//     // Create a container div
//     const container = document.createElement("div");
//     container.style.position = "relative";
//     container.style.width = `${level.width}px`;
//     container.style.height = `${level.height}px`;

//     // Append each tile as an img element
//     tiles.forEach((tile) => {
//       const imgElement = document.createElement("img");
//       // JavaScript way

//       imgElement.src = tile.url;
//       imgElement.style.position = "absolute";
//       imgElement.style.left = `${tile.x * 256}px`;
//       imgElement.style.top = `${tile.y * 256}px`;
//       //   imgElement.style.maxWidth = "500px";
//       //   imgElement.style.maxHeight = "500px";
//       container.appendChild(imgElement);
//     });
//     // Append the container to some part of your HTML
//     document.body.appendChild(container);
//   } catch (error) {
//     console.error("An error occurred:", error);
//   }
// }
