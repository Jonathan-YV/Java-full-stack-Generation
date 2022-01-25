
class Animal{
    constructor(nombre, especie){
        this.nombre = nombre;
        this.especie = especie;
    }

    presentarse(){
        document.write(`Hola soy un ${this.especie} y me llamo ${this.nombre}`)
    }

    cambiarNombre(nuevoNombre){
        this.nombre = nuevoNombre
        let mensaje = `Mi nuevo nombre es ${this.nombre} y soy un ${this.especie} <br>`
        return mensaje;
    }

    // Leer o modificar un atributo
    get getNombre(){
        return this.nombre;
    }

    get getEspecie(){
        return this.especie;
    }

    set setNombre(nombre){
        this.nombre = nombre
    }

    set setEspecie(especie){
        this.especie = especie
    }

    static saludar(){
        return console.log('Hola, soy un metodo estatico')
    }
}

Animal.saludar();


const varPerro = new Animal('Coby','Perro')
console.log(varPerro)
const mensaje = varPerro.cambiarNombre('Beny')
document.write(mensaje)

varPerro.presentarse()

const varGato = new Animal('Leo','Gato')
console.log(varGato)



//Get y Set

const especie = varPerro.getEspecie
console.log(especie)

varPerro.setNombre = 'Firulais'
console.log(varPerro.nombre)


