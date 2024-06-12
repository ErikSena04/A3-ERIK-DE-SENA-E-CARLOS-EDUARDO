const horas = document.querySelector("#horas");
const minutos = document.querySelector("#minutos");
const segundos = document.querySelector("#segundos");

setInterval(() => {
  const data = new Date();
  const horasAgora = data.getHours();
  const minutosAgora = data.getMinutes();
  const segundosAgora = data.getSeconds();

  horas.innerHTML = horasAgora >= 10 ? horasAgora : `0${horasAgora}`;
  minutos.innerHTML = minutosAgora >= 10 ? minutosAgora : `0${minutosAgora}`;
  segundos.innerHTML =
    segundosAgora >= 10 ? segundosAgora : `0${segundosAgora}`;
}, 1000);
