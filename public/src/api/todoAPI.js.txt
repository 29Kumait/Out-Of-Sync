import { TODO_FORM_ID, TODO_INPUT_ID, TODO_DISPLAY_ID } from "../constants.js";
let isFetchedTodos = false;
const getTodos = () => JSON.parse(localStorage.getItem("todos")) || [];
const saveTodos = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const renderTodos = (todos) => {
  const todoList = document.getElementById(TODO_DISPLAY_ID);
  todoList.innerHTML = "";
  todos.forEach((todo) => {
    const todoElement = createTodoElement(todo);
    todoList.appendChild(todoElement);
  });
};

const createTodoElement = (todo) => {
  const todoElement = document.createElement("div");
  todoElement.className = "todo-item";
  todoElement.innerHTML = `
    <p>${todo.title}</p>
    <button data-todo-id="${todo.id}" class="delete-btn">Delete</button>
  `;
  todoElement.querySelector(".delete-btn").addEventListener("click", () => {
    deleteTodo(todo.id);
  });
  return todoElement;
};

export const fetchTodos = async () => {
  console.log("Fetching todos...");
  let todos = getTodos();

  if (!isFetchedTodos) {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const fetchedTodos = await response.json();
    todos = fetchedTodos.slice(0, 5); // Limit to first 5 fetched todos
    saveTodos(todos);
    isFetchedTodos = true;
  }

  renderTodos(todos);
};

export const addTodo = (title) => {
  const todos = getTodos();
  const newTodo = {
    title,
    userId: 1,
    completed: false,
    id: Date.now(),
  };

  todos.push(newTodo);
  saveTodos(todos);
  renderTodos(todos);
};

export const deleteTodo = (id) => {
  console.log(`Deleting todo with ID: ${id}`);
  const todos = getTodos().filter((todo) => todo.id !== id);
  saveTodos(todos);
  renderTodos(todos);
};

export const initializeTodo = () => {
  fetchTodos();
};

export const initializeNote = () => {
  const todoForm = document.getElementById(TODO_FORM_ID);
  const todoInput = document.getElementById(TODO_INPUT_ID);

  todoForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const newTodo = todoInput.value.trim();
    if (newTodo) {
      addTodo(newTodo);
      todoInput.value = "";
    }
  });
};

// import { TODO_FORM_ID, TODO_INPUT_ID, TODO_DISPLAY_ID } from "../constants.js";

// const getTodos = () => JSON.parse(localStorage.getItem("todos")) || [];

// const saveTodos = (todos) =>
//   localStorage.setItem("todos", JSON.stringify(todos));

// const createTodoElement = (todo) => {
//   const todoElement = document.createElement("div");
//   todoElement.className = "todo-item";
//   todoElement.innerHTML = `
//         <p>${todo.title}</p>
//         <button data-todo-id="${todo.id}" class="delete-btn">Delete</button>
//     `;
//   todoElement.querySelector(".delete-btn").addEventListener("click", () => {
//     deleteTodo(todo.id);
//   });
//   return todoElement;
// };

// export const fetchTodos = async () => {
//   console.log(" todos..");
//   let todos = getTodos();

//   if (!todos.length) {
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos");
//     todos = await response.json();
//     saveTodos(todos);
//   }

//   const todoList = document.getElementById(TODO_DISPLAY_ID);
//   todoList.innerHTML = "";
//   todos.slice(0, 3).forEach((todo) => {
//     const todoElement = createTodoElement(todo);
//     todoList.appendChild(todoElement);
//   });
// };

// export const addTodo = (title) => {
//   const todos = getTodos();
//   const newTodo = {
//     title,
//     userId: 1,
//     completed: false,
//     id: Date.now(),
//   };

//   todos.push(newTodo);
//   saveTodos(todos);

//   return newTodo;
// };

// export const deleteTodo = (id) => {
//   console.log(`Deleting todo with ID: ${id}`);
//   const todos = getTodos().filter((todo) => todo.id !== id);
//   saveTodos(todos);
//   fetchTodos();
// };

// export const initializeTodo = () => {
//   fetchTodos();
// };

// export const initializeNote = () => {
//   const todoForm = document.getElementById(TODO_FORM_ID);
//   const todoInput = document.getElementById(TODO_INPUT_ID);
//   const todoDisplay = document.getElementById(TODO_DISPLAY_ID);

//   todoForm.addEventListener("submit", function (event) {
//     event.preventDefault();

//     const newTodo = todoInput.value.trim();

//     if (newTodo) {
//       const todoElement = document.createElement("div");
//       todoElement.className = "todo-item";
//       todoElement.innerHTML = `<p>${newTodo}</p>`;

//       todoDisplay.appendChild(todoElement);
//       todoInput.value = "";
//     }
//   });
// };
