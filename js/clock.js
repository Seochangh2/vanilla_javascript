const clock = document.querySelector("#clock");

function setClock() {
  const date = new Date();
  const hours = String(date.getHours());
  const minutes = String(date.getMinutes());
  clock.innerText = `${hours.padStart(2, "0")} : ${minutes.padStart(2, "0")}`;
}

setInterval(setClock(), 1000);
