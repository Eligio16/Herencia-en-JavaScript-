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