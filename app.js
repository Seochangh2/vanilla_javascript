const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function loginBtnClick() {
  console.log(loginInput.value);
  console.log("click !");
}

loginButton.addEventListener("click", loginBtnClick);
