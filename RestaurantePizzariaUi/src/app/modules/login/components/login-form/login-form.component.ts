import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginModel } from '../../models/login.model';

@Component({
  selector: 'rp-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.less'],
})
export class LoginFormComponent implements OnInit {
  @Output() entrar = new EventEmitter<LoginModel>();
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
    var dados: LoginModel = {
      idPizzaria: '',
      userId: this.loginForm.get('usuario').value,
      userSenha: this.loginForm.get('senha').value,
    };
    this.entrar.emit(dados);
  }
}
