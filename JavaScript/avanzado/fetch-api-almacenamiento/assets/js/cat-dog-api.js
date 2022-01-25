let $btnPerro = document.querySelector('#btn-perro');
let $imagenPerro = document.querySelector('#imagenPerro')

let $descargarGato = document.querySelector('#descargarGato')
let $descargarPerro = document.querySelector('#descargarPerro')

$btnPerro.addEventListener("click",() =>{
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(resp => resp.json()).then(data => {
            console.log(data.message);
            $imagenPerro.src = data.message
            $imagenPerro.classList.remove('hide')
            $descargarPerro.classList.remove('hide')
            $descargarPerro.href = data.message

            /* let imagenGatito = document.createElement('img');
            imagenGatito.src = data[0].url;
            document.body.appendChild(imagenGatito); */
        })
})


let $btnGato = document.querySelector('#btn-gato');
let $imagenGato = document.querySelector('#imagenGato')

$btnGato.addEventListener("click",() =>{
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(resp => resp.json()).then(data => {
            console.log(data[0].url);
            $imagenGato.src = data[0].url
            $imagenGato.classList.remove('hide')
            $descargarGato.classList.remove('hide')
            $descargarGato.href = data[0].url
            /* let imagenGatito = document.createElement('img');
            imagenGatito.src = data[0].url;
            document.body.appendChild(imagenGatito); */
        })
})


