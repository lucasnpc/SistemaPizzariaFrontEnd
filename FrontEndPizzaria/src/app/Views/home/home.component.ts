import { Component, OnInit } from '@angular/core';
import { AddPizzariaFormComponent } from '../add-pizzaria-form/add-pizzaria-form.component'
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  addPizzaria(): void{
    const dialogRef = this.dialog.open(AddPizzariaFormComponent,{minWidth:'400px'});
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog fechado');
    });
  }

  listarPizzaria(){
    console.log('');
  }

}
