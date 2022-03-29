import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Client } from '../../models/client.model';
import { ClienteService } from '../../service/cliente.service';

@Component({
  selector: 'rp-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.less'],
})
export class ListaClientesComponent implements OnInit {
  @Input() filterEvent: Event;
  filterValue: String;
  clientes: Client[];
  clickedRow: Client;
  dataSource: any;

  constructor(private rest: ClienteService) { }

  ngOnInit(): void {
    this.rest.getCustomers().subscribe((result) => {
      this.clientes = result.data;
      this.dataSource = new MatTableDataSource(this.clientes);
    });
  }

  ngOnChanges() {
    if (this.filterEvent != null) this.applyFilter(this.filterEvent);
  }

  displayedColumns: string[] = [
    'telefone',
    'nome',
    'rua',
    'numero',
    'bairro',
    'cidade',
  ];

  applyFilter(event: Event) {
    this.filterValue = (event.target as HTMLInputElement).value.toString();
    this.dataSource.filter = this.filterValue.trim().toLowerCase();
  }

  setRow(row: Client) {
    this.clickedRow = row;
  }
}
