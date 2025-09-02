// Ejercicio 5: Uso de Arrays y Condicionales
// Crea un programa que solicite al usuario ingresar 5 nombres y los
// almacene en un array. Luego, solicita al usuario ingresar un nombre y
// verifica si ese nombre se encuentra en el array. (Pueden desglosar en
// pasos el código si eso les facilita su desarrollo)

let nombres = [];

for (let i = 0; i < 5; i++) {
  let nombre = prompt("Ingrese el nombre");
  nombres[i] = nombre;
}
let buscado = prompt("Ingrese el nombre buscado");
for (let i = 0; i < 5; i++) {
  if (nombres[i] === buscado) {
    console.log(
      `El nombre ${buscado} se encuentra en el array, en la posición ${i}`
    );
  }
}
