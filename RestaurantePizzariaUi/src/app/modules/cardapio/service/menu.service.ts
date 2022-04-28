import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../../compras/models/product.model';
import { MenuItem } from '../models/menu-item.model';

@Injectable({
  providedIn: 'root'
})
export class CardapioService {
  get = environment.url + 'itens/getItem';
  getProdutos = environment.url + 'produtos/getProdutos';

  post = environment.url + 'itens/postItem';
  postProdutoItem = environment.url + 'itens/postProdutoItem'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) { }

  public getItens(cnpj: string) {
    return this.httpClient.get<{ data: MenuItem[] }>(this.get, { params: { businessCnpj: cnpj } });
  }

  getProducts(cnpj: string) {
    return this.httpClient.get<{ data: Product[] }>(this.getProdutos, { params: { businessCnpj: cnpj } })
  }

  public postItem(item: any) {
    return this.httpClient.post<any>(this.post, item, this.httpOptions);
  }
  postMenuItemProduct(productMenuItem: any) {
    return this.httpClient.post<any>(this.postProdutoItem, productMenuItem, this.httpOptions);
  }
}
