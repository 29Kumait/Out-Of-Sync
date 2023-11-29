import { NEWS_TICKER_ID } from "../constants.js";

const API_KEY = "2a99a0a58a7a424f950e1a62bbed2546";
const url = `https://newsapi.org/v2/top-headlines?sources=bbc-news,the-verge&apiKey=${API_KEY}`;

let headlines = [];
let tickerPosition = 0;

const fetchHeadlines = async () => {
  const response = await fetch(url);
  const data = await response.json();

  headlines = data.articles.map((article) => article.title);
};

const initTicker = () => {
  const tickerElement = document.createElement("div");
  tickerElement.id = NEWS_TICKER_ID;
  document.body.appendChild(tickerElement);
};

const updateTicker = () => {
  if (headlines.length === 0) return;

  let displayedHeadline = headlines[tickerPosition % headlines.length];
  document.getElementById(NEWS_TICKER_ID).innerText = `• ${displayedHeadline}`;

  tickerPosition++;
};

export const news = async () => {
  initTicker();
  await fetchHeadlines();
  setInterval(updateTicker, 5000);
};
