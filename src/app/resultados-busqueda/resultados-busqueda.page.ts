import { Component, OnInit } from '@angular/core';
import { OfertasService} from '../servicios/ofertas.service';
import { Oferta } from './../oferta';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';

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

  constructor(public ofertas: OfertasService, public infiniteScroll: InfiniteScrollModule) { }

  ngOnInit() {    
    this.listaOfertas = this.ofertas.listadoOfertas;
    this.maximoMostradas = this.listaOfertas.length;

    if(this.ofertas.listadoOfertas.length > 10){      
      this.ofertasMostradas = this.listaOfertas.slice(0, 10);
    } else {
      this.ofertasMostradas = this.listaOfertas;
    }

    this.contadorMostradas = this.ofertasMostradas.length;
  }

  private aniadirOfertas() {  
    let limiteSiguientes = 0;
    if ((this.contadorMostradas + 10) > this.listaOfertas.length) {
      limiteSiguientes = this.listaOfertas.length - this.contadorMostradas;
    } else {
      limiteSiguientes = this.contadorMostradas + 10;
    }
    this.ofertasSiguientes = this.listaOfertas.slice(this.contadorMostradas, limiteSiguientes);
    for (let index = 0; index < this.ofertasSiguientes.length; index++) {
      this.ofertasMostradas.push(this.ofertasSiguientes[index]);
    }
    this.contadorMostradas = this.ofertasMostradas.length;
  }

  public onScroll() {
    console.log("scrolled!!");
    if (this.contadorMostradas < this.maximoMostradas) {
      this.aniadirOfertas();
    }
  }

}
