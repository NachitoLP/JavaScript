function producto() {

    let iva = x => x * 0.21;
    let precioMonitor = 80000;
    let precioMouse = 6550;
    let precioTeclado = 13000;
    let precioAuricular = 9500;

    let monitor = {nombre:"Monitor SMG", precio: `Precio con IVA agregado: $${precioMonitor + iva(precioMonitor)}`};
    let mouse = {nombre:"Mouse Logitech", precio: `Precio con IVA agregado: $${precioMouse + iva(precioMouse)}`};
    let teclado = {nombre:"Teclado Logitech", precio: `Precio con IVA agregado: $${precioTeclado + iva(precioTeclado)}`};
    let auricular = {nombre:"Auriculares Redragon", precio: `Precio con IVA agregado: $${precioAuricular + iva(precioAuricular)}`};

    alert("Ok, los productos son los siguientes:");
    alert(`${monitor.nombre}, ${monitor.precio}`); 
    alert(`${mouse.nombre}, ${mouse.precio}`);
    alert(`${teclado.nombre}, ${teclado.precio}`); 
    alert(`${auricular.nombre}, ${auricular.precio}`);
}

function vender() {
    let rta = prompt("¿Le interesa algún producto?").toLowerCase();
    if (rta === ""){
        alert("Lo sentimos, el valor ingresado no es correcto, vuelva a ingresar otro valor")
        vender();
    }
    else if (rta === "no"){
        alert("Ok, ten un buen día.")
    }
    else if (rta === "si"){
        alert("Lo sentimos, nuestro sistema de ventas se encuentra deshabilitado temporalmente. Vuelva a intentarlo en otro momento.")
    }
}

function ingreso(){
    for(let x = 1 ; x <=100 ; x++){
        let nombre = prompt("Ingrese su nombre");
        let edad = prompt("Ingrese su edad");
        if (edad === "" || nombre === ""){
            alert("Lo sentimos, el valor ingresado no es correcto, vuelva a ingresar otro valor")
            ingreso();
        }else if (edad < 18){
            let mensaje1 = `${nombre}, sos menor de edad, no podés seguir.`;
            alert(mensaje1);
        }else if (edad >= 18){
            let mensaje2 = `${nombre}, sos mayor de edad, podés seguir.`;
            alert(mensaje2);
            let confirmacion = prompt("¿Te interesa saber que productos ofrecemos?").toLowerCase();
            if (confirmacion === ""){
                alert("Lo sentimos, el valor ingresado no es correcto, vuelva a ingresar otro valor")
                ingreso();
            }
            else if (confirmacion === "no"){
                alert("Ok, ten un buen día.")
            }
            else if (confirmacion === "si"){
                producto();
                vender();
            }
        }
    }
}

ingreso();