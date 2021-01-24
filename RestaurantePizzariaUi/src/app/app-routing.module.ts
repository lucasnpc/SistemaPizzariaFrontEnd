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
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
