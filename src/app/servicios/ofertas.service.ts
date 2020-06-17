import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfertasService {

  constructor(private http: HttpClient) { }

  getOfertas(){
    return this.http.get("https://reqres.in/api/users?page=2");
  }
}
