import { Component, OnInit } from '@angular/core';
import { RouteConfigLoadEnd, Router } from '@angular/router';
import { Administrador } from 'src/app/models/admin.module';
import { Dulce } from 'src/app/models/candy.model';
import { cliente } from 'src/app/models/cliente.model';
import { AdminsService } from 'src/app/servicios/admins.service';
import { ClienteService } from 'src/app/servicios/clientes.service';

import { InventarioService } from 'src/app/servicios/inventario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public inventario: Dulce[] = [];
  public cliente:cliente;
  public admin:Administrador;
  public encontrado: boolean;


  constructor(public _InveService: InventarioService,_clienteService: ClienteService,_adminService: AdminsService,public route :Router) {
    this.inventario=_InveService.Disponible;
    

    var nomUsuario = localStorage.getItem('user');
    for(let cli of _clienteService.vertedero){
      if(cli.nombre==nomUsuario){
        this.cliente = new cliente();
        this.cliente=cli;
        this.encontrado=true;
      }
    }

    if(!this.encontrado){
      for(let adm of _adminService.administradores){
        if(adm.nombre==nomUsuario){
          this.admin = new Administrador();
          this.admin=adm;
          this.encontrado=true;
        }
      }
    }
  }

  public listProductTable(){
    let productos: Dulce[][] = []
    for(let i = 0; i <= this.inventario.length / 3; i++) {
      productos.push([])
      for(let j = i * 3; j < (i * 3) + 3 && j < this.inventario.length; j++) {
        productos[i].push(this.inventario[j])
      }
    }
    return productos
  }

  ngOnInit(): void {
  }

  agregar(compra:Dulce){
    this._InveService.buscar=compra;
    this.route.navigateByUrl("./DetalleDulce")
  }
}
