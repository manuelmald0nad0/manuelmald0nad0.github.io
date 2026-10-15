function encontrarMaximo(array) {
  return Math.max(...array);
}

const misNumeros = [15, 82, 3, 99, 41, 12];
console.log("Número más grande:", encontrarMaximo(misNumeros));