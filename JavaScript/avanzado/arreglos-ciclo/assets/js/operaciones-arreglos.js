let arr1 = [1,2,3,4,5,6,7,8,15,16,17,9,10,12,13,14];

/* arr1.forEach(function (ele){
    document.write(ele + '<br>')
}) */

/* arr1.forEach((ele,index) => {
    if (index != arr1.length - 1){
        document.write(ele + ',')  
    }
    else{
        document.write(ele)
    }
}) */

/* arr1.forEach((ele,index) => {
    if (index % 2 == 0){
        document.write(ele + ',')  
    }
}) */

/* arr1.forEach((ele,index) => {
    document.write(ele + ',')  
})

let arr2 = arr1.map((ele) => ele);
document.write('<br>' + arr2) */

let frutas = ['Mango', 'Uva', 'Piña', 'Mandarina', 'Aguacate']
let frutas2 = frutas.map(ele => ele)

document.write(`<br> ${frutas} <br>`);
document.write(`<br> ${frutas2} <br>`);


frutas.push('pera')

document.write(`<br> ${frutas} <br>`);
document.write(`<br> ${frutas2} <br>`);


/* let numPares = arr1.filter((num) => (num % 2 == true) ? true : false); */
let numPares = arr1.filter((num) => (num % 2));
document.write(`Tiene los siguientes numero pares: ${numPares} <br>`)



const letra = 'm'
let frutasFiltro = frutas.filter((fru) => fru.toLowerCase().includes(letra) )
document.write(`Las siguientes frutas contienen la letra ${letra}: ${frutasFiltro} <br>`)


let ordenado = arr1.sort((a,b) => a - b)
document.write(ordenado + '<br>')
document.write(ordenado.reverse()+ '<br>')


let frutaEncontrada = frutas.find((el) => el.toLowerCase().includes('ma'))
document.write(frutaEncontrada + '<br>')