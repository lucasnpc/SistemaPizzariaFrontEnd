import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardapioPage } from './pages/cardapio/cardapio.page';
import { CardapioRoutingModule } from './cardapio-routing.module';
import {MatGridListModule} from '@angular/material/grid-list';
import { ItensCardapioComponent } from './components/itens-cardapio/itens-cardapio.component';
import {MatListModule} from '@angular/material/list';



@NgModule({
  declarations: [CardapioPage, ItensCardapioComponent],
  imports: [
    CommonModule,
    CardapioRoutingModule,
    MatGridListModule,
    MatListModule
  ],
  providers: []
})
export class CardapioModule { }
