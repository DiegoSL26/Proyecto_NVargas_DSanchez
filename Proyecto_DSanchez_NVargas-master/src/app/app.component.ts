import { Component } from '@angular/core';
import { Administrador } from './models/admin.module';
import { Dulce} from './models/candy.model';
import { AdminsService } from './servicios/admins.service';
import { InventarioService } from './servicios/inventario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Proyecto_DSanchez_NVargas';


  constructor(_adminService:AdminsService, _inventarioService: InventarioService){

    _adminService.agregar("Nicolas","12345");
    var dulce1 : Dulce = new Dulce()
    dulce1.nombre="Caja de Pocky";
    dulce1.tipo="Importados";
    dulce1.cantidad=50;
    dulce1.costo=10000;
    dulce1.imagen="../assets/images/products/GUEST_d0eb439c-3f20-4eb7-be83-471c10b67778.jpg";
    _inventarioService.agregar(dulce1,true);
    var dulce2 : Dulce = new Dulce();
    dulce2.nombre="Chocolatina jet";
    dulce2.tipo="Chocolate";
    dulce2.cantidad=50;
    dulce2.costo=500;
    dulce2.imagen="../assets/images/products/Chocolatina-Jet-x-12g-1000x798-1.jpg"
    _inventarioService.agregar(dulce2,true);
    
    localStorage.clear();
  }
  
}
