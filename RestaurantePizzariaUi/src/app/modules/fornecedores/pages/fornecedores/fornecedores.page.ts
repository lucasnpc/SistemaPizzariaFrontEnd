import { Component, OnInit, Provider } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { BusinessStorage } from 'src/app/core/utils/business-storage';
import { AddProviderDialogComponent } from '../../components/add-provider-dialog/add-provider-dialog.component';
import { FornecedoresService } from '../../services/fornecedores.service';

@Component({
  templateUrl: './fornecedores.page.html',
  styleUrls: ['./fornecedores.page.less']
})
export class FornecedoresPage implements OnInit {
  filterEvent: Event;
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

  constructor(private dialog: MatDialog, private service: FornecedoresService, private storage: BusinessStorage) { }

  ngOnInit(): void {
    this.getProviders()
  }

  ngOnChanges() {
    if (this.filterEvent != null) this.applyFilter(this.filterEvent);
  }

  getProviders() {
    this.service.getProviders(this.storage.get("businessCnpj")).subscribe((result) => {
      this.providers = result.data;
      this.dataSource = new MatTableDataSource(this.providers);
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddProviderDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result)
        this.getProviders()
    })
  }

  applyFilter(event: Event) {
    this.filterValue = (event.target as HTMLInputElement).value.toString();
    this.dataSource.filter = this.filterValue.trim().toLowerCase();
  }

  setRow(row: Provider) {
    this.clickedRow = row;
  }
}
