const lista = Array.from({ length: 100 }, () => Math.floor(Math.random() * 20) + 1);

const apariciones = {};

lista.forEach(num => {
  apariciones[num] = (apariciones[num] || 0) + 1;
});

console.log("Frecuencia de cada número que apareció al menos una vez:");
console.table(apariciones);
console.log(`Tipos de números únicos que han aparecido: ${Object.keys(apariciones).length}`);