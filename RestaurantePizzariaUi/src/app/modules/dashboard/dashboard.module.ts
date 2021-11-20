import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPage } from './pages/dashboard/dashboard.page';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { TotalOrdersComponent } from './components/total-orders/total-orders.component';
import { ActiveOrdersComponent } from './components/active-orders/active-orders.component';
import { ConcludedOrdersComponent } from './components/concluded-orders/concluded-orders.component';
import { GainsComponent } from './components/gains/gains.component';
import { InformativeGraphComponent } from './components/informative-graph/informative-graph.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    DashboardPage,
    TotalOrdersComponent,
    ActiveOrdersComponent,
    ConcludedOrdersComponent,
    GainsComponent,
    InformativeGraphComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    MatGridListModule,
    MatButtonModule,
  ],
})
export class DashboardModule {}
