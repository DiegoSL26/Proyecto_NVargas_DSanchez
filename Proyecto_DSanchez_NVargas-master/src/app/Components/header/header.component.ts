import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminsService } from 'src/app/servicios/admins.service';
import { ClienteService } from 'src/app/servicios/clientes.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router, public _adminService: AdminsService, public _clienteService:ClienteService) { }

  ngOnInit(): void {
  }

  home() {
    this.router.navigateByUrl('./home')
  }
  inventario() {
    this.router.navigateByUrl('./inventario')
  }
  cerrarSesion() {
    localStorage.clear();
    this._adminService.limpiar();
    this._clienteService.limpiar();
    this.router.navigateByUrl('');
  }

  revizarAdmin(): boolean {
    var nomUsuario = localStorage.getItem('user');
    if (nomUsuario != null) {
      for (let adm of this._adminService.administradores) {
        if (adm.nombre == nomUsuario) {
          return true;
        }
      }
    }
    return false;
  }

  carrito(){
    this.router.navigateByUrl("./carrito")
  }

  perfil(){
    this.router.navigateByUrl("./perfil")
  }

  revizar(): boolean {
    var nomUsuario = localStorage.getItem('user');
    if (nomUsuario != null) {
      for (let usu of this._clienteService.vertedero) {
        if (usu.nombre == nomUsuario) {
          return true;
        }
      }
    }
    return false;
  }

  Inicio(){
    localStorage.clear();
    this.router.navigateByUrl('./iniciar');
  }

}
