import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Gain } from '../../models/gain.model';
import { CaixaService } from '../../service/caixa.service';

@Component({
  selector: 'rp-list-entradas',
  templateUrl: './list-entradas.component.html',
  styleUrls: ['./list-entradas.component.less'],
})
export class ListEntradasComponent implements OnInit {
  entradas: Gain[];
  dataSource: any;
  clickedRow: Gain;

  constructor(private rest: CaixaService) {}

  ngOnInit(): void {
    this.rest.getInflows().subscribe((result) => {
      this.entradas = result.data;
      this.dataSource = new MatTableDataSource(this.entradas);
    });
  }
  displayedColumns: string[] = ['N. Mesa', 'Valor Conta', 'Forma de pagamento'];

  setRow(row: Gain) {
    this.clickedRow = row;
  }
}
