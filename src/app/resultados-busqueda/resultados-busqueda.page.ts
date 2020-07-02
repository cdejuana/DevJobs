import { Component, OnInit, ViewChild } from '@angular/core';
import { OfertasService} from '../servicios/ofertas.service';
import { Oferta } from './../oferta';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-resultados-busqueda',
  templateUrl: './resultados-busqueda.page.html',
  styleUrls: ['./resultados-busqueda.page.scss'],
})
export class ResultadosBusquedaPage implements OnInit {

  // CON EL DECORADOR @VIEWCHILD ACCEDEMOS A LOS MÉTODOS DE LOS COMPONENTES
  // EN ESTE CASO ION COMPONENT, PARA SABER CUANDO SE HACE SCROLL, ETC...
  @ViewChild(IonContent, { static: false }) content: IonContent;

  //
  // **** DECLARAMOS TODOS LOS ARRAYS Y VARIABLES QUE NECESITAMOS: ***
  //  

  // LISTA DE OFERTAS MOSTRADAS (CON INTERFAZ DE OFERTAS)
  public ofertasMostradas: Array<Oferta>;
  
  // SIGUIENTES OFERTAS A MOSTRAR CUANDO SE HAGA SCROLL (CON INTERFAZ DE OFERTAS)
  private ofertasSiguientes: Array<Oferta> = new Array<Oferta>();

  // VARIABLES DE PAGINA, BOOLEANAS ETC
  public paginaActual: number;
  public totalPaginas: number;
  public botonOculto: Boolean;  
  public ofertasTotales: number;
  public contenidoPaginaArriba: boolean;
  public vuelveDeDetalle: boolean;
  
  // OBSERVABLE
  public suscripcionOfertas;

  constructor(public ofertas: OfertasService) { }

  ngOnInit() { 
    //
    // *** INICIALIZAMOS TODO: ***
    //

    // OCULTAMOS EL BOTON
    this.botonOculto = true;

    // GUARDAMOS EN MOSTRADAS LAS PRIMERAS 15 OFERTAS QUE NOS PASA LA API
    this.ofertasMostradas =  this.ofertas.ofertasPaginadas.data;

    // GUARDAMOS EL Nº TOTAL DE PÁGINAS PARA SABER CUANDO PARAR DE CARGAR:
    this.totalPaginas = this.ofertas.ofertasPaginadas.to;

    // LA PAGINA ACTUAL
    this.paginaActual = this.ofertas.ofertasPaginadas.current_page;

    // EL Nº TOTAL DE OFERTAS
    this.ofertasTotales = this.ofertas.ofertasPaginadas.total;

    this.vuelveDeDetalle = false;
  }  

// CADA VEZ QUE SE HACE SCROLL HASTA EL FINAL DE LA PÁGINA, SE EJECUTA ESTA FUNCIÓN
  public onScrollBottom(eventoScroll) {    
    // SIEMPRE QUE NO ESTEMOS EN LA ÚTIMA PÁGINA, LLAMAMOS A AÑADIR OFERTAS
    if (this.paginaActual < this.totalPaginas) {
      this.aniadirOfertas(eventoScroll);
    } else {
      // SI ESTAMOS EN LA ULTIMA, LE DECIMOS QUE DESACTIVE EL SCROLL
      eventoScroll.target.disabled = true;
    }    
  }

  // CADA VEZ QUE SE BAJA AL FINAL DE LA PAGINA Y NO ESTEMOS EN LA ÚLTIMA PÁGINA, SE AÑADEN OFERTAS
  private aniadirOfertas(eventoScroll) {
    // SE LLAMA A LA SIGUIENTE PAGINA DE OFERTAS QUE NOS PASA LA API SUSCRIBIENDONOS A UN OBSERVABLE
    this.suscripcionOfertas = this.ofertas.siguientePaginadeOfertas().subscribe( data => {
      // NOS DEVUELVE EL OBJETO DE OFEERTAS PAGINADAS Y LO ACTUALIZAMOS
      this.ofertas.ofertasPaginadas = data;
      
      // GUARDAMOS EL ARRAY DE OFERTAS QUE CONTIENE:
      this.ofertasSiguientes = data.data;

      // LAS AÑADIMOS A OFERTAS MOSTRADAS, PARA QUE LAS MUESTRE EN LA VISTA
      for (let index = 0; index < this.ofertasSiguientes.length; index++) {
        this.ofertasMostradas.push(this.ofertasSiguientes[index]);
      }
      // y actualizamos la lista de ofertas cargadas/mostradas en el servicio
      this.ofertas.ofertasCargadas = this.ofertasMostradas;
      
      // ACTUALIZAMOS EL NUMERO DE PAGINA ACTUAL
      this.paginaActual = this.ofertas.ofertasPaginadas.current_page;

      // MOSTRAMOS EL BOTÓN PARA SUBIR ARRIBA
      this.botonOculto = false;
      // VARIABLE BOOLEANA PARA SABER QUE EL SCROLL YA NO ESTÁ ARRIBA
      this.contenidoPaginaArriba = false;

      // TERMINAMOS EL EVENTO SCROLL
      eventoScroll.target.complete();
    },
    error => {
      console.log(error);
    });    
  }

  // CUANDO SE PULSA EL BOTON DE SUBIR ARRIBA, SE EJECUTA ESTA FUNCION
  public scrollToTop() {    
    // EL CONTENIDO HACE SCROLL HASTA EL INICIO (ARRIBA)
    this.content.scrollToTop(500);
    // INDICAMOS QUE ESTÁ ARRIBA
    this.contenidoPaginaArriba = true;
    // se oculta el boton
    this.botonOculto = true;
    // llamamos a funcion RECARGA OFERTAS
    this.recargaOfertas();
  }  

  // CADA VEZ QUE SUBE LA PAGINA, RECARGA LAS OFERTAS
  recargaOfertas() {   
    this.ofertas.recargaPaginadeOfertas().subscribe( data  => {
      this.ofertas.guardaOfertasPaginadas(data);
      this.ofertasMostradas = this.ofertas.ofertasCargadas;
      this.paginaActual = this.ofertas.ofertasPaginadas.current_page;
      this.contenidoPaginaArriba = true;
    },
    error => {
      console.log(error);
    });
  }

  // SIEMPRE QUE TERMINE EL SCROLL, MUESTRA EL BOTÓN SI LA PÁGINA NO ESTÁ ARRIBA
  scrollingEnd(evento) {
    if (!this.contenidoPaginaArriba) {
      this.botonOculto = false;
    }     
  }
  // SI EMPIEZA EL SCROLL Y ESTABA ARRIBA, ENTONCES YA NO ESTÁ ARRIBA
  scrollingStart(evento) {
    if (this.contenidoPaginaArriba) {
      this.contenidoPaginaArriba = !this.contenidoPaginaArriba;
    }
  }

  visitaDetalle() {
    if (!this.vuelveDeDetalle) {
      this.vuelveDeDetalle = !this.vuelveDeDetalle;
    }
  }

  // CADA VEZ QUE SE EJECUTA ESTA FUNCION, SI VUELVE DE DETALLE, RECARGA OFERTAS
  ngAfterViewChecked() {
    if (this.vuelveDeDetalle) {
      this.recargaOfertas();
      this.vuelveDeDetalle = !this.vuelveDeDetalle;      
    }
  }
}
