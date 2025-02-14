const celdas = document.getElementsByClassName("celdas");
const reiniciar = document.getElementById('reiniciar');
const modoJugador = document.getElementById('modoJugador');
const modoComputadora = document.getElementById('modoComputadora');
const modoSeleccionado = document.getElementById('modoSeleccionado');

let turno = "X"; 
let pierde = false; 
let juegoModo = "";

modoJugador.addEventListener("click", function() {
    juegoModo = "multijugador";
    modoSeleccionado.textContent = "Jugador vs Jugador" ; // Muestra el modo seleccionado
    iniciarJuego();
});
modoComputadora.addEventListener("click", function() {
    juegoModo = "computadora";
    modoSeleccionado.textContent = "Jugador vs Computadora";  // Muestra el modo seleccionado
    iniciarJuego();
});
function iniciarJuego() {
    pierde = false;
    for (let index = 0; index < celdas.length; index++) {
        celdas[index].textContent = "";  
        celdas[index].addEventListener("click", function () {
            if (pierde || celdas[index].textContent !== "") return; // Se detiene si la celda está llena
            celdas[index].textContent = turno; 
            verificarGanador();  
  
        });
    }
}


