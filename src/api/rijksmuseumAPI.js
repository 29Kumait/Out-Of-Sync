import { ARTWORK_SECTION_ID } from "../constants.js";
export async function fetchUserSets(page = 1) {
  const apiKey = "eXVjKRhm";
  try {
    const url = `https://www.rijksmuseum.nl/api/en/usersets?key=${apiKey}&format=json&page=${page}`;
    const response = await fetch(url);

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Fetch Error:", errorData);
      return;
    }

    const data = await response.json();

    if (data.userSets) {
      const ticker = document.getElementById("ticker");
      let tickerText = "";
      data.userSets.forEach((set) => {
        tickerText += `${set.title} by ${set.creator} | `;
      });
      ticker.textContent = tickerText;

      let position = ticker.offsetWidth; // Start position at the end of the ticker

      const moveTicker = () => {
        position -= 1; // Move left by 1 pixel
        ticker.style.transform = `translateX(${position}px)`;

        // Reset position when the text goes completely off screen
        if (-position >= ticker.offsetWidth) {
          position = ticker.offsetWidth;
        }
      };
      setInterval(moveTicker, 20);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

// function showArtPiece(imageUrl) {
//   const artDiv = document.createElement("div");
//   artDiv.className = "art-piece";

//   const imgElement = document.createElement("img");
//   imgElement.src = imageUrl;
//   artDiv.appendChild(imgElement);

//   artDiv.addEventListener("click", () => {
//     document.body.removeChild(artDiv);
//   });

//   document.body.appendChild(artDiv);
//

// export async function fetchUserSets(page = 1) {
//   const apiKey = "eXVjKRhm";
//   try {
//     const url = `https://www.rijksmuseum.nl/api/en/usersets?key=${apiKey}&format=json&page=${page}`;
//     const response = await fetch(url);

//     if (!response.ok) {
//       const errorData = await response.json();
//       console.error("Fetch Error:", errorData);
//       return;
//     }

//     const data = await response.json();
//     console.log(data);

//     if (data.userSets) {
//       console.log("Debug userSets:", data.userSets); // Debug line
//       const imageUrls = data.userSets
//         .map((set) => (set.image ? set.image.url : null))
//         .filter((url) => url);
//       console.log(imageUrls);
//       if (imageUrls.length > 0) {
//         const imgElement = document.createElement("img");
//         imgElement.src = imageUrls[0];
//         const container = document.getElementById(ARTWORK_SECTION_ID);
//         container.appendChild(imgElement);

//         document
//           .getElementById("showArtSetButton")
//           .addEventListener("click", () => {
//             showArtPiece(imageUrls[0]);
//           });
//       }
//     }
//   } catch (error) {
//     console.error("An error occurred:", error);
//   }
// }
