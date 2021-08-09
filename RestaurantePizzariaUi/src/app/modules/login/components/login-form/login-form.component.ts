import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'rp-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.less'],
})
export class LoginFormComponent implements OnInit {
  @Output() entrar = new EventEmitter<Usuario>();
  @Output() cadastrar = new EventEmitter<Boolean>();

  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      usuario: [{ value: '', disabled: false }, [Validators.required]],
      senha: [{ value: '', disabled: false }, [Validators.required]],
    });
  }

  submitLogin() {
    var dados: Usuario = {
      usuarioId: this.loginForm.get('usuario').value,
      idNegocio: '',
      senha: this.loginForm.get('senha').value,
      tipoUsuario: 'Atendente',
    };
    this.entrar.emit(dados);
  }
}
