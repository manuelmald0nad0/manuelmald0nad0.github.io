function obtenerPares(array) {
  return array.filter(num => num % 2 === 0);
}

const valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Números pares:", obtenerPares(valores));