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

function carrito() {
    let contenedor = document.getElementById("carrito");
    let carrito = [];
    let carritoStorage = JSON.parse(localStorage.getItem("carrito"));
    
    const productos = [
        {id: 1, nombre: "camisa", precio: "$5500"},
        {id: 2, nombre: "medias", precio: "$1000"},
        {id: 3, nombre: "zapatillas", precio: "$8000"},
        {id: 4, nombre: "gorra", precio: "$3000"},
        {id: 5, nombre: "guantes", precio: "$1200"},
        {id: 6, nombre: "pantalón", precio: "$9000"},
        {id: 7, nombre: "sabana", precio: "$4500"},
        {id: 8, nombre: "almohada", precio: "$2500"},
        {id: 9, nombre: "frazada", precio: "$4500"},
        {id: 10, nombre: "bufanda", precio: "$2260"},
        {id: 11, nombre: "botines", precio: "$13500"},
        {id: 12, nombre: "colchon", precio: "$47000"},
        {id: 13, nombre: "gorro", precio: "$3300"},
        {id: 14, nombre: "lona", precio: "$7800"},
        {id: 15, nombre: "alfombra", precio: "$8900"},
        {id: 16, nombre: "cortina", precio: "$11000"},
        
    ]
    localStorage.setItem("carrito", JSON.stringify(productos));

    if(carritoStorage){
        carrito = carritoStorage;
    }

    carrito.forEach(producto => {
        let div = document.createElement("div");
        div.innerHTML = `
            <h3>ID: ${producto.id}</h3>
            <p>Nombre: ${producto.nombre}</p>
            <p>Precio: ${producto.precio}</p>
        `;
        contenedor.append(div);
    });

    function busqueda() {
        let contenedorBusqueda = document.getElementById("formulario_busqueda");
        let contenedorCarrito = document.getElementById("contenedor_carrito");
        let busqueda = document.getElementById("input_busqueda");
        let condicion = false;
        contenedorBusqueda.addEventListener("submit", (e) => {
            e.preventDefault();
            condicion = true;
            if(condicion === true){
                contenedor.className = "section_desaparece";
            }

            productoBuscado = busqueda.value.toLowerCase();
            let producto = productos.find(producto => producto.nombre === productoBuscado);
            if (producto.nombre === productoBuscado){
                contenedorCarrito.innerHTML = "";
                let div2 = document.createElement("div");
                div2.innerHTML = `
                    <h3>ID: ${producto.id}</h3>
                    <p>Nombre: ${producto.nombre}</p>
                    <p>Precio: ${producto.precio}</p>
                `;
                contenedorCarrito.append(div2);
                div2.className = "resultado_busqueda";
            }
        })
    } 
    busqueda();
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
carrito();
botonRojo();
botonAzul();
botonVerde();