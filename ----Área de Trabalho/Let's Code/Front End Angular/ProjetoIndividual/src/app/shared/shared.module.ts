import { PagesModule } from './../pages/pages.module';
import { PipeTransform } from '@angular/core';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AgePipe } from './pipes/age.pipe';
import { Router, RouterModule } from '@angular/router';
import { DialogComponent } from './dialog/dialog.component';



@NgModule({
  declarations: [
    HeaderComponent,
    AgePipe,
    DialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    AgePipe
  ]
})
export class SharedModule { }
