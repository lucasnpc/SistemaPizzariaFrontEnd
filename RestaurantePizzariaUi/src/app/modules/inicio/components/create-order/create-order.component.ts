import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rp-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.less']
})
export class CreateOrderComponent implements OnInit {
  @Input() index: number;
  @Output() indexChanged = new EventEmitter<number>();
  @Input() desk: string;

  constructor() { }

  ngOnInit(): void {
  }

  createOrder() {
    console.log("CreateOrder");

  }

  cancelAttendance() {
    this.index = 0;
    this.indexChanged.emit(this.index)
  }

}
