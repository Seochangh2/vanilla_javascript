const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

function apendToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  li.appendChild(span);
  toDoList.appendChild(li);
}
function toDoSubmit(event) {
  event.preventDefault();
  apendToDo(toDoInput.value);
  toDoInput.value = "";
}
toDoForm.addEventListener("submit", toDoSubmit);
