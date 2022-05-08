import { Component, OnInit } from '@angular/core';
import { InicioService } from '../../services/inicio.service';
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

  constructor(private service: KitchenService, private inicioService: InicioService) { }

  ngOnInit(): void {
    this.service.getSentClientOrders().subscribe(result => {
      if (result) {
        this.fakeOrders = result.data
      }
    })
  }

  seeOrderDetail(order: ClientOrder) {
    this.inicioService.getItemsWithClientOrderId(order.clientOrderId).subscribe(r =>{
      console.log(r.data);
    })
  }

  startOrderPreparing(order: ClientOrder) {
    console.log('start order preparing');
  }

  concludeOrderPreparing(order: ClientOrder) {
    console.log('finish order preparing');
  }

}
