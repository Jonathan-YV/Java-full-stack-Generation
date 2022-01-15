
/* let cadena1 = 'Hola';
console.log(cadena1);

let cadena2 = new String('Adios')
console.log(cadena2)

console.log(cadena2.toLowerCase().includes('a')) */

const mostrar = document.getElementById('mostrar');

function invertirPalabra(){
    const cadena = document.getElementById('texto').value;
    mostrar.innerHTML = `Palabra original: ${cadena} <br> Palabra inversa: ${cadena.split('').reverse().join('')}`;
}
