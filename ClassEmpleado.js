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