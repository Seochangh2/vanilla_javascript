const ch = document.querySelector(".ch_className");
const ch2 = document.querySelector("#ch_id");

function handleTitleClick() {
  alert("Click!");
}
function handleMouseEnter() {
  ch2.innerText = "Hi";
  ch2.style.color = "blue";
}
function handleMouseLeave() {
  ch2.innerText = "Bye";
  ch2.style.color = "black";
}
ch.addEventListener("click", handleTitleClick);
ch.addEventListener("mouseenter", handleMouseEnter);
ch.addEventListener("mouseleave", handleMouseLeave);
