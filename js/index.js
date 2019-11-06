let button = document.getElementById("icono");
let links = document.getElementById("enlaces");
let contador = 0;

button.addEventListener("click", function () {
  if (contador == 0) {
    links.className = ("enlaces dos")
    contador = 1;
  } else {
    links.classList.remove("dos")
    links.className = ("enlaces uno")
    contador = 0;
  }
})