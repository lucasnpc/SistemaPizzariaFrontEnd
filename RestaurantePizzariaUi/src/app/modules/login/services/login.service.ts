import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class LoginService {
  authUsers = 'https://192.168.100.6:5000/users/authUser';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  public authUser(usuario: any){
      return this.httpClient.post<any>(this.authUsers, usuario, this.httpOptions).subscribe();
  }
}
