import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutMenuComponent } from './components/layout-menu/layout-menu.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [LayoutMenuComponent, SidebarComponent],
  imports: [CommonModule, RouterModule, MatButtonModule, MatIconModule, MatToolbarModule],
  exports: [LayoutMenuComponent],
})
export class SharedModule {}
