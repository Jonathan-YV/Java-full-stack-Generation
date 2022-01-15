/* Operadores Aritméticos */
// + - / * % ()

let operacion = 3 * 5 + (10 - 5);
console.log(operacion);

let operacion2 = 3 - 5 / 2 * 4;
console.log(operacion2);

/* Operadores relacionales */
// <, >, >=, <=, ==, ===, !=, !==
// boolean true false

console.log(7 < 7); // no estamos incluyendo el número a comparar
console.log(7 >= 7); // incluyendo el número a comparar

console.log(7 == "7"); // compara el valor
console.log(7 === "7"); // compara el valor y el tipo de dato

console.log(7 != "7");
console.log(7 !== "7");

/* Incremento y decremento */
// +=, -=, *=, /=

let incremento = 5;
//incremento = incremento + 5;
incremento += 5; // incremento
console.log(incremento);

incremento -= 5;
// incremento = incremento - 5;
console.log(incremento);

incremento *= 5;
//incremento = incremento * 5;
console.log(incremento);

incremento /= 5;
//incremento = incremento / 5;
console.log(incremento);


/* Operador unitario */
// ++,--        Sumar uno, Restar uno

let sumar = 0;
console.log(sumar + ' linea 48');
sumar++;
console.log(sumar + ' linea 50')
sumar++;
console.log(sumar);
sumar--;
sumar--;
console.log(sumar);


for(let i=0; i<10; i++){
    continue
}

let num = 5;
console.log(++num)

for(let i = 0; i < 5; i++){
    console.log('Ciclo padre');
    for(let j = 0; j < 5; j++){ 
        console.log('Ciclo hijo');
    }
}
