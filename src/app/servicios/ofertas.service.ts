import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { OfertasPaginadas } from "../ofertas-paginadas";
import { Busqueda } from './busqueda';

@Injectable({
  providedIn: 'root'
})
export class OfertasService {
  PHP_API_SERVER = "localhost:3306";
  public listadoOfertas: Array<any> = new Array<any>();

  constructor(private http: HttpClient) { }

  public verOfertas(busqueda: Busqueda): Observable<OfertasPaginadas>{  
    return this.http.get<OfertasPaginadas>(`http://127.0.0.1:8000/api/verOfertas`);
  }

  public guardaListaOfertas(ofertas) {
    for (let oferta of ofertas) {
      this.listadoOfertas.push(oferta);
    }
  }

  public borraOfertas() {
    this.listadoOfertas.length = 0;
  }
}
