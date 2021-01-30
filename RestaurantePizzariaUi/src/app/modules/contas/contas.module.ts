import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContasPage } from './pages/contas/contas.page';
import { ContasRoutingModule } from './contas-routing.module';
import {MatGridListModule} from '@angular/material/grid-list';
import { ListaContasPagarComponent } from './components/lista-contas-pagar/lista-contas-pagar.component';
import { ListaContasReceberComponent } from './components/lista-contas-receber/lista-contas-receber.component';
import { GraficoContasComponent } from './components/grafico-contas/grafico-contas.component';



@NgModule({
  declarations: [ ContasPage, ListaContasPagarComponent, ListaContasReceberComponent, GraficoContasComponent],
  imports: [
    CommonModule,
    ContasRoutingModule,
    MatGridListModule
  ]
})
export class ContasModule { }
