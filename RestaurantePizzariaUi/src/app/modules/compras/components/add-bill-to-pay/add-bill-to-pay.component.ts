import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogAddInContasComponent } from '../dialog-add-in-contas/dialog-add-in-contas.component';

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
  @ViewChild('selectEhFixa') ehFixa: any;
  @ViewChild('selectTypeService') tipoServico: any;

  options = ['Sim', 'Não'];
  services = [
    'Limpeza',
    'Construção',
    'Terceirizados',
    'Manutenção',
    'Transporte',
  ];
  constructor(
    private fb: FormBuilder,
    dateAdapter: DateAdapter<any>,
    public dialogRef: MatDialogRef<DialogAddInContasComponent>
  ) {
    dateAdapter.setLocale('pt-br');
  }

  ngOnInit(): void {}


}
