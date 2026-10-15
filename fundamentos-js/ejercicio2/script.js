const numeros = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100) + 1);

console.log("Array completo con console.table:");
console.table(numeros);

// Filtrado de datos (por ejemplo, numeros entre 20 y 40)
const filtrados = numeros.filter(num => num >= 20 && num <= 40);

console.log("Valores filtrados (entre 20 y 40):");
console.table(filtrados);