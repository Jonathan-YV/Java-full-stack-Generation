url = "https://api.jikan.moe/v4/top/anime"

const topAnime = document.querySelector("#topAnime")
const buscar = document.querySelector("input")
const boton = document.querySelector("button")

console.log(buscar);

fetch(url).then((resp) => resp.json())
.then((data) => {
    console.log(data.data[0])

    data.data.forEach((anime)=>{
        /* console.log(anime.images.jpg.image_url) */
        const template = `<div class="col mb-4">
                            <div class="card">
                            <img src="${anime.images.jpg.image_url}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${anime.title}</h5>
                                <p class="card-text">${anime.synopsis.slice(0,100) + "..."}</p>
                            </div>
                            </div>
                        </div>`
        
        topAnime.innerHTML += template
        
    })

    
})

boton.addEventListener("click",()=>{
    console.log("#")
    topAnime.innerHTML = ""

    urlS = `https://api.jikan.moe/v3/search/anime?q=${buscar.value}&order_by=title`
    console.log(urlS);
    fetch(urlS).then((resp) => resp.json())
    .then((data) => {
        console.log(data.results)

        data.results.forEach((anime)=>{
           
            const template = `<div class="col mb-4">
                                <div class="card">
                                <img src="${anime.image_url}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${anime.title}</h5>
                                    <p class="card-text">${anime.synopsis.slice(0,100) + "..."}</p>
                                </div>
                                </div>
                            </div>`
            
            topAnime.innerHTML += template
            
        })

        
    })

})