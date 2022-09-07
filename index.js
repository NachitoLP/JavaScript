function producto() {

    let iva = x => x * 0.21;
    
    class Producto{
        constructor(id, nombre, precio){
            this.id = id;
            this.nombre = nombre;
            this.precioIva = iva(precio);
            
        }
    }
    
    const productos = [
        new Producto(1, "Monitor", 80000),
        new Producto(2, "Mouse", 6500),
        new Producto(3, "Teclado", 13000),
        new Producto(4, "Auriculares", 9500)
    ]

    productos.forEach(item => alert(`${item.nombre}, $${item.precioIva}`))
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
        alert("Lo sentimos, nuestro sistema de ventas se encuentra deshabilitado temporalmente. Vuelva a intentarlo en otro momento.");
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
                alert("Ok, los productos son los siguientes:");
                producto();
                vender();
            }
        }
    }
}

ingreso();