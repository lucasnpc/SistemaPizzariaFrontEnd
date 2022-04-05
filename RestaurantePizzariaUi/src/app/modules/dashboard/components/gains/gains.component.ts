import { Component, OnInit } from '@angular/core';
import { BusinessStorage } from 'src/app/core/utils/business-storage';
import { DashboardService } from '../../service/dashboard.service';

@Component({
  selector: 'rp-gains',
  templateUrl: './gains.component.html',
  styleUrls: ['./gains.component.less'],
})
export class GainsComponent implements OnInit {
  gains = 0;
  expenses = 0;

  constructor(private rest: DashboardService, private storage: BusinessStorage) { }

  ngOnInit(): void {
    this.rest.getTotalGains(this.storage.get("businessCnpj")).subscribe((result) => {
      if (result.data != null)
        this.gains = result.data;
    })
    this.rest.getTotalExpenses(this.storage.get("businessCnpj")).subscribe((result) => {
      if (result.data != null)
        this.expenses = result.data;
    })
  }
}
