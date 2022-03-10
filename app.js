const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const nameH1 = document.querySelector("#name");
function loginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  nameH1.innerText = `Hello ${username}`;
  loginForm.classList.add("hidden");
  nameH1.classList.toggle("hidden");
}

loginForm.addEventListener("submit", loginSubmit);
