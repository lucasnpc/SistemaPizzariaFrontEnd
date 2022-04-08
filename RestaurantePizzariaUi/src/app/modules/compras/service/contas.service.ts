import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ContaAPagar } from '../models/contas-pagar.model';
import { ContaAReceber } from '../models/contas-receber.model';

@Injectable()
export class ContasService {
  getContasAPagar = environment.url + 'contas/getContasAPagar';
  getContasAReceber = environment.url + 'contas/getContasAReceber';
  postContasAPagar = environment.url + 'contas/postContasAPagar';
  postContasAReceber = environment.url + 'contas/postContasAReceber';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private httpClient: HttpClient) {}

  getBillsToPay() {
    return this.httpClient.get<{ data: ContaAPagar[] }>(this.getContasAPagar);
  }
  getBillsToReceive() {
    return this.httpClient.get<{ data: ContaAReceber[] }>(
      this.getContasAReceber
    );
  }
  postBillToPay(contaAPagar: any) {
    return this.httpClient.post<any>(
      this.postContasAPagar,
      contaAPagar,
      this.httpOptions
    );
  }
  postBillToReceive(contaAReceber: any) {
    return this.httpClient.post<any>(
      this.postContasAReceber,
      contaAReceber,
      this.httpOptions
    );
  }
}
