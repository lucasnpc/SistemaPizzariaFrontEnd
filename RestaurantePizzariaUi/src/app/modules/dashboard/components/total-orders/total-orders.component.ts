import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rp-total-orders',
  templateUrl: './total-orders.component.html',
  styleUrls: ['./total-orders.component.less'],
})
export class TotalOrdersComponent implements OnInit {
  totalOrders = 15;

  constructor() {}

  ngOnInit(): void {}
}
