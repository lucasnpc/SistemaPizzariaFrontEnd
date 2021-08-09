import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Usuario } from '../../login/models/usuario.model';
import { Negocio } from '../models/negocio.model';

@Injectable()
export class CadastroService {
  getNegocio = environment.url + 'negocios/getNegocio';
  postNegocio = environment.url + 'negocios/postNegocio';
  postUsuario = environment.url + 'usuario/postUsuario';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getBusiness() {
    return this.httpClient.get<{ data: Negocio[] }>(this.getNegocio);
  }
  postBusiness(negocio: Negocio) {
    return this.httpClient.post<any>(
      this.postNegocio,
      negocio,
      this.httpOptions
    );
  }
  postUser(usuario: Usuario) {
    return this.httpClient.post<any>(
      this.postUsuario,
      usuario,
      this.httpOptions
    );
  }
}
