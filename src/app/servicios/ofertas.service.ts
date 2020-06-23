import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Oferta } from '../oferta';
import { Busqueda } from './busqueda';

@Injectable({
  providedIn: 'root'
})
export class OfertasService {
  PHP_API_SERVER = "localhost:3306";
  public listadoOfertas: Array<Oferta> = new Array<Oferta>();

  constructor(private http: HttpClient) { }

  // public getOfertas(): Observable<any> {
  //   return this.http.get("https://reqres.in/api/users?page=2");
  // }

  public verOfertas(busqueda: Busqueda): Observable<Oferta[]>{
    return this.http.get<Oferta[]>(`http://localhost:80/api/read_ofertas.php?terminos=` + busqueda.terminos + `&localizacion=` + busqueda.localizacion);
  }

  public guardaListaOfertas(ofertas) {
    for (let oferta of ofertas) {
      this.listadoOfertas.push(oferta);
    }
  }
}
