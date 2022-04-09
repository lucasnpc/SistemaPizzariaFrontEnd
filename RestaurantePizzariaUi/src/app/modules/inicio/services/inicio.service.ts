import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MenuItem } from '../../cardapio/models/menu-item.model';

@Injectable({
  providedIn: 'root'
})
export class InicioService {

  get = environment.url + 'itens/getItem';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) { }

  public getItens(cnpj: string) {
    return this.httpClient.get<{ data: MenuItem[] }>(this.get, { params: { businessCnpj: cnpj } });
  }
}
