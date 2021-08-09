import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Funcionario } from '../../models/funcionarios.model';
import { FuncionarioService } from '../../service/funcionario.service';
import { DialogAddInFuncionariosComponent } from '../dialog-add-in-funcionarios/dialog-add-in-funcionarios.component';

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

  constructor(
    private fb: FormBuilder,
    dateAdapter: DateAdapter<any>,
    private rest: FuncionarioService,
    public dialogRef: MatDialogRef<DialogAddInFuncionariosComponent>
  ) {
    dateAdapter.setLocale('pt-br');
  }

  ngOnInit(): void {}

  addEmployee() {
    var dados: Funcionario = {
      cpf: this.formRegisterEmployees.get('cpf').value,
      nome: this.formRegisterEmployees.get('nome').value,
      rua: this.formRegisterEmployees.get('rua').value,
      numero: this.formRegisterEmployees.get('numero').value,
      bairro: this.formRegisterEmployees.get('bairro').value,
      cidade: this.formRegisterEmployees.get('cidade').value,
      telefone: this.formRegisterEmployees.get('telefone').value,
      cargo: this.formRegisterEmployees.get('cargo').value,
      dataAdmissao: this.formRegisterEmployees.get('dataAdmissao').value,
      dataNascimento: this.formRegisterEmployees.get('dataNascimento').value,
      status: 'Ativo',
    };

    this.rest.postEmployee(dados).subscribe((result) => {
      if (result.success) this.dialogRef.close();
    });
  }
}
