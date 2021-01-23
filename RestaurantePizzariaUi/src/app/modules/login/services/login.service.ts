import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginModel } from '../models/login.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class LoginService {
  authUsers = environment.url + "users/authUser";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  public authUser(login: LoginModel){
      return this.httpClient.post<any>(this.authUsers, login, this.httpOptions);
  }
}
