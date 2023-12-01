import { TODO_FORM_ID, TODO_INPUT_ID, TODO_DISPLAY_ID } from "../constants.js";

const handleFetchError = (error) => {
  console.error("Fetch Error: ", error);
};

const updateTodoUI = () => {
  fetchTodos().catch(handleFetchError);
};

export const renderTodos = (todos) => {
  const todoList = document.getElementById(TODO_DISPLAY_ID);
  todoList.innerHTML = "";
  todos.forEach((todo) => {
    const todoElement = createTodoElement(todo);
    todoList.appendChild(todoElement);
  });
};

export const createTodoElement = (todo) => {
  const todoElement = document.createElement("div");
  todoElement.className = "todo-item";
  todoElement.innerHTML = `
        <p>${todo.title}</p>
        <button data-todo-id="${todo._id}" class="delete-btn" aria-label="Delete todo">Delete</button>
    `;
  todoElement.querySelector(".delete-btn").addEventListener("click", () => {
    if (confirm("Are you sure you want to delete this todo?")) {
      deleteTodo(todo._id);
    }
  });
  return todoElement;
};

export const fetchTodos = async () => {
  try {
    const response = await fetch("/todos");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const todos = await response.json();
    renderTodos(todos);
  } catch (error) {
    handleFetchError(error);
  }
};

export const addTodo = async (title) => {
  try {
    const newTodo = {
      title,
      userId: 1, // Ideally, set this based on the user context
      completed: false,
    };
    const response = await fetch("/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    });

    if (response.ok) {
      updateTodoUI();
    } else {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    handleFetchError(error);
  }
};

export const deleteTodo = async (id) => {
  try {
    const response = await fetch(`/todos/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      updateTodoUI();
    } else {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    handleFetchError(error);
  }
};

export const initializeTodoForm = () => {
  const todoForm = document.getElementById(TODO_FORM_ID);
  const todoInput = document.getElementById(TODO_INPUT_ID);

  if (todoForm) {
    todoForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const newTodo = todoInput.value.trim();
      if (newTodo) {
        addTodo(newTodo);
        todoInput.value = "";
      }
    });
  } else {
    console.error("Todo form not found!");
  }
};

document.addEventListener("DOMContentLoaded", (event) => {
  fetchTodos().catch(handleFetchError);
  initializeTodoForm();
});
