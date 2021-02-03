import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesPage } from './pages/clientes/clientes.page';
import { ClientesRoutingModule } from './clientes-routing.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { ListaClientesComponent } from './components/lista-clientes/lista-clientes.component';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [ClientesPage, ListaClientesComponent],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    MatGridListModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class ClientesModule { }
