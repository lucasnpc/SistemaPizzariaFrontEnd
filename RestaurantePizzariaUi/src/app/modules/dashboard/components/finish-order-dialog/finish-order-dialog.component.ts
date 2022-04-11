import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  desk: string;
}

@Component({
  selector: 'rp-finish-order-dialog',
  templateUrl: './finish-order-dialog.component.html',
  styleUrls: ['./finish-order-dialog.component.less']
})
export class FinishOrderDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
  }

}
