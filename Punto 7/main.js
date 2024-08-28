/*
Calcula la edad actual de una persona a partir de su fecha de nacimiento. Los datos a pedir son: día, mes y año de nacimiento.
*/

//Declaración 
let diaNacimiento = Number(prompt("Introduce el día de nacimiento (1-31):"), 12);
let mesNacimiento = Number(prompt("Introduce el mes de nacimiento (1-12):"), 12);
let anoNacimiento = Number(prompt("Introduce el año de nacimiento:"), 12);
let fechaNacimiento = new Date(anoNacimiento, mesNacimiento - 1, diaNacimiento);

//Objeto Date 
let fechaActual = new Date();

//Solucion
let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
let mesActual = fechaActual.getMonth();
let diaActual = fechaActual.getDate();

// Ajustar Edad
if (mesActual < fechaNacimiento.getMonth() || (mesActual == fechaNacimiento.getMonth() && diaActual < fechaNacimiento.getDate())) {
    edad--;
}

//Mostrar Edad
document.write("Tu edad actual es: "+edad);