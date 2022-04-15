import { Component, Input, OnInit, Provider } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BusinessStorage } from 'src/app/core/utils/business-storage';
import { FornecedoresService } from '../../services/fornecedores.service';

@Component({
  selector: 'rp-providers-list',
  templateUrl: './providers-list.component.html',
  styleUrls: ['./providers-list.component.less']
})
export class ProvidersListComponent implements OnInit {
  @Input() filterEvent: Event;
  filterValue: String;
  providers: Provider[];
  clickedRow: Provider;
  dataSource: any;

  displayedColumns: string[] = [
    'providerCnpj',
    'corporateName',
    'street',
    'number',
    'district',
    'city',
    'state',
    'phone',
    'email'
  ]

  constructor(private service: FornecedoresService, private storage: BusinessStorage) { }

  ngOnInit(): void {
    this.service.getProviders(this.storage.get("businessCnpj")).subscribe((result) => {
      this.providers = result.data;
      this.dataSource = new MatTableDataSource(this.providers);
    });
  }

  ngOnChanges() {
    if (this.filterEvent != null) this.applyFilter(this.filterEvent);
  }

  applyFilter(event: Event) {
    this.filterValue = (event.target as HTMLInputElement).value.toString();
    this.dataSource.filter = this.filterValue.trim().toLowerCase();
  }

  setRow(row: Provider) {
    this.clickedRow = row;
  }

}
