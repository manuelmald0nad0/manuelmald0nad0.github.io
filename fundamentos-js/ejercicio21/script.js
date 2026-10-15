function filtrarMayores(array, limite) {
  return array.filter(num => num > limite);
}

const coleccion = [5, 12, 8, 130, 44, 2, 73];
const resultado = filtrarMayores(coleccion, 10);

console.log("Números mayores que 10:", resultado); 