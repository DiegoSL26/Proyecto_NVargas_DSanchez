import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cliente } from 'src/app/models/cliente.model';
import { ClienteService } from 'src/app/servicios/clientes.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public usu:cliente;
  public numImg:number=3;
  public imgs:string[]=["../../../assets/images/userIcons/1.png","../../../assets/images/userIcons/2.png","../../../assets/images/userIcons/3.png"];

  constructor(public router:Router,public _clienteService: ClienteService) { 
    this.usu = _clienteService.actual;
  }

  ngOnInit(): void {
  }

  verFacturas(){
    this.router.navigateByUrl("./verFacts")
  }

  tomarImg():string{
    var num : number = Math.floor(Math.random() * this.numImg);
    var Simg:string = this.imgs[num];
    return Simg;
  }
  
}
