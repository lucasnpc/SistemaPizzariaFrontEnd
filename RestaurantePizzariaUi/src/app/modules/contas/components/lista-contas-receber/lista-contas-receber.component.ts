import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ContaAReceber } from '../../models/contas-receber.model';
import { ContasService } from '../../service/contas.service';

@Component({
  selector: 'rp-lista-contas-receber',
  templateUrl: './lista-contas-receber.component.html',
  styleUrls: ['./lista-contas-receber.component.less'],
})
export class ListaContasReceberComponent implements OnInit {
  contas: ContaAReceber[];
  dataSource: any;
  clickedRow: ContaAReceber;

  constructor(private rest: ContasService) {}

  ngOnInit(): void {
    this.rest.getBillsToReceive().subscribe((result) => {
      this.contas = result.data;
      this.dataSource = new MatTableDataSource(this.contas);
    });
  }

  displayedColumns = ['Descrição', 'Data de Recebimento', 'Valor'];

  /** Gets the total cost of all transactions. */
  valorTotalReceber() {
    if (this.contas != null)
      return this.contas
        .map((t) => +t.valor)
        .reduce((acc, value) => acc + value, 0);
    return 0;
  }

  setRow(row: ContaAReceber) {
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
