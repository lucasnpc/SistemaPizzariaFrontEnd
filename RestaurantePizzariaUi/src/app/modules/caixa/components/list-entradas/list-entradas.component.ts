import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079 },
  {position: 2, name: 'Helium', weight: 4.0026 },
];


@Component({
  selector: 'rp-list-entradas',
  templateUrl: './list-entradas.component.html',
  styleUrls: ['./list-entradas.component.less']
})
export class ListEntradasComponent implements OnInit {

  clickedRow: PeriodicElement;

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['position', 'name', 'weight'];
  dataSource = ELEMENT_DATA;

  setRow(row: PeriodicElement) {
    this.clickedRow = row;
  }
}
