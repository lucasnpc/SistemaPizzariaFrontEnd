import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Client } from '../models/client.model';

@Injectable()
export class ClienteService {

  getClientes = environment.url + 'clientes/getClientes';
  postCliente = environment.url + 'clientes/postCliente';
  putCliente = environment.url + 'clientes/putCliente';
  deleteCliente = environment.url + 'clientes/deleteCliente';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) { }

  getCustomers(cnpj: string) {
    return this.httpClient.get<{ data: Client[] }>(this.getClientes, { params: { businessCnpj: cnpj } });
  }
  postCustomer(client: Client) {
    return this.httpClient.post<any>(
      this.postCliente,
      client,
      this.httpOptions
    );
  }
  updateCustomer(client: Client) {
    return this.httpClient.put<any>(
      this.putCliente,
      client,
      this.httpOptions
    );
  }
  deleteCustomer(clientId: any) {
    return this.httpClient.delete<any>(this.deleteCliente, { params: { id: clientId } })
  }
}
