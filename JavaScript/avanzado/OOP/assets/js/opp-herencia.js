class Pokemon {
  constructor(nombre, tipo) {
    this.nombre = nombre;
    this.tipo = tipo;
  }

  atacar() {
    return console.log(`${this.nombre} esta atacando`);
  }
}

class Pikachu extends Pokemon {
  constructor(nombre, tipo, edad) {
    super(nombre, tipo);
    this.edad = edad;
  }

  evolucionar() {
    return console.log(`${this.nombre} esta evolucionando`);
  }
}

const miPikachu = new Pikachu("Pikachu", "Electrico", 1);
console.log(miPikachu);

miPikachu.atacar();
miPikachu.evolucionar();

const miCharmander = new Pokemon("Charmander", "Fuego");
console.log(miCharmander);
