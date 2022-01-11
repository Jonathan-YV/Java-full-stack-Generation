
let fecha = new Date();
const año = fecha.getFullYear()
const mes = fecha.getMonth() + 1;
const dia = fecha.getDate();

const edad = document.getElementById('edad');

function calcularEdad(){
    const fechaIngreso = document.getElementById('fecha').value.split('-');
    console.log(fechaIngreso[1])
    if (parseInt(fechaIngreso[1]) <= mes && parseInt(fechaIngreso[2]) <= dia){
        const calcular = parseInt(año) - parseInt(fechaIngreso[0]);
        edad.textContent = 'Tu edad es: ' + calcular + ' años';
    }
    else{
        const calcular = parseInt(año) - parseInt(fechaIngreso[0]) - 1;
        edad.textContent = 'Tu edad es: ' + calcular + ' años';
    }
}

