import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardapioPage } from './pages/cardapio/cardapio.page';
import { CardapioRoutingModule } from './cardapio-routing.module';
import {MatGridListModule} from '@angular/material/grid-list';
import { ItensCardapioComponent } from './components/itens-cardapio/itens-cardapio.component';
import { ManipularItensComponent } from './components/manipular-itens/manipular-itens.component'



@NgModule({
  declarations: [CardapioPage, ItensCardapioComponent, ManipularItensComponent],
  imports: [
    CommonModule,
    CardapioRoutingModule,
    MatGridListModule
  ],
  providers: []
})
export class CardapioModule { }
