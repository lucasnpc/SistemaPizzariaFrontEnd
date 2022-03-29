import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Gain } from '../models/gain.model';
import { Expense } from '../models/expense.model';

@Injectable()
export class CaixaService {
  getEntradas = environment.url + 'caixa/getEntradas';
  getSaidas = environment.url + 'caixa/getSaidas';
  postEntrada = environment.url + 'caixa/postEntrada';
  postSaida = environment.url + 'caixa/postSaida';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getInflows() {
    return this.httpClient.get<{ data: Gain[] }>(this.getEntradas);
  }
  getExpenses() {
    return this.httpClient.get<{ data: Expense[] }>(this.getSaidas);
  }
  postInflow(entrada: any) {
    return this.httpClient.post<any>(
      this.postEntrada,
      entrada,
      this.httpOptions
    );
  }
  postExpense(saida: any) {
    return this.httpClient.post<any>(this.postSaida, saida, this.httpOptions);
  }
}
