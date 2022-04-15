import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FornecedoresPage } from './pages/fornecedores/fornecedores.page';
import { FornecedoresService } from './services/fornecedores.service';
import { FornecedoresRoutingModule } from './fornecedores-routing';
import { SharedModule } from '../shared/shared.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { ProvidersListComponent } from './components/providers-list/providers-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    FornecedoresPage,
    ProvidersListComponent
  ],
  imports: [
    CommonModule,
    FornecedoresRoutingModule,
    SharedModule,
    MatGridListModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [FornecedoresService]
})

export class FornecedoresModule { }
