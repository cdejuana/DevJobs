import { Component } from '@angular/core';
import { OfertasService} from '../servicios/ofertas.service';
import { Busqueda } from '../servicios/busqueda';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public suscripcionOfertas;
  public terminosbusqueda: string;
  public localizacion: string;
  public criterioDeBusqueda: Busqueda = {terminos: "", localizacion: ""};

  constructor(public ofertas: OfertasService) {
  }

  ngOnInit() {
  }

  public getResultados() {
    this.criterioDeBusqueda.terminos = this.terminosbusqueda;
    this.criterioDeBusqueda.localizacion = this.localizacion;
    this.suscripcionOfertas = this.ofertas.verOfertas(this.criterioDeBusqueda).subscribe( data => {      
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
