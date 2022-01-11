
const roja = document.querySelector('.roja');
const rojo = document.getElementById('rojo')
const verde = document.querySelector('.verde');
const azul = document.querySelector('.azul');
const amarillo = document.querySelector('.amarillo');


const cajas = document.querySelectorAll('.caja');

console.log(roja);
console.log(rojo);
console.log(verde);
console.log(azul);
console.log(amarillo);
console.log(cajas)

rojo.addEventListener('click',()=>{
    rojo.classList.toggle('morado')
})

rojo.addEventListener('mouseover',()=>{
    rojo.classList.toggle('morado')
})

rojo.addEventListener('mouseout',()=>{
    rojo.classList.toggle('morado')
})




roja.style.margin = '50px';
verde.style.display = 'none';
azul.style.display = 'none';
amarillo.style.display = 'none';


function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

/* function ocultar(){

    for (let i=1; i<5 ; i++){
        if(i==1){
            roja.style.display = 'block';
            verde.style.display = 'none';
            azul.style.display = 'none';
            amarillo.style.display = 'none';
            console.log(1)
            sleep(1000)
        }
        if(i == 2){
            roja.style.display = 'none';
            verde.style.display = 'block';
            azul.style.display = 'none';
            amarillo.style.display = 'none';
            sleep(1000)
        }
        if(i == 3){
            roja.style.display = 'none';
            verde.style.display = 'none';
            azul.style.display = 'block';
            amarillo.style.display = 'none';
            sleep(1000)
        }
        if(i == 4){
            roja.style.display = 'none';
            verde.style.display = 'none';
            azul.style.display = 'none';
            amarillo.style.display = 'block';
            contador = 1
            sleep(1000)
        }
    }
    
    
}


setInterval(ocultar(),4000)
 */
/* while(true){

} */


let i = 0;
let name = ['https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/5937e90a5bafe882f5bc09e6/gatitos-cesta_0.jpg','https://www.hola.com/imagenes/estar-bien/20180925130054/consejos-para-cuidar-a-un-gatito-recien-nacido-cs/0-601-526/cuidardgatito-t.jpg']
let speedName = 5000;

window.onload = function carrousel() {
    document.getElementById("image").src = name[i];

    i++;

    if(i>=name.length){
        i=0;
    }

    setTimeout(carrousel, speedName);
}
