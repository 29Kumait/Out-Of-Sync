// client-side JavaScript
import { TODO_FORM_ID, TODO_INPUT_ID, TODO_DISPLAY_ID } from "../constants.js";

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

const fetchTodos = async () => {
  const response = await fetch("/todos");
  const todos = await response.json();
  renderTodos(todos);
};

const addTodo = async (title) => {
  const newTodo = {
    title,
    userId: 1,
    completed: false,
  };
  const response = await fetch("/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  });
  const todo = await response.json();
  fetchTodos(); // refresh the list of todos
};

const deleteTodo = async (id) => {
  await fetch(`/todos/${id}`, {
    method: "DELETE",
  });
  fetchTodos(); // refresh the list of todos
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

initializeTodo();
initializeNote();
