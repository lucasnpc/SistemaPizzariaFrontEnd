import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NegocioService } from 'src/app/Service/negocio.service';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-add-negocio-form',
  templateUrl: './add-negocio-form.component.html',
  styleUrls: ['./add-negocio-form.component.css']
})
export class AddNegocioFormComponent implements OnInit {

  public form!: FormGroup;
  uuidValue!: string;


  constructor(
    public dialogRef: MatDialogRef<AddNegocioFormComponent>,
    private fb: FormBuilder,
    private restApi: NegocioService
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
    this.restApi.postNegocios(this.form.value).subscribe(result => { });
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
