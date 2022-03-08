const ch = document.querySelector(".ch_className");
const ch2 = document.querySelector("#ch_id");
const wifi = document.querySelector("#wifi_id");

function titleClick() {
  alert("Click!");
}
function mouseEnter() {
  ch2.innerText = "Hi";
  const cName = ch2.classList;
  // let newCName;
  const enterClass = "enter";
  // if (cName.contains(enterClass)) {
  //   cName.remove(enterClass);
  // } else {
  //   cName.add(enterClass);
  // } 주석처리 줄이 바로 아래의 토글함수로 교체 가능
  cName.toggle("enter");
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
