import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesPage } from './pages/clientes/clientes.page';
import { ClientesRoutingModule } from './clientes-routing.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { ListaClientesComponent } from './components/lista-clientes/lista-clientes.component';
import { PesquisaClientesComponent } from './components/pesquisa-clientes/pesquisa-clientes.component';




@NgModule({
  declarations: [ClientesPage, ListaClientesComponent, PesquisaClientesComponent],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    MatGridListModule
  ]
})
export class ClientesModule { }
