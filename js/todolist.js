const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";
let toDos = [];
function saveToDo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
function apendToDo(newTodoobj) {
  const li = document.createElement("li");
  li.id = newTodoobj.id;
  const span = document.createElement("span");
  span.innerText = newTodoobj.text;

  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", removeToDO);

  li.appendChild(span);
  li.appendChild(button);

  toDoList.appendChild(li);
}
function toDoSubmit(event) {
  event.preventDefault();
  const toDoobj = {
    text: toDoInput.value,
    id: Date.now(),
  };
  toDos.push(toDoobj);
  saveToDo();
  apendToDo(toDoobj);
  toDoInput.value = "";
}

function removeToDO(event) {
  li = event.target.parentElement;
  const id = li.id;
  toDos = toDos.filter((toDo) => String(toDo.id) !== li.id);
  toDoList.removeChild(event.target.parentElement);
  saveToDo();
}
toDoForm.addEventListener("submit", toDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(apendToDo);
}
