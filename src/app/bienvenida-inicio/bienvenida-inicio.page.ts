import { Component, OnInit } from '@angular/core';
import { OfertasService} from '../servicios/ofertas.service';

@Component({
  selector: 'app-bienvenida-inicio',
  templateUrl: './bienvenida-inicio.page.html',
  styleUrls: ['./bienvenida-inicio.page.scss'],
})
export class BienvenidaInicioPage implements OnInit {

  constructor(public ofertas: OfertasService) { }

  ngOnInit() {
  }

  getResultados() {
    const suscripcionOfertas = this.ofertas.getOfertas().subscribe( data => {
      console.log(data);
    },
    error => {
      console.log(error);
    });

    // if (!suscripcionOfertas.closed) {
    //   suscripcionOfertas.unsubscribe();
    // }    
  }

}
