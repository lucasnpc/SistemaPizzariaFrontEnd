import { Component, OnInit } from '@angular/core';
import { BusinessStorage } from 'src/app/core/utils/business-storage';

@Component({
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.less']
})
export class DashboardPage implements OnInit {

  constructor(private storage: BusinessStorage) { }

  ngOnInit(): void {
    console.log(this.storage.get('businessCnpj'));
    console.log(this.storage.get('userRole'));
  }

}
