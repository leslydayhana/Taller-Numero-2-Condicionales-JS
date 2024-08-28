/*3.	Pide al usuario que digite un numero del 1 al 7 y Realiza el código correspondiente para saber 
cuál es el dia de la semana correspondiente al número digitado;
*/

//Datos de entrada
let num1 = Number(prompt("Ingrese un numero del 1 al 7"));

//Solucion
switch (num1) {
    case 1:
    alert("Seleccionaste el dia Lunes");
         break;

    case 2:
    alert("Seleccionaste el dia Martes");
         break;

    case 3:
    alert("Seleccionaste el dia Miercoles");
         break;

    case 4:
    alert("Seleccionaste el dia Jueves");
         break;

    case 5: 
    alert("Seleccionaste el dia Viernes");
         break;

    case 6: 
    alert("Seleccionaste el dia Sabado");
         break;

    case 7:
    alert("Seleccionaste el dia Domingo");
         break;

    default:
        alert("Ingrese un numero valido");
        break;
} 