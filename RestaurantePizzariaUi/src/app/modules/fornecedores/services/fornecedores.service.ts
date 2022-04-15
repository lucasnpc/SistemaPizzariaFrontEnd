import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Provider } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FornecedoresService {

  getFornecedores = environment.url + 'fornecedores/getFornecedores';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) { }

  getProviders(cnpj: string) {
    return this.httpClient.get<{ data: Provider[] }>(this.getFornecedores, { params: { businessCnpj: cnpj } });
  }
}
