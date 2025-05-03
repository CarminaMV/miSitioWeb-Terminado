//PASO 1
const parrafo = document.getElementById('parrafo');
const btnMay = document.getElementById('btnMay');
const btnMin = document.getElementById('btnMin');
const txtTexto = document.getElementById('txtTexto');
const btnAgregar = document.getElementById('btnAgregar');

var col = parrafo.style.color;
var tm = parrafo.style.fontSize;
var cf = parrafo.style.background;

//PASO 2

function cambiar(){
    parrafo.style.color = 'red';
    parrafo.style.fontSize = '20px';
    parrafo.style.background = 'yellow';
}

function normal(){
    parrafo.style.color = col;
    parrafo.style.fontSize = tm;
    parrafo.style.background = cf;
}

function mayuscula(){
    parrafo.textContent = parrafo.textContent.toUpperCase();
}

function minuscula(){
    parrafo.textContent = parrafo.textContent.toLowerCase();
}

function agregar(){
    let txt =txtTexto.value;
    parrafo.innerText = parrafo.innerText + txt;
}

//PASO 3

parrafo.addEventListener('mouseover', cambiar);
parrafo.addEventListener('mouseout', normal);
parrafo.addEventListener('click', mayuscula);
btnAgregar.addEventListener('click', agregar);

btnMay.addEventListener('click', mayuscula);
btnMin.addEventListener('click', minuscula);
