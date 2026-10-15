function esPrimo(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function listarPrimosHasta(limite) {
  const primos = [];
  for (let i = 1; i <= limite; i++) {
    if (esPrimo(i)) {
      primos.push(i);
    }
  }
  return primos;
}

const limiteUsuario = Number(prompt("Ingresa el límite superior para buscar números primos:"));
console.log(`Números primos entre 1 y ${limiteUsuario}:`, listarPrimosHasta(limiteUsuario));