let $btnGato = document.querySelector('#btn-gato');
let $imagenGato = document.querySelector('#imagenGato')
const url = 'https://api.thecatapi.com/v1/images/search'

$btnGato.addEventListener("click",() =>{
    fetch(url).then(resp => resp.json()).then(data => {
        console.log(data);
        $imagenGato.src = data[0].url

    })
})