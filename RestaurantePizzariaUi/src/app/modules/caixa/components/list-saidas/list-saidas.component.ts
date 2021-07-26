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
];

@Component({
  selector: 'rp-list-saidas',
  templateUrl: './list-saidas.component.html',
  styleUrls: ['./list-saidas.component.less']
})
export class ListSaidasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['id', 'rua', 'numero', 'bairro','cidade', 'cliente', 'valor'];
  dataSource = ELEMENT_DATA;

}
