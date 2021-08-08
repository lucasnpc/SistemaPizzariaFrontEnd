import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  addExpense() {
    console.log('Add expense');
  }
}
