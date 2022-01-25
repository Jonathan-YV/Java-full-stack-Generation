/* 
    Iniciar npm con
    npm init -y
    npm install --save-dev jest
*/

const sumar = (numero1, numero2) => {
    return numero1 + numero2;
}

const restar = (numero1, numero2) => {
    return numero1 - numero2;
}

const multiplicar = (numero1, numero2) => {
    return numero1 * numero2;
}

const dividir = (numero1, numero2) => {
    return numero1 / numero2;
}

const mostrarResultado = (operacion, n1, n2, resultado) => {
    const respuesta = document.createElement('h3');
    respuesta.textContent = `La ${operacion} del ${n1} y ${n2} es ${resultado}`;
    document.body.appendChild(respuesta);
}

/* Cambiamos la forma de expotación y creamos un archivo llamado calculadora.test.js y un gitignore */
module.exports = {
    sumar, restar, multiplicar, dividir, mostrarResultado
};

/* export { 
    sumar,
    restar,
    multiplicar,
    dividir,
    mostrarResultado
} */