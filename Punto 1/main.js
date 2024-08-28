/*
1.Pide al usuario un número y determina si es par o impar y si es positivo o negativo.
*/

 //Datos de Entrada
let number = Number (prompt("Ingrese un numero"));

//Datos de Salida
if (number % 2 == 0) {
  if (number > 0) {
    document.write("El numero es par positivo");
  }else{
    document.write("El numero es par negativo");
  }

} else if (number % 2 != 0) {
   if (number > 0 ) {
    document.write("El numero es impar positivo");
   } else {
    document.write("El numero es impar negativo");
   }

} 
