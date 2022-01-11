/* 

Condicionales se utilizan para tomar decisiones dentro de nuestro programa

*/


/* 
let edad = parseInt(prompt('Ingresa tu edad: '));;

if(edad >= 18 && edad < 30){
    document.write('Eres un joven');
} else if (edad >= 30 && edad < 60){
    document.write('Eres un adulto');
}else if (edad >= 60){
    document.write('Eres un viejo ');
}else{
    document.write('Eres un niño ');
}
*/


let num1 = 10;
let num2 = 20;
let suma1 = num1 + num2;
document.write('<h1>'+ suma1 + '</h1>');

let num3 = 40;
let num4 = 20;
let suma2 = num3 + num4;
document.write('<h1>'+ suma2 + '</h1>');


function sumar(num1,num2){
    let suma2 = num1 + num2;
    document.write('<h1>'+ suma2 + '</h1>');
}


sumar(10,60);
