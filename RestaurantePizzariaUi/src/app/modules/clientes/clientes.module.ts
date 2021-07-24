import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesPage } from './pages/clientes/clientes.page';
import { ClientesRoutingModule } from './clientes-routing.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { ListaClientesComponent } from './components/lista-clientes/lista-clientes.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../shared/shared.module';
import { DialogAddInClientesComponent } from './components/dialog-add-in-clientes/dialog-add-in-clientes.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    ClientesPage,
    ListaClientesComponent,
    DialogAddInClientesComponent,
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    MatGridListModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    SharedModule,
    MatDialogModule,
  ],
})
export class ClientesModule {}
