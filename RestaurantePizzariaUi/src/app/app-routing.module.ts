import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutMenuComponent } from './modules/shared/components/layout-menu/layout-menu.component';
import { VendasComponent } from './modules/vendas/components/vendas/vendas.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'menu',
    component: LayoutMenuComponent,
    children: [
      {
        path: 'vendas',
        loadChildren: () =>
          import('./modules/vendas/vendas.module').then((m) => m.VendasModule),
      },
      {
        path: 'clientes',
        loadChildren: () =>
          import('./modules/clientes/clientes.module').then((m) => m.ClientesModule),
      },
      {
        path: 'cardapio',
        loadChildren: () =>
          import('./modules/cardapio/cardapio.module').then((m) => m.CardapioModule),
      },
      {
        path: 'contas',
        loadChildren: () =>
          import('./modules/contas/contas.module').then((m) => m.ContasModule),
      },
      {
        path: 'funcionarios',
        loadChildren: () =>
          import('./modules/funcionarios/funcionarios.module').then((m) => m.FuncionariosModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
