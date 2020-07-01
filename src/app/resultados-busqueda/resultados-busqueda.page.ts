import { Component, OnInit, ViewChild } from '@angular/core';
import { OfertasService} from '../servicios/ofertas.service';
import { Oferta } from './../oferta';
import { IonContent } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-resultados-busqueda',
  templateUrl: './resultados-busqueda.page.html',
  styleUrls: ['./resultados-busqueda.page.scss'],
})
export class ResultadosBusquedaPage implements OnInit {
  @ViewChild(IonContent, { static: false }) content: IonContent;

  public ofertasMostradas: Array<Oferta>;
  private ofertasSiguientes: Array<Oferta> = new Array<Oferta>();
  public paginaActual: number;
  public totalPaginas: number;
  public botonOculto: Boolean;
  public suscripcionOfertas;
  public ofertasTotales: number;

  constructor(public ofertas: OfertasService) { }

  ngOnInit() { 
    this.botonOculto = true;
    this.ofertasMostradas =  this.ofertas.ofertasPaginadas.data;
    this.totalPaginas = this.ofertas.ofertasPaginadas.to;
    this.paginaActual = this.ofertas.ofertasPaginadas.current_page;
    this.ofertasTotales = this.ofertas.ofertasPaginadas.total;
  }

  private aniadirOfertas(eventoScroll) {
    this.suscripcionOfertas = this.ofertas.siguientePaginadeOfertas().subscribe( data => {      
      this.ofertasSiguientes = data.data;
    },
    error => {
      console.log(error);
    });
    
    for (let index = 0; index < this.ofertasSiguientes.length; index++) {
      this.ofertasMostradas.push(this.ofertasSiguientes[index]);
    }
    this.paginaActual = this.ofertas.ofertasPaginadas.current_page;
    eventoScroll.target.complete();
  }

  public onScrollEnd(eventoScroll) {
    if (this.paginaActual < this.totalPaginas) {
      this.aniadirOfertas(eventoScroll);
    } else {
      eventoScroll.target.disabled = true;
    }
    this.botonOculto = false;
  }

  public scrollToTop() {
    this.content.scrollToTop(1500);
    this.botonOculto = true;
  }

}
