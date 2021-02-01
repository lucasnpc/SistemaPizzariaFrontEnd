import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { VendasRoutingModule } from "./vendas-routing.module";
import { VendasPage } from './pages/vendas/vendas.page';
import { MatGridListModule } from '@angular/material/grid-list';
import { ListaPedidosComponent } from './components/lista-pedidos/lista-pedidos.component';
import { ListaComandasComponent } from './components/lista-comandas/lista-comandas.component';
import { ListaVendasComponent } from './components/lista-vendas/lista-vendas.component';
import { NotificacaoWppComponent } from './components/notificacao-wpp/notificacao-wpp.component';
import { ValorMesComponent } from './components/valor-mes/valor-mes.component';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [VendasPage, ListaPedidosComponent, ListaComandasComponent, ListaVendasComponent, NotificacaoWppComponent, ValorMesComponent],
  imports: [
    CommonModule,
    VendasRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule
  ],
  providers: []
})

export class VendasModule { }