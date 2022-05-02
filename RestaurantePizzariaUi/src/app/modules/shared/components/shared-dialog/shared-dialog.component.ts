import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Client } from 'src/app/modules/clientes/models/client.model';
import { Provider } from 'src/app/modules/fornecedores/models/provider.model';
import { Employee } from 'src/app/modules/funcionarios/models/employee.model';

@Component({
  selector: 'rp-shared-dialog',
  templateUrl: './shared-dialog.component.html',
  styleUrls: ['./shared-dialog.component.less']
})
export class SharedDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {    
    switch (this.data) {
      case this.data as Employee:
        console.log('Employee');
        break;
      case this.data as Provider:
        console.log('Provider');
        break;
      case this.data as Client:
        console.log('Client');
        break
      default:
        console.log(this.data);
        break
    }
  }

}
