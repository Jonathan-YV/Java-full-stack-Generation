/* Coleccion de elementos

Tienen metodos y funciones que se nos permiten ordenar o manipular los elementos almacenados

*/

const arreglo1 = ['Nombre', 27, true, ['Datos', 87]];
//console.log(arreglo1);

const arreglo2 = Array.of(22, 'Hola', true);
//console.log(arreglo2);

const arreglo3 = new Array(51, false, 'Jonathan');
//console.log(arreglo3);

const frutas = ['manzana', 'naranja', 'uvas', 'sandias', [1,2,3,4,5]];

//console.log(frutas[1])
//console.log(frutas[3])
//console.log(frutas[4][4])



//
/* Metodos

    length      Longitud del arreglo 
    push        Agregar un elementos al final del arreglo
    pop         Elimina el ultimo valor del arreglo
    unshift     Agrega un elemento al inicio
    shift       Elimina el primer valor 
*/

const letras = ['A', 'B', 'C', 'D',[1,2,3]];
console.log(letras[4].length);

letras.push('E');
console.log(letras);

letras.pop();
console.log(letras);

letras.unshift(1);
console.log(letras)

letras.shift()
console.log(letras)

