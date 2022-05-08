import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const getPedidosEnviados = environment.url + 'cozinha/getPedidosEnviados'

@Injectable({
  providedIn: 'root'
})
export class KitchenService {


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) { }

  getSentClientOrders() {
    return this.httpClient.get<{ data: any[] }>(getPedidosEnviados);
  }
}
