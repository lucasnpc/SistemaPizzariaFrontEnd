import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionariosPage } from './pages/funcionarios/funcionarios.page';
import { FuncionariosRoutingModule } from './funcionarios-routing.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { ListaFuncionariosComponent } from './components/lista-funcionarios/lista-funcionarios.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogAddInFuncionariosComponent } from './components/dialog-add-in-funcionarios/dialog-add-in-funcionarios.component';

@NgModule({
  declarations: [FuncionariosPage, ListaFuncionariosComponent, DialogAddInFuncionariosComponent],
  imports: [
    CommonModule,
    FuncionariosRoutingModule,
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
export class FuncionariosModule {}
