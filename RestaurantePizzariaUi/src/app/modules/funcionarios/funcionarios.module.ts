import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionariosPage } from './pages/funcionarios/funcionarios.page';
import { FuncionariosRoutingModule } from './funcionarios-routing.module';
import {MatGridListModule} from '@angular/material/grid-list';
import { PesquisaFuncionariosComponent } from './components/pesquisa-funcionarios/pesquisa-funcionarios.component';
import { ListaFuncionariosComponent } from './components/lista-funcionarios/lista-funcionarios.component';



@NgModule({
  declarations: [ FuncionariosPage, PesquisaFuncionariosComponent, ListaFuncionariosComponent],
  imports: [
    CommonModule,
    FuncionariosRoutingModule,
    MatGridListModule
  ]
})
export class FuncionariosModule { }
