import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rp-choose-desk',
  templateUrl: './choose-desk.component.html',
  styleUrls: ['./choose-desk.component.less']
})
export class ChooseDeskComponent implements OnInit {
  @Input() index: number;
  @Output() indexChanged = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  initializeOrder() {
    this.index += 1;
    this.indexChanged.emit(this.index)
  }

  cancelAttendance() {
    this.index -= 1;
    this.indexChanged.emit(this.index)
  }

}
