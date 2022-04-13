import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MenuItem } from '../../cardapio/models/menu-item.model';

@Injectable({
  providedIn: 'root'
})
export class InicioService {

  get = environment.url + 'itens/getItem';
  getItensComPedidoId = environment.url + 'inicio/getItensComPedidoId';
  postPedido = environment.url + 'inicio/postPedido'
  postPedidoItens = environment.url + 'inicio/postPedidoItens'
  updatePedidoItens = environment.url + 'inicio/updatePedidoItens'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) { }

  public getItems(cnpj: string) {
    return this.httpClient.get<{ data: MenuItem[] }>(this.get, { params: { businessCnpj: cnpj } });
  }

  public getItemsWithOrderId(id: string) {
    return this.httpClient.get<{ data: MenuItem[] }>(this.getItensComPedidoId, { params: { orderId: id } });
  }

  public postOrder(order: any) {
    return this.httpClient.post<any>(this.postPedido, order, this.httpOptions)
  }

  public postOrderMenuItems(orderMenuItems: any) {
    return this.httpClient.post<any>(this.postPedidoItens, orderMenuItems, this.httpOptions)
  }

  public updateOrderMenuItems(orderMenuItems: any) {
    return this.httpClient.post<any>(this.updatePedidoItens, orderMenuItems, this.httpOptions)
  }

}
