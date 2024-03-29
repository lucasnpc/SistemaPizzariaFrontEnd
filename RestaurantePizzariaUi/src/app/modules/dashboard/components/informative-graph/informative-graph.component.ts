import { Component, Input, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { DashboardService } from '../../service/dashboard.service';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { DatePipe } from '@angular/common';
import { BusinessStorage } from 'src/app/core/utils/business-storage';

const EXPORT_ICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
<path fill="none" d="M0 0h24v24H0z"/><path d="M13 14h-2a8.999 8.999 0 0 0-7.968 4.81A10.136 10.136 0 0 1 3 18C3 12.477 7.477 8 13 8V3l10 8-10 8v-5z"
 fill="rgba(132,134,132,1)"/></svg>`;

@Component({
  selector: 'rp-informative-graph',
  templateUrl: './informative-graph.component.html',
  styleUrls: ['./informative-graph.component.less'],
})
export class InformativeGraphComponent implements OnInit {
  data: any[];
  @Input() selectedDate: Date
  todayDate: string

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Mesas';
  showYAxisLabel = true;
  yAxisLabel = 'Quantidade';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };

  constructor(
    private rest: DashboardService,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private storage: BusinessStorage
  ) {
    iconRegistry.addSvgIconLiteral(
      'export-icon',
      sanitizer.bypassSecurityTrustHtml(EXPORT_ICON)
    );
  }

  ngOnInit(): void {
    this.rest.getTopSalesDesks(this.storage.get("businessCnpj")).subscribe((result) => {
      this.data = result.data;
    });
  }

  ngOnChanges() {
    this.todayDate = new DatePipe('pt-br').transform(this.selectedDate);
  }

  onSelect(event: any) {
    console.log(event);
  }

  selectTopDesksGraph() {
    this.colorScheme = {
      domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
    };
    this.rest.getTopSalesDesks(this.storage.get("businessCnpj")).subscribe((result) => {
      this.data = result.data;
      this.xAxisLabel = 'Mesas';
    });
  }

  selectTopItemsGraph() {
    this.colorScheme = {
      domain: ['#278DF6', '#19AD79', '#FA4B4B', '#AAAAAA'],
    };
    this.rest.getTopMenuItems(this.storage.get("businessCnpj")).subscribe((result) => {
      this.data = result.data;
      this.xAxisLabel = 'Itens';
    });
  }

  exportData() {
    var doc = new jsPDF();

    console.log(this.data);

    autoTable(doc, {
      columns: [
        { header: 'Nome', dataKey: 'name' },
        { header: 'Quantidade', dataKey: 'value' },
        { header: 'Valor Total', dataKey: 'totalValue' },
      ],
      body: this.data,
    });
    doc.save(this.todayDate.toString() + '.pdf');
    doc.close;
  }
}