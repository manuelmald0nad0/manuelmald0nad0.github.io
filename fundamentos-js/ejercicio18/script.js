function palabraMasLarga(frase) {
  const palabras = frase.trim().split(/\s+/);
  let masLarga = "";

  for (let i = 0; i < palabras.length; i++) {
    if (palabras[i].length > masLarga.length) {
      masLarga = palabras[i];
    }
  }

  return masLarga;
}

const texto = prompt("Ingresa una frase:");
if (texto) {
  console.log("La palabra más larga es:", palabraMasLarga(texto));
}