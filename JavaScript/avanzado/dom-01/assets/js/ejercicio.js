
let titulo = document.getElementById('titulo');

function cambiarNombre(){
    let nombre = prompt('Escribe tu nombre:');
    if (nombre != null){
        titulo.textContent = `Hola ${nombre}`;
    }
    else{
        titulo.textContent = `Hola anonimo`;
    }   
}
