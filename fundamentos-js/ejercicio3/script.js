const persona = {
  nombre: "Mateo",
  edad: 20,
  esEstudiante: true,
  hobbies: ["programación", "lectura", "ajedrez"],
  direccion: {
  ciudad: "Granada",
  codigoPostal: "18001"
  },
  contacto: null
};

console.log("Objeto mostrando con console.log:");
console.log(persona);

console.log("Objeto mostrando con console.table:");
console.table(persona);