const apiKey = "8ce81f0fcdec753deb7e2c32325e7f55";

document.getElementById("fetchNews").addEventListener("click", async () => {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
    );
    const data = await response.json();
    const newsList = document.getElementById("newsList");
    newsList.innerHTML = ""; // Clear existing news

    data.articles.forEach((article) => {
      const newsItem = document.createElement("div");
      const closeButton = document.createElement("span");

      closeButton.textContent = "✕";
      closeButton.className = "close-button";
      closeButton.addEventListener("click", () => {
        newsItem.remove();
      });

      newsItem.innerHTML = `
        <h2>${article.title}</h2>
        <p>${article.description}</p>
      `;
      newsItem.appendChild(closeButton);
      newsList.appendChild(newsItem);
    });
  } catch (error) {
    console.error("An error occurred:", error);
  }
});

const apiKey = "2a99a0a58a7a424f950e1a62bbed2546";

// document.getElementById("fetchNews").addEventListener("click", async () => {
//   try {
//     const response = await fetch(
//       `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
//     );
//     const data = await response.json();
//     const newsList = document.getElementById("newsList");
//     newsList.innerHTML = ""; // Clear existing news

//     data.articles.forEach((article) => {
//       const newsItem = document.createElement("div");
//       newsItem.innerHTML = `
//             <h2>${article.title}</h2>
//             <p>${article.description}</p>
//           `;
//       newsList.appendChild(newsItem);
//     });
//   } catch (error) {
//     console.error("An error occurred:", error);
//   }
// });
document.addEventListener("DOMContentLoaded", () => {
  const closeButtons = document.querySelectorAll(".close-btn");
  closeButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.target.closest(".news-article").remove();
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("fetchNews").addEventListener("click", async () => {
    const newsList = document.getElementById("newsList");

    // Fetching news from an API (replace with actual API call)
    const fakeNewsData = [
      { title: "Title 1", description: "Description 1" },
      { title: "Title 2", description: "Description 2" },
      // ... more articles
    ];

    // Clear previous news
    newsList.innerHTML = "";

    // Populate news
    fakeNewsData.forEach((article) => {
      const articleDiv = document.createElement("div");
      articleDiv.classList.add("news-article");

      const closeButton = document.createElement("button");
      closeButton.classList.add("close-btn");
      closeButton.textContent = "X";
      closeButton.addEventListener("click", () => {
        articleDiv.remove();
      });

      const title = document.createElement("h2");
      title.textContent = article.title;

      const description = document.createElement("p");
      description.textContent = article.description;

      articleDiv.appendChild(closeButton);
      articleDiv.appendChild(title);
      articleDiv.appendChild(description);

      newsList.appendChild(articleDiv);
    });
  });
});
