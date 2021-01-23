import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-logar-sistema-form',
  templateUrl: './logar-sistema-form.component.html',
  styleUrls: ['./logar-sistema-form.component.css']
})
export class LogarSistemaFormComponent implements OnInit {

  public form!: FormGroup;
  isAutenticado: boolean = false;
  userLogin: any = {};

  constructor(
    public dialogRef: MatDialogRef<LogarSistemaFormComponent>,
    private fb: FormBuilder,
    private restApi: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      userId: ['', [Validators.required]],
      userSenha: ['', [Validators.required]],
      idPizzaria: ['', '']
    });
  }

  public logar() {
    this.restApi.authUser(this.form.value).subscribe(result => {
      if (result) {
        localStorage.setItem('Usuário Logado', JSON.stringify(result));
        this.isAutenticado = true;
        this.router.navigate(['/menu']);
        this.dialogRef.close();
      }
      else {
        alert('Usuário inválido');
      }
    }, error => {
      console.log(error); alert('Usuário inválido');
    })
  }

  public sair() {

  }

}
