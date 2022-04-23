import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { BusinessStorage } from 'src/app/core/utils/business-storage';
import { BUSINESS_CNPJ } from 'src/app/core/utils/constants';
import { Client } from '../../models/client.model';
import { ClienteService } from '../../service/cliente.service';
import { DialogAddInClientesComponent } from '../dialog-add-in-clientes/dialog-add-in-clientes.component';

@Component({
  selector: 'rp-add-cliente',
  templateUrl: './add-cliente.component.html',
  styleUrls: ['./add-cliente.component.less'],
})
export class AddClienteComponent implements OnInit {
  formRegisterClients = this.fb.group({
    telefone: ['', Validators.required],
    nome: ['', Validators.required],
    numero: ['', Validators.required],
    rua: ['', Validators.required],
    bairro: ['', Validators.required],
    cidade: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private rest: ClienteService,
    public dialogRef: MatDialogRef<DialogAddInClientesComponent>,
    private storage: BusinessStorage
  ) { }

  ngOnInit(): void { }

  addClient() {
    var data: Client = {
      clientId: null,
      name: this.formRegisterClients.get('nome').value,
      street: this.formRegisterClients.get('rua').value,
      number: this.formRegisterClients.get('numero').value,
      district: this.formRegisterClients.get('bairro').value,
      city: this.formRegisterClients.get('cidade').value,
      phone: this.formRegisterClients.get('telefone').value,
      businessCnpj: this.storage.get(BUSINESS_CNPJ)
    };

    this.rest.postCustomer(data).subscribe((result) => {
      if (result.success) this.dialogRef.close(true);
    });
  }
}
