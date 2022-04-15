import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddInCardapioComponent } from '../../components/dialog-add-in-cardapio/dialog-add-in-cardapio.component';

@Component({
  templateUrl: './cardapio.page.html',
  styleUrls: ['./cardapio.page.less']
})
export class CardapioPage implements OnInit {
  filterEvent: Event;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(){
    const dialogRef = this.dialog.open(DialogAddInCardapioComponent)

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog cardapio result: ${result}`);
      
    })
  }

  applyFilter(event: Event) {
    this.filterEvent = event;
  }
}
