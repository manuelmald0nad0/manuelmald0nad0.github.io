JavaScript
function contarVocales(palabra) {
  const vocales = "aeiouAEIOUáéíóúÁÉÍÓÚ";
  let contador = 0;

  for (let i = 0; i < palabra.length; i++) {
    if (vocales.includes(palabra[i])) {
      contador++;
    }
  }

  return contador;
}

console.log("Número de vocales:", contarVocales("Murciélago"));