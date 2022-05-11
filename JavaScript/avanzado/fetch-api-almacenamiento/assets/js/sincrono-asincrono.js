/* Codigo sincrono */

let variableSincrona;
variableSincrona = 10*3;
console.log(variableSincrona);

/* Codigo asincrono */

let variableAsincrona;

setTimeout(()=>{
    variableAsincrona = 'Hola'
    console.log(variableAsincrona)
},2000)

tiempo = 20

let temporizador

function inicar(){
    temporizador = setInterval(() => {
        tiempo--
        console.log(tiempo);
        if(tiempo === 0){
            clearInterval(temporizador)
        }
    },1000)
}

function detener(){
    clearInterval(temporizador)
}

inicar()

setTimeout(detener,3000)