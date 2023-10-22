const apiKey = "eXVjKRhm";

export async function fetchUserSets(page = 1) {
  try {
    const url = `https://www.rijksmuseum.nl/api/en/usersets?key=${apiKey}&format=json&page=${page}`;
    const response = await fetch(url);

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Fetch Error:", errorData);
      return;
    }

    const data = await response.json();
    console.log(data);

    if (data.userSets) {
      const imageUrls = data.userSets
        .map((set) => (set.image ? set.image.url : null))
        .filter((url) => url);
      console.log(imageUrls);
      if (imageUrls.length > 0) {
        const imgElement = document.createElement("img");
        imgElement.src = imageUrls[0];
        const container = document.getElementById("container-id");
        container.appendChild(imgElement);
      }
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}
fetchUserSets();
