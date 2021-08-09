import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ContaAPagar } from '../../models/contas-pagar.model';
import { ContasService } from '../../service/contas.service';

@Component({
  selector: 'rp-lista-contas-pagar',
  templateUrl: './lista-contas-pagar.component.html',
  styleUrls: ['./lista-contas-pagar.component.less'],
})
export class ListaContasPagarComponent implements OnInit {
  contas: ContaAPagar[];
  dataSource: any;
  clickedRow: ContaAPagar;

  constructor(private rest: ContasService) {}

  ngOnInit(): void {
    this.rest.getBillsToPay().subscribe((result) => {
      this.contas = result.data;
      this.dataSource = new MatTableDataSource(this.contas);
    });
  }

  displayedColumns = ['Descrição', 'Data de Pagamento', 'Valor'];

  /** Gets the total cost of all transactions. */
  valorTotalPagar() {
    if (this.contas != null)
      return this.contas
        .map((t) => t.valor)
        .reduce((acc, value) => acc + value, 0);
    return 0;
  }

  setRow(row: ContaAPagar) {
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
