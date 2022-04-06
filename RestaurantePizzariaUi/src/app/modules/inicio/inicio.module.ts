import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioPage } from './pages/inicio/inicio.page';
import { InicioRoutingModule } from './inicio-routing.module';
import { InicioService } from './services/inicio.service';
import { SharedModule } from '../shared/shared.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    InicioPage
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    SharedModule,
    MatGridListModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [InicioService]
})

export class InicioModule { }
