import { Component, OnInit } from '@angular/core';
import { OfertasService} from '../servicios/ofertas.service';
import { Oferta } from './../oferta';

@Component({
  selector: 'app-resultados-busqueda',
  templateUrl: './resultados-busqueda.page.html',
  styleUrls: ['./resultados-busqueda.page.scss'],
})
export class ResultadosBusquedaPage implements OnInit {

  public listaOfertas: Oferta[] = [];
  public pagina: Oferta[] = [];

  constructor(public ofertas: OfertasService) {
    if(this.ofertas.listadoOfertas.length > 10){
      this.listaOfertas = this.ofertas.listadoOfertas;
      this.pagina = this.listaOfertas.slice(0, 10);
    } else {
      this.listaOfertas = this.ofertas.listadoOfertas;
    }
    // console.log(this.ofertas.listadoOfertas.length);
  }

  ngOnInit() {
  }

}
