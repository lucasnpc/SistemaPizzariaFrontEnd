import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pizzaria } from '../Model/pizzaria.model';
import { Usuario } from '../Model/usuario.model';

@Injectable({
  providedIn: 'root'
})

//Módulo Clientes Fidelizados
export class ClienteFiel{
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient
  ) { }
}

//Módulo Clientes não fidelizados
export class ClienteNaoFielService{
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient
  ) { }
}

//Módulo Comanda
export class ComandaService{
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient
  ) { }
}

//Módulo Contas a pagar
export class ContasAPagarService{
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient
  ) { }
}

//Módulo Contas a Receber
export class ContasAReceberService{
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient
  ) { }
}

//Módulo Fornecedores
export class FornecedorService{
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient
  ) { }
}

//Módulo Funcionarios
export class FuncionarioService
{
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient
  ) { }
}

//Módulo Itens
export class ItensService{
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient
  ) { }
}

//Módulo Pedidos
export class PedidoService{
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient
  ) { }
}

//Módulo Negócio
export class NegocioService {

  negocioPostUrl =    "http://localhost:5000/pizzarias/post";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  

  public postNegocios(pizzarias: any): Observable<Pizzaria>{
    return this.httpClient.post<any>(this.negocioPostUrl, pizzarias, this.httpOptions);
  }
}

//Módulo Produtos
export class ProdutoService{
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient
  ) { }
}

//Módulo Usuarios
export class UserService
{
  authUsers =     "http://localhost:5000/user/authUser";

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

//Módulo Vendas
export class VendaService{
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient
  ) { }
}

//Módulo Notificações WPP
export class WhatsAppService{
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient
  ) { }
}