
/* Declaración de variables */

/* let nombre;
let edad = 25;
let cantPersonas = 2;
let promedioEdad; */

/* Definición de variables */

/* nombre = "Joaquin";
promedioEdad = edad / cantPersonas; */

/* Ejemplo */
/* let numeroUno = 5;
let numeroDos = 3;

let suma = numeroUno + numeroDos;
console.log("El resultado de la suma es =", suma); */

/* Ejemplo 2 */
/* let saludo = "Hola";
let nombre = "Joaquin";
let mensaje = saludo + " " + nombre;

console.log(mensaje);
console.log("Hola Joaquin"); */

/* let nombre = prompt("Ingresa tu nombre:");
let edad = prompt("Ingresa tu edad");
let mensaje = "Bienvenido/a " + nombre + "!" + " Tienes " + edad + " años.";
alert(mensaje); */

/* let entrada = prompt("Ingrese una letra:");
let salida = entrada + " ingresada";
alert(salida); */

/* let numero1 = Number(prompt("Ingrese un número:"));
let numero2 = Number(prompt("Ingrese otro número:"));
let salida = numero1 + numero2;
alert(salida); */

/* let nombre = "Joaquin";

if (nombre == "Joaquin"){
    console.log("Tu nombre es", nombre);
} */

/* let nombre = prompt("Ingrese su nombre:").toLowerCase();

if(nombre === "joaquin"){
    alert("Hola, Joaquin!");
}else{
    alert("Hola, " + nombre, "!");
} */

/* let respuesta = prompt("¿Terminaste tu tarea?").toLowerCase();
if (respuesta === "si"){
    alert("Muy bien, podés salir a jugar.");
}else{
    alert("Entonces no podés salir a jugar.");
} */

/* let edad = parseInt(prompt("Ingrese su edad"));
if (edad < 15){
    alert("No puede ingresar a la fiesta.");
}else if (edad > 15 && edad < 18){
    alert("Puede ingresar con un adulto.");
}else{
    alert("Puede ingresar.");
} */ 

/* ALT + } COMILLAS AL REVÉS */
/* let nombre = prompt("Ingrese su nombre");

if(nombre != ""){
    alert(`Hola ${nombre}`); 
}else{
    alert("Nombre no reconocido");
} */
/* if ((nombre != "") && (nombre === "andres || nombre === "Andres)){}" */
/* 
if (nombre != "" && nombre === "andres" || nombre === "Andres"){ 
    alert("Hola, Andrés!");
}else{
    alert("No te conozco.")
} */

/* for (let x = 0;x < 5; x++){
    console.log("Hola");
} */

/* let numero = prompt("Ingrese un número;");

for(let x = 0; x <= 10; x++){
    let resultado = numero * x;
    let mensaje = `${numero} * ${x} = ${resultado}`;

    alert(mensaje);
} */

/* for(let x = 0; x <= 10; x++){
    if (x === 5){
        break;
    }
    console.log(x);
}

console.log("Terminado el ciclo");

for(let x = 0; x <= 10; x++){
    if (x === 5){
        continue;
    }
    console.log(x);
}

console.log("Terminado el ciclo"); */

let mensaje3 = "No hay más cupos en la página, intente nuevamente en unos minutos."

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

alert(mensaje3);
