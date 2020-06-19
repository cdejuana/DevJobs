import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuariosService} from '../servicios/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formData: any;
  isSubmitted = false;
  public suscripcionLogin;

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

  private login(form: NgForm) {
    const user = { email: form.value.email, password: form.value.password };
    this.suscripcionLogin = this.usuarios.login(user).subscribe( data => {
      this.usuarios.setToken(data.token, this.formData.recordarUsuario);
      this.router.navigateByUrl("/tabs");
    },
    error => {
      this.formData.errorAcceso = true;
      console.log(error);
    });

  // public login() {
  //   this.router.navigateByUrl("/tabs");
  // }
}

ngOnDestroy(): void {
  if (!this.suscripcionLogin.closed) {
    this.suscripcionLogin.unsubscribe();
  }    
}