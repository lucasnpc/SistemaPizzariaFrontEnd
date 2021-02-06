import { Component, OnInit } from '@angular/core';

export var single = [
  {
    "name": "Recebidos",
    "value": 55
  },
  {
    "name": "Pagos",
    "value": 55
  },
];

@Component({
  selector: 'rp-grafico-contas',
  templateUrl: './grafico-contas.component.html',
  styleUrls: ['./grafico-contas.component.less']
})
export class GraficoContasComponent implements OnInit {

  single: any[];
  view: any = [600, 193.99];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  colorScheme = {
    domain: ['#5AA454', '#dbd945']
  };

  constructor() { Object.assign(this, { single }); }

  ngOnInit(): void {
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

}
