import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutMenuComponent } from './modules/shared/components/layout-menu/layout-menu.component';

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
        path: 'dashboard',
        loadChildren: () =>
          import('./modules/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'caixa',
        loadChildren: () =>
          import('./modules/vendas/vendas.module').then((m) => m.VendasModule),
      },
      {
        path: 'clientes',
        loadChildren: () =>
          import('./modules/clientes/clientes.module').then(
            (m) => m.ClientesModule
          ),
      },
      {
        path: 'cardapio',
        loadChildren: () =>
          import('./modules/cardapio/cardapio.module').then(
            (m) => m.CardapioModule
          ),
      },
      {
        path: 'contas',
        loadChildren: () =>
          import('./modules/contas/contas.module').then((m) => m.ContasModule),
      },
      {
        path: 'funcionarios',
        loadChildren: () =>
          import('./modules/funcionarios/funcionarios.module').then(
            (m) => m.FuncionariosModule
          ),
      },
    ],
  },
  {
    path: 'cadastro',
    loadChildren: () =>
      import('./modules/cadastro/cadastro.module').then(
        (m) => m.CardapioModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
