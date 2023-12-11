import { TODO_DISPLAY_ID, TODO_FORM_ID, TODO_INPUT_ID } from "../constants.js";

const apiUrl = "http://localhost:5000/todos";

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
    <button data-todo-id="${todo._id}" class="delete-btn">Delete</button>
  `;
  todoElement.querySelector(".delete-btn").addEventListener("click", () => {
    deleteTodo(todo._id);
  });
  return todoElement;
};

export const fetchTodos = async () => {
  try {
    const response = await fetch(apiUrl);
    const todos = await response.json();
    renderTodos(todos);
  } catch (error) {
    console.error("Error fetching todos:", error);
  }
};

export const addTodo = async (title) => {
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });
    if (response.ok) {
      fetchTodos();
    }
  } catch (error) {
    console.error("Error adding todo:", error);
  }
};

export const deleteTodo = async (id) => {
  try {
    const response = await fetch(`${apiUrl}/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      fetchTodos();
    }
  } catch (error) {
    console.error("Error deleting todo:", error);
  }
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
