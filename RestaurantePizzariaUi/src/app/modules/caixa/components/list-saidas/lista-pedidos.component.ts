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
  {position: 7, name: 'Oxygen', weight: 4.6026 },
  {position: 8, name: 'Silver', weight: 1.03026 },
  {position: 9, name: 'Gold', weight: 42.0026 },
  {position: 10, name: 'Plutony', weight: 41.0026 },
];

@Component({
  selector: 'rp-lista-pedidos',
  templateUrl: './lista-pedidos.component.html',
  styleUrls: ['./lista-pedidos.component.less']
})
export class ListaPedidosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['id', 'rua', 'numero', 'bairro','cidade', 'cliente', 'valor'];
  dataSource = ELEMENT_DATA;

}
