/* 

Declara un array que vamos a llamar “calificaciones” con los 
siguientes valores: 10, 8, 9, 10, 9, 7
Obtén el promedio actual

Te das cuenta de que te faltó anotar una calificación
Anexa la nueva calificación (8) y obtén el promedio nuevamente

*/

function promedio(calif){
    let suma = 0;
    for(let i=0; i<calif.length; i++){
        suma = suma + calif[i]; // suma += calif[i]
    }  
    let promedioF = suma / calif.length;
    return promedioF;
}


const calificaciones = [10,8,9,10,9,7];
let promedioFinal = promedio(calificaciones);
console.log('El promedio final es: ',promedioFinal);

//Promedio con la calificacion faltante
calificaciones.push(8); //[10,8,9,10,9,7,8]
promedioFinal = promedio(calificaciones);
console.log('El promedio final es: ',promedioFinal);
