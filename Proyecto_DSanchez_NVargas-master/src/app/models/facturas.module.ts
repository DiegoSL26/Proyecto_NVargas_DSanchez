import { Dulce } from "./candy.model";

export class Facturas {

    id:number;
    persona: String;
    pedido:Dulce[]=[];
    total:number;


    constructor (nombre:String,num:number){
        this.persona=nombre;
        this.id= num;
    }

    agregar(dulce:Dulce){
        this.pedido.push(dulce);
    }

    setTotal(goukei:number){
        this.total=goukei;
    }
}