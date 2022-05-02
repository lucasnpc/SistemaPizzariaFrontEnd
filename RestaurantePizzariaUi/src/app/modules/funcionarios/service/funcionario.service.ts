import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/employee.model';

@Injectable()
export class FuncionarioService {
  getFuncionarios = environment.url + 'funcionarios/getFuncionarios';
  postFuncionario = environment.url + 'funcionarios/postFuncionario';
  putFuncionario = environment.url + 'funcionarios/putFuncionario'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) { }

  getEmployees(cnpj: string) {
    return this.httpClient.get<{ data: Employee[] }>(this.getFuncionarios, { params: { businessCnpj: cnpj } });
  }
  postEmployee(employee: Employee) {
    return this.httpClient.post<any>(
      this.postFuncionario,
      employee,
      this.httpOptions
    );
  }

  updateEmployee(employee: Employee) {
    return this.httpClient.put<any>(this.putFuncionario, employee, this.httpOptions)
  }
}
