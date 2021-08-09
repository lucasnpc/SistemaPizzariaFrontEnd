import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/modules/login/models/usuario.model';
import { Negocio } from '../../models/negocio.model';
import { CadastroService } from '../../service/cadastro.service';

@Component({
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.less'],
})
export class CadastroPage implements OnInit {
  formBusinessRegister = this.fb.group({
    nomeNegocio: ['', Validators.required],
    ruaNegocio: ['', Validators.required],
    numeroNegocio: ['', Validators.required],
    bairroNegocio: ['', Validators.required],
    cidadeNegocio: ['', Validators.required],
    estadoNegocio: ['', Validators.required],
  });
  formUserRegister = this.fb.group({
    usuario: ['', Validators.required],
    senha: ['', Validators.required],
  });

  usuario: Usuario;
  negocio: Negocio;

  constructor(
    private fb: FormBuilder,
    private rest: CadastroService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  setBusiness() {
    if (this.formBusinessRegister != null) {
      this.negocio = {
        idNegocio: '3',
        nome: this.formBusinessRegister.get('nomeNegocio').value,
        rua: this.formBusinessRegister.get('ruaNegocio').value,
        numero: this.formBusinessRegister.get('numeroNegocio').value,
        bairro: this.formBusinessRegister.get('bairroNegocio').value,
        cidade: this.formBusinessRegister.get('cidadeNegocio').value,
        estado: this.formBusinessRegister.get('estadoNegocio').value,
      };
    }
  }
  setUser() {
    if (this.formUserRegister != null) {
      this.usuario = {
        usuarioId: this.formUserRegister.get('usuario').value,
        idNegocio: '3',
        senha: this.formUserRegister.get('senha').value,
        tipoUsuario: 'Atendente',
      };
    }
  }
  finishRegistration() {
    this.rest.postBusiness(this.negocio).subscribe((result) => {
      if (result.success)
        this.rest.postUser(this.usuario).subscribe((result) => {
          if (result.success) {
            alert('Negócio e usuário cadastrado');
            this.router.navigate(['']);
          }
        });
    });
    console.log('finish register');
  }
}
