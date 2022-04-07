import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusinessStorage } from 'src/app/core/utils/business-storage';

@Component({
  selector: 'rp-layout-menu',
  templateUrl: './layout-menu.component.html',
  styleUrls: ['./layout-menu.component.less'],
})
export class LayoutMenuComponent implements OnInit {
  userRole = "teste";
  mobileQuery: MediaQueryList;
  options = [
    { name: 'Início', routerLink: 'inicio' },
    { name: 'Dashboard', routerLink: 'dashboard' },
    { name: 'Caixa', routerLink: 'caixa' },
    { name: 'Clientes', routerLink: 'clientes' },
    { name: 'Cardápio', routerLink: 'cardapio' },
    { name: 'Compras', routerLink: 'compras' },
    { name: 'Funcionários', routerLink: 'funcionarios' },
    { name: 'Fornecedores', routerLink: 'fornecedores' },
  ];
  selectedOption: any;

  private _mobileQueryListener: () => void;

  fillerNav = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`);

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private router: Router,
    private storage: BusinessStorage
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
  }
  ngOnInit(): void {
    this.userRole = this.storage.get("userRole");
    switch (this.router.url) {
      case '/menu/inicio':
        this.selectedOption = this.options[0]
        break;
      case '/menu/dashboard':
        this.selectedOption = this.options[1];
        break;
      case '/menu/caixa':
        this.selectedOption = this.options[2];
        break;
      case '/menu/clientes':
        this.selectedOption = this.options[3];
        break;
      case '/menu/cardapio':
        this.selectedOption = this.options[4];
        break;
      case '/menu/compras':
        this.selectedOption = this.options[5];
        break;
      case '/menu/funcionarios':
        this.selectedOption = this.options[6];
        break;
      case '/menu/fornecedores':
        this.selectedOption = this.options[7];
        break;
    }
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }

  clickEvent(button: any) {
    this.selectedOption = button;
  }
}
