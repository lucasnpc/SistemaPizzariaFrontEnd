import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionariosComponent } from './components/funcionarios/funcionarios.component';
import { FuncionariosPage } from './pages/funcionarios/funcionarios.page';



@NgModule({
  declarations: [FuncionariosComponent, FuncionariosPage],
  imports: [
    CommonModule
  ]
})
export class FuncionariosModule { }
