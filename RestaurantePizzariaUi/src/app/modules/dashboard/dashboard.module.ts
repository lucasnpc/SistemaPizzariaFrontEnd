import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
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
import { DashboardDetailPage } from './pages/dashboard-detail/dashboard-detail.page';
import LocalePT from '@angular/common/locales/pt';
registerLocaleData(LocalePT);

@NgModule({
  declarations: [
    DashboardPage,
    TotalOrdersComponent,
    ActiveOrdersComponent,
    ConcludedOrdersComponent,
    GainsComponent,
    InformativeGraphComponent,
    DashboardDetailPage,
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
