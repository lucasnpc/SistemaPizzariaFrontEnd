import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContasComponent } from './components/contas/contas.component';
import { ContasPage } from './pages/contas/contas.page';



@NgModule({
  declarations: [ContasComponent, ContasPage],
  imports: [
    CommonModule
  ]
})
export class ContasModule { }
