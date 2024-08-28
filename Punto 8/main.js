/*
8. Calcula cuánto se debe pagar por costos de hospitalización en la clínica Me Muero 
*/


let edad = Number(prompt("Ingrese su edad"));
let dias = Number(prompt("Ingrese los dias de hospitalizacion"));
let costoDia= 0;
let recargo = 0;
let totalCostoDia = 0;


if (edad < 11) {
    if (dias < 2) {
      costoDia = 20000;
      totalCostoDia = dias * costoDia;
      let totalPago = totalCostoDia + recargo;

      document.write(
             "dias de hospitalizacion ------------  " + dias + "<br>" +
             "valor del dia ---------------------- $" + costoDia   + "<br>" + 
             "Valor del recargo 0% --------------- $ " + recargo    + "<br>" +
             "Total a pagar ---------------------- $ " +  totalPago    + "<br>" 

      );
    }
    if (dias > 1 && dias < 5) {
        costoDia = 30000;
      totalCostoDia = dias * costoDia;
      let totalPago = totalCostoDia + recargo;

      document.write(
             "dias de hospitalizacion ------------  " + dias + "<br>" +
             "Costo por dia ---------------------- $" + costoDia   + "<br>" + 
             "Valor del recargo 0%  -------------- $ " + recargo    + "<br>" +
             "Total a pagar ---------------------- $ " +  totalPago    + "<br>" 

      );
    }
    if (dias > 4 && dias < 8) {
        costoDia = 25000;
      totalCostoDia = dias * costoDia;
        recargo = totalCostoDia * 0.05;
      let totalPago = totalCostoDia + recargo;

      document.write(
             "dias de hospitalizacion ------------  " + dias + "<br>" +
             "costo por dia ---------------------- $" + costoDia   + "<br>" + 
             "Valor del recargo 5% --------------- $ " + recargo    + "<br>" +
             "Total a pagar ---------------------- $ " +  totalPago    + "<br>" 

      );


    } if (dias   > 7) {
          costoDia = 15000;
      totalCostoDia = dias * costoDia;
        recargo = totalCostoDia * 0.10;
        let totalPago = totalCostoDia + recargo;
  
        document.write(
               "dias de hospitalizacion ------------  " + dias + "<br>" +
               "Costo por dia ---------------------- $" + costoDia   + "<br>" + 
               "Valor del recargo 10% -------------- $ " + recargo    + "<br>" +
               "Total a pagar ---------------------- $ " +  totalPago    + "<br>" 
  
        );
    }
        
    
}else if (edad > 10 && edad < 18) {

        if (dias < 2) {
          costoDia = 20000;
          totalCostoDia = dias * totalCostoDia;
          let totalPago = totalCostoDia + recargo;
    
          document.write(
                 "dias de hospitalizacion ------------  " + dias + "<br>" +
                 "valor del dia ---------------------- $" + costoDia   + "<br>" + 
                 "Valor del recargo 0% --------------- $ " + recargo    + "<br>" +
                 "Total a pagar ---------------------- $ " +  totalPago    + "<br>" 
    
          );
        }
        if (dias > 1 && dias < 5) {
            costoDia = 30000;
          totalCostoDia = dias * costoDia;
          let totalPago = totalCostoDia + recargo;
    
          document.write(
                 "dias de hospitalizacion ------------  " + dias + "<br>" +
                 "Costo por dia ---------------------- $" + costoDia   + "<br>" + 
                 "Valor del recargo 0%  -------------- $ " + recargo    + "<br>" +
                 "Total a pagar ---------------------- $ " +  totalPago    + "<br>" 
    
          );
        }
        if (dias > 4 && dias < 8) {
            costoDia = 25000;
          totalCostoDia = dias * costoDia;
          let totalPago = totalCostoDia + recargo;
    
          document.write(
                 "dias de hospitalizacion ------------  " + dias + "<br>" +
                 "costo por dia ---------------------- $" + costoDia   + "<br>" + 
                 "Valor del recargo 0% --------------- $ " + recargo    + "<br>" +
                 "Total a pagar ---------------------- $ " +  totalPago    + "<br>" 
    
          );
    
    
        } if (dias   > 7) {
              costoDia = 15000;
          totalCostoDia = dias * costoDia;
            recargo = totalCostoDia * 0.10;
            let totalPago = totalCostoDia + recargo;
      
            document.write(
                   "dias de hospitalizacion ------------  " + dias + "<br>" +
                   "Costo por dia ---------------------- $" + costoDia   + "<br>" + 
                   "Valor del recargo 10% -------------- $ " + recargo    + "<br>" +
                   "Total a pagar ---------------------- $ " +  totalPago    + "<br>" 
      
            );
        }
    
} else if (edad > 17 && edad < 50) {

    if (dias < 2) {
      costoDia = 20000;
      totalCostoDia = dias * costoDia;
      let totalPago = totalCostoDia + recargo;

      document.write(
             "dias de hospitalizacion ------------  " + dias + "<br>" +
             "valor del dia ---------------------- $" + costoDia   + "<br>" + 
             "Valor del recargo 0% --------------- $ " + recargo    + "<br>" +
             "Total a pagar ---------------------- $ " +  totalPago    + "<br>" 

      );
    }
    if (dias > 1 && dias < 5) {
        costoDia = 30000;
      totalCostoDia = dias * costoDia;
      let totalPago = totalCostoDia + recargo;

      document.write(
             "dias de hospitalizacion ------------  " + dias + "<br>" +
             "Costo por dia ---------------------- $" + costoDia   + "<br>" + 
             "Valor del recargo 0%  -------------- $ " + recargo    + "<br>" +
             "Total a pagar ---------------------- $ " +  totalPago    + "<br>" 

      );
    }
    if (dias > 4 && dias < 8) {
        costoDia = 25000;
      totalCostoDia = dias * costoDia;
      let totalPago = totalCostoDia + recargo;

      document.write(
             "dias de hospitalizacion ------------  " + dias + "<br>" +
             "costo por dia ---------------------- $" + costoDia   + "<br>" + 
             "Valor del recargo 0% --------------- $ " + recargo    + "<br>" +
             "Total a pagar ---------------------- $ " +  totalPago    + "<br>" 

      );


    } if (dias   > 7) {
          costoDia = 15000;
      totalCostoDia = dias * costoDia;
        recargo = totalCostoDia * 0.15;
        let totalPago = totalCostoDia + recargo;
  
        document.write(
               "dias de hospitalizacion ------------  " + dias + "<br>" +
               "Costo por dia ---------------------- $" + costoDia   + "<br>" + 
               "Valor del recargo 15% -------------- $ " + recargo    + "<br>" +
               "Total a pagar ---------------------- $ " +  totalPago    + "<br>" 
  
        );
    }

} else {

    if (dias < 2) {
      costoDia = 20000;
      totalCostoDia = dias * costoDia;
      let totalPago = totalCostoDia + recargo;

      document.write(
             "dias de hospitalizacion ------------  " + dias + "<br>" +
             "valor del dia ---------------------- $" + costoDia   + "<br>" + 
             "Valor del recargo 0% --------------- $ " + recargo    + "<br>" +
             "Total a pagar ---------------------- $ " +  totalPago    + "<br>" 

      );
    }
    if (dias > 1 && dias < 5) {
        costoDia = 30000;
      totalCostoDia = dias * costoDia;
      let totalPago = totalCostoDia + recargo;

      document.write(
             "dias de hospitalizacion ------------  " + dias + "<br>" +
             "Costo por dia ---------------------- $" + costoDia   + "<br>" + 
             "Valor del recargo 0%  -------------- $ " + recargo    + "<br>" +
             "Total a pagar ---------------------- $ " +  totalPago    + "<br>" 

      );
    }
    if (dias > 4 && dias < 8) {
        costoDia = 25000;
      totalCostoDia = dias * costoDia;
      recargo = totalCostoDia * 0.15;
      let totalPago = totalCostoDia + recargo;

      document.write(
             "dias de hospitalizacion ------------  " + dias + "<br>" +
             "costo por dia ---------------------- $" + costoDia   + "<br>" + 
             "Valor del recargo 15% --------------- $ " + recargo    + "<br>" +
             "Total a pagar ---------------------- $ " +  totalPago    + "<br>" 

      );


    } if (dias > 7) {
          costoDia = 15000;
      totalCostoDia = dias * costoDia;
        recargo = totalCostoDia * 0.20;
        let totalPago = totalCostoDia + recargo;
  
        document.write(
               "dias de hospitalizacion ------------  " + dias + "<br>" +
               "Costo por dia ---------------------- $" + costoDia   + "<br>" + 
               "Valor del recargo 20% -------------- $ " + recargo    + "<br>" +
               "Total a pagar ---------------------- $ " +  totalPago    + "<br>" 
  
        );
    }

}