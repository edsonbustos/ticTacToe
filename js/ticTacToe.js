const celdas =document.getElementsByClassName("celdas")
const reiniciarBtn = document.getElementById('reiniciar');

let turno = "X"; 
let pierde = false;  

for (let index = 0; index < celdas.length; index++) {
    celdas[index].textContent = "";  
    celdas[index].addEventListener("click", function () {
        if (pierde || celdas[index].textContent !== "" || turno === "o") return;
        verificarGanador();  
        turno = "pierde";  
        if (!pierde) {
            computadora(); 
        }
    });
}