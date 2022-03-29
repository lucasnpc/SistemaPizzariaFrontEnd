import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Employee } from '../../models/employee.model';
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

  ngOnInit(): void { }

  addEmployee() {
    var dados: Employee = {
      cpf: this.formRegisterEmployees.get('cpf').value,
      name: this.formRegisterEmployees.get('nome').value,
      street: this.formRegisterEmployees.get('rua').value,
      number: this.formRegisterEmployees.get('numero').value,
      district: this.formRegisterEmployees.get('bairro').value,
      city: this.formRegisterEmployees.get('cidade').value,
      phone: this.formRegisterEmployees.get('telefone').value,
      role: this.formRegisterEmployees.get('cargo').value,
      admissionDate: this.formRegisterEmployees.get('dataAdmissao').value,
      birthDate: this.formRegisterEmployees.get('dataNascimento').value,
      terminationDate: null,
      salary: 0,
      isOutsource: false,
      isActive: true,
      businessCnpj: ''
    };

    this.rest.postEmployee(dados).subscribe((result) => {
      if (result.success) this.dialogRef.close();
    });
  }
}
