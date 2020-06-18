import { Component, OnInit, OnDestroy } from '@angular/core';
import { OfertasService} from '../servicios/ofertas.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bienvenida-inicio',
  templateUrl: './bienvenida-inicio.page.html',
  styleUrls: ['./bienvenida-inicio.page.scss'],
})
export class BienvenidaInicioPage implements OnInit, OnDestroy {

  public listaUsuarios: Array<any>;
  public suscripcionOfertas;

  constructor(public ofertas: OfertasService) { }

  ngOnInit() {
  }

  public getResultados() {
    this.suscripcionOfertas = this.ofertas.getOfertas().subscribe( data => {
      
      data.data.forEach(element => {
        console.log("ID: " + element.id);
        console.log("Email: " + element.email);
        console.log("First Name: " + element.first_name);
      });
      // console.log(data.data);
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
