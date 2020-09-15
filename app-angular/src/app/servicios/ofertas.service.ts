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

  public verOfertas(busqueda: Busqueda): Observable<Oferta[]>{
    // return this.http.get<OfertasPaginadas>(`http://127.0.0.1:3000/api/buscar/` + busqueda.terminos);
    return this.http.get<Oferta[]>('http://127.0.0.1:3000/api/ofertas');
  }

  public guardaOfertasPaginadas(ofertas: Oferta[]) {
    // this.ofertasPaginadas = ofertas;
    // this.ofertasCargadas = this.ofertasPaginadas.data;
    this.ofertasCargadas = ofertas;
  }

  public siguientePaginadeOfertas(): Observable<Oferta[]>{  
    return this.http.get<Oferta[]>(this.ofertasPaginadas.next_page_url);
  }

  public recargaPaginadeOfertas(): Observable<Oferta[]>{  
    return this.http.get<Oferta[]>(this.ofertasPaginadas.first_page_url);
  }

  public guardarOfertasCargadas(ofertasSiguientes: Oferta[]) {
    this.ofertasCargadas = ofertasSiguientes;
  }

  public borraOfertas() {
    this.ofertasPaginadas = null;
  }
}
