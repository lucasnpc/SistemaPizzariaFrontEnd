import { Component, OnInit } from '@angular/core';

export interface ContaReceber {
  descricao: string;
  valor: number;
}

@Component({
  selector: 'rp-lista-contas-receber',
  templateUrl: './lista-contas-receber.component.html',
  styleUrls: ['./lista-contas-receber.component.less']
})
export class ListaContasReceberComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns = ['descricao', 'valor'];
  contas: ContaReceber[] = [
    {descricao: 'Beach ball', valor: 4},
    {descricao: 'Towel', valor: 5},
    {descricao: 'Frisbee', valor: 2},
    {descricao: 'Sunscreen', valor: 4},
    {descricao: 'Cooler', valor: 25},
    {descricao: 'Swim suit', valor: 15},
  ];

  /** Gets the total cost of all transactions. */
  valorTotalReceber() {
    return this.contas.map(t => t.valor).reduce((acc, value) => acc + value, 0);
  }

}
