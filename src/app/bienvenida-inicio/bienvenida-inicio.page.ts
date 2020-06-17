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
    console.log(this.ofertas.getOfertas());
  }

}
