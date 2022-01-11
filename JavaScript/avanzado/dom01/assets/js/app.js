
const titulo = document.querySelector('#titulo');

console.log(titulo)

titulo.textContent = 'Ejercicio';

/* let parrafos = document.getElementsByTagName('p');
console.log(parrafos) */

/* parrafos[0].textContent = 'hola'; */

/* for (let i=0; i < parrafos.length; i++){
    parrafos[i].textContent = `Parrafo ${i + 1} modificado desde JavaScript`;
} */

/* titulo.innerHTML = 'Modificacion'; */
/* titulo.style.color = 'blue'; */


function obtenerDatos() {
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    console.log(email.value);
    console.log(password.value);
}



