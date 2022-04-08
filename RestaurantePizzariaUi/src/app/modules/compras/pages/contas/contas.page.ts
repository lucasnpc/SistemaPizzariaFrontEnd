import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddInContasComponent } from '../../components/dialog-add-in-contas/dialog-add-in-contas.component';

@Component({
  templateUrl: './contas.page.html',
  styleUrls: ['./contas.page.less'],
})
export class ContasPage implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogAddInContasComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog contas result: ${result}`);
    });
  }
}
