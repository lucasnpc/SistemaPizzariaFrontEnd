import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaixaRoutingModule } from './caixa-routing.module';
import { CaixaPage } from './pages/caixa/caixa.page';
import { MatGridListModule } from '@angular/material/grid-list';
import { ListaPedidosComponent } from './components/list-saidas/lista-pedidos.component';
import { ListaComandasComponent } from './components/list-entradas/lista-comandas.component';
import { ListaVendasComponent } from './components/lista-vendas/lista-vendas.component';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';
import { DialogAddInCaixaComponent } from './components/dialog-add-in-caixa/dialog-add-in-caixa.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    CaixaPage,
    ListaPedidosComponent,
    ListaComandasComponent,
    ListaVendasComponent,
    DialogAddInCaixaComponent,
  ],
  imports: [
    CommonModule,
    CaixaRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    SharedModule,
    MatDialogModule,
  ],
  providers: [],
})
export class CaixaModule {}
