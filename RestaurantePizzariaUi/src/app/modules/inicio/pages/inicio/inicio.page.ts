import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.less']
})
export class InicioPage implements OnInit {
  filterEvent: Event;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void { }

  openDialog() {
    console.log("open dialog");
  }
  applyFilter(event: Event) {
    this.filterEvent = event;
  }
}
