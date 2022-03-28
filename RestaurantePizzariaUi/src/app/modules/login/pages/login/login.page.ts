import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusinessStorage } from 'src/app/core/utils/business-storage';
import { User } from '../../models/usuario.model';
import { LoginService } from '../../services/login.service';

@Component({
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.less'],
})
export class LoginPage implements OnInit {
  constructor(private rest: LoginService, private router: Router, private storage: BusinessStorage) { }

  ngOnInit(): void { }

  logarSistema(login: User) {
    this.rest.authUser(login).subscribe(
      (result) => {
        console.log(result);
        if (result) {
          this.storage.set('businessCnpj', result.data.businessCnpj)
          this.storage.set('userRole', result.data.userType)
          this.router.navigate(['/menu/dashboard']);
        }
      },
      (error) => {
        console.log(error);
        alert('Usuário inválido');
      }
    );
  }
}
