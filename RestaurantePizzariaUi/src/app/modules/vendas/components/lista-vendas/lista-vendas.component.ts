import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079 },
  {position: 2, name: 'Helium', weight: 4.0026 },
  {position: 3, name: 'Gas', weight: 4.0026 },
  {position: 4, name: 'Uranium', weight: 4.0026 },
  {position: 5, name: 'Metane', weight: 4.12 },
  {position: 6, name: 'Cobre', weight: 5.2026 },
];

@Component({
  selector: 'rp-lista-vendas',
  templateUrl: './lista-vendas.component.html',
  styleUrls: ['./lista-vendas.component.less']
})
export class ListaVendasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['id', 'data', 'valor', 'tipo','id_comanda', 'id_pedido'];
  dataSource = ELEMENT_DATA;

}
