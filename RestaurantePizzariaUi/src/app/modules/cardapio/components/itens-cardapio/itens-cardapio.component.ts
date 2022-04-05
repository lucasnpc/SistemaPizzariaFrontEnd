import { Component, OnInit } from '@angular/core';
import { BusinessStorage } from 'src/app/core/utils/business-storage';
import { MenuItem } from '../../models/menu-item.model';
import { CardapioService } from '../../service/cardapio.service';

@Component({
  selector: 'rp-itens-cardapio',
  templateUrl: './itens-cardapio.component.html',
  styleUrls: ['./itens-cardapio.component.less'],
})
export class ItensCardapioComponent implements OnInit {
  itens: MenuItem[];
  itemCount: number;

  constructor(private rest: CardapioService, private storage: BusinessStorage) { }

  ngOnInit(): void {
    this.rest.getItens(this.storage.get("businessCnpj")).subscribe((result) => {
      this.itens = result.data;
    });
    this.rest.getItensCount(this.storage.get("businessCnpj")).subscribe((result) => {
      this.itemCount = result.data;
    });
  }

  adicionarItem(dados: MenuItem) {
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
  alterarItem(dados: MenuItem) { }
  removerItem(dados: MenuItem) { }
}
