import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  login(user: any): Observable<any> {
    return this.http.post("https://reqres.in/api/login", user);
  }

  register(user: any): Observable<any> {
    return this.http.post("https://reqres.in/api/register", user);
  }

  setToken(token: string, recordar: boolean) {
    if(recordar){
      localStorage.setItem('token', token);
    } else {
      sessionStorage.setItem("token", token);
    }
  }
  getToken() {
    return localStorage.getItem("token");
  }

  cerrarSesion() {
    sessionStorage.removeItem("token");
    localStorage.removeItem('token');
  }

  // FALTARIA ACTUALIZAR DATOS DE USUARIO

}
