import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComprasPage } from './pages/contas/compras.page';
import { ComprasRoutingModule } from './compras-routing.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '../shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { AddPurchaseDialog } from './components/add-purchase-dialog/add-purchase-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { ComprasService } from './service/compras.service';

@NgModule({
  declarations: [
    ComprasPage,
    AddPurchaseDialog,
  ],
  imports: [
    CommonModule,
    ComprasRoutingModule,
    MatGridListModule,
    MatTableModule,
    SharedModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CurrencyMaskModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule,
  ],
  providers: [ComprasService],
})
export class ComprasModule { }
