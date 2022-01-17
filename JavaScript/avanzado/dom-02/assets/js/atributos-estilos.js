let $titulo = document.querySelector('#titulo');
let $texto = document.querySelector('.texto')

$texto.id = 'texto';


$texto.classList.add('text-center')
$texto.classList.toggle('bg-color')
$texto.classList.toggle('h3')
/* $texto.className =  */
/* $texto.className = 'h3' */



const body = document.querySelector('body')

function cambiarColor(){
    const color = document.getElementById('color').value
    console.log(color)
    body.style.backgroundColor = color
}


