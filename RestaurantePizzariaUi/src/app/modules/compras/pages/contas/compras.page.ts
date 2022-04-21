import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddPurchaseDialog } from '../../components/add-purchase-dialog/add-purchase-dialog.component';
import { Product } from '../../models/product.model';

@Component({
  templateUrl: './compras.page.html',
  styleUrls: ['./compras.page.less'],
})
export class ComprasPage implements OnInit {
  products: Product[] = [];

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void { }

  openDialog() {
    const dialogRef = this.dialog.open(AddPurchaseDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog contas result: ${result}`);
    });
  }

  logTest(product: Product) {
    console.log(product);
  }
}
