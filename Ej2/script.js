const fieldSet = document.querySelector("fieldset");
const IMG_BASE = "https://wahooart.com/Art.nsf/O/8XXRVZ/$File/Claude-Monet-Pathway-in-Monet-s-Garden-at-Giverny.jpg";


function agregarImg() {
    fieldSet.innerHTML += `
        <img src="${IMG_BASE}" alt="test">
    `;
}

function sacarImg() {
    fieldSet.innerHTML = `
        <legend>Imagenes</legend>
    `;
}