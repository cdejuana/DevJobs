import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Oferta } from '../oferta';
import { OfertasService} from '../servicios/ofertas.service';
import { Router } from "@angular/router";
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-oferta-detalles',
  templateUrl: './oferta-detalles.page.html',
  styleUrls: ['./oferta-detalles.page.scss'],
})
export class OfertaDetallesPage implements OnInit {
  @ViewChild(IonContent, { static: false }) content: IonContent;

  public listaOfertas: Array<Oferta>;
  public ofertaActual: Oferta;
  public indiceOferta: number;
  public totalOfertas: number;
  private ofertasSiguientes: Oferta[];

  constructor(private ruta: ActivatedRoute, private ofertas: OfertasService, private router: Router) { }

  ngOnInit() {    
    this.listaOfertas = this.ofertas.ofertasCargadas;
    this.totalOfertas = this.listaOfertas.length;
    console.log("indice actual: " + this.listaOfertas.indexOf(this.ofertaActual));
    console.log("total ofertas: " + this.totalOfertas);
    this.ruta.paramMap.subscribe(paramMap => {
      const indiceOferta = paramMap.get('detalleOferta');
      this.ofertaActual = this.listaOfertas[indiceOferta];
      this.indiceOferta = parseInt(indiceOferta);
      if (this.indiceOferta == this.listaOfertas.length) {
        this.ofertas.siguientePaginadeOfertas();
      }
    });    
  }

  ngAfterViewChecked(){
    this.scrollToTop();
  }
  
  public siguienteOferta() {
    this.aniadirOfertas();
  }
    
  public aniadirOfertas() {
    this.ofertas.siguientePaginadeOfertas().subscribe( data => {
      // NOS DEVUELVE EL OBJETO DE OFEERTAS PAGINADAS Y LO ACTUALIZAMOS
      this.ofertas.ofertasPaginadas = data;
      // GUARDAMOS EL ARRAY DE OFERTAS QUE CONTIENE:
      this.ofertasSiguientes = data.data;
      // LAS AÑADIMOS A LA LISTA DE OFERTAS QUE PODEMOS MOSTRAR
      for (let index = 0; index < this.ofertasSiguientes.length; index++) {
        this.listaOfertas.push(this.ofertasSiguientes[index]);
      }
      // y actualizamos la lista de ofertas cargadas/mostradas en el servicio
      this.ofertas.ofertasCargadas = this.listaOfertas;    
    },
    error => {
      console.log(error);
    });
  }

  public scrollToTop() {
    this.content.scrollToTop();
  }  

}
