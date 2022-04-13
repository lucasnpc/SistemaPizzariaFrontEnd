import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddInContasComponent } from '../../components/dialog-add-in-contas/dialog-add-in-contas.component';
import { Product } from '../../models/product.model';

@Component({
  templateUrl: './contas.page.html',
  styleUrls: ['./contas.page.less'],
})
export class ComprasPage implements OnInit {
  products: Product[] = [
    {
      productId: 1, productName: 'teste', minimumStock: Number(123),
      maximumStock: Number(123),
      currentStock: Number(123),
      measurementUnit: 'kg',
      businessCnpj: '12332'
    },
    {
      productId: 1, productName: 'teste2', minimumStock: Number(123),
      maximumStock: Number(123),
      currentStock: Number(123),
      measurementUnit: 'kg',
      businessCnpj: '12332'
    },
    {
      productId: 1, productName: 'teste3', minimumStock: Number(123),
      maximumStock: Number(123),
      currentStock: Number(123),
      measurementUnit: 'kg',
      businessCnpj: '12332'
    },
    {
      productId: 1, productName: 'teste4', minimumStock: Number(123),
      maximumStock: Number(123),
      currentStock: Number(123),
      measurementUnit: 'kg',
      businessCnpj: '12332'
    },
    {
      productId: 1, productName: 'teste5', minimumStock: Number(123),
      maximumStock: Number(123),
      currentStock: Number(123),
      measurementUnit: 'kg',
      businessCnpj: '12332'
    },
  ];

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void { }

  openDialog() {
    const dialogRef = this.dialog.open(DialogAddInContasComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog contas result: ${result}`);
    });
  }

  logTest(product: Product) {
    console.log(product);

  }
}
