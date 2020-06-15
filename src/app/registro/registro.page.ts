import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService} from '../servicios/usuarios.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {  

  formData: any;
  isSubmitted = false;

  constructor(public usuario: UsuariosService, public router: Router) {
    this.formData = {
      nombre: "",
      email: "",
      password: "",
      confirmPassword: "",
      recordarUsuario: false,
      aceptoTerminos: false
    }
  }

  ngOnInit() {
  }

  register(form: NgForm) {
    const user = { email: form.value.email, password: form.value.password };
    this.usuario.register(user).subscribe( data => {
      this.usuario.setToken(data.token, this.formData.recordarUsuario);
      this.router.navigateByUrl("/tabs");
    },
    error => {
      console.log(error);
    });
  }

}
