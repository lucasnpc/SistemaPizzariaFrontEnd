import { Component, OnInit } from '@angular/core';

export interface ItensCardapio {
  preco: number;
  descricao: String;
}

@Component({
  selector: 'rp-itens-cardapio',
  templateUrl: './itens-cardapio.component.html',
  styleUrls: ['./itens-cardapio.component.less']
})
export class ItensCardapioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  itens: ItensCardapio[] = [
    {
      preco: 10.00,
      descricao: 'Pizza Frango com catupiry',
    },
    {
      preco: 12.00,
      descricao: 'Pizza Frango com cheddar',
    },
    {
      preco: 15.00,
      descricao: 'Pizza de chocolate com catupiry',
    },
    {
      preco: 18.00,
      descricao: 'Pizza Portuguesa',
    },
    {
      preco: 8.00,
      descricao: 'Coca-cola',
    },
    {
      preco: 9.00,
      descricao: 'Cerveja 600ml',
    },
    {
      preco: 20.00,
      descricao: 'Batata gratinada',
    },
    {
      preco: 25.00,
      descricao: 'Pizza de peperone',
    },
    {
      preco: 13.99,
      descricao: 'Pizza de calabresa',
    },
  ];

}
