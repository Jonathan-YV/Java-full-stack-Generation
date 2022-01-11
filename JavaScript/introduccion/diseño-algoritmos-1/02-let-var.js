/* 
Variable var se utilizaba anteriormente, son variables globales.
Variable let es una variable de contexto, solo vive en un bloque de codigo

*/

var numero = 40;
console.log(numero);

if(true){
    var numero = 50;
    console.log(numero);

}

console.log(numero);



var texto = 'Bootcamp Java';
console.log(texto);

if(true){
    let texto = 'Cohorte 0';
    console.log(texto);

    let numeroFav = 7;
}

console.log(numeroFav)
console.log(texto);