let parrafo = document.getElementById("parrafo")
let boton = document.getElementById("boton2")


boton.onmouseover = function () {

    boton.style.visibility = "hidden"
    
}

parrafo.onclick = function () {
    boton.style.visibility = "visible"
}