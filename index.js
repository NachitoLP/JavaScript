function ingreso() {
    alert("Bienvenido a mi sitio web!");
    let nombre = prompt("Ingrese su nombre.");
    if (nombre === "") {
        alert("Ese no es un nombre válido. Vuelva a ingresarlo.");
        ingreso();
        h2.innerHTML = "";
    }
    let contenedor = document.getElementById("div_titulo");
    let h2 = document.createElement("h2");
    h2.innerHTML = `<center>Bienvenido, ${nombre}. Probá cambiar el color de la barra de navegación. ¡Es fácil!</center>`;
    contenedor.appendChild(h2);
    h2.className = "titulo";
}

const botonRojo = () => {
    const respuesta = () => {
        nav.className = "rojo";
    }
    
    let nav = document.getElementById("header");
    let boton = document.getElementById("boton_rojo");
    boton.addEventListener("click", respuesta);
}

const botonAzul = () => {
    const respuesta = () => {
        nav.className = "azul";
    }
    
    let nav = document.getElementById("header");
    let boton = document.getElementById("boton_azul");
    boton.addEventListener("click", respuesta);
}

const botonVerde = () => {
    const respuesta = () => {
        nav.className = "verde";
    }
    
    let nav = document.getElementById("header");
    let boton = document.getElementById("boton_verde");
    boton.addEventListener("click", respuesta);
}

ingreso();
botonRojo();
botonAzul();
botonVerde();