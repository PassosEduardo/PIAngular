import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { PagesModule } from './../pages/pages.module';
import { PipeTransform } from '@angular/core';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AgePipe } from './pipes/age.pipe';
import { Router, RouterModule } from '@angular/router';
import { DialogComponent } from './dialog/dialog.component';
import { PlayerFormComponent } from './player-form/player-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    AgePipe,
    DialogComponent,
    PlayerFormComponent,
    EditDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    AgePipe,
    DialogComponent,
    PlayerFormComponent,
    EditDialogComponent

  ]
})
export class SharedModule { }
