import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ItemCardapioModel } from '../../models/item-cardapio.model';
import { CardapioService } from '../../service/cardapio.service';
import { DialogAddInCardapioComponent } from '../dialog-add-in-cardapio/dialog-add-in-cardapio.component';

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

  constructor(
    private fb: FormBuilder,
    private rest: CardapioService,
    public dialogRef: MatDialogRef<DialogAddInCardapioComponent>
  ) {}

  ngOnInit(): void {}

  addItem() {
    var dados: ItemCardapioModel = {
      idItem: '7',
      preco: this.formRegisterItems.get('preco').value,
      descricao: this.formRegisterItems.get('descricao').value,
      selected: null,
    };
    this.rest.postItem(dados).subscribe((result) => {
      if (result.success) this.dialogRef.close();
    });
    console.log('Add Item');
  }
}
