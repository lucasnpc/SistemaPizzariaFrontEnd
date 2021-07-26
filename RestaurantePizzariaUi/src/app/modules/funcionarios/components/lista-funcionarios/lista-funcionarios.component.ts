import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface Funcionario {
  cpf: String;
  nome: String;
  rua: String;
  numero: String;
  bairro: String;
  cidade: String;
  telefone: String;
  cargo: String;
  data_admissao: number;
  data_nascimento: number;
}

const ELEMENT_DATA: Funcionario[] = [
  {
    cpf: '123.456.789-50',
    nome: 'Hydrogen',
    rua: 'Rua Lucas',
    numero: '121',
    bairro: 'Cidade Alta',
    cidade: 'Campos',
    telefone: '(12)91822-9090',
    cargo: 'Garçom',
    data_admissao: Date.now(),
    data_nascimento: Date.now(),
  },
  {
    cpf: '123.123.789-50',
    nome: 'Oxygen',
    rua: 'Rua Julio',
    numero: '5432',
    bairro: 'Cidade Baixa',
    cidade: 'Campos',
    telefone: '(12)12314-9090',
    cargo: 'Garçom',
    data_admissao: Date.now(),
    data_nascimento: Date.now(),
  },
  {
    cpf: '332.456.789-50',
    nome: 'Hyperyx',
    rua: 'Avenida Lucas',
    numero: '333',
    bairro: 'Cidade Alta',
    cidade: 'Campos',
    telefone: '(12)91822-3490',
    cargo: 'Atendente',
    data_admissao: Date.now(),
    data_nascimento: Date.now(),
  },
  {
    cpf: '123.456.789-12',
    nome: 'Spaceyx',
    rua: 'Rua Lucas',
    numero: '121',
    bairro: 'Cidade Média',
    cidade: 'Campos',
    telefone: '(12)12235-9090',
    cargo: 'Atendente',
    data_admissao: Date.now(),
    data_nascimento: Date.now(),
  },
  {
    cpf: '123.456.542-50',
    nome: 'Manga Livre',
    rua: 'Rua Matheus',
    numero: '645',
    bairro: 'Cidade Alta',
    cidade: 'Campos',
    telefone: '(12)98722-9090',
    cargo: 'Garçom',
    data_admissao: Date.now(),
    data_nascimento: Date.now(),
  },
];

@Component({
  selector: 'rp-lista-funcionarios',
  templateUrl: './lista-funcionarios.component.html',
  styleUrls: ['./lista-funcionarios.component.less'],
})
export class ListaFuncionariosComponent implements OnInit {
  @Input() filterEvent: Event;
  filterValue: String;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges() {
    if (this.filterEvent != null) this.applyFilter(this.filterEvent);
  }

  displayedColumns: string[] = [
    'cpf',
    'nome',
    'rua',
    'numero',
    'bairro',
    'cidade',
    'telefone',
    'cargo',
    'data_admissao',
    'data_nascimento',
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    this.filterValue = (event.target as HTMLInputElement).value.toString();
    this.dataSource.filter = this.filterValue.trim().toLowerCase();
  }
}
