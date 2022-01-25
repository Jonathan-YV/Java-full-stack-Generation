/* 

Crear una clase carro, el carro va a tener los atributos: marca, color, modelo, velocidad y NumeroPuertas.
Debe tener los métodos: acelerar(), frenar(), reversa().

Debe tener un método llamado toString() que muestre los datos del auto y la velocidad actual.

Cáda vez que se use el método acelerar, se aumentará uno en velocidad, cada vez que se use el método reversa se restará 1.
(la velocidad puede ser negativa). Al usar el método frenar, se fijará la velocidad en 0.

*/


class Carro{
    constructor(marca,color,modelo,velocidadInicial,numeroPuertas){
        this.marca = marca;
        this.color = color;
        this.modelo = modelo;
        this.velocidad = velocidadInicial;
        this.numeroPuertas = numeroPuertas;
    }
    acelerar(){
        this.velocidad += 1
    }

    frenar(){
        this.velocidad = 0
    }

    reversa(){
        this.velocidad -= 1
    }

    get toString(){
        const mensaje = `Marca: ${this.marca},Modelo: ${this.modelo}, Color: ${this.color} , Velocidad: ${this.velocidad} <br>`
        return mensaje;
    }

}


const miCarro = new Carro('Nissan', 'Negro', 'Sentra' , 0, 4)
console.log(miCarro)
let mensaje = miCarro.toString
document.write(mensaje)

miCarro.acelerar()
miCarro.acelerar()
miCarro.acelerar()
mensaje = miCarro.toString
document.write(mensaje)

miCarro.reversa()
mensaje = miCarro.toString
document.write(mensaje)

miCarro.frenar()
mensaje = miCarro.toString
document.write(mensaje)