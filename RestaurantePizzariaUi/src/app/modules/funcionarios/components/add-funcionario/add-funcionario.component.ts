import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'rp-add-funcionario',
  templateUrl: './add-funcionario.component.html',
  styleUrls: ['./add-funcionario.component.less'],
})
export class AddFuncionarioComponent implements OnInit {
  formRegisterEmployees = this.fb.group({
    cpf: ['', Validators.required],
    nome: ['', Validators.required],
    rua: ['', Validators.required],
    numero: ['', Validators.required],
    bairro: ['', Validators.required],
    cidade: ['', Validators.required],
    telefone: ['', Validators.required],
    cargo: ['', Validators.required],
    dataAdmissao: ['', Validators.required],
    dataNascimento: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, dateAdapter: DateAdapter<any>) {
    dateAdapter.setLocale('pt-br');
  }

  ngOnInit(): void {}

  addEmployee() {
    console.log('Add Employee');
  }
}
