function ingreso() {
    alert("Bienvenido a mi sitio web!");
    let nombre = prompt("Ingrese su nombre.");
    alert(`¿Qué tal, ${nombre}?`);  
}

ingreso();

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

botonRojo();
botonAzul();
botonVerde();