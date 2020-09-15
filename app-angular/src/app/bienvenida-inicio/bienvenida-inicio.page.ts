import { Component, OnInit, OnDestroy } from '@angular/core';
import { OfertasService} from '../servicios/ofertas.service';
import { Busqueda } from '../servicios/busqueda';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bienvenida-inicio',
  templateUrl: './bienvenida-inicio.page.html',
  styleUrls: ['./bienvenida-inicio.page.scss'],
})
export class BienvenidaInicioPage implements OnInit, OnDestroy {

  public suscripcionOfertas;
  public terminosbusqueda: string;
  public localizacion: string;
  public criterioDeBusqueda: Busqueda = {terminos: "", localizacion: ""};

  constructor(public ofertas: OfertasService, public router: Router) {
  }

  ngOnInit() {    
  }

  public getResultados() {
    this.ofertas.borraOfertas();
    this.criterioDeBusqueda.terminos = this.terminosbusqueda;
    this.criterioDeBusqueda.localizacion = this.localizacion;
    this.suscripcionOfertas = this.ofertas.verOfertas(this.criterioDeBusqueda).subscribe( data => {      
      this.ofertas.guardaOfertasPaginadas(data);
      this.router.navigateByUrl("/resultados-busqueda");
      console.log(data);
    },
    error => {
      console.log(error);
    });
  }


  ngOnDestroy(): void {
    if (!this.suscripcionOfertas.closed) {
      this.suscripcionOfertas.unsubscribe();
    }    
  }
}
