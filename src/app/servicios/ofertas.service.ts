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
  public ofertasPaginadas: OfertasPaginadas = null;
  private auxOfertasPaginadas: OfertasPaginadas = null;

  constructor(private http: HttpClient) { }

  public verOfertas(busqueda: Busqueda): Observable<OfertasPaginadas>{
    return this.http.get<OfertasPaginadas>(`http://127.0.0.1:8000/api/verOfertas`);
  }

  public guardaOfertas(ofertas: OfertasPaginadas) {
    this.ofertasPaginadas = ofertas;
  }

  public siguientePaginadeOfertas(): Observable<OfertasPaginadas>{  
    return this.http.get<OfertasPaginadas>(this.ofertasPaginadas.next_page_url);
  }

  public borraOfertas() {
    this.ofertasPaginadas = null;
  }
}
