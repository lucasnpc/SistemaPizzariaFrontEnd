import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  addItem() {
    console.log('Add Item');
  }
}
