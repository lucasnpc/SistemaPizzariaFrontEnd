import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddNegocioFormComponent } from '../Forms/add-negocio-form/add-negocio-form.component'
import { LogarSistemaFormComponent } from '../Forms/logar-sistema-form/logar-sistema-form.component'


@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css']
})
export class PaginaInicialComponent implements OnInit {

  constructor(
    public dialog: MatDialog
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
