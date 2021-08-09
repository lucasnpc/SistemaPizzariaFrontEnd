import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ContaAReceber } from '../../models/contas-receber.model';
import { ContasService } from '../../service/contas.service';
import { DialogAddInContasComponent } from '../dialog-add-in-contas/dialog-add-in-contas.component';

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

  constructor(
    private fb: FormBuilder,
    dateFormat: DateAdapter<any>,
    private rest: ContasService,
    public dialogRef: MatDialogRef<DialogAddInContasComponent>
  ) {
    dateFormat.setLocale('pt-br');
  }

  ngOnInit(): void {}

  addBillToReceive() {
    var dados: ContaAReceber = {
      idConta: '2',
      valor: this.formRegisterBillsToReceive.get('valor').value,
      descricao: this.formRegisterBillsToReceive.get('descricao').value,
      dataRecebimento:
        this.formRegisterBillsToReceive.get('dataRecebimento').value,
    };
    this.rest.postBillToReceive(dados).subscribe((result) => {
      if (result.success) this.dialogRef.close();
    });
  }
}
