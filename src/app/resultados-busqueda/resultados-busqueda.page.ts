import { Component, OnInit } from '@angular/core';
import { OfertasService} from '../servicios/ofertas.service';
import { Oferta } from './../oferta';

@Component({
  selector: 'app-resultados-busqueda',
  templateUrl: './resultados-busqueda.page.html',
  styleUrls: ['./resultados-busqueda.page.scss'],
})
export class ResultadosBusquedaPage implements OnInit {

  public listaOfertas: Array<Oferta>;
  public ofertasMostradas: Array<Oferta>;
  private ofertasSiguientes: Array<Oferta>;
  private contadorMostradas: number;
  private maximoMostradas: number;

  constructor(public ofertas: OfertasService) { }

  ngOnInit() {
    // this.maximoMostradas = Math.round(this.ofertas.listadoOfertas.length / 10)
    this.maximoMostradas = this.ofertas.listadoOfertas.length;
    this.listaOfertas = this.ofertas.listadoOfertas;    

    if(this.ofertas.listadoOfertas.length > 10){      
      this.ofertasMostradas = this.listaOfertas.slice(0, 10);
    } else {
      this.listaOfertas = this.ofertas.listadoOfertas;
    }

    this.contadorMostradas = this.ofertasMostradas.length;
  }

  // public aniadirOfertas() {
  //   this.contadorMostradas = this.ofertasMostradas.length;
  //   this.ofertasSiguientes = this.listaOfertas.slice(this.contadorMostradas, this.contadorMostradas + 10);
  //   for (let index = 0; index < this.ofertasSiguientes.length; index++) {
  //     //const element = array[index];
      
  //   }
  // }

}
