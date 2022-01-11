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

console.log(persona.sumar(4,8));


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

console.log(compra.stock[0].a)