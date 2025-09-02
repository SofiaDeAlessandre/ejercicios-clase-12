// Ejercicio 2: Do While
// Escribe un programa que solicite al usuario ingresar una contraseña. Si la
// contraseña es incorrecta, debe volver a pedirla hasta que el usuario ingrese
// la correcta. La contraseña correcta es "1234".

let contrasenia = "";

do {
  contrasenia = prompt("Ingrese una contraseña");
  if (contrasenia != "1234") {
    console.log("Contraseña incorrecta");
  }
} while (contrasenia !== "1234"); //Mientras esto sea verdadero, hace el do
{
  console.log("La contraseña es correcta"); 
}
