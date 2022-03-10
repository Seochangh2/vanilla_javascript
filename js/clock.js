const clock = document.querySelector("#clock");

function setClock() {
  const date = new Date();
  clock.innerText = `${date.getHours()} : ${date.getMinutes()}`;
}

setInterval(setClock(), 1000);
