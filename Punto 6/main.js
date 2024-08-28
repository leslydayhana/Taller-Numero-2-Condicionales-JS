/*
6. Se pide ingresar 3 notas y calcular el promedio de un alumno, mostrar el nivel 
del alumnos según su promedio: 
menos 2,0 = Malo
*  menos 2,9 = Debe recuperar
* entre 3 – 3,9 = Regular.
* entre 4 – 4,4 = Bueno.
* entre 4,5 – 5 = Muy bueno.
 */


//Datos de entrada
let nota1 = Number (prompt("Ingrese la nota 1"));
let nota2 = Number (prompt("Ingrese la nota 2"));
let nota3 = Number (prompt("Ingrese la nota 3"));

//Solucion

let promedio = parseFloat (nota1 + nota2 + nota3 ) / 3;

//Datos de salida

if (promedio < 2.0 ) {
    alert(promedio + " El promedio del estudiante es Malo")
    
} else if (promedio < 2.9) {

    alert("El promedio es: " + promedio + " El Estudiante Debe recuperar")

} else if (promedio >2.9 && promedio <4) {

    alert(promedio + " El promedio del estudiante es Regular")
    
} else if (promedio > 3.9 && promedio <4.5) {
    
    alert(promedio + " El promedio del estudiante es Bueno")

} else {
    alert(promedio + " El promedio del estudiante es Muy Bueno")
}




