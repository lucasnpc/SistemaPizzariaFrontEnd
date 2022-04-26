import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Provider } from '../../fornecedores/models/provider.model';
import { Product } from '../models/product.model';

@Injectable()
export class ComprasService {
  getProdutos = environment.url + 'produtos/getProdutos';
  postProduto = environment.url + 'produtos/postProduto';
  postCompra = environment.url + 'compras/postCompra'

  getFornecedores = environment.url + 'fornecedores/getFornecedores';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private httpClient: HttpClient) { }

  getProducts(cnpj: string) {
    return this.httpClient.get<{ data: Product[] }>(this.getProdutos, { params: { businessCnpj: cnpj } })
  }

  getProviders(cnpj: string) {
    return this.httpClient.get<{ data: Provider[] }>(this.getFornecedores, { params: { businessCnpj: cnpj } });
  }

  postProduct(product: Product) {
    return this.httpClient.post<any>(this.postProduto, product, this.httpOptions)
  }

  postPurchase(purchase: any) {
    return this.httpClient.post<any>(this.postCompra, purchase, this.httpOptions)
  }
}
