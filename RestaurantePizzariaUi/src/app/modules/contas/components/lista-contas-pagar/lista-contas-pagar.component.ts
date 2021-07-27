import { Component, OnInit } from '@angular/core';

export interface ContaPagar {
  descricao: string;
  valor: number;
}

@Component({
  selector: 'rp-lista-contas-pagar',
  templateUrl: './lista-contas-pagar.component.html',
  styleUrls: ['./lista-contas-pagar.component.less'],
})
export class ListaContasPagarComponent implements OnInit {
  clickedRow: ContaPagar;

  constructor() {}

  ngOnInit(): void {}

  displayedColumns = ['descricao', 'valor'];
  contas: ContaPagar[] = [
    { descricao: 'Beach ball', valor: 4 },
    { descricao: 'Towel', valor: 5 },
    { descricao: 'Frisbee', valor: 2 },
    { descricao: 'Sunscreen', valor: 4 },
    { descricao: 'Cooler', valor: 25 },
    { descricao: 'Swim suit', valor: 15 },
  ];

  /** Gets the total cost of all transactions. */
  valorTotalPagar() {
    return this.contas
      .map((t) => t.valor)
      .reduce((acc, value) => acc + value, 0);
  }

  setRow(row: ContaPagar) {
    this.clickedRow = row;
  }
}
