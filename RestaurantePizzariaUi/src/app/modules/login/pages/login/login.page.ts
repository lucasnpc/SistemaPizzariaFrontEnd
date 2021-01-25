import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from '../../models/login.model';
import { LoginService } from '../../services/login.service';

@Component({
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.less'],
})
export class LoginPage implements OnInit {
  constructor(private rest: LoginService, private router: Router) { }

  ngOnInit(): void { }

  logarSistema(login: LoginModel) {
    this.rest.authUser(login).subscribe(result => {
      if (result)
        this.router.navigate(['/menu/vendas']);
    }, error => { console.log(error); alert("Usuário inválido"); });
  }
}
