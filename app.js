const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function loginSubmit(event) {
  event.preventDefault();
  const value = loginInput.value;
}

loginForm.addEventListener("submit", loginSubmit);
