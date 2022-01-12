
/* Buenos dias 6 - 11
Buenas tardes 12 - 18
Buenas noches 19 - 23
Dejame dormir 0 - 5
 */

const saludo = document.getElementById('saludo');
const imagenes = document.getElementById('image');

function saludar(){
    const hora = parseInt(prompt('Que hora es??'));

    if (hora >= 6 && hora <= 11){
       /*  saludo.textContent = 'Buenos días'; */
        imagenes.src = 'https://www.felicitacionespersonalizadas.com/images/personalizadas-modelo/buenosdias/buenosdias2645.jpg'
    }else if(hora >= 12 && hora <= 18){
        /* saludo.textContent = 'Buenos tardes'; */
        imagenes.src = 'https://imagenesgratis.top/wp-content/uploads/2019/06/Buenas-tardeskjnbunnamed-480x608.jpg'
    }else if(hora >= 19 && hora <=23){
        /* saludo.textContent = 'Buenos noches'; */
        imagenes.src = 'https://img.imagenescool.com/ic/buenas-noches/buenas-noches_177.jpg'
    }else if(hora >= 0 && hora <=5){
        /* saludo.textContent = 'Dejame dormir'; */
        imagenes.src = 'https://cdn.memegenerator.es/imagenes/memes/full/4/7/4075291.jpg'
    }else{
        saludo.textContent = 'Hora no valida'; 
        imagenes.src = ''
    }

}

