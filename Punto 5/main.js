/* 
5. Realice una factura de venta, ingrese el valor de 3 productos y calcule lo siguiente:
si paga en efectivo paga el valor total.
si paga con cupón realice un 3% de descuento
si paga a crédito aumente el 5% al total 
*/

//Datos de entrada
let prod1 = Number(prompt("Ingrese el valor del producto 1"));
let prod2 = Number(prompt("Ingrese el valor del producto 2"));
let prod3 = Number(prompt("Ingrese el valor del producto 3"));

//Datos de Salida
let total = prod1 + prod2 + prod3;
let cupon = total - (total* 0.03);
let credito = total + (total * 0.05); 
let metodoPago = prompt(" Elija un metodo de pago: 1.-Efectivo  2.-Cupon  3.-Credito");


switch (metodoPago) {
    case "1":
        document.write("Valor producto 1: " + prod1 + "<br>" +
                       "Valor producto 2: " + prod2 + "<br>" +
                       "Valor producto 3: " + prod3 + "<br>" +
                       "Valor total a pagar: " + total);
        break;

    case "2":
        document.write(
                       "Valor producto 1: " + prod1 + "<br>" +
                       "Valor producto 2: " + prod2 + "<br>" +
                       "Valor producto 3: " + prod3 + "<br>" +
                       "Descuento en cupon del 3%"  + "<br>" +
                       "Valor total a pagar: " + cupon);
    
        break;

    case "3":
        document.write("Valor producto 1: " + prod1 + "<br>" +
                       "Valor producto 2: " + prod2 + "<br>" +
                       "Valor producto 3: " + prod3 + "<br>" +
                       "interes de Credito por el 5% "+ "<br>" + 
                       "Valor total a pagar: " + credito);
        break;
        

    default:
        document.write("Ingrese una opcion valida");
        break;
}
 