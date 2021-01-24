import { NgModule } from "@angular/core";
import { VendasComponent } from "./components/vendas/vendas.component";
import { CommonModule } from "@angular/common";
import { VendasRoutingModule } from "./vendas-routing.module";
import { VendasPage } from './pages/vendas/vendas.page';

@NgModule({
    declarations:  [ VendasPage, VendasComponent],
    imports: [
      CommonModule,
      VendasRoutingModule,
    ],
    providers: []
  })

export class VendasModule { }