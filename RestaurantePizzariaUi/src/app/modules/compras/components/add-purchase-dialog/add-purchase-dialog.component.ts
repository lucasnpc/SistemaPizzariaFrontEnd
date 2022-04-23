import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { BusinessStorage } from 'src/app/core/utils/business-storage';
import { BUSINESS_CNPJ } from 'src/app/core/utils/constants';
import { Product } from '../../models/product.model';
import { ComprasService } from '../../service/compras.service';

interface MeasureUnit {
  name: string
}

@Component({
  selector: 'rp-dialog-add-in-contas',
  templateUrl: './add-purchase-dialog.component.html',
  styleUrls: ['./add-purchase-dialog.component.less']
})
export class AddPurchaseDialog implements OnInit {

  formRegisterProduct = this.fb.group({
    productName: ['', Validators.required],
    minimumStock: ['', Validators.required],
    maximumStock: ['', Validators.required],
    currentStock: ['', Validators.required],
    measurementUnit: ['', Validators.required],
  });

  measureOpts: MeasureUnit[] = [
    { name: 'Quilos' },
    { name: 'Litros' },
    { name: 'Gramas' },
    { name: 'Unidade' }
  ]

  constructor(private fb: FormBuilder, private storage: BusinessStorage, private service: ComprasService,
    private dialogRef: MatDialogRef<AddPurchaseDialog>,
  ) { }

  ngOnInit(): void {
  }

  addProduct() {
    var data: Product = {
      productId: null,
      productName: this.formRegisterProduct.get('productName').value,
      minimumStock: this.formRegisterProduct.get('minimumStock').value,
      maximumStock: this.formRegisterProduct.get('maximumStock').value,
      currentStock: this.formRegisterProduct.get('currentStock').value,
      measurementUnit: this.formRegisterProduct.get('measurementUnit').value.name,
      businessCnpj: this.storage.get(BUSINESS_CNPJ)
    };

    console.log(data);


    this.service.postProduct(data).subscribe(result => {
      if (result.success) this.dialogRef.close(true)
    })
  }

}
