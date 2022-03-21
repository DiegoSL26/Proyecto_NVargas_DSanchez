import { DefaultValueAccessor } from "@angular/forms";
import { Dulce } from "./candy.model";
import { Facturas } from "./facturas.module";

export class cliente {

  nombre:string;
  contra:string;
  email:string;
  numFact: number = 0;
  carrito: Dulce[] = [];
  Facturas: Facturas[] =[];
  factura:Facturas;

  constructor (){
    this.generarFactura();
  }

  public agregar(articulo : Dulce){
    this.carrito.push(articulo)
    alert("Se ha registrado correctamente");
  }

  public obtener(){
    return this.carrito;
  }

  public generarFactura(){
    this.factura = new Facturas(this.nombre,this.numFact);
    this.numFact++;
  }

  public agregarFactura(dulce:Dulce){
    this.factura.agregar(dulce);
  }

  public elimiar(dulceE:Dulce){
    this.carrito.forEach((dulce,index)=>{
      if(dulce.nombre==dulceE.nombre) this.carrito.splice(index,1);
    });
  }

  public facturar(total:number){
    this.factura.setTotal(total);
    this.Facturas.push(this.factura);
    this.generarFactura();
    this.carrito=[];
  }
}
