import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

interface Desks {
  name: string;
}

@Component({
  selector: 'rp-choose-desk',
  templateUrl: './choose-desk.component.html',
  styleUrls: ['./choose-desk.component.less']
})
export class ChooseDeskComponent implements OnInit {
  @Input() index: number;
  @Output() indexChanged = new EventEmitter<number>();
  desksControl = new FormControl('', [Validators.required]);
  selectedDesk = "";
  @Output() deskChoosed = new EventEmitter<string>();

  desks: Desks[] = [
    { name: 'Delivery' },
    { name: 'Balcão' },
    { name: 'Mesa - 1' },
    { name: 'Mesa - 2' },
    { name: 'Mesa - 3' },
    { name: 'Mesa - 4' },
    { name: 'Mesa - 5' },
    { name: 'Mesa - 6' },
    { name: 'Mesa - 7' },
    { name: 'Mesa - 8' },
    { name: 'Mesa - 9' },
  ];


  constructor() { }

  ngOnInit(): void {
  }

  initializeOrder() {
    if (!this.desksControl.valid) {
      alert("Selecione uma mesa para prosseguir")
      return
    }

    this.index += 1;
    this.indexChanged.emit(this.index)
    this.deskChoosed.emit(this.selectedDesk)
  }

  cancelAttendance() {
    this.index -= 1;
    this.indexChanged.emit(this.index)
  }

}
