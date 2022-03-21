import { Injectable } from '@angular/core';
import { Administrador } from '../models/admin.module';


@Injectable({
  providedIn: 'root'
})
export class AdminsService {

  public administradores: Administrador[] = [];
  public admin: Administrador;
  constructor() { }

  public agregar(nombre: string, contra: string){
    this.admin=new Administrador();
    this.admin.crear(nombre,contra);
    this.administradores.push(this.admin);
    this.admin=new Administrador;
  }

  public obtener(){
    return this.administradores;
  }

  public limpiar(){
    this.admin=new Administrador;
  }
}
