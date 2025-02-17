const celdas = document.getElementsByClassName("celdas");
const reiniciar = document.getElementById('reiniciar');
const modoJugador = document.getElementById('modoJugador');
const modoComputadora = document.getElementById('modoComputadora');
const modoSeleccionado = document.getElementById('modoSeleccionado');

let turno = "X"; 
let pierde = false; 
let juegoModo = "";
// Modos
modoJugador.addEventListener("click", function() {
    juegoModo = "multijugador";
    modoSeleccionado.textContent = "Jugador vs Jugador" ; 
    iniciarJuego();
});
modoComputadora.addEventListener("click", function() {
    juegoModo = "computadora";
    modoSeleccionado.textContent = "Jugador vs Computadora"; 
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
            if (!pierde) {
                if (juegoModo === "multijugador") {
                    turno = (turno === "X") ? "O" : "X";  // Cambiar turno entre X y O
                } else if (juegoModo === "computadora") {
                    turno = "O";  // Cambiar a turno de la computadora
                    computadora(); // La computadora juega
                }
            }
        });
    }
}
// La computadora hace un movimiento aleatorio
function computadora() {
    let celdasVacias = [];
    for (let index = 0; index < celdas.length; index++) {
        if (celdas[index].textContent === "") {
            celdasVacias.push(index); // Almacena índices de celdas vacías
        }
    }
    if (celdasVacias.length > 0) {
        const celdaRandom = celdasVacias[Math.floor(Math.random() * celdasVacias.length)];
        celdas[celdaRandom].textContent = "O"; // La computadora juega con "O"
        verificarGanador();
        if (!pierde) {
            turno = "X";  // Volver al turno del jugador
        }
    }
}
// Busca un ganador
function verificarGanador() {
    const combinacionesGanadoras = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let combinacion of combinacionesGanadoras) {
        const [a, b, c] = combinacion;
        if (celdas[a].textContent && celdas[a].textContent === celdas[b].textContent && celdas[a].textContent === celdas[c].textContent) {
            pierde = true;
            alert(`${celdas[a].textContent} ¡Ganó!`);
            return;
        }
    }
    let empate = true;
    for (let index = 0; index < celdas.length; index++) {
        if (celdas[index].textContent === "") {
            empate = false;
            break;
        }
    }
    if (empate) {
        pierde = true;
        alert("¡Es un empate!");
    }
}
// Botón para reiniciar el juego.
reiniciar.addEventListener("click", function() {
    for (let index = 0; index < celdas.length; index++) {
        celdas[index].textContent = "";
    }
    pierde = false;
    turno = "X";
});

