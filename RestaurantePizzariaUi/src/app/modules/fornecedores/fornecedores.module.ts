import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FornecedoresPage } from './pages/fornecedores/fornecedores.page';
import { FornecedoresService } from './services/fornecedores.service';
import { FornecedoresRoutingModule } from './fornecedores-routing';
import { SharedModule } from '../shared/shared.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    FornecedoresPage
  ],
  imports: [
    CommonModule,
    FornecedoresRoutingModule,
    SharedModule,
    MatGridListModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [FornecedoresService]
})

export class FornecedoresModule { }
