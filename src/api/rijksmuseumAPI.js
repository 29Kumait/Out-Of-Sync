import { USER_SETS_ID } from "../constants.js";

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
    return data.userSets
      .map((userSet) =>
        userSet.name && userSet.user && userSet.user.name
          ? `• ${userSet.name} by ${userSet.user.name} | `
          : ""
      )
      .filter(Boolean);
  } catch (error) {
    console.error(" Error: ", error);
  }
}

export function createTicker() {
  const tickerContainer = document.createElement("div");
  tickerContainer.id = USER_SETS_ID;
  tickerContainer.style.width = "50%";
  tickerContainer.style.overflow = "hidden";
  return tickerContainer;
}

function startScrolling(tickerContainer, userSets) {
  let position = 0;
  const ticker = document.createElement("div");
  ticker.style.whiteSpace = "nowrap";
  ticker.style.overflow = "hidden";

  ticker.textContent = userSets.join(" ");
  tickerContainer.appendChild(ticker);

  function scroll() {
    position--;
    ticker.style.transform = `translateX(${position}px)`;
    if (-position > ticker.offsetWidth) {
      position = tickerContainer.offsetWidth;
    }
    requestAnimationFrame(scroll);
  }

  scroll();
}

export const userSets = async (tickerContainer) => {
  const userSets = await fetchUserSets();
  if (!userSets) return;

  startScrolling(tickerContainer, userSets);
};
