import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddInFuncionariosComponent } from '../../components/dialog-add-in-funcionarios/dialog-add-in-funcionarios.component';

@Component({
  templateUrl: './funcionarios.page.html',
  styleUrls: ['./funcionarios.page.less'],
})
export class FuncionariosPage implements OnInit {
  filterEvent: Event;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogAddInFuncionariosComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog funcionários result: ${result}`);
    });
  }
  applyFilter(event: Event) {
    this.filterEvent = event;
  }
}
