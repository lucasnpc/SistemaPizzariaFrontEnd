import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'rp-add-provider-dialog',
  templateUrl: './add-provider-dialog.component.html',
  styleUrls: ['./add-provider-dialog.component.less']
})
export class AddProviderDialogComponent implements OnInit {

  formRegisterProviders = this.fb.group({
    providerCnpj: ['', Validators.required],
    corporateName: ['', Validators.required],
    street: ['', Validators.required],
    number: ['', Validators.required],
    district: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    phone: ['', Validators.required],
    email: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
