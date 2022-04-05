import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BusinessStorage } from 'src/app/core/utils/business-storage';
import { Employee } from '../../models/employee.model';
import { FuncionarioService } from '../../service/funcionario.service';

@Component({
  selector: 'rp-lista-funcionarios',
  templateUrl: './lista-funcionarios.component.html',
  styleUrls: ['./lista-funcionarios.component.less'],
})
export class ListaFuncionariosComponent implements OnInit {
  @Input() filterEvent: Event;
  filterValue: String;
  funcionarios: Employee[];
  dataSource: any;
  clickedRow: Employee;

  constructor(private rest: FuncionarioService, private storage: BusinessStorage) { }

  ngOnInit(): void {
    this.rest.getEmployees(this.storage.get("businessCnpj")).subscribe((result) => {
      this.funcionarios = result.data;
      this.dataSource = new MatTableDataSource(this.funcionarios);
    });
  }

  ngOnChanges() {
    if (this.filterEvent != null) this.applyFilter(this.filterEvent);
  }

  displayedColumns: string[] = [
    'CPF',
    'Nome',
    'Rua',
    'Número',
    'Bairro',
    'Cidade',
    'Telefone',
    'Cargo',
    'Data de Admissao',
    'Data de Nascimento',
  ];

  applyFilter(event: Event) {
    this.filterValue = (event.target as HTMLInputElement).value.toString();
    this.dataSource.filter = this.filterValue.trim().toLowerCase();
  }

  setRow(row: Employee) {
    console.log(this.formatDate(row.admissionDate));
    this.clickedRow = row;
  }

  formatDate(date: Date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [day, month, year].join('-');
  }
}
