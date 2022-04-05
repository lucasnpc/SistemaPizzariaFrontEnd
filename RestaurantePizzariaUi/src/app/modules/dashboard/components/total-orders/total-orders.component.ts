import { Component, OnInit } from '@angular/core';
import { BusinessStorage } from 'src/app/core/utils/business-storage';
import { DashboardService } from '../../service/dashboard.service';

@Component({
  selector: 'rp-total-orders',
  templateUrl: './total-orders.component.html',
  styleUrls: ['./total-orders.component.less'],
})
export class TotalOrdersComponent implements OnInit {
  totalOrders = 15;

  constructor(private rest: DashboardService, private storage: BusinessStorage) { }

  ngOnInit(): void {

    this.rest.getTotalOrders(this.storage.get("businessCnpj")).subscribe((result) => {
      this.totalOrders = result.data;
    });
  }
}
