import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { OfertasPaginadas } from "../ofertas-paginadas";
import { Busqueda } from './busqueda';
import { Oferta } from '../oferta';

@Injectable({
  providedIn: 'root'
})
export class OfertasService {
  PHP_API_SERVER = "localhost:3306";
  public ofertasPaginadas?: OfertasPaginadas = null;
  public ofertasCargadas: Oferta[] = null;

  constructor(private http: HttpClient) { }

  public verOfertas(busqueda: Busqueda): Observable<OfertasPaginadas>{
    return this.http.get<OfertasPaginadas>(`http://127.0.0.1:8001/api/verOfertas/` + busqueda.terminos);
  }

  public guardaOfertasPaginadas(ofertas: OfertasPaginadas) {
    this.ofertasPaginadas = ofertas;
    this.ofertasCargadas = this.ofertasPaginadas.data;
  }

  public siguientePaginadeOfertas(): Observable<OfertasPaginadas>{  
    return this.http.get<OfertasPaginadas>(this.ofertasPaginadas.next_page_url);
  }

  public recargaPaginadeOfertas(): Observable<OfertasPaginadas>{  
    return this.http.get<OfertasPaginadas>(this.ofertasPaginadas.first_page_url);
  }

  public guardarOfertasCargadas(ofertasSiguientes: Oferta[]) {
    this.ofertasCargadas = ofertasSiguientes;
  }

  public borraOfertas() {
    this.ofertasPaginadas = null;
  }
}
