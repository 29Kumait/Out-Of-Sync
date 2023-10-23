// // Helper function to save todos to local storage
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
//   let todos = getTodos();

//   if (!todos.length) {
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos");
//     todos = await response.json();
//     saveTodos(todos);
//   }

//   const todoList = document.getElementById(TODO_DISPLAY_ID);
//   todoList.innerHTML = "";
//   todos.slice(0, 10).forEach((todo) => {
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
//   const todos = getTodos().filter((todo) => todo.id !== id);
//   saveTodos(todos);
//   fetchTodos();
// };

// export const initializeTodo = () => {
//   fetchTodos();
// };
// Function to fetch Todos and populate the list
export const fetchTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await response.json();
  const todoList = document.getElementById("todo-list");
  todoList.innerHTML = "";
  todos.slice(0, 10).forEach((todo) => {
    todoList.innerHTML += `<li>${todo.title}</li>`;
  });
};

// Function to add a new Todo
export const addTodo = async (title) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      title,
      userId: 1,
      completed: false,
    }),
  });
  const newTodo = await response.json();
  return newTodo;
};
