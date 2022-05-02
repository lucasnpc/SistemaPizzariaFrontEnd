import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { BusinessStorage } from 'src/app/core/utils/business-storage';
import { SharedDialogComponent } from 'src/app/modules/shared/components/shared-dialog/shared-dialog.component';
import { DialogAddInClientesComponent } from '../../components/dialog-add-in-clientes/dialog-add-in-clientes.component';
import { Client } from '../../models/client.model';
import { ClienteService } from '../../service/cliente.service';

@Component({
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.less'],
})
export class ClientesPage implements OnInit {
  filterValue: String;
  clientes: Client[];
  clickedRow: Client;
  dataSource: any;
  filterEvent: Event;

  displayedColumns: string[] = [
    'telefone',
    'nome',
    'rua',
    'numero',
    'bairro',
    'cidade',
  ];

  constructor(private dialog: MatDialog, private rest: ClienteService, private storage: BusinessStorage) { }

  ngOnInit(): void {
    this.getCustomers()
  }

  ngOnChanges() {
    if (this.filterEvent != null) this.applyFilter(this.filterEvent);
  }

  getCustomers() {
    this.rest.getCustomers(this.storage.get("businessCnpj")).subscribe((result) => {
      this.clientes = result.data;
      this.dataSource = new MatTableDataSource(this.clientes);
    });
  }

  openDialog(edit: boolean) {
    var dialogRef
    if (edit === true) {
      if (this.clickedRow === undefined) { alert('Selecione um registro para editar!!'); return }
      dialogRef = this.dialog.open(DialogAddInClientesComponent, {
        data: this.clickedRow
      })
    }
    else
      dialogRef = this.dialog.open(DialogAddInClientesComponent, {
        data: {}
      });

    dialogRef.afterClosed().subscribe((result) => {
      if (result)
        this.getCustomers()
    });
  }

  applyFilter(event: Event) {
    this.filterValue = (event.target as HTMLInputElement).value.toString();
    this.dataSource.filter = this.filterValue.trim().toLowerCase();
  }

  setRow(row: Client) {
    this.clickedRow = row;
  }

  openExcludingDialog() {
    if (this.clickedRow === undefined) { alert('Selecione um registro para editar!!'); return }

    const dialogRef = this.dialog.open(SharedDialogComponent, {
      data: this.clickedRow
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    })
  }
}
