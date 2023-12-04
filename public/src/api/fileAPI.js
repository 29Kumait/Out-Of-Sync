// // import { displayCalendar } from "../views/calenders.js";
// export const fetchCalendar = async () => {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos");
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     const data = await response.json();
//     displayCalendar(data);
//   } catch (error) {
//     console.error("Fetch error:", error);
//   }
// };
// export async function fetchCalendarEvents() {
//   try {
//     const response = await fetch("http://localhost:3000/events");
//     const data = await response.json();
//     displayCalendarEvents(data); // Function to display events on your page
//   } catch (error) {
//     console.error("Error fetching calendar events:", error);
//   }
// }
// import { displayData } from "../views/dataDisplay.js";

// export const fetchData = async () => {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     const data = await response.json();
//     displayData(data);
//   } catch (error) {
//     console.error("Fetch error:", error);
//   }
// };
