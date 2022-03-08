const ch = document.querySelector(".ch_className");
const ch2 = document.querySelector("#ch_id");
const wifi = document.querySelector("#wifi_id");

function titleClick() {
  alert("Click!");
}
function mouseEnter() {
  ch2.innerText = "Hi";
  const cName = ch2.className;
  let newCName;
  const enterClass = "enter";
  if (cName === "") {
    newCName = enterClass;
  } else {
    newCName = "";
  }
  ch2.className = newCName;
}
function mouseLeave() {
  ch2.innerText = "Bye";
}
function windowResize() {
  document.body.style.backgroundColor = "pink";
}
function windowCopy() {
  alert("Copy!");
}
function wifiOnline() {
  wifi.innerText = "OnLine !";
}
function wifiOffline() {
  wifi.innerText = "OFFLine !";
}
ch.addEventListener("click", titleClick);
ch.addEventListener("mouseenter", mouseEnter);
ch.addEventListener("mouseleave", mouseLeave);

window.addEventListener("resize", windowResize);
window.addEventListener("copy", windowCopy);
window.addEventListener("offline", wifiOffline);
window.addEventListener("online", wifiOnline);
