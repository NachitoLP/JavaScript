for(let x = 0; x < 100; x++){
    let nombre = prompt("Ingrese un nombre");
    let edad = prompt("Ingrese su edad");
    if (edad === "" || nombre === ""){
        alert("Lo sentimos, el valor ingresado no es correcto, vuelva a ingresar otro valor")
        nombre = prompt("Ingrese un nombre");
        edad = prompt("Ingrese su edad");
    }else if (edad < 18){
        let mensaje1 = `${nombre}, sos menor de edad, no podés seguir.`;
        alert(mensaje1);
    }else if (edad >= 18){
        let mensaje2 = `${nombre}, sos mayor de edad, podés seguir.`;
        alert(mensaje2);
        let numero = prompt("Ingrese un número;");

        for(let x = 0; x <= 10; x++){
            let resultado = numero * x;
            let mensaje = `${numero} * ${x} = ${resultado}`;
            alert(mensaje);
        }
    }
}

let mensaje3 = "No hay más cupos en la página, intente nuevamente en unos minutos."
alert(mensaje3);
