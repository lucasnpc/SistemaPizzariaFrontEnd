import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  addClient() {
    console.log('Add Client');
  }
}
