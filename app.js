const ch = document.querySelector(".ch_className");
const ch2 = document.querySelector("#ch_id");

ch2.style.color = "red";

function handleTitleClick() {
  alert("Click!");
}
ch.addEventListener("click", handleTitleClick);
