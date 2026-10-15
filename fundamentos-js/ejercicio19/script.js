function calcularPromedio(array) {
  if (array.length === 0) return 0;
  const sumaTotal = array.reduce((acumulador, actual) => acumulador + actual, 0);
  return sumaTotal / array.length;
}

const notas = [8, 9, 7, 10, 6];
console.log("El promedio es:", calcularPromedio(notas)); 