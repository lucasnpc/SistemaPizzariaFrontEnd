import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardapioComponent } from './components/cardapio/cardapio.component';
import { CardapioPage } from './pages/cardapio/cardapio.page';
import { CardapioRoutingModule } from './cardapio-routing.module';



@NgModule({
  declarations: [CardapioPage, CardapioComponent],
  imports: [
    CommonModule,
    CardapioRoutingModule,
  ],
  providers: []
})
export class CardapioModule { }
