const palabra = new String("Hola")
console.log(palabra);

const palabra2 = "Hola"
console.log(typeof(palabra2));

const numero = new Number(10)
console.log(numero);

const boolean = new Boolean(true)
console.log(boolean);

const numero2 = 1
console.log(numero2);

console.log(numero + numero2)

console.log("HOLA" * 3)


const carro = new Object()
carro.marca = "Tesla"
carro.modelo = "Model 3"
carro.anio = 2021

console.log(carro)

let persona = {
    nombre: {
        nombre: 'Jonathan Yair',
        apellido : 'Vazquez'
    },
    sumar: function (num1, num2){
        return num1 + num2
    },
    edad: 23,
    direccion: 'Edo. México',
    telefono: 5563451616
};

persona.tieneTrabajo = true;
console.log(persona)
/* console.log(persona.sumar(4,8)); */

let compra = {
    tipo: 'celular',
    producto: {
        marca: 'Xiaomi',
        modelo: 'Poco X3 NFC',
        color: 'black'
    },
    especificaciones:{
        ram: '6GB',
        rom: ['64GB','128GB'],
        cpu: 'Qualcomm Snapdragon 732G',
        camara: {
            trasera: ['64 MP Sony IMX682 (1/1.73"), f/1.89, PDAF',
                        '13 MP gran angular, f/2.2, 119º',
                         '2 MP macro f/2.4',
                         '2 MP profundidad f/2.4'],
            frontal: ['20 MP, f/2.2']
        } 
    },
    precio: 3500,
    cantidad: 1,
    estadoNuevo: true,
    stock: [{
        a: '30',
        b: '40',
        c: '50'
    }]
}

persona.sumar = function (n1,n2){
    return n1 - n2
}

console.log(persona.sumar(10,5))

console.log(compra);

console.log(Object.keys(compra))
console.log(Object.values(compra))
console.log(compra.hasOwnProperty("precio"))


const cohorte12 = [
    {
        nombre: "Jonathan Yair",
        apellido: "Vazquez",
        edad: 23,
        pasatienpos: ["nadar","anime","escribir"]
    },
    {
        nombre: "Mau",
        apellido: "Diaz",
        edad: 25,
        pasatienpos: ["leer","escribir","dibujar"]
    },
    {
        nombre: "Raul",
        apellido: "Sanchez",
        edad: 30,
        pasatienpos: ["cocinar","programar","dibujar"]
    },
    {
        nombre: "Yair",
        apellido: "Uriostegui",
        edad: 23,
        pasatienpos: ["nadar","anime","dibujar"]
    }
]

for(let i=0; i<cohorte12.length; i++){
    /* console.log(cohorte12[i].pasatienpos.includes("nadar")) */
    if (cohorte12[i].pasatienpos.includes("programar")){
        console.log(cohorte12[i].nombre);
    }
}

/* cohorte12.forEach((personas) => {
    console.log(personas)
}) */

/* function Persona (nombre){
    this.nombre = nombre;
}

const jonYair = new Persona("Jonathan")

console.log(jonYair.nombre.toString()) */


function factorialize(num) {
    if (num < 0) return -1;
    else if (num == 0) return 1;
    else return (num * factorialize(num - 1));
  }

  /* 3 *  */

  console.log(factorialize(3));

  "Hola".substring