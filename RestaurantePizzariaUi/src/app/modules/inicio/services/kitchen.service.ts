import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class KitchenService {

  getPedidosEnviados = environment.url + 'cozinha/getPedidosEnviados'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) { }

  getSentClientOrders() {
    return this.httpClient.get<{ data: any[] }>(this.getPedidosEnviados);
  }
}
