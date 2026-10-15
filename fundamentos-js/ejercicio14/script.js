function esPalindromo(palabra) {

  const limpia = palabra.toLowerCase();
  const invertida = limpia.split("").reverse().join("");
  return limpia === invertida;
}

console.log("¿'reconocer' es palíndromo?:", esPalindromo("reconocer")); 
console.log("¿'javascript' es palíndromo?:", esPalindromo("javascript"));