const inputNombre = document.querySelector("#nombre");
const inputNum = document.querySelector("#numero");
const pResultado = document.querySelector("#resultado");


function hola() {
    let Nombre = inputNombre.value;
    let Numero = inputNum.value;

    pResultado.innerHTML = "Hola " + Nombre + ", su numero de telefono es: " + Numero;
}