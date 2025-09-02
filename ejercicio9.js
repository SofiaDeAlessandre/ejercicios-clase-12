// Ejercicio 9: Última aparición de un modelo de auto
// Se está realizando el desarrollo de una aplicación para control de gastos.
// Cada día, el usuario ingresa sus gastos cotidianos.
// La idea es solo registrar el total de los gastos, al finalizar la jornada.
// Para simplificar, vamos a considerar que todos los meses tienen cuatro
// semanas.
// Los gastos estarán en una matriz de 4x7, cada fila representa una semana
// y cada columna un día. Es decir, fila 0, semana 1, fila 1, semana 2, etc.
// Columna 0, día 1, columna 1, día 2, etcétera.
// a) Lo que nos solicitan es dar el total de gastos en una semana.
// Recordemos que cada fila representa una semana, es decir, si nos
// indican semana 2 tenemos que sumar la fila 1 de la matriz. Recordar
// que las matrices comienzan siempre en posición 0.
// b) La aplicación también tendrá una parte de estadísticas, para esto nos
// solicitan dar el total de un día en particular, por ejemplo del día 3, acá
// también tengamos en cuenta lo que ocurre con las filas, ya que las
// columnas también comienzan en 0.
// c) Por último, es necesario tener el total de gastos realizados en el mes.
// ✔ Pregunta para pensar, ¿es lo mismo recorrer por filas o por columnas
// para resolver este último punto?
// d) Obtener cuál fue la semana que más gastos se realizaron. Indicar el
// día que más gastos se realizaron.
// ✔ Posibles matrices para comprobar los resultados.

let gastos = [
  [1567, 4567, 900, 1290, 3567, 6789, 3456],
  [6754, 6788, 986, 2355, 9876, 2134, 5643],
  [8765, 2456, 5432, 9864, 3456, 3234, 2355],
  [9987, 8990, 6778, 1123, 3224, 6788, 7865],
];

function totalSemana(matriz, semana) {
  return matriz[semana - 1].reduce((a, b) => a + b, 0);
}

console.log("Total semana 4:", totalSemana(gastos, 4));

console.log("Total semana 1:", totalSemana(gastos, 1));

function totalDia(matriz, dia) {
  let suma = 0;
  for (let i = 0; i < matriz.length; i++) {
    suma += matriz[i][dia - 1];
  }
  return suma;
}

console.log("Total día 3:", totalDia(gastos, 3));

console.log("Total dia 1:", totalDia(gastos, 1));

function totalMes(matriz) {
  let total = 0;
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      total += matriz[i][j];
    }
  }
  return total;
}

console.log("Total del mes:", totalMes(gastos));

function semanaMasGastos(matriz) {
  let max = 0;
  let semana = 0;
  for (let i = 0; i < matriz.length; i++) {
    let suma = matriz[i].reduce((a, b) => a + b, 0);
    if (suma > max) {
      max = suma;
      semana = i + 1;
    }
  }
  return { semana, max };
}

function diaMasGastos(matriz) {
  let max = 0;
  let dia = 0;
  for (let j = 0; j < matriz[0].length; j++) {
    let suma = 0;
    for (let i = 0; i < matriz.length; i++) {
      suma += matriz[i][j];
    }
    if (suma > max) {
      max = suma;
      dia = j + 1;
    }
  }
  return { dia, max };
}

console.log("Semana con más gastos:", semanaMasGastos(gastos));

console.log("Día con más gastos:", diaMasGastos(gastos));
