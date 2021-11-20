import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rp-active-orders',
  templateUrl: './active-orders.component.html',
  styleUrls: ['./active-orders.component.less']
})
export class ActiveOrdersComponent implements OnInit {

  totalActiveOrders = 15

  constructor() { }

  ngOnInit(): void {
  }

}
