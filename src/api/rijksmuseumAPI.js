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
    console.log(data); // This will print the entire data object to the console

    if (data.userSets) {
      // Make sure to only proceed if 'image' and 'url' are present in the object
      const imageUrls = data.userSets
        .map((set) => (set.image ? set.image.url : null))
        .filter((url) => url);
      console.log(imageUrls); // This will print the array of image URLs to the console

      // Example: Using the first image URL to create an img element
      if (imageUrls.length > 0) {
        const imgElement = document.createElement("img");
        imgElement.src = imageUrls[0];

        // Append it to some container on your HTML
        const container = document.getElementById("your-container-id");
        container.appendChild(imgElement);
      }
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

// To use the function
fetchUserSets();
