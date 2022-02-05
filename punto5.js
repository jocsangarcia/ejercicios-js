let boton = document.getElementById ("boton")

boton.onclick = function () {
    let mydiv = document.createElement("div")
    mydiv.style.height="100px"
    mydiv.style.width="100px"
    mydiv.style.border = "thick solid #0000FF"
    mydiv.style.backgroundColor= "red"
    mydiv.onclick = function () {
        if (mydiv.style.backgroundColor == "red") {
            
            mydiv.style.backgroundColor = "green"
        }else {
        mydiv.style.backgroundColor = "green"}
    }
    let contenedor = document.getElementById("caja")
    contenedor.appendChild(mydiv)
}

