import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validateFormFields } from 'src/app/core/utils/form-helper';
import { ItemCardapioModel } from '../../models/item-cardapio.model';
import { CardapioService } from '../../service/cardapio.service';

@Component({
  selector: 'rp-itens-cardapio',
  templateUrl: './itens-cardapio.component.html',
  styleUrls: ['./itens-cardapio.component.less'],
})
export class ItensCardapioComponent implements OnInit {
  itens: ItemCardapioModel[];
  cardapioForm: FormGroup;
  itemCount: number;

  constructor(private rest: CardapioService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.rest.getItens().subscribe((result) => {
      this.itens = result;
    });
    this.rest.getItensCount().subscribe((result) => {
      this.itemCount = result;
    });
    this.cardapioForm = this.fb.group({
      id: [{ value: '', disabled: true }, [Validators.required]],
      descricao: [{ value: '', disabled: false }, [Validators.required]],
      preco: [{ value: '', disabled: false }, [Validators.required]],
    });
  }

  adicionarItem() {
    validateFormFields(this.cardapioForm);
    this.itemCount += 1;

    if (this.cardapioForm.valid) {
      var dados: ItemCardapioModel = {
        idItem: this.itemCount,
        descricao: this.cardapioForm.get('descricao').value,
        preco: this.cardapioForm.get('preco').value,
        ingredientes: null,
      };

      this.rest.postItem(dados).subscribe(
        (result) => {
          if (result) console.log('Item adicionado');
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
  alterarItem() {}
  removerItem() {}
}
