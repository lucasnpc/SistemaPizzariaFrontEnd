import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validateFormFields } from 'src/app/core/utils/form-helper';

@Component({
  selector: 'rp-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.less'],
})
export class LoginFormComponent implements OnInit {
  @Output() entrar = new EventEmitter<{ usuario: string; senha: string }>();

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
      var dados = {
        usuario: this.loginForm.get('usuario').value,
        senha: this.loginForm.get('senha').value,
      }
      this.entrar.emit(dados);
    }
  }
}
