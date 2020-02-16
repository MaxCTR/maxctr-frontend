import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MainLayoutComponent } from './main-layout.component';
import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [MainLayoutComponent, HeaderComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MainLayoutRoutingModule,
    MatIconModule
  ]
})
export class MainLayoutModule { }
