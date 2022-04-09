import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MenuItem } from '../../cardapio/models/menu-item.model';
import { Order } from '../../dashboard/models/order.model';

@Injectable({
  providedIn: 'root'
})
export class InicioService {

  get = environment.url + 'itens/getItem';
  postPedido = environment.url + 'inicio/postPedido'
  postPedidoItens = environment.url + 'inicio/postPedidoItens'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) { }

  public getItems(cnpj: string) {
    return this.httpClient.get<{ data: MenuItem[] }>(this.get, { params: { businessCnpj: cnpj } });
  }

  public postOrder(order: any) {
    return this.httpClient.post<any>(this.postPedido, order, this.httpOptions)
  }

  public postOrderMenuItems(orderMenuItems: any) {
    return this.httpClient.post<any>(this.postPedidoItens, orderMenuItems, this.httpOptions)
  }

}
