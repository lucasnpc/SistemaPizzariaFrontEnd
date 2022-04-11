import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Order } from '../models/order.model';

@Injectable()
export class DashboardService {

  getPedidosTotal = environment.url + 'dashboard/getPedidosTotal'
  getPedidosAtivos = environment.url + 'dashboard/getPedidosAtivos';
  getPedidosConcluidos = environment.url + 'dashboard/getPedidosConcluidos'

  getMenuTopItens = environment.url + 'dashboard/getMenuTopItens';
  getMesasTopVendas = environment.url + 'dashboard/getMesasTopVendas';

  getTotalEntradas = environment.url + 'dashboard/getTotalEntradas';
  getTotalSaidas = environment.url + 'dashboard/getTotalSaidas';

  postAtualizaPedidoAtivoConcluido = environment.url + 'dashboard/postAtualizaPedidoAtivoConcluido';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) { }

  getTotalOrders(cnpj: string) {
    return this.httpClient.get<{ data: Order[] }>(this.getPedidosTotal, { params: { businessCnpj: cnpj } })
  }

  getActiveOrders(cnpj: string) {
    return this.httpClient.get<{ data: Order[] }>(this.getPedidosAtivos, { params: { businessCnpj: cnpj } })
  }

  getConcludedOrders(cnpj: string) {
    return this.httpClient.get<{ data: Order[] }>(this.getPedidosConcluidos, { params: { businessCnpj: cnpj } })
  }

  getTopMenuItems(cnpj: string) {
    return this.httpClient.get<{ data: any[] }>(this.getMenuTopItens, { params: { businessCnpj: cnpj } });
  }

  getTopSalesDesks(cnpj: string) {
    return this.httpClient.get<{ data: any[] }>(this.getMesasTopVendas, { params: { businessCnpj: cnpj } });
  }

  getTotalGains(cnpj: string) {
    return this.httpClient.get<{ data: number }>(this.getTotalEntradas, { params: { businessCnpj: cnpj } });
  }

  getTotalExpenses(cnpj: string) {
    return this.httpClient.get<{ data: number }>(this.getTotalSaidas, { params: { businessCnpj: cnpj } });
  }

  updateActiveOrderToConcluded(id: any) {
    return this.httpClient.post<any>(this.postAtualizaPedidoAtivoConcluido, id, this.httpOptions)
  }

}
