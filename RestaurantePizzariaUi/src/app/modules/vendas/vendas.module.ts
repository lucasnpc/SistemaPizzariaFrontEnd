import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { VendasRoutingModule } from "./vendas-routing.module";
import { VendasPage } from './pages/vendas/vendas.page';
import { MatGridListModule } from '@angular/material/grid-list';
import { ListaPedidosComponent } from './components/lista-pedidos/lista-pedidos.component';
import { ListaComandasComponent } from './components/lista-comandas/lista-comandas.component';
import { ListaVendasComponent } from './components/lista-vendas/lista-vendas.component';
import { ValorDiaComponent } from './components/valor-dia/valor-dia.component';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [VendasPage, ListaPedidosComponent, ListaComandasComponent, ListaVendasComponent, ValorDiaComponent],
  imports: [
    CommonModule,
    VendasRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatExpansionModule
  ],
  providers: []
})

export class VendasModule { }