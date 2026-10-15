const entrada = prompt("Ingresa un número para ver si es par o impar:");
const numero = Number(entrada);

if (isNaN(numero)) {
  console.log("No ingresaste un número válido.");
} else if (numero % 2 === 0) {
  console.log('El número ${numero} es par.');
} else {
  console.log('El número ${numero} es impar.');
}