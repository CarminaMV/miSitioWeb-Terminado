//PASO 1
const opciones = document.getElementById('opciones');
const operador = document.getElementById('lblope');
const btnNum1 = document.getElementById('btnNum1');
const btnNum2 = document.getElementById('btnNum2');
const resultado = document.getElementById('resultado');
const btnOpe = document.getElementById('btnOpe');

//funciones

function cambiarOperador(){
    let opcion = opciones.value;

    switch(Number(opcion)){
        case 1: lblOperador.textContent = "+"; break
        case 2: lblOperador.textContent = "-"; break
        case 3: lblOperador.textContent = "*"; break
        case 4: lblOperador.textContent = "/"; break
    }
}

function realizarOperacion(){
    let num1 = Number(txtNum1.value)
    let num2 = Number(txtNum2.value)
    let res = 0;
    //pendiente validacion
    let opcion = opciones.value;

    switch(Number(opcion)){
        case 1: res = num1 + num2 ; break
        case 1: res = num1 - num2 ; break
        case 1: res = num1 * num2 ; break
        case 1: res = num1 / num2 ; break
    }
    resultado.textContent = res;
}

//eventos

opciones.addEventListener('change', cambiarOperador)
btnOpe.addEventListener('click', realizarOperacion)