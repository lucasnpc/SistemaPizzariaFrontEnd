import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../../login/models/usuario.model';
import { Business } from '../models/negocio.model';

@Injectable()
export class CadastroService {
  postNegocio = environment.url + 'negocios/postNegocio';
  postUsuario = environment.url + 'usuario/postUsuario';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) { }

  postBusiness(negocio: Business) {
    return this.httpClient.post<any>( 
      this.postNegocio,
      negocio,
      this.httpOptions
    );
  }
  postUser(usuario: User) {
    return this.httpClient.post<any>(
      this.postUsuario,
      usuario,
      this.httpOptions
    );
  }
}
