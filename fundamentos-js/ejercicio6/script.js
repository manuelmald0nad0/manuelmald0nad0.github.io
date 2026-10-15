function verificarParImpar() {
  const input = document.getElementById("numeroInput");
  const resultado = document.getElementById("resultado");
  const num = Number(input.value);

  if (input.value === "" || isNaN(num)) {
    resultado.textContent = "Por favor, ingresa un número válido.";
    return;
  }

  if (num % 2 === 0) {
    resultado.textContent = `El número ${num} es PAR.`;
  } else {
    resultado.textContent = `El número ${num} es IMPAR.`;
  }
}