/* function sumaPromedio(num=0){
    const numeros = []
    let suma = 0
    for(let i=0; i<num; i++){
        let val = parseInt(Math.random() * 50)
        numeros.push(val)
        suma = suma + val;
    }
    mostrar.innerHTML = (`Las numeros son: ${numeros} <br>La suma es: ${suma} <br>El promedio es: ${suma / numeros.length} <br>`)
} */

function sumaPromedioReduce(num){
    const numeros = [0]
    for(let i=0; i<num; i++){
        numeros[i] = (parseInt(Math.random() * 50))
    }
    const sum = numeros.reduce((acumulador, valor) => acumulador + valor, 0);
    mostrar.innerHTML = (`Las numeros son: ${numeros} <br>La suma es: ${sum} <br>El promedio es: ${sum / numeros.length} <br>`)
}

function mostrarPantalla(){
    const mostrar = document.getElementById('mostrar');
    const valor = document.getElementById('cantidad').value

    sumaPromedioReduce(valor)
}

/* sumaPromedioReduce(20) */