/*
2.	Pide al usuario dos números y determina cual es el número mayor y cual es el menor.
*/

//Datos de entrada
let num1 = Number(prompt("Ingrese el numero 1"));
let num2 = Number(prompt("Ingrese el numero 2"));

//Datos de Salida
if (num1 < num2) {
    document.write("El numero Mayor es " + num2 + "<br>" +
        "El numero Menor es " + num1
     )
}


