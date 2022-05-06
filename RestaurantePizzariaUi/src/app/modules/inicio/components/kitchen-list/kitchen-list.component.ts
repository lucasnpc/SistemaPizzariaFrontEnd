import { Component, OnInit } from '@angular/core';

interface FakeOrder {
  desk: string;
  id: number;
}

@Component({
  selector: 'rp-kitchen-list',
  templateUrl: './kitchen-list.component.html',
  styleUrls: ['./kitchen-list.component.less']
})
export class KitchenListComponent implements OnInit {

  fakeOrders: FakeOrder[] = [
    { desk: 'Mesa 2222', id: 123 },
    { desk: 'Mesa 1111', id: 132 },
    { desk: 'Mesa 1111', id: 132 },
    { desk: 'Mesa 1111', id: 132 },
    { desk: 'Mesa 1111', id: 132 },
    { desk: 'Mesa 1111', id: 132 },
    { desk: 'Mesa 1111', id: 132 },
    { desk: 'Mesa 1111', id: 132 },
    { desk: 'Mesa 1111', id: 132 },
    { desk: 'Mesa 1111', id: 132 },
    { desk: 'Mesa 1111', id: 132 },
    { desk: 'Mesa 1111', id: 132 },
    { desk: 'Mesa 1111', id: 132 },
    { desk: 'Mesa 1111', id: 132 },
    { desk: 'Mesa 1111', id: 1332322 },
    { desk: 'Mesa 1111', id: 132 },
    { desk: 'Mesa 1111', id: 132 },
    { desk: 'Mesa 1111', id: 132 },
    { desk: 'Mesa 1111', id: 132 },
    { desk: 'Mesa 1111', id: 132 },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  seeOrderDetail(order: FakeOrder) {
    console.log('See order detail');
  }

  startOrderPreparing(order: FakeOrder) {
    console.log('start order preparing');
  }

  concludeOrderPreparing(order: FakeOrder) {
    console.log('finish order preparing');
  }

}
