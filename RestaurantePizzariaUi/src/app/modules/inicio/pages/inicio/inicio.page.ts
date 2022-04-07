import { Component, OnInit, Sanitizer } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

const DOOR_OPEN = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="120" height="120"><path fill="none" d="M0 0H24V24H0z"/>
<path d="M2 21v-2h2V4.835c0-.484.346-.898.821-.984l9.472-1.722c.326-.06.638.157.697.483.007.035.01.07.01.107v1.28L19 4c.552 0 1 .448 1 
1v14h2v2h-4V6h-3v15H2zM13 4.396L6 5.67V19h7V4.396zM12 11v2h-2v-2h2z" fill="rgba(132,134,132,1)"/></svg>`;

@Component({
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.less']
})
export class InicioPage implements OnInit {

  tabs = ['First', 'Second', 'Third'];
  selected = 0;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconLiteral('door-open', sanitizer.bypassSecurityTrustHtml(DOOR_OPEN))
  }

  ngOnInit(): void { }

  changeIndex(index: number) {
    this.selected = index
  }

}
