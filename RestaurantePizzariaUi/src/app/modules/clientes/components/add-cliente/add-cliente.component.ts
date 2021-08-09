import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Cliente } from '../../models/clientes.model';
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
    public dialogRef: MatDialogRef<DialogAddInClientesComponent>
  ) {}

  ngOnInit(): void {}

  addClient() {
    var dados: Cliente = {
      idCliente: '2',
      telefone: this.formRegisterClients.get('telefone').value,
      nome: this.formRegisterClients.get('nome').value,
      numero: this.formRegisterClients.get('numero').value,
      rua: this.formRegisterClients.get('rua').value,
      bairro: this.formRegisterClients.get('bairro').value,
      cidade: this.formRegisterClients.get('cidade').value,
    };
    this.rest.postCustomer(dados).subscribe((result) => {
      if (result.success) this.dialogRef.close();
    });
    console.log('Add Client');
  }
}
