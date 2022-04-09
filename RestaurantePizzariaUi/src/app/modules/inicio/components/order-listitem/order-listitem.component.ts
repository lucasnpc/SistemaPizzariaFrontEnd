import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { MenuItem } from 'src/app/modules/cardapio/models/menu-item.model';
import { ItemRequest } from '../../models/OrderMenuItem.model';

@Component({
  selector: 'rp-order-listitem',
  templateUrl: './order-listitem.component.html',
  styleUrls: ['./order-listitem.component.less']
})
export class OrderListitemComponent implements OnInit {

  @Input() item: MenuItem
  itemQuantity: number = 0;
  _request: ItemRequest = new ItemRequest()
  @Output() lessOrder = new EventEmitter<ItemRequest>()
  @Output() sumOrder = new EventEmitter<ItemRequest>();

  constructor() { }

  ngOnInit(): void {
  }

  lessItemQuantity() {
    if (this.itemQuantity > 0) {
      this.itemQuantity--
      this.emitOrder(false)
    }
  }

  increaseItemQuantity() {
    this.itemQuantity++
    this.emitOrder(true)
  }

  emitOrder(sum: boolean) {
    this._request = {
      itemId: this.item.itemId,
      quantity: this.itemQuantity,
    }
    sum ? this.sumOrder.emit(this._request) : this.lessOrder.emit(this._request)
  }

}
