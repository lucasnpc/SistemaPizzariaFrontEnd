import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ItemCardapioModel } from 'src/app/modules/cardapio/models/item-cardapio.model';
import { DialogAddInCaixaComponent } from '../dialog-add-in-caixa/dialog-add-in-caixa.component';

@Component({
  selector: 'rp-dialog-invoice',
  templateUrl: './dialog-invoice.component.html',
  styleUrls: ['./dialog-invoice.component.less'],
})
export class DialogInvoiceComponent implements OnInit {
  total: number;
  payements: string[] = ['Crédito', 'Débito', 'Dinheiro', 'Pix'];
  constructor(
    public dialogRef: MatDialogRef<DialogAddInCaixaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ItemCardapioModel[]
  ) {}

  ngOnInit(): void {
    if (this.data != null) {
      const num = this.data
        .map((x) => Number(x.preco))
        .reduce((a, b) => a + b, 0);
      this.total = +num.toFixed(2);
    }
  }
}
