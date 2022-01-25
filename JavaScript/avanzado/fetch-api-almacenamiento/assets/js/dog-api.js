let $btnPerro = document.querySelector('#btn-perro');
let $imagenPerro = document.querySelector('#imagenPerro')

$btnPerro.addEventListener("click",() =>{
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(resp => resp.json()).then(data => {
            console.log(data.message);
            $imagenPerro.src = data.message

            /* let imagenGatito = document.createElement('img');
            imagenGatito.src = data[0].url;
            document.body.appendChild(imagenGatito); */
        })
})