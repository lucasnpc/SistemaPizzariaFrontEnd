import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Usuario } from "../Model/usuario.model";

@Injectable({
  providedIn: 'root'
})

export class UserService
{
  authUsers = "http://localhost:5000/users/authUser";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient
  ) { }


  public authUser(usuario: any): Observable<Usuario>{
    return this.httpClient.post<any>(this.authUsers, usuario, this.httpOptions);
  }
}