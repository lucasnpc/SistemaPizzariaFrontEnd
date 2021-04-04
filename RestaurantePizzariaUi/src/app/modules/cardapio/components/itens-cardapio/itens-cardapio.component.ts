import { Component, OnInit } from '@angular/core';
import { ItemCardapioModel } from '../../models/item-cardapio.model';
import { CardapioService } from '../../service/cardapio.service';

@Component({
  selector: 'rp-itens-cardapio',
  templateUrl: './itens-cardapio.component.html',
  styleUrls: ['./itens-cardapio.component.less'],
})
export class ItensCardapioComponent implements OnInit {
  itens: ItemCardapioModel[];
  itemCount: number;

  constructor(private rest: CardapioService) {}

  ngOnInit(): void {
    this.rest.getItens().subscribe((result) => {
      this.itens = result;
    });
    this.rest.getItensCount().subscribe((result) => {
      this.itemCount = result;
    });
  }

  adicionarItem(dados: ItemCardapioModel) {
    this.itemCount += 1;

    this.rest.postItem(dados).subscribe(
      (result) => {
        if (result) console.log('Item adicionado');
      },
      (error) => {
        console.log(error);
      }
    );
  }
  alterarItem(dados: ItemCardapioModel) {}
  removerItem(dados: ItemCardapioModel) {}
}
