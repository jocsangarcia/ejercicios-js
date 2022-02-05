let  palabra = prompt("ingresa una des las siguientes palabras: casa, mesa, perro, gato."); 

switch (palabra) {
    case ("casa"):
       document.write("house");
        break;

    case ("mesa"):
      document.write("desk");
        break;

        case ("perro"):
            document.write("dog");
              break;
              
              case ("gato"):
            document.write("cat");
                  break;




    default:
        alert("no ingresaste ninguna de las palabras indicadas")
        break;
}