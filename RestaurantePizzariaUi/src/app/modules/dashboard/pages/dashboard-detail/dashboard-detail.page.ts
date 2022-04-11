import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BusinessStorage } from 'src/app/core/utils/business-storage';
import { FinishOrderDialogComponent } from '../../components/finish-order-dialog/finish-order-dialog.component';
import { Order } from '../../models/order.model';
import { DashboardService } from '../../service/dashboard.service';

@Component({
  templateUrl: './dashboard-detail.page.html',
  styleUrls: ['./dashboard-detail.page.less'],
})
export class DashboardDetailPage implements OnInit {
  todayDate = new Date();
  totalOrders: Order[] = [];
  activeOrders: Order[] = [];
  concludedOrders: Order[] = [];

  constructor(private service: DashboardService, private storage: BusinessStorage, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getOrders()
  }

  getOrders() {
    this.service.getActiveOrders(this.storage.get("businessCnpj")).subscribe((result) => {
      this.activeOrders = result.data;
    });
    this.service.getConcludedOrders(this.storage.get("businessCnpj")).subscribe((result) => {
      this.concludedOrders = result.data;
    });
    this.service.getTotalOrders(this.storage.get("businessCnpj")).subscribe((result) => {
      this.totalOrders = result.data;
    });
  }

  updateOrder(order: Order) {
    console.log(order);
  }

  finishOrder(order: Order) {
    const dialogRef = this.dialog.open(FinishOrderDialogComponent, {
      data: { desk: order.deskDescription }
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.service.updateActiveOrderToConcluded({orderId: order.orderId}).subscribe(result => {
          if (result) {
            this.getOrders()
          }
        })
      }
    })
  }
}
