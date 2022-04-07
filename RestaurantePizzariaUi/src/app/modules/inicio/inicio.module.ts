import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioPage } from './pages/inicio/inicio.page';
import { InicioRoutingModule } from './inicio-routing.module';
import { InicioService } from './services/inicio.service';
import { SharedModule } from '../shared/shared.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { OpenDeskComponent } from './components/open-desk/open-desk.component';
import { ChooseDeskComponent } from './components/choose-desk/choose-desk.component';
import { CreateOrderComponent } from './components/create-order/create-order.component';

@NgModule({
  declarations: [
    InicioPage,
    OpenDeskComponent,
    ChooseDeskComponent,
    CreateOrderComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    SharedModule,
    MatGridListModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatTabsModule
  ],
  providers: [InicioService]
})

export class InicioModule { }
