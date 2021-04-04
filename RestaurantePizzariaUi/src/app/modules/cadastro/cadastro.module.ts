import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import { CadastroPage } from './pages/cadastro-page/cadastro.page';
import { CadastroRoutingModule } from './cadastro-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CadastroNegocioFormComponent } from './components/cadastro-negocio-form/cadastro-negocio-form.component';
import { CadastroUsuarioFormComponent } from './components/cadastro-usuario-form/cadastro-usuario-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    CadastroPage,
    CadastroNegocioFormComponent,
    CadastroUsuarioFormComponent,
  ],
  imports: [
    CommonModule,
    CadastroRoutingModule,
    MatStepperModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  providers: [],
})
export class CardapioModule {}
