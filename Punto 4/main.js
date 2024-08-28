/* 
4. Se necesita clasificar la etapa de una persona solo pidiéndole como dato su edad. 
(Si la edad es menor de 18 es adolente), (si la edad está en el rango de 18 a 28 es
adulto adolecente), (si la edad está entre 29 a 49 es adulto), (si la edad está 
entre 50 en adelante es adulto mayor). 
*/ 

    //Datos de entrada
    let edad = Number(prompt("Ingrese su edad"));

    //Datos de Salida
    if (edad < 18 ) {
        alert("Segun tu edad, Eres Adolescente"); 
    } else if (edad > 17 && edad < 29) {
        alert("Segun tu edad, Eres Adulto Adolescente"); 
    } else if (edad > 28 && edad < 50) {
        alert("Segun tu edad, Eres Adulto "); 
    } else{
        alert("Segun tu edad, Eres Adulto Mayor"); 
    } 

