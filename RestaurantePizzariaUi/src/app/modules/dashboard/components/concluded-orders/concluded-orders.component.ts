import { Component, OnInit } from '@angular/core';
import { Order } from '../../models/order.model';
import { DashboardService } from '../../service/dashboard.service';

@Component({
  selector: 'rp-concluded-orders',
  templateUrl: './concluded-orders.component.html',
  styleUrls: ['./concluded-orders.component.less'],
})
export class ConcludedOrdersComponent implements OnInit {
  concludedOrders: Order[]

  totalConcludedOrders = 15;

  constructor(private rest: DashboardService) { }

  ngOnInit(): void {
    this.rest.getConcludedOrders().subscribe((result) => {
      this.concludedOrders = result.data;
      this.totalConcludedOrders = this.concludedOrders.length
    });
  }
}
