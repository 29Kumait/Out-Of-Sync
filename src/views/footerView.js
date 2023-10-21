import { FOOTER_ID } from "../constants.js";

export const renderFooter = () => {
  return `
    <footer id="${FOOTER_ID}">
      <p>&copy; Practice App</p>
    </footer>
  `;
};
