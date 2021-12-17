import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class DashboardService {
  getMenuTopItens = environment.url + 'caixa/getTopMenuItems';
  getMesasTopVendas = environment.url + 'caixa/getTopSalesDesks';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getTopMenuItems() {
    return this.httpClient.get<{ data: any[] }>(this.getMenuTopItens);
  }

  getTopSalesDesks() {
    return this.httpClient.get<{ data: any[] }>(this.getMesasTopVendas);
  }
}
