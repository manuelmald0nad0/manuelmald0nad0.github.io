const frase = prompt("Ingresa una frase:");

if (frase && frase.trim() !== "") {
  const palabras = frase.trim().split(/\s+/);
  console.log(`La frase contiene ${palabras.length} palabra(s).`);
} else {
  console.log("No se ingresó ninguna frase.");
}