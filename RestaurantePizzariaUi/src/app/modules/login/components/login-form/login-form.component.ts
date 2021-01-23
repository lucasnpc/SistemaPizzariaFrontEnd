import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validateFormFields } from 'src/app/core/utils/form-helper';
import { LoginModel } from '../../models/login.model';

@Component({
  selector: 'rp-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.less'],
})
export class LoginFormComponent implements OnInit {
  @Output() entrar = new EventEmitter<LoginModel>();

  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      usuario: [{ value: '', disabled: false }, [Validators.required]],
      senha: [{ value: '', disabled: false }, [Validators.required]],
    });
  }

  submitLogin() {
    validateFormFields(this.loginForm);
    
    if (this.loginForm.valid) {
      var dados: LoginModel = {
        idPizzaria: "",
        userId: this.loginForm.get('usuario').value,
        userSenha: this.loginForm.get('senha').value,
      }
      this.entrar.emit(dados);
    }
  }
}
