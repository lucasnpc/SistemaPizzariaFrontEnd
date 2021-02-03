import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface Cliente {
  id_cliente: String;
  nome: String;
  rua: String;
  numero: String;
  bairro: String;
  cidade: String;
  telefone: String;
}

const ELEMENT_DATA: Cliente[] = [
  { id_cliente: '123.456.789-50', nome: 'Hydrogen', rua: 'Rua Lucas', numero: '121', bairro: 'Cidade Alta', cidade: 'Campos', telefone: '(12)91822-9090' },
  { id_cliente: '2', nome: 'Oxygen', rua: 'Rua Oxygen', numero: '112', bairro: 'Cidade Baixo', cidade: 'Campos', telefone: '(12)991232-9090' },
  { id_cliente: '3', nome: 'Nitrogen', rua: 'Rua Lucas', numero: '451', bairro: 'Bahamas', cidade: 'Campos', telefone: '(12)99822-9320' },
  { id_cliente: '443.223.112-54', nome: 'Hydrogen', rua: 'Rua Lucas', numero: '121', bairro: 'Cidade Alta', cidade: 'Campos', telefone: '(11)99822-9090' },
  { id_cliente: '5', nome: 'Heiliar', rua: 'Rua Nove', numero: '123', bairro: 'Play Hard', cidade: 'Campos', telefone: '(12)99822-9320' },
  { id_cliente: '6', nome: 'Metastase', rua: 'Rua Lucas', numero: '1241', bairro: 'PlayerUnckown', cidade: 'Campos', telefone: '(12)95822-9090' },
  { id_cliente: '7', nome: 'Barry Allen', rua: 'Rua Doze', numero: '1121', bairro: 'Cidade Alta', cidade: 'Campos', telefone: '(12)99122-9090' },
  { id_cliente: '8', nome: 'Lucão', rua: 'Rua do 71', numero: '1221', bairro: 'Cidade Alta', cidade: 'Campos', telefone: '(12)99822-9090' },
];

@Component({
  selector: 'rp-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.less']
})
export class ListaClientesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  displayedColumns: string[] = ['id_cliente', 'nome', 'rua','numero','bairro','cidade','telefone'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
