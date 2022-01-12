

const sumar = (num1,num2) =>{
    return num1 + num2;
}

let numero1 = parseInt(prompt('Numero 1: '));
let numero2 = parseInt(prompt('Numero 2: '));
let resultado = sumar(numero1,numero2);

document.write(`La suma de ${numero1} y ${numero2} es ${resultado}`);