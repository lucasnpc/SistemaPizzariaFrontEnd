import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardapioPage } from './pages/cardapio/cardapio.page';
import { CardapioRoutingModule } from './cardapio-routing.module';
import {MatGridListModule} from '@angular/material/grid-list';
import { ItensCardapioComponent } from './components/itens-cardapio/itens-cardapio.component';
import {MatListModule} from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { CardapioService } from './service/cardapio.service';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [CardapioPage, ItensCardapioComponent],
  imports: [
    CommonModule,
    CardapioRoutingModule,
    MatGridListModule,
    MatListModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule
  ],
  providers: [CardapioService]
})
export class CardapioModule { }
