import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Entrada } from '../models/entrada.model';
import { Saida } from '../models/saida.venda';

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
    return this.httpClient.get<{ data: Entrada[] }>(this.getEntradas);
  }
  getExpenses() {
    return this.httpClient.get<{ data: Saida[] }>(this.getSaidas);
  }
  postInflow(entrada: Entrada) {
    return this.httpClient.post<any>(
      this.postEntrada,
      entrada,
      this.httpOptions
    );
  }
  postExpense(saida: Saida) {
    return this.httpClient.post<any>(this.postSaida, saida, this.httpOptions);
  }
}
