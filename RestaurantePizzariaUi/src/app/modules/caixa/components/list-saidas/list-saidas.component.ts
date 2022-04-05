import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BusinessStorage } from 'src/app/core/utils/business-storage';
import { Expense } from '../../models/expense.model';
import { CaixaService } from '../../service/caixa.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079 },
  { position: 2, name: 'Helium', weight: 4.0026 },
  { position: 3, name: 'Gas', weight: 4.0026 },
  { position: 4, name: 'Uranium', weight: 4.0026 },
  { position: 5, name: 'Metane', weight: 4.12 },
];

@Component({
  selector: 'rp-list-saidas',
  templateUrl: './list-saidas.component.html',
  styleUrls: ['./list-saidas.component.less'],
})
export class ListSaidasComponent implements OnInit {
  saidas: Expense[];
  clickedRow: Expense;
  dataSource: any;

  constructor(private rest: CaixaService, private storage: BusinessStorage) {}

  ngOnInit(): void {
    this.rest.getExpenses(this.storage.get("businessCnpj")).subscribe((result) => {
      this.saidas = result.data;
      this.dataSource = new MatTableDataSource(this.saidas);
    });
  }
  displayedColumns: string[] = ['Descrição', 'Valor'];

  setRow(row: Expense) {
    this.clickedRow = row;
  }
}
