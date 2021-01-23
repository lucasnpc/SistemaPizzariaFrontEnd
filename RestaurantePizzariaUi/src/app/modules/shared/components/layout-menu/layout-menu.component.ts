import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rp-layout-menu',
  templateUrl: './layout-menu.component.html',
  styleUrls: ['./layout-menu.component.less']
})
export class LayoutMenuComponent implements OnInit {
  sidebarVisible = false;
  constructor() { }

  ngOnInit(): void {
  }

}
