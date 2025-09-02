// ● Ejercicio 1: While
// Crea un programa que solicite al usuario ingresar números continuamente
// hasta que el usuario ingrese un número negativo. Luego, imprime la suma
// de todos los números ingresados.


let suma = 0;

while (true) {
    let numero = parseInt(prompt("Ingrese un número"));
  if (numero < 0) {
    break;
  }
  suma = suma + numero;
}
console.log(suma);
