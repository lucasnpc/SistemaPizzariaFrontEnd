import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContasPage } from './pages/contas/contas.page';
import { ContasRoutingModule } from './contas-routing.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { ListaContasPagarComponent } from './components/lista-contas-pagar/lista-contas-pagar.component';
import { ListaContasReceberComponent } from './components/lista-contas-receber/lista-contas-receber.component';
import { GraficoContasComponent } from './components/grafico-contas/grafico-contas.component';
import { MatTableModule } from '@angular/material/table';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { SharedModule } from '../shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogAddInContasComponent } from './components/dialog-add-in-contas/dialog-add-in-contas.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ContasBalanceComponent } from './components/contas-balance/contas-balance.component';

@NgModule({
  declarations: [
    ContasPage,
    ListaContasPagarComponent,
    ListaContasReceberComponent,
    GraficoContasComponent,
    DialogAddInContasComponent,
    ContasBalanceComponent,
  ],
  imports: [
    CommonModule,
    ContasRoutingModule,
    MatGridListModule,
    MatTableModule,
    NgxChartsModule,
    SharedModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
  ],
})
export class ContasModule {}
