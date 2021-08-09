import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Funcionario } from '../models/funcionarios.model';

@Injectable()
export class FuncionarioService {
  getFuncionarios = environment.url + 'funcionarios/getFuncionarios';
  postFuncionario = environment.url + 'funcionarios/postFuncionario';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getEmployees() {
    return this.httpClient.get<{ data: Funcionario[] }>(this.getFuncionarios);
  }
  postEmployee(cliente: Funcionario) {
    return this.httpClient.post<any>(
      this.postFuncionario,
      cliente,
      this.httpOptions
    );
  }
}
