import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.less'],
})
export class CadastroPage implements OnInit {
  formCadastroNegocio: FormGroup;
  formCadastroUsuario: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formCadastroNegocio = this.fb.group({
      nomeNegocio: ['', Validators.required],
      ruaNegocio: ['', Validators.required],
      numeroNegocio: ['', Validators.required],
      bairroNegocio: ['', Validators.required],
      cidadeNegocio: ['', Validators.required],
      estadoNegocio: ['', Validators.required],
    });
    this.formCadastroUsuario = this.fb.group({
      usuario: ['', Validators.required],
      senha: ['', Validators.required],
    });
  }
}
