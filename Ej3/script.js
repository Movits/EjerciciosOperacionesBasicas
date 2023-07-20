const inputNombre = document.querySelector("#nombre");
const inputNum = document.querySelector("#numero");
const pResultado = document.querySelector("#resultado");

function hola() {
    let Nombre = inputNombre.value;
    let Numero = inputNum.value;

    pResultado.innerHTML = "Hola " + Nombre + ", su numero de telefono es: " + Numero;
}

function opcionSelecionada() {
    const Lista = document.querySelector("#lista").value;
    const div1 = document.querySelector("#contenidoOpcion1");
    const div2 = document.querySelector("#contenidoOpcion2");
    const div3 = document.querySelector("#contenidoOpcion3");
  
    div1.style.display = "none";
    div2.style.display = "none";
    div3.style.display = "none";
  
    if (Lista === "opcion1") {
      div1.style.display = "block";
    } else if (Lista === "opcion2") {
      div2.style.display = "block";
    } else if (Lista === "opcion3") {
      div3.style.display = "block";
    }
  }
  