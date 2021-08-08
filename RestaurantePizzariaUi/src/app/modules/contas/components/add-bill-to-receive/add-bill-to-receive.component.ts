import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'rp-add-bill-to-receive',
  templateUrl: './add-bill-to-receive.component.html',
  styleUrls: ['./add-bill-to-receive.component.less'],
})
export class AddBillToReceiveComponent implements OnInit {
  formRegisterBillsToReceive = this.fb.group({
    valor: ['', Validators.required],
    descricao: ['', Validators.required],
    dataRecebimento: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, dateFormat: DateAdapter<any>) {
    dateFormat.setLocale('pt-br');
  }

  ngOnInit(): void {}

  addBillToReceive() {
    console.log('Add bills to receive');
  }
}
