import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms'
import { UsuariosService} from '../servicios/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formData: any;
  isSubmitted = false;

  constructor(public usuarios: UsuariosService, public router: Router) {
    this.formData = {
      email: "",
      password: "",
      recordarUsuario: false,
      errorAcceso: false
    }
  }

  ngOnInit() {
  }

  login(form: NgForm) {
    // const user = { email: this.email, password: this.password };
    const user = { email: form.value.email, password: form.value.password };
    // console.log(this.formData.recordarUsuario);
    const suscripcionLogin = this.usuarios.login(user).subscribe( data => {
      this.usuarios.setToken(data.token, this.formData.recordarUsuario);
      this.router.navigateByUrl("/tabs");
    },
    error => {
      this.formData.errorAcceso = true;
      console.log(error);
    });

    if (suscripcionLogin.closed) {
      suscripcionLogin.unsubscribe();
    }
  }

}
