import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Usuario } from '../usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  PHP_API_SERVER = "http://127.0.0.1:3306";

  constructor(private http: HttpClient) { }

  public login(user: any): Observable<any> {
    return this.http.post("https://reqres.in/api/login", user);
  }

  public register(user: any): Observable<any> {
    return this.http.post("https://reqres.in/api/register", user);
  }

  // AQUI ES POSIBLE QUE TENGAMOS QUE USAR JSON.STRINGIFY()
  public setToken(token: string, recordar: boolean) {
    if(recordar){
      localStorage.setItem('token', token);
    } else {
      sessionStorage.setItem("token", token);
    }
  }
  
  // Y AQUI JSON.PARSE()
  public getToken() {
    return localStorage.getItem("token");
  }

  public cerrarSesion() {
    sessionStorage.removeItem("token");
    localStorage.removeItem('token');
  }

  // FALTARIA ACTUALIZAR DATOS DE USUARIO

}
