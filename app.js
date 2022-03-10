const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const nameH1 = document.querySelector("#name");

const USERNAME_KEY = "username";
const HIDDEN_CLASS = "hidden";

function loginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDEN_CLASS);

  writeGreeting(username);
}
function writeGreeting(username) {
  nameH1.classList.remove(HIDDEN_CLASS);
  nameH1.innerText = `Hello ${username}`;
}

const savedName = localStorage.getItem(USERNAME_KEY);

if (savedName === null) {
  loginForm.classList.remove(HIDDEN_CLASS);
  loginForm.addEventListener("submit", loginSubmit);
} else {
  writeGreeting(savedName);
}
