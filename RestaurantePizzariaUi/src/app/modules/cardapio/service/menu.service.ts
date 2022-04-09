import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MenuItem } from '../models/menu-item.model';

@Injectable({
  providedIn: 'root'
})
export class CardapioService {
  post = environment.url + 'itens/postItem';
  get = environment.url + 'itens/getItem';
  getItemCount = environment.url + 'itens/getItemCount';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  public getItens(cnpj: string){
    return this.httpClient.get<{data: MenuItem[]}>(this.get, { params: {businessCnpj: cnpj} });
  }

  public getItensCount(cnpj: string){
    return this.httpClient.get<{data: number}>(this.getItemCount, { params: {businessCnpj: cnpj} });
  }

  public postItem(item: any) {
    return this.httpClient.post<any>(this.post, item, this.httpOptions);
  }
}
