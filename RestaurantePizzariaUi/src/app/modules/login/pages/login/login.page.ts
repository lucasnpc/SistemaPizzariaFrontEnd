import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario.model';
import { LoginService } from '../../services/login.service';

@Component({
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.less'],
})
export class LoginPage implements OnInit {
  constructor(private rest: LoginService, private router: Router) {}

  ngOnInit(): void {}

  logarSistema(login: Usuario) {
    this.rest.authUser(login).subscribe(
      (result) => {
        console.log(result);
        
        if (result) this.router.navigate(['/menu/dashboard']);
      },
      (error) => {
        console.log(error);
        alert('Usuário inválido');
      }
    );
  }
}
