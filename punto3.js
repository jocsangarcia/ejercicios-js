const pedido = prompt ("que tipo de pizza desea: pizza personal, pizza mediana, pizza familiar ")

if (pedido === "pizza personal") {
  let sabor = prompt("que sabor desea? Hawaiana,Pollo y Champiñones,Carnes")
 if (sabor === "hawaiana") {
   let eleccion= prompt("desea sin piña o sin jamon")
   switch (eleccion) {
     case "sin piña":
       alert("su pizza personal hawuaina sin piña ya esta en camino a su casa")
       
       break;
      case"sin jamon":
      let consalami = prompt("desea con salami")
      switch (consalami) {
        case "con salami":
          alert("su pizza personal hawuaina sin jamon y con salami ya esta en camino a su casa")
          break;
      
        default:
          alert("su adicional no esta permitido")
          break;
      }
     default:
       alert("su adicional no esta permitido")
       break;
   }

   
 }else if (sabor === "pollo y champiñones") {
    
     let adicional1 = prompt("desea con queso o sin queso")
     switch (adicional1) {
       case "con queso":
          alert("su pizza personal de pollo con champiñones con adicional de queso ya esta en camino a su casa")
         break;
       case "sin queso":
         let adicional2= prompt("desaa con salsa o con borde de bocadillo")
         switch (adicional2) {
           case "con salsa":
            alert("su pizza persoanl de pollo con champiñones con adicional de salsa ya esta en camino a su casa")
             
             break;
           case "con borde de bocadillo":
            alert("su pizza persoanl de pollo con champiñones con adicional de borde de bocadillo ya esta en camino a su casa")

           default: alert("ingrese un adicional valido")
             break;
         }


       default:("ingrese un adicional valido")
         break;
     }
    
   
 }else if (sabor ==="carnes") {
    let adicionalsq = prompt("desea sin salami o con queso")
    switch (adicionalsq) {
      case "sin salami":
        let cabano = prompt("desea 1:con cabano o 2:sin cabano, ingrese la opcion en numero")
         switch (cabano) {
           case "1":
             alert("su pizza personal de carnes, sin slami y con cabano ya esta en camino a su casa ")
             
             break;
           case "2":
            alert("su pizza personal de carnes sin salami y sin cabano ya esta en camino a su casa ")

           default:
             alert("su adicional no es valido")
             break;
         }
     case "con queso":
      alert("su pizza personal de carnes con queso ya esta en camino a su casa ")
      default:
        alert("su adicional no es valido")
        break;
    }
 }else{
   alert("su sabor no existe")
 }
 

}else if (pedido === "pizza mediana") {
  let sabor = prompt("que sabor desea? Mexicana,Criolla")
  
  if (sabor === "mexicana") {

    let nachos = prompt("desea su pizza con nachos o sin nachos")
    switch (nachos) {
      case "con nachos":
        alert("su pizza personal mexicana con nachos ya esta en camino a su casa")
        
        break;
      case "sin nachos":
        let guacamole =prompt("desea extra guacamole si o no")

        switch (guacamole) {
          case "si":
        alert("su pizza personal mexicana sin nachos con extra guacamole ya esta en camino a su casa")
        
            
            break;
        
          default:
            alert("su adicional no esta permitido")
            break;
        }

      default:
        alert("sua adicional no esta permitido")
        break;
    }

    
  }else if (sabor ==="criolla") {
    let maiz =prompt("desea con maiz o sin maiz")
    switch (maiz) {
      case "con maiz":
        alert("su pedido de pizza criolla con maiz ya esta en camino a su casa")
        
        break;
      case "sin maiz":
        let adicionalesCriolla = prompt("desea 1: carne molida 2: con queso, ingrese el valor en numero")
        switch (adicionalesCriolla) {
          case "1":
            alert("su pedido de pizza criolla sin maiz, con carne molida ya esta en camino a su casa")
            
            break;
          case "2":
            alert("su pedido de pizza criolla sin maiz, con queso  ya esta en camino a su casa")
          default:
            alert ("su adicional no es valido")
            break;
        }
      default:
        alert("su adicional no es valido")
        break;
    }
    
  }else {
    alert ("su sabor no existe")
  }

}else if (pedido === "pizza familiar") {
  let sabor = prompt("que sabor desea? Vegetariana,Carne y Pollo")

  if (sabor === "vegetariana") {
    let adicionalQ = prompt("desea con queso o sin queso")
    switch (adicionalQ ) {
      case "con queso":
        alert("su pizza familiar con queso esta en camino para su casa")
        
        break;
      case "sin queso":
        alert("su pizza familiar sin queso esta en camino para su casa")
    
      default:
        alert("su adicional no es valido")
        break;
    }

  }else if (sabor === "carne y pollo") {

    let adicionalCarnep = prompt("desea adicional de salchicha o champiñones")
    switch (adicionalCarnep) {
      case "salchicha":
        alert("su pizza familiar de carne y pollo con salchicha esta en camino para su casa")
        break;
      case "champiñones":
        alert("su pizza familiar de carne y pollo con champiñones esta en camino para su casa")
        
      default:
        alert("su adicional no es valido")
        break;
    }
    
  } else{
    alert("su sabor  no existe")
  }
  
}else{
  alert("su tipo de pizza no se encuntra en el menu");
}
