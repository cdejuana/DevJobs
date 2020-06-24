import { Component, OnInit, ViewChild } from '@angular/core';
import { OfertasService} from '../servicios/ofertas.service';
import { Oferta } from './../oferta';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import { IonList, IonContent } from '@ionic/angular';

@Component({
  selector: 'app-resultados-busqueda',
  templateUrl: './resultados-busqueda.page.html',
  styleUrls: ['./resultados-busqueda.page.scss'],
})
export class ResultadosBusquedaPage implements OnInit {
  @ViewChild(IonContent, { static: false }) content: IonContent;

  public listaOfertas: Array<Oferta>;
  public ofertasMostradas: Array<Oferta>;
  private ofertasSiguientes: Array<Oferta>;
  private contadorMostradas: number;
  private maximoMostradas: number;
  public scrollAbajo: Boolean;

  constructor(public ofertas: OfertasService, public infiniteScroll: InfiniteScrollModule) { }

  ngOnInit() { 
    this.scrollAbajo = false;
    this.listaOfertas = this.ofertas.listadoOfertas;
    this.maximoMostradas = this.listaOfertas.length;

    if(this.ofertas.listadoOfertas.length > 10){      
      this.ofertasMostradas = this.listaOfertas.slice(0, 10);
    } else {
      this.ofertasMostradas = this.listaOfertas;
    }

    this.contadorMostradas = this.ofertasMostradas.length;
  }

  private aniadirOfertas(eventoScroll) {  
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
    eventoScroll.target.complete();
  }

  public onScrollEnd(eventoScroll) {
    if (this.contadorMostradas < this.maximoMostradas) {
      this.aniadirOfertas(eventoScroll);
    } else {
      eventoScroll.target.disabled = true;
    }
    this.scrollAbajo = true;
  }

  public onScroll() {
    this.scrollAbajo = true;
  }

  public scrollToTop() {
    this.content.scrollToTop(1500);
    this.scrollAbajo = false;
  }

}
