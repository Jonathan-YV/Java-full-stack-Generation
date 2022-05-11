const datos = [{
    id: 1,
    title: "Iron man",
},{
    id: 2,
    title: "Spiderman",
},{
    id: 3,
    title: "Avengers",
},]

const obtenerDatos = () =>{
   return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(datos);
        },1500)
   })
}

/* obtenerDatos().then((datos) =>{
    console.log(datos)
}).catch(err => {
    console.log(err);
}) */

/* 
async function obtenerAsyncAwait () {
    try{
        const datosObtenidos = await obtenerDatos();
        console.log(datosObtenidos)
    }catch(err){
        console.log(err)
    }
}

obtenerAsyncAwait()
 */






/* async function obtenerPokemon () {
    try{
        const pokemon = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
        console.log(pokemon)

        const pokemonC = await pokemon.json();
        console.log(pokemonC)

    }catch(error){
        console.log(error);
    }
}

obtenerPokemon() */