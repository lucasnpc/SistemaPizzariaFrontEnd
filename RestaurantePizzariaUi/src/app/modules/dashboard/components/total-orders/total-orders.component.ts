import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../service/dashboard.service';

@Component({
  selector: 'rp-total-orders',
  templateUrl: './total-orders.component.html',
  styleUrls: ['./total-orders.component.less'],
})
export class TotalOrdersComponent implements OnInit {
  totalOrders = 15;

  constructor(private rest: DashboardService) { }

  ngOnInit(): void {
    this.rest.getTotalOrders().subscribe((result) => {
      this.totalOrders = result.data;
    });
  }
}
