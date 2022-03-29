import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Expense } from '../../models/expense.model';
import { CaixaService } from '../../service/caixa.service';
import { DialogAddInCaixaComponent } from '../dialog-add-in-caixa/dialog-add-in-caixa.component';

@Component({
  selector: 'rp-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.less'],
})
export class AddExpenseComponent implements OnInit {
  formRegisterExpenses = this.fb.group({
    descricao: ['', Validators.required],
    valor: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private rest: CaixaService,
    public dialogRef: MatDialogRef<DialogAddInCaixaComponent>
  ) {}

  ngOnInit(): void {}

  addExpense() {
    console.log('Add expense');
    var dados = {
      descricao: this.formRegisterExpenses.get('descricao').value,
      valor: this.formRegisterExpenses.get('valor').value,
    };
    this.rest.postExpense(dados).subscribe((result) => {
      if (result.success) this.dialogRef.close();
    });
  }
}
