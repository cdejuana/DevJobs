import { Component, OnInit } from '@angular/core';
import { OfertasService} from '../servicios/ofertas.service';

@Component({
  selector: 'app-bienvenida-inicio',
  templateUrl: './bienvenida-inicio.page.html',
  styleUrls: ['./bienvenida-inicio.page.scss'],
})
export class BienvenidaInicioPage implements OnInit {

  public listaUsuarios: Array<any>;

  constructor(public ofertas: OfertasService) { }

  ngOnInit() {
  }

  public getResultados() {
    const suscripcionOfertas = this.ofertas.getOfertas().subscribe( data => {
      
      data.data.forEach(element => {
        console.log("ID: " + element.id);
        console.log("Email: " + element.email);
        console.log("First Name: " + element.first_name);
      });
      // console.log(data.data);
    },
    error => {
      console.log(error);
    });

    // if (!suscripcionOfertas.closed) {
    //   suscripcionOfertas.unsubscribe();
    // }    
  }

}
