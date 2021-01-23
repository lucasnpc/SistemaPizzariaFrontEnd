import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.less'],
})
export class LoginPage implements OnInit {
  constructor(private rest: LoginService, private router: Router) {}

  ngOnInit(): void {}

  logarSistema(usuario: { usuario: string; senha: string }) {
    this.rest.authUser(usuario);
  }
}
