import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'rp-add-bill-to-pay',
  templateUrl: './add-bill-to-pay.component.html',
  styleUrls: ['./add-bill-to-pay.component.less'],
})
export class AddBillToPayComponent implements OnInit {
  formRegisterBillsToPay = this.fb.group({
    ehFixa: ['', Validators.required],
    descricao: ['', Validators.required],
    dataPagamento: ['', Validators.required],
    valor: ['', Validators.required],
    tipoServico: ['', Validators.required],
  });

  options = ['Sim', 'Não'];
  services = [
    'Limpeza',
    'Construção',
    'Terceirizados',
    'Manutenção',
    'Transporte',
  ];
  constructor(private fb: FormBuilder, dateAdapter: DateAdapter<any>) {
    dateAdapter.setLocale('pt-br');
  }

  ngOnInit(): void {}

  addBillToPay() {
    console.log('Add bills to pay');
  }
}
