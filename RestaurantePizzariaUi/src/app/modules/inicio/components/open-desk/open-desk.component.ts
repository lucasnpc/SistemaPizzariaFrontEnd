import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rp-open-desk',
  templateUrl: './open-desk.component.html',
  styleUrls: ['./open-desk.component.less']
})
export class OpenDeskComponent implements OnInit {
  @Input() index: number;
  @Output() indexChanged = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  openDesk() {
    this.index += 1
    this.indexChanged.emit(this.index);
  }
}
