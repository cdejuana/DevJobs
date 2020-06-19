import { Component, OnInit, OnDestroy } from '@angular/core';
import { OfertasService} from '../servicios/ofertas.service';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Busqueda } from '../servicios/busqueda';

@Component({
  selector: 'app-bienvenida-inicio',
  templateUrl: './bienvenida-inicio.page.html',
  styleUrls: ['./bienvenida-inicio.page.scss'],
})
export class BienvenidaInicioPage implements OnInit, OnDestroy {

  public listaUsuarios: Array<any>;
  public suscripcionOfertas;
  public terminosbusqueda: string;
  public localizacion: string;
  public criterioDeBusqueda: Busqueda;

  constructor(public ofertas: OfertasService) {
  }

  ngOnInit() {
  }

  // public getResultados() {
  //   this.suscripcionOfertas = this.ofertas.getOfertas().subscribe( data => {
      
  //     data.data.forEach(element => {
  //       console.log("ID: " + element.id);
  //       console.log("Email: " + element.email);
  //       console.log("First Name: " + element.first_name);
  //     });
  //     // console.log(data.data);
  //   },
  //   error => {
  //     console.log(error);
  //   });    
  // }

  public getResultados(form: NgForm) {
    // this.criterioDeBusqueda.terminos = this.terminosbusqueda;
    // this.criterioDeBusqueda.localizacion = this.localizacion;
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
