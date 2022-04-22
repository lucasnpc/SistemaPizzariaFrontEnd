import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BusinessStorage } from 'src/app/core/utils/business-storage';
import { BUSINESS_CNPJ } from 'src/app/core/utils/constants';
import { AddPurchaseDialog } from '../../components/add-purchase-dialog/add-purchase-dialog.component';
import { Product } from '../../models/product.model';
import { ComprasService } from '../../service/compras.service';

@Component({
  templateUrl: './compras.page.html',
  styleUrls: ['./compras.page.less'],
})
export class ComprasPage implements OnInit {
  products: Product[] = [];

  constructor(private dialog: MatDialog, private service: ComprasService, private storage: BusinessStorage) { }

  ngOnInit(): void {
    this.getProducts()
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddPurchaseDialog);

    dialogRef.afterClosed().subscribe(result => {
      if (result)
        this.getProducts()
    });
  }

  logTest(product: Product) {
    console.log(product);
  }

  getProducts() {
    this.service.getProducts(this.storage.get(BUSINESS_CNPJ)).subscribe(result => {
      if (result)
        this.products = result.data
    })
  }
}
