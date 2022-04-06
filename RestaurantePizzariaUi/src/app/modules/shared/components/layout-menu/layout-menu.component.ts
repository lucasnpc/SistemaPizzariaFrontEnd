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
  buttons = [
    { name: 'Dashboard', routerLink: 'dashboard' },
    { name: 'Caixa', routerLink: 'caixa' },
    { name: 'Clientes', routerLink: 'clientes' },
    { name: 'Cardápio', routerLink: 'cardapio' },
    { name: 'Contas', routerLink: 'contas' },
    { name: 'Funcionários', routerLink: 'funcionarios' },
  ];
  selectedButton: any;

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
      case '/menu/dashboard':
        this.selectedButton = this.buttons[0];
        break;
      case '/menu/caixa':
        this.selectedButton = this.buttons[1];
        break;
      case '/menu/clientes':
        this.selectedButton = this.buttons[2];
        break;
      case '/menu/cardapio':
        this.selectedButton = this.buttons[3];
        break;
      case '/menu/contas':
        this.selectedButton = this.buttons[4];
        break;
      case '/menu/funcionarios':
        this.selectedButton = this.buttons[5];
        break;
    }
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }

  clickEvent(button: any) {
    this.selectedButton = button;
  }
}
