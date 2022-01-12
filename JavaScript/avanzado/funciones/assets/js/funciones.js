/* funciones
    Es un bloque de codigo reutilizable
    Pueden o no tener parametros (entradas)
    Pueden o no tener salidas
 */

function suma(num1){
    return num1 + num2;
}

function resta(num1){
    document.write(`La resta de ${num1} y ${num2} es ${num1 - num2} <br>`);
}

let numero1 = parseInt(prompt('Numero 1: '));
let numero2 = parseInt(prompt('Numero 2: '));

let resultado = suma(numero1,numero2);
resta(numero1,numero2);

document.write(`La suma de ${numero1} y ${numero2} es ${suma(numero1,numero2)}`);