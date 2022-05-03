import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CLIENT_KEY, EMPLOYEE_KEY, PROVIDER_KEY } from 'src/app/core/utils/constants';
import { Client } from 'src/app/modules/clientes/models/client.model';
import { Provider } from 'src/app/modules/fornecedores/models/provider.model';
import { Employee } from 'src/app/modules/funcionarios/models/employee.model';

interface DialogData {
  id: any;
  name: string;
  type: string;
}

@Component({
  selector: 'rp-shared-dialog',
  templateUrl: './shared-dialog.component.html',
  styleUrls: ['./shared-dialog.component.less']
})
export class SharedDialogComponent implements OnInit {

  message = ''
  message2 = ''

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
    switch (this.data.type) {
      case EMPLOYEE_KEY:
        this.message = 'Funcionário'
        this.message2 = 'Será desligado(a)!'
        break;
      case PROVIDER_KEY:
        this.message = 'Fornecedor'
        this.message2 = 'Será descomissionado(a)!'
        break;
      case CLIENT_KEY:
        this.message = 'Cliente'
        this.message2 = 'Será excluído(a)!'
        break
    }
  }

}
