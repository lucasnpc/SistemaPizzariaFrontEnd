import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContasPage } from './pages/contas/contas.page';
import { ContasRoutingModule } from './contas-routing.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { ListaContasPagarComponent } from './components/lista-contas-pagar/lista-contas-pagar.component';
import { ListaContasReceberComponent } from './components/lista-contas-receber/lista-contas-receber.component';
import { MatTableModule } from '@angular/material/table';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { SharedModule } from '../shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogAddInContasComponent } from './components/dialog-add-in-contas/dialog-add-in-contas.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ContasBalanceComponent } from './components/contas-balance/contas-balance.component';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddBillToPayComponent } from './components/add-bill-to-pay/add-bill-to-pay.component';
import { AddBillToReceiveComponent } from './components/add-bill-to-receive/add-bill-to-receive.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    ContasPage,
    ListaContasPagarComponent,
    ListaContasReceberComponent,
    DialogAddInContasComponent,
    ContasBalanceComponent,
    AddBillToPayComponent,
    AddBillToReceiveComponent,
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
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CurrencyMaskModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
})
export class ContasModule {}
