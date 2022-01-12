/* 
    flujo: orden en que se ejecutan las declaraciones
*/

/* Si se pusiera primero el console.log(), habría un error
    porque la variable debe declararse desde antes, este es
    el flujo de control 
*/

let miVariable = 10;
console.log(miVariable);
/* 
    flujo: orden en que se ejecutan las declaraciones
*/

/* Si se pusiera primero el console.log(), habría un error
    porque la variable debe declararse desde antes, este es
    el flujo de control */
let miVariable = 10;
console.log(miVariable);

/* 
    Estructuras de control de flujo
*/

let edad = 18;
let tienesINE = true;

if (edad >= 18 && tienesINE) {
    console.log('Puedes entrar');
} else {
    console.log('No puedes entrar');
}

/* Operador ternario */
/* 
    (condición a evaluar) ? se ejecuta si es verdadero : se ejecuta si es falso;
*/

let edad1 = 19;

(edad >= 18)
    ? console.log("Mayor de edad")
    : console.log("Menor de edad");

let preguntaEdad = `Tengo ${edad1} años y soy ${(edad >= 18) ? "mayor" : "menor"} de edad`;

console.log(preguntaEdad);

/* 
    Lunes = 0
    Martes = 1
    Miércoles = 2
    Jueves = 3
    Viernes = 4
    Sábado = 5
    Domingo = 6
*/

let dia = 5

if (dia === 0) {
    console.log("Domingo");
}
else if (dia === 1) {
    console.log("Lunes");
}
else if (dia === 2) {
    console.log("Martes");
}
else if (dia === 3) {
    console.log("Miércoles");
}
else if (dia === 4) {
    console.log("Jueves");
}
else if (dia === 5) {
    console.log("Viernes");
}
else if (dia === 6) {
    console.log("Sábado");
}
else {
    console.log("Ese no es un día");
}

// switch - case

/* 
switch(variable a evaluar){
    case valor:
        - código a ejecutar -
    break;
    case valor:
        - código a ejecutar -
    break;
    default:
        - código a ejecutar si sale de las opciones -
    break;
}
*/

switch(dia) {
    case 0:
        console.log("Domingo");
        break;
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sábado");
        break;
    default:
        console.log("Ese es un día");
}
/* 
    Estructuras de control de flujo
*/

let edad = 18;
let tienesINE = true;

if (edad >= 18 && tienesINE) {
    console.log('Puedes entrar');
} else {
    console.log('No puedes entrar');
}

/* Operador ternario */
/* 
    (condición a evaluar) ? se ejecuta si es verdadero : se ejecuta si es falso;
*/

let edad1 = 19;

(edad >= 18)
    ? console.log("Mayor de edad")
    : console.log("Menor de edad");

let preguntaEdad = `Tengo ${edad1} años y soy ${(edad >= 18) ? "mayor" : "menor"} de edad`;

console.log(preguntaEdad);

/* 
    Lunes = 0
    Martes = 1
    Miércoles = 2
    Jueves = 3
    Viernes = 4
    Sábado = 5
    Domingo = 6
*/

let dia = 5

if (dia === 0) {
    console.log("Domingo");
}
else if (dia === 1) {
    console.log("Lunes");
}
else if (dia === 2) {
    console.log("Martes");
}
else if (dia === 3) {
    console.log("Miércoles");
}
else if (dia === 4) {
    console.log("Jueves");
}
else if (dia === 5) {
    console.log("Viernes");
}
else if (dia === 6) {
    console.log("Sábado");
}
else {
    console.log("Ese no es un día");
}

// switch - case

/* 
switch(variable a evaluar){
    case valor:
        - código a ejecutar -
    break;
    case valor:
        - código a ejecutar -
    break;
    default:
        - código a ejecutar si sale de las opciones -
    break;
}
*/

switch(dia) {
    case 0:
        console.log("Domingo");
        break;
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sábado");
        break;
    default:
        console.log("Ese es un día");
}



let cuponDescuento;
let descuento;

switch(cuponDescuento) {
    case "Bronce":
        descuento = 5;
        break;
    case "Plata":
        descuento = 10;
        break;
    case "Oro":
        descuento = 15;
        break;
    default:
        console.log("Cupón erróneo");
}

console.log(descuento);


