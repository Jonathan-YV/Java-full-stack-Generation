const url = "https://dog.ceo/api/breeds/list/all"
const lista = document.querySelector(".list-group")

fetch(url).then(resp => resp.json()).then(data => {
    console.log(data.message.terrier);

    data.message.terrier.forEach((perro) => {
        console.log(perro);
        const template = `<li class="list-group-item">${perro}</li>`
        
        lista.innerHTML += template

    })
            

            /* let imagenGatito = document.createElement('img');
            imagenGatito.src = data[0].url;
            document.body.appendChild(imagenGatito); */
})