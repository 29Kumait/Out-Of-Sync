export async function fetchFileFromServer() {
  try {
    const response = await fetch("http://localhost:3000/fetchDropboxFile");

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Fetch Error:", errorData);
      return;
    }

    const data = await response.json();
    // Do something with the data
  } catch (error) {
    console.error("An error occurred:", error);
  }
}
