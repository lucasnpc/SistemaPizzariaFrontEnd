import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { BusinessStorage } from 'src/app/core/utils/business-storage';
import { MenuItem } from 'src/app/modules/cardapio/models/menu-item.model';
import { Order } from 'src/app/modules/dashboard/models/order.model';

@Component({
  selector: 'rp-order-listitem',
  templateUrl: './order-listitem.component.html',
  styleUrls: ['./order-listitem.component.less']
})
export class OrderListitemComponent implements OnInit {

  @Input() item: MenuItem
  @Input() desk: string
  itemQuantity: number = 0;
  _order: Order = new Order()
  @Output() lessOrder = new EventEmitter<Order>()
  @Output() sumOrder = new EventEmitter<any>();

  constructor(private storage: BusinessStorage) { }

  ngOnInit(): void {
  }

  lessItemQuantity() {
    if (this.itemQuantity > 0)
      this.itemQuantity--
    this.emitOrder(false)
  }

  increaseItemQuantity() {
    this.itemQuantity++
    this.emitOrder(true)
  }

  emitOrder(sum: boolean) {
    this._order = {
      orderId: null,
      itemId: this.item.itemId,
      itemQuantity: this.itemQuantity,
      employeeCpf: null,
      deskDescription: this.desk,
      concluded: false,
      businessCnpj: this.storage.get("businessCnpj"),
      dateTimeOrder: new Date()
    }
    sum ? this.sumOrder.emit(this._order) : this.lessOrder.emit(this._order)
  }

}
