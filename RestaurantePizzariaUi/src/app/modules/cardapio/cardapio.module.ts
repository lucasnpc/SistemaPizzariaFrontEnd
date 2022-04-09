import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardapioPage } from './pages/cardapio/cardapio.page';
import { CardapioRoutingModule } from './cardapio-routing.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { ItensCardapioComponent } from './components/itens-cardapio/itens-cardapio.component';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CardapioService } from './service/menu.service';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '../shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogAddInCardapioComponent } from './components/dialog-add-in-cardapio/dialog-add-in-cardapio.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CurrencyMaskModule } from 'ng2-currency-mask';

@NgModule({
  declarations: [
    CardapioPage,
    ItensCardapioComponent,
    DialogAddInCardapioComponent,
    AddItemComponent,
  ],
  imports: [
    CommonModule,
    CardapioRoutingModule,
    MatGridListModule,
    MatListModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    SharedModule,
    MatDialogModule,
    MatFormFieldModule,
    CurrencyMaskModule,
  ],
  providers: [CardapioService],
})
export class CardapioModule {}
