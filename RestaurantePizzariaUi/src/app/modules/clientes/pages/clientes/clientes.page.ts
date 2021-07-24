import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddInClientesComponent } from '../../components/dialog-add-in-clientes/dialog-add-in-clientes.component';

@Component({
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.less'],
})
export class ClientesPage implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogAddInClientesComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog clientes result: ${result}`);
    });
  }
}
