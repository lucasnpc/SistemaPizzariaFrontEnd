import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CaixaService } from '../../service/caixa.service';
import { DialogAddInCaixaComponent } from '../dialog-add-in-caixa/dialog-add-in-caixa.component';

@Component({
  selector: 'rp-dialog-invoice',
  templateUrl: './dialog-invoice.component.html',
  styleUrls: ['./dialog-invoice.component.less'],
})
export class DialogInvoiceComponent implements OnInit {
  payementForm: string;
  payements: string[] = ['Crédito', 'Débito', 'Dinheiro', 'Pix'];
  constructor(
    public dialogRef: MatDialogRef<DialogAddInCaixaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private rest: CaixaService
  ) {}

  ngOnInit(): void {
    if (this.data != null) {
      console.log(this.data);
    }
  }
  addInflow() {
    if (this.payementForm == null) return;

    this.data.formaPagamento = this.payementForm;
    const entrada = {
      numeroMesa: this.data.numeroMesa,
      itensCardapio: this.data.itensCardapio.map(
        (item: { descricao: string }) => item.descricao
      ),
      valorConta: this.data.valorConta,
      formaPagamento: this.payementForm,
    };

    console.log(entrada);

    this.rest.postInflow(entrada).subscribe((result) => {
      if (result.success) this.dialogRef.close();
    });
    this.dialogRef.close();
  }
}
