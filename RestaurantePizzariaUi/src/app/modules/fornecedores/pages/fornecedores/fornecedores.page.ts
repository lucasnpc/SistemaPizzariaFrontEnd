import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddProviderDialogComponent } from '../../components/add-provider-dialog/add-provider-dialog.component';

@Component({
  templateUrl: './fornecedores.page.html',
  styleUrls: ['./fornecedores.page.less']
})
export class FornecedoresPage implements OnInit {
  filterEvent: Event;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void { }

  openDialog() {
    const dialogRef = this.dialog.open(AddProviderDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    })
  }
  applyFilter(event: Event) {
    this.filterEvent = event;
  }
}
