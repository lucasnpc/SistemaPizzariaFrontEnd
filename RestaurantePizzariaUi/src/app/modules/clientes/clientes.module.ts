import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ClientesPage } from './pages/clientes/clientes.page';



@NgModule({
  declarations: [ClientesComponent, ClientesPage],
  imports: [
    CommonModule
  ]
})
export class ClientesModule { }
