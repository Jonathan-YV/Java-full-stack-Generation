const comida = ['Pozole','Pan','Tortilla']

console.log(comida)

comida.push('Tortas');
console.log(comida)

comida.unshift('Pancita')

comida.forEach(function(el){
    console.log(el)
})


const numero = [1,8,9,7]

numero.forEach(function(el){
    console.log(el + 1)
})


const arr = [];

function suma(num){
    let sumNum = num + 1;
    return arr.push(sumNum)
}

suma(5)
suma(8)
suma(10)
suma(51)

console.log(arr)