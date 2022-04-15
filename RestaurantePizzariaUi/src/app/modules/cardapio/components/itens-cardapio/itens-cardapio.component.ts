import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BusinessStorage } from 'src/app/core/utils/business-storage';
import { MenuItem } from '../../models/menu-item.model';
import { CardapioService } from '../../service/menu.service';

@Component({
  selector: 'rp-itens-cardapio',
  templateUrl: './itens-cardapio.component.html',
  styleUrls: ['./itens-cardapio.component.less'],
})
export class ItensCardapioComponent implements OnInit {
  @Input() filterEvent: Event;
  filterValue: String;
  items: MenuItem[];
  clickedRow: MenuItem;
  dataSource: any;

  displayedColumns: string[] = [
    'description',
    'price'
  ]

  constructor(private rest: CardapioService, private storage: BusinessStorage) { }

  ngOnInit(): void {
    this.rest.getItens(this.storage.get("businessCnpj")).subscribe((result) => {
      this.items = result.data;
      this.dataSource = new MatTableDataSource(this.items)
    });
  }

  ngOnChanges() {
    if (this.filterEvent != null) this.applyFilter(this.filterEvent);
  }

  applyFilter(event: Event) {
    this.filterValue = (event.target as HTMLInputElement).value.toString();
    this.dataSource.filter = this.filterValue.trim().toLowerCase();
  }

  setRow(row: MenuItem) {
    this.clickedRow = row;
  }
}
