import { Component, OnInit } from '@angular/core';
import { KitchenService } from '../../services/kitchen.service';

interface ClientOrder {
  clientOrderId: string;
  deskDescription: number;
}

@Component({
  selector: 'rp-kitchen-list',
  templateUrl: './kitchen-list.component.html',
  styleUrls: ['./kitchen-list.component.less']
})
export class KitchenListComponent implements OnInit {

  fakeOrders: ClientOrder[]

  constructor(private service: KitchenService) { }

  ngOnInit(): void {
    this.service.getSentClientOrders().subscribe(result => {
      if (result) {
        this.fakeOrders = result.data
      }
    })
  }

  seeOrderDetail(order: ClientOrder) {
    console.log('See order detail');
  }

  startOrderPreparing(order: ClientOrder) {
    console.log('start order preparing');
  }

  concludeOrderPreparing(order: ClientOrder) {
    console.log('finish order preparing');
  }

}
