import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { PizzariaService } from 'src/app/Service/pizzaria.service';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-add-pizzaria-form',
  templateUrl: './add-pizzaria-form.component.html',
  styleUrls: ['./add-pizzaria-form.component.css']
})
export class AddPizzariaFormComponent implements OnInit {

  public form!: FormGroup;
  uuidValue!: string;


  constructor(
    public dialogRef: MatDialogRef<AddPizzariaFormComponent>,
    private fb: FormBuilder,
    private restApi: PizzariaService,
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      idPizzaria:     this.generateUUID(),
      nomePizzaria:   ['', [Validators.required]],
      ruaPizzaria:    ['', [Validators.required]],
      numeroPizzaria: ['', [Validators.required]],
      bairroPizzaria: ['', [Validators.required]],
      cidadePizzaria: ['', [Validators.required]],
      estadoPizzaria: ['', [Validators.required]]
    });
  }

  addPizzaria() {
    this.restApi.postPizzarias(this.form.value).subscribe(result => { });
    this.dialogRef.close(true);
  }

  cancel() {
    this.dialogRef.close(true);
    this.form.reset();
  }

  generateUUID(){
    this.uuidValue=UUID.UUID();
    return this.uuidValue;
  }

}
