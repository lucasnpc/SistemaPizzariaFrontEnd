import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { BusinessStorage } from 'src/app/core/utils/business-storage';
import { BUSINESS_CNPJ } from 'src/app/core/utils/constants';
import { Provider } from '../../models/provider.model';
import { ProvidersService } from '../../services/fornecedores.service';

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

  constructor(private fb: FormBuilder, private storage: BusinessStorage, private service: ProvidersService,
    public dialogRef: MatDialogRef<AddProviderDialogComponent>,
  ) { }

  ngOnInit(): void {
  }

  addProvider() {
    var data: Provider = {
      providerCnpj: this.formRegisterProviders.get('providerCnpj').value,
      businessCnpj: this.storage.get(BUSINESS_CNPJ),
      corporateName: this.formRegisterProviders.get('corporateName').value,
      street: this.formRegisterProviders.get('street').value,
      number: this.formRegisterProviders.get('number').value,
      district: this.formRegisterProviders.get('district').value,
      city: this.formRegisterProviders.get('city').value,
      state: this.formRegisterProviders.get('state').value,
      phone: this.formRegisterProviders.get('phone').value,
      email: this.formRegisterProviders.get('phone').value
    }

    this.service.postProvider(data).subscribe(result => {
      if (result.success) this.dialogRef.close(true)
    })
  }

}
