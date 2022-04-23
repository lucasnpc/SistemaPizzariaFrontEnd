import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BusinessStorage } from 'src/app/core/utils/business-storage';
import { BUSINESS_CNPJ } from 'src/app/core/utils/constants';
import { AddPurchaseDialog } from '../../components/add-purchase-dialog/add-purchase-dialog.component';
import { Product } from '../../models/product.model';
import { ComprasService } from '../../service/compras.service';
import { deepCopy } from '@angular-devkit/core/src/utils/object';


interface ProductRequest {
  productId: number,
  quantity: number
}

@Component({
  templateUrl: './compras.page.html',
  styleUrls: ['./compras.page.less'],
})
export class ComprasPage implements OnInit {
  products: Product[] = [];
  productsToSelect: Product[] = [];
  productRequest: ProductRequest[] = [];

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

  getProducts() {
    this.service.getProducts(this.storage.get(BUSINESS_CNPJ)).subscribe(result => {
      if (result) {
        this.products = result.data
        this.productsToSelect = deepCopy(this.products)
      }
    })
  }

  lessProductQuantity(product: Product) {
    const p = this.products.find(p => product.productId === p.productId)
    if (product.currentStock <= p.currentStock)
      return
    switch (product.measurementUnit) {
      case 'Unidade':
        product.currentStock -= Number(1);
        break;
      case 'Quilos':
        product.currentStock -= Number(0.5)
        break;
      case 'Gramas':
        product.currentStock -= Number(0.1)
        break;
      case 'Litros':
        product.currentStock -= Number(0.5)
        break
    }
  }

  increaseProductQuantity(product: Product) {
    switch (product.measurementUnit) {
      case 'Unidade':
        product.currentStock = Number(product.currentStock) + Number(1);
        break;
      case 'Quilos':
        product.currentStock = Number(product.currentStock) + Number(0.5)
        break;
      case 'Gramas':
        product.currentStock = Number(product.currentStock) + Number(0.1)
        break;
      case 'Litros':
        product.currentStock = Number(product.currentStock) + Number(0.5)
        break;
    }
  }

  concludePurchase() {
  }
}