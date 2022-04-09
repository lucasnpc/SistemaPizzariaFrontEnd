import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { BusinessStorage } from 'src/app/core/utils/business-storage';
import { MenuItem } from 'src/app/modules/cardapio/models/menu-item.model';
import { Order } from 'src/app/modules/dashboard/models/order.model';
import { InicioService } from '../../services/inicio.service';
import { OpenDeskDialogComponent } from '../open-desk-dialog/open-desk-dialog.component';

export interface ItemRequest {
  itemId: number,
  quantity: number
}

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
  selectedItems: MenuItem[] = []
  totalOrder = 0;

  constructor(private inicioService: InicioService, private storage: BusinessStorage, private dialog: MatDialog) { }

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
    if (this.selectedItems.length == 0 || this.totalOrder == 0) {
      alert('Impossível continuar para registro de pedido')
      return
    }
    const dialogRef = this.dialog.open(OpenDeskDialogComponent, {
      data: { desk: this.desk }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result)
        this.inicioService.postOrder({
          employeeCpf: null,
          deskDescription: this.desk,
          concluded: false,
          businessCnpj: this.storage.get("businessCnpj"),
          dateTimeOrder: new Date()
        }).subscribe(result => {
          if (result) {
            this.selectedItems.map(value => {
              this.inicioService.postOrderMenuItems({
                orderId: result.orderId,
                itemId: value.itemId,
                itemQuantity: 123
              }).subscribe(result => {
                if (result.sucess)
                  this.cancelAttendance()
              })
            })
          }
        })
      else
        this.cancelAttendance()
    })
  }

  cancelAttendance() {
    this.index = 0;
    this.indexChanged.emit(this.index)
  }

  selectItem() {
    var flag = false
    this.selectedItems.map(value => value.description == this.selectedItem ? flag = true : undefined)
    if (this.selectedItem != undefined && !flag) {
      this.items.map(value => value.description == this.selectedItem ? this.selectedItems.push(value) : undefined)
    }
    this.selectedItem = '';
  }

  sumOrder(order: Order) {
    this.selectedItems.map(value => value.itemId == order.itemId ? this.totalOrder += Number(value.price) : undefined)
  }

  lessOrder(order: Order) {
    this.selectedItems.map(value => value.itemId == order.itemId ? this.totalOrder -= Number(value.price) : undefined)
  }
}
