import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  total: number;
}

const ELEMENT_DATA: PeriodicElement[] = [{ total: 0 }];

@Component({
  selector: 'rp-contas-balance',
  templateUrl: './contas-balance.component.html',
  styleUrls: ['./contas-balance.component.less'],
})
export class ContasBalanceComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  displayedColumns: string[] = ['balance'];
  dataSource = ELEMENT_DATA;
}
