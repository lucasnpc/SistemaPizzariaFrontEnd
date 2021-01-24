import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionariosComponent } from './components/funcionarios/funcionarios.component';
import { FuncionariosPage } from './pages/funcionarios/funcionarios.page';
import { FuncionariosRoutingModule } from './funcionarios-routing.module';



@NgModule({
  declarations: [FuncionariosComponent, FuncionariosPage],
  imports: [
    CommonModule,
    FuncionariosRoutingModule,
  ]
})
export class FuncionariosModule { }
