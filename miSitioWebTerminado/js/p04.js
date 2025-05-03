// Generación de Objetos
const txtpeso = document.getElementById("peso");
const txtaltura = document.getElementById("altura");
const resultado = document.getElementById("resultado");
const btnCalcular = document.getElementById('btnCalcular');

// Funciones
function calcularIMC() {
  let peso = parseFloat(txtpeso.value);
  let altura = parseFloat(txtaltura.value);

  // Validación: Verifica que altura o peso tenga un valor asignado
  if (isNaN(peso) || isNaN(altura)) {
    resultado.innerHTML = "Por favor, ingrese peso y altura válidos.";
    return;
  }

  // Validación: Verifica que el valor sea positivo
  if (peso <= 0 || altura <= 0) {
    resultado.innerHTML = "Peso y altura deben ser mayores que cero.";
    return;
  }

  // Cálculo del IMC
  const imc = peso / (altura * altura);
  let nivel = "";

  // Determinación del nivel de IMC
  if (imc < 18.5) {
    nivel = "Bajo peso";
  } else if (imc < 24.9) {
    nivel = "Normal";
  } else if (imc < 29.9) {
    nivel = "Sobrepeso";
  } else {
    nivel = "Obesidad";
  }

  resultado.innerHTML = "Tu IMC es <strong>" + imc.toFixed(2) + "</strong>. Nivel: <strong>" + nivel + "</strong>";
}

// Evento
btnCalcular.addEventListener('click', calcularIMC);