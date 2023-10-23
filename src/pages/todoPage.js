import {
  MAIN_ID,
  FILES_PAGE_ICON_LINK_ID,
  TODO_FORM_ID,
  TODO_INPUT_ID,
  TODO_DISPLAY_ID,
} from "../constants.js";
import { initializeTodo, initializeNote } from "../api/todoAPI.js";
export const styleMainContentBlocks = (block1, block2, block3) => {
  block1.style.cssText = `
      flex-basis: 100%;
      background-color:RGBA( 105, 105, 105, 1 );
      padding: 20px;
    `;
  block2.style.cssText = `
    flex-basis: calc(50% - 20px);
    background-color: RGBA( 72, 209, 204, 1 );
    background-repeat: no-repeat;
    background-position: center;
    padding: 20px;
  `;

  block3.style.cssText = `
      flex-basis: calc(50% - 20px);
      background-color: RGBA( 105, 105, 105, 1 );
      padding: 20px;
    `;
};

export const initializeFilesPage = () => {
  const pageContent = document.getElementById(FILES_PAGE_ICON_LINK_ID);

  pageContent.addEventListener("click", () => {
    const mainContents = document.getElementById(MAIN_ID);
    mainContents.innerHTML = "";

    const filePage = `
        <div a-container">


          <h1>e</h1>
          <section id="block1"> 
          <form id="${TODO_FORM_ID}">
          <input type="text" id="${TODO_INPUT_ID}" placeholder="Enter your todo">
          <button type="submit">Add</button>
          </form>
          </section>

          <h1></h1>
          <section id="block2"> 
          <div id="${TODO_DISPLAY_ID}"></div>
          </section>

          <section id="block3">𝌽</section>
        </div>
      `;

    mainContents.insertAdjacentHTML("beforeend", filePage);

    // Style the main content blocks
    const block1 = document.getElementById("block1");
    const block2 = document.getElementById("block2");
    const block3 = document.getElementById("block3");

    styleMainContentBlocks(block1, block2, block3);
    initializeTodo();
    initializeNote();
  });
};
