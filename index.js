function ingreso() {
    let condicion = false;
    let formulario = document.getElementById("formulario");
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        let nombre = e.target.children;
        sessionStorage.setItem("nombre", JSON.stringify(nombre[0].value));
        let contenedor = document.getElementById("div_titulo");
        let h2 = document.createElement("h2");
        contenedor.appendChild(h2);
        h2.className = "titulo";
        if (condicion === false) {
            h2.innerHTML = `<center>Bienvenido, ${JSON.parse(sessionStorage.getItem("nombre"))}. Probá cambiar el color de la barra de navegación. ¡Es fácil!</center>`;
            condicion = true;
            formulario.className = "desaparece"
        }else if (condicion === true){
            h2.innerHTML = "";
        }
    })
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