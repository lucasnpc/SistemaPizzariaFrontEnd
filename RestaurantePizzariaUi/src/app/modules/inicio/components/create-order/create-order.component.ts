import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { BusinessStorage } from 'src/app/core/utils/business-storage';
import { MenuItem } from 'src/app/modules/cardapio/models/menu-item.model';
import { Order } from 'src/app/modules/dashboard/models/order.model';
import { InicioService } from '../../services/inicio.service';
import { OpenDeskDialogComponent } from '../open-desk-dialog/open-desk-dialog.component';

interface ItemRequest {
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
  @Input() orderToUpdate: Order

  createOrderControl = new FormControl('');
  items: MenuItem[]
  itemsDescription: string[];
  filteredItems: Observable<string[]>;
  selectedItem: string;
  selectedItems: MenuItem[] = []
  totalOrder = 0;
  itemRequest: ItemRequest[] = []
  i = 0;

  constructor(private inicioService: InicioService, private storage: BusinessStorage, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.inicioService.getItems(this.storage.get("businessCnpj")).subscribe(result => {
      this.items = result.data
      this.itemsDescription = this.items.map(item => item.description)

      this.filteredItems = this.createOrderControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value))
      )
    })

    if (this.orderToUpdate != undefined) {
      this.desk = this.orderToUpdate.deskDescription
      this.inicioService.getItemsWithOrderId(this.orderToUpdate.orderId.toString()).subscribe(result => {
        if (result) {
          this.selectedItems = result.data
          this.itemRequest = result.data.map(item => ({ itemId: item.itemId, quantity: item.itemQuantity }))
        }
      })
    }
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
      console.log(this.orderToUpdate, this.itemRequest)
      if (result)
        this.orderToUpdate == undefined ? this._postOrder() : this._updateOrder()
      else
        this.cancelAttendance()
    })
  }

  cancelAttendance() {
    this.index = 0;
    this.indexChanged.emit(this.index)
  }

  selectItem() {
    // verifica se selecionou um item
    if (!this.selectedItem) {
      return
    }

    // verifica se o item já esta na lista de items 
    if (this.selectedItems.some(item => item.description === this.selectedItem)) {
      alert("Este item já esta na lista")
      return
    }

    const item = this.items.find(i => i.description === this.selectedItem)
    if (!item) {
      return
    }

    this.selectedItems.push(item)
    this.itemRequest.push({ itemId: item.itemId, quantity: 1 })

    this.selectedItem = '';
  }

  sumOrder(order: ItemRequest) {
    this.selectedItems.map(value => value.itemId == order.itemId ? this.totalOrder += Number(value.price) : undefined)
    this._changeQuantity(order)
  }

  lessOrder(order: ItemRequest) {
    this.selectedItems.map(value => value.itemId == order.itemId ? this.totalOrder -= Number(value.price) : undefined)
    this._changeQuantity(order)
  }

  _changeQuantity(order: ItemRequest) {
    const itemIndex = this.itemRequest.findIndex(item => item.itemId === order.itemId)
    if (itemIndex < 0) {
      return
    }

    this.itemRequest[itemIndex].quantity = order.quantity
  }

  _postOrder() {
    this.inicioService.postOrder({
      employeeCpf: null,
      deskDescription: this.desk,
      concluded: false,
      businessCnpj: this.storage.get("businessCnpj"),
      dateTimeOrder: new Date()
    }).subscribe(result => {
      if (result) {
        this.itemRequest.map(value => {
          this.inicioService.postOrderMenuItems({
            orderId: result.orderId,
            itemId: value.itemId,
            itemQuantity: value.quantity
          }).subscribe(result => {
            if (result.success)
              this.cancelAttendance()
          })
        })
      }
    })
  }

  _updateOrder() {
    this.inicioService.updateOrderMenuItems({
      orderId: this.orderToUpdate.orderId,
      items: this.itemRequest,
    }).subscribe(result => {
      if (result.success)
        this.cancelAttendance()
    })
  }
}
