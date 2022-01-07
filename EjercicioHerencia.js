class Persona{

    static contadorID = 0;  

    constructor(nombre, apellido, edad){
        this.idPersona = ++Persona.contadorID;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

    get nombre(){
        return this._nombre;
    }
    
    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }
    
    set apellido(apellido){
        this._apellido = this.apellido;
    }

    get edad(){
        return this._edad;
    }
    
    set edad(edad){
        this._edad = edad;
    }

    toString(){
        return this.idPersona + ', ' + this._nombre + ', ' + this._apellido + ', ' + this._edad;
    }
}

persona1 = new Persona('Eligio', 'Quijada', 24);
console.log(persona1);
persona2 = new Persona('Magelis', 'Lucero', 20);
console.log(persona2.toString());


class Empleado extends Persona{

    static contadorIDe = 0;

    constructor(nombre, apellido, edad,sueldo){
        super(nombre, apellido, edad);
        this._idEmpleado = ++ Empleado.contadorIDe;
        this._sueldo = sueldo; 
    }

    get idEmpleado(){
        return this._idEmpleado
    }

    get sueldo(){
        return this._sueldo
    }

    set sueldo(sueldo){
        this._sueldo = this.sueldo
    }

    toString(){
        return super.toString() + ', ' + this._idEmpleado + ', ' + this.sueldo;
    }
}

empleado1 = new Empleado('Bacilio', 'Rodriguez', '23', 2500);
console.log(empleado1.toString());

class Cliente extends Persona{

    static contadorIDc = 0;

    constructor(nombre, apellido, edad, fechaRegistro){
        super(nombre, apellido, edad);
        this._idCliente = ++ Cliente.contadorIDc;
        this._fechaRegistro = fechaRegistro;
    }

    get idCliente(){
        return this._idCliente 
    }

    get fechaRegistro(){
        return this._fechaRegistro;
    }

    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro
    }

    toString(){
        return super.toString() + ', ' + this._idCliente + ', ' + this.fechaRegistro;
    }
}

cliente1 = new Cliente('Joseph', 'Gonzales', 25, 2018);
console.log(cliente1.toString());
cliente2 = new Cliente('Julio', 'Mariano', 26, 2014);
console.log(cliente2);