// Ejercicio 7: Matriz 5x5
// Declara una variable que contenga una matriz de 5x5 llena de puros
// números enteros y positivos. Luego, escribe un algoritmo para sumar todos
// los números en la matriz.

let matriz = [
  [2, 4, 6, 7, 8],
  [7, 9, 10, 14, 66],
  [9, 8, 12, 78, 100],
  [50, 66, 12, 35, 68],
  [9, 90, 120, 5, 7],
];

let suma = 0;

for (let fila = 0; fila < matriz.length; fila++) {
  for (let columna = 0; columna < matriz[fila].length; columna++) {
    valor = matriz[fila][columna];
    console.log(valor);
    suma += valor;
  }
}

console.log(suma);
