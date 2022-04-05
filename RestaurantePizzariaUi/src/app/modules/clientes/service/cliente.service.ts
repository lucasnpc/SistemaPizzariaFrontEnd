import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Client } from '../models/client.model';

@Injectable()
export class ClienteService {
  getClientes = environment.url + 'clientes/getClientes';
  postCliente = environment.url + 'clientes/postCliente';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) { }

  getCustomers(cnpj: string) {
    return this.httpClient.get<{ data: Client[] }>(this.getClientes, { params: {businessCnpj: cnpj} });
  }
  postCustomer(cliente: any) {
    return this.httpClient.post<any>(
      this.postCliente,
      cliente,
      this.httpOptions
    );
  }
}
