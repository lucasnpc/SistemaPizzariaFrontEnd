import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddNegocioFormComponent } from 'src/app/Forms/add-negocio-form/add-negocio-form.component';
import { LogarSistemaFormComponent } from 'src/app/Forms/logar-sistema-form/logar-sistema-form.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home_page.component.html',
  styleUrls: ['home_page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  cadastrarNegocio(): void{
    const dialogRef = this.dialog.open(AddNegocioFormComponent,{minWidth:'400px'});
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog Cadastro Fechado');
    });
  }

  logarSistema(){
    const dialogRef = this.dialog.open(LogarSistemaFormComponent, {minWidth:'400px'});
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog Login Fechado');
    });
  }
}
