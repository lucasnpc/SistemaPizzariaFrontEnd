import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './dashboard-detail.page.html',
  styleUrls: ['./dashboard-detail.page.less'],
})
export class DashboardDetailPage implements OnInit {
  todayDate = new Date();
  orders = 15;
  activeOrders = 15;
  concludedOrders = 15;

  constructor() {}

  ngOnInit(): void {}
}
