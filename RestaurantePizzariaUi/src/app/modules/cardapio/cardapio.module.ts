import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components/components.component';
import { CardapioComponent } from './components/cardapio/cardapio.component';
import { CardapioPage } from './pages/cardapio/cardapio.page';



@NgModule({
  declarations: [ComponentsComponent, CardapioComponent, CardapioPage],
  imports: [
    CommonModule
  ]
})
export class CardapioModule { }
