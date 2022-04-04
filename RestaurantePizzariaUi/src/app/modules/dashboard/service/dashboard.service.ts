import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Order } from '../models/order.model';

@Injectable()
export class DashboardService {

  getPedidosTotal = environment.url + 'dashboard/getPedidosTotal'
  getPedidosAtivos = environment.url + 'dashboard/getPedidosAtivos';
  getPedidosConcluidos = environment.url + 'dashboard/getPedidosConcluidos'

  getMenuTopItens = environment.url + 'caixa/getTopMenuItems';
  getMesasTopVendas = environment.url + 'caixa/getTopSalesDesks';

  getTotalEntradas = environment.url + 'dashboard/getTotalEntradas';
  getTotalSaidas = environment.url + 'dashboard/getTotalSaidas';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) { }

  getTotalOrders() {
    return this.httpClient.get<{ data: number }>(this.getPedidosTotal)
  }

  getActiveOrders() {
    return this.httpClient.get<{ data: Order[] }>(this.getPedidosAtivos)
  }

  getConcludedOrders() {
    return this.httpClient.get<{ data: Order[] }>(this.getPedidosConcluidos)
  }

  getTopMenuItems() {
    return this.httpClient.get<{ data: any[] }>(this.getMenuTopItens);
  }

  getTopSalesDesks() {
    return this.httpClient.get<{ data: any[] }>(this.getMesasTopVendas);
  }

  getTotalGains(){
    return this.httpClient.get<{data: number}>(this.getTotalEntradas);
  }

  getTotalExpenses(){
    return this.httpClient.get<{data: number}>(this.getTotalSaidas);
  }

}
