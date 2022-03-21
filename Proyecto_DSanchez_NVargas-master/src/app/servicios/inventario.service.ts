import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { Dulce } from '../models/candy.model';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  public Disponible: Dulce[] = [];
  public buscar: Dulce;
  constructor() { }

  public agregar(articulo : Dulce,primeraVez:boolean){
    this.Disponible.push(articulo)
    if(!primeraVez){
      Swal.fire('Agregado', 'El dulce se a agregado correctamente!')
    }
  }

  public obtener(){
    return this.Disponible;
  }

  public elimiar(){
    this.Disponible.forEach((dulce,index)=>{
      if(dulce.nombre==this.buscar.nombre) {
        this.Disponible.splice(index,1);
      }
    });
  }

  public editar(actualizacion:Dulce){
    this.Disponible.forEach((dulce,index)=>{
      if(dulce.nombre==this.buscar.nombre) this.Disponible.splice(index,1,actualizacion);
    });
  }
}
