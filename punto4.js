let elemento = document.getElementById("imagen")


const funcion = () => {

    elemento.src = "./imagenes/lo.jpg"

}


elemento.onmouseover = function name() {
    funcion ()
}

elemento.onmouseleave = function () {
    elemento.src = "./imagenes/li.jpg"
}
