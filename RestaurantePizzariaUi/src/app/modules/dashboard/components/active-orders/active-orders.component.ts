import { Component, OnInit } from '@angular/core';
import { Order } from '../../models/order.model';
import { DashboardService } from '../../service/dashboard.service';

@Component({
  selector: 'rp-active-orders',
  templateUrl: './active-orders.component.html',
  styleUrls: ['./active-orders.component.less']
})
export class ActiveOrdersComponent implements OnInit {
  activeOrders: Order[]

  totalActiveOrders = 15

  constructor(private rest: DashboardService) { }

  ngOnInit(): void {
    this.rest.getActiveOrders().subscribe((result) => {
      this.activeOrders = result.data;
      this.totalActiveOrders = this.activeOrders.length
    });
  }

}
