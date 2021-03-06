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
  public suscripcionRegistro;

  constructor(public usuario: UsuariosService, public router: Router) {
    this.formData = {
      nombre: "",
      email: "",
      password: "",
      confirmPassword: "",
      coincidenPasswords: false,
      recordarUsuario: false,
      aceptoTerminos: false,      
    }
  }

  ngOnInit() {
  }

  register(form: NgForm) {
    // const user = { email: form.value.email, password: form.value.password };
    const user = { nombre: form.value.nombre, email: form.value.email, password: form.value.password };    
    this.suscripcionRegistro = this.usuario.register(user).subscribe( data => {
      this.usuario.setToken(data.token, this.formData.recordarUsuario);
      this.router.navigateByUrl("/tabs");
    },
    error => {
      console.log(error);
    });
  }

  // compruebaPassword() {
  //   if ((this.formData.password != "") && (this.formData.password == this.formData.confirmPassword)) {
  //     this.formData.coincidenPasswords = true;
  //   }
  // }

  // ngOnDestroy(): void {
  //   if (!this.suscripcionRegistro.closed) {
  //     this.suscripcionRegistro.unsubscribe();
  //   }    
  // }

}
