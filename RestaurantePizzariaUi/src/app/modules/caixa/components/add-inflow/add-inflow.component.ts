import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ItemCardapioModel } from 'src/app/modules/cardapio/models/item-cardapio.model';
import { CardapioService } from 'src/app/modules/cardapio/service/cardapio.service';
import { DialogInvoiceComponent } from '../dialog-invoice/dialog-invoice.component';

const SEARCH_BUTTON = `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.6667 28.3333C23.11 28.3333 28.3333 23.11 28.3333 16.6667C28.3333 10.2233 23.11 5 16.6667 5C10.2233 5 5 10.2233 5 16.6667C5 23.11 10.2233 28.3333 16.6667 28.3333Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M35 35L25 25" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

interface Desks {
  name: string;
}

@Component({
  selector: 'rp-add-inflow',
  templateUrl: './add-inflow.component.html',
  styleUrls: ['./add-inflow.component.less'],
})
export class AddInflowComponent implements OnInit {
  @ViewChild('search') searchBar: ElementRef;
  @ViewChild('select') selectedDesk: any;
  filled = false;
  itemIndex: number[];
  itens: ItemCardapioModel[];
  itemCount: number;
  total: number;

  desks: Desks[] = [
    { name: 'Mesa - Delivery' },
    { name: 'Mesa - Balcão' },
    { name: 'Mesa - 1' },
    { name: 'Mesa - 2' },
    { name: 'Mesa - 3' },
    { name: 'Mesa - 4' },
    { name: 'Mesa - 5' },
    { name: 'Mesa - 6' },
    { name: 'Mesa - 7' },
    { name: 'Mesa - 8' },
    { name: 'Mesa - 9' },
  ];

  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private rest: CardapioService,
    private dialog: MatDialog
  ) {
    iconRegistry.addSvgIconLiteral(
      'search-button',
      sanitizer.bypassSecurityTrustHtml(SEARCH_BUTTON)
    );
  }

  ngOnInit(): void {
    this.rest.getItens().subscribe((result) => {
      this.itens = result.data;
    });
    this.rest.getItensCount().subscribe((result) => {
      this.itemCount = result.data;
    });
  }

  focusSearchBar() {
    if (this.searchBar.nativeElement.value == '') {
      this.filled = true;
    }
    this.searchBar.nativeElement.focus();
  }

  applyFilter(event: Event) {
    //this.filter.emit(event);
  }
  openDialogInvoice() {
    const itensSelected = this.itens.filter(function (item) {
      return item.selected == true;
    });

    if (!itensSelected.length) {
      return;
    }
    const num = itensSelected
      .map((x) => Number(x.preco))
      .reduce((a, b) => a + b, 0);
    this.total = +num.toFixed(2);

    //To improve idEntrada
    const dialogRef = this.dialog.open(DialogInvoiceComponent, {
      data: {
        numeroMesa: this.selectedDesk.value,
        itensCardapio: this.itens.filter(function (item) {
          return item.selected == true;
        }),
        valorConta: this.total,
        formaPagamento: '',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Invoice dialog closed ${result}`);
    });
  }
}
