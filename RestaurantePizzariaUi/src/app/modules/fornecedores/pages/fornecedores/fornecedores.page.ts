import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  templateUrl: './fornecedores.page.html',
  styleUrls: ['./fornecedores.page.less']
})
export class FornecedoresPage implements OnInit {
  filterEvent: Event;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog() {
    console.log("open dialog");
  }
  applyFilter(event: Event) {
    this.filterEvent = event;
  }
}
