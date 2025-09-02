// ● Ejercicio 8: Rojo y Verde
// Para este ejercicio vamos a generar dos funciones:
// a) Una va a sumar los valores en la diagonal marcada en rojo.
// b) La otra va a marcar los valores de la diagonal marcada en verde.
// Ambas funciones deben devolver un resultado único. Rojo: 505
// Verde 505
// IMPORTANTE: Para hacer este ejercicio, tendrán que investigar sobre el
// método “push” en los Arrays. ¡Este método lo veremos en las próximas
// clases, pero si desean pueden investigarlo para resolver este desafío!

let matriz = [];

for (let i = 0; i < 10; i++) {
  matriz[i] = [];
  for (let j = 0; j < 10; j++) {
    matriz[i][j] = i * 10 + j + 1;
  }
}
console.log(matriz);

function sumarDiagonalRoja(matriz) {
  let suma = 0;
  for (let i = 0; i < matriz.length; i++) {
    suma += matriz[i][i];
  }
  return suma;
}

function marcarDiagonalVerde(matriz) {
  let valoresVerde = [];
  for (let i = 0; i < matriz.length; i++) {
    valoresVerde.push(matriz[i][matriz.length - 1 - i]);
  }
  return valoresVerde;
}

function sumarDiagonalVerde(matriz) {
  let suma = 0;
  for (let i = 0; i < matriz.length; i++) {
    suma += matriz[i][matriz.length - 1 - i];
  }
  return suma;
}

function obtenerResultados(matriz) {
  let resultadoRojo = sumarDiagonalRoja(matriz);
  let resultadoVerde = sumarDiagonalVerde(matriz);
  console.log("Resultado Rojo:", resultadoRojo);
  console.log("Resultado Verde:", resultadoVerde);
}

obtenerResultados(matriz);
