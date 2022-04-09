import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { BusinessStorage } from 'src/app/core/utils/business-storage';
import { MenuItem } from 'src/app/modules/cardapio/models/menu-item.model';
import { InicioService } from '../../services/inicio.service';

@Component({
  selector: 'rp-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.less']
})
export class CreateOrderComponent implements OnInit {
  @Input() index: number;
  @Output() indexChanged = new EventEmitter<number>();
  @Input() desk: string;

  createOrderControl = new FormControl('');
  items: MenuItem[]
  itemsDescription: string[];
  filteredItems: Observable<string[]>;
  selectedItem: string;
  selectedItems: MenuItem[]

  constructor(private inicioService: InicioService, private storage: BusinessStorage) { }

  ngOnInit(): void {
    this.inicioService.getItems(this.storage.get("businessCnpj")).subscribe(result => {
      this.items = result.data
      this.itemsDescription = this.items.map(item => item.description)

      this.filteredItems = this.createOrderControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value))
      )
    })
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.itemsDescription.filter(item => item.toLowerCase().includes(filterValue));
  }

  createOrder() {
    console.log("CreateOrder");
  }

  cancelAttendance() {
    this.index = 0;
    this.indexChanged.emit(this.index)
  }

  selectItem() {    
    if (this.selectedItem != undefined) {
      this.selectedItems = this.items.map(value => value.description == this.selectedItem ? value : null)
      this.selectedItem = '';
    }
  }

}
