const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

addBtn.addEventListener("click", function () {
  const text = todoInput.value.trim();
  if (text !== "") {
    const newDiv = document.createElement("div");

    newDiv.classList.add("new-div");
    newDiv.textContent = text;

    newDiv.addEventListener("click", function () {
      if (newDiv.classList.contains("completed")) {
        todoList.removeChild(newDiv);
      } else {
        newDiv.classList.add("completed");
      }
    });

    todoList.appendChild(newDiv);
    todoInput.value = "";
  }
});
