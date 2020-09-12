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
  public totalMostradas: number;
  private ofertasSiguientes: Oferta[];
  public puedePulsarSiguiente: boolean;
  public compruebaBotonSiguiente: boolean;

  constructor(private ruta: ActivatedRoute, private ofertas: OfertasService, private router: Router) { }

  ngOnInit() {       
    this.listaOfertas = this.ofertas.ofertasCargadas;
    this.totalMostradas = this.listaOfertas.length; 
    this.totalOfertas = this.ofertas.ofertasPaginadas.total;    
    this.ruta.paramMap.subscribe(paramMap => {
      const indiceOferta = paramMap.get('detalleOferta');
      this.ofertaActual = this.listaOfertas[indiceOferta];
      this.indiceOferta = parseInt(indiceOferta);
      if (this.indiceOferta == this.listaOfertas.length) {
        this.ofertas.siguientePaginadeOfertas();
      }
    });
    if ((this.indiceOferta == (this.totalMostradas -5)) && this.totalMostradas < this.totalOfertas) {
      this.aniadirOfertas();
    }
    if ((this.indiceOferta < (this.totalMostradas -1))) {
      this.puedePulsarSiguiente = true;
    } else {
      this.puedePulsarSiguiente = false;
    }
    this.compruebaBotonSiguiente = false;
  }

  ngAfterViewChecked(){
    this.scrollToTop();
  }

  public siguienteOferta() {
    if (this.puedePulsarSiguiente) {
      this.router.navigate(['/resultados-busqueda/' + (this.listaOfertas.indexOf(this.ofertaActual) + 1)]);
      this.compruebaBotonSiguiente = true;
    } 
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
      this.puedePulsarSiguiente = true;
      this.ofertas.ofertasCargadas = this.listaOfertas;
      this.totalMostradas = this.listaOfertas.length;
    },
    error => {
      console.log(error);
    });
  }

  public scrollToTop() {
    this.content.scrollToTop();    
  }
}