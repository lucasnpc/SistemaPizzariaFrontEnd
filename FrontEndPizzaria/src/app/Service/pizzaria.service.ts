import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pizzaria } from '../Model/pizzaria.model';

@Injectable({
  providedIn: 'root'
})
export class PizzariaService {

  pizzariasGetUrl =     "http://localhost:5000/pizzarias";
  pizzariasPostUrl = "http://localhost:5000/pizzarias/post";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  public postPizzarias(pizzarias: any): Observable<Pizzaria>{
    return this.httpClient.post<any>(this.pizzariasPostUrl, pizzarias, this.httpOptions);
  }


}
