const fieldSet = document.querySelector("fieldset");
const IMG_BASE = "https://wahooart.com/Art.nsf/O/8XXRVZ/$File/Claude-Monet-Pathway-in-Monet-s-Garden-at-Giverny.jpg";
const MAX_IMGS = 3;

let contImgs = 0;

function agregarImg() {
    
    if (contImgs <= MAX_IMGS - 1) {
        fieldSet.innerHTML += `
        <img src="${IMG_BASE}" alt="test">
    `;

    contImgs = contImgs + 1;

    }
}

function sacarImg() {
    fieldSet.innerHTML = `
        <legend>Imagenes</legend>
    `;

    contImgs = 0;

}