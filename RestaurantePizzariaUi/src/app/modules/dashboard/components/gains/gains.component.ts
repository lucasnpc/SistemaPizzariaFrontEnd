import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rp-gains',
  templateUrl: './gains.component.html',
  styleUrls: ['./gains.component.less'],
})
export class GainsComponent implements OnInit {
  gains = 50;
  expenses = 50;
  total = this.gains - this.expenses;

  constructor() {}

  ngOnInit(): void {}
}
