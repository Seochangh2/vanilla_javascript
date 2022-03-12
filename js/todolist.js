const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const toDos = [];
function saveToDo() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}
function apendToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;

  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", removeToDO);

  li.appendChild(span);
  li.appendChild(button);

  toDoList.appendChild(li);
}
function toDoSubmit(event) {
  event.preventDefault();
  toDos.push(toDoInput.value);
  saveToDo();
  apendToDo(toDoInput.value);
  toDoInput.value = "";
}
function removeToDO(event) {
  li = event.target.parentElement;
  toDoList.removeChild(event.target.parentElement);
}
toDoForm.addEventListener("submit", toDoSubmit);
