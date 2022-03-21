import { Injectable } from '@angular/core';
import { cliente } from '../models/cliente.model';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  public vertedero: cliente[] = [];
  public actual: cliente;
  constructor() { }

  public agregar(Usuario : cliente){
    this.vertedero.push(Usuario)
  }

  public obtener(){
    return this.vertedero;
  }


  public limpiar(){
    this.actual=new cliente();
  }
}
