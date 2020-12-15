import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pizzaria } from '../Model/pizzaria.model';

@Injectable({
  providedIn: 'root'
})

export class NegocioService {

  negocioPostUrl =    "http://localhost:5000/negocios/post";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  

  public postNegocios(pizzarias: any): Observable<Pizzaria>{
    return this.httpClient.post<any>(this.negocioPostUrl, pizzarias, this.httpOptions);
  }
}