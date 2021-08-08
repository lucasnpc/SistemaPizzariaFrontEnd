import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../models/usuario.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class LoginService {
  authUsers = environment.url + "usuarios/authUsuarios";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  public authUser(login: Usuario){
      return this.httpClient.post<any>(this.authUsers, login, this.httpOptions);
  }
}
