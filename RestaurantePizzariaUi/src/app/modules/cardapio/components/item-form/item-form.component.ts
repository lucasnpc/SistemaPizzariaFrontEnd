import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validateFormFields } from 'src/app/core/utils/form-helper';
import { ItemCardapioModel } from '../../models/item-cardapio.model';

@Component({
  selector: 'rp-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.less'],
})
export class ItemFormComponent implements OnInit {
  cardapioForm: FormGroup;

  @Output() adicionar= new EventEmitter<ItemCardapioModel>();
  @Output() alterar= new EventEmitter<ItemCardapioModel>();
  @Output() remover= new EventEmitter<ItemCardapioModel>();

  @Input() item: ItemCardapioModel;

  constructor(private fb: FormBuilder) {
    this.cardapioForm = this.fb.group({
      id: [{ value: '', disabled: true }, [Validators.required]],
      descricao: [{ value: '', disabled: false }, [Validators.required]],
      preco: [{ value: '', disabled: false }, [Validators.required]],
    });
  }

  ngOnInit(): void {}

  adicionarItem() {
    validateFormFields(this.cardapioForm);

    if (this.cardapioForm.valid) {
      var dados: ItemCardapioModel = {
        idItem: 0,
        descricao: this.cardapioForm.get('descricao').value,
        preco: this.cardapioForm.get('preco').value,
        ingredientes: null,
      };
    }
    this.adicionar.emit(dados);
  }
  alterarItem() {}
  removerItem() {}
}
