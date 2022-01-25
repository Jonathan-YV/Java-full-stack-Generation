class Animal {  
    constructor(nombre,edad,especie,revisado) {   
    this.nombre = nombre;   
    this.edad = edad;   
    this.especie = especie; 
    this.revisado = revisado; 
    this.enfermo = false; 
    }

    saludar(){ 
        return console.log(`Hola mi nombre es ${this.nombre}`); 
    }
}

class Veterinario{     
    constructor(){
        this.cantidadPacientes = 0; 
        this.pacientesRevisados = 0;    
        this.listaPacientes = []; 
    }
    
    agregarPaciente(paciente){  
        this.listaPacientes.push(paciente); 
        this.cantidadPacientes+=1; 
        let mensaje = 'Paciente agregado'; 
        return document.write(`${mensaje} <br>`) 
    }

    mostrarLista(){             
        for(let i=0;i<this.listaPacientes.length;i++){     
            document.write(`El paciente ${i} se llama ${this.listaPacientes[i].nombre} <br>`);
        }
        document.write(`Hay ${this.cantidadPacientes} pacientes atendidos <br>`);    
    }

    revisarPaciente(paciente){     
        if(paciente.revisado === false){    
            paciente.revisado = true;  
            document.write(`El paciente ${paciente.nombre} acaba de ser revisado <br>`); 
        }
        else{
            document.write(`El paciente ${paciente.nombre} ya fue revisado <br>`);
        }
        
    }

    modificarPacientesRevisados(){      
         this.pacientesRevisados++;
    }
}
const miGatito = new Animal('Leo',5,'Gato',false); 
const miPerrito = new Animal('Toby',2,'Perro',true);
console.log(miGatito);    
console.log(miPerrito);    
const miVererinario = new Veterinario();

miVererinario.agregarPaciente(miGatito);   
miVererinario.agregarPaciente(miPerrito);   
miVererinario.mostrarLista();

miVererinario.revisarPaciente(miGatito);  
miVererinario.modificarPacientesRevisados();
document.write(`El veterinario tiene ${miVererinario.pacientesRevisados} pacientes revisados <br>`);

miVererinario.revisarPaciente(miPerrito);   
document.write(`El veterinario tiene ${miVererinario.pacientesRevisados} pacientes revisados`); 