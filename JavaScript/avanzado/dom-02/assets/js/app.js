/* 
let $titulo = document.getElementById('titulo');
$titulo.textContent = 'Titulo desde JavaScript'
 */


let $titulo = document.querySelector('#titulo');
$titulo.textContent = 'Titulo JavaScript'

let $parrafo = document.querySelector('p');
console.log($parrafo)

let $parrafos = document.querySelectorAll('p');
console.log($parrafos[1].textContent)

let subtitulo = document.createElement('h3')
subtitulo.textContent = 'Subtitulo'

/* document.body.append(subtitulo) */
$titulo.insertAdjacentElement("afterend",subtitulo)
$titulo.remove();




let $contenido = document.querySelector('#contenido')
/* console.log($contenido.textContent = '<br>') */
/* console.log($contenido.innerHTML = '<br>')
console.log($contenido.outerHTML = 'Hola') */

let contenidoParrafo = document.createElement('p');
contenidoParrafo.textContent = 'Contenido de mi nuevo parrafo'

$contenido.appendChild(contenidoParrafo)