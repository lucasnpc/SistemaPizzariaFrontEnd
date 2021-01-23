import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './Components/home_page/home_page.component'

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { AddNegocioFormComponent } from './Forms/add-negocio-form/add-negocio-form.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { LogarSistemaFormComponent } from './Forms/logar-sistema-form/logar-sistema-form.component';
import { AddUserFormComponent } from './Forms/add-user-form/add-user-form.component';
import { MenuPageComponent } from './Components/menu-page/menu-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AddNegocioFormComponent,
    LogarSistemaFormComponent,
    AddUserFormComponent,
    MenuPageComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
