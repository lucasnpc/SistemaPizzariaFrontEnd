import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.less'],
})
export class CadastroPage implements OnInit {
  formCadastroNegocio = this.fb.group({
    nomeNegocio: ['', Validators.required],
    ruaNegocio: ['', Validators.required],
    numeroNegocio: ['', Validators.required],
    bairroNegocio: ['', Validators.required],
    cidadeNegocio: ['', Validators.required],
    estadoNegocio: ['', Validators.required],
  });
  formCadastroUsuario = this.fb.group({
    usuario: ['', Validators.required],
    senha: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
