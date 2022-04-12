import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class ContasService {
  getContasAPagar = environment.url + 'contas/getContasAPagar';
  getContasAReceber = environment.url + 'contas/getContasAReceber';
  postContasAPagar = environment.url + 'contas/postContasAPagar';
  postContasAReceber = environment.url + 'contas/postContasAReceber';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private httpClient: HttpClient) {}


}
