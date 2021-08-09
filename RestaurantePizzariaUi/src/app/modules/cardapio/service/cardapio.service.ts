import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ItemCardapioModel } from '../models/item-cardapio.model';

@Injectable()
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

  public getItens(){
    return this.httpClient.get<{data: ItemCardapioModel[]}>(this.get);
  }

  public getItensCount(){
    return this.httpClient.get<{data: number}>(this.getItemCount);
  }

  public postItem(item: any) {
    return this.httpClient.post<any>(this.post, item, this.httpOptions);
  }
}
