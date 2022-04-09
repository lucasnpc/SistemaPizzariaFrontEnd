import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  desk: string;
}

@Component({
  selector: 'rp-open-desk-dialog',
  templateUrl: './open-desk-dialog.component.html',
  styleUrls: ['./open-desk-dialog.component.less']
})
export class OpenDeskDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  ngOnInit(): void {
  }

}
