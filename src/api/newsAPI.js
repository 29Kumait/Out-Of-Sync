import { NEWS_TICKER_ID } from "../constants.js";

const API_KEY = "2a99a0a58a7a424f950e1a62bbed2546";
const url = `https://newsapi.org/v2/top-headlines?sources=bbc-news,the-verge&apiKey=${API_KEY}`;

let headlines = [];
let tickerPosition = 0;

const fetchHeadlines = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch news data");
    }
    const data = await response.json();
    headlines = data.articles.map((article) => article.title);
  } catch (error) {
    console.error(error);
  }
};

const initTicker = () => {
  const tickerElement = document.createElement("div");

  tickerElement.id = NEWS_TICKER_ID;

  document.body.appendChild(tickerElement);
};

const updateTicker = () => {
  if (headlines.length === 0) return;

  let displayedHeadline = headlines[tickerPosition % headlines.length];
  document.getElementById(NEWS_TICKER_ID).innerText = `NEWs Headline:
  •  ${displayedHeadline}`;

  tickerPosition++;
};

let intervalId;

export const news = async () => {
  initTicker();
  await fetchHeadlines();
  intervalId = setInterval(updateTicker, 5000);
};

window.addEventListener("beforeunload", () => {
  clearInterval(intervalId);
});
