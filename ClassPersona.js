class Persona{

    static contadorID = 0;  

    constructor(nombre, apellido, edad){
        this.idPersona = ++Persona.contadorID;
        this._nombre = nombre
        this._apellido = apellido
        this._edad = edad
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