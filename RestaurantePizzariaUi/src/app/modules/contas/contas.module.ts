import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContasComponent } from './components/contas/contas.component';
import { ContasPage } from './pages/contas/contas.page';
import { ContasRoutingModule } from './contas-routing.module';



@NgModule({
  declarations: [ContasComponent, ContasPage],
  imports: [
    CommonModule,
    ContasRoutingModule,
  ]
})
export class ContasModule { }
