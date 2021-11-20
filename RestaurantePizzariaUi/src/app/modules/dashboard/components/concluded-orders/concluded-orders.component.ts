import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rp-concluded-orders',
  templateUrl: './concluded-orders.component.html',
  styleUrls: ['./concluded-orders.component.less'],
})
export class ConcludedOrdersComponent implements OnInit {
  totalConcludedOrders = 15;

  constructor() {}

  ngOnInit(): void {}
}
