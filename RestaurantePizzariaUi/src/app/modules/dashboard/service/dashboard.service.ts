import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Order } from '../models/order.model';

const getPedidosTotal = environment.url + 'dashboard/getPedidosTotal'
const getPedidosAtivos = environment.url + 'dashboard/getPedidosAtivos';
const getPedidosConcluidos = environment.url + 'dashboard/getPedidosConcluidos'

const getMenuTopItens = environment.url + 'dashboard/getMenuTopItens';
const getMesasTopVendas = environment.url + 'dashboard/getMesasTopVendas';

const getTotalEntradas = environment.url + 'dashboard/getTotalEntradas';
const getTotalSaidas = environment.url + 'dashboard/getTotalSaidas';

const postAtualizaPedidoAtivoConcluido = environment.url + 'dashboard/postAtualizaPedidoAtivoConcluido';

@Injectable()
export class DashboardService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) { }

  getTotalOrders(cnpj: string) {
    return this.httpClient.get<{ data: Order[] }>(getPedidosTotal, { params: { businessCnpj: cnpj } })
  }

  getActiveOrders(cnpj: string) {
    return this.httpClient.get<{ data: Order[] }>(getPedidosAtivos, { params: { businessCnpj: cnpj } })
  }

  getConcludedOrders(cnpj: string) {
    return this.httpClient.get<{ data: Order[] }>(getPedidosConcluidos, { params: { businessCnpj: cnpj } })
  }

  getTopMenuItems(cnpj: string) {
    return this.httpClient.get<{ data: any[] }>(getMenuTopItens, { params: { businessCnpj: cnpj } });
  }

  getTopSalesDesks(cnpj: string) {
    return this.httpClient.get<{ data: any[] }>(getMesasTopVendas, { params: { businessCnpj: cnpj } });
  }

  getTotalGains(cnpj: string) {
    return this.httpClient.get<{ data: number }>(getTotalEntradas, { params: { businessCnpj: cnpj } });
  }

  getTotalExpenses(cnpj: string) {
    return this.httpClient.get<{ data: number }>(getTotalSaidas, { params: { businessCnpj: cnpj } });
  }

  updateActiveOrderToConcluded(id: any) {
    return this.httpClient.post<any>(postAtualizaPedidoAtivoConcluido, id, this.httpOptions)
  }

}
