const pContador = document.querySelector("#contador");
let contador = 0;

function aumentarContador() {
    contador = contador + 1;
    pContador.innerHTML = contador;
}

function reiniciar() {
    contador = 0;
    pContador.innerHTML = contador;
}

function diminuirContador() {
    if (contador >= 1) {
        contador = contador - 1;
        pContador.innerHTML = contador;
    }
    
}