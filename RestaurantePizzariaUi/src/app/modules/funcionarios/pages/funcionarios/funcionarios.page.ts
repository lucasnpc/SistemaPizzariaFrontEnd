import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { BusinessStorage } from 'src/app/core/utils/business-storage';
import { BUSINESS_CNPJ } from 'src/app/core/utils/constants';
import { DialogAddInFuncionariosComponent } from '../../components/dialog-add-in-funcionarios/dialog-add-in-funcionarios.component';
import { Employee } from '../../models/employee.model';
import { FuncionarioService } from '../../service/funcionario.service';

@Component({
  templateUrl: './funcionarios.page.html',
  styleUrls: ['./funcionarios.page.less'],
})
export class FuncionariosPage implements OnInit {
  filterEvent: Event;
  filterValue: String;
  funcionarios: Employee[];
  dataSource: any;
  clickedRow: Employee;

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

  constructor(private dialog: MatDialog, private rest: FuncionarioService, private storage: BusinessStorage) { }

  ngOnInit(): void {
    this.getEmployees()
  }

  ngOnChanges() {
    if (this.filterEvent != null) this.applyFilter(this.filterEvent);
  }

  getEmployees() {
    this.rest.getEmployees(this.storage.get(BUSINESS_CNPJ)).subscribe((result) => {
      if (result) {
        this.funcionarios = result.data;
        this.dataSource = new MatTableDataSource(this.funcionarios);
      }
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogAddInFuncionariosComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result)
        this.getEmployees()
    });
  }

  applyFilter(event: Event) {
    this.filterValue = (event.target as HTMLInputElement).value.toString();
    this.dataSource.filter = this.filterValue.trim().toLowerCase();
  }

  setRow(row: Employee) {
    this.formatDate(row.admissionDate);
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
