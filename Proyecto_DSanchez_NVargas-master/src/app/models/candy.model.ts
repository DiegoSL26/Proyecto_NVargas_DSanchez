export class Dulce {

    nombre:String;
    tipo: String;
    cantidad:number;
    vendido: number;
    costo:number;
    imagen:String;

    constructor (){
        this.vendido=0;
    }

    Retirar(vendido:number){
        this.cantidad=this.cantidad-vendido;
        vendido+=vendido;
    }
}