import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pizzaria } from '../Model/pizzaria.model';
import { Usuario } from '../Model/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class PizzariaService {

  authUsers =     "http://localhost:5000/user/authUser";
  pizzariasPostUrl =    "http://localhost:5000/pizzarias/post";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  public authUser(usuario: any): Observable<Usuario>{
    return this.httpClient.post<any>(this.authUsers, usuario, this.httpOptions);
  }

  public postPizzarias(pizzarias: any): Observable<Pizzaria>{
    return this.httpClient.post<any>(this.pizzariasPostUrl, pizzarias, this.httpOptions);
  }


}
