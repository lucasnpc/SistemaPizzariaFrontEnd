import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../service/dashboard.service';

@Component({
  selector: 'rp-gains',
  templateUrl: './gains.component.html',
  styleUrls: ['./gains.component.less'],
})
export class GainsComponent implements OnInit {
  gains = 0;
  expenses = 0;

  constructor(private rest: DashboardService) { }

  ngOnInit(): void {
    this.rest.getTotalGains().subscribe((result) => {
      if (result.data != null)
        this.gains = result.data;
    })
    this.rest.getTotalExpenses().subscribe((result) => {
      if (result.data != null)
        this.expenses = result.data;
    })
  }
}
