import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Provider } from '../models/provider.model';

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {

  getFornecedores = environment.url + 'fornecedores/getFornecedores';
  postFornecedor = environment.url + 'fornecedores/postFornecedor'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) { }

  getProviders(cnpj: string) {
    return this.httpClient.get<{ data: Provider[] }>(this.getFornecedores, { params: { businessCnpj: cnpj } });
  }

  postProvider(provider: Provider) {
    return this.httpClient.post<any>(this.postFornecedor, provider, this.httpOptions)
  }
}
