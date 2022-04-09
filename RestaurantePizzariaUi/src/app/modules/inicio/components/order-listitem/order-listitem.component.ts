import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/modules/cardapio/models/menu-item.model';

@Component({
  selector: 'rp-order-listitem',
  templateUrl: './order-listitem.component.html',
  styleUrls: ['./order-listitem.component.less']
})
export class OrderListitemComponent implements OnInit {

  @Input() item: MenuItem
  itemQuantity: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
