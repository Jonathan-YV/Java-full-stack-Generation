let $btnGato = document.querySelector('#btn-gato');
let $imagenGato = document.querySelector('#imagenGato')

$btnGato.addEventListener("click",() =>{
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(resp => resp.json()).then(data => {
            console.log(data[0].url);
            $imagenGato.src = data[0].url

            /* let imagenGatito = document.createElement('img');
            imagenGatito.src = data[0].url;
            document.body.appendChild(imagenGatito); */
        })
})