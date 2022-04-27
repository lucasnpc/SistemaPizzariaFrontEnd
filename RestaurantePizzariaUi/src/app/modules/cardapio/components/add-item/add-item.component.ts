import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { BusinessStorage } from 'src/app/core/utils/business-storage';
import { BUSINESS_CNPJ } from 'src/app/core/utils/constants';
import { Product } from 'src/app/modules/compras/models/product.model';
import { CardapioService } from '../../service/menu.service';
import { DialogAddInCardapioComponent } from '../dialog-add-in-cardapio/dialog-add-in-cardapio.component';

interface ProductRequest {
  productId: number,
  quantity: number
}

@Component({
  selector: 'rp-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.less'],
})
export class AddItemComponent implements OnInit {
  formRegisterItems = this.fb.group({
    preco: ['', Validators.required],
    descricao: ['', Validators.required],
  });

  products: Product[]
  filteredProducts: Observable<string[]>;
  productsDescription: string[];
  selectedProduct: string;
  selectedProducts: Product[] = []
  createMenuItemControl = new FormControl('');

  itemRequest: ProductRequest[] = []


  constructor(
    private fb: FormBuilder,
    private rest: CardapioService,
    public dialogRef: MatDialogRef<DialogAddInCardapioComponent>,
    private service: CardapioService,
    private storage: BusinessStorage
  ) { }

  ngOnInit(): void {
    this.service.getProducts(this.storage.get(BUSINESS_CNPJ)).subscribe(result => {
      this.products = result.data
      this.productsDescription = this.products.map(p => p.productName)

      this.filteredProducts = this.createMenuItemControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value))
      )
    })
  }

  addItem() {
    var dados = {
      preco: this.formRegisterItems.get('preco').value,
      descricao: this.formRegisterItems.get('descricao').value,
    };
    this.rest.postItem(dados).subscribe((result) => {
      if (result.success) this.dialogRef.close();
    });
    console.log('Add Item');
  }

  setProduct(p: string) {
    this.createMenuItemControl.setValue('', { emitEvent: true })

    // verifica se o item já esta na lista de items 
    if (this.selectedProducts.some(product => product.productName === p)) {
      alert("Este item já esta na lista")
      return
    }

    const product = this.products.find(i => i.productName === p)
    if (!product) {
      return
    }

    this.selectedProducts.push(product)
    this.itemRequest.push({ productId: product.productId, quantity: 1 })
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.productsDescription.filter(p => p.toLowerCase().includes(filterValue));
  }
}
