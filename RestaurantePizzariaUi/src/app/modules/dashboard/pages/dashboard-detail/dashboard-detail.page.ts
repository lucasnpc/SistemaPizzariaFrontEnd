import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BusinessStorage } from 'src/app/core/utils/business-storage';
import { USER_ROLE } from 'src/app/core/utils/constants';
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
  userRole = ''

  constructor(private service: DashboardService, private storage: BusinessStorage, private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.userRole = this.storage.get(USER_ROLE)
    this.getOrders()
  }

  getOrders() {
    if (this.userRole === 'Caixa') {
      this.service.getActiveOrders(this.storage.get("businessCnpj")).subscribe((result) => {
        this.activeOrders = result.data;
      });
      return
    }
    this.service.getConcludedOrders(this.storage.get("businessCnpj")).subscribe((result) => {
      this.concludedOrders = result.data;
    });
  }

  updateOrder(order: Order) {
    this.router.navigate(['/menu/inicio'], { state: { order: order } })
  }

  finishOrder(order: Order) {
    const dialogRef = this.dialog.open(FinishOrderDialogComponent, {
      data: { desk: order.deskDescription }
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.service.updateActiveOrderToConcluded({ orderId: order.orderId }).subscribe(result => {
          if (result) {
            this.getOrders()
          }
        })
      }
    })
  }
}
