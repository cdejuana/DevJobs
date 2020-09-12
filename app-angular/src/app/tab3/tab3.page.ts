import { Component } from '@angular/core';
import { UsuariosService} from '../servicios/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public usuarios: UsuariosService, public router: Router) {}

  cerrarSesion() {
    this.usuarios.cerrarSesion();
    this.router.navigateByUrl("/");
  }

}
